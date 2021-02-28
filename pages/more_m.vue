<template>
  <div>
    <searchHeader></searchHeader>
    <div class="container">
      <div class="main">
        <div class="border-shadow card">
          <div class="card-content">
            <div style="z-index: 3;position: sticky;top: 74px;">
              <div class="movie-list-header" style="margin: 5px -10px 0;">
                <span class="movie-list-title">{{ word }}</span>
                <div
                  class="movie-list-subject-block"
                  v-if="word === '热门电影'"
                >
                  <span
                    class="movie-list-subject"
                    @click="get_data('jqp', 1)"
                    id="jqp"
                    >剧情</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('dzp', 1)"
                    id="dzp"
                    >动作</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('khp', 1)"
                    id="khp"
                    >科幻</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('aqp', 1)"
                    id="aqp"
                    >爱情</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('xjp', 1)"
                    id="xjp"
                    >喜剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('kbp', 1)"
                    id="kbp"
                    >恐怖</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('zzp', 1)"
                    id="zzp"
                    >战争</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('fzp', 1)"
                    id="fzp"
                    >犯罪</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('jlp', 1)"
                    id="jlp"
                    >记录</span
                  >
                </div>
                <div
                  class="movie-list-subject-block"
                  v-if="word === '热门电视剧'"
                >
                  <span
                    class="movie-list-subject"
                    @click="get_data('dlj', 1)"
                    id="dlj"
                    >大陆</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('mj', 1)"
                    id="mj"
                    >美剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('hj', 1)"
                    id="hj"
                    >韩剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('rj', 1)"
                    id="rj"
                    >日剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('gj', 1)"
                    id="gj"
                    >港剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('tj', 1)"
                    id="tj"
                    >台剧</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('tj2', 1)"
                    id="tj2"
                    >泰剧</span
                  >
                </div>
                <div
                  class="movie-list-subject-block"
                  v-if="word === '热门综艺'"
                >
                  <span
                    class="movie-list-subject"
                    @click="get_data('gnzy', 1)"
                    id="gnzy"
                    >国内综艺</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('hwzy', 1)"
                    id="hwzy"
                    >海外综艺</span
                  >
                </div>
                <div
                  class="movie-list-subject-block"
                  v-if="word === '热门动漫'"
                >
                  <span
                    class="movie-list-subject"
                    @click="get_data('gcdm', 1)"
                    id="gcdm"
                    >国产动漫</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('rbdm', 1)"
                    id="rbdm"
                    >日本动漫</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('dhp', 1)"
                    id="dhp"
                    >动画片</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('omdm', 1)"
                    id="omdm"
                    >欧美动漫</span
                  >
                  <span
                    class="movie-list-subject"
                    @click="get_data('qtdm', 1)"
                    id="qtdm"
                    >其他动漫</span
                  >
                </div>
              </div>
            </div>
            <div class="movie-list-body">
              <div
                class="single-movie-list-item"
                v-for="(item, index) in data_list"
                :key="index"
              >
                <div class="movie-post-wrapper single-movie-post">
                  <div class="movie-post-lazyload"></div>
                  <img
                    :src="item.poster"
                    alt=""
                    class="movie-post"
                    @click="search_by_word(item.name)"
                  />
                </div>
                <div class="single-movie-info">
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
                    {{ item.year }} / {{ item.types }} /
                    {{ item.actor.replace(/,/g, " ") }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="load-message">
          <div class="load-more" @click="add_data">点击加载更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchHeader from "../components/mheader";
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
      word: "",
      current_page: 1,
      data_list: [],
      sign: 0,
      tab: ""
    };
  },

  methods: {
    get_hot_film(val) {
      hot_film({ pn: this.current_page, lm: 20, tab: this.tab }).then(res => {
        this.push_data(res.data);
      });
    },
    get_hot_variety(val) {
      hot_variety({ pn: this.current_page, lm: 20, tab: this.tab }).then(
        res => {
          this.push_data(res.data);
        }
      );
    },
    get_hot_drama(val) {
      hot_drama({ pn: this.current_page, lm: 20, tab: this.tab }).then(res => {
        this.push_data(res.data);
      });
    },
    get_hot_comic(val) {
      hot_comic({ pn: this.current_page, lm: 20, tab: this.tab }).then(res => {
        this.push_data(res.data);
      });
    },
    push_data(data) {
      if (this.sign) {
        this.data_list = data;
      } else {
        for (let i in data) {
          this.data_list.push(data[i]);
        }
      }
    },
    // 点击变色js
    change_class(val, res) {
      for (let r in res) {
        console.log(res[r]);
        try {
          res[r].className = "movie-list-subject";
        } catch {}
      }
      var element = document.getElementById(val);
      element.className = "movie-list-subject-active";
    },
    add_data() {
      this.current_page++;
      this.sign = 0;
      this.get_data();
    },
    get_rank(val) {
      rank({ pn: this.current_page, lm: 20, ty: val }).then(res => {
        this.push_data(res.data);
      });
    },
    search_by_word(val) {
      this.$router.push({ path: "list_m", query: { word: val } });
    },
    get_data(val, n) {
      if (n) {
        this.sign = 1;
        if (val) {
          var res = document.getElementsByClassName(
            "movie-list-subject-block"
          )[0].children;
          this.change_class(val, res);
        }
      }
      if (val) {
        this.tab = val;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
      if (this.word === "热门电影") {
        this.get_hot_film(val);
      } else if (this.word === "热门电视剧") {
        this.get_hot_variety(val);
      } else if (this.word === "热门综艺") {
        this.get_hot_drama(val);
      } else if (this.word === "热门动漫") {
        this.get_hot_comic(val);
      } else if (this.word === "最新电影") {
        this.get_rank("电影");
      } else if (this.word === "最新电视剧") {
        this.get_rank("电视剧");
      } else if (this.word === "最新综艺") {
        this.get_rank("综艺");
      } else if (this.word === "最新动漫") {
        this.get_rank("动漫");
      }
    },
    check_user() {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      } else {
        this.$router.push({ path: "more", query: { word: this.word } });
      }
    }
  },
  mounted() {
    this.word = this.$route.query.word;
    this.get_data();
    this.check_user();
  }
};
</script>

