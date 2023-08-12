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

function newImage(inputFilePath, outputFilePath, replace = false) {
    if (replace || !fs.existsSync(outputFilePath)) {
        sharp(inputFilePath).toFile(outputFilePath, function (err) {
            if (err != null) {
                console.error(err);
            } else {
                console.log("New File: " + inputFilePath + " resized to " + outputFilePath);
            }
        });
    } else {
        console.log("No Change: " + inputFilePath + " not resized since " + outputFilePath + " already exists")
    }
}
/*
Aiden.png
Allen.png
Anjani.png
Arya.png
Benjamin.png
Callista.png
Christian.png
Elyssa.png
Enya.png
Eric.png
Gloria.png
Hadia.png
Isabelle.png
Jiabei.png
Jin.png
Karina.png
Mehrava.png
Melody.png
Rachel.png
Sabine.png
Silken.png
Stephanie.png
temp.png
Tom.png
Varna.png
 */

function headShots() {
    /*578×385, 908×605*/
    resizeImage("./public/img/headshots/Aiden.png", "./public/img/headshots/resized/Aiden-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Aiden.png", "./public/img/headshots/resized/Aiden-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Allen.png", "./public/img/headshots/resized/Allen-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Allen.png", "./public/img/headshots/resized/Allen-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Anjani.png", "./public/img/headshots/resized/Anjani-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Anjani.png", "./public/img/headshots/resized/Anjani-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Arya.png", "./public/img/headshots/resized/Arya-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Arya.png", "./public/img/headshots/resized/Arya-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Benjamin.png", "./public/img/headshots/resized/Benjamin-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Benjamin.png", "./public/img/headshots/resized/Benjamin-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Callista.png", "./public/img/headshots/resized/Callista-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Callista.png", "./public/img/headshots/resized/Callista-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Christian.png", "./public/img/headshots/resized/Christian-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Christian.png", "./public/img/headshots/resized/Christian-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Elyssa.png", "./public/img/headshots/resized/Elyssa-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Elyssa.png", "./public/img/headshots/resized/Elyssa-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Enya.png", "./public/img/headshots/resized/Enya-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Enya.png", "./public/img/headshots/resized/Enya-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Eric.png", "./public/img/headshots/resized/Eric-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Eric.png", "./public/img/headshots/resized/Eric-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Gloria.png", "./public/img/headshots/resized/Gloria-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Gloria.png", "./public/img/headshots/resized/Gloria-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Hadia.png", "./public/img/headshots/resized/Hadia-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Hadia.png", "./public/img/headshots/resized/Hadia-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Isabelle.png", "./public/img/headshots/resized/Isabelle-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Isabelle.png", "./public/img/headshots/resized/Isabelle-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Jiabei.png", "./public/img/headshots/resized/Jiabei-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Jiabei.png", "./public/img/headshots/resized/Jiabei-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Jin.png", "./public/img/headshots/resized/Jin-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Jin.png", "./public/img/headshots/resized/Jin-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Karina.png", "./public/img/headshots/resized/Karina-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Karina.png", "./public/img/headshots/resized/Karina-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Mehrava.png", "./public/img/headshots/resized/Mehrava-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Mehrava.png", "./public/img/headshots/resized/Mehrava-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Melody.png", "./public/img/headshots/resized/Melody-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Melody.png", "./public/img/headshots/resized/Melody-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Rachel.png", "./public/img/headshots/resized/Rachel-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Rachel.png", "./public/img/headshots/resized/Rachel-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Sabine.png", "./public/img/headshots/resized/Sabine-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Sabine.png", "./public/img/headshots/resized/Sabine-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Silken.png", "./public/img/headshots/resized/Silken-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Silken.png", "./public/img/headshots/resized/Silken-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Stephanie.png", "./public/img/headshots/resized/Stephanie-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Stephanie.png", "./public/img/headshots/resized/Stephanie-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Tom.png", "./public/img/headshots/resized/Tom-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Tom.png", "./public/img/headshots/resized/Tom-908.webp", 908, 605);
    resizeImage("./public/img/headshots/Varna.png", "./public/img/headshots/resized/Varna-578.webp", 578, 385);
    resizeImage("./public/img/headshots/Varna.png", "./public/img/headshots/resized/Varna-908.webp", 908, 605);
    
    /*
    Aiden.png
    Allen.png
    Anjani.png
    Arya.png
    Benjamin.png
    Callista.png
    Christian.png
    Elyssa.png
    Enya.png
    Eric.png
    Gloria.png
    Hadia.png
    Isabelle.png
    Jiabei.png
    Jin.png
    Karina.png
    Mehrava.png
    Melody.png
    Rachel.png
    Sabine.png
    Silken.png
    Stephanie.png
    temp.png
    Tom.png
    Varna.png
     */
    newImage("./public/img/headshots/Aiden.png", "./public/img/headshots/resized/Aiden.webp");
    newImage("./public/img/headshots/Allen.png", "./public/img/headshots/resized/Allen.webp");
    newImage("./public/img/headshots/Anjani.png", "./public/img/headshots/resized/Anjani.webp");
    newImage("./public/img/headshots/Arya.png", "./public/img/headshots/resized/Arya.webp");
    newImage("./public/img/headshots/Benjamin.png", "./public/img/headshots/resized/Benjamin.webp");
    newImage("./public/img/headshots/Callista.png", "./public/img/headshots/resized/Callista.webp");
    newImage("./public/img/headshots/Christian.png", "./public/img/headshots/resized/Christian.webp");
    newImage("./public/img/headshots/Elyssa.png", "./public/img/headshots/resized/Elyssa.webp");
    newImage("./public/img/headshots/Enya.png", "./public/img/headshots/resized/Enya.webp");
    newImage("./public/img/headshots/Eric.png", "./public/img/headshots/resized/Eric.webp");
    newImage("./public/img/headshots/Gloria.png", "./public/img/headshots/resized/Gloria.webp");
    newImage("./public/img/headshots/Hadia.png", "./public/img/headshots/resized/Hadia.webp");
    newImage("./public/img/headshots/Isabelle.png", "./public/img/headshots/resized/Isabelle.webp");
    newImage("./public/img/headshots/Jiabei.png", "./public/img/headshots/resized/Jiabei.webp");
    newImage("./public/img/headshots/Jin.png", "./public/img/headshots/resized/Jin.webp");
    newImage("./public/img/headshots/Karina.png", "./public/img/headshots/resized/Karina.webp");
    newImage("./public/img/headshots/Mehrava.png", "./public/img/headshots/resized/Mehrava.webp");
    newImage("./public/img/headshots/Melody.png", "./public/img/headshots/resized/Melody.webp");
    newImage("./public/img/headshots/Rachel.png", "./public/img/headshots/resized/Rachel.webp");
    newImage("./public/img/headshots/Sabine.png", "./public/img/headshots/resized/Sabine.webp");
    newImage("./public/img/headshots/Silken.png", "./public/img/headshots/resized/Silken.webp");
    newImage("./public/img/headshots/Stephanie.png", "./public/img/headshots/resized/Stephanie.webp");
    newImage("./public/img/headshots/Tom.png", "./public/img/headshots/resized/Tom.webp");
    newImage("./public/img/headshots/Varna.png", "./public/img/headshots/resized/Varna.webp");
}

headShots()