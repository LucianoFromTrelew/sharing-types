<template>
  <div id="app">
    {{ data }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { APIIndexRouteResponse } from "@/server";

@Component({})
export default class App extends Vue {
  data: APIIndexRouteResponse | null = null;
  async mounted() {
    const res = await fetch("/api");
    this.data = (await res.json()) as APIIndexRouteResponse;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
