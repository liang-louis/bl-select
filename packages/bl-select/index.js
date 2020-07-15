import BlSelect from './src/bl-select'
// const BlSelect = {
//   install: (vue) => {
//     vue.component('bl-select', BlSelectComp)
//   }
// }
BlSelect.install = function(Vue) {
  Vue.component(BlSelect.name, BlSelect)
}
export default BlSelect
