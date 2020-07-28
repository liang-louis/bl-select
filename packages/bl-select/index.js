import BlSelect from './src/bl-select'
// const BlSelect = {
//   install: (vue) => {
//     vue.component('bl-select', BlSelectComp)
//   }
// }
BlSelect.install = function(Vue) {
  Vue.component('bl-select', BlSelect)
}
export default BlSelect
