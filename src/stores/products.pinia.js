import { defineStore } from 'pinia'
import pepsiImg from '@/assets/remove/pepsi.png';
import chortoqImg from '@/assets/remove/chortoq.png';

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Напиток Pepsi  0,5л ',
                price: 7000,
                img: pepsiImg,
                quantity: 1,
            },

            {
                id: 3,
                name: 'Жидкий Persil Свежесть супер пупер тоза ваше зур яна нимадир',
                price: 64000,
                img: '',
                quantity: 2,
            },
            {
                id: 4,
                name: 'Мин. Вода Chortoq',
                price: 6000,
                img: chortoqImg,
                quantity: 0,
            }
        ],
        cart: [
            {
                id: 1,
                name: 'Напиток Pepsi  0,5л ',
                price: 7000,
                img: pepsiImg,
                quantity: 1,
            },
            {
                id: 3,
                name: 'Жидкий Persil Свежесть супер пупер тоза ваше зур яна нимадир',
                price: 64000,
                img: '',
                quantity: 2,
            },
        ],
        loading: false,
        error: null
    }),

    getters: {
        cartItems: (state) => state.cart,
        totalCartCount: (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0),
        isInCart: (state) => (id) => state.cart.some(item => item.id === id)
    },

    actions: {
        addToCart(id) {
            const product = this.products.find(p => p.id === id);
            if (!product) return;

            const cartItem = this.cart.find(item => item.id === id);

            if (cartItem) {
                cartItem.quantity++;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }

            product.quantity++;
        },

        decrementProduct(id) {
            const product = this.products.find(p => p.id === id);
            if (!product || product.quantity === 0) return;

            const cartItem = this.cart.find(item => item.id === id);

            if (cartItem) {
                cartItem.quantity--;
                if (cartItem.quantity === 0) {
                    this.cart = this.cart.filter(item => item.id !== id);
                }
            }

            product.quantity--;
        },

        removeFromCart(id) {
            this.cart = this.cart.filter(item => item.id !== id);
            const product = this.products.find(p => p.id === id);
            if (product) {
                product.quantity = 0;
            }
        }
    }
})
