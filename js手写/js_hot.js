//1、数组展开
const arr = [
  1,
  [2, [3, [4, [5, [6, [7, [8, [9], 10], 11], 12], 13], 14], 15], 16],
];
Array.prototype.flat = function (deep = 1) {
  let res = [];
  if (deep === "Infinity") {
    this.forEach((item) => {
      if (Array.isArray(item)) {
        res = res.concat(item.flat());
      } else {
        res.push(item);
      }
    });
  } else {
    deep--;
    this.forEach((item) => {
      if (Array.isArray(item) && deep >= 0) {
        res = res.concat(item.flat(deep));
      } else {
        res.push(item);
      }
    });
  }
  return res;
};
console.log("展开一层", arr.flat(1));
console.log("完全展开", arr.flat(Infinity));

//2、寄生组合式继承
//子类中调用父类的构造函数，将子类构造函数的显式原型对象指向以（父类构造函数的原型对象）创建的对象
function Person(name, age) {
  this.name = name;
  this.age = age;
}
function Son(name, age, skills) {
  Parent.call(this, name, age);
  this.skills = skills;
}

Son.prototype = Object.create(Person.prototype);
Son.prototype.constructor = Son;

// ---------Object.create原理
function myCreate(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

//发布订阅 全局事件总线
class EventEmitter {
  constructor() {
    this.event = {};
  }
  on(name, callback) {
    if (this.event[name]) {
      this.event[name].push(callback);
    } else {
      this.event[name] = [callback];
    }
  }
  off(name, callback) {
    if (!this.event[name]) return;
    if (!callback) this.event[name] = [];
    this.event[name] = this.event[name].filter((item) => {
      item !== callback && item.initialCallback !== callback;
    });
  }
  emit(name, ...payload) {
    if (!this.event[name]) return;
    this.event[name].forEach((cb) => cb(...payload));
  }
  once(name, callback) {
    const one = (...args) => {
      callback(...args);
      this.off(name, one);
    };
    one.initialCallback = callback;
    this.on(name, one);
  }
}
