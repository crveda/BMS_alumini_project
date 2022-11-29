const express = require('express');
const routes = express.Router();
const path = require('path');
const newsCtrl = require(path.join(__dirname,"..","controller","news.js"));

routes.get("/News_feed",newsCtrl.getNewsFeed);

routes.get("/registerNews",newsCtrl.getRegisterNews);

routes.post("/registerNews",newsCtrl.postRegisterNews);


exports.routes = routes;

