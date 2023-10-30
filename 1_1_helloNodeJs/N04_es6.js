import talk from "./math4.js";
console.log(talk);

import {add, minus} from "./math4.js";
console.log(add(8,2));
console.log(minus(7,2));

import math from "./math4.js";
console.log(math, add(4,3)); // .을 ,대신 사용하면 오류가 발생한다.