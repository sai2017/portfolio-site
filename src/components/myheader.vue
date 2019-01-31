<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link class="navbar-brand" to="/">Portfolio</router-link>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-md-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/works">Works</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
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

  .nav-link {
    /* float: right; */
    /* text-align: right; */
  }
</style>
