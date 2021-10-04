const mysql = require('mysql');
const dbConfig = require('./../configs/db.config');

const db = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  });

const getUsers = async(req, res, next) => {
    try {
        await db.query("SELECT * FROM users", (err, users) => {
            if (err) {
              res.status(400).send(err)
            } else {
              res.status(200).send(users);
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const addUsers = async(req, res, next) => {
    try {
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const phone = req.body.phone;
        const createdAt = Date.now();

        await db.query(
            "INSERT INTO employees (firstname, lastname, email, phone, createdAt) VALUES (?,?,?,?,?)",
            [firstname, lastname, email, phone, createdAt],
            (err, result) => {
              if (err) {
                res.status(400).send(err);
              } else {
                res.status(200).send("Values Inserted");
              }
            }
        );
    } catch (error) {
        res.status(500).send(error);
    }
}

const findUser = async(req, res, next) => {
    try {
        const id = req.params.id;
        await db.query("SELECT * FROM users WHERE id = ?", [id],
            (err, result) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).send(result);
                }
            }
        );
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateUser = async(req, res, next) => {
    try {
        const id = req.params.id;

        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const email = req.body.email;
        const phone = req.body.phone;

        await db.query(
            "UPDATE users SET firstname = ?, lastname = ?, email = ?, phone = ? WHERE id = ?",
            [firstname, lastname, email, phone, id],
            (err, result) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.status(200).send("User updated");
                }
            }
          );
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteOne = async(req, res, next) => {
    try {
        const id = req.params.id;
        await db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
            if (err) {
              res.status(400).send(err);
            } else {
              res.status(200).send("User deleted");
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteAll = async(req, res, next) => {
    try {
        await db.query("DELETE FROM users", (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
              res.status(200).send("All users deleted");
            }
        });
    } catch (error) {
        res.status(500).send(error);
    }
}
module.exports = {
    getUsers,
    addUsers,
    findUser,
    updateUser,
    deleteOne,
    deleteAll
}