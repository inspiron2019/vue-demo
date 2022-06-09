/*
 * @Author: zhaoliangcai@yiyetech.com
 * @Date: 2022-06-07 09:36:10
 * @LastEditors: zhaoliangcai@yiyetech.com
 * @LastEditTime: 2022-06-08 17:34:49
 * @FilePath: \工作3\vue-demo\src\hooks\useComponent.js
 */




// TODO 未完成
// ? 子组件挂载到任意节点
// ! 任意错误
// * 注释


import Vue from 'vue'
/**
 * @description: 
 * @param {*} component
 * @return {*}
 */
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


// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// let greeter = new Greeter("world");

// let button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function() {
//     alert(greeter.greet());
// }
// document.body.appendChild(button);


// var Greeter = /** @class */ (function () {
//     function Greeter(message) {
//         this.greeting = message;
//     }
//     Greeter.prototype.greet = function () {
//         return "Hello, " + this.greeting;
//     };
//     return Greeter;
// }());
// var greeter = new Greeter("world");
// var button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function () {
//     alert(greeter.greet());
// };
// document.body.appendChild(button);