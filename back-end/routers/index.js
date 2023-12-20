const express = require ("express");
const routers = express();
const {register, login} = require("../controllers/auth");

routers.post("/register", register);
routers.post("/login", login);

module.exports = routers;