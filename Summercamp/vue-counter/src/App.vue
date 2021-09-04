<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <h1>Counter</h1>

    <div>
      <button class="btn">+</button>
      <span class="count-value">0</span>
      <button class="btn">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {};
  },
  methods: {
    increaseValue: {}
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

.btn {
  font-size: 20px;
  width: 100px;
}

.count-value {
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px;
}
</style>
