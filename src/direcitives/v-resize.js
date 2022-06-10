/*
 * @Author: zhaoliangcai@yiyetech.com
 * @Date: 2022-06-10 17:08:11
 */

const _resize = {
    bind: function(el, binding) {
        console.log('bind')
        console.log(binding.value, binding.arg)
    },
    inserted(el, binding, vnode, oldVnode) {
        console.log("inserted")
        const self = vnode.context
        window.addEventListener('resize', (e) => {
            console.log(self, e)
            console.log(window.innerWidth, window.innerHeight)
        })
    },
    update() {
        console.log("update")
    },
    componentUpdated() {
        console.log("componentUpdated")
    },
    unbind() {
        console.log("unbind")
        window.removeEventListener("resize");
    },
}

export default _resize

// ? 示例
// 指令绑定到元素时（bind）、元素插入时（inserted）、组件更新时（update）、组件更新后（componentUpdated）、指令与元素解绑时（unbind）
// v-on v-model的实现原理