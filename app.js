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

app.get('/', (req,res) => {
    res.locals.title = 'MMYC Home Page';
    res.render('home');
})

app.listen(3000, () => {
    console.log("Listening 3000");
})