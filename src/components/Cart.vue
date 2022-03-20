<template>
  <div>
    <v-container>
      <p>{{ s }}</p>
      <v-row id="cartBox">
        <v-col cols="12">
          <v-card>
            <v-app-bar color="grey darken-4" dense dark>
              <v-row align="center" justify="space-between" class="px-3">
                <h3>Cart Calculation ({{ s }})</h3>
                <v-btn
                  tile
                  color="red"
                  style="border-radius: 3px"
                  class="text-capitalize"
                  @click="$emit('ลบข้อมูลทั้งหมด')"
                >
                  <v-icon left> mdi-delete </v-icon>
                  Delete All
                </v-btn>
              </v-row>
            </v-app-bar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: ["s"],
  data() {
    return {
      x: [1, 2, 3],
    };
  },
};
</script>

<style></style>
