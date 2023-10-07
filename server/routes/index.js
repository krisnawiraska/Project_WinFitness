const express = require('express');
const routes = express.Router();
// const userController = require ("../server/controllers/userController")
const userController = require ("../controllers/userController")

routes.get("/", (req,res) =>{
    res.send("selamat datang")
})
routes.post('/register', userController.registerUser)


module.exports = routes

