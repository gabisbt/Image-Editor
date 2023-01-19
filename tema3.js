const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

async function get_dog() {

    await fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("poza").src = data.message;
            let canvas = document.getElementById("Canvass");
            let ctx = canvas.getContext('2d');

            canvas.width = 500;
            canvas.height = 500;
            // console.log(canvas);
            // console.log(data);

            let imgObj = new Image();
            imgObj.src = data.url;
            imgObj.src = document.getElementById("poza").src;

            imgObj.onload = function () {
                let w = canvas.width;
                let h = canvas.height;

                imgObj.src = document.getElementById("poza").src;
                ctx.drawImage(imgObj, 0, 0, w, h);
            };
        })
        clearAll();
}

previewImg = document.querySelector("#Canvass");

let brightness = 100;
let contrast = 100;
let invert = 0;
let grayscale = 0;

function bri (value) {
    console.log(brightness);
    brightness = value ? brightness + 20 : brightness - 20;
    if(brightness >= 200) {
        brightness = 200;
    }
    if(brightness <= 0) {
        brightness = 0;
    }
    previewImg.style.filter = `brightness(${brightness}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%)`;  
}

setTimeout(bri, 5000);

function contr (value) {
    contrast = value ? contrast + 20 : contrast - 20;
    if(contrast >= 200) {
        contrast = 200;
    }
    if(contrast <= 0) {
        contrast = 0;
    }
    previewImg.style.filter = `brightness(${brightness}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%)`;  
}

function gs(value) {
    grayscale = value ? grayscale + 20 : grayscale - 20;
    if(grayscale >= 100) {
        grayscale = 100;
    }
    if(grayscale <= 0) {
        grayscale = 0;
    }
    previewImg.style.filter = `brightness(${brightness}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%)`;
}

function inv(value) {
    invert = value ? invert + 20 : invert - 20;
    if(invert >= 100) {
        invert = 100;
    }
    if(invert <= 0) {
        invert = 0;
    }
    previewImg.style.filter = `brightness(${brightness}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%)`;
}

function clearAll() {
    brightness = 100;
    contrast = 100;
    invert = 0;
    grayscale = 0;
    previewImg.style.filter = `brightness(${brightness}%) contrast(${contrast}%) invert(${invert}%) grayscale(${grayscale}%)`;
}

const brightnessplus = document.getElementById("brightness+");
const brightnessminus = document.getElementById("brightness-");
const contrastplus = document.getElementById("contrast+");
const contrastminus = document.getElementById("contrast-");
const invertplus = document.getElementById("invert+");
const invertminus = document.getElementById("invert-");
const grayscaleplus = document.getElementById("grey-scale+");
const grayscaleminus = document.getElementById("grey-scale-");

brightnessplus.addEventListener("click", (() => bri(true)));
brightnessminus.addEventListener("click", (() => bri(false)));

contrastplus.addEventListener("click", (() => contr(true)));
contrastminus.addEventListener("click", (() => contr(false)));

invertplus.addEventListener("click", (() => inv(true)));
invertminus.addEventListener("click", (() => inv(false)));

grayscaleplus.addEventListener("click", (() => gs(true)));
grayscaleminus.addEventListener("click", (() => gs(false)));
