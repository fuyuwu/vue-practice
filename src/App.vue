<template>
  <div id="app">
    <div class="appContainer">
      <div class="flex align-middle justify-center">
        <img width="80" height="80" src="./assets/logo.png" alt="">
        <div class="flex flex-col">
          <button v-for="(item, key) in MAIN_TAB" :key="item.id + key" class="btn" @click="handleClickStatus(item.id)">{{ item.name }}</button>
        </div>
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
      carouselStatus: false,
      mainStatus: 'Practice',
      MAIN_TAB: [
        { id: 'Practice', name: '練習' },
        { id: 'Dialog', name: '編輯' },
        { id: 'Tabs', name: '頁籤們' },
        { id: 'Slider', name: 'Slider' },
      ]
    }
  },
  computed: {
    showContainer() {
      return this.MAIN_TAB.find(item => item.id === this.mainStatus)
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
    },
    handleClickStatus(status) {
      this.MAIN_TAB.forEach((item) => {
        if (item.id === status) {
          switch (status) {
            case 'Practice':
              this.practiceStatus = !this.practiceStatus
              break;
            case 'Dialog':
              this.openDialog = !this.openDialog
              break;
            case 'Tabs':
              this.tabStatus = !this.tabStatus
              break;
            case 'Slider':
              this.carouselStatus = !this.carouselStatus
              break;
            default:
              break;
          }
          this.mainStatus = status
        }
      })
    }
  }
}
</script>

<style>
body {
  background-color: #000000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d09706;
  margin: 60px;
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
  flex: 1;
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
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #2c3e50;
}

.btn.active {
  background-color: rgb(253, 143, 0);
  color: #fff;
}

.btn:hover {
  background-color: rgb(253, 143, 0);
  color: #fff;
}
</style>
