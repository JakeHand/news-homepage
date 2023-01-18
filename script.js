const nav = document.getElementById('nav');
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

const open = function() {
    nav.style.right = '0';
}

const close = function() {
    nav.style.right = '-100%';
}

openMenu.addEventListener('click', open);
closeMenu.addEventListener('click', close);