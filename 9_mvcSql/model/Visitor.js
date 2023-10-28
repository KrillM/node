const mysql = require("mysql")

// createConnection: mysql 연결 정보를 받아서 연결한다.
// db 연결은 host(ip), user, password, db이름이 필요하다.
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234qwer*',
    database: 'sesac'
})

exports.getVisitors=(callback)=>{
    connection.query(`SELECT * FROM visitor`, (err, rows)=>{
        if(err){
            throw err;
        }
        console.log('visitor',rows);
        callback(rows);
    })
}