var credentials = {
    username :"traffic-node",
    password :"password"
}

function verifyUsernamePassword(username, password, callback)   {
    if(username == credentials.username && password == credentials.password){
        return callback(null, credentials)
    }
    else{
        return callback(null, null)
    }
}

module.exports = {
    credentials: credentials,
    verifyUsernamePassword: verifyUsernamePassword
}