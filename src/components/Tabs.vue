<template>
  <div v-show="childTabs" class="tabBox">
    <div v-for="(item, key) in TabList" :key="key" class="tabList" @click="onClick(item.id)">
      <div :class="currentTab === item.id ? 'active' : ''">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Tabs',
  props: {
    childTabs: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      TabList: [
        { id: 1, text: 'AAA' },
        { id: 2, text: 'BBB' },
        { id: 3, text: 'CCC' },
      ],
      currentTab: 1
    }
  },
  methods: {
    onClick(id) {
      this.currentTab = id
    }
  }
}

</script>

<style scoped>
.tabBox {
  display: flex;
  width: 100%;
  color: yellowgreen;
}

.tabList {
  display: flex;
  justify-content: space-around;
}

.tabList div {
  padding: 10px 30px;
  margin: 0 15px;
  background-color: #eeee;
  border-radius: 10px;
  cursor: pointer;
}

.tabList div.active {
  background-color: yellowgreen;
  color: #eee;
}
</style>