
const axios = require('axios');


const getClima = async (lat, lng) => {

const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6ae96db6d72401e97bb55a552f4c270e&units=metric`)


return resp.data.main.temp;

}

module.exports = {
    getClima
}