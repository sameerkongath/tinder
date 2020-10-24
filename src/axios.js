const axios = require("axios")
const instance  = axios.create({
    baseUrl: 'http://localhos:8001'
})

export default instance