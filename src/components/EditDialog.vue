<template>
  <div v-show="dialogVisitable" id="dialog">
    <div class="container">
      <div class="dialogTitle">{{ title }}</div>
      <div class="dialogContainer">
        <table class="dialogTable">
          <tr>
            <th>1</th>
            <td>td</td>
            <td>td</td>
            <td>td</td>
          </tr>
          <tr>
            <th>2</th>
            <td>td</td>
            <td>td</td>
            <td>td</td>
          </tr>
          <tr>
            <th>3</th>
            <td>td</td>
            <td>td</td>
            <td>td</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="dialogFooter">
      <button class="cancel" @click="close">cancel</button>
      <button class="confirm" @click="onSubmit">confirm</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EditDialog',
  props: {
    title: {
      type: String,
      default: 'Dialog'
    },
    dialogVisitable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    onSubmit() {
      this.close()
    }
  }
}

</script>

<style scoped style="scss">
#dialog {
  position: fixed;
  z-index: 2;
  background-color: #eeee;
  width: 80vw;
  height: 80vh;
}

.container {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dialogTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #eeee;
}

.dialogContainer {
  display: flex;
}

.dialogTable {
  border-collapse: collapse;
  /* display: flex; */
  background-color: cadetblue;
}

.dialogFooter {
  display: flex;
  justify-content: flex-end;
  margin: 15px;
  position: absolute;
  right: 0;
  bottom: 0;
}

.dialogFooter button {
  margin: 10px;
}
</style>