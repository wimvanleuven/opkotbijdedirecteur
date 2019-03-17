<template>
    <main role="main" class="container">

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

        <Footer></Footer>
    </main>

</template>

<script>
    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'

    export default {
        props: ['fullscreen'],
        components: {
            Header, Footer
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
