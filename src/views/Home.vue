<template>
  <div class="home">
    <b-container fluid>
    <b-row>

    <b-col cols=1>
    <!-- 位置合わせ用 -->
    </b-col>

    <b-col cols=10>
      <b-tabs>
        <b-tab title="uni">
          <Selector target="uni"></Selector>
        </b-tab>
        <b-tab title="infra">
          <Selector target="infra"></Selector>
        </b-tab>
        <b-tab title="fabric">
          <Selector target="fabric"></Selector>
        </b-tab>
      </b-tabs>
    </b-col>

    </b-row>
    </b-container>
  </div>
</template>

<script>
import Selector from '@/components/Selector.vue'

export default {
  name: 'Home',
  data: function() {
      return {
          selected: undefined,
      };
  },
  components: {
      Selector,
  }
}
</script>
