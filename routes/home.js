const express = require('express');
const routes = express.Router();

const path = require('path');
const homeCtrl = require(path.join(__dirname,"..","controller","home.js"));


routes.get("/home",homeCtrl.getHome);

routes.get("/contactUs",homeCtrl.getContactUs);

routes.post("/contactUs",homeCtrl.postContactUs);

routes.get("/gallery",homeCtrl.getGallery);

routes.get("/alumini",homeCtrl.getAlumini);

routes.get("/contribution",homeCtrl.getContribution);

exports.routes = routes;