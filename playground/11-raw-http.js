const { error } = require('console')
const http = require('http')

const url = `http://api.weatherstack.com/current?access_key=444751f42bb21eaceaeceef830a62941&query=40,-75`


const request = http.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error occurred: ', error)
})

request.end()