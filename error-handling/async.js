async function wait1(ms) {
    console.log('wait1');
    return new Promise(resolve => setTimeout(() => resolve, ms))
}

async function wait2() {
    console.log('wait2');
    await wait1(500);
    throw new Error('bang');
}

async function welcome() {
    // await wait1(1000)
    await wait2()
}

welcome().then(data => {
    console.log('DONE');
})