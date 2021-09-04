<template>
  <div id="app">
    <img  src="./assets/logo.png">
    <h1>Countdown</h1>
    <Countdown />
  </div>
</template>

<script>
import Countdown from './components/Countdown';

export default {
  name: "App",
  components: {
    Countdown
  },
  data: function() {
    return {};
  },
  computed: {},
  methods: {}
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

.counter {
  max-width: 300px;
  margin: 0 auto;
}

.counter-header {
  margin-bottom: 30px;
}

.seconds-input {
  width: 100%;
  font-size: 20px;
  margin-bottom: 10px;
}

.btn {
  font-size: 20px;
  width: 80px;
  margin: 0 5px;
}

.counter-progress {
  font-size: 20px;
}
</style>