<style scoped>
.main {
  width: 100%;
}
.movie-list-subject-block {
  box-sizing: border-box;
  padding-bottom: 3px;
}
.movie-list-header {
  width: 100%;
  margin: 20px -10px 0;
  padding: 0 10px 0;
  background: hsla(0, 0%, 100%, 0.86);
}
.container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  box-sizing: border-box;
  margin: auto;
}
.movie {
  width: 100%;
}
.info-tab {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 43px;
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
.title-wrapper {
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  height: 200px;
}
.poster {
  width: 160px;
  height: 100%;
  border-top-left-radius: 8px;
  flex-shrink: 0;
  overflow: hidden;
}
div {
  display: block;
}
.movie-text {
  font-size: 15px;
  line-height: 1.5;
  color: rgba(0, 34, 77, 0.7);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.title-block {
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid rgba(30, 35, 42, 0.08);
}
a {
  color: #175199;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
}
.movie-title {
  font-size: 22px;
  line-height: 1.5;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 95%;
}
.movie-title-text {
  font-size: 25px;
  font-weight: 700;
  line-height: 31px;
}
.movie-info-m {
  padding: 10px 10px 10px 20px;
  color: rgb(133, 144, 166);
  font-size: 13px;
  line-height: 20px;
  display: inline-block !important;
}
.load-message {
  text-align: center;
  color: #999;
  font-size: 14px;
  margin-top: 20px;
}
.movie-list-subject {
  font-size: 13px;
  padding: 4px 8px;
  background: rgb(243, 243, 244);
  border-radius: 15px;
  white-space: nowrap;
  line-height: 2.2;
  box-sizing: border-box;
}
.movie-list-subject-active {
  font-size: 13px;
  padding: 4px 8px;
  background: rgb(243, 243, 244);
  border-radius: 15px;
  white-space: nowrap;
  line-height: 2.2;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  background: #409eff;
}
.movie-info-s >>> .el-rate__text {
  margin-left: 10px;
}
.movie-info-s >>> .el-rate__icon {
  margin-right: 0px;
}
.movie-info-s {
  color: rgb(133, 144, 166);
  font-size: 13px;
  line-height: 20px;
  display: inline-block !important;
  width: 100%;
  text-align: center;
}
.load-more {
  width: 100%;
  margin: 0px auto;
  padding: 8px 0px;
  text-align: center;
  background: rgb(255, 255, 255);
  color: rgb(23, 81, 153);
  border-radius: 4px;
  box-shadow: rgba(30, 35, 42, 0.08) 0px 4px 15px 0px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.search-result-item {
  padding: 15px 15px 0px;
  background: rgb(255, 255, 255);
}
.content {
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgb(242, 244, 246);
  padding-bottom: 15px;
}
.info {
  width: calc(100% - 50px);
}
.type-logo {
  width: 50px;
  font-size: 30px;
  color: rgb(133, 144, 166);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.title {
  font-size: 18px;
  line-height: 2;
  color: rgb(23, 81, 153);
  cursor: pointer;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.website {
  display: flex;
  line-height: 1;
  font-size: 15px;
  color: rgb(133, 144, 166);
  margin-top: 9px;
  -webkit-box-align: center;
  align-items: center;
}
.search-result-list {
  width: 100%;
  border-radius: 4px;
  box-shadow: rgba(30, 35, 42, 0.08) 0px 4px 15px 0px;
}
.search-result-container {
  margin-top: 10px;
}
.border-shadow {
  box-shadow: rgba(30, 35, 42, 0.08) 0px 8px 33px 0px;
  border-radius: 4px;
  background: rgb(255, 255, 255);
  box-sizing: border-box;
}
.card-content {
  box-sizing: border-box;
}
.card {
  margin-top: 0;
  width: 100%;
  padding: 5px 10px 10px;
}
.movie-list-title {
  font-size: 20px;
  font-weight: 700;
  line-height: 2;
}
.movie-list-body {
  display: flex;
  flex-wrap: wrap;
  background: none;
  line-height: 100%;
  margin: 0px -1% -8px;
  box-sizing: border-box;
}
.movie-list-item {
  width: 31.3333%;
  padding: 10px 1% 3px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 4px;
}
.movie-post-wrapper {
  position: relative;
  overflow: hidden;
  color: transparent;
}
.movie-post-lazyload {
  padding-top: 140%;
  border-radius: 4px;
}
.movie-post {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  object-fit: cover;
}
.movie-title-s {
  font-size: 13px;
  font-weight: 700;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.sidebar {
  box-sizing: border-box;
  width: 340px;
}
.single-movie-list-item {
  position: relative;
  overflow: hidden;
  font-size: 12px;
  padding: 0;
  -webkit-transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 130px;
  width: 100%;
}
.single-movie-post {
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: auto;
  margin: 10px 0 0 10px;
  border-radius: 4px;
  object-fit: cover;
}
.movie-post-lazyload {
  padding-top: 140%;
  border-radius: 4px;
}
.el-rate__text {
  margin-left: 10px;
}
.el-rate__icon {
  margin-right: 0px;
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
.single-movie-info {
  padding: 10px 5px 5px 105px;
}
.movie-list-subject:hover {
  color: rgb(255, 255, 255);
  cursor: pointer;
  background: #409eff;
}
</style>
