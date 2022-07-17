const backgrounds = ["images/0.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg"];

const chosenBg = "url('" + backgrounds[Math.floor(Math.random() * backgrounds.length)] + "')";

document.body.style.backgroundImage = chosenBg;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";