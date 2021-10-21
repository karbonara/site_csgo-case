const btn = document.querySelectorAll('.btn-open');
const btnClose = document.querySelectorAll('.btn-close');
const popup = document.querySelectorAll('.faq-popup-close');
const btnText = document.querySelectorAll('.faq__question-text');

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        popup[i].classList.add('faq-popup');
        btn[i].classList.add('btn-close');
        btnClose[i].classList.remove('btn-close')
    };
    btnText[i].onclick = function() {
        event.preventDefault();
        popup[i].classList.toggle('faq-popup');
        btn[i].classList.toggle('btn-close');
        btnClose[i].classList.toggle('btn-close')
    };
    btnClose[i].onclick = function() {
        popup[i].classList.remove('faq-popup');
        btn[i].classList.remove('btn-close');
        btnClose[i].classList.add('btn-close')
    }
}