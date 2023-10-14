function promise(flag){
    return new Promise(function (resolve, reject){
        if(flag){
            resolve("성공!");
        }
        else{
            reject("실패...");
        }
    })
}

// 특정 함수가 return하는 값이 promise객체인 경우 chaining 기법으로 then, catch 메소드를 사용한다.
promise(true).then(function (result){
    console.log(result);
}).catch(function (err){
    console.log(err);
})

promise(false).then(function (result){
    console.log(result);
}).catch(function (err){
    console.log(err);
})