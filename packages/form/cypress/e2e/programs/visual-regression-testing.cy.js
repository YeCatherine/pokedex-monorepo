/// <reference types="cypress" />

describe('Visual regression testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3002/');
  });

  it('Capture Page ', () => {
    cy.wait(3000);
    cy.compareSnapshot('products_page', 0.1);
  });
});
