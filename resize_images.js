let sharp = require("sharp");
let fs = require("fs");
// Figure out which images to resize by using: https://ausi.github.io/respimagelint/
console.log("Resizing Images");

//images to resize

// resizeImage("./public/img/logo/MMYC-Logo-1.png","./public/img/logo/resized/MMYC-Logo-210px.webp", 210, 57);
// resizeImage("./public/img/logo/MMYC-Logo-1.png","./public/img/logo/resized/MMYC-Logo-420px.png", 420, 114);

resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg","./public/img/events/thinktank2023/resized/thinktank_left_banner-256.webp", 256,493);
resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg","./public/img/events/thinktank2023/resized/thinktank_left_banner-540.webp", 540,1041);
resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg","./public/img/events/thinktank2023/resized/thinktank_left_banner-720.webp", 720,1388);
resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg","./public/img/events/thinktank2023/resized/thinktank_left_banner-950.webp", 950,1831);
resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg","./public/img/events/thinktank2023/resized/thinktank_left_banner-1140.webp", 1140,2198);
resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg","./public/img/events/thinktank2023/resized/thinktank_left_banner-1300.webp", 1300,2506);
resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg","./public/img/events/thinktank2023/resized/thinktank_left_banner-1440.webp", 1440,2776);



console.log("Resizing Images Complete")

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