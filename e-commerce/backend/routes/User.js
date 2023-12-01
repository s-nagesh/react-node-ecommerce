const express = require('express');
const router = express.Router();
const UserEntity = require('../entity/User');


router.post("/register", async (req, res) => {
    const response = await UserEntity.addUser(req.body);
    res.send(response);
});

router.post("/login", async (req, res) => {
    const response = await UserEntity.login(req.body);
    res.send(response);
})

module.exports = router