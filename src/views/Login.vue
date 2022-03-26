<template>
  <v-container class="text-center">
    <v-card color="grey darken-1">
      <v-card-text>
        <div class="orange--text">
          <h1 class="my-5">Login</h1>

          <h2 class="my-5">
            User Name :
            <input type="email" required v-model="email" class="red--text" />
          </h2>

          <h2 class="my-5">
            Password :
            <input
              type="password"
              required
              v-model="password"
              class="red--text"
            />
          </h2>

          <v-btn @click="login()">Login</v-btn>

          <v-btn @click="googlelogin()">
            <v-img
              src="https://www.brandbuffet.in.th/wp-content/uploads/2019/05/Google-logo-tech.jpg"
              max-width="45"
            ></v-img>
          </v-btn>
        </div>
      </v-card-text>
      <v-btn @click="logout()">Logout</v-btn>
      <h1>Email : {{ email }}</h1>
      <h1>UID : {{ uid }}</h1>
    </v-card>
  </v-container>
</template>

<script>
import { auth } from "../plugins/firebaseinit";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      uid: "",
    };
  },
  mounted() {
    this.checklogin();
  },
  methods: {
    logout() {
      signOut(auth)
        .then(() => {
          this.$router.replace("/about");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    checklogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
          this.email = user.email;
          this.uid = user.uid;
        } else {
          alert("กรุณาเข้าสู่ระบบ");
          this.$router.replace("/login");
        }
      });
    },
    googlelogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log("Google Token=" + token);
          console.log(user);
          this.$router.replace("/shop");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
          //const email = error.email;
          //const credential = GoogleAuthProvider.credentialFromError(error);
        });
    },
    login() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("user", user);
          this.$router.replace("/shop");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "" + errorMessage);
        });
    },
  },
};
</script>

<style></style>
