const express = require('express');
const path = require('path');
const router = express.Router();
const conn = require('../initDB')
const mongoose = require('mongoose');
const reports = require('../models/reportsNumber.model');
const popular = require('../models/reportsMostPopular.model');
const fetch = require('node-fetch');
const util = require('util');

router.get('/lastEndpoint', function(req, res, next) {
    reports.findOne({ service: 'Nove Novicke' }, function (err, data) {
        const report = data.lastEndpoint
        const numCalls = data.numCalls
        res.send({lastEndpoint: report, numCalls: numCalls})
    });
});
router.get('/mostPopularService', function(req, res, next) {
    popular.findOne({ service: 'Nove Novicke' }, function (err, data) {
        console.log(data)
        const report = data.service
        const numCalls = data.numCalls
        res.send({mostPopularService: report, numCalls: numCalls})
    });
});
router.get('/numCalls', function(req, res, next) {
    reports.findOne({ service: 'Nove Novicke' }, function (err, data) {
        const numReports = data.numCalls
        const lastEndpoint = data.lastEndpoint
        const service = data.service
        res.send({service: service, lastEndpoint: lastEndpoint, numCalls: numReports})
    });
    //res.send({test});
});
router.post('/update', function(req, res, next) {
    reports.findOne({ service: 'Nove Novicke' }, function (err, data) {
        var numReports = data.numCalls
        numReports += 1;
        reports.updateOne({service: "Nove Novicke"}, 
            {service: "Nove Novicke", lastEndpoint: "/new", mostPopularService: "Nove Novicke", numCalls: numReports}, function (err, docs) {
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