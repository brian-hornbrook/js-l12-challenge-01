const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

// get images
const getImage = async function () {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    selectRandomImage(images);
};

// select random image
const selectRandomImage = async function (images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex]
    displayImage(randomImage);
};

// display
const displayImage = function (randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

// button
button.addEventListener("click", () => {
    getImage();
});
