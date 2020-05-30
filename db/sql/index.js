const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

module.exports = {
    users: {
        // getAllUsers: sql('all_users.sql'),
        createUser: sql('create_user.sql'),
        verifyUser: sql('verify_user.sql'),
        createuserLogInfo: sql('create_user_log_info.sql'),
        readUserLogs: sql('read_user_all_logs.sql'),
        deleteUserLog: sql('delete_user_log.sql')
    }
}

function sql(file) {

    const fullPath = path.join(__dirname, file); // generating full path;
    const options = {
        minify: true,
        params: {
            schema: 'public'
        }       
    };

    const qf = new QueryFile(fullPath, options);

    if (qf.error) {
        // Something is wrong with our query file :(
        // so we also report it here, while loading the module:
        console.error(qf.error);
    }

    return qf;

}