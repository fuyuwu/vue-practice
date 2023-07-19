<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" @keypress="reverseText" v-model="text"/>
    <div>{{ reverseText }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      text: ''
    }
  },
  props: {
    msg: String
  },
  computed: {
    reverseText: function () {
      return this.text.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>
