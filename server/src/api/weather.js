const express = require('express');
const router = express.Router();

const city_id = 2950158;

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

//READ- all
router.get('/', (req, res, next) => {
    const params = new URLSearchParams({
        id: city_id,
        appid: process.env.WEATHER_API_TOKEN,
    });

    res.json({
        message: 'Hello World',
    });
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