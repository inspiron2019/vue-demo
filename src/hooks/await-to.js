/*
 * @Author: zhaoliangcai@yiyetech.com
 * @Date: 2022-06-10 09:32:22
 */

/**
 * @param { Promise } 传进去的请求函数
 * @param { Object= } errorExt - 拓展错误对象
 * @return { Promise } 返回一个Promise
 */
export function to(
promise,
errorExt
) {
return promise
    .then(data => [null, data])
    .catch(err => {
    if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt)
        return [parsedError, undefined]
    }

    return [err, undefined]
    })
}

export default to

// ? 示例
// [err, undefined] 失败
// [null, data] 成功
// async function handler() {
//     const [err, data] =  await to(promise, errExt)
//     if(err) return
//     const [err, data] =  await to(promise)
//     if(err) return
// }

// ? 示例
// Promise.all() 一假则假，全真则真
// Promise.race() 以第一个返回的状态为准
// Promise..allSettled() [{status: 'fulfilled', value: 'result'}, status: 'rejected', reason: 'error']
const promises = [
    new Promise((resolve, reject) =>
        setTimeout(() => resolve('result'), 500)),
    new Promise((resolve, reject) =>
        setTimeout(() => reject('ERROR'), 100)),
];

// ? 示例 
// Promise的回调函数会立即执行;then和catch作为微任务
// await后面的会立即执行;下一行代码开始划分到then中执行
// await Promise.reject() 会阻塞执行
async function handler() {
    const a = await 1
    console.log(a)
    const b = await Promise.resolve(2)
    console.log(b)
    const c = await Promise.reject(3)
    console.log(c) //不执行
}

// ? 示例
// 函数整体提升，变量声明提升
// 类型转换
// 高级函数
// promise async/await generator
// 异步 event loop
// 原型链 继承
// 作用域 闭包
// this 自由变量 
// call bind apply 
// Object.create()








