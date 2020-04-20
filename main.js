var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks' ,
        image: './assets/vmSocks-green-onWhite.jpg' ,
        url: 'https://vuejs.org/v2/guide/' ,
        inventory: 12 ,
        onSale: false ,
        details: ["80% cotton", "20% polyester", "Gender-Neutral"] ,
        variants: [
            {
                variantsId: 2234,
                variantsColor: "green"
            },
            {
                variantsId: 2235,
                variantsColor: "blue"
            }
        ] ,
        cart: 0 
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        }
    }        
})