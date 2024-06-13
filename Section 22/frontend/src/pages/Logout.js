import { redirect } from "react-router";

export function action() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration')
    return redirect('/')
}