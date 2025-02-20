describe("Fluxo de Checkout", () => {
  before(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
  });

  it("Deve adicionar um produto ao carrinho e concluir a compra ", () => {
    cy.visit("/");
    cy.adicionarProduto('Teste')
  });
});
