<template>
    <Layout :fullscreen="true">

        <!-- ============================================-->
        <!-- <section> begin ============================-->
        <section class="py-0 text-center" id="bigcartel-header">

            <div class="bg-holder overlay overlay-1" >
                <!--<div class="bg-youtube" data-property='{"videoURL":"https://www.youtube.com/watch?v=iZmwFlg8zqA","startAt":0,"stopAt":120,"mute":true,"showYTLogo":false}'></div>-->
                <g-image src="@/assets/img/headers/header-1.jpg"></g-image>
            </div>
            <!--/.bg-holder-->

            <div class="container">
                <div class="row min-vh-100 justify-content-center align-items-center py-8">
                    <div class="col-lg-7">
                        <img class="img-fluid" src="@/assets/img/bigcartel.png" alt=""/>
                        <div class="overflow-hidden mb-4">
                            <p class="text-white px-lg-6 text-sans-serif">Join nearly a million makers, designers, marketers, and business owners using sparrow to build their outstanding websites.</p>
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
