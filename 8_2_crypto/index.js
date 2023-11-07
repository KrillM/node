const crypto = require('crypto');

// 해시화
const createHashedPassword = (password)=>{
    return crypto.createHash('sha512').update(password).digest('base64');
}

console.log("1234: ", createHashedPassword('1234'));
console.log("1991: ", createHashedPassword('1991'));

const dbpw='1ARVn2Auq2/WAqx2gNrL+q3RNjAzXpUfCXrzkA6d4Xa22yhRLy4AC50E+6UTPoscbo31nbOoq51gvkuXzJ6B2w==';
console.log("same? ", createHashedPassword('1234') == dbpw);
console.log("same? ", createHashedPassword('1991') == dbpw);

// 16진법으로 변경
const createHexaedPassword = (password)=>{
    return crypto.createHash('sha512').update(password).digest('hex');
}

console.log("1234: ", createHexaedPassword('1234'));
console.log("1991: ", createHexaedPassword('1991'));

// 솔트
const createSalt = (password)=>{
    const salt = crypto.randomBytes(16).toString('base64'); // 솔트 생성
    // console.log(salt)
    const iteration = 100; // 반복 횟수
    const keylen = 64; // 생성할 키의 길이
    const digest = 'sha512' // 해시 알고리즘
    return crypto.pbkdf2Sync(password, salt, iteration, keylen, digest).toString('base64');
}
console.log("1234: ", createSalt('1234'));
const salt = createSalt('1234');

function compareSalt(password, salt) {
    const iterations = 100;
    const keylen = 64;
    const digest = "sha512";
    return crypto.pbkdf2Sync(password, salt, iterations, keylen, digest).toString("base64");
  }

const dbPwSalt ="PFM97dH/oJZk0sDS6qNJJvXZQdf2i9wYgShVFm+xBRWY+9LZQzSWQf6dvWbZEx7DWpmvGg6ClIjtiihWDwX3Og==";
const dbSalt = "3UVPDacUXVGzkivYv4HeIg==";
console.log("compare result with salt: ", compareSalt('1234', dbSalt) == dbPwSalt);

// console.log("pw 1234 with salt: ", createHashedPwWithSalt("1234"));