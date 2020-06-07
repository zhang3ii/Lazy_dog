<template>
    <div>
        <div class="container">
            <div class="bar">
                <div class="header">
                    <div class="logo-wrapper">
                        <img src="https://cupfox-1252826939.file.myqcloud.com/cupfox/logo-4fb5c3e3d6.svg" alt="cupfox" class="logo">
                    </div>
                    <div class="search-box">
                        <input type="text" placeholder="电影、剧集、动漫、节目……" class="search-field" value="大饿">
                    </div>
                </div>
                <div class="bottom">
                    <div class="tab-bar">
                        <a-menu v-model="current" mode="horizontal">
                            <a-menu-item key="online">在线</a-menu-item>
                            <a-menu-item key="download">下载</a-menu-item>
                            <a-menu-item key="subtitle">字幕</a-menu-item>
                        </a-menu>
                    </div>
                </div>

            </div>
        </div>
        <div class="container-bottom">
            <div class="main">
                <div class="search-other-names">
                    <p>搜索其他片名:</p>
                    <span style="margin-left:10px;">
                        <a>春潮 Spring Tide</a>
                    </span>
                </div>
            </div>
            <div class="search-result-container">
                <div class="search-result-list">
                    <a-list item-layout="horizontal" :data-source="data">
                        <a-list-item slot="renderItem" slot-scope="item" style="margin:10px">
                            <div class="title">{{item.title}}</div>
                            <div slot="extra">
                                <a-tag color="#f50">在线播放</a-tag>
                                <a-tag color="#2db7f5">人人影视</a-tag>
                            </div>
                        </a-list-item>
                    </a-list>
                </div>
            </div>
            <div class="movie">
                <div class="title-wrapper">
                    <div class="title-block">
                        <div class="movie-title">
                            <div class="movie-title-text">
                                春潮
                            </div>
                        </div>
                        <div class="movie-info">
                            <span>
                                <a href="https://movie.douban.com/subject/27186348/" target="_blank" rel="noopener noreferrer" class="">
                                    <div class="rating-l">豆瓣</div>
                                    <div class="rating-r">7.2</div>
                                </a>
                                2019 ‧ 剧情/家庭
                            </span>
                        </div>
                    </div>
                    <div class="poster">
                        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2604517782.jpg" alt="" :width="100">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const data = [
  {
    title: '春潮 在线播放 - 低端影视',
  },
  {
    title: '春潮 在线播放 - 夜晚影视库',
  },
  {
    title: '春潮 在线播放 - 夜晚影视库',
  },
  {
    title: '春潮 在线播放 - 夜晚影视库',
  },
];
export default {
  data() {
    return {
      data,
    };
  },
};
</script>


<style>
    .container{
        color: #333;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        padding: 10px 2%;
    }
    .bar{
        box-shadow: rgba(30, 35, 42, 0.08) 0px 8px 33px 0px;
        width: 100%;
    }
    .header{
        display: flex;
        padding-top: 15px;
        box-sizing: border-box;
        background: rgb(255, 255, 255);
    }
    .logo{
        max-width: 100%;
        height: 30px;
        cursor: pointer;
        margin: 0px;
        padding: 7px 13px;
    }
    .logo-wrapper{
        width: 140px;
    }
    .search-box{
        box-shadow: 0 2px 2px 0 rgba(0,34,77,0.1),0 0 0 1px rgba(30,35,42,0.08) !important;
        width: 600px !important;
    }
    .search-field{
        width: 520px;
        border: none;
        padding: 0 0 0 15px;
        outline: none;
        height: 100%;
        flex: 1;
        color: rgb(51,51,51);
    }
    .tar-bar{
        height: 100%;
        font-size: 14px;
    }
    .bottom{
        padding-left: 140px;
        padding-top: 12px;
        background: rgb(255, 255, 255);
    }
    .container-bottom{
        padding: 33px 0px 0px 140px;
    
    }
    .main{
        padding-bottom: 20px; 
        margin-right: 20px; 
        width: 600px;
    }
    .search-other-names{
        display: flex;
        font-size: 15px;
        margin-bottom: 15px;
    }
    .search-result-container{
        width: 50%;
        box-shadow: rgba(30, 35, 42, 0.08) 0px 4px 15px 0px;
        border-radius: 4px;
        float: left;
    }
    .title{
        font-size: 18px;
        line-height: 1.2;
        color: rgb(23, 81, 153);
    }
    .movie{
        box-shadow: rgba(30, 35, 42, 0.08) 0px 8px 33px 0px;
        border-radius: 4px;
        background: rgb(255, 255, 255);
        width: 30%;
        float: left;
        margin-left: 20px;
    }
    .title-wrapper{
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        height: 145px;
    }
    .title-block{
        display: flex;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-bottom: 1px solid rgba(30, 35, 42, 0.08);
    }
    .movie-title{
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
        padding: 10px 20px 10px 15px;
    }
    .movie-title-text{
        font-size: 25px;
        line-height: 31px;
    }
    a{
        color: #175199;
        text-decoration: none;
        cursor: pointer;
    }
    .rating-l{
        font-size: 13px;
        font-weight: bold;
        line-height: 20px;
        display: inline-block !important;
        color: rgb(255, 255, 255);
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        padding: 1px 4px;
        background: rgb(85, 184, 58);
    }
    .rating-r{
        font-size: 13px;
        font-weight: bold;
        line-height: 20px;
        display: inline-block !important;
        color: rgb(85, 184, 58);
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        margin-right: 8px;
        padding: 0px 5px;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(85, 184, 58);
        border-image: initial;
    }
    .poster{
        word-break: break-all;
        width: 100px;
        height: 100%;
        border-top-right-radius: 8px;
        flex-shrink: 0;
        overflow: hidden;
    }
    .movie-info{
        color: rgb(133, 144, 166);
        font-size: 12px;
        display: inline-block !important;
        padding: 10px 10px 10px 15px;
    }
</style>