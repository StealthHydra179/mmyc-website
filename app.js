const { render } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
//const myTeam = require('./team.json')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use("/modules/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));
app.use("/modules/font-awesome", express.static(__dirname + "/node_modules/font-awesome/css/"));
app.use("/modules/popperjs", express.static(__dirname + "/node_modules/popper.js/dist/"));
app.use("/modules/bootstrap", express.static(__dirname + "/node_modules/bootstrap/dist/"));
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

app.get('/thinktank', (req, res) => {
    res.locals.title = 'ThinkTank';
    res.render('thinktank');
})

app.get('/collage', (req, res) => {
    res.locals.title = 'Collage';
    res.render('collage');
})

app.get('/frostbites', (req, res) => {
    res.locals.title = 'Frostbites';
    res.render('frostbites');
})

app.get('/events', (req, res) => {
    res.locals.title = 'Our Events';
    res.render('events');
})

app.get('/contact-us', (req, res) => {
    res.locals.title = 'Contact Us';
    res.render('contact-us');
})

app.get('/sponsors', (req, res) => {
    res.locals.title = 'Sponsors';
    res.render('sponsors');
})

app.get('/privacy', (req, res) => {
    res.locals.title = 'Privacy Policy';
    res.render('privacy');
})

app.get('/faq', (req, res) => {
    res.locals.title = 'FAQ';
    res.render('faq');
})

app.listen(3000, () => {
    console.log("Listening 3000");
})

var fs = require("fs");
var contents = fs.readFileSync("headshots.json");
var jsonContent = JSON.parse(contents);