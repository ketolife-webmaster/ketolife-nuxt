export const state = () => ({
  cart: [],
});

export const getters = {
  getCart(state) {
    return state.cart;
  },

  getCartSummary(state) {
    let summary = {
      subtotal: 0,
      shipping: 10,
      tax: 0,
      total: 0,
    };

    state.cart.forEach((product) => {
      summary.subtotal = summary.subtotal + (product.price * product.qty)
    });

    // TODO: Shipping from configs
    // TODO: Tax from configs

    summary.tax = parseFloat(((summary.subtotal + summary.shipping) * 0.05).toFixed(2))

    summary.total = summary.subtotal + summary.shipping + summary.tax

    return summary;
  },
};

export const mutations = {
  ADD_TO_CART(state, payload) {
    let itemInCartIndex = null;
    const itemInCart = state.cart.filter((p) => {
      if (p.id === payload.id) {
        state.cart.forEach((element, index) => {
          element.id === p.id ? (itemInCartIndex = index) : false;
        });
        return true;
      }
    });

    itemInCart.length === 0
      ? state.cart.push(payload)
      : (state.cart[itemInCartIndex].qty =
          parseInt(state.cart[itemInCartIndex].qty) + parseInt(payload.qty));
  },

  REMOVE_FROM_CART(state, indexInCart) {
    state.cart = state.cart.filter((x, index) => index !== indexInCart);
  },

  UPDATE_PRODUCT_QUANTITY(state, payload) {
    state.cart[payload.index].qty = payload.qty;
  },
};

export const actions = {
  addToCart({ commit }, payload) {
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
    console.log(index);
    commit("REMOVE_FROM_CART", index);
  },

  updateProductQuantity({ commit }, payload) {
    commit("UPDATE_PRODUCT_QUANTITY", payload);
  },
};
