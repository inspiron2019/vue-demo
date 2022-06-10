/*
 * @Author: zhaoliangcai@yiyetech.com
 * @Date: 2022-06-09 17:06:18
 */
class Animal {
    static staticName = 'static name'
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    static staticMethod() {
        console.log('static method')
    }
    run(speed = 5) {
        console.log('speed:' + speed + 's')
    }
}
class Horse extends Animal {
    constructor(name, age, sex) {
        super(name, age)
        this.sex = sex
    }
    run(speed) {
        console.log('speed horse')
        super.run(speed)
    }
}

let horse = new Horse('horse', 18, 'man')
horse.run()
Horse.staticMethod()
console.log(Horse.staticName)

export default Animal

// ? 父类的静态属性和静态方法会被子类继承，但是不会被实例继承
// ? extends super 是什么
// ? static可以继承但是是被子类继承不是实例 
// ? public可以继承可以外部访问 protected可以继承不可以外部访问 private不可以继承不可以外部访问