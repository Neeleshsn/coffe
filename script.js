// let navbar = document.querySelector('.navbar');
// let menubtn = document.querySelector('#menu-btn');
// var flag = 0;

// menubtn.addEventListener("click", function(){
//     if (flag == 0) {
//         full.style.top = 0;
//         // menu.innerHTML = '<i class="ri-close-fill"></i>';
//         flag = 1
//       }else{
//         full.style.top = "-100%";
//         // menu.innerHTML = '<i class="ri-menu-3-line"></i>';
//         flag = 0;
//       }
// })
// ---------------------------------

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}


// -------------cart
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


// -----------searchForm
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// ---------
window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}