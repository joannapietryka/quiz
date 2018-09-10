<template>
<div>
    <button v-on:click="checkId" id="Walter"></button> 
    <button v-on:click="checkId" id="Jesse"></button>
    <button v-on:click="checkId" id="Saul"></button>
    <h2>{{messgae}}</h2>
    <p v-if="show">It was {{quote[0].author}}</p>
</div>
</template>

<script>
export default {
  name: 'Answer',
  props: {
    quote: Array,
  },
   data() {
    let data = {
        messgae: "Can you guess who said it?",
        show: false
    };
    return data;
  },
  methods: {
      checkId(event){
        let id = event.target.id;
        let who = this.quote[0].author;
        const body = document.querySelector('body');
        event.target.classList.add('active');
          this.show = true;
           setTimeout(function(){
             location.reload()
            }, 2000);
        if(who.includes(id)){
           this.messgae = "Yes! It's him";
            body.classList.add('good');
        } else {
           this.messgae = "It's NOT him";
            body.classList.add('wrong');
        }
      }
  }
}
</script>
<style>
body {
    background: #ccd3ee;
}
body.wrong {
    background: #ec9984;
}
body.good {
    background: #8de380;
}
button {
    height: 300px;
    width: 300px;
    background-position: center center;
    margin: 3em 1em;
    outline: none;
    border-radius: 5px;
}
button:hover {
    transform: scale(1.1);
}
button.active {
    border: 3px solid #7289DA;
    transform: scale(1.1);
}
#Walter {
    background-image: url(../assets/walter.png);
}
#Jesse {
    background-image: url(../assets/jessie.png);
}
#Saul {
    background-image: url(../assets/saul.png);
}
</style>
