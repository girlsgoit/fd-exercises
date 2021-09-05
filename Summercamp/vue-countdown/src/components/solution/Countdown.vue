<template>
  <div class="countdown">
    <div class="countdown-header">
      <input class="seconds-input" type="number" placeholder="seconds" v-model="inputValue">
      <button class="btn" v-on:click="handleStart">start</button>
      <button class="btn" v-on:click="handleStop">stop</button>
    </div>
    <div class="countdown-progress">
      <span>{{minutes}}m</span>
      <span>:</span>
      <span>{{seconds}}s</span>
    </div>
    <div>
      <h3>
        Countdown status:
        <span v-if="isStopped">Stopped</span>
        <span v-else>Running</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Countdown",
  data: function() {
    return {
      inputValue: "",
      currentTime: 0
    };
  },
  computed: {
    isStopped: function() {
      return this.currentTime === 0
    },
    minutes: function() {
      const m = Math.floor(this.currentTime / 60);
      return m < 10 ? '0' + m : m;
    },
    seconds: function() {
      const s = this.currentTime % 60;
      return s < 10 ? '0' + s : s;
    }
  },
  methods: {
    handleStart: function() {
      this.currentTime = Number(this.inputValue);
      this.inputValue = "";

      clearInterval(this.intervalId);
      this.intervalId = setInterval(this.tick, 1000);
    },
    handleStop: function() {
      clearInterval(this.intervalId);
      this.currentTime = 0;
    },
    tick: function() {
      if (!this.currentTime--) {
        this.handleStop();
      }
    }
  },
};

</script>

<style scoped>
.countdown {
  max-width: 300px;
  margin: 0 auto;
}

.countdown-header {
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

.countdown-progress {
  font-size: 20px;
}
</style>
