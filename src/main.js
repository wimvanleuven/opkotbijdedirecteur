import VueGtag from "vue-gtag";
import VueMaterial from "vue-material";
import VueLazyload from "vue-lazyload";
import VueTypedJs from 'vue-typed-js';
import { VPopover } from "v-tooltip";
import { directive as vClickOutside } from "vue-clickaway";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faInstagram, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import '@fortawesome/fontawesome-svg-core/styles.css'
import "vue-material/dist/vue-material.min.css";
import "@/assets/scss/material-kit.scss";

config.autoAddCss = false;
library.add(faFacebookSquare, faInstagram, faFacebookMessenger, faMapMarkerAlt);

export default function (Vue, { router, head, isClient }) {
  // conf
  Vue.config.productionTip = false;
  const NavbarStore = {
    showNavbar: false
  };

  // html attrs
  head.htmlAttrs = { lang: 'nl' };

  // fonts
  head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons' });

  // components
  Vue.component("v-popover", VPopover);
  Vue.component('font-awesome', FontAwesomeIcon);

  // directives
  Vue.directive("click-outside", vClickOutside);

  // setup
  Vue.use(VueGtag, {
    config: { id: 'UA-127335862-1' },
  }, router)
  Vue.use(VueMaterial);
  Vue.use(VueTypedJs);
  Vue.use(VueLazyload, {
    observer: true,
    // optional
    observerOptions: {
      rootMargin: "0px",
      threshold: 0.1
    }
  });

  // mixins
  Vue.mixin({
    data() {
      return {
        NavbarStore
      };
    },
    mounted() {
      let { bodyClass } = this.$options;
      if (bodyClass) {
        document.body.classList.add(bodyClass);
      }
    },
    beforeDestroy() {
      let { bodyClass } = this.$options;
      if (bodyClass) {
        document.body.classList.remove(bodyClass);
      }
    }
  });
}
