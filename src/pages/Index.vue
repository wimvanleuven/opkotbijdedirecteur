<template>
    <Layout :fullscreen="true">

        <!-- ============================================-->
        <!-- <section> begin ============================-->
        <section class="py-0 text-center" id="index-header">

            <div class="bg-holder overlay overlay-1" >
                <!--<div class="bg-youtube" data-property='{"videoURL":"https://www.youtube.com/watch?v=iZmwFlg8zqA","startAt":0,"stopAt":120,"mute":true,"showYTLogo":false}'></div>-->
                <g-image src="@/assets/img/header-index.jpg"></g-image>
            </div>
            <!--/.bg-holder-->

            <div class="container">
                <div class="row min-vh-100 justify-content-center align-items-center py-8">
                    <div class="col-lg-7">
                        <img class="img-fluid" style="border-width: 4px !important" src="@/assets/img/logo-circle-white.svg" alt="opkotbijdedirecteur" width="200"/>
                        <p class="title-brand display-4 text-uppercase my-2">op kot bij de directeur</p>
                        <div class="overflow-hidden mb-4">
                            <p class="text-white px-lg-6 text-sans-serif">dat is op kot gaan in een historisch kader <br/>met alle luxe en comfort <br/>in <font-awesome class="text-danger mx-1 fs--1" :icon="['fas', 'heart']"></font-awesome>je Leuven.</p>
                        </div>
                    </div>
                </div>
                <a class="indicator indicator-down" href="#target-down"><span class="indicator-arrow indicator-arrow-one"></span><span class="indicator-arrow indicator-arrow-two"></span></a>
            </div>
            <!-- end of .container-->

        </section>

        <!-- scroll target to move next section to the top of the screen on clicking arrows down -->
        <div id="target-down"></div>
        <!-- <section> close ============================-->
        <!-- ============================================-->




    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Hello, world!'
        }
    }
</script>

<style>
</style>
