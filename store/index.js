
export const state = () => ({
  modal: {
    active: false,
  },
  dynamaite:{
    gameStarted:false,
    gameStartTime:null,
    clickCount:0,
    clickerBuy:false,
    clickersBought:0,
    gameOver:false
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
  gameStarted(state,value) {
    state.dynamaite.gameStartTime=value;
    state.dynamaite.gameStarted=true
  },
  gameOver(state,value){
    state.dynamaite.gameOver=value
  },
  resetGame(state){
    state.dynamaite.gameStarted=false
    state.dynamaite.clickCount=0
    state.dynamaite.clickerBuy=false
    state.dynamaite.clickersBought=0,
    state.dynamaite.gameOver=false
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
  gameStarted(context,value) {
    context.commit('gameStarted',value);
  },
  gameOverAction(context) {
    context.commit('gameOver',!context.state.dynamaite.gameOver);
  },
  resetGame(context){
    context.commit('resetGame');
  }
}
