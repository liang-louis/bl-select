<template>
  <el-select
    ref="blSelect"
    v-model="newValue"
    :filterable="filterable"
    :multiple="multiple"
    :filter-method="filterMethod"
    v-bind="$attrs"
    :value-key="props.value"
    :disabled="disabled"
    :clearable="clearable"
    v-on="$listeners"
    @focus="onFocus"
  >
    <el-option
      v-if="multiple && all"
      :label="allText"
      :value="allText"
      @click.native="selectAll"
    />
    <el-option
      v-for="item in optionsData"
      :key="item[props.value]"
      v-bind="$attrs"
      :disabled="!!item[fieldDisabled]"
      :label="item[props.label]"
      :value="row ? item : item[props.value]"
      @click.native="getOption(item)"
    />
  </el-select>
</template>

<script>
import PinyinMatch from 'pinyin-match'

export default {
  name: 'BlSelect',
  props: {
    value: {
      type: [String, Number, Array, Object],
      default: ''
    },
    multiple: {
      type: Boolean,
      default: false
    },
    // 是否全选
    all: {
      type: Boolean,
      default: false
    },
    allText: {
      type: String,
      default: '全选'
    },
    filterable: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: false
    },
    // select禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // option禁用字段
    fieldDisabled: {
      type: String,
      default: ''
    },
    // 列表数据
    options: {
      type: Array,
      default: () => [],
      required: true
    },
    // option属性
    props: {
      type: Object,
      default: () => {
        return {
          value: 'value',
          label: 'label'
        }
      },
      required: true
    },
    // value是否为对象
    row: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      copyOptions: [],
      optionsData: []
    }
  },
  computed: {
    newValue: {
      set(val) {
        this.$emit('input', val)
      },
      get() {
        return this.value
      }
    }
  },
  watch: {
    options: {
      handler(val) {
        this.optionsData = val
        this.copyOptions = JSON.parse(JSON.stringify(val))
      },
      immediate: true
    }
  },
  mounted() {

  },
  methods: {
    getOption(row) {
      this.$emit('on-option', row)
    },
    selectAll() {
      this.$emit('select-all')
    },
    onFocus() {
      this.optionsData = this.copyOptions
    },
    filterMethod(val) {
      this.optionsData = this.copyOptions
      this.optionsData = this.optionsData.filter(item => PinyinMatch.match(item[this.props.label], val))
    },
    onChange(val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped>

</style>
