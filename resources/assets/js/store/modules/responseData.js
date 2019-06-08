import axios from 'axios'
const responseData = {
  state: {
    feecates: [],
    warehouses: [],
    platforms: [],
    printreports: [],
    freighttypes: [],
    suppliers: [],
    goodscates: [],
    shops: [],
    stockintypes: [],
    products: [],
    purchasereturntypes: [],
    distributions: [],
    distmets: [],
    logistics: [],
    distributiontypes: [],
    takedeliverygoodsways: [],
    customertypes: [],
    paymentmethods: [],
    feetypes: [],
    // add by xuetao
    aftersalestate: [],
    aftersaletype: [],
    refundreasontype: [],
    refundMethod: [],
    //add by memokun
    packageType: [],
    refundMethod: [],
    resupplieCategory: [],
    resupplieResponsible: [],
    productcomponents: []

  },
  mutations: {
    GET_FEECATES: (state, arr) => {
      state.feecates = arr;
    },
    GET_WAREHOUSE: (state, arr) => {
      state.warehouses = arr;
    },
    GET_PLATFORMS: (state, arr) => {
      state.platforms = arr;
    },
    PRINT_REPORTS: (state, arr) => {
      state.printreports = arr;
    },
    FREIGHT_TYPE: (state, arr) => {
      state.freighttypes = arr;
    },
    SUPPLIERS: (state, arr) => {
      state.suppliers = arr;
    },
    GOODS_CATE: (state, arr) => {
      state.goodscates = arr;
    },
    DISTMET: (state, arr) => {
      state.distmets = arr;
    },
    SHOPS: (state, arr) => {
      state.shops = arr;
    },
    STOCKINTYPE: (state, arr) => {
      state.stockintypes = arr;
    },
    PRODUCTS: (state, arr) => {
      state.products = arr;
    },
    PURCHASERETURNTYPES: (state, arr) => {
      state.purchasereturntypes = arr;
    },
    DISTRIBUTIONS: (state, arr) => {
      state.distributions = arr;
    },
    LOGISTICS: (state, arr) => {
      state.logistics = arr;
    },
    DISTRIBUTIONTYPES: (state, arr) => {
      state.distributiontypes = arr;
    },
    TAKEDELIVERYGOODSWAYS: (state, arr) => {
      state.takedeliverygoodsways = arr;
    },
    CUSTOMERTYPES: (state, arr) => {
      state.customertypes = arr;
    },
    PAYMENTMETHODS: (state, arr) => {
      state.paymentmethods = arr;
    },
    FEETYPES: (state, arr) => {
      state.feetypes = arr;
    },
    // add by xuetao
    AFTERSALESTATE: (state, arr) => {
      state.aftersalestate = arr;
    },
    AFTERSALETYPE: (state, arr) => {
      state.aftersaletype = arr;
    },
    REFUNDREASONTYPE: (state, arr) => {
      state.refundreasontype = arr;
    },
    REFUNDMETHOD: (state, arr) => {
      state.refundMethod = arr;
    },
    //add by memokun
    PACKAGETYPE: (state, arr) => {
      state.packageType = arr;
    },
    REFUNDMETHOD: (state, arr) => {
      state.refundMethod = arr;
    },
    RESUPPLIECATEGORY: (state, arr) => {
      state.resupplieCategory = arr;
    },
    RESUPPLIERESPONSIBLE: (state, arr) => {
      state.resupplieResponsible = arr;
    },
    PRODUCTCOMPONENTS: (state, arr) => {
      state.productcomponents = arr;
    },
  },
  actions: {
    feecates({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('GET_FEECATES', res.data.data);
          return
        })
    },
    warehouses({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('GET_WAREHOUSE', res.data.data);
          return
        })
    },
    platforms({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('GET_PLATFORMS', res.data.data);
          return
        })
    },
    printreports({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('PRINT_REPORTS', res.data.data);
          return res.data.data
        })
    },
    freighttypes({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('FREIGHT_TYPE', res.data.data);
          return res.data.data
        })
    },
    suppliers({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('SUPPLIERS', res.data.data);
          return res.data.data
        })
    },
    goodscates({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('GOODS_CATE', res.data.data);
          return res.data.data
        })
    },
    shops({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('SHOPS', res.data.data);
          return res.data.data
        })
    },
    stockintypes({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('STOCKINTYPE', res.data.data);
          return res.data.data
        })
    },
    products({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('PRODUCTS', res.data.data);
          return res.data.data
        })
    },
    purchasereturntypes({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('PURCHASERETURNTYPES', res.data.data);
          return res.data.data
        })
    },
    distributions({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('DISTRIBUTIONS', res.data.data);
          return res.data.data
        })
    },
    distmets({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('DISTMET', res.data.data);
          return res.data.data
        })
    },
    logistics({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('LOGISTICS', res.data.data);
          return res.data.data
        })
    },
    distributiontypes({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('DISTRIBUTIONTYPES', res.data.data);
          return res.data.data
        })
    },
    takedeliverygoodsways({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('TAKEDELIVERYGOODSWAYS', res.data.data);
          return res.data.data
        })
    },
    customertypes({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('CUSTOMERTYPES', res.data.data);
          return res.data.data
        })
    },
    paymentmethods({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('PAYMENTMETHODS', res.data.data);
          return res.data.data
        })
    },
    feetypes({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('FEETYPES', res.data.data);
          return res.data.data
        })
    },
    // add by xuetao
    aftersalestate({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('AFTERSALESTATE', res.data.data);
          return res.data.data
        })
    },
    aftersaletype({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('AFTERSALETYPE', res.data.data);
          return res.data.data
        })
    },
    refundreasontype({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('REFUNDREASONTYPE', res.data.data);
          return res.data.data
        })
    },
    refundMethod({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('REFUNDMETHOD', res.data.data);
          return res.data.data
        })
    },
    //add by memokun
    packageType({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('PACKAGETYPE', res.data.data);
          return res.data.data
        })
    },
    refundMethod({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('REFUNDMETHOD', res.data.data);
          return res.data.data
        })
    },
    resupplieCategory({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('RESUPPLIECATEGORY', res.data.data);
          return res.data.data
        })
    },
    resupplieResponsible({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('RESUPPLIERESPONSIBLE', res.data.data);
          return res.data.data
        })
    },
    productcomponents({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('PRODUCTCOMPONENTS', res.data.data);
          return res.data.data
        })
    },
    roles({
      commit
    }, url) {
      axios.get(url, {
          params: {
            'status': true
          }
        })
        .then(res => {
          commit('ROLES', res.data.data);
          return res.data.data
        })
    },
  }
};

export default responseData;