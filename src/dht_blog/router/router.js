import Vue from "vue";
import vuex from "../vuex/store";
import Router from "vue-router";
Vue.use(Router);

//主站博客路由维护
import blog from "@/dht_blog/router/dhtBlog/blog";
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL + "dht_blog",
  routes: [
    {
      path: "/",
      redirect: "/blog"
    },
    {
      path: "/test",
      component: () => import("@/dht_blog/views/test/test.vue")
    },
    //担心主站访问会存在需要多种页面布局需要，将博客主站部分所有路由放在home层级下面
    {
      path: "/blog",
      component: () => import("../views/blog/Home.vue"),
      redirect: "/index",
      children: [...blog]
    },
    //编辑器路由
    {
      path: "/richTextEditor",
      component: () => import("@/dht_blog/views/richTextEditor/blogEditor.vue"),
      meta: {
        metaInfo: {
          title: "博客编辑器",
          keywords: "博客编辑器",
          description: "博客编辑器"
        }
      }
    }
  ]
});

//全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.meta.metaInfo) {
    vuex.commit("getMetaInfo", to.meta.metaInfo);
  }

  next();
});
//后置守卫
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {});

export default router;
