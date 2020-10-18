export default class User {
    balance: number = 0;

    constructor(
        public name = '<user>',
        public phone = '+7912345678') {
    }

    getDateDiscard() {
        return '01.01.2021';
    }
}