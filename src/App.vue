<template>
  <div id="app">
    <YiQrCode bindKey="EU28FM4aoN1vWOML" ssid="" password=""/>
  </div>
</template>

<script>
import YiQrCode from './components/YiQRCode.vue'

export default {
  name: 'app',
  components: {
    YiQrCode,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
