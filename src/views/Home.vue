<template>
  <div class="quote-container">
    <div class="quote-top">
      <p>{{cur}} / {{length}}</p>
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
import { Component, Vue } from "vue-property-decorator";
import json from "@/quotes.json";

@Component({
  components: {}
})
export default class Home extends Vue {
  quotes: [
    {
      id: number;
      date: string;
      owner: string;
      msg: string;
      context: string;
    }
  ] = json.quotes;

  cur: number = 1;

  length: number = this.quotes.length;

  quote: {
    id: number;
    date: string;
    owner: string;
    msg: string;
    context: string;
  } = this.quotes[0];

  constructor() {
    super();
    document.addEventListener("click", this.documentClick);
  }

  documentClick() {
    console.log("hello");
  }

  beforeDestroy() {
    document.removeEventListener("click", this.documentClick);
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
</style>
