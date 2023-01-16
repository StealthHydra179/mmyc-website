let sharp = require("sharp");
let fs = require("fs");
// Figure out which images to resize by using: https://ausi.github.io/respimagelint/
console.log("Resizing Images");

//images to resize

resizeImage("./public/img/logo/MMYC-Logo-1.png","./public/img/logo/resized/MMYC-Logo-210px.webp", 210, 57);



console.log("Resizing Image Complete")

// resize driver code
function resizeImage(inputFilePath, outputFilePath, scaledX, scaledY, replace = false) {
    if (replace || !fs.existsSync(outputFilePath)) {
        sharp(inputFilePath).resize(scaledX, scaledY).toFile(outputFilePath, function (err) {
            if (err != null) {
                console.error(err);
            } else {
                console.log("New File: " + inputFilePath + " resized to " + outputFilePath + " with dimensions (x,y): (" + scaledX + ", " + scaledY + ")");
            }
        });
        
    } else {
        console.log("No Change: " + inputFilePath + " not resized since " + outputFilePath + " already exists")
    }
}