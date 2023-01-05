const express = require('express');
const path = require('path');
const router = express.Router();
const conn = require('../initDB')
const mongoose = require('mongoose');
const reports = require('../models/reportsNumber.model');
const fetch = require('node-fetch');
const util = require('util');

router.get('/lastEndpoint', function(req, res, next) {
    reports.findOne({ service: 'Nove Novicke' }, function (err, data) {
        const report = data.lastEndpoint
        res.send({lastEndpoint: report})
    });
});
router.get('/mostPopularService', function(req, res, next) {
    reports.findOne({ service: 'Nove Novicke' }, function (err, data) {
        const report = data.mostPopularService
        res.send({mostPopularService: report})
    });
});
router.get('/numCalls', function(req, res, next) {
    reports.findOne({ service: 'Nove Novicke' }, function (err, data) {
        const numReports = data.numCalls
        res.send({numCalls: numReports})
    });
    //res.send({test});
});
router.post('/update', function(req, res, next) {
    reports.findOne({ service: 'Nove Novicke' }, function (err, data) {
        var numReports = data.numCalls
        numReports += 1;
        reports.updateOne({service: "Nove Novicke"}, 
            {service: "Nove Novicke", lastEndpoint: "novicke-nove-novicke-api", mostPopularService: "Nove Novicke", numCalls: numReports}, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
        res.send({serviceCalled: "/newNews"})
    });
    /*
    const test = req.body.service
    if(req.body.service == "Nove Novicke") {
    reports.insertMany({
        service: "Nove Novicke",
        lastEndpoint: "novicke-nove-novicke-api",
        mostPopularService: "Nove Novicke",
        numCalls: numReports,
    }).then(function(err) {
        console.log('insert new data successfully')
    }).catch(function(err) {
        console.log('has error when insert new data '+ err);
    })
    res.send({name: data.numCalls, surname: "novak"});
    } else {
    res.send({test});
    }
    */
});


module.exports = router;