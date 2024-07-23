function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === "object" || valueType === "function");
}

function deepClone(originValue) {
  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) {
    return originValue;
  }

  const newObject = {};
  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key]);
  }
  return newObject;
}

function deepClone(originValue, map = new WeakMap()) {
  // 判断是否是一个Set类型
  if (originValue instanceof Set) {
    return new Set([...originValue]);
  }

  // 判断是否是一个Map类型
  if (originValue instanceof Map) {
    return new Map([...originValue]);
  }

  // 判断如果是函数类型, 那么直接使用同一个函数
  if (typeof originValue === "function") {
    return originValue;
  }

  // 判断传入的originValue是否是一个对象类型
  if (!isObject(originValue)) {
    //当不是对象时，返回该值
    return originValue;
  }

  //处理循环引用
  if (map.has(originValue)) {
    return map.get(originValue);
  }

  // 判断传入的对象是数组, 还是对象
  const newObject = Array.isArray(originValue) ? [] : {};

  map.set(originValue, newObject);

  for (const key in originValue) {
    newObject[key] = deepClone(originValue[key], map);
  }

  return newObject;
}
