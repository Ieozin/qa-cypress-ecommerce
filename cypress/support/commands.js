Cypress.Commands.add("adicionarProduto", (nomeProduto) => {
  cy.get('[data-testid="productDetails"]').contains(nomeProduto).click();
  cy.get('[data-testid="addToCart"]').click()
});
