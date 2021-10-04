const mysql = require('mysql');
const dbConfig = require('./db.config');

const connection = async (req, res, next) => {
    try {
        const db = mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD,
            database: dbConfig.DB
        });
        await db.connect(error => {
            if(!error) {
                console.log("Successfully connected to the database.")
            }
            else {
                console.log(error)
            }
        })
    } catch(err) {
        res.status(500).send(err);
    }
}

module.exports = connection