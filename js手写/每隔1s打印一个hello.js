function one(fc, timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fc("hello");
      resolve();
    }, timer);
  });
}

async function repeat(fc, number, timer) {
  for (let index = 0; index < number; index++) {
    await one(fc, timer);
  }
}

repeat(console.log, 5, 1000);
