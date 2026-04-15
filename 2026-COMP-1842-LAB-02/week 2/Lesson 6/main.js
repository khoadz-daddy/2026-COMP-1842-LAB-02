const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      inStock: true,
      cart: 0,
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
      ]
    }
  },
  methods: {
    updateImage(variantImage) {
      this.image = variantImage
    },
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart > 0) this.cart -= 1
    }
  }
})
