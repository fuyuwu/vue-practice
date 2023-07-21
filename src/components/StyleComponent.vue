<template lang="">
  <div class='my-4'>
    <div class='box' :style="[styleObj1, styleObj2]"></div>
    <div class='box' :class="{whiteBg: !whiteBg}"></div>
    <button @click="classObj['bg-[#ffff]'] = true" class='rounded-md p-4 bg-green-700 text-white w-full'>CLICK</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'StyleComponent',
  data() {
    return {
      classObj: {
        'text-[#982323]': false,
        'whiteBg': false,
      },
      primaryClass: 'rounded-[10px]',
      activeClass: false,
      // :style (寫成 inline style)
      styleObj1: {
        borderWidth: '3px',
        borderColor: '#aaa'
      },
      // :style="[a, b]" (複數 style)
      styleObj2: {
        boxShadow: '0px 0px 3px 2px rgba(0, 0, 0, 0.16)'
      },

    }
  }
}
</script>
<style>
  .box {
    width: 100px;
    height: 100px;
    border: 1px solid #aaa;
  }
  .box.whiteBg {
    background-color: white;
  }
</style>