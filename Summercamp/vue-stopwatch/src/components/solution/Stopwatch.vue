<template>
  <div>
    <div class="stopwatch-progress">
      <span>{{minutes}}m</span>
      <span>:</span>
      <span>{{seconds}}s</span>
      <span>:</span>
      <span>{{miliseconds}}ms</span>
    </div>

    <div class="stopwatch-buttons">
      <button class="btn" v-on:click="handleStart">start</button>
      <button class="btn" v-on:click="handlePause">pause</button>
      <button class="btn" v-on:click="handleReset">reset</button>
      <button class="btn" v-on:click="handleLap">lap</button>
    </div>

    <div class="laps">
      <h2 class="laps__title">Laps</h2>
      <ul class="laps__list">
        <li class="laps__item" v-for="(lap, index) in laps" :key="index">
          <h5 class="laps__item-number">#{{index}}</h5>

          <div class="laps__item-time">
            <span>{{lap.lapTime.m}}m</span>
            <span>:</span>
            <span>{{lap.lapTime.s}}s</span>
            <span>:</span>
            <span>{{lap.lapTime.ms}}ms</span>
          </div>
            
          <div class="laps__item-time">
            <span>{{lap.currentTime.m}}m</span>
            <span>:</span>
            <span>{{lap.currentTime.s}}s</span>
            <span>:</span>
            <span>{{lap.currentTime.ms}}ms</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stopwatch",
  data: function() {
    return {
      totalTime: 0,
      lapTime: 0,
      laps: []
    };
  },
  computed: {
    minutes: function() {
      return this.getMinutes(this.totalTime);
    },
    seconds: function() {
      return this.getSeconds(this.totalTime);
    },
    miliseconds: function() {
      return this.getMiliseconds(this.totalTime);
    },
  },
  methods: {
    handleStart: function() {
      const that = this;

      clearInterval(this.intervalId);
      this.intervalId = setInterval(function() {
        that.totalTime++;
        that.lapTime++;
      }, 10);
    },
    handlePause: function() {
      clearInterval(this.intervalId);
    },
    handleReset: function() {
      clearInterval(this.intervalId);
      this.totalTime = 0;
      this.clearLaps();
    },
    handleLap: function() {
      this.laps.push({
        lapTime: {
          m: this.getMinutes(this.lapTime),
          s: this.getSeconds(this.lapTime),
          ms: this.getMiliseconds(this.lapTime),
        },
        currentTime: {
          m: this.minutes,
          s: this.seconds,
          ms: this.miliseconds
        }
      });
      
      this.lapTime = 0;
    },
    normalizeTimeNumber: function(time) {
      return time < 10 ? '0' + time : time;
    },
    clearLaps: function() {
      this.lapTime = 0;
      this.laps = [];
    },
    getMinutes: function(time) {
      return this.normalizeTimeNumber(Math.floor(time / 100 / 60));
    },
    getSeconds: function(time) {
      return this.normalizeTimeNumber(Math.floor(time / 100) % 60);
    },
    getMiliseconds: function(time) {
      return this.normalizeTimeNumber(time % 100);
    }
  },
}
</script>

<style>
.stopwatch-progress {
  font-size: 20px;
  font-family: monospace;
}

.stopwatch-buttons {
  margin-bottom: 20px;
}

.btn {
  font-size: 20px;
  width: 80px;
  margin: 5px;
}

.laps {
  border: 3px solid #333;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  min-width: 360px;
  padding: 20px;
  width: min-content;
  margin: 0 auto;
}

.laps__title {
  text-align: center;
  margin: 0;
  margin-bottom: 20px;
}

.laps__list {
  list-style-type: none;
  padding: 0;
  font-family: monospace;
  font-size: 20px;
  margin: 0;
}

.laps__item {
  display: flex;
  align-items: center;
}

.laps__item:not(:last-child) {
  margin-bottom: 15px;
}

.laps__item-number {
  margin: 0;
  font-weight: normal;
  flex: 0 0 auto;
  padding: 5px 10px;
  line-height: 30px;
  margin-right: 15px;
  border: 1px solid #333;
  border-radius: 3px;
}

.laps__item-time {
  border: 1px solid #333;
  border-radius: 3px;
  line-height: 30px;
  padding: 5px 10px;
}

.laps__item-time:not(:last-child) {
  margin-right: 5px;
}
</style>
