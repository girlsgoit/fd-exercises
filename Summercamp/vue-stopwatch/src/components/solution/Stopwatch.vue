<template>
  <div>
    <div class="stopwatch-progress">
      <span>{{minutes}}m</span>
      <span>:</span>
      <span>{{seconds}}s</span>
      <span>:</span>
      <span>{{miliseconds}}ms</span>
    </div>
    <div>
      <button class="btn" v-on:click="handleStart">start</button>
      <button class="btn" v-on:click="handlePause">pause</button>
      <button class="btn" v-on:click="handleReset">reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stopwatch",
  data: function() {
    return {
      totalTime: 0
    };
  },
  computed: {
    minutes: function() {
      return this.normalizeTimeNumber(Math.floor(this.totalTime / 100 / 60));
    },
    seconds: function() {
      return this.normalizeTimeNumber(Math.floor(this.totalTime / 100) % 60);
    },
    miliseconds: function() {
      return this.normalizeTimeNumber(this.totalTime % 100);
    }
  },
  methods: {
    handleStart: function() {
      const that = this;

      clearInterval(this.intervalId);
      this.intervalId = setInterval(function() {
        that.totalTime++;
      }, 10);
    },
    handlePause: function() {
      clearInterval(this.intervalId);
    },
    handleReset: function() {
      clearInterval(this.intervalId);
      this.totalTime = 0;
    },
    normalizeTimeNumber: function(time) {
      return time < 10 ? '0' + time : time;
    }
  },
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
