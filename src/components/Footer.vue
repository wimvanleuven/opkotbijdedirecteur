<template>

    <!--===============================================-->
    <!--    Footer-->
    <!--===============================================-->
    <footer class="footer bg-black text-600 py-4 text-sans-serif text-center overflow-hidden">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 order-lg-2">
                    <a class="indicator indicator-up" href="#top">
                        <span class="indicator-arrow indicator-arrow-one"></span>
                        <span class="indicator-arrow indicator-arrow-two"></span>
                    </a>
                </div>
                <div class="col-lg-4 text-lg-left mt-4 mt-lg-0">
                    <p class="fs--1 text-uppercase ls font-weight-bold mb-0">
                        opkotbijdedirecteur &copy; 2018 - {{ new Date().getFullYear() }}
                    </p>
                </div>
                <div class="col-lg-4 text-lg-right order-lg-2 mt-2 mt-lg-0">
                    <p class="fs--1 text-uppercase ls font-weight-bold mb-0">
                        <g-link class="text-600" to="/legal/privacy">Privacy</g-link> | <g-link class="text-600" to="/legal/disclaimer">Disclaimer</g-link>
                    </p>
                </div>
            </div>
        </div>
    </footer>

</template>
