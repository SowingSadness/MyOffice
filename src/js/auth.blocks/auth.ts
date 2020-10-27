import * as Cookie from '../cookie';
import User from "../model/User"

let authUser: User;

export function get(): User | undefined {
    if (authUser) {
        return authUser;
    }

    const name = Cookie.get('auth.name');
    const balance = Number(Cookie.get('auth.balance'));
    const actualDate = Number(Cookie.get('auth.actualDate'));
    if (!name) {
        return undefined;
    }

    authUser = new User(name, balance, actualDate);
    return authUser;
}

export function set(user: User) {
    if (!(user instanceof User)) {
        throw new Error("value must be instanceof User!");
    }
    authUser = user;
    Cookie.setObject({
        "auth.name": user.name,
        "auth.balance": user.balance,
        "auth.actualDate": user.actualDate,
    });
}

export function logout() {
    document.cookie = 'auth.name=; Max-Age=0; expires=0;';
    document.cookie = 'auth.balance=; Max-Age=0; expires=0;';
    document.cookie = 'auth.actualDate=; Max-Age=0; expires=0;';
}