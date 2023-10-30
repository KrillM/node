const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234qwer*',
    database: 'sesac'
})

exports.getCrews=(callback)=>{
    connection.query(`SELECT * FROM crews`, (err, rows)=>{
        if(err){
            throw err;
        }
        console.log('crew ',rows);
        callback(rows);
    })
}

exports.addCrew = (data, callback)=>{
    const sql=`INSERT INTO crews VALUES (null, '${data.name}', '${data.password}')`;
    connection.query(sql, (err, result)=>{
        if(err){
            throw err;
        }
        console.log('add crew',result);
        callback(result.insertId);
    })
}

exports.deleteCrew = (id, callback) =>{
    const sql=`DELETE FROM crews WHERE id = ${id}`;
    connection.query(sql, (err, result)=>{
        if(err){
            throw err;
        }

        let flag=false;
        if(result.affectedRows){
            flag=true;
        }

        console.log('crew deleted', result);
        callback(flag);
    })
}

exports.checkCrew = (data, callback) => {
    const sql=`SELECT * FROM crews WHERE name='${data.name}' AND password='${data.password}'`;
    connection.query(sql, (err, result)=>{
        if(err){
            throw err;
        }
        console.log('crew logined',result);
        callback(result);
    })
}