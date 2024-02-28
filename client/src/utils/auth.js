import decode from 'jwt-decode';

class AuthClient {
    getUser() {
        return decode(this.getToken());
    }
    checkLogin(){
        const token = this.getToken();
        return token && !this.checkExpired(token) ? true : false;
    }
    checkExpired(token){
        const decodedToken = decode(token);
        if (decodedToken.exp < Date.now() / 1000){
            localStorage.removeItem('id_token');
            return true;
        }
        return false;
    }
    getToken(){
        return localStorage.getItem('id_token');
    }
    login(id_token){
        localStorage.setItem('id_token', id_token);
        window.location.assign('/');
    }
    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
      }
}

export default new AuthClient();