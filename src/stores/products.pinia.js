import { defineStore } from 'pinia'
import pepsiImg from '@/assets/remove/pepsi.png';
import chortoqImg from '@/assets/remove/chortoq.png';
import carrot from '@/assets/remove/carrot.png'
import abricos from '@/assets/remove/abricos.png'
import cherry from '@/assets/remove/cherry.png'
import lemon from '@/assets/remove/lemon.png'
import nutrilon from '@/assets/remove/nutrilon.png'
import peach from '@/assets/remove/peach.png'
import tomato from '@/assets/remove/tomato.png'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [
            {
                id: 1,
                name: 'Напиток Pepsi 0,5л',
                price: 7000,
                img: pepsiImg,
                quantity: 1,
                category: 'drink'
            },
            {
                id: 2,
                name: 'Мин. Вода Chortoq',
                price: 6000,
                img: chortoqImg,
                quantity: 2,
                category: 'drink'
            },
            {
                id: 3,
                name: 'Абрикос',
                price: 15000,
                img: abricos,
                quantity: 0,
                category: 'fruit'
            },
            {
                id: 4,
                name: 'Морковь',
                price: 8000,
                img: carrot,
                quantity: 0,
                category: 'vegetable'
            },
            {
                id: 5,
                name: 'Вишня',
                price: 25000,
                img: cherry,
                quantity: 0,
                category: 'fruit'
            },
            {
                id: 6,
                name: 'Лимон',
                price: 12000,
                img: lemon,
                quantity: 0,
                category: 'fruit'
            },
            {
                id: 7,
                name: 'Nutrilon детское питание',
                price: 45000,
                img: nutrilon,
                quantity: 0,
                category: 'other'
            },
            {
                id: 8,
                name: 'Персик',
                price: 17000,
                img: peach,
                quantity: 0,
                category: 'fruit'
            },
            {
                id: 9,
                name: 'Помидор',
                price: 9000,
                img: tomato,
                quantity: 0,
                category: 'vegetable'
            }
        ],

        cart: [
            {
                id: 1,
                name: 'Напиток Pepsi 0,5л',
                price: 7000,
                img: pepsiImg,
                quantity: 1,
                category: 'drink'
            },
            {
                id: 2,
                name: 'Мин. Вода Chortoq',
                price: 6000,
                img: chortoqImg,
                quantity: 2,
                category: 'drink'
            },
        ],
        loading: false,
        error: null
    }),

    getters: {
        cartItems: (state) => state.cart,
        totalCartCount: (state) => state.cart.reduce((sum, item) => sum + item.quantity, 0),
        totalCartSum: (state) => state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
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
