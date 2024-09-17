const routes = require("express").Router()

const myController = require("../controllers.js")

routes.get("/", myController.person)

module.exports = routes