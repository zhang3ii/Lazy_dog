<template>
  <div id="outer-body">
    <searchHeader></searchHeader>
    <div id="page-wrap" class="page-wrap">
      <div class="container">
        <div class="main">
          <div class="border-shadow card">
            <div class="card-content">
              <div class="movie-list-header" style="margin: 5px -10px 0;">
                <span class="movie-list-more" @click="push_to_more('热门电影')"
                  >更多<span class="iconfont icon-detail"></span></span
                ><span class="movie-list-title">热门电影</span>
                <div class="movie-list-subject-block hot_film">
                  <span
                    class="movie-list-subject"
                    @click="get_hot_film('jqp')"
                    id="jqp"
                    >剧情</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_film('dzp')"
                    id="dzp"
                    >动作</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_film('khp')"
                    id="khp"
                    >科幻</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_film('aqp')"
                    id="aqp"
                    >爱情</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_film('xjp')"
                    id="xjp"
                    >喜剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_film('kbp')"
                    id="kbp"
                    >恐怖</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_film('zzp')"
                    id="zzp"
                    >战争</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_film('fzp')"
                    id="fzp"
                    >犯罪</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_film('jlp')"
                    id="jlp"
                    >记录</span
                  >
                </div>
              </div>
              <div class="movie-list-body">
                <div
                  class="movie-list-item"
                  v-for="(item, index) in hot_film_list"
                  :key="index"
                >
                  <div class="movie-post-wrapper">
                    <div class="movie-post-lazyload"></div>
                    <img
                      :src="item.poster"
                      alt=""
                      class="movie-post"
                      @click="search_by_word(item.name)"
                    />
                  </div>
                  <div class="movie-info">
                    <div class="movie-title" @click="search_by_word(item.name)">
                      {{ item.name }}
                    </div>
                    <el-rate
                      :value="item.score / 2"
                      disabled
                      show-score
                      text-color="#ff9900"
                      :score-template="item.score"
                    >
                    </el-rate>
                  </div>
                </div>
              </div>

              <div class="movie-list-header">
                <span
                  class="movie-list-more"
                  @click="push_to_more('热门电视剧')"
                  >更多<span class="iconfont icon-detail"></span></span
                ><span class="movie-list-title">热门电视剧</span>
                <div class="movie-list-subject-block hot_variety">
                  <span
                    class="movie-list-subject"
                    @click="get_hot_variety('dlj')"
                    id="dlj"
                    >大陆</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_variety('mj')"
                    id="mj"
                    >美剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_variety('hj')"
                    id="hj"
                    >韩剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_variety('rj')"
                    id="rj"
                    >日剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_variety('gj')"
                    id="gj"
                    >港剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_variety('tj')"
                    id="tj"
                    >台剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_variety('tj2')"
                    id="tj2"
                    >泰剧</span
                  >
                </div>
              </div>
              <div class="movie-list-body">
                <div
                  class="movie-list-item"
                  v-for="(item, index) in hot_variety_list"
                  :key="index"
                >
                  <div class="movie-post-wrapper">
                    <div class="movie-post-lazyload"></div>
                    <img
                      :src="item.poster"
                      alt=""
                      class="movie-post"
                      @click="search_by_word(item.name)"
                    />
                  </div>
                  <div class="movie-info">
                    <div class="movie-title" @click="search_by_word(item.name)">
                      {{ item.name }}
                    </div>
                    <el-rate
                      :value="item.score / 2"
                      disabled
                      show-score
                      text-color="#ff9900"
                      :score-template="item.score"
                    >
                    </el-rate>
                  </div>
                </div>
              </div>

              <div class="movie-list-header">
                <span class="movie-list-more" @click="push_to_more('热门综艺')"
                  >更多<span class="iconfont icon-detail"></span></span
                ><span class="movie-list-title">热门综艺</span>
                <div class="movie-list-subject-block hot_drama">
                  <span
                    class="movie-list-subject"
                    @click="get_hot_drama('gnzy')"
                    id="gnzy"
                    >国内综艺</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_drama('hwzy')"
                    id="hwzy"
                    >海外综艺</span
                  >
                </div>
              </div>
              <div class="movie-list-body">
                <div
                  class="movie-list-item"
                  v-for="(item, index) in hot_drama_list"
                  :key="index"
                >
                  <div class="movie-post-wrapper">
                    <div class="movie-post-lazyload"></div>
                    <img
                      :src="item.poster"
                      alt=""
                      class="movie-post"
                      @click="search_by_word(item.name)"
                    />
                  </div>
                  <div class="movie-info">
                    <div class="movie-title" @click="search_by_word(item.name)">
                      {{ item.name }}
                    </div>
                    <el-rate
                      :value="item.score / 2"
                      disabled
                      show-score
                      text-color="#ff9900"
                      :score-template="item.score"
                    >
                    </el-rate>
                  </div>
                </div>
              </div>

              <div class="movie-list-header">
                <span class="movie-list-more" @click="push_to_more('热门动漫')"
                  >更多<span class="iconfont icon-detail"></span></span
                ><span class="movie-list-title">热门动漫</span>
                <div class="movie-list-subject-block hot_comic">
                  <span
                    class="movie-list-subject"
                    @click="get_hot_comic('gcdm')"
                    id="gcdm"
                    >国产动漫</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_comic('rbdm')"
                    id="rbdm"
                    >日本动漫</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_comic('dhp')"
                    id="dhp"
                    >动画片</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_comic('omdm')"
                    id="omdm"
                    >欧美动漫</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_hot_comic('qtdm')"
                    id="qtdm"
                    >其他动漫</span
                  >
                </div>
              </div>
              <div class="movie-list-body">
                <div
                  class="movie-list-item"
                  v-for="(item, index) in hot_comic_list"
                  :key="index"
                >
                  <div class="movie-post-wrapper">
                    <div class="movie-post-lazyload"></div>
                    <img
                      :src="item.poster"
                      alt=""
                      class="movie-post"
                      @click="search_by_word(item.name)"
                    />
                  </div>
                  <div class="movie-info">
                    <div class="movie-title" @click="search_by_word(item.name)">
                      {{ item.name }}
                    </div>
                    <el-rate
                      :value="item.score / 2"
                      disabled
                      show-score
                      text-color="#ff9900"
                      :score-template="item.score"
                    >
                    </el-rate>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sidebar">
          <div class="border-shadow card">
            <div class="card-content">
              <div class="movie-list-header" style="margin: 5px -10px 0;">
                <span class="movie-list-more" @click="push_to_more('最新电影')"
                  >更多<span class="iconfont icon-detail"></span></span
                ><span class="movie-list-title">最新电影</span>
              </div>
              <div class="wide-movie-list-body">
                <div
                  class="wide-movie-list-item"
                  v-for="(item, index) in rank_film_list"
                  :key="index"
                >
                  <div class="movie-post-wrapper wide-movie-post">
                    <div class="movie-post-lazyload"></div>
                    <img
                      :src="item.poster"
                      alt=""
                      class="movie-post"
                      @click="search_by_word(item.name)"
                    />
                  </div>
                  <div class="wide-movie-info">
                    <div class="movie-title" @click="search_by_word(item.name)">
                      {{ item.name }}
                    </div>
                    <el-rate
                      :value="item.score / 2"
                      disabled
                      show-score
                      text-color="#ff9900"
                      :score-template="item.score"
                    >
                    </el-rate>
                    <div class="movie-text">
                      {{ item.actor }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="movie-list-header" style="margin: 5px -10px 0;">
                <span class="movie-list-more" @click="push_to_more('最新电视剧')"
                  >更多<span class="iconfont icon-detail"></span></span
                ><span class="movie-list-title">最新电视剧</span>
              </div>
              <div class="wide-movie-list-body">
                <div
                  class="wide-movie-list-item"
                  v-for="(item, index) in rank_variety_list"
                  :key="index"
                >
                  <div class="movie-post-wrapper wide-movie-post">
                    <div class="movie-post-lazyload"></div>
                    <img
                      :src="item.poster"
                      alt=""
                      class="movie-post"
                      @click="search_by_word(item.name)"
                    />
                  </div>
                  <div class="wide-movie-info">
                    <div class="movie-title" @click="search_by_word(item.name)">
                      {{ item.name }}
                    </div>
                    <el-rate
                      :value="item.score / 2"
                      disabled
                      show-score
                      text-color="#ff9900"
                      :score-template="item.score"
                    >
                    </el-rate>
                    <div class="movie-text">
                      {{ item.actor }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="movie-list-header" style="margin: 5px -10px 0;">
                <span class="movie-list-more" @click="push_to_more('最新综艺')"
                  >更多<span class="iconfont icon-detail"></span></span
                ><span class="movie-list-title">最新综艺</span>
              </div>
              <div class="wide-movie-list-body">
                <div
                  class="wide-movie-list-item"
                  v-for="(item, index) in rank_drama_list"
                  :key="index"
                >
                  <div class="movie-post-wrapper wide-movie-post">
                    <div class="movie-post-lazyload"></div>
                    <img
                      :src="item.poster"
                      alt=""
                      class="movie-post"
                      @click="search_by_word(item.name)"
                    />
                  </div>
                  <div class="wide-movie-info">
                    <div class="movie-title" @click="search_by_word(item.name)">
                      {{ item.name }}
                    </div>
                    <el-rate
                      :value="item.score / 2"
                      disabled
                      show-score
                      text-color="#ff9900"
                      :score-template="item.score"
                    >
                    </el-rate>
                    <div class="movie-text">
                      {{ item.actor }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="movie-list-header" style="margin: 5px -10px 0;">
                <span class="movie-list-more" @click="push_to_more('最新动漫')"
                  >更多<span class="iconfont icon-detail"></span></span
                ><span class="movie-list-title">最新动漫</span>
              </div>
              <div class="wide-movie-list-body">
                <div
                  class="wide-movie-list-item"
                  v-for="(item, index) in rank_comic_list"
                  :key="index"
                >
                  <div class="movie-post-wrapper wide-movie-post">
                    <div class="movie-post-lazyload"></div>
                    <img
                      :src="item.poster"
                      alt=""
                      class="movie-post"
                      @click="search_by_word(item.name)"
                    />
                  </div>
                  <div class="wide-movie-info">
                    <div class="movie-title" @click="search_by_word(item.name)">
                      {{ item.name }}
                    </div>
                    <el-rate
                      :value="item.score / 2"
                      disabled
                      show-score
                      text-color="#ff9900"
                      :score-template="item.score"
                    >
                    </el-rate>
                    <div class="movie-text">
                      {{ item.actor }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchHeader from "../components/header";
import {
  hot_film,
  hot_variety,
  hot_drama,
  hot_comic,
  rank
} from "@/api/search.js";

export default {
  components: { searchHeader },
  data() {
    return {
      hot_film_list: [],
      hot_variety_list: [],
      hot_drama_list: [],
      hot_comic_list: [],
      rank_film_list: [],
      rank_variety_list: [],
      rank_drama_list: [],
      rank_comic_list: []
    };
  },
  methods: {
    search_by_word(val) {
      this.$router.push({ path: "list", query: { word: val } });
    },
    // 点击变色js
    change_class(val, res) {
      for (let r in res) {
        try {
          res[r].className = "movie-list-subject";
        } catch {}
      }
      var element = document.getElementById(val);
      element.className = "movie-list-subject-active";
    },
    // 获取热门电影
    get_hot_film(val) {
      hot_film({ pn: 1, lm: 8, tab: val }).then(res => {
        this.hot_film_list = res.data;
      });
      var res = document.getElementsByClassName("hot_film")[0].children;
      if (val) {
        this.change_class(val, res);
      }
    },
    get_hot_variety(val) {
      hot_variety({ pn: 1, lm: 8, tab: val }).then(res => {
        this.hot_variety_list = res.data;
      });
      if (val) {
        var res = document.getElementsByClassName("hot_variety")[0].children;
        this.change_class(val, res);
      }
    },
    get_hot_drama(val) {
      hot_drama({ pn: 1, lm: 8, tab: val }).then(res => {
        this.hot_drama_list = res.data;
      });
      if (val) {
        var res = document.getElementsByClassName("hot_drama")[0].children;
        this.change_class(val, res);
      }
    },
    get_hot_comic(val) {
      if (val) {
        var res = document.getElementsByClassName("hot_comic")[0].children;
        this.change_class(val, res);
      }
      if (val === undefined) {
        val = "rbdm";
      }
      hot_comic({ pn: 1, lm: 8, tab: val }).then(res => {
        this.hot_comic_list = res.data;
      });
    },
    get_rank() {
      rank({ pn: 1, lm: 5, ty: "电影" }).then(res => {
        this.rank_film_list = res.data;
      });
      rank({ pn: 1, lm: 5, ty: "电视剧" }).then(res => {
        this.rank_variety_list = res.data;
      });
      rank({ pn: 1, lm: 5, ty: "动漫" }).then(res => {
        this.rank_comic_list = res.data;
      });
      rank({ pn: 1, lm: 5, ty: "综艺" }).then(res => {
        this.rank_drama_list = res.data;
      });
    },
    push_to_more(val) {
      this.$router.push({ path: "more", query: { word: val } });
    }
  },
  mounted() {
    this.get_hot_film();
    this.get_hot_drama();
    this.get_hot_variety();
    this.get_hot_comic();
    this.get_rank();
  }
};
</script>

<style>
.movie-title {
  font-size: 17px;
  line-height: 1.5;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.movie-list-subject-block {
  box-sizing: border-box;
  padding-bottom: 3px;
}
.movie-list-subject {
  font-size: 13px;
  padding: 4px 8px;
  margin-right: 10px;
  background: rgb(243, 243, 244);
  border-radius: 15px;
  white-space: nowrap;
  line-height: 2.2;
  box-sizing: border-box;
}
.movie-list-subject-active {
  font-size: 13px;
  padding: 4px 8px;
  margin-right: 10px;
  background: rgb(243, 243, 244);
  border-radius: 15px;
  white-space: nowrap;
  line-height: 2.2;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  background: #409eff;
}
.movie-list-subject:hover {
  color: rgb(255, 255, 255);
  cursor: pointer;
  background: #409eff;
}
.wide-movie-post {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 60px;
  height: auto;
  margin: 6px 0 0 5px;
  border-radius: 4px;
  object-fit: cover;
}
.movie-text {
  line-height: 1.5;
  color: rgba(0, 34, 77, 0.7);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.wide-movie-info {
  padding: 8px 5px 5px 75px;
}
.movie-post {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  object-fit: cover;
}
.el-rate__text {
  margin-left: 10px;
}
.wide-movie-list-item {
  position: relative;
  overflow: hidden;
  font-size: 12px;
  padding: 0;
  -webkit-transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 96px;
  border-radius: 4px;
}
.wide-movie-list-body {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
div {
  display: block;
}
.card-content {
  box-sizing: border-box;
}
.border-shadow {
  box-shadow: 0 8px 33px 0 rgba(30, 35, 42, 0.08);
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
}
.sidebar {
  line-height: 1.15;
  --swiper-theme-color: #007aff;
  color: #333;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  word-break: break-all;
  box-sizing: border-box;
  width: 400px;
}
.card {
  margin-top: 0;
  width: 100%;
  padding: 5px 10px 10px;
}
.movie-rating {
  line-height: 1.5;
  display: inline-block;
  color: rgba(0, 34, 77, 0.7);
  font-size: 13px;
}
.el-rate__icon {
  margin-right: 0px;
}
.movie-title {
  font-size: 13px;
  font-weight: 700;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.movie-post-lazyload {
  padding-top: 140%;
  background: url(data:image/png;base64,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)
    center center / cover no-repeat;
  border-radius: 4px;
}
.movie-post {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  object-fit: cover;
}
.movie-post-wrapper {
  position: relative;
  overflow: hidden;
  color: transparent;
}
.movie-list-item {
  width: 23%;
  padding: 10px 1% 3px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 4px;
}
.movie-list-body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  background: none;
  line-height: 100%;
  margin: 0px -1% -8px;
  box-sizing: border-box;
}
.movie-list-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 2;
}
.movie-list-more {
  float: right;
  padding: 2px 6px 2px 10px;
  margin-top: 10px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-align: center;
  cursor: pointer;
  text-align: center;
  border: 1px solid silver;
  border-radius: 2px;
  font-size: 12px;
  color: #505050;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  line-height: 16px;
}
.movie-list-header {
  width: 100%;
  margin: 20px -10px 0;
  padding: 0 10px 0;
}
#outer-body,
#page-wrap {
  box-sizing: border-box;
  width: 100%;
}
.card-content {
  box-sizing: border-box;
}

.navs {
  display: flex;
  padding-left: 28px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.container {
  width: 1100px;
  padding: 15px 20px;
  display: flex;
  box-sizing: border-box;
  margin: auto;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.nav {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 28px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: relative;
  height: 100%;
}
.nav-title {
  margin-left: 6px;
}
.main {
  width: 600px;
  margin-right: 20px;
}
</style>
