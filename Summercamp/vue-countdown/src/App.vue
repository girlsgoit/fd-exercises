<template>
  <div id="app">
    <img  src="./assets/logo.png">
    <h1>Countdown</h1>

    <Countdown />
  </div>
</template>

<script>
import Countdown from './components/solution/Countdown';

export default {
  name: "App",
  components: {
    Countdown
  },
};

</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
