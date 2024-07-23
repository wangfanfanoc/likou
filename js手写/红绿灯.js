//Promise

// 模拟红灯亮
function red() {
  console.log("red");
}

//模拟绿灯亮
function green() {
  console.log("green");
}

//模拟黄灯亮
function yellow() {
  console.log("yellow");
}

const task = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else if (light === "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });
};

const step = () => {
  task(3000, "red")
    .then(() => task(1000, "green"))
    .then(() => task(2000, "yellow"))
    .then(step);
};

step();

//Async/await

const asyncTask = (timer, light) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (light === "red") {
        red();
      } else if (light === "green") {
        green();
      } else if (light === "yellow") {
        yellow();
      }
      resolve();
    }, timer);
  });
};

const asyncStep = async () => {
  await task(3000, "red");
  await task(1000, "green");
  await task(2000, "yellow");
  asyncStep();
};

asyncStep();
