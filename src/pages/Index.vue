<template>
    <DefaultLayout>
        <parallax class="section page-header header-filter" :style="headerStyle">
            <div class="container">
                <div class="md-layout">
                    <div class="md-layout-item md-size-70 md-small-size-70 md-xsmall-size-100">
                        <h1 class="title">opkotbijdedirecteur</h1>
                        <h2>
                            <vue-typed-js
                                :strings="catchphrases"
                                :loop="true"
                            >
                                <span class="typing" />
                            </vue-typed-js>
                        </h2>
                    </div>
                </div>
            </div>
        </parallax>
    </DefaultLayout>
</template>

<script>
    import MainNavbar from '~/layouts/MainNavbar.vue'
    import DefaultLayout from '~/layouts/Default.vue'
    import Parallax from '~/components/Parallax.vue'

    export default {
        metaInfo: {
            title: 'Home'
        },
        bodyClass: "login-page",
        components: {
            DefaultLayout,
            MainNavbar,
            Parallax
        },
        props: {
            header: {
                type: String,
                default: require("~/assets/img/bg7.jpg")
            }
        },
        computed: {
            catchphrases() {
                return [
                    "In een historisch kader.",
                    "In alle luxe en comfort.",
                    "In <red>♥</red>je Leuven."
                ]
            },
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`
                };
            }
        }
    }
</script>

<style>
red {
    color: red
}
</style>