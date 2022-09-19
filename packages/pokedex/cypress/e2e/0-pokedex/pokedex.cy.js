/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pokedex");
  });

  // https://on.cypress.io/interacting-with-elements

  it("Check pokemon base functionality", () => {
    // https://on.cypress.io/type
    cy.get(".pokemon-search-name").type("Bulbasaur").should("have.value", "Bulbasaur");

    //cy.get('.pokemon-card-list').contains('Bulbasaur')
    cy.get(".pokemon-card-list .pokemon-card").first().click();
    cy.url().should("contain", "bulbasaur");
  });
});
