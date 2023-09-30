<template>
  <div v-if="loading"></div>
  <Admin v-else-if="authed" :do-logout="doLogout" />
  <div v-else class="login-wrapper">
    <v-card class="pa-12 pb-8 w-100" elevation="8" max-width="448" rounded="lg">
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        v-model="email"
        hide-details="auto"
      ></v-text-field>

      <v-text-field
        :append-inner-icon="visiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visiblePassword ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visiblePassword = !visiblePassword"
        v-model="password"
        hide-details="auto"
      ></v-text-field>

      <v-btn
        block
        class="mb-8 mt-8"
        color="blue"
        size="large"
        variant="tonal"
        @click="doLogin"
        :disabled="btnDisabled"
      >
        Log In
      </v-btn>
    </v-card>
  </div>
  <v-dialog
    persistent
    v-model="isAdminLoader"
    max-width="290"
    lazy
    content-class="my-custom-dialog"
  >
    <v-layout align-center justify-space-around wrap>
      <v-card>
        <v-card-text class="text-xs-center">
          <v-progress-circular :size="70" indeterminate class="primary--text" />
        </v-card-text>
      </v-card>
    </v-layout>
  </v-dialog>
</template>

<script setup lang="ts">
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { isAdminLoader } from "~/composables/admin";

const visiblePassword = ref(false);

definePageMeta({
  layout: false,
});

const firebaseConfig = {
  apiKey: "AIzaSyD7M92sQhnLO07hUlMzXqmzcjwnBc0WQU8",
  authDomain: "cafe-de-rama-48f0c.firebaseapp.com",
  projectId: "cafe-de-rama-48f0c",
  storageBucket: "cafe-de-rama-48f0c.appspot.com",
  messagingSenderId: "708284226594",
  appId: "1:708284226594:web:4118585bd8fc5cb082fe7b",
};

initializeApp(firebaseConfig);

const auth = getAuth();

const email = ref("");
const password = ref("");

const btnDisabled = computed(() => {
  return !email.value || !password.value;
});

const authed = ref(false);

const doLogin = async () => {
  console.log("Do login");
  await signInWithEmailAndPassword(auth, email.value, password.value);
  authed.value = true;
};

const doLogout = async () => {
  console.log("Do logout");
  await signOut(auth);
  authed.value = false;
};

const loading = ref(true);
isAdminLoader.value = true;

function getAuthed(): Promise<boolean> {
  return new Promise((resolve) => {
    try {
      if (auth.currentUser) {
        resolve(true);
      } else {
        const unsubscribe = auth.onAuthStateChanged(function (user) {
          unsubscribe();
          if (user) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }
    } catch (err) {
      console.error("Error get authed", err);
      resolve(false);
    }
  });
}

(async () => {
  authed.value = await getAuthed();
  loading.value = false;
  isAdminLoader.value = false;
})();
</script>

<style>
.login-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.my-custom-dialog {
  align-items: center;
}
</style>
