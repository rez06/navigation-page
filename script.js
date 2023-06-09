const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav() {
    //Toggle: Menu Bars Open/CLosed
    menuBars.classList.toggle('change');
    //toggle: Menu active
    overlay.classList.toggle('overlay-active');
    console.log('click');
    if (overlay.classList.contains('overlay-active')) {
        //Animate In - Overlay
        overlay.classList.remove('overlay-slide-left');
        overlay.classList.add('overlay-slide-right');

    } else {
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
    }
}

// event listener
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);