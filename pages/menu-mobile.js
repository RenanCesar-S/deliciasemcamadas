const navMobile = document.querySelector(".nav-mobile");
const btnAnimation = document.querySelector("#btn-menu");

btnAnimation.addEventListener('click', (e)=> {
    navMobile.classList.toggle('open');
    btnAnimation.classList.toggle('active');
});

navMobile.addEventListener('click', (e)=> {
    navMobile.classList.toggle('open');
    btnAnimation.classList.toggle('active');
});