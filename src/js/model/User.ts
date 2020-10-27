export default class User {
    constructor(
        public name = '<user>',
        public balance: number = 0,
        public actualDate?: number) {
    }

    getDateDiscard() {
        if (!this.actualDate) {
            this.actualDate = Date.now();
        }

        return new Date(this.actualDate).toLocaleDateString();
    }
}