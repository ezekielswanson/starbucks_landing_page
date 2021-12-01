const btn = document.getElementById("menu-btn");
const hiddenBtn = document.getElementById('menu');

function menuToggle() {

    btn.classList.toggle('open');
    hiddenBtn.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
    
}

btn.addEventListener('click', menuToggle)