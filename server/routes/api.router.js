const express = require('express');
const axios = require('axios');
const router = express.Router();


//GET data from api
router.get('/', (req, res) => {
    //console.log('making api request')
    axios.get(`https://jsonplaceholder.typicode.com/posts`)

    .then( response => {
        //console.log('api response', response)
        res.send(response.data)
    })
    .catch(err => {
        console.log('Error getting all data from API', err)
    })
});

//GET user selected data from api
router.get('/user', (req, res) => {
    //console.log('making user api request', req.query)
    let type = req.query.searchType
    let param = req.query.searchParameter
    axios.get(`https://jsonplaceholder.typicode.com/posts?${type}=${param}`)

    .then( response => {
        //console.log('user api response', response)
        res.send(response.data)
    })
    .catch(err => {
        console.log('Error getting all data from API', err)
    })
});

module.exports = router;