<template>
  <div>
    <mheader></mheader>
    <div>
      <div class="main-m">
        <div class="border-shadow-m card-m">
          <div class="card-content-m">
            <div class="movie-list-header-m-m" style="margin: 5px -10px 0;">
              <span class="movie-list-more-m" @click="push_to_more('热门电影')"
                >更多<span class="iconfont icon-detail"></span></span
              ><span class="movie-list-title-m">热门电影</span>
              <div class="movie-list-subject-block-m hot_film">
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
            <div class="movie-list-body-m">
              <div
                class="movie-list-item-m"
                v-for="(item, index) in hot_film_list"
                :key="index"
              >
                <div class="movie-post-m-wrapper-m">
                  <div class="movie-post-m-lazyload-m"></div>
                  <img
                    :src="item.poster"
                    alt=""
                    class="movie-post-m"
                    @click="search_by_word(item.name)"
                  />
                </div>
                <div class="movie-info-m">
                  <div class="movie-title-m" @click="search_by_word(item.name)">
                    {{ item.name }}
                  </div>
                  <el-rate
                    :value="item.score / 2"
                    disabled
                    show-score
                    text-color="#ff9900"
                    :score-template="item.score"
                    style="text-align: center;"
                  >
                  </el-rate>
                </div>
              </div>
            </div>

            <div class="movie-list-header-m">
              <span class="movie-list-more-m" @click="push_to_more('热门电视剧')"
                >更多<span class="iconfont icon-detail"></span></span
              ><span class="movie-list-title-m">热门电视剧</span>
              <div class="movie-list-subject-block-m hot_variety">
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
            <div class="movie-list-body-m">
              <div
                class="movie-list-item-m"
                v-for="(item, index) in hot_variety_list"
                :key="index"
              >
                <div class="movie-post-m-wrapper-m">
                  <div class="movie-post-m-lazyload-m"></div>
                  <img
                    :src="item.poster"
                    alt=""
                    class="movie-post-m"
                    @click="search_by_word(item.name)"
                  />
                </div>
                <div class="movie-info-m">
                  <div class="movie-title-m" @click="search_by_word(item.name)">
                    {{ item.name }}
                  </div>
                  <el-rate
                    :value="item.score / 2"
                    disabled
                    show-score
                    text-color="#ff9900"
                    :score-template="item.score"
                                        style="text-align: center;"
                  >
                  </el-rate>
                </div>
              </div>
            </div>

            <div class="movie-list-header-m">
              <span class="movie-list-more-m" @click="push_to_more('热门综艺')"
                >更多<span class="iconfont icon-detail"></span></span
              ><span class="movie-list-title-m">热门综艺</span>
              <div class="movie-list-subject-block-m hot_drama">
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
            <div class="movie-list-body-m">
              <div
                class="movie-list-item-m"
                v-for="(item, index) in hot_drama_list"
                :key="index"
              >
                <div class="movie-post-m-wrapper-m">
                  <div class="movie-post-m-lazyload-m"></div>
                  <img
                    :src="item.poster"
                    alt=""
                    class="movie-post-m"
                    @click="search_by_word(item.name)"
                  />
                </div>
                <div class="movie-info-m">
                  <div class="movie-title-m" @click="search_by_word(item.name)">
                    {{ item.name }}
                  </div>
                  <el-rate
                    :value="item.score / 2"
                    disabled
                    show-score
                    text-color="#ff9900"
                    :score-template="item.score"
                    style="text-align: center;"
                  >
                  </el-rate>
                </div>
              </div>
            </div>

            <div class="movie-list-header-m">
              <span class="movie-list-more-m" @click="push_to_more('热门动漫')"
                >更多<span class="iconfont icon-detail"></span></span
              ><span class="movie-list-title-m">热门动漫</span>
              <div class="movie-list-subject-block-m hot_comic">
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
            <div class="movie-list-body-m">
              <div
                class="movie-list-item-m"
                v-for="(item, index) in hot_comic_list"
                :key="index"
              >
                <div class="movie-post-m-wrapper-m">
                  <div class="movie-post-m-lazyload-m"></div>
                  <img
                    :src="item.poster"
                    alt=""
                    class="movie-post-m"
                    @click="search_by_word(item.name)"
                  />
                </div>
                <div class="movie-info-m">
                  <div class="movie-title-m" @click="search_by_word(item.name)">
                    {{ item.name }}
                  </div>
                  <el-rate
                    :value="item.score / 2"
                    disabled
                    show-score
                    text-color="#ff9900"
                    :score-template="item.score"
                                        style="text-align: center;"
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
</template>

