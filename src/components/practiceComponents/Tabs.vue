<template>
  <div id="tabs">{{ msg }}</div>
</template>

<script lang="ts">
export default {
  name: 'TabComponent',
  props: {
    msg: String
  }

}
</script>