<template>
  <v-app>
    <v-img
      src="https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-115978/lg-logo.jpg"
    >
      <v-app-bar
        app
        color="grey darken-4"
        dark
        shrink-on-scroll
        prominent
        src="https://fi.lnwfile.com/_/fi/_raw/tn/vi/wi.jpg"
        fade-img-on-scroll
        scroll-threshold="500"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(255,255,255,.7), rgba(255,0,0,.7)"
          ></v-img>
        </template>
        <v-btn to="/" text color="white" class="mt-10">
          <v-img
            src="https://itshop.ba/wp-content/uploads/2021/01/it-shop-logo-bez-pozadine.png"
            max-width="400"
          ></v-img>
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn to="/" text>
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn to="/Login" text>
          <span class="mr-2">Login</span>
        </v-btn>
        <v-btn to="/about" text>
          <span class="mr-2">About</span>
        </v-btn>
        <v-btn to="/shop" text>
          <span class="mr-2">Shop</span>
        </v-btn>
        <v-btn to="/cart" text>
          <v-icon dark> mdi-cart </v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet> </v-sheet>

      <v-main>
        <router-view @cart="addToCart" :s="cart" />
      </v-main>
    </v-img>
  </v-app>
</template>

<script>
export default {
  components: {},
  name: "App",
  data: () => ({
    shop: [],
    cart: [1, 2, 3, 4],
  }),
  methods: {
    addToCart: function (cart) {
      this.cart.push(cart);
    },
  },
};
</script>