<script>
import mHeader from "../components/mheader";
import {
  hot_film,
  hot_variety,
  hot_drama,
  hot_comic,
  rank
} from "@/api/search.js";

export default {
  components: { mHeader },
    async asyncData() {
    let data = {};
    await hot_film({ pn: 1, lm: 9, tab: "" }).then(res => {
      data["hot_film_list"] = res.data;
    });
    await hot_drama({ pn: 1, lm: 9, tab: "" }).then(res => {
      data["hot_drama_list"] = res.data;
    });
    await hot_variety({ pn: 1, lm: 9, tab: "" }).then(res => {
      data["hot_variety_list"] = res.data;
    });
    await hot_comic({ pn: 1, lm: 9, tab: "rbdm" }).then(res => {
      data["hot_comic_list"] = res.data;
    });
    return data;
  },
  
  methods: {
    search_by_word(val) {
      this.$router.push({ path: "list_m", query: { word: val } });
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
      hot_film({ pn: 1, lm: 9, tab: val }).then(res => {
        this.hot_film_list = res.data;
      });
      var res = document.getElementsByClassName("hot_film")[0].children;
      if (val) {
        this.change_class(val, res);
      }
    },
    get_hot_variety(val) {
      hot_variety({ pn: 1, lm: 9, tab: val }).then(res => {
        this.hot_variety_list = res.data;
      });
      if (val) {
        var res = document.getElementsByClassName("hot_variety")[0].children;
        this.change_class(val, res);
      }
    },
    get_hot_drama(val) {
      hot_drama({ pn: 1, lm: 9, tab: val }).then(res => {
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
      hot_comic({ pn: 1, lm: 9, tab: val }).then(res => {
        this.hot_comic_list = res.data;
      });
    },
    push_to_more(val) {
      this.$router.push({ path: "more_m", query: { word: val } });
    }
  },
};



</script>
<style>
.main-m {
  width: 100%;
}
.el-rate__icon {
  margin-right: 0px;
  font-size: 16px;
}
.movie-list-title-m {
  font-size: 20px;
  font-weight: 700;
  line-height: 2;
}
.border-shadow-m {
  box-shadow: 0 8px 33px 0 rgba(30, 35, 42, 0.08);
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;
}
.movie-title-m {
  font-size: 13px;
  font-weight: 700;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
.card-m {
  margin-top: 0;
  width: 100%;
  padding: 5px 10px 10px;
}
.movie-post-m-lazyload-m {
  padding-top: 140%;
  background: url(data:image/png;base64,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)
    center center / cover no-repeat;
  border-radius: 4px;
}
.movie-post-m {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 4px;
  object-fit: cover;
}
.movie-list-header-m-m {
  width: 100%;
  margin: 20px -10px 0;
  padding: 0 10px 0;
}
.movie-list-item-m {
  width: 31%;
  padding: 10px 1% 3px;
  font-size: 15px;
  cursor: pointer;
  border-radius: 4px;
}
.movie-list-more-m {
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
.card-content-m {
  box-sizing: border-box;
}

.movie-list-subject-block-m {
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
.movie-post-m-wrapper-m {
  position: relative;
  overflow: hidden;
  color: transparent;
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
.movie-list-body-m {
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
  margin-bottom: 20px;
}
</style>
