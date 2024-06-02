// herder
// 使用JS下方寫法無作動
/*const open = document.querySelector(".open");
const close = document.querySelector(".close");
const dropdown = document.querySelector(".dropdown");
open.addEventListener("click", () => {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "flex";
        open.style.display = "none";
        close.style.display = "flex";
    }
});
close.addEventListener("click", () => {
    if (dropdown.style.display === "flex") {
        dropdown.style.display = "none";
        close.style.display = "none";
        open.style.display = "flex";
    }
});*/

// jQuery
$(".list").click(function() {
    $(".open").toggleClass("dropdown-close");
    $(".close").toggleClass("dropdown-close");
    $(".dropdown").toggleClass("dropdown-open");
});





// swiper
const swiper = new Swiper ('.article-swiper', {
    loop: true,
    // Responsive breakpoints
    breakpoints: { // 畫面呈現斷點
        // when window width is >= 576px
        576: {
        slidesPerView: 1,
        spaceBetween: 0
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 28
        },
        // when window width is >= 992px
        992: {
        slidesPerView: 3,
        spaceBetween: 24
        }
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 可點擊(圓點)切換
        bulletActiveClass: 'bullet-active'
    },
});