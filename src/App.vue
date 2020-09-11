<template>
  <v-app id="app">
    <v-main>
      <v-container fluid>
        <Alert />
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Alert from "./components/Alert";
export default {
  name: "App",
  components: { Alert },
  data() {
    return {};
  },
};
</script>
