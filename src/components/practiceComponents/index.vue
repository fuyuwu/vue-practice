<template>
  <div v-if="isShow" id="practice">
    <HelloWorld msg="Hello World" />
    <InputComponent />
    <ChangeClass />
    <CheckboxesComponent />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import InputComponent from './InputComponent.vue'
import ChangeClass from './ChangeClass.vue'
import CheckboxesComponent from './CheckBoxes.vue'

export default {
  name: 'PracticeComponents',
  components: {
    HelloWorld,
    InputComponent,
    ChangeClass,
    CheckboxesComponent
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style scoped>
#practice {
  color: #fff;
}
</style>
