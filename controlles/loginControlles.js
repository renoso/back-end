const LoginModel = require('../models/LoginModels')



exports.getlogin = ((req, res) => {
    
    const login = new LoginModel()
    const ola = login.olaMundo()


    res.send(`<h1>Login !! </h1>
        <p>${ola}</p>`)
})


