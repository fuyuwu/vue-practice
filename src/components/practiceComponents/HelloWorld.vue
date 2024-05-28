<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <form>
      <input v-model="text" type="text" @keypress.native="reverseText">
    </form>
    <div>{{ reverseText }}</div>
    <!-- <div v-html="rawHtml" class='text'>{{ rawHtml }}</div> -->
    <!-- 直接使用 v-html 會易造成xss攻擊 -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      text: '',
      // rawHtml: `<span class='text'>用html呈現文字</span>`
    }
  },
  computed: {
    reverseText: function () {
      if (!this.text) return
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
}

.text {
  color: red;
}
</style>
