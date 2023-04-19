<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <InputComponent />
    <ChangeClass />
    <CheckboxesComponent />
    <CountingComponent/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputComponent from './components/InputComponent.vue'
import ChangeClass from './components/ChangeClass.vue'
import CheckboxesComponent from './components/CheckBoxes.vue'
import CountingComponent from './components/Counting.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputComponent,
    ChangeClass,
    CheckboxesComponent,
    CountingComponent
  }
}
</script>

<style type="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow-y: auto;
}

.test {
  color: red;
  font-size: 22px;
}
</style>
