import SignupPage from "../pages/signupPage";
import { faker } from "@faker-js/faker";

Cypress.Commands.add("adicionarProduto", (nomeProduto) => {
  cy.get('[data-testid="productDetails"]').contains(nomeProduto).click();
  cy.get('[data-testid="addToCart"]').click();
});

Cypress.Commands.add("criarContaDinamica", () => {
  const signupPage = new SignupPage();

  const nome = faker.name.firstName();
  const sobreNome = faker.name.lastName();
  const numero = faker.phone.number("###########");
  const email = faker.internet.email(nome, sobreNome);
  const senha = faker.internet.password();

  signupPage.paginaCadastro("Account");

  signupPage.PreencherDados({
    nome: nome,
    sobreNome: sobreNome,
    numero: numero,
    email: email,
    senha: senha,
    senha1: senha,
  });

  signupPage.criarConta();
  cy.get('[data-testid="CustomerName"]').should("contain", nome);
});
