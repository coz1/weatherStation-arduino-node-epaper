const express = require('express');
const router = express.Router();
const axios = require('axios');

const city_id = 2950158;

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'
let cacheData;
let cacheTime;


//READ- all
router.get('/', async (req, res, next) => {
    // in memory cache
    if(cacheTime && cacheTime > Date.now() - 30 * 1000) {
        return res.json(cacheData);
    }
    
    try {    
    const params = new URLSearchParams({
        id: city_id,
        units:'metric',
        appid: process.env.WEATHER_API_TOKEN,
    });

    const { data } = await axios.get(`${BASE_URL}${params}`);
    cacheData = data;
    cacheTime = Date.now();
    data.cacheTime = cacheTime;
    
    return res.json(data);
    } catch (error) {
        return next(error);
    }
});

//READ- one
router.get('/:id', (req, res, next) => {
    res.json({
        message: 'Hello World',
    });
});

//CREATE one
router.post('/', (req, res, next) => {

});

//UPDATE one
router.put('/:id', (req, res, next) => {

});

//DELTE one
router.delete('/:id', (req, res, next) => {

});

module.exports = router