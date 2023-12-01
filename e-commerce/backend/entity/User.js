const UserModel = require('../db/User');
const jwt = require('jsonwebtoken');
const jwtKey = 'e-commrce';

module.exports.addUser = async (data) => {
    let user = new UserModel(data);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    return result
}

module.exports.login = async (data) => {
    try {
        if (data.email && data.password) {
            let user = await UserModel.findOne(data).select("-password");
            if (user) {
                let token = await this.generateToken(user);
                return ({ user, auth: token })
            } else {
                return ("No user found")
            }
        } else {
            return ("Please enter email or password")
        }
    } catch (err) {
        console.log("err", err);
        return "Internal server error"
    }
}




module.exports.generateToken = (token) => {
    return jwt.sign({ token }, jwtKey);
};

module.exports.verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];
    console.log("token", token);
    if (token) {
        jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                res.status(401).send({ result: "Please provide valid token" })
            } else {
                next();
            }
        })
    } else {
        res.status(403).send({ result: "Please add token with header" })
    }

}