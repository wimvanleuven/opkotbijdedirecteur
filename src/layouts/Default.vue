<template>
    <div id="material-kit">
        <div>
            <div>
                <slot/>
            </div>
            <MainFooter/>
        </div>
    </div>
</template>

<script>
    import MainFooter from './MainFooter.vue'

    export default {
        props: ['fullscreen'],
        components: {
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