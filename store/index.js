export const state = () => ({
  configurations: null,
  underconstruction: false,
  notification: null,
});

export const getters = {
  getConfigurations(state) {
    return state.configurations;
  },
  getCurrency(state) {
    return state.configurations.locations[0].price_format;
  },
  getWhatsApp(state) {
    return {
      number: state.configurations?.whatsapp_number,
      text: state.configurations?.whatsapp_message,
    };
  },
  getNotification(state) {
    return state.notification;
  },
};

export const mutations = {
  SET_WEBSITE_CONFIGURATIONS(state, payload) {
    state.configurations = payload;
  },

  SET_UNDERCONSTRUCTION(state, payload) {
    state.underconstruction = payload;
  },

  SET_NOTIFICATION(state, payload) {
    state.notification = payload;
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    const configurations = await this.$calls.items({
      collection: "configurations",
      fields: "whatsapp_number, whatsapp_message, locations.price_format",
    });

    commit("SET_WEBSITE_CONFIGURATIONS", configurations?.data);
  },

  toogleUnderconstruction({ commit }, payload) {
    commit("SET_UNDERCONSTRUCTION", payload);
  },

  setNotification({ commit }, payload) {
    commit("SET_NOTIFICATION", payload);
  },
};
