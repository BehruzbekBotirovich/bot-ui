import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('@/pages/LoginPage.vue')
        },
        {
            path: '/',
            name: 'Asosiy sahifa',
            redirect: "/products"
        },

        {
            path: '/products',
            name: 'Products',
            component: () => import('@/pages/products/ProductsPage.vue'),
            children: [
                {
                    path: '',
                    name: 'Products-List',
                    component: () => import('@/pages/products/store/ProductsList.vue')
                },
                {
                    path: 'cart',
                    name: 'Cart',
                    component: () => import('@/pages/products/cart/CartView.vue')
                }
            ]
        },

        {
            path: '/500',
            component: () => import('@/pages/_500.vue'),
            name: 'internal_server_error'
        },
        {
            path: '/404',
            component: () => import('@/pages/_404.vue'),
            name: 'not_found_main'
        },

    ]
})


export default router
