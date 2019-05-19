import Cookies from 'js-cookie'

const app1 = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop'
  },

  mutations: {
    TOGGLE_SIDEBAR:state => {
      if(state.sidebar.opened) {
        Cookie.set('sidebarStatus',1)
      } else {
        Cookie.set('sidebarStatus',0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state,withoutAnimation) => {
      Cookies.set('sidebarStatus',1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE:(state,device) => {
      state.device = device
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit} ,{ withoutAnimation }) {
      commit('CLOSE_SIDEBAR',withoutAnimation)
    }
  }
}

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state,token) => {
      state.token = token
    }
  }
}