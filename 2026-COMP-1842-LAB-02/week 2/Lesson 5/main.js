const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      inStock: true,
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
      ]
    }
  },
  methods: {
    updateImage(variantImage) {
      this.image = variantImage
    }
  }
})
