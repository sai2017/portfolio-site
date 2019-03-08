<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
  </div> -->
  <h1 class="hello loader">
    <span v-for="(t, index) in title" :key="index" v-text="t"/>
  </h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: "Sai's Portfolio Site"
    }
  }
}
</script>

<style scoped>
.hello {
  background-color: #313131;
  overflow: hidden;
  padding-top: 200px;
  padding-bottom: 400px;
}

/* h1, h2 {
  color: black;
  font-weight: normal;
  font-size: 100px;
  text-shadow: 2px 2px 1px white,
  -2px 2px 1px white,
  2px -2px 1px white,
  -2px -2px 1px white;
} */

h1.loader {
  text-align: center;
  font-family: 'Nunito', sans-serif;
  font-size: 4.6875em;
  color: transparent;
  letter-spacing: 0.01em;
}

.loader span {
  text-shadow:
    0 0 2px rgba(204, 208, 212,0.9),
    0 15px 25px rgba(0, 0, 0, 0.3),
    0 -2px 3px rgba(0, 0, 0, 0.1),
    0 -5px 10px rgba(255, 255, 255, 0.5),
    0 5px 10px rgba(0, 0, 0, 0.3),
    0 3px 4px rgba(255, 255, 255, 0.2),
    0 0 20px rgba(255, 255, 255, 0.45);

    animation: loading 0.85s ease-in-out infinite alternate;
}

@keyframes loading {
 to {
   text-shadow:
    0 0 2px rgba(204, 208, 212,0.2),
    0 0 3px rgba(0, 0, 0, 0.02),
    0 0 0 rgba(0, 0, 0, 0),
    0 0 0 rgba(255, 255, 255, 0),
    0 0 0 rgba(0, 0, 0, 0),
    0 0 0 rgba(255, 255, 255, 0),
    0 0 0 rgba(255, 255, 255, 0);
  }
}

.loader span:nth-child(2) {
  animation-delay:0.15s;
}

.loader span:nth-child(3) {
  animation-delay:0.30s;
}

.loader span:nth-child(4) {
  animation-delay:0.45s;
}

.loader span:nth-child(5) {
  animation-delay:0.60s;
}

.loader span:nth-child(6) {
  animation-delay:0.75s;
}

.loader span:nth-child(7) {
  animation-delay:0.90s;
}

.loader span:nth-child(8) {
  animation-delay:1.05s;
}

.loader span:nth-child(9) {
  animation-delay:1.20s;
}

.loader span:nth-child(10) {
  animation-delay:1.35s;
}

.loader span:nth-child(11) {
  animation-delay:1.50s;
}

.loader span:nth-child(12) {
  animation-delay:1.65s;
}

.loader span:nth-child(13) {
  animation-delay:1.80s;
}

.loader span:nth-child(14) {
  animation-delay:1.95s;
}

.loader span:nth-child(15) {
  animation-delay:2.10s;
}

.loader span:nth-child(16) {
  animation-delay:2.25s;
}

.loader span:nth-child(17) {
  animation-delay:2.40s;
}

.loader span:nth-child(18) {
  animation-delay:2.55s;
}

.loader span:nth-child(19) {
  animation-delay:2.70s;
}

.loader span:nth-child(20) {
  animation-delay:2.85s;
}

.loader span:nth-child(21) {
  animation-delay:3.00s;
}
</style>
