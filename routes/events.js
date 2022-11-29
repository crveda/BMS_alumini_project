const path = require('path');
const express = require('express');

const routes = express.Router();

const eventCtrl = require(path.join(__dirname,"..","controller","events.js"));


routes.post("/host_a_event",eventCtrl.postEvent);
routes.get("/host_a_event",eventCtrl.getHostEvent);
routes.get("/events",eventCtrl.getEvents);
routes.get("/events/past",eventCtrl.getPastEvents);
routes.get("/events/upcoming",eventCtrl.getUpComingEvents);
routes.get("/events/online",eventCtrl.getOnlineEvents);
routes.get("/events/offline",eventCtrl.getOfflineEvents);

routes.post("/events/edit",eventCtrl.postEditEvents);
routes.get("/events/edit/:eventId",eventCtrl.getEditEvent);

routes.get("/events/register/:eventId",eventCtrl.getRegisterEvent);
routes.post("/events/register",eventCtrl.postRegisterEvent);

exports.routes = routes;