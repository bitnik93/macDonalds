const buyButton = document.querySelector('.menu-list__link');
const modalContainer = document.querySelector('.modal-container');



const opOpenPopup = () => {
modalContainer.classList.remove('display-none');
}


document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
        modalContainer.classList.add('display-none');
    }
});

buyButton.addEventListener('click', opOpenPopup);
