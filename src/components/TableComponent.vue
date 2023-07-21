<template lang="">
  <div id="table-component">
    <new-component></new-component>
    <table class="table">
    <thead></thead>
    <tbody>
      <tr v-for="(item, key) in data" :item="item" :key="key">
        <td>{{ item?.name }}</td>
        <td>{{ item?.cash }}</td>
        <td>{{ item?.iCash }}</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>
<!-- <script type="text/x-template" id="newComponent"></script>
<script>
  Vue.component("new-component", {
    template: "#newComponent",
  });

  var app = new Vue({
    el: "#app",
    data: {
      data: [
        {
          name: "小明",
          cash: 100,
          iCash: 500,
        },
        {
          name: "杰倫",
          cash: 10000,
          iCash: 5000,
        },
        {
          name: "漂亮阿姨",
          cash: 500,
          iCash: 500,
        },
        {
          name: "老媽",
          cash: 10000,
          iCash: 100,
        },
      ],
    },
  });
</script> -->
<script lang="ts">
export default {
  name: 'TableComponent',
  data() {
    return {
      data: [
        {
          name: "小明",
          cash: 100,
          iCash: 500,
        },
        {
          name: "杰倫",
          cash: 10000,
          iCash: 5000,
        },
        {
          name: "漂亮阿姨",
          cash: 500,
          iCash: 500,
        },
        {
          name: "老媽",
          cash: 10000,
          iCash: 100,
        },
      ]
    }
  }

}
</script>
<style lang="">
  
</style>