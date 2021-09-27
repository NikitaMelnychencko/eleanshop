const refs = {
    plusLink: document.querySelector('.footer__mobile-list-item-plus'),
    minusLink: document.querySelector('.footer__mobile-icon-menu-close'),

}

refs.plusLink.addEventListener('click', onClickPlusLink);

function onClickPlusLink(evt) {
    evt.preventDefault();
    console.log('Работает');
    if (this.querySelector('.footer__mobile-list-dropdown')) {
        this.classList.toggle('.js-dropdown');
    }
}
