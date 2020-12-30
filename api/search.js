import request from '@/middleware/request'


// 影视搜索接口
export function search_video(params) {
  return request({
    url: 'http://39.97.213.248:8080/main/api/search/',
    method: 'get',
    params
  })
}

// 热门电影接口
export function hot_film(params) {
  return request({
    url: 'http://39.97.213.248:8080/main/api/film/',
    method: 'get',
    params
  })
}

// 热门综艺接口
export function hot_drama(params) {
  return request({
    url: 'http://39.97.213.248:8080/main/api/drama/',
    method: 'get',
    params
  })
}


// 热门电视剧接口
export function hot_comic(params) {
  return request({
    url: 'http://39.97.213.248:8080/main/api/comic/',
    method: 'get',
    params
  })
}


// 热门动漫接口
export function hot_variety(params) {
  return request({
    url: 'http://39.97.213.248:8080/main/api/variety/',
    method: 'get',
    params
  })
}

// 首页更新榜单
export function rank(params) {
  return request({
    url: 'http://39.97.213.248:8080/main/api/rank/',
    method: 'get',
    params
  })
}

// 搜索推荐
export function recommend(params) {
  return request({
    url: 'http://39.97.213.248:8080/main/api/recommend/',
    method: 'get',
    params
  })
}

