(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const itemsMenu = document.querySelectorAll('.nav__links');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    })

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    })

    for (let i = 0; i < itemsMenu.length; i++) {
        itemsMenu[i].addEventListener("click", () => {
            menu.classList.remove('nav__link--show')
        });
    }
})();