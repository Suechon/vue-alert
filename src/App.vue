<template>
  <v-app id="app">
    <v-main>
      <v-container fluid>
        <Alert />
        <Page1 />
        <!-- <router-view /> -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Alert from "./components/Alert";
import Page1 from "./components/Page1";
export default {
  name: "App",
  components: { Alert, Page1 },
  data() {
    return {};
  },
};
</script>
