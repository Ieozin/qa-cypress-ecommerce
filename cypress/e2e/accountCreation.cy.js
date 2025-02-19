import SignupPage from "../pages/signupPage";
import { faker } from "@faker-js/faker";

describe("Fluxo de Criação de Conta", () => {
  const signupPage = new SignupPage();
  before(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
  });

  it("Deve criar uma conta com sucesso", () => {
    cy.visit("/");
    signupPage.paginaCadastro("Account");

    const nome = faker.name.firstName();
    const sobreNome = faker.name.lastName();
    const numero = faker.phone.number("###########");
    const email = faker.internet.email(nome, sobreNome);
    const senha = faker.internet.password();

    signupPage.PreencherDados({
      nome: nome,
      sobreNome: sobreNome,
      numero: numero,
      email: email,
      senha: senha,
      senha1: senha,
    });
    signupPage.criarConta();
  });
});
