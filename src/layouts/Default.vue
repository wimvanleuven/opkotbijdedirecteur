<template>
    <div id="material-kit">
        <div :class="{ 'nav-open': NavbarStore.showNavbar }">
            <MainNavbar/>
            <div>
                <slot/>
            </div>
            <MainFooter/>
        </div>
    </div>
</template>

<script>
    import MainNavbar from "./MainNavbar";
    import MainFooter from './MainFooter.vue'

    export default {
        props: ['fullscreen'],
        components: {
            MainNavbar,
            MainFooter
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

<style lang="scss">

</style>