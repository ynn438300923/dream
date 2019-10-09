//单独定义全局组件注册
import Vue from "vue";

//element ui部分
import { Popover, Input, Upload, Button, Message } from "element-ui";
const elementUI = [Popover, Input, Upload, Button];
elementUI.forEach(component => {
  Vue.use(component);
});
Vue.prototype.$message = Message;
Vue.prototype.$ELEMENT = { size: "small", zIndex: 3000 };

//个人开发ui组件，以插件方式开发
import "@/components/dhtVueUI/style/index.scss";
import dhtui from "@/components/dhtVueUI/index";
Vue.use(dhtui, { zIndex: 4000 });

//全局框架范围组件
function components() {
  /*Vue.component("dht-rendering-echarts", () =>
    import("@/components/renderingEcharts/renderingEcharts.vue")
  );*/
}

//Vue.prototype.$notify = Notification;

export default components;
