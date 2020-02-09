<template>
    <DefaultLayout class="wrapper">
        <parallax class="section page-header header-filter" :style="headerStyle">
            <div class="container">
                <div class="md-layout">
                    <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
                        <h1 class="title">Your Story Starts With Us.</h1>
                        <h4>
                            Every landing page needs a small description after the big bold
                            title, that's why we added this text here. Add here all the
                            information that can make you or your product create the first
                            impression.
                        </h4>
                        <br />
                        <button
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                class="md-success md-lg"
                                target="_blank"
                        ><i class="fas fa-play"></i> Watch video</button
                        >
                    </div>
                </div>
            </div>
        </parallax>
    </DefaultLayout>
</template>

<script>
    import DefaultLayout from '~/layouts/Default.vue'
    import Parallax from '~/components/Parallax.vue'

    export default {
        metaInfo: {
            title: 'Home'
        },
        bodyClass: "landing-page",
        components: {
            DefaultLayout,
            Parallax
        },
        props: {
            header: {
                type: String,
                default: require("~/assets/img/bg7.jpg")
            }
        },
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`
                };
            }
        }
    }
</script>