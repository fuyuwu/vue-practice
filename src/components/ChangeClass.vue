<template>
  <div id="container">
    <h1>ChangeClass</h1>
    <div class="flex">
      <div class="box" :class="{ 'rotate': isActive }"></div>
      <button class="btn" @click="isActive = !isActive">我是按鈕！</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ChangeClass',
  data() {
    return {
      text: '',
      isActive: false
    }
  },
  // 不一定要寫method 簡單的話可以直接寫
  methods: {
    transformBox: function (e) {
      if (e.target) {
        this.isActive = !this.isActive
      }
    }
  },
  computed: {

  }
}
</script>

<style>
#container {
  padding-bottom: 20px;
  border-bottom: 1px solid #aaa;
  
}
.flex {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.box {
  transition: transform .5s;
  width: 80px;
  height: 80px;
  border: 1px solid #aaa;
}

.box.rotate {
  transform: rotate(45deg)
}

.btn {
  margin:20px;
  width: 80px;
  height: 45px;
  background-color: rgb(253, 143, 0);
  border: none;
  border-radius: 10px;
  color: #fff;

}
</style>