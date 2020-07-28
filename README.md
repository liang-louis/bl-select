# bl-select

### 基于element UI下el-select的拼音检索
需要装 elementUI
### 安装
`npm i bl-select`
### 使用
在main.js加
```
import BlSelect from 'bl-select'
Vue.use(BlSelect)
```
使用的地方   
template部分
```
<bl-select
    v-model="value"
    :options="options"
    :props="{label:'label', value:'value'}"
/>
```
js部分
```js
data() {
      return {
        value: '',
        options: [
          {
            label: '张三',
            value: 1
          },
          {
            label: '李四',
            value: 2
          }
        ]
      }
    }
```
### 属性Props 

属性 | 类型 | 默认值 | 说明
---|---|---|---
multiple | Boolean | false|是否多选，默认单选
filterable | Boolean | true |是否支持检索，默认true，无需配置。功能已经实现
clearable | Boolean | false | 是否可清空 同el-select
disabled | Boolean | false | 是否禁用bl-select
optionDisabled | Boolean | false | 是否禁用 option项（是否禁用el-option）
options | Array | - | 列表数据
row | Boolean |false | 是否选中option（设置该值后，change方法会打印一个包含options(列表数据)的某一项）
props | Object | - | label和value的配置 见下表

## props（label、value配置）
属性 | 值
---|---
label | 设置label
value | 设置的value

## 方法
方法名 | 说明
---|---
change| 返回 value的值。如果设置了row 则返回一个对象

