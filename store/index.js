export const state = () => ({
  modal: {
    active: false,
  }
})

export const mutations = {
  setModalActive (state, value) {
    state.modal.active = value;
  }
}

export const actions = {
  toggleModal (context) {
    console.log(context);
    context.commit('setModalActive', !context.state.modal.active);
  }
}
