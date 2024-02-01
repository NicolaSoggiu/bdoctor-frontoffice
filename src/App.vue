<script>
import axios from "axios";
import { store } from "./store";
import Home from "./components/Home.vue";

export default {
  components: {
    Home,
  },
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
        });
      } catch (error) {
        console.log("error", this.is404);
      }
    },
  },
};
</script>

<template>
  <Home />
  <div
    v-for="(profile, index) in profilesData"
    :key="index"
    class="card"
    style="width: 18rem"
  >
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ profile.services }}</h5>
      <p class="card-text">
        {{ profile.address }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
