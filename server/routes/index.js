const express = require('express');
const routes = express.Router();
// const userController = require ("../server/controllers/userController")
const userController = require ("../controllers/userController")
const katalogController = require ("../controllers/katalogController")

routes.get("/", (req,res) =>{
    res.send("selamat datang")
})
routes.post('/register', userController.registerUser)

routes.get('/katalog', katalogController.indexCatalog)
routes.post('/katalog/add', katalogController.addCatalog)


module.exports = routes

