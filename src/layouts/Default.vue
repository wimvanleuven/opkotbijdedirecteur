<template>

    <div class="vh-100 vw-100" :class="{ 'min-vh-100': fullscreen }">

        <header class="header">
            <strong>
                <g-link to="/">{{ $static.metaData.siteName }}</g-link>
            </strong>
            <nav class="nav">
                <g-link class="nav__link" to="/">Home</g-link>
                <g-link class="nav__link" to="/about">About</g-link>
            </nav>
        </header>

        <!-- ===============================================-->
        <!--    Main Content-->
        <!-- ===============================================-->
        <main role="main" class="container-fluid m-0 p-0" :class="{ 'min-vh-100': fullscreen }" id="top">
            <slot></slot>
        </main>
        <!-- ===============================================-->
        <!--    End of Main Content-->
        <!-- ===============================================-->

        <Links></Links>
        <Footer></Footer>
    </div>

</template>


<script>
    import Preloader from '~/components/Preloader.vue'
    import Links from '~/components/Links.vue'
    import Footer from '~/components/Footer.vue'

    export default {
        props: ['fullscreen'],
        components: {
            Preloader, Links, Footer
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
