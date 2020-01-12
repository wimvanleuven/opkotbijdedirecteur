<template>

    <div class="vh-100 vw-100" :class="{ 'min-vh-100': fullscreen }">

        <Header></Header>

        <!-- ===============================================-->
        <!--    Main Content-->
        <!-- ===============================================-->
        <main role="main" class="container-fluid m-0 p-0" :class="{ 'min-vh-100': fullscreen }" id="top">

            <slot></slot>

        </main>
        <!-- ===============================================-->
        <!--    End of Main Content-->
        <!-- ===============================================-->

        <Social></Social>
        <Footer></Footer>
    </div>

</template>


<script>
    import Header from '~/components/Header.vue'
    import Social from '~/components/Social.vue'
    import Footer from '~/components/Footer.vue'

    export default {
        props: ['fullscreen'],
        components: {
            Header, Social, Footer
        }
    }
</script>


<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>


<style>
</style>
