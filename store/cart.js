export const state = () => ({
  cart: [],
})

export const getters = {
  getCart(state) {
    return state.cart
  },
}

export const mutations = {
  ADD_TO_CART(state, payload) {
    this.cart.push(payload)
  },

  REMOVE_FROM_CART(state, index) {
    this.cart = this.cart.filter((x) => x !== index)
  },

  // UPDATE_CART (state, payload) {
  //   this.cart.push(payload)
  // }
}

export const actions = {
  addToCart({ commit }, payload) {
    // eslint-disable-next-line no-console
    console.log(payload)
    // const { id, slug, name, image, size, price } = payload
    // commit('ADD_TO_CART', {
    //   id,
    //   slug,
    //   name,
    //   image,
    //   size,
    //   price,
    // })
    // TODO: Fix fields when fix api-call fields parameter
  },

  removeFromCart({ commit }, index) {
    commit('REMOVE_FROM_CART', index)
  },
}
