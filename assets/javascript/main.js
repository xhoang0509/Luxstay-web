const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


function addShadow() {
    $('.header__search-input').classList.toggle('header__search-input-filed');
}

var isDisplayCurrencyBox = false;
function displayCurrencyBox() {
    if (!isDisplayCurrencyBox) {
        $('.currency__box').style.display = "flex";
        isDisplayCurrencyBox = true;
    }else {
        $('.currency__box').style.display = "none";
        isDisplayCurrencyBox = false;
    }
}

function changeImageSlider1() {
    $(".container__slider-img").src = "./assets/image/file (1).png";
    $(".container__slider-img").classList.toggle("translateY");
}
function changeImageSlider2() {
    $(".container__slider-img").src = "./assets/image/file.png";
    $(".container__slider-img").classList.toggle("translateX");
}

var isImage1 = true;
setInterval(() => {
    if (isImage1) {
        $(".container__slider-img").src = "./assets/image/file (1).png";
        $(".container__slider-img").classList.toggle("translateX");
        $(".container__slider-img").classList.remove("translateY");
        isImage1 = false;
    }else {
        $(".container__slider-img").src = "./assets/image/file.png";
        $(".container__slider-img").classList.toggle("translateY");
        $(".container__slider-img").classList.remove("translateX");
        isImage1 = true;
    }
}, 3000);