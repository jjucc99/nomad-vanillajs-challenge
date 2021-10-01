const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImg = images[Math.round(Math.random() * (images.length - 1))];
const bgImage = document.createElement("img");

document.body.style.backgroundImage = `url('img/${chosenImg}')`;
