<template>
  <div class="home">
    <p>{{quote.date}}</p>
    <h1>{{quote.msg}}</h1>
    <p>{{quote.context}}</p>
    <h5>- {{quote.owner}}</h5>
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
  quote: any = this.quotes[0];
}
</script>
