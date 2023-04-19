<template>
  <div id="CountingComponent">
    <p @click="counter += 1">你已經按下了{{ counter }}次</p>
    <p @click="counter += 1">你已經按下了{{ counter }}次</p>
    <counter-component></counter-component>
    <counter-component></counter-component>
    <counter-component></counter-component>
    <!-- TODO:為何沒出現啊 -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
Vue.component('counter-component', {
  data() {
    return {
      counter: 0
    }
  },
  template: `<div><p @click="counter+=1">你已經按下了{{ counter }}次</p></div>`
})
export default {
  name: 'CountingComponent',
  data() {
    return {
      counter: 0
    }
  }
}
</script>