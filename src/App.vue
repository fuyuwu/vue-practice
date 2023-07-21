<template>
  <div id="app">
    <img width="20" height="20" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <InputComponent />
    <ChangeClass />
    <CheckboxesComponent />
    <CountingComponent />
    <hr>
    <StyleComponent />

  <table class="table">
    <thead></thead>
    <tbody>
      <new-component
        v-for="(item, key) in data"
        :item="item"
        :key="key"
      ></new-component>
    </tbody>
  </table>
</div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import InputComponent from './components/InputComponent.vue'
import ChangeClass from './components/ChangeClass.vue'
import CheckboxesComponent from './components/CheckBoxes.vue'
import CountingComponent from './components/Counting.vue'
import StyleComponent from './components/StyleComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    InputComponent,
    ChangeClass,
    CheckboxesComponent,
    CountingComponent,
    StyleComponent
  }
}
</script>

<script type="text/x-template" id="newComponent">
  <tr>
    <td>{{ item.name }}</td>
    <td>{{ item.cash }}</td>
    <td>{{ item.icash }}</td>
  </tr>
</script>

<style type="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
  overflow-y: auto;
}

.test {
  color: red;
  font-size: 22px;
}
</style>
