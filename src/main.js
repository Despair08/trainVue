import Vue from 'vue'
import App from './App.vue'

const requiredComponents = require.context(
    '.',
    false,
    /Base[A-Z]\w+\.(vue|js)$/
);
requiredComponents.keys().forEach(name => {
  const componentConfig = requiredComponents(name);
  const componentName = name
      .replace(/^\.\/_/, '')
      .replace(/\.\w+$/, '')
      .split('-')
      .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
      .join('')

  Vue.component(componentName, componentConfig.default || componentConfig)
});

new Vue({
  render: h => h(App),
}).$mount('#app')
