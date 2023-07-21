<template>
  <div id="app">
    <div class="appContainer">
      <div>
        <button class="btn" @click="practiceStatus = !practiceStatus">練習</button>
        <button class="btn" @click="openDialog = !openDialog">編輯</button>
        <button class="btn" @click="tabStatus = !tabStatus">TabList</button>
        <button class="btn" @click="carouselStatus = !carouselStatus">Slider</button>
      </div>
      <div class="componentsBlock">
        <PracticeComponents v-if="practiceStatus" :isShow="practiceStatus" />
        <EditDialog v-if="openDialog" :dialogVisitable="openDialog" @close="handleStatus" />
        <Tabs v-if="tabStatus" :childTabs="tabStatus" />
      </div>
    </div>
  </div>
</template>

<script>
import PracticeComponents from './components/practiceComponents/index'
import EditDialog from './components/EditDialog'
import Tabs from './components/Tabs'

export default {
  name: 'App',
  components: {
    PracticeComponents,
    EditDialog,
    Tabs
  },
  data() {
    return {
      practiceStatus: false,
      openDialog: false,
      tabStatus: false,
      carouselStatus: false
    }
  },
  watch: {
    practiceStatus(newVal) {
      if (newVal) {
        this.openDialog = false
        this.tabStatus = false
        this.carouselStatus = false
      }
    },
    openDialog(newVal) {
      if (newVal) {
        this.practiceStatus = false
        this.tabStatus = false
        this.carouselStatus = false
      }
    },
    tabStatus(newVal) {
      if (newVal) {
        this.practiceStatus = false
        this.openDialog = false
        this.carouselStatus = false
      }
    },
    carouselStatus(newVal) {
      if (newVal) {
        this.practiceStatus = false
        this.openDialog = false
        this.tabStatus = false
      }
    }
  },
  methods: {
    handleStatus() {
      this.openDialog = false
    }
  }
}
</script>

<style>
body {
  background-color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 0;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.appContainer {
  display: flex;
}

.appContainer > div {
  display: flex;
  flex-direction: column;
}

.componentsBlock {
  position: relative;
}

.test {
  color: red;
  font-size: 22px;
}

button {
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

button.cancel {
  background-color: #fff;
}

button.confirm {
  background-color: rgb(253, 143, 0);
  color: #fff;
}

.btn {
  margin: 20px;
}
</style>
