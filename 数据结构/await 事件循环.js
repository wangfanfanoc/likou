async function foo() {
    console.log(1);
    await setTimeout(() => {
        console.log('foo');
    }, 1000);
    console.log(2);
}

async function bar() {
    console.log(await 'bar');
    console.log('bar2');
}

async function baa() {
    console.log('baa');
}
foo()
bar()
baa()

/* 1
baa
2
bar
bar2
foo */
// ！！！！！ await这条语句还是同步的，这条语句后面的看作promise then里的回调函数


async function async1() {
    console.log('1');
    console.log(await async2());
    console.log('2');
}

async function async2() {
    console.log('3');
    return 33
}

console.log('4');

setTimeout(() => {
    console.log('5');
}, 0)

async1();

new Promise((resolve) => {
    console.log('6');
    resolve();
}).then(() => {
    console.log('7');
});

console.log('8');

/* 
4
1
3
6
8
33
2
7
5 */