//数组去重
const fc = (arr) => {
  const setArr = new Set(arr);

  return [...setArr];
};

// split slice join等

//new 函数
function newFunc(func, ...args) {
  let obj = {};
  obj.__proto__ = func.prototype;
  const res = func.apply(obj, args);
  return typeof res === "object" && res != null ? res : obj;
}

//instanceof
function instanceofFC(obj, object) {
  let point = obj;
  while (point) {
    if (point.__proto__ === object.prototype) {
      return true;
    }
    point = point.__proto__;
  }
  return false;
}

//数组map
function mapFC(fc) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const res = fc(arr[i]);
    result.push(res);
  }
  return result;
}

//数组扁平化
function flat(arr) {
  const newarr = [];
  function fc(arr) {
    if (!Array.isArray(arr)) {
      return newarr.push(arr);
    }
    for (let i = 0; i < arr.length; i++) {
      fc(arr[i]);
    }
  }
  fc(arr);
  return newarr;
}

//扁平数组转树
function arrToTree(list) {
  // 定义最终需要返回的树形结构数据
  let treeData = [];
  // 对传入的数组进行遍历
  list.forEach((item) => {
    // 如果pid没有值,那就是顶级对象,直接添加进数组
    if (!item.pid) {
      treeData.push(item);
    }
    // 理解为二次遍历 ：每个对象都找一遍自己的孩子添加到children
    let objList = list.filter((data) => data.pid === item.id);
    if (objList.length) {
      item.children = objList;
    }
  });
  return treeData;
}

//手写reduce
Array.prototype.reduce = function (callback, initialValue) {
  var accumulator = initialValue !== undefined ? initialValue : this[0]; //有默认值 使用默认值，否则使用数组第0项
  //有默认值从0开始，没有的话从1
  for (var i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback.call(undefined, accumulator, this[i], i, this);
  }
  return accumulator;
};

//控制图片加载
function loadImage(src) {
  return new Primise((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.onload(() => {
      resolve(image);
    });
    image.onerror((err) => {
      reject(err);
    });
  });
}

function one(func, wait, args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      func.call(this, ...args);
      resolve();
    }, wait);
  });
}
function repeat(func, times, wait) {
  return async function (...args) {
    for (let i = 1; i <= times; i++) {
      await one(func, wait, args);
    }
  };
}
const repeatLog = repeat(console.log, 5, 1000);
repeatLog("hello world");

//实现sleep

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

//setTimeout实现setInterval
function mySetInterval(fn, delay, ...args) {
  let timer = null;
  const task = () => {
    timer = setTimeout(() => {
      if (timer) {
        fn.apply(this, args);
        task();
      }
    }, delay);
  };
  task();
  return () => {
    clearTimeout(timer);
    timer = null;
  };
}

//setInterval实现setTimeout
function _setTimeout(fn, delay, ...args) {
  const timer = setInterval(() => {
    fn.apply(this, args);
    clearInterval(timer);
  }, delay);
}

// 没有延迟的setTimeout
function setTimeoutWithOffset(fn, interval, ...args) {
  let startTime = Date.now();
  let count = 0; // 执行次数
  let timer = null;
  const task = () => {
    const offset = Date.now() - (startTime + count * interval);
    console.log(`第${count + 1}次 系统延迟时间${offset}`);
    timer = setTimeout(() => {
      fn.apply(this, args);
      count++;
      task();
    }, interval - offset);
  };
  task();
  return () => clearTimeout(timer);
}
