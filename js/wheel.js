const btn = document.querySelector('.wheel__btn-twist');
const disk = document.querySelector('.disk-img');
const popup = document.querySelector('.wheel__not-available-main');
btn.onclick = function() {
    event.preventDefault();
    disk.classList.add('rotate_disk')
    popup.classList.add('wheel__not-available-main-close');
    btn.classList.add('wheel__twist-main-close')
}