function goMart(){
    console.log("어떤 맥주를 살지 고민한다.");
}

let beer;
let won;

function pickBeer(callback){
    setTimeout(function(){
        console.log("아싸 치맥이당!");
        beer="칼스버그";
        won=4500;
        callback(beer, won);
    }, 3000);
}

function pay(beer, won){
    console.log(`맥주: ${beer} | 가격: ${won}원`)
}

goMart();
pickBeer(pay);
// pay(beer, won);