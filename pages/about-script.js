const lastImg = document.querySelector(".bg-for-large-device img");

let screenWidth = window.innerWidth
    if(screenWidth > 600 && screenWidth < 992) {
        lastImg.src = "../imgs/gallery/happy-cup-candy.jpeg"
    }