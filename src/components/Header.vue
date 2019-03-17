<template>

    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-sparrow" :style="{ backgroundColor: background }">
        <div class="container">
            <a class="navbar-brand row" href="index.html">
                <img class="align-middle" src="@/assets/img/logo-white.svg" alt="opkotbijdedirecteur" height="35" />
                <h1 class="text-uppercase align-middle mx-3">op kot bij de directeur</h1>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown1" aria-controls="navbarNavDropdown1" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown1">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="koten.html">Koten</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="historiek.html">Historiek</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="praktisch.html">Praktisch</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>
    export default {
        data: function() {
            return {
                background: 'rgba(0, 0, 0, 0)',
            }
        },
        methods: {
            handleScroll(event, el) {
                const scrollPos = window.scrollY;
                const windowHeight = window.innerHeight;
                let alpha = (scrollPos / windowHeight) * 2;

                (alpha >= 1) && (alpha = 1);
                this.background = `rgba(0, 0, 0, ${alpha})`;
            }
        },
        created: function() {
            window.addEventListener('scroll', this.handleScroll, { passive: true })
        },
        destroyed: function() {
            window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>
