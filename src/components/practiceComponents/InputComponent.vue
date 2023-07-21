<template>
  <div id="inputComponent">
    <h1>InputComponent</h1>
    <p class="msg">Message is: {{ message }}</p>
    <div>
      <input v-model="message" type="text" class="form-control" @keyup.enter="reverseText">
      <button @click.prevent="reverseText">Reverse</button>
      <input :value="newMsg">
      <div>
        <input id="checkbox" v-model="checked" type="checkbox">
        <label for="checkbox">{{ checked }}</label>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

export default {
  name: 'InputComponent',
  data() {
    return {
      message: '',
      newMsg: '',
      checked: false,
      checkedNames: [],
      activeColor: 'red',
      fontSize: '10',
      isActive: false,
      error: {
        type: 'fatal'
      },
      colorText: ''
    }
  },
  methods: {
    reverseText: function (e) {
      console.log('e', e)
      console.log('this.message', this.message)
      this.newMsg = this.message.split('').reverse().join('')
      this.isActive = true
    }
  },
}
</script>

<style>
#inputComponent {
  padding-bottom: 20px;
  border-bottom: 1px solid #aaa;
}
.flex {
  display: flex;
  align-items: center;
}

.msg {
  color: brown;
}
</style>
