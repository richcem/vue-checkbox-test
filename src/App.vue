<template>
  <div id="app">
    <List></List>
  </div>
</template>

<script>
import List from "./components/List";
import { mapState } from "vuex";
import store from "./store";

export default {
  name: "App",
  store,
  components: {
    List
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
