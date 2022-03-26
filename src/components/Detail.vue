<template>
  <v-container>
    <v-card class="mx-auto" max-width="7000" v-for="(item, i) in pd" :key="i">
      <v-card-text v-if="i + 1 == productid">
        <h2 class="text-center black--text my-5">{{ item.title }}</h2>
        <v-img :src="item.image"></v-img>
        <h2 class="red--text my-5">Brand: {{ item.brand }}</h2>
        <h2 class="orange--text my-5">Category: {{ item.category }}</h2>
        <div class="my-5">
          <h4 class="black--text">{{ item.description }}</h4>
        </div>
        <h1 class="my-5 red--text">Price: ฿{{ item.price }}</h1>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["pd"],

  data() {
    return {
      productid: this.$route.params.id,
    };
  },
};
</script>

<style></style>
