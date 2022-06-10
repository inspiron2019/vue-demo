/*
 * @Author: zhaoliangcai@yiyetech.com
 * @Date: 2022-06-10 15:20:38
 */

import { debounce, throttle } from 'lodash'

let fn = null
const _debounce = {
    inserted: function(el, binding) {
        fn = debounce(binding.value, 2000, {
            leading: true,
            trailing: false
        })
        fn && fn.addEventListener('click', fn)
    },
    unbind: function(el) {
        el.removeEventListener('click', fn)
    } 
}

const _throttle = {
    inserted: function(el, binding) {
        fn = throttle(binding.value, 1000, {
            leading: true,
            trailing: false
        })
        fn && fn.addEventListener('input', fn)
    },
    unbind: function(el) {
        el.removeEventListener('input', fn)
    } 
}