// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/scss/theme.scss'
import DefaultLayout from '~/layouts/Default.vue'
import VueTypedJs from 'vue-typed-js'

export default function (Vue, { router, head, isClient }) {
  // Vue plugins
  Vue.use(VueTypedJs)

  // html attrs
  head.htmlAttrs = { lang: 'nl' };

  // fonts
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poiret+One%7cPT+Mono%7cPT+Serif:400,400i%7cLato:100,300,400,700,800,900' });

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}
