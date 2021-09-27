import { createApp } from 'vue'

import Module from './Module.vue'

for (const el of document.getElementsByClassName('vue-module')) {

  createApp({
    template: el.innerHTML,
    components: {
      Module
    }
  }).mount(el)
}
