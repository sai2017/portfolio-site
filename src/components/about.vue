<template>
  <section>
    <h1>About</h1>
      <header>
          <a href="#contact" class="button-contact"><i class="fa fa-envelope-o" aria-label="お問い合わせ"></i></a>
          <div class="profile">
            <h1 class="site-title abel uppercase text-center">Web Engineer <span>Sai</span></h1>
            <img src="http://drive.google.com/uc?export=view&id=1bDuXj6FPJmr0Uh7JVl_UCAZHJHTzOdBG" alt="プロフィール写真" width="140" height="140" class="block-center profile-icon">
            <p class="introduction">
              東京にてWEBエンジニアとして活動しております、saiです。<br>
              2017年にプログラミングスクールを卒業後、サーバーサイドの開発からキャリアをスタートさせました。<br>
              「カードゲームショップ向けの求人サイト開発」、「グルメサイトSARAHの開発」、
              「ファッション業界特化の求人サイトREADY TO FASHIONの開発」ではRailsを使用したサーバーサイドの開発を担当していました。<br>
              直近では株式会社ケップルのフロントエンドエンジニア（React）として、IRプラットフォーム『FUNDBOARD』の開発や、新規プラットフォームの開発をしていました。
            </p>
            <p class="introduction">
              できること<br>
              ・Webフロントエンドの開発（HTML、CSS、JavaScript）<br>
              ・顧客折衝（電話や対面での顧客サポート経験有り）<br>
              ・飲み会幹事（仕事でもプライベートでもよくやります）<br>
              ・サッカー（エースストライカーです！）
              ・人気ラーメン店の紹介（毎年100杯以上食しています）
            </p>
          </div>
      </header>
  </section>
</template>

<style scoped>
h1 {
  margin-top: 20px;
  font-weight: bold;
  font-size: 40px;
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

@media screen and ( max-width:500px )
{
  .introduction {
    margin-left: 50px;
    margin-right: 50px;
  }
}

</style>
