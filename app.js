const { render } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
//const myTeam = require('./team.json')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use("/modules/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
app.use("/modules/font-awesome", express.static(__dirname + "/node_modules/font-awesome/css"));
app.use("/modules/popperjs", express.static(__dirname + "/node_modules/popper.js/dist"));
app.use("/modules/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist"));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.locals.title = 'MMYC Home Page';
    res.render('home');
})

app.get('/home', (req, res) => {
    res.locals.title = 'MMYC Home Page';
    res.render('home');
})

app.get('/about-us', (req, res) => {
    res.locals.title = 'About Us';
    res.render('about-us');
})

app.get('/events', (req, res) => {
    res.locals.title = 'Events';
    res.render('events');
})

app.get('/meet-the-team', (req, res) => {
    res.locals.jsonContent = jsonContent.data;
    res.locals.title = 'Meet The Team';
    res.render('meet-the-team');
})

app.get('/mmjc', (req, res) => {
    res.locals.title = 'MMJC';
    res.render('mmjc');
})

app.get('/ambassador', (req, res) => {
    res.locals.title = 'Ambassador Program';
    res.render('ambassador');
})

app.listen(3000, () => {
    console.log("Listening 3000");
})

var fs = require("fs");
// Get content from file
var contents = fs.readFileSync("headshots.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
// Get Value from JSON
console.log("data:", jsonContent.data);