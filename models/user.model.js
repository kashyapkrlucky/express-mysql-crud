const connection = require('../config/db.config');

const User = {
    create: (newUser, result) => {
        connection.query("INSERT INTO users SET ?", newUser, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            console.log("created user: ", { id: res.insertId, ...newUser });
            result(null, { id: res.insertId, ...newUser });
        });
    },

    findById: (id, result) => {
        connection.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                console.log("found user: ", res[0]);
                result(null, res[0]);
                return;
            }

            // not found User with the id
            result({ kind: "not_found" }, null);
        });
    },

    getAll: (result) => {
        connection.query("SELECT * FROM users", (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            console.log("users: ", res);
            result(null, res);
        });
    },

    updateById: (id, user, result) => {
        connection.query(
            "UPDATE users SET email = ?, name = ? WHERE id = ?",
            [user.email, user.name, id],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                    return;
                }

                if (res.affectedRows == 0) {
                    // not found User with the id
                    result({ kind: "not_found" }, null);
                    return;
                }

                console.log("updated user: ", { id: id, ...user });
                result(null, { id: id, ...user });
            }
        );
    },

    remove: (id, result) => {
        connection.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // not found User with the id
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("deleted user with id: ", id);
            result(null, res);
        });
    }
};

module.exports = User;
