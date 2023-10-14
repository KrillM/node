function goMart(){
    console.log("어떤 맥주를 살지 고민한다.");
}

let beer;
let won;

function pickBeer(){
    return new Promise(function(good, bad){
        setTimeout(function(){
            beer="칼스버그";
            won=4500;
            good(beer,won);
        }, 3000);
    })
}

function pay(beer, won){
    console.log("아싸 치맥이당!");
    console.log(`맥주: ${beer} | 가격: ${won}원`)
}

function hells(){
    console.log("맥주 품절...");
}

goMart();
async function exec(){
    const x=await pickBeer();
    console.log(x);
    const y=await pay(beer, won);
}
exec();