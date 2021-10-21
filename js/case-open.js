const button = document.querySelector('.btn-win');
const popup = document.querySelector('.case__win');
const open = document.querySelector('.open-case');
const buttonWin = document.querySelector('.case__win-open-btn-open');

button.addEventListener('click', function () {
    event.preventDefault();
    popup.classList.add('case__win-show');
    open.classList.add('case__win-show-close');
    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 13) {
            popup.classList.add('case__win-show');
            open.classList.add('case__win-show-close')
        }
    })
});
buttonWin.addEventListener('click', function () {
    event.preventDefault();
    popup.classList.remove('case__win-show');
    open.classList.remove('case__win-show-close')
});
const buttonFast = document.querySelectorAll('.open-case-btn-open-fast');
for (let i = 0; i < buttonFast.length; i++) {
    buttonFast[i].onclick = function () {
        event.preventDefault();
        popup.classList.add('case__win-show');
        open.classList.add('case__win-show-close');
        document.addEventListener('keydown', function (evt) {
            if (evt.keyCode === 70) {
                popup.classList.add('case__win-show');
                open.classList.add('case__win-show-close')
            }
        })
    }
}
const btnMobile = document.querySelector('.open-case-btn-open-phone');
btnMobile.onclick = function () {
    event.preventDefault();
    popup.classList.add('case__win-show');
    open.classList.add('case__win-show-close')
};

const counter = document.querySelectorAll('.open-case__counter-item');


for (let i = 0; i < counter.length; i++) {
    counter[i].onclick = function () {
        event.preventDefault();
        counter[i].classList.toggle('active-counter-item')
    }
}

const caseBtn = document.querySelectorAll('.open-case-btn-open-link')
const dropCase = document.querySelector('.your-drop')
const repeatBtn = document.querySelector('.case__win-btn-repeat')

for (let i = 0; i < caseBtn.length; i++) {
    caseBtn[i].addEventListener('click', () => {
        dropCase.classList.add('your-drop-on')
    })
}

repeatBtn.addEventListener('click', () => {
    dropCase.classList.remove('your-drop-on')
})