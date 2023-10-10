function run(){
    console.log("run after 3 seconds");
}

// callback 함수: 함수를 넘길 때 인자로 넘긴다.
setTimeout(run, 3000);
console.log("start");
console.log("stop");