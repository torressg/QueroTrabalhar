const express = require('express');
const router = express.Router();
const Job = require('../models/Job')

router.get('/test', (req, res) => {
    res.send("chupa greco, fiz uma API")
})


router.post('/add', (req, res) => { 

    let {title, salary, company, email, new_job} = req.body;

    Job.create({
        title,
        salary,
        company,
        email,
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
    
})

module.exports = router