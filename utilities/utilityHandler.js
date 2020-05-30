module.exports = {
    getDataHandler: function (data, req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if (data) {
            res.json(data);
        }
        else {
            res.json({});
        }
        ;
    },
    postDataHandler: function (data, req, res) {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    },
    postUpdateDataHandler: function (data, req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    },
    putDeleteDataHandler: function (req, res) {
        res.statusCode = 204;
        res.end();
    },
    dataValidationErrorHandler: function (data, req, res) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
    },
    //change the error handler to give custom JSON message
    //with error code, message and action for production
    //instead of using the standard error handler of express
    errorHandler: function (error, req, res, next) {
        error.status = 500;
        next(error);
    }
}