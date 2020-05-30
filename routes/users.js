const express = require('express');
const usersRouter = express.Router();
const utilityHandler = require('../utilities/utilityHandler');
const db = require('../db');


usersRouter.route('/')
.post((req, res, next) => {
    db.users.createUser(req.body)
    .then((data) => {
        utilityHandler.getDataHandler(data, req, res);
    })
    .catch(error => {
        utilityHandler.errorHandler(error, req, res, next);
      });   
});

usersRouter.route('/auth')
.post((req, res, next) => {
    db.users.authenticateUser(req.body)
    .then((data) => {
        utilityHandler.getDataHandler(data, req, res);
    })
    .catch(error => {
        utilityHandler.errorHandler(error, req, res, next);
      });   
});

usersRouter.route('/userLog')
.post((req, res, next) => {
    db.users.createUserLogInfo(req.body)
    .then((data) => {
        utilityHandler.getDataHandler(data, req, res);
    })
    .catch(error => {
        utilityHandler.errorHandler(error, req, res, next);
      });   
});

usersRouter.route('/userLog/:id')
    .get((req, res, next) => {
        db.users.readUserLogs(req.params.id)
        .then((data) => {
            utilityHandler.getDataHandler(data, req, res);
        })
        .catch(error => {
            utilityHandler.errorHandler(error, req, res, next);
        });   
    })
    .delete((req, res, next) => {
        db.users.deleteUserLog(req.params.id)
        .then((data) => {
            utilityHandler.getDataHandler(data, req, res);
        })
        .catch(error => {
            utilityHandler.errorHandler(error, req, res, next);
        });   
    });



module.exports = usersRouter;

