<template>
  <div>
    <p @click="counter += 1">你已經按下了{{ counter }}次</p>
  </div>
</template>
<script lang="ts">
export default {
  name: 'CounterComponent',
  data() {
    return {
      counter: 0,
    }
  },
}
</script>
