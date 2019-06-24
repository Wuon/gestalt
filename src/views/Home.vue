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
import HelloWorld from "@/components/HelloWorld.vue";
import json from "@/quotes.json";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  quotes: any = json.quotes;
  cur: number = 1;
  length: number = this.quotes.length;
  quote: any = this.quotes[0];
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
