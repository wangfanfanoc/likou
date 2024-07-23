//  所有的Promise都变成fulfilled时, 再拿到结果
//  在拿到所有结果之前, 有一个promise变成了rejected, 那么整个promise是rejected
function all(promises) {
  // 问题关键: 什么时候要执行resolve, 什么时候要执行reject
  return new Promise((resolve, reject) => {
    const values = [];
    promises.forEach((promise) => {
      promise.then(
        (res) => {
          values.push(res);
          if (values.length === promises.length) {
            resolve(values);
          }
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}

//所有都执行完后，才返回结果； 所有都为reject才为reject
function allSettled(promises) {
  return new Promise((resolve) => {
    const results = [];
    promises.forEach((promise) => {
      promise.then(
        (res) => {
          results.push({ status: PROMISE_STATUS_FULFILLED, value: res });
          if (results.length === promises.length) {
            resolve(results);
          }
        },
        (err) => {
          results.push({ status: PROMISE_STATUS_REJECTED, value: err });
          if (results.length === promises.length) {
            resolve(results);
          }
        }
      );
    });
  });
}

//只要有一个Promise变成非pendding状态, 那么就结束
function race(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  });
}

function any(promises) {
  // resolve必须等到有一个成功的结果
  // reject所有的都失败才执行reject
  const reasons = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then(
        (res) => {
          resolve(res);
        },
        (err) => {
          reasons.push(err);
          if (reasons.length === promises.length) {
            reject(new AggregateError(reasons));
          }
        }
      );
    });
  });
}
