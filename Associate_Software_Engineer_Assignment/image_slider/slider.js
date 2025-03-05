let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let index = 0;

document.getElementById("slider").src = images[index];

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("slider").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("slider").src = images[index];
}
