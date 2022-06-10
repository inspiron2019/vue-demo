/*
 * @Author: zhaoliangcai@yiyetech.com
 * @Date: 2022-06-09 17:06:18
 */
import Vue from 'vue';

const EventBus = new Vue()
Object.defineProperty(Vue.prototype, {
    $bus: {
        get: function() {
            return EventBus
        }
    }
})

// ? yarn add vue-bus
// ! 注册
// ? this.$bus.emit('changeMsg', this.Amsg );
// ! 接收
// ? this.$bus.on('changeMsg', this.getMsg);
// ? this.$bus.on('changeMsg', (msg) => { this.getMsg = msg })
// ? this.$bus.once('doOnce', (txt) => { console.log(txt) });
// ! 销毁
// ? this.$bus.off('changeMsg', this.getMsg);
// ? 存在问题：大家都知道vue是单页应用，如果你在某一个页面刷新了之后，与之相关的EventBus会被移除，这样就导致业务走不下去。
// ? 还要就是如果业务有反复操作的页面，EventBus在监听的时候就会触发很多次，也是一个非常大的隐患。
// ? 这时候我们就需要好好处理EventBus在项目中的关系。通常会用到，在vue页面销毁时，同时移除EventBus事件监听。