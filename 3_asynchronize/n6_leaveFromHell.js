function add(x, y){
    return new Promise(function(yes, no){
        setTimeout(function(){
            let result = x+y;
            yes(result);
        }, 1000);
    })
}

function mul(x){
    return new Promise(function(yes, no){
        setTimeout(function(){
            let result = x*2;
            yes(result);
        }, 700);
    });
}

function sub(x){
    return new Promise(function(yes, no){
        setTimeout(function(){
            let result = x-1;
            yes(result);
            // no(new Error("에러 발생"));
        }, 500);
    });
}

// promise
add(4,3).then((x)=>{
    console.log("1: "+x);
    return mul(x);
}).then(function(x){
    console.log("2: "+x);
    return sub(x);
}).then((x)=>{
    console.log("3: "+x);
}).catch(function(error){
    console.log(error);
})

// async
// 1. async 함수는 promise를 리턴
// 2. await는 async 함수에서만 사용한다.
async function exec(){
    const x=await add(4,3);
    console.log("1: "+x);
    const y=await mul(x);
    console.log("2: "+y);
    const z=await sub(y);
    console.log("3: "+z);
}
exec();