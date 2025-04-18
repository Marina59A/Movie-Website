import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./userService";

export function userRegister(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function userLogin(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function userLogout() {
    return signOut(auth)
}