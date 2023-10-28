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

// 콜백은 늘 나중에 받아야 한다.
exports.insertVisitor = (data, callback)=>{
    const sql=`INSERT INTO visitor VALUES (null, '${data.username}', '${data.comment}')`;
    connection.query(sql, (err, result)=>{
        if(err){
            throw err;
        }
        console.log('visitor insert',result);
        callback(result.insertId);
    })
}

exports.deleteVisitor = (id, callback) =>{
    const sql=`DELETE FROM visitor WHERE id = ${id}`;
    connection.query(sql, (err, result)=>{
        if(err){
            throw err;
        }

        let flag=false;
        if(result.affectedRows){
            flag=true;
        }

        console.log('visitor deleted', result);
        callback(flag);
    })
}