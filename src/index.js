import Button from './components/button';

const version = '0.0.1'
const components = [Button];

const install = Vue => {
  if (install.installed) return;

  components.forEach(component => Vue.component(component.name, component));
};
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Button
}
export default {
  install,
  version
}
