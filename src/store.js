import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserAuthenticated: false,
    cartItems: [],
    isCartEmpty: true
  },
  mutations: {
    IS_USER_AUTHENTICATED: (state, payload) => {
      state.isUserAuthenticated = payload
    },
    IS_USER_LOGGOUT: (state, payload) => {
      state.isUserAuthenticated = payload
    },
    ADD_ITEM: (state, payload) => {
      if(state.isCartEmpty){
        state.cartItems.push(payload)
        payload.quantity ++
        state.isCartEmpty = false
        return
      }
        let itemFound = false;
        for(let i = 0; i < state.cartItems.length; i++){
          if(state.cartItems[i].name === payload.name){
            itemFound = true;
            break
          }
        }
        if(itemFound){
          payload.quantity ++
        }else{
          state.cartItems.push(payload)
          payload.quantity ++
        }
    },
    REMOVE_ITEM: (state, payloadLinkIndex) => {
      state.cartItems[payloadLinkIndex].quantity = 0
      state.cartItems.splice(payloadLinkIndex, 1)
      if(!state.cartItems.length){
        state.isCartEmpty = true
      }
    }
  },
  getters: {
    getIsUserAuthenticated (state) {
      return state.isUserAuthenticated
    },
    getCartItems(state){
      return state.cartItems
    },
    getCartEmptyStatus(state){
      return state.isCartEmpty
    }
  },
  actions: {
    removeItemAction: (context, payloadLink) => {
      context.commit('REMOVE_ITEM', payloadLink)
    }
  }
})
