const btnLog = document.querySelector('#login-btn');
const openBlock = document.querySelector('#login-block');
btnLog.onclick = () => {
    openBlock.classList.toggle('login-block-open');
}