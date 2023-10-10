// case 1: 파일에서 식별자 하나를 보낼 때
const addIndex1=require("./math1.js");
const addSum1=addIndex1(2,5);
console.log(addSum1);

// case 2: 파일에서 보낸 여려 개의 식별자를 객체 그대로 받아올 때
const datas = require("./math2.js");
const addSum2=datas.add(5,4);
const min1=datas.min(5,4);
console.log(addSum2);
console.log(min1);
console.log(datas.py);

// case 3: 파일에서 보낸 여러 개의 식별자를 골라 받고 싶을 때(구조 분해해서 할당 문법을 통해 가져온다.)
const {min}=require("./math2.js");
const min2=min(3,1);
// const addSum3=add(3,4);
console.log(min2);
// console.log(addSum3); <- addSum3은 min2와 달리 안 불렀기 때문에 출력하지 못한다.

const{mul, haru} = require("./math3.js");
const multi = mul(3,4);
console.log(multi);
console.log(haru);