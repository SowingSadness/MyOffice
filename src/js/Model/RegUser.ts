export default class RegUser {
    constructor(
        public login = '',
        public name = '',
        public email = '') {
    }

    setLogin(login: string): void {
        this.login = login;
    }

    setName(name: string): void {
        this.name = name;
    }

    setEmail(email: string): void {
        this.email = email;
    }
}