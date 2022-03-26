<template>
  <div>
    <v-container>
      <v-row id="cartBox">
        <v-col cols="12">
          <v-card>
            <v-app-bar color="grey darken-4" dense dark>
              <v-row align="center" justify="space-between" class="px-3">
                <h3>Cart Calculation</h3>
                <v-btn
                  title
                  color="red"
                  style="border-radius: 3px"
                  class="text-capitalize"
                  @click="$emit('ลบข้อมูลทั้งหมด')"
                >
                  <v-icon left> mdi-delete </v-icon>
                  Delete All
                </v-btn>
                <v-btn color="orange" @click="readdata()">Read</v-btn>
              </v-row>
            </v-app-bar>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Action</th>
                    <th class="text-left">Product</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Price</th>
                    <th class="text-left">Qty</th>
                    <th class="text-left">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in dbdata" :key="index">
                    <td>
                      <v-hover color="red">
                        <v-btn
                          color="red accent-1"
                          elevation="2"
                          dark
                          small
                          class="white--text px-0 py-0"
                          min-width="35"
                          height="35"
                          @click="$emit('deleteCartItem', index)"
                        >
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </v-hover>
                    </td>
                    <td>
                      <v-img :src="item.image" width="70" />
                    </td>
                    <td>${{ item.title }}</td>
                    <td>${{ item.price }}</td>
                    <td
                      class="d-flex justify-center align-center"
                      style="height: 100%"
                    >
                      <div
                        class="d-flex flex-column justify-center align-center"
                      >
                        <v-icon
                          slot="append"
                          color="green"
                          style="cursor: pointer"
                          @click="$emit('incrementCart', index)"
                        >
                          mdi-plus
                        </v-icon>
                        <input
                          type="text"
                          :value="item.count"
                          class="text-center"
                        />
                        <v-icon
                          slot="prepend"
                          color="red"
                          style="cursor: pointer"
                          @click="$emit('minusCart', index)"
                        >
                          mdi-minus
                        </v-icon>
                      </div>
                    </td>
                    <td class="orange--text">${{ item.price * item.count }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-simple-table>
              <template v-slot:default>
                <tbody v-for="(item, index) in dbdata" :key="index">
                  <tr class="orange lighten-5">
                    <th>Sub Total</th>
                    <td class="red--text font-weight-bold">${{ cartTotal }}</td>
                  </tr>
                  <tr class="green lighten-4">
                    <th>Total</th>
                    <td class="green--text font-weight-bold">
                      ${{ cartTotal }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from "../plugins/firebaseinit";
import { collection, getDocs } from "firebase/firestore";

export default {
  props: ["s"],
  data() {
    return {
      dbdata: [],
    };
  },
  methods: {
    async readdata() {
      const querySnapshot = await getDocs(collection(db, "product"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.dbdata.push(doc.data());
      });
    },
  },
};
</script>

<style></style>
