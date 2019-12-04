<template>
  <div class="Launcher">
    <div 
        v-for="(value, name) in attributes" 
        class="FormBlock" 
        v-bind:key="name"
    >
      <b-form-group 
          :label="name+ ':'"
          label-align="left"
      >
      <b-row>

        <b-col cols='1'> 
          <b-form-checkbox v-model="value.active"></b-form-checkbox>
        </b-col> 
        <b-col cols='11'> 
          <b-form-input 
              v-model="value.value" 
              :disabled="!value.active"
          ></b-form-input>
        </b-col> 
      </b-row>
      </b-form-group>
    </div>
    <b-button 
        variant="dark" 
        v-on:click="commit" 
        v-if="Object.keys(attributes).length > 0"
    >Send</b-button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Launcher',
  props: {
      attributes: Object,
      object: Object,
  },
  methods: {
      // objectに操作したattributesを結合(formObject)し、送信。
      commit: async function() {
          // 元データは更新しない。assignでクローン作成してから送信する。
          const formObject = Object.assign({}, this.object);
          const attr = formObject[Object.keys(formObject)[0]].attributes;

          // Selecterでフォーム用に整形したattributesを元に戻す。
          const newAttr = {}
          Object.keys(attr).forEach((k) => {
              if (attr[k].active) {
                  newAttr[k] = attr[k].value;
              }
          });
          formObject[Object.keys(formObject)].attributes = newAttr;

          const result = await axios.post(process.env.VUE_APP_APIC_URL + '/', formObject);
          alert(result.data.text);

      }
  },
}
</script>
