import Vue from 'vue'
import App from './App.vue'

import Empty from './components/empty/empty';

Vue.config.productionTip = false

Vue.component(Empty.name,Empty);

new Vue({
  render: h => h(App),
}).$mount('#app')
