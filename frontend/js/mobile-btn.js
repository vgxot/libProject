const menu = document.querySelector('#top-menu');
const menuBlock = document.querySelector('#top-menu-block');
const btn = document.querySelector('#top-btn');
const btnImg = document.querySelector('#top-btn-img');
const topMenu = document.querySelector('#top-menu-m');
btn.onclick = () => {
    if (menu.classList.toggle('open')) {
        btnImg.src = "/buttons/menu-close.svg";
    } else {
        btnImg.src = '/buttons/menu-open.svg';
    }
    menuBlock.classList.toggle('open-block');
    topMenu.classList.toggle('none-blur');
}


