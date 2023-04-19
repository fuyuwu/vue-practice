<template>
  <div id="Checkboxes">
    <div>what is your favorite animals?<span v-for="item, i in checkboxArray" :key="i"> {{ item }} </span></div>
    <form class="form-control">
      <div class="form-check">
        <input id="checkbox1" type="checkbox" v-model="checkboxArray" value="狗" />
        <label for="checkbox1">狗</label>
      </div>
      <div class="form-check">
        <input id="checkbox2" type="checkbox" v-model="checkboxArray" value="貓" />
        <label for="checkbox2">貓</label>
      </div>
      <div class="form-check">
        <input id="checkbox3" type="checkbox" v-model="checkboxArray" value="馬" />
        <label for="checkbox3">馬</label>
      </div>
      <div class="form-check">
        <input id="checkbox4" type="checkbox" v-model="checkboxArray" value="虎" />
        <label for="checkbox4">虎</label>
      </div>
    </form>
    

  </div>
</template>

<script>

export default {
  name: 'CheckboxesComponent',
  data() {
    return {
      checkboxArray: []
    }
  }
}
</script>

<style>
#Checkboxes {
  padding-bottom: 20px;
  border-bottom: 1px solid #aaa;
}
</style>