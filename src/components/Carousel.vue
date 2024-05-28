<template>
  <div v-show="show">
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  }
}
</script>