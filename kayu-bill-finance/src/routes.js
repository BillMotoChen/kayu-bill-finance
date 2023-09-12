import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
import Finance from "./components/Finance.vue";

const routes=[
    {
    name:"HelloWorld",
    path:'/hello',
    component: HelloWorld
    },
    {
    name:"Finance",
    path:'/finance',
    component: Finance
    },
];
const router= createRouter({
    history: createWebHistory('/kayu-bill'),
    routes,
})

export default router;