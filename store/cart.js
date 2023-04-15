export const state = () => ({
  cart: [],
});

export const getters = {
  getCart(state) {
    return state.cart;
  },
};

export const mutations = {
  ADD_TO_CART(state, payload) {
    // state.cart.push(payload)
    let itemInCartIndex = null;
    const itemInCart = state.cart.filter((p) => {
      if (p.id === payload.id) {
        state.cart.forEach((element, index) => {
          element.id === p.id ? (itemInCartIndex = index) : false;
        });
        return true;
      }
    });
    console.log(itemInCart, itemInCartIndex);

    itemInCart.length === 0
      ? state.cart.push(payload)
      : (state.cart[itemInCartIndex].qty =
          parseInt(state.cart[itemInCartIndex].qty) + parseInt(payload.qty));
  },

  REMOVE_FROM_CART(state, index) {
    this.cart = this.cart.filter((x) => x !== index);
  },

  // UPDATE_CART (state, payload) {
  //   this.cart.push(payload)
  // }
};

export const actions = {
  addToCart({ commit }, payload) {
    // eslint-disable-next-line no-console
    console.log(payload);
    const { id, slug, name, image, size, price } = payload.product;
    commit("ADD_TO_CART", {
      id,
      slug,
      name,
      image,
      size,
      price,
      qty: payload.qty,
    });
  },

  removeFromCart({ commit }, index) {
    commit("REMOVE_FROM_CART", index);
  },
};
