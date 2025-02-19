class SignupPage {
  paginaCadastro(menu) {
    cy.get(`[href="/Tab/${menu}"]`).click();
    cy.get('[data-testid="signUp"]').click();
  }

  PreencherDados({ nome, sobreNome, numero, email, senha, senha1 }) {
    cy.get('[data-testid="firstName"]').type(nome);
    cy.get('[data-testid="lastName"]').type(sobreNome);
    cy.get('[data-testid="phone"]').type(numero);
    cy.get('[data-testid="email"]').eq(1).type(email);
    cy.get('[data-testid="password"]').eq(1).type(senha);
    cy.get('[data-testid="repassword"]').type(senha1);
  }

  criarConta() {
    cy.get('[data-testid="create"]').click();
  }

  confirmarConta(menu) {
    return cy.get(`[href="/Tab/${menu}"]`).click();
  }  
}

export default SignupPage;
