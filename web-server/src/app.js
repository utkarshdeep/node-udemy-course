const path = require('path')
const express = require('express')
const hbs = require('hbs')

//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Expess config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine & views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Utkarsh'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Utkarsh'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Utkarsh'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 24,
        location: 'Pune'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        notFoundText: 'Help article not found!',
        title: '404',
        name: 'Utkarsh'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        notFoundText: 'Page not found!',
        title: '404',
        name: 'Utkarsh'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})