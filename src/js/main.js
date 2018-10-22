;(function(){
    'use strict';

    var btn = document.getElementById('menuMobile');
    var menu = document.getElementById('navbarNav');
    var menuOpened = false;
console.log(btn);
    btn.addEventListener('click', toggleMenu);

    function toggleMenu(e){
        if(menuOpened) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function closeMenu(){
        menuOpened = false;
        menu.classList.remove('collapse-in');
        menu.classList.add('collapse');
        btn.blur();
        menu.setAttribute('aria-expanded', false);
        btn.setAttribute('aria-expanded', false);
    }

    function openMenu(){
        menuOpened = true;
        menu.classList.remove('collapse');
        menu.classList.add('collapse-in');
        menu.setAttribute('aria-expanded', true);
        btn.setAttribute('aria-expanded', true);
    }
}())