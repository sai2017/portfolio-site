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

<style scoped>
.hello {
  background-color: #313131; /*背景色の指定*/
  overflow: hidden;
  padding-top: 200px; /*文字上部に余白*/
  padding-bottom: 400px; /*文字下部に余白*/
}

h1, h2 {
  color: black;
  font-weight: normal;
  font-size: 100px;
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
