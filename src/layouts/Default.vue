<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>

    <slot/>

    <Footer/>
  </div>
</template>

<script>
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
      Footer
    }
  }
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
</style>
