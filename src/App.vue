<template>
  <div id="app">
    <myheader></myheader>
    <transition>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import myheader from './components/myheader'

export default {
  name: 'App',
  components: {
    myheader
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
}

.v-enter-active, .v-leave-active {
  transition: opacity 1s, transform 1s;
}
.v-enter {
  opacity: 0;
  transform: translate(-10px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
