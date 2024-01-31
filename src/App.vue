<script>
import axios from "axios";
import { store } from "./store";

export default {
  data() {
    return {
      store,
      profilesData: [],
      profiloUno: [],
      is404: false,
    };
  },
  methods: {
    getApartment() {
      try {
        axios.get(this.store.baseUrl + "profiles").then((response) => {
          this.profilesData = response.data;
          this.profiloUno = response.data[0];
          console.log("response", this.profilesData);
          console.log("profiloUno", this.profiloUno);
        });
      } catch (error) {
        console.log("error", this.is404);
      }
    },
  },
};
</script>

<template>
  <h1 class="text-decoration-underline">Ciao</h1>
  <div>{{ getApartment() }}</div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
