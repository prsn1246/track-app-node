
'use strict';

const sql = require('../sql').users;

class UsersRepository {

    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
    }

    // readAllUsers() {
    //     console.log('users');
    //     return this.db.any(sql.getAllUsers);
    // }

    createUser(values) {
        console.log('create user...', values);
        return this.db.query(sql.createUser, values)
            .then((res) => {
                let updatedRes = {
                    message: "Registered Successfull",
                    data: res[0]
                }
                return updatedRes;
            }).catch((err) => {
                return err
            });
    }

    authenticateUser(values) {
        return this.db.query(sql.verifyUser, values)
            .then((res) => {
                if (res.length > 0) {
                    let updatedRes = {
                        message: "Authentication Successfull",
                        data: res[0]
                    }
                    return updatedRes;
                } else {
                    return { message: "Authentication Failed" };
                }
            }).catch((err) => {
                return err;
            });
    }

    createUserLogInfo(values) {
        return this.db.query(sql.createuserLogInfo, values)
            .then((res) => {
                return "Successfully recorded";
            }).catch((err) => {
                return err
            });
    }

    readUserLogs(id) {
        console.log('users');
        return this.db.any(sql.readUserLogs, { userId: id });
    }

    deleteUserLog(id) {
        return this.db.query(sql.deleteUserLog, { logId: id })
            .then((res) => {
                return "Successfully deleted";
            }).catch((err) => {
                console.log('err data', err);
                return err
            });
    }

}


module.exports = UsersRepository;