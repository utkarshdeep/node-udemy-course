// Load json from file. Override the fields. Write again that to fs


const fs = require('fs')

const dataBuffer = fs.readFileSync('2-json.json')

const dataString = dataBuffer.toString()

const dataObj = JSON.parse(dataString)

dataObj.name = 'Utkarsh'

dataObj.age = 30

const newDataJSON = JSON.stringify(dataObj)

fs.writeFileSync('2-json.json', newDataJSON)

