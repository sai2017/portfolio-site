<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "Sai's Portfolio Site"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #313131; /*背景色の指定*/
  overflow: hidden; /*おまじない*/
  padding-top: 200px; /*文字上部に余白*/
  padding-bottom: 400px; /*文字下部に余白*/
  /* background-image: url("./assets/white.png") */
}

h1, h2 {
  color: black;
  font-weight: normal;
  font-size: 100px;
  /* -webkit-text-stroke: 2px #000; */
  text-shadow: 2px 2px 1px white,
  -2px 2px 1px white,
  2px -2px 1px white,
  -2px -2px 1px white;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
