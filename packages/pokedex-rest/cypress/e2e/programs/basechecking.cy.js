/// <reference types="cypress" />

describe('Table Base operations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3002/');
  });

  it('check', () => {
    cy.get(':nth-child(1) > .MuiCheckbox-root > .PrivateSwitchBase-input').click();
    cy.wait(3000);
    cy.contains('.programs-datagrid', 'Active').should('be.visible');
    cy.contains('1–4 of 4');
  });

  it('fill and check text', () => {
    cy.get('#outlined-basic').type('DIA');
    cy.wait(3000);
    cy.contains('.programs-datagrid', 'DIA');
  });
});
