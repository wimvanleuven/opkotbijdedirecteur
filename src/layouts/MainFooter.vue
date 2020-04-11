<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <md-list-item>
            <a href="https://facebook.com/opkotbijdedirecteur/" target="_blank">
              <font-awesome :icon="['fab', 'facebook-square']" class="fab"/>
              <p class="hidden-lg">Facebook</p>
              <md-tooltip md-direction="top">Like us on Facebook</md-tooltip>
            </a>
          </md-list-item>
          <md-list-item>
            <a href="https://instagram.com/opkotbijdedirecteur/" target="_blank">
              <font-awesome :icon="['fab', 'instagram']" class="fab"/>
              <p class="hidden-lg">Instagram</p>
              <md-tooltip md-direction="bottom">Follow us on Instagram</md-tooltip>
            </a>
          </md-list-item>
          <md-list-item>
            <a href="https://messenger.com/t/opkotbijdedirecteur/" target="_blank">
              <font-awesome :icon="['fab', 'facebook-messenger']" class="fab"/>
              <p class="hidden-lg">Messenger</p>
              <md-tooltip md-direction="bottom">Text us on Messenger</md-tooltip>
            </a>
          </md-list-item>
          <md-list-item>
            <a href="https://goo.gl/maps/ZeQDoiy3RCFApYV4A/" target="_blank">
              <font-awesome :icon="['fas', 'map-marker-alt']" class="fab"/>
              <p class="hidden-lg">Google Maps</p>
              <md-tooltip md-direction="bottom">Find us on Google Maps</md-tooltip>
            </a>
          </md-list-item>
        </ul>
      </nav>
      <div class="copyright">
        &copy; 2018 - {{ year }}
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data() {
      return {
        year: new Date().getFullYear()
      };
    }
  };
</script>

<style>

</style>
