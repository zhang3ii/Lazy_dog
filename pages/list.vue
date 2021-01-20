<template>
  <div>
    <searchHeader></searchHeader>
    <div class="container">
      <div class="main">
        <div
          v-for="(item, index) in returnData"
          :key="index"
          style="margin-top:20px"
        >
          <div class="movie border-shadow">
            <div class="title-wrapper">
              <div class="poster">
                <img :src="item.poster" height="100%" />
              </div>
              <div class="title-block">
                <div class="movie-title">
                  <div class="movie-title-text">
                    {{ item.name }}
                  </div>
                </div>
                <div class="movie-info-m">
                  <div class="info-tab">
                    <span style="color:black">导演：</span>{{ item.director }}
                  </div>
                  <div class="info-tab">
                    <span style="color:black">演员：</span>{{ item.actor }}
                  </div>
                  <div class="info-tab">
                    <span style="color:black">标签：</span>{{ item.tags }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="search-result-container">
            <ul class="search-result-list">
              <div>
                <li
                  class=" search-result-item"
                  v-for="(i, j) in item.source"
                  :key="j"
                >
                  <div class=" content">
                    <div class="info">
                      <div class="title">
                        <a target="_blank" :href="i.url">{{ i.title }}</a>
                      </div>
                    </div>
                    <span class="type-logo iconfont icon-online">
                      <a target="_blank" :href="i.url"
                        ><i class="el-icon-video-play"></i></a
                    ></span>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div class="load-message">
          <div class="load-more" @click="get_more_data" v-if="more">
            点击加载更多
          </div>
          <div class="load-more" v-else>
            已经到底了
          </div>
        </div>
      </div>
      <div class="sidebar">
        <div style="z-index: 3; position: sticky; top: 89px;">
          <div class="card border-shadow">
            <div class="card-content">
              <span class="movie-list-title">相关推荐</span>
              <div class="movie-list-body">
                <div
                  class="movie-list-item"
                  v-for="(item, index) in recommend_list"
                  :key="index"
                >
                  <div class="movie-post-wrapper">
                    <div class="movie-post-lazyload"></div>
                    <img
                      :src="item.poster"
                      alt=""
                      class="movie-post"
                      @click="search_by_click(item.name)"
                    />
                  </div>
                  <div class="movie-info-s">
                    <div
                      class="movie-title-s"
                      @click="search_by_click(item.name)"
                    >
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
      </div>
    </div>
  </div>
</template>

<script>
import searchHeader from "../components/header";
import { search_video, recommend } from "@/api/search.js";
export default {
  components: { searchHeader },
  data() {
    return {
      word: "",
      returnData: [],
      current_page: 1,
      recommend_list: [],
      more: true
    };
  },
  async asyncData({ route }) {
    var data = {};
    await search_video({ k: route.query.word, p: "1" }).then(res => {
      data["returnData"] = res.data;
    });
    await recommend({ mid: data["returnData"][0].mid }).then(r => {
      data["recommend_list"] = r.data.recommend;
    });
    return data;
  },
  methods: {
    search_by_click(val) {
      window.location.href = window.location.origin + "/list?word=" + val;
    },
    search_by_word(val) {
      window.location.href = window.location.origin + "/list?word=" + val;
    },
    get_more_data() {
      this.current_page++;
      search_video({ k: this.word, p: this.current_page }).then(res => {
        if (res.data) {
          this.more = true;
          for (let i in res.data) {
            this.returnData.push(res.data[i]);
          }
        } else {
          this.more = false;
        }
      });
    },
    get_recommend(val) {
      recommend({ mid: val }).then(res => {
        this.recommend_list = res.data.recommend;
      });
    }
  },
  mounted() {
    this.word = this.$route.query.word;
  }
};
</script>

<style scoped>
.main {
  width: 600px;
  margin-right: 20px;
}
.container {
  width: 1000px;
  padding: 15px 20px;
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
.border-shadow {
  box-shadow: rgba(30, 35, 42, 0.08) 0px 8px 33px 0px;
  border-radius: 4px;
  background: rgb(255, 255, 255);
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
  padding: 10px 10px 10px 20px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
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
</style>
