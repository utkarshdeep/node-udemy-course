const fs = require('fs')

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

// Object to JSON String
const bookJSON = JSON.stringify(book)

console.log(book)
console.log(bookJSON)


// JSONString to Object
const parsedData = JSON.parse(bookJSON)

console.log(parsedData.author)

// write to file system

fs.writeFileSync('1-json.json', bookJSON)

// read file to get Buffer
const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer)

// convert buffer to string
const dataJSON = dataBuffer.toString()
console.log(dataJSON)

// convert JSON string to object
const data = JSON.parse(dataJSON)
console.log(data.title)


