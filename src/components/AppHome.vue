<script>
import axios from "axios";
import { store } from "../store";

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
        });
      } catch (error) {
        console.log("error", this.is404);
      }
    },
  },
  mounted() {
    this.getApartment();
  },
};
</script>

<template>
  <div class="d-flex">
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
        <div>
          <router-link :to="{ name: 'show' }">Vai alla show</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
