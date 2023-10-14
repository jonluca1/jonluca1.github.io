function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function test_sleep() {
    alert("sleep.js is loaded");
}

console.log("\u2705 sleep.js 0.1b is loaded");


//Needs to be in an async function
// await sleep(ms);
// ^^ that is like the sleep() in python, sleeps between going for the next step in the function