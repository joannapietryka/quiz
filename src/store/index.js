import axios from 'axios';

const store = {
  state: {
    quote: []
  },
  async fetchQuote() {
    this.state.quote = await axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes').then(res => res.data);
  },
  filerQuotes(item){
    const authors = ["Walter White", "Jesse Pinkman", "Saul Goodman"];
      if(authors.indexOf(this.state.quote[0].author)){
        this.state.quote.push(item);
    } else {
      this.state.quote = false;
    }
  }
};

export default store;