export const state = () => ({
  modal: {
    active: false,
  },
  dynamaite:{
    gameStarted:false,
    clickCount:0,
    clickerBuy:false,
    clickersBought:0,
  }

})

export const mutations = {
  setModalActive (state, value) {
    state.modal.active = value
  },
  addDynamite (state,payload) {
    state.dynamaite.clickCount += payload
  },
  buyClickers (state) {
    state.dynamaite.clickCount -= 10
    state.dynamaite.clickersBought++
    state.dynamaite.clickerBuy=true
  },
  resetBuyClickers (state) {
    state.dynamaite.clickerBuy=false
  },
  gameStarted(state) {
    state.dynamaite.gameStarted=true
  }
}

export const actions = {
  toggleModal (context) {
    console.log(context);
    context.commit('setModalActive', !context.state.modal.active);
  },
  addClick (context,payload) {
    context.commit('addDynamite',payload);
  },
  buyClicker(context) {
    context.commit('buyClickers');
  },
  resetBuyClicker(context) {
    context.commit('resetBuyClickers');
  },
  gameStarted(context) {
    context.commit('gameStarted');
  }
}
