<template>
  <div class="countdown">
    <div class="countdown-header">
      <input class="seconds-input " type="number" placeholder="seconds">
      <button class="btn">start</button>
      <button class="btn">stop</button>
    </div>
    <div class="countdown-progress">
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
</template>

<script>
export default {
  name: "Countdown",
  data: function() {
    return {};
  },
  computed: {},
  methods: {}
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
