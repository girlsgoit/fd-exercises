<template>
  <div>
    <button class="btn" v-on:click="substract">-</button>
    <span class="count-value">{{value}}</span>
    <button class="btn" v-on:click="add">+</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data: function() {
    return {
      value: 0
    };
  },
  methods: {
    add: function() {
      this.value++;
    },
    substract: function() {
      this.value--;
    }
  }
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
