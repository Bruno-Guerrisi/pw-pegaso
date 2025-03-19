// Inizializzazione dell'app Vue per la Home Page
new Vue({
    el: '#app',

    data: {
        highlights: [
            { 
                label: 'Donne impiegate assunte',
                value: '46%', 
                percentage: 46 
            },
            { 
                label: 'Dipendenti azionisti',
                value: '46%', 
                percentage: 72 
            },
            { 
                label: 'Ore di formazione pro capite',
                value: '35.7h', 
                percentage: 88 
            },
            { 
                label: 'Emissioni GHG',
                value: '- 33%', 
                percentage: 46 
            },
            { 
                label: 'Investimenti ambientali',
                value: '25mln €', 
                percentage: 72 
            },
            { 
                label: 'Riciclato su guaine in PE e rame',
                value: '12.7%', 
                percentage: 88 
            },
            { 
                label: 'Investimenti in ricerca e sviluppo',
                value: '128mln €', 
                percentage: 46 
            },
            { 
                label: 'Famiglie di prodotti lanciate nell\'anno',
                value: '258', 
                percentage: 72 
            },
            { 
                label: 'Ricavi da prodotti sostenibili',
                value: '37%', 
                percentage: 88 
            },
            { 
                label: 'Total Shareholder Return',
                value: '280.9%', 
                percentage: 72 
            },
            { 
                label: 'Totale donazioni effettuate dal gruppo',
                value: '2mln €', 
                percentage: 88 
            },
        ],
        showScrollTop: false,
        isDragging: false,
        startX: 0,
        currentX: 0,
        translateX: 0,
        previousTranslateX: 0,
    },
    mounted() {
        AOS.init();

        window.addEventListener('scroll', this.handleScroll);
        this.$nextTick(() => {
            const carousel = this.$refs.carousel;
            const wrapper = this.$refs.carouselWrapper;
        
            if (carousel && wrapper) {
                const carouselWidth = carousel.scrollWidth;
                const wrapperWidth = wrapper.offsetWidth;
                this.maxTranslateX = wrapperWidth - carouselWidth;
            }
        });
    },
    methods: {

        handleScroll() {
            this.showScrollTop = window.scrollY > 300;
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        getArcStyle(percentage) {
            const angle = percentage * 3.6; // Conversione della percentuale in gradi (360 * percentuale / 100)
            return {
                '--angle': angle + 'deg',
                background: `conic-gradient(#009fe3 0deg, #8dc63f ${angle}deg, transparent ${angle}deg 360deg)`
            };
        },
        
        // Funzione per iniziare il trascinamento del carosello
        startDrag(event) {
            this.isDragging = true;
            // Salva la posizione iniziale in base al tipo di evento (mouse o touch)
            this.startX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
            event.preventDefault(); // Previene la selezione del testo durante il drag
        },
        
        onDrag(event) {
            if (!this.isDragging) return;
            // Ottieni la posizione corrente del cursore o dito
            this.currentX = event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
            const movementX = this.currentX - this.startX;
            let newTranslateX = this.previousTranslateX + movementX;
        
            // Limita lo spostamento ai margini sinistro e destro
            if (newTranslateX > 0) {
                newTranslateX = 0;
            } else if (newTranslateX < this.maxTranslateX) {
                newTranslateX = this.maxTranslateX;
            }
        
            this.translateX = newTranslateX;
        },
        
        endDrag() {
            this.isDragging = false;
            // Salva la posizione finale per il prossimo drag
            this.previousTranslateX = this.translateX;
        },
        
        scrollLeft() {
            const wrapperWidth = this.$refs.carouselWrapper.offsetWidth;
            let newTranslateX = this.translateX + wrapperWidth / 2;
        
            if (newTranslateX > 0) newTranslateX = 0;
        
            this.translateX = newTranslateX;
            this.previousTranslateX = this.translateX;
        },
        
        scrollRight() {
            const wrapperWidth = this.$refs.carouselWrapper.offsetWidth;
            let newTranslateX = this.translateX - wrapperWidth / 2;
        
            if (newTranslateX < this.maxTranslateX) newTranslateX = this.maxTranslateX;
        
            this.translateX = newTranslateX;
            this.previousTranslateX = this.translateX;
        },
    },
    beforeDestroy() {
        
        window.removeEventListener('scroll', this.handleScroll);
    },
});
  