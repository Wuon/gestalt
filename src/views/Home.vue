<template>
  <div class="quote-container" v-touch:tap="nextQuote">
    <div class="quote-top">
      <p>{{quote.id}} / {{length}}</p>
    </div>
    <div class="quote-middle">
      <h1>"{{quote.msg}}"</h1>
      <p>{{quote.context}}</p>
      <h5>- {{quote.owner}}</h5>
    </div>
    <div class="quote-bottom">
      <p>{{quote.date}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Quote } from '@/abstracts/quote';
import json from '@/quotes.json';

@Component({
  components: {},
})
export default class Home extends Vue {
  quotes: Quote[] = json.quotes;

  cur: number = 0;

  length: number = this.quotes.length;

  quote: Quote = this.quotes[0];

  mounted() {
    this.cur = Math.floor(Math.random() * Math.floor(this.length));
    this.quote = this.quotes[this.cur];
  }

  nextQuote() {
    if (this.cur + 1 >= this.length) {
      this.cur = 0;
    } else {
      this.cur += 1;
    }
    this.quote = this.quotes[this.cur];
  }
}
</script>

<style scoped>
.quote-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  align-content: flex-start;
}
.quote-middle,
.quote-top,
.quote-bottom {
  padding: 25px;
}
@media only screen and (max-width: 1000px) {
  .quote-container {
    height: calc(100vh - 50px);
    text-align: left;
  }
}
</style>
