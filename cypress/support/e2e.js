Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("First argument must be a string")) {
    console.warn("⚠️ Erro da aplicação ignorado pelo Cypress:", err.message);
    return false;
  }

  return true;
});
