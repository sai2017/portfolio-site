<template>
  <section>
    <h1>About</h1>
      <header>
          <a href="#contact" class="button-contact"><i class="fa fa-envelope-o" aria-label="お問い合わせ"></i></a>
          <div class="profile">
            <h1 class="site-title abel uppercase text-center">Web Engineer <span>Sai</span></h1>
            <img src="http://drive.google.com/uc?export=view&id=1bDuXj6FPJmr0Uh7JVl_UCAZHJHTzOdBG" alt="プロフィール写真" width="140" height="140" class="block-center profile-icon">
            <p class="introduction">
              東京にてWEBエンジニアとして活動しております、saiです。
              これまで「カードゲームショップ向けの求人サイト開発」、「グルメサイトSARAHの開発」、
              「ファッション業界特化の求人サイト「READY TO FASHION」の開発」の3つの実務経験があります。
              すべての現場でRailsを使用したサーバーサイドの開発を担当しておりました。
            </p>
          </div>
      </header>
  </section>
</template>

<style scoped>
h1 {
  margin-top: 20px;
}

h3 {
  font-weight: bold;
}

.name {
  padding-top: 50px;
}

.block-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

header .profile-icon
{
    margin: 30px auto;

    -webkit-border-radius: 50%;
       -moz-border-radius: 50%;
            border-radius: 50%;
}

header p
{
    font-size: 1.6rem;
}

.introduction {
  margin-left: 300px;
  margin-right: 300px;
  text-align: left;
}

.profile-box {
  text-align: left;
  margin-left: 400px;
  margin-right: 100px;
  font-size: 20px;
}

</style>
