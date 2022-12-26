# mmyc-website
Website project for the Markham Mayor's Youth Council

## How to run
```
npm install
node app
```
Website opens on port 3000 once run. [http://localhost:3000](http://localhost:3000)


## Things to change
- Update packages
- Update headshots.json (required: names, descriptions, headshot)
- currently clicking on events doesnt work, the events page can only be navigated to
by typing /events after the URL
- update events pages and the respective event pages
- DONE refactor events into their own folder 

## Furthernotes
in [headshots](headshots.json) the names are the names of the images in the 
[images](public/images) folder. The images should be in the format of `name.jpg` 
or `name.png` where name is the name of the person. The images should be square and 
300x300 pixels. It is also located in the [images](public/img/headshots) folder in 
this github repository.

Furthermore, the first two people in the headshots.json file are the co-chairs.