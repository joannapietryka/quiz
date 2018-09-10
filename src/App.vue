<template>
  <div id="app">
  <Question :quote="sharedState.quote"></Question>
  <Answer :quote="sharedState.quote"></Answer>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
import Question from './components/Question.vue';
import Answer from './components/Answer.vue';
import store from './store';
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Question,
    Answer
  },
  created() {
    store.fetchQuote();
  },
  data() {
    return {
      sharedState: store.state
    }
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
