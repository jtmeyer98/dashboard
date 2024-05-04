<template>
  <div id="app">
    <purchase-request-table />
  </div>
</template>

<script>
import PurchaseRequestTable from './components/PurchaseRequestTable.vue';

export default {
  name: 'App',
  components: {
    PurchaseRequestTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
