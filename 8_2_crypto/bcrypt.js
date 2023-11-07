const bcrypt = require('bcrypt');

const salt = 10; // 솔트의 수준을 설정

function bcryptPassword(password){
    return bcrypt.hashSync(password, salt);
}

function comparePassword(password, dbpw){
    return bcrypt.compareSync(password, dbpw);
}
console.log("1234: ", bcryptPassword("1234"))
const dbpw = bcryptPassword("1234")
console.log("1234: ", dbpw)
console.log("same? ", comparePassword('1234', dbpw))