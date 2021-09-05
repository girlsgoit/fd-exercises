<template>
  <div>
    <button class="btn">-</button>
    <span class="count-value">0</span>
    <button class="btn">+</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data: function() {
    return {};
  },
  methods: {}
}
</script>

<style>
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
