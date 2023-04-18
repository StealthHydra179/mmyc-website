# mmyc-website
Website project for the Markham Mayor's Youth Council

## How to run (after installing node.js)
```
npm install
node app
```
Website opens on port 3000 once run. [http://localhost:3000](http://localhost:3000)
```
fetch from github
cpanel nodejs app
```
## Things to change
- ~~DONE Update packages~~
- Update headshots.json (required: names, descriptions, headshot) https://docs.google.com/spreadsheets/d/1mfZpdVwrwfBDhVwkWo2rdhDh8Ru42HhMU_BFlaM2m0U/edit#gid=0
- ~~DONE currently clicking on events doesnt work, the events page can only be navigated to
by typing /events after the URL~~
- update events pages and the respective event pages
  - things that are needed for the event pages:
    - event name
    - event date
    - event banner
    - location
    - images
    - event description
- ~~DONE refactor events into their own folder~~

## Further Notes
in [headshots](headshots.json) the names are the names of the images in the 
[images](public/images) folder. The images should be in the format of `name.jpg` 
or `name.png` where name is the name of the person. The images should be square and 
300x300 pixels. It is also located in the [images](public/img/headshots) folder in 
this github repository.

Furthermore, the first two people in the headshots.json file are the co-chairs.