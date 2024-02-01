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
    getProfile() {
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
  mounted() {
    this.getProfile();
  },
};
</script>

<template>
  <Home />
  <div class="container d-flex">
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
        <router-link :to="{ name: 'show' }" class="btn btn-primary"
          >Vai alla show</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";
</style>
