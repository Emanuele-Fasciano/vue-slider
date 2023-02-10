//inizializzo Vue
const app = Vue.createApp({
    data(){
        return{
           // creo un array di oggetti 
            slides : [
                {
                    image: './img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: './img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: './img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: './img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: './img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                },
                
            ],
            // variabile che tiene traccia dell'immagine attiva
            activeImage: 0
            
        }
    },

    // in "methods" scrivo tutte le funzioni
    methods: {
        prevImage() {  // visualizzare l'immagine precedente
            if(this.activeImage - 1 < 0){
               this.activeImage = this.slides.length;
            }
            this.activeImage--;
        },

        nextImage() {  // visualizzare l'immagine succesiva
            if (this.activeImage + 1 >= this.slides.length) {
                this.activeImage = 0;
            }else {
                this.activeImage++;
            }
        },

                // l'index è il parametro che contiene l'indice dell'immagine cliccata
        swithToImage(index) {  // sul click della thumb si visualizza l'immagine corrispondente
            this.activeImage = index;
        },

            // bloccare l'autoplay sull hover dello slider
        stopAutoplay() {
            clearInterval(this.autoplay)
        }

    },

    // in methods scrivo cosa deve avvenire "ON LOAD"
    created(){
        this.autoplay = setInterval(() =>{
            this.nextImage();
        }, 3000)
    },
    

});

app.mount("#root");