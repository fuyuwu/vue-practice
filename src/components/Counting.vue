<template>
  <div id="CountingComponent">
    <p @click="counter += 1">你已經按下了{{ counter }}次</p>
    <p @click="counter += 1">你已經按下了{{ counter }}次</p>
    <!-- 元件分開寫就對了 -->
    <CounterComponent/>
    <CounterComponent/>
    <CounterComponent/>
  </div>
</template>

<script lang="ts">

import CounterComponent from './Counter.vue'

export default {
  name: 'CountingComponent',
  components: {
    CounterComponent
  },
  data() {
    return {
      counter: 0
    }
  }
}
</script>