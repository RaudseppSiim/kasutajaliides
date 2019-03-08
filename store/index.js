export const state = () => ({
  modal: {
    active: false,
  },
  dynamaite:{
    clickCount:0,
    clickerBuy:false
  }

})

export const mutations = {
  setModalActive (state, value) {
    state.modal.active = value;
  },
  addDynamiteOne (state) {
    state.dynamaite.clickCount++;
  },
  buyClickers (state) {
    state.dynamaite.clickCount -= 10
    state.dynamaite.clickerBuy=true
  }
}

export const actions = {
  toggleModal (context) {
    console.log(context);
    context.commit('setModalActive', !context.state.modal.active);
  },
  addClick (context) {
    console.log(context);
    context.commit('addDynamiteOne');
  },
  buyClicker(context) {
    context.commit('buyClickers');
  }
}
