import { createStore } from 'vuex';

export default createStore({
  state: {
    productsList: [
      {
        id: 1,
        title: 'High-Back Bench',
        descr:
          'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: require('../assets/img/1.jpg'),
        price: 12.99,
      },
      {
        id: 2,
        title: 'Albany Table',
        descr:
          'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge',
        img: require('../assets/img/2.jpg'),
        price: 9.99,
      },
      {
        id: 3,
        title: 'Accent Chair',
        descr:
          'DEPRECIATION - The cushioned midsole is made from cushioning foam; STRENGTH - Extra overlays all over for durability.; SURFACE GRIP - Durable and flexible rubber outsole provides excellent traction.',
        img: require('../assets/img/3.jpg'),
        price: 11.99,
      },
      {
        id: 4,
        title: 'Sofa-Back',
        descr:
          'DEPRECIATION - The cushioned midsole is made from cushioning foam; STRENGTH - Extra overlays all over for durability.; SURFACE GRIP - Durable and flexible rubber outsole provides excellent traction.',
        img: require('../assets/img/4.jpg'),
        price: 19.99,
      },
      {
        id: 5,
        title: 'High-Sofa',
        descr:
          'DEPRECIATION - The cushioned midsole is made from cushioning foam; STRENGTH - Extra overlays all over for durability.; SURFACE GRIP - Durable and flexible rubber outsole provides excellent traction.',
        img: require('../assets/img/5.jpg'),
        price: 5.99,
      },
      {
        id: 6,
        title: 'Sofa-Bench',
        descr:
          'DEPRECIATION - The cushioned midsole is made from cushioning foam; STRENGTH - Extra overlays all over for durability.; SURFACE GRIP - Durable and flexible rubber outsole provides excellent traction.',
        img: require('../assets/img/6.jpg'),
        price: 69.99,
      },
    ],
  },
  getters: {
    products(state) {
      return state.productsList;
    },

    getProduct: (state) => (id) => {
      return state.productsList.find((el) => el.id === id);
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
