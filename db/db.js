const mysql = require('mysql')

const conn = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'testapi',
    host: 'localhost',
    port: '3306'
})

let db = {}

db.all = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM student', (err, results) => {
            if(err) return reject(err)
            return resolve(results)
        })
    })
}
db.class = (classid) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM student WHERE class = ?',[classid], (err, results) => {
            if(err) return reject(err)
            return resolve(results)
        })
    })
}
db.roll = (roll) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM student WHERE roll = ?',[roll], (err, results) => {
            if(err) return reject(err)
            return resolve(results)
        })
    })
}
db.add = (data) => {
    return new Promise((resolve, reject) => {
        conn.query('INSERT INTO student SET ?', [data], (err, results) =>{
            if(err) return reject(err)
            return resolve(results)
        })
    })
}
db.delete = (roll) => {
    return new Promise((resolve, reject) => {
        conn.query('DELETE FROM student WHERE roll = ?', roll, (err, results) => {
            if(err) return reject(err)
            return resolve(results)
        })
    })
}

module.exports = db