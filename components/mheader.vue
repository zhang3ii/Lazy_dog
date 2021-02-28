<template>
  <div class="other-header">
    <div class="app-bar">
      <div class="header">
        <div class="logo-wrapper">
          <img
            style="height: 55%;width: 100%"
            src="@/static/logo.png"
            onclick="javascript:location.href='/index_m'"
          />
        </div>
        <div class="search-box">
          <input
            type="text"
            placeholder="电影、剧集、综艺、动漫……"
            v-model="key_word"
            class="search-field"
            @keypress.enter="search"
          />
          <button class="search-button">
            <i class="el-icon-search" @click="search" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { search_video } from "@/api/search.js";
export default {
  data() {
    return {
      key_word: ""
    };
  },
  methods: {
    search() {
      console.log(this.key_word);
      if (this.key_word) {
        this.$parent.search_by_word(this.key_word);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }
  },
  mounted() {
    this.key_word = this.$route.query.word;
  }
};
</script>

<style>
.app-bar {
  box-shadow: 0 8px 33px 0 rgba(30, 35, 42, 0.08);
  width: 100%;
  background: #fff;
}
.other-header {
  z-index: 99;
  position: sticky;
  top: 0px;
}

.header {
  width: 100%;
  height: 74px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
}
.logo-wrapper {
  width: 30%;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.search-box {
  box-shadow: rgba(0, 34, 77, 0.1) 0px 2px 2px 0px,
    rgba(30, 35, 42, 0.08) 0px 0px 0px 1px;
  width: 60%;
  height: 44px;
  border-radius: 2px;
  display: flex;
  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
}
.search-field {
  border: none;
  padding: 0px 0px 0px 15px;
  outline: none;
  height: 100%;
  flex: 1 1 0%;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
}
.search-button {
  text-align: center;
  width: 54px;
  height: 100%;
  padding: 0px;
  background: rgb(255, 255, 255);
  border: none;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  cursor: pointer;
  display: block;
  outline: none;
}
</style>
