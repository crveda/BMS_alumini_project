const path = require('path');
const express = require('express');

const routes = express.Router();
const authCtrl  = require(path.join(__dirname,"..","controller","join.js"));

routes.get("/join",authCtrl.getJoin);

routes.post("/login",authCtrl.postLogin);

routes.post("/signUp",authCtrl.postSignup);

routes.get("/logOut",authCtrl.getLogOut);



exports.routes = routes;