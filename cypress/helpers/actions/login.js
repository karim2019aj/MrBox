import loginPageSelecor from "../selectors/login";


export class Login {


    static setInfoLogin = (data) => {
        cy.get(loginPageSelecor.userName, { timeout: 10000 }).type(data.userName, { delay: 500 });
        cy.get(loginPageSelecor.userPassword, { timeout: 10000 }).type(data.userPassword, { delay: 500 });
        cy.get(loginPageSelecor.submitBtn).click();
    };


}

export default Login;
