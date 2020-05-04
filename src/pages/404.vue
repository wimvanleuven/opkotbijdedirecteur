<template>
    <DefaultLayout>
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
                            <h1 class="title index-title">404</h1>
                            <vue-typed-js
                                    :strings="catchphrases"
                                    :loop="true"
                                    :startDelay="1000"
                            >
                                <h2 id="typed-banner">
                                    <span class="typing"/>
                                </h2>
                            </vue-typed-js>
                        </div>
                    </div>
                </div>
            </div>
        </parallax>
    </DefaultLayout>
</template>

<script>
    import DefaultLayout from "~/layouts/Default.vue"

    export default {
        metaInfo: {
            title: "Home"
        },
        bodyClass: "login-page",
        components: {
            DefaultLayout
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
                    "page not found",
                    "pagina niet gevonden",
                    "page non trouvée ",
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