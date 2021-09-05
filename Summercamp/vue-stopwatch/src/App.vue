<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Stopwatch</h1>

    <Stopwatch/>
  </div>
</template>

<script>
import Stopwatch from './components/solution/Stopwatch';

export default {
  name: "App",
  components: {
    Stopwatch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
