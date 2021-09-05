<template>
  <div>
    <div class="stopwatch-progress">
      <span>00m</span>
      <span>:</span>
      <span>00s</span>
      <span>:</span>
      <span>00ms</span>
    </div>

    <div class="stopwatch-buttons">
      <button class="btn">start</button>
      <button class="btn">pause</button>
      <button class="btn">reset</button>
      <button class="btn">lap</button>
    </div>

    <div class="laps">
      <h2 class="laps__title">Laps</h2>
      <ul class="laps__list">
        <li class="laps__item">
          <h5 class="laps__item-number">#-</h5>

          <div class="laps__item-time">
            <span>00m</span>
            <span>:</span>
            <span>00s</span>
            <span>:</span>
            <span>00ms</span>
          </div>
            
          <div class="laps__item-time">
            <span>00m</span>
            <span>:</span>
            <span>00s</span>
            <span>:</span>
            <span>00ms</span>
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
    return {};
  },
  computed: {},
  methods: {},
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
