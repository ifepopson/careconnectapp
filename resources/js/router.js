import * as VueRouter from 'vue-router';

const routes = [
    {
        name: "login",
        path: "/",
        component: ()=> import("./Login.vue")
    },
    {
        name: "glossary",
        path: "/about",
        component: ()=> import("./Login.vue")
    },
    // {
    //     name: "signsandsymptoms",
    //     path: "/signsandsymptoms",
    //     component: ()=> import("./user/Signs")
    // }
];


const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory(),
scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
}});




export default router;

