const path = require('path');
const express = require('express');

const routes = express.Router();

const jobCtrl = require(path.join(__dirname,"..","controller","jobs.js"));


routes.get("/jobs",jobCtrl.getJob);

routes.get("/jobs/PostAjob",jobCtrl.getPostAJob);

routes.post("/jobs/PostAjob",jobCtrl.postPostAjob);

routes.get("/jobs/software",jobCtrl.getsoftware);

routes.get("/jobs/ec",jobCtrl.getec);

routes.get("/jobs/ee",jobCtrl.getee);

routes.get("/jobs/civil",jobCtrl.getcivil);

routes.get("/jobs/mech",jobCtrl.getmech);

routes.get("/jobs/bio",jobCtrl.getbio);

routes.get("/jobs/other",jobCtrl.getother);

routes.get("/jobs/edit/:jobId",jobCtrl.getEditJob);

routes.post("/jobs/edit",jobCtrl.postEditJob);

exports.routes = routes;