export default class Popup {
    constructor(container, closeButton) {
        this.container = container;
        this.closeButton = closeButton;
        this._setEventListeners();
    }
    open() {
        this.container.classList.add('modal_is-opened')
    }
    close() {
        this.container.classList.remove('modal_is-opened')
    }
    _setEventListeners() {
        this.closeButton.addEventListener('click', () => {
            this.close();
        });

    }
}