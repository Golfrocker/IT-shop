<template>
  <v-container>
    <v-card class="mx-auto" max-width="7000" v-for="(item, i) in pd" :key="i">
      <v-card-text v-if="i + 1 == productid">
        <h1 class="text-center orange--text my-5">{{ item.title }}</h1>
        <v-img :src="item.image"></v-img>
        <div class="my-5">
          <h4>{{ item.description }}</h4>
        </div>
        <h1 class="my-5">Category: {{ item.category }}</h1>
        <h1 class="my-5">Price: {{ item.price }}</h1>
        <h1 class="my-5">rating:{{ item.rating.rate }} ({{ item.rating.count }})</h1>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
//import Shop from "../views/Shop.vue";
export default {
  props: ["pd"],

  data() {
    return {
      productid: this.$route.params.id,
    };
  },
  //components: { Shop },
};
</script>

<style></style>
