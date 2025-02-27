describe("Fluxo de Checkout", () => {
  beforeEach(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
    cy.visit('/')
    cy.criarContaDinamica();
  });

  it("Deve interceptar e validar a adição de um item no carrinho", () => {
    cy.intercept("GET", "**/public/getCart?userId=*", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          success: true,
          message: "Item adicionado com sucesso",
        },
      });
    }).as("getCarrinho");

    cy.visit("/");
    cy.adicionarProduto("Teste");
    cy.wait("@getCarrinho").its("response.statusCode").should("eq", 200);
  });

  it("Deve intercerpectar e valitar uma remoção de um item no carrinho", () => {
    cy.intercept("PUT", "**/public/updateCart/*", (req) => {
      req.reply({
        statusCode: 200,
        body: {
          sucess: true,
          message: "Item removido com sucesso",
        },
      });
    }).as("putCarrinho");

    cy.visit("/");
    cy.adicionarProduto("Teste");
  });
});
