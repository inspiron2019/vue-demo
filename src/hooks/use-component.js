/*
 * @Author: zhaoliangcai@yiyetech.com
 * @Date: 2022-06-09 17:06:18
 */
import Vue from 'vue'
function appendCompToRoot(component) {
    const el = document.createElement("div")
    // el.setAttribute('id', _id)
    const instance = new Vue({
        el: el,
        render: h => h(component, {
            // props: props,
            
        })
    });
    document.body.appendChild(instance.$el);
}

export default appendCompToRoot

// TODO 未完成
// ? 子组件挂载到任意节点
// ! 任意错误
// * 注释

// docker的使用
// windows下使用wls
// 翻墙
// 错误日志监控sentry
// figma

// 敏感词过滤





