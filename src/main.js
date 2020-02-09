// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import VueMaterial from "vue-material";
import VueLazyload from "vue-lazyload";
import VueCarousel from "vue-carousel";
import { VPopover } from "v-tooltip";
import { directive as vClickOutside } from "vue-clickaway";

import "vue-material/dist/vue-material.min.css";
import "@/assets/scss/material-kit.scss";
import "@/assets/demo.css";

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

  // directives
  Vue.directive("click-outside", vClickOutside);

  // setup
  Vue.use(VueMaterial);
  Vue.use(VueCarousel);
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
