function add(x, y, callback){
    setTimeout(function(){
        let result = x+y;
        callback(result);
    }, 1000);
}

function mul(x, callback){
    setTimeout(function(){
        let result = x*2;
        callback(result);
    }, 700);
}

function sub(x,callback){
    setTimeout(function(){
        let result = x-1;
        callback(result);
    }, 500);
}

add(4,3, function (x){
    console.log("1: ", x);
    mul(x, function(y){
        console.log("2: ", y);
        sub(y, function(z){
            console.log("3: ",z);
        })
    })
})