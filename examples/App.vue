<template>
  <div id="app">
    <bl-select
      v-model="value"
      clearable
      collapse-tags
      :options="options"
      :props="{
        value: 'value',
        label: 'label'
      }"
      field-disabled="disabled"
      @change="change"
      @select-all="selectAll"
      @remove-tag="removeTag"
      @on-option="getOption"
    />
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      value: '',
      options: [{
        value: '1',
        label: '黄金糕',
        disabled: true
      }, {
        value: '2',
        label: '双皮奶'
      }, {
        value: '3',
        label: '北京糖葫芦'
      }, {
        value: '4',
        label: '蚵仔煎'
      }, {
        value: '5',
        label: '龙须面'
      }, {
        value: '6',
        label: '北京烤鸭'
      }],
      allText: '全选'
    }
  },
  methods: {
    getOption(row) {
      console.log(row)
    },
    selectAll() {
      if (this.value.length < this.options.length) {
        this.value = []
        this.options.forEach(item => {
          this.value.push(item.value)
        })
        this.value.unshift(this.allText)
      }
    },
    change(val) {
      // console.log(val)
      if (!val.includes(this.allText) && this.value.length === this.options.length) {
        this.value.unshift(this.allText)
      } else if (val.includes(this.allText) && val.length - 1 < this.options.length) {
        this.value = this.value.filter(item => item !== this.allText)
      }
    },
    removeTag(val) {
      if (val === this.allText) {
        this.value = []
      }
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
