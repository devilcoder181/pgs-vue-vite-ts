import { createRouter, createWebHistory } from 'vue-router';

// Components
import home from '../src/views/index.vue';

export const router: any = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: home
        }
    ]
});