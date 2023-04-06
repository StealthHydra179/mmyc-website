const { render } = require('ejs');
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
//const myTeam = require('./team.json')

// let emailData = {
//     emails:[]
// };
// let rawEmailData = fs.readFileSync('emails.json');
// emailData = JSON.parse(rawEmailData.toString());


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
    // res.render('redirect')
    res.status(302).redirect("https://docs.google.com/forms/d/e/1FAIpQLSddX4fI8ZOmBJgN9U7kTNLmnebHOlO287ptJLYDL7UPQcBuMg/viewform")
})

app.get('/email', (req,res) => {
    res.status(302).redirect("https://sybb0997.mywhc.ca:2096/")
})

app.get('/events/evolve2023', (req, res) => {
    res.locals.title = 'Evolve 2023';
    res.render('events/evolve2023');
})

app.get("/events/expo2023", (req, res) => {
res.locals.title = "Expo 2023";
    res.render("events/expo");
})

app.use(express.json())
app.post('/mailing-list-signup', (req, res) => {
    // store to obj
    // console.log(req);
    console.log(req.query.email);
    var emailProvided = req.query.email;
    if (emailProvided == null) {
        console.log("no email");
        res.send("No email!");
        return;
    }
    fs.readFile('./email.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
            res.send("Error!");
        } else {
            obj = JSON.parse(data); //now it an object
            obj.table.push({email: emailProvided}); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('./email.json', json, 'utf8', function callback() {
                res.send("Complete!");
                
                //now upload to google sheets?
                
                
            }); // write it back
    }});
})

// why does backslash at the end break everything ;-; (rel links)

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Listening");
})

// var fs = require("fs");
const {raw} = require("express");
var contents = fs.readFileSync("headshots.json");
var jsonContent = JSON.parse(contents);
