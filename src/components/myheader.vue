<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Portfolio</router-link>
    <div id="navnav">
      <div>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/works">Works</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
   </div>
  </nav>
</template>

<style scoped>
  .navbar {
    height: 60px;
  }

  .navbar-brand {
    font-size:120%; /*フォントサイズの調整*/
    color:#313131; /*文字色の変更*/
    padding-top: 10px; /*文字上部に余白*/
    padding-bottom: 10px; /*文字下部に余白*/
    padding-left: 20px; /*文字左側に余白*/
    padding-right: 20px; /*文字右側に余白*/
    border:1px solid #313131; /*文字の周りに線を描く*/
    border-radius: 5px; /*線の角に丸みを付ける*/
    letter-spacing: 3px; /*文字と文字の間隔をあける*/
    font-weight:400; /*文字の太さの変更*/
  }

  nav ul {
    text-align: center;
    font-weight: bold;
    left: 0;
    right: 0;
    margin-top: 20px;
  }

  nav ul li {
    display: inline-block;
  }

  a {
    color:#313131;
  }

  @media screen and ( max-width:500px )
  {
    .navbar {
      height: 150px;
      margin-bottom: 50px;
      padding-top: 0px;
    }

  .navbar-brand {
    margin: 0 auto;
    margin-top: -40px;
  }

  nav ul {
    display: inline-block;
    text-align: center;
    color: black;
    font-weight: bold;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 20px;
    margin-left: -40px;
  }

  nav ul li {
    display: inline-block;
  }

  a {
    color: black;
  }
}
</style>
