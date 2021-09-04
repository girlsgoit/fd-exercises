<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <h1>Countdown</h1>

    <div class="counter">
      <div class="counter-header">
        <input class="seconds-input " type="number" placeholder="seconds">
        <button class="btn">start</button>
        <button class="btn">stop</button>
      </div>
      <div class="counter-progress">
        <span>min</span>
        <span>:</span>
        <span>sec</span>
      </div>
      <div>
        <h3>
          Countdown status:
          <span></span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
