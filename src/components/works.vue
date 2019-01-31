<template>
  <section>
    <h1>Works</h1>
    <div class="card">
      <div v-for="work in works" :key="work.id">
        <div class="card1">
          <img :src="work.img_url" class="image1">
          <p class="title1">{{ work.title }}</p>
          <p class="content1">{{ work.description }}</p>
          <p>製作期間：{{ work.period }}</p>
          <ul class="tag">
            <li v-for="lang in work.languages" :key="lang.id">
              <div class="tag-tag">
                <span>{{ lang.language }}</span>
              </div>
            </li>
          </ul>
          <div class="card-link" v-if="work.slug != nil">
            <a :href="work.slug" class="cp_btn">ウェブサイトを見る</a>
          </div>
          <div v-if="work.github_url != nil">
            <a :href="work.github_url" class="cp_btn">Githubを見る</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import works from './../../static/works.json'
export default {
  data () {
    return {
      works: works
    }
  }
}
</script>

<style scoped>
.card {
  display: grid;
  grid-template-columns: repeat(3, calc(33.333% - 10px));
  grid-gap: 15px 15px;
}

h1 {
  margin-top: 20px;
}

.card1 {
    width: 300px;
    margin: 70px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 3px 6px #ccc;
}
.image1 {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
}
.title1 {
    font-size: 150%;
    margin: 10px;
    color: #444;
}
.content1 {
    padding: 10px;
    color: #666;
}

.tag {
  margin: 0;
  padding: 0;
  list-style: none;
}
.tag li {
  display: inline-block;
  margin: 0 0 .3em 1em;
  padding: 0;
}
.tag li .tag-tag {
  position: relative;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 1em 0 .75em;
  background-color: #3498db;
  border-radius: 0 3px 3px 0;
  color: #fff;
  font-size: 13px;
  text-decoration: none;
  -webkit-transition: .2s;
  transition: .2s;
}

.tag li span {
  display: block;
  max-width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

/* 詳細ボタン */
.cp_btn {
  display: block;
  padding: 0.8em;
  text-align: center;
  text-decoration: none;
  color: #EC407A;
  border: 2px solid #EC407A;
  border-radius: 3px;
  transition: .4s;
}
.cp_btn:hover {
  background: #EC407A;
  color: #fff;
}

</style>
