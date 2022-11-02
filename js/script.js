/*Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Utilizzare almeno una classe CSS in modo dinamico
Bonus:
1. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
2. Cambiare dinamicamente l’immagine
3. Al click di un bottone nascondere l’immagine e mostrare un testo
*/

const {createApp} = Vue;

createApp ({
  data(){
    return {
      imgShow: true,
      textShow: false,
      messaggio : 'ciao starting Blue',
      messaggioDue : 'ciao starting green',
      messaggioTre : 'ciao starting red',
      myClass : 'blue',
      myClassDue : 'green',
      myClassTre : 'red',
      percorsoImg : './img/01.jpg',
    }
  },
  methods: {
    capitalize(){
      this.myClass='text-cap';
    },
    uppercase(){
      this.myClassDue='text-uppercase';
    },
    purple(){
      this.myClassTre='purple'
    },
    changePic(pic){
      this.percorsoImg=pic
    },
    hideAndSeek(){
      this.imgShow = !this.imgShow;
      this.textShow = !this.textShow;      
    }
  }
}).mount('#app');