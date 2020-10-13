<template>
    <DefaultLayout>
        <div class="wrapper">
            <parallax class="section page-header header-filter" :style="headerStyle">
                <div class="container">
                    <div class="md-layout md-alignment-center-center">
                        <div class="md-layout-item md-size-30 md-small-size-30 md-xsmall-size-60">
                            <g-image src="~/assets/img/logo/logo-white.svg"/>
                        </div>
                    </div>
                    <div class="md-layout md-alignment-center">
                        <div class="md-layout-item md-size-70 md-small-size-75 md-xsmall-size-100">
                            <div class="text-center">
                                <h1 class="title index-title">op kot bij de directeur</h1>
                                <vue-typed-js
                                        :strings="catchphrases"
                                        :loop="true"
                                        :startDelay="1000"
                                        :smartBackspace="false"
                                >
                                    <h2 id="typed-banner">
                                        da's op kot gaan <span class="typing"/>
                                    </h2>
                                </vue-typed-js>
                            </div>
                        </div>
                    </div>
                </div>
            </parallax>
            <div class="main main-raised">
                <div class="section">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-md8 ml-auto mr-auto">
                                <h2 class="title">op kot in alle luxe en comfort</h2>
                                <h5>

                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>

<script>
    import DefaultLayout from "~/layouts/Default.vue"
    import Parallax from '~/components/Parallax.vue'

    export default {
        metaInfo: {
            title: "Home"
        },
        bodyClass: "landing-page",
        components: {
            DefaultLayout,
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
                    " in een historisch kader",
                    " in alle luxe en comfort",
                    " in <span style='color:red'>♥</span>je Leuven"
                ]
            },
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`,
                    backgroundPosition: "center top"
                };
            }
        }
    }
</script>

<style scoped>
    #typed-banner {
        /* to preven the banner from jumping around on small screens */
        min-height: 3em;
        width: 100%;
    }
</style>