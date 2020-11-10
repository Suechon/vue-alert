<template>
  <div>
    <p>ページ2</p>
    <v-btn color="success" @click="clickSuccess">成功</v-btn>
    <v-btn color="error" @click="clickError">失敗</v-btn>
    {{ success }}
    <v-col>
      <v-btn @click="jump">ページ1へ</v-btn>
    </v-col>
  </div>
</template>
<script>
export default {
  data() {
    return { success: "" };
  },
  methods: {
    jump() {
      this.$router.push({ path: "/" });
    },
    clickSuccess() {
      this.axios
        .get("/page2")
        .then((response) => {
          this.success = "成功" + response.data;
        })
        .catch((e) => {
          this.store_setAlert({
            action: true,
            message: "error \n" + e,
            detail: "[page2]成功ボタンで失敗しました'",
          });
        });
    },
    clickError() {
      this.axios
        .get("/hoge")
        .then((response) => {
          this.success = "失敗" + response.data;
        })
        .catch((e) => {
          this.store_setAlert({
            action: true,
            message: e,
            detail: "[page2]失敗ボタンで失敗しました'",
          });
        });
    },
    store_setAlert({ action, message, detail }) {
      this.$store.dispatch("alert/setAlert", {
        action: action,
        message: message,
        detail: detail,
      });
    },
  },
};
</script>