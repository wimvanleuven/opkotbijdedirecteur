import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faEnvelope, faCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF, faInstagram, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

library.add(faHeart, faEnvelope, faFacebook, faFacebookF, faInstagram, faFacebookMessenger, faCircle);

export default function (Vue) {
    Vue.component('font-awesome', FontAwesomeIcon);
    Vue.component('font-awesome-layers', FontAwesomeLayers);
};