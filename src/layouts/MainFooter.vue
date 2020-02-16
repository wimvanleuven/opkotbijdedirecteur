<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="/legal/terms">
              Terms
            </a>
          </li>
          <li>
            <a href="/legal/privacy">
              Privacy
            </a>
          </li>
          <li>
            <a href="/legal/cookies">
              Cookies
            </a>
          </li>
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
