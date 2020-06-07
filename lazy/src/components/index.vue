<template>
<div class="movideMain">
    <img src="https://cupfox-1252826939.file.myqcloud.com/cupfox/logo-4fb5c3e3d6.svg" alt="cupfox" class="logo">
    <div class="search-box">
        <input type="text" placeholder="电影、剧集、动漫、节目……" value="" class="search-field">
        
        <button class="search-button"><span class="icon-search"></span></button>
    </div>
    <div class="movies-recommend">
        <div class="recommend-header">
            <div class="recommend-label">
                <span class="label-text">近期佳片</span>
                <div class="label-front"></div>
                <div class="label-back"></div>
            </div>
            <div class="recommend-list">
                <a-card :bordered="false">
                    <a-card-grid style="width:33%;text-align:center">
                        <div class="img-box">
                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2604517782.jpg"
                                class="logo-img"
                            />
                        </div>
                        <div class="move-item">
                            <div class="movie-title">
                                春潮
                            </div>
                            <div>
                                <span>
                                    <a-rate v-model="value" disabled/>
                                    <span>7.2</span>
                                </span>
                            </div>
                            <div class="movie-text">2019 / 剧情 / 家庭 / 杨荔钠 / 郝蕾 / 金燕玲 / 曲隽希</div>
                                
                        </div>
                    </a-card-grid>
                    <a-card-grid style="width:33%;text-align:center">
                        <div class="img-box">
                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2604517782.jpg"
                                class="logo-img"
                            />
                        </div>
                        <div class="move-item">
                            <div class="movie-title">
                                春潮
                            </div>
                            <div>
                                <span>
                                    <a-rate v-model="value" disabled/>
                                    <span>7.2</span>
                                </span>
                            </div>
                            <div class="movie-text">2019 / 剧情 / 家庭 / 杨荔钠 / 郝蕾 / 金燕玲 / 曲隽希</div>
                                
                        </div>
                    </a-card-grid>
                    <a-card-grid style="width:33%;text-align:center">
                        <div class="img-box">
                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2604517782.jpg"
                                class="logo-img"
                            />
                        </div>
                        <div class="move-item">
                            <div class="movie-title">
                                春潮
                            </div>
                            <div>
                                <span>
                                    <a-rate v-model="value" disabled/>
                                    <span>7.2</span>
                                </span>
                            </div>
                            <div class="movie-text">2019 / 剧情 / 家庭 / 杨荔钠 / 郝蕾 / 金燕玲 / 曲隽希</div>
                                
                        </div>
                    </a-card-grid>
                </a-card>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            value: 3,
        }
    }
}
</script>

<style scoped>

.search-box{
    box-shadow: 0 8px 33px 0 rgba(30,35,42,0.08);
    background: #fff;
    width: 100%;
    height: 44px;
    border-radius: 2px;
    display: flex;
    transition: box-shadow 200ms cubic-bezier(0.4,0,0.2,1);
}
.search-field{
    width: 520px;
    border: none;
    padding: 0 0 0 15px;
    outline: none;
    height: 100%;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: rgb(51,51,51);
}

.movies-recommend {
    background-color: rgb(255, 255, 255);
    margin-top: 40px;
    width: 100%;
    box-shadow: rgba(30, 35, 42, 0.08) 0px 8px 33px 0px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 4px;
}
.recommend-label{
    display: inline-block;
    position: relative;
    font-size: 0;
}

.label-front{
    line-height: 1.15;
    color: #333;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    word-break: break-all;
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 2px;
    transform: skew(-10deg);
    z-index: 1;
    background: #db542f;
}
.label-back{
    line-height: 1.15;
    color: #333;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    word-break: break-all;
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 2px;
    transform: skew(-10deg);
    z-index: 1;
    background: rgba(219,84,47,0.4);
    margin-left: 3px;
    margin-top: 3px;
}
.label-text{
    font-size: 13px;
    font-weight: 700;
    color: #fff;
    position: relative;
    z-index: 2;
    display: inline-block;
    padding: 2px 6px 3px;
}
.logo-img{
    position: relative;
    top: 0px;
    left: 0px;
    width: 100px;
    height: auto;
    margin: 10px 0px 0px 10px;
    border-radius: 4px;
}
.movie-title{
    font-size: 17px;
    height: 20px;
    font-weight: bold;
    margin-bottom: 4px;
    margin-left: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.movie-text{
    margin-top: 3px;
    line-height: 14px;
    height: 28px;
    color: rgba(0, 34, 77, 0.7);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.movideMain{
    width: 800px;
    box-sizing: border-box;
    overflow: hidden;
    margin: 100px auto;
}
.ant-card-grid {
    box-shadow: 0 0 0 0 #e8e8e8, 0 0 0 0 #e8e8e8, 0 0 0 0 #e8e8e8, 0 0 0 0 #e8e8e8 inset, 0 0 0 0 #e8e8e8 inset;
}
.logo{
    height: 92px;
    display: block;
    margin: 30px auto;
}

</style>


