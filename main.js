// Inizializzazione dell'app Vue per la Home Page
new Vue({
    el: '#app',

    data: {
        showScrollTop: false,
    },
    mounted() {
        AOS.init();

        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {

        handleScroll() {
            this.showScrollTop = window.scrollY > 300;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
    },
    beforeDestroy() {
        
        window.removeEventListener('scroll', this.handleScroll);
    },
});
  