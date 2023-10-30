const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234qwer*',
    database: 'sesac',
});

exports.signUpProcess = (data, callback) => {
    const sql = `INSERT INTO crews VALUES (null, '${data.nickname}', '${data.password}', 
                '${data.name}', '${data.introduction}');`
    connection.query(sql, function (err){
        if(err){
            throw err;
        }
        callback();
    })
}

exports.loginProcess = (data, callback) => {
    const sql = `SELECT * FROM crews WHERE nickname='${data.name}' and password='${data.password}' limit 1;`
    connection.query(sql, function (err, rows){
        if(err){
            throw err;
        }
        callback(rows);
    })
}

exports.getCrew = (id, callback) => {
    const sql = `SELECT * FROM crews WHERE id='${id}' limit 1;`
    connection.query(sql, function(err, rows){
        if(err){
            throw err;
        }
        callback(rows);
    })
}

exports.updateProfileProcess = (data, callback) => {
    const sql = `UPDATE crews SET nickname='${data.nickname}', password='${data.password}', 
                name='${data.name}', introduction='${data.introduction}' WHERE id='${data.id}'; `
    connection.query(sql, (err) => {
        if(err){
            throw err;
        }
        callback();
    })
}

exports.deleteProcess = (id, callback) => {
    connection.query(`DELETE FROM crews WHERE id=${id}`, (err) => {
        if(err){
            throw err;
        }
        callback();
    })
}