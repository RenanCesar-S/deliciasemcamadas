let imgs = document.querySelectorAll(".image-container img");
let viewImage = document.querySelector(".view-image");
let closeBtn = document.querySelector(".view-image span");
for(let img of imgs) {
    img.addEventListener("click", (e)=> {
        viewImage.style.display = "flex";
        clickedSrcImg = e.target.src;
        viewImage.firstElementChild.src = clickedSrcImg;
    });
}

closeBtn.addEventListener('click', (e)=>{
    viewImage.style.display = "none";
});

const goToTop = document.querySelector(".go-to-top");

window.addEventListener("scroll", ()=> {
    if (window.pageYOffset > 400) {
        goToTop.classList.add("go-top-active")
    } else {
        goToTop.classList.remove("go-top-active")
    }
})