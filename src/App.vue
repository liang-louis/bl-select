<template>
  <div id="app">
    <bl-select
      v-model="value"
      :options="options"
      :props="{
        value: 'value',
        label: 'label'
      }"
      @change="change"
    />
  </div>
</template>

<script>
import BlSelect from './components/index'

export default {
  name: 'App',
  components: {
    BlSelect
  },
  data() {
    return {
      value: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  methods: {
    change(val) {
      console.log(val)
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
