<template>
  <div id="CountingComponent" class="my-4">
    <h2>元件寫在一起會同步</h2>
    <p @click="counter += 1">你已經按下了{{ counter }}次</p>
    <p @click="counter += 1">你已經按下了{{ counter }}次</p>
    <!-- 元件分開寫就對了 -->
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