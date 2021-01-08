export default class RegUser {
    constructor(
        public login = '',
        public name = '',
        public phone = '',
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

    setPhone(phone: string): void {
        this.phone = phone;
    }
}