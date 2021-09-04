<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <h1>Stopwatch</h1>

    <div>
      <div class="stopwatch-progress">
        <span>00m</span>
        <span>:</span>
        <span>00s</span>
        <span>:</span>
        <span>00ms</span>
      </div>
      <div>
        <button class="btn">start</button>
        <button class="btn">pause</button>
        <button class="btn">reset</button>
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
  methods: {},
  computed: {}
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

.stopwatch-progress {
  font-size: 20px;
}

.btn {
  font-size: 20px;
  width: 80px;
  margin: 5px;
}
</style>
