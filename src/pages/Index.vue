<template>
    <DefaultLayout>
        <parallax class="section page-header header-filter" :style="headerStyle">
            <div class="container">
                <div class="md-layout">
                    <div class="md-layout-item md-size-70 md-small-size-70 md-xsmall-size-100">
                        <h1 class="title">op kot bij de directeur</h1>
                        <vue-typed-js
                                :strings="catchphrases"
                                :loop="true"
                        >
                            <h2>
                                <span class="typing"/>
                            </h2>
                        </vue-typed-js>
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
                default: require("~/assets/img/gevel_zonnige_dag_met_wolken_2.jpg")
            }
        },
        computed: {
            catchphrases() {
                return [
                    "Da's op kot gaan in een historisch kader",
                    "Da's op kot gaan in alle luxe en comfort",
                    "Da's op kot gaan in <span class='red'>♥</span>je Leuven"
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
    .red {
        color: red
    }
</style>