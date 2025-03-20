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
        previewText:[
            {
                id: 1,
                title: "Un modello basato su ambiente, persone, innovazione e governance",
                description: "Prysmian ha definito una strategia di sostenibilità strutturata su quattro pilastri: tutela ambientale, attenzione alle persone e alle comunità, innovazione responsabile e governance trasparente. L’azienda mira a ridurre del 47% le emissioni di CO₂ entro il 2030 e a raggiungere il net zero entro il 2050. Inoltre, promuove la diversità e l’inclusione, sviluppa soluzioni tecnologiche a basso impatto e agisce in coerenza con gli Obiettivi di Sviluppo Sostenibile (SDGs) delle Nazioni Unite. La sostenibilità è parte integrante del DNA aziendale, guidando ogni scelta verso un futuro più equo e resiliente.",
                img: "./img/Sezione1.webp",
                reverse: false,
                bgType: 1
            },
            {
                id: 2,
                title: "Dati concreti per una transizione sostenibile",
                description: "Prysmian investe ogni anno in progetti per ridurre l’impatto ambientale lungo tutta la catena del valore. Nel 2023 ha investito 25 milioni di euro, riducendo le emissioni di CO₂ e migliorando l’efficienza energetica. Il 98% dei siti è certificato ISO 14001, e l’azienda punta a utilizzare sempre più materiali riciclati, favorendo un’economia circolare. Prysmian monitora attentamente consumi energetici, emissioni, gestione dei rifiuti e uso dell’acqua, perseguendo l’obiettivo “zero discariche” entro il 2025 e salvaguardando la biodiversità con misure di protezione attiva.",
                img: "./img/Sezione2.webp",
                reverse: true,
                bgType: 1
            },
            {
                id: 3,
                title: "Persone al centro: inclusione, sicurezza e crescita",
                description: "Per Prysmian le persone sono un valore fondamentale. L’azienda promuove una cultura inclusiva attraverso il Manifesto DE&I (Diversità, Equità e Inclusione), garantendo pari opportunità e parità retributiva. L’impegno per la sicurezza è concreto, grazie al programma “Zero & Beyond” e agli audit specifici per valutare e migliorare la cultura della sicurezza. Entro il 2026, tutti gli stabilimenti saranno certificati ISO 45001. L’azienda forma e coinvolge i dipendenti a ogni livello, costruendo un ambiente di lavoro equo, sicuro e orientato al benessere collettivo.",
                img: "./img/Sezione3.webp",
                reverse: false,
                bgType: 2
            },
            {
                id: 4,
                title: "Innovazione green e fornitori responsabili",
                description: "Prysmian integra la sostenibilità anche nella catena di fornitura, scegliendo partner che condividano i propri valori ambientali e sociali. L’azienda investe in innovazioni green per creare soluzioni tecnologiche efficienti e a basso impatto, contribuendo attivamente alla transizione energetica globale. Ogni nuovo progetto viene sviluppato con attenzione all’ambiente, alla responsabilità sociale e alla riduzione delle emissioni lungo tutto il ciclo di vita dei prodotti.",
                img: "./img/Sezione4.webp",
                reverse: true,
                bgType: 2
            },
            {
                id: 5,
                title: "Una struttura chiara per guidare il cambiamento",
                description: "Per garantire coerenza ed efficacia nelle iniziative ESG, Prysmian ha definito una governance dedicata. Il Chief Sustainability Officer guida la strategia, supportato da comitati specifici e team locali che promuovono le iniziative a livello globale e territoriale. Il Sustainability Steering Committee e il Comitato di Sostenibilità assicurano il monitoraggio degli obiettivi e la trasparenza verso gli stakeholder. Questo modello decisionale permette a Prysmian di integrare la sostenibilità in ogni scelta aziendale.",
                img: "./img/Sezione5.webp",
                reverse: false,
                bgType: 1
            },
            {
                id: 6,
                title: "Proteggere i dati per un futuro sicuro",
                description: "Prysmian adotta misure avanzate per garantire la sicurezza informatica dei propri sistemi e dei dati. Con un Competence Center dedicato e una politica di monitoraggio continuo, l’azienda gestisce i rischi digitali e promuove la cultura della sicurezza tra i dipendenti, contribuendo così a una sostenibilità anche in ambito tecnologico e digitale.",
                img: "./img/Sezione6.webp",
                reverse: true,
                bgType: 1
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
  