const express = require('express');
const router = express.Router();
const Country = require('../models/dataSchema');


//Create
router.post('/create',(req,res,next) => {
    var newCountry = new Country({
        name:req.body.name,
        capital:req.body.capital
    });
    newCountry
        .save()
        .then( country => {
            res.status(200).json({msg:country});
        }).catch(err => {
            res.status(500).json({errmsg: err });
        })
});

//Read
router.get('/read',(req,res,next) => {
    Country.find({},(err,countries) => {
        if(err){
            res.status(500).json({errmsg:err});
        }
        res.status(200).json({msg: countries });
    });
});

//Update
router.put('/update',(req,res,next) => {

    // Country.findById(req.body._id,(err,country) => {
    //     if(err){
    //         res.status(500).json({errmsg:err});
    //     }
    //     country.name= req.body.name;
    //     country.capital = req.body.capital;
    //     country
    //         .save()
    //         .then(country => {
    //             res.status(200).json({msg:country});
    //         }).cathch(err => {
    //             res.status(500).json({errmsg:err});
    //         })
    // })

    Country.findById(req.body._id)
        .then(country => {
            country.name = req.body.name;
            country.capital = req.body.capital;
            country
                .save()
                .then(country => {
                    res.status(200).json({msg:country});
                }).catch(err => {
                    res.status(500).json({errmsg:err});
                })
        }).catch(err => {
            res.status(500).json({errmsg:err});
        })
});


//Delete
router.delete('/delete/:id',(req,res,next) => {
    Country.findOneAndRemove({_id:req.params.id})
        .then( country => {
            res.status(200).json({msg:country});
        }).catch(err => {
            res.status(500).json({errmsg:err});
        })
});

module.exports = router;