let sharp = require("sharp");
let fs = require("fs");
// Figure out which images to resize by using: https://ausi.github.io/respimagelint/
console.log("Resizing Images");

resize_thinktank2023();

//images to resize
function resize_thinktank2023() {
    console.log("Resizing thinktank2023 images");
    resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_left_banner-256.webp", 256, 493);
    resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_left_banner-540.webp", 540, 1041);
    resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_left_banner-720.webp", 720, 1388);
    resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_left_banner-950.webp", 950, 1831);
    resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_left_banner-1140.webp", 1140, 2198);
    resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_left_banner-1300.webp", 1300, 2506);
    resizeImage("./public/img/events/thinktank2023/thinktank_left_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_left_banner-1440.webp", 1440, 2776);
    
    resizeImage("./public/img/events/thinktank2023/thinktank_right_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_right_banner-256.webp", 256, 525);
    resizeImage("./public/img/events/thinktank2023/thinktank_right_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_right_banner-540.webp", 540, 1108);
    resizeImage("./public/img/events/thinktank2023/thinktank_right_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_right_banner-720.webp", 720, 1477);
    resizeImage("./public/img/events/thinktank2023/thinktank_right_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_right_banner-910.webp", 910, 1867);
    resizeImage("./public/img/events/thinktank2023/thinktank_right_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_right_banner-1070.webp", 1070, 2195);
    resizeImage("./public/img/events/thinktank2023/thinktank_right_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_right_banner-1210.webp", 1210, 2482);
    resizeImage("./public/img/events/thinktank2023/thinktank_right_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_right_banner-1330.webp", 1330, 2728);
    resizeImage("./public/img/events/thinktank2023/thinktank_right_banner.jpg", "./public/img/events/thinktank2023/resized/thinktank_right_banner-1440.webp", 1440, 2954);
}

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
