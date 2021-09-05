<template>
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
</template>

<script>
export default {
  name: "Stopwatch",
  data: function() {
    return {};
  },
  methods: {},
  computed: {}
}
</script>

<style>
.stopwatch-progress {
  font-size: 20px;
  font-family: monospace;
}

.btn {
  font-size: 20px;
  width: 80px;
  margin: 5px;
}
</style>
