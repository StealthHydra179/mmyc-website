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

app.use('/favicon.ico', express.static('./favicon.ico'));

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

// app.get('/mmjc', (req, res) => {
//     res.locals.title = 'MMJC';
//     res.render('mmjc');
// })

app.get('/ambassador', (req, res) => {
    res.locals.title = 'Ambassador Program';
    res.render('ambassador');
})
// TODO WHENEVER EDITING PAGES NEED TO ADD A NEW ROUTE FOR THE PAGE
// app.get('/events/thinktank', (req, res) => {
//     res.locals.title = 'ThinkTank';
//     res.render('events/thinktank');
// })
//
// app.get('/events/collage', (req, res) => {
//     res.locals.title = 'Collage';
//     res.render('events/collage');
// })
//
// app.get('/events/frostbites', (req, res) => {
//     res.locals.title = 'Frostbites';
//     res.render('events/frostbites');
// })
// END TODO
app.get('/events/thinktank2023', (req, res) => {
    res.locals.title = 'ThinkTank 2023';
    res.render('events/thinktank2023');
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

app.get('/events/evolve2023/signup', (req, res) => {
    res.status(302).redirect("https://docs.google.com/forms/d/e/1FAIpQLSddX4fI8ZOmBJgN9U7kTNLmnebHOlO287ptJLYDL7UPQcBuMg/viewform")
})

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Listening");
})

var fs = require("fs");
var contents = fs.readFileSync("headshots.json");
var jsonContent = JSON.parse(contents);
