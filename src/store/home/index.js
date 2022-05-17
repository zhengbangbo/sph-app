import {reqBannerList, reqCategoryList} from '@/api'

const state = {
  categoryList: [],
  bannerList: [],
}
const mutations = {
  CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList
  },
  BANNER_LIST(state, bannerList) {
    console.log('修改仓库数据')
    state.bannerList = bannerList
  }
}
const actions = {
  async categoryList({commit}) {
    let result = await reqCategoryList()
    if (result.code == 200) {
      commit("CATEGORY_LIST", result.data)
    }
  },
  async BannerList({commit}) {
    console.log('获取服务器数据')
    let result = await reqBannerList()
    console.log(result)
    if (result.code == 200) {
      commit("BANNER_LIST", result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
