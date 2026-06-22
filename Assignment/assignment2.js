function createUserSession(userName) {
    let login = false;
    return {
        login : function () {
            login = true;
        },
        logout : function () {
            logout = false;
        },
        isLoggedIn : function () {
            return login;
        }
    };
}
let Anushka = createUserSession("Anushka");
let Xyz = createUserSession("Xyz");
Anushka.login();
Anushka.logout();
// console.log(Anushka.login());
// console.log(Anushka.isLoggedIn());