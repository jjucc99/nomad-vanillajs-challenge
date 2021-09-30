const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImg = images[Math.round(Math.random() * (images.length - 1))];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);
