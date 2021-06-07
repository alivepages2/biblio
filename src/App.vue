<template>
  <div id="app">
    <div>
      <amplify-authenticator></amplify-authenticator>
    </div>
    <div class="Welcome">
      hey, {{ user.username }}
      <amplify-sign-out></amplify-sign-out>
    </div>
  </div>
</template>

<script>
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

export default {
  name: "App",
  data() {
    return {
      user: {},
    };
  },
  created() {
    onAuthUIStateChange((State, User) => {
      if (State == AuthState.SignIn) {
        this.user = User;
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
