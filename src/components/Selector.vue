
<template>
  <div class="Selector">
    <b-row>

      <!-- 選択部 -->
      <b-col cols="6">
        <b-form-input
            v-model="filter"
            v-on:change="filterObjectIndex"
        ></b-form-input>
        <b-form-select
            v-model="selectedID"
            v-bind:options="filterd"
            :select-size="24"
            v-on:change="fetchObject"
        ></b-form-select>
      </b-col>

      <!-- 操作部 -->
      <b-col cols="6">
        <!-- fetchしたオブジェクトと属性をbindしてLauncherをレンダリング。 -->
        <Launcher 
            v-bind:object="object"
            v-bind:attributes="attributes"
        ></launcher>
      </b-col>

    </b-row>
  </div>
</template>

<script>
import Launcher from '@/components/Launcher.vue'
import { request } from '@/request.js'

export default {
  name: 'Selector',
  props: {
    // infra, uni, fabricのどれか。
    target: String,
  },
  data: function() {
    return {
      // ソースのオブジェクトインデックス。全データ格納する。
      source: [],

      // フィルターされたオブジェクトインデックス。
      filterd: [],

      // フィルター文字列。
      filter: "",

      // b-form-optionで選択値バインド。ここはBSONのIDが入る。
      selectedID: null,

      // 選択されたオブジェクトデータ。IDでfetchObjectして格納する。
      object: {},
      // 選択されたオブジェクトの属性データ。フォーム操作用として以下の形に整形。
      // {
      //   active: 属性を操作するかどうかのフラグ。
      //   value: 属性の値。
      // }
      attributes: {}
    };
  },
  methods: {
      // sourceをfilterでフィルタしてfilterdにぶち込む。
      filterObjectIndex: async function() {
          if(this.filter.length > 0) {
              this.filterd = this.source.filter((obj) => {
                  // 大文字小文字を区別しない。
                  return obj.text.toUpperCase().includes(
                      this.filter.toUpperCase()
                  );
              });
          }else {
              this.filterd = this.source;
          }
      },

      // selectedIDからオブジェクトの実体をkuninushiAPIからfetch.
      fetchObject: async function() {
          const res = await request.get(
              '/' + this.target + '/' + this.selectedID
          );

          // fetchしたオブジェクトからattributesを切り出し。
          const attr = res.data[Object.keys(res.data)[0]].attributes;

          // attributesをフォーム用に整形する。
          Object.keys(attr).forEach((k) => {
              const value = attr[k];
              let active = false;
              if(value.length > 0) {
                  active = true;
              }
              attr[k] = {
                  active: active,
                  value: value,
              }
          });

          this.object = res.data;
          this.attributes = attr;
      },
  },

  created: async function() {
      // 初期化。fetchObjectIndexやってthis.sourceにオブジェクトインデックスを展開。
      if(!this.$store.state.objectIndex.loaded) {
          await this.$store.dispatch("fetchObjectIndex");
      }

      this.source = this.$store.state.objectIndex[this.target];

      if(this.filter.length > 0) {
          this.filterd = this.source.filter((obj) => {
              return obj.text.toUpperCase().includes(
                  this.filter.toUpperCase()
              );
          });
      }else {
          this.filterd = this.source;
      }
  },
  components: {
      Launcher,
  },
}
</script>
