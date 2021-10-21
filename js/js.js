document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 147) {
            document.querySelector('.header-menu').classList.add("fixed");
        } else {
            document.querySelector('.header-menu').classList.remove("fixed");
        }
    });
});
function showNoteSublist() {
    event.currentTarget.classList.toggle('toggle');
    event.currentTarget.parentNode.querySelector('.notification-sublist').classList.toggle('toggle');
}
function toggleMenu() {
    event.currentTarget.classList.toggle('active');
    document.querySelector('.header-menu .wrapper .flex .inner').classList.toggle('toggle');
}
function volumeToggle() {
    event.currentTarget.classList.toggle('toggle');
}

$(document).ready(function () {
    var t = $('.main-slider');
    t.slick({
        fade: true,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: 'linear',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
    t.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var s = t.find('[data-slick-index="' + nextSlide + '"]').attr('data');
        t.slick('setOption', 'autoplaySpeed', s);
    });
});

const exitBtn = document.querySelector('.exit')
const closeBtn = document.querySelector('.authorization__modal-close')
const authorization = document.querySelector('.authorization__bg')
const userMenu = document.querySelector('.header-menu .wrapper .flex .user-profile-menu')
const userLogin = document.querySelector('.header-menu .wrapper .flex .user-login-pf')
const linkBtn = document.querySelector('.link')
const authorizationBtn = document.querySelectorAll('.authorization__btn')

exitBtn.addEventListener('click', () => {
    userMenu.classList.add('user-profile-menu-off')
    userLogin.classList.add('user-login-pf-on')
})

linkBtn.addEventListener('click', () => {
    authorization.classList.add('authorization__bg-on')
})

closeBtn.addEventListener('click', () => {
    authorization.classList.remove('authorization__bg-on')

})

for (let i = 0; i < authorizationBtn.length; i++) {
    authorizationBtn[i].addEventListener('click', () => {
        authorization.classList.remove('authorization__bg-on')
        userMenu.classList.remove('user-profile-menu-off')
        userLogin.classList.remove('user-login-pf-on')
    })
}



