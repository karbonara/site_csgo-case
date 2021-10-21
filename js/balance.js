const balanceModal = document.querySelector('.balance');
const buttonBalance = document.querySelector('.button-balance');
const buttonBalanceClose = document.querySelector('.balance-close');
buttonBalance.onclick = function () {
    balanceModal.classList.add('balance-show')
};
buttonBalanceClose.onclick = function () {
    balanceModal.classList.remove('balance-show')
}
