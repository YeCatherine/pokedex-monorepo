/**
 * Check accessibility of the pages.
 */
describe('Visuals', () => {
  it('Best Practices check', () => {
    cy.visit('http://localhost:3030/');
    cy.wait(3000);
    cy.lighthouse(
      {
        performance: 60,
        accessibility: 70,
        seo: 70,
      },
      {
        formFactor: 'desktop',
        screenEmulation: {
          mobile: false,
          disable: false,
          width: Cypress.config('viewportWidth'),
          height: Cypress.config('viewportHeight'),
          deviceScaleRatio: 1,
        },
      }
    );
  });

  it('HomePage', () => {
    cy.visit('http://localhost:3030/');
    cy.wait(3000);
    cy.get('.checkbox-rect label').contains('Show as list');

    cy.compareSnapshot('home-page-grid', 0.1);
  });

  it('HomePage grid view', () => {
    cy.visit('http://localhost:3030/');
    cy.wait(1000);
    cy.get('.checkbox-rect label').click();
    cy.wait(1000);
    cy.get('.checkbox-rect label').contains('Show as an awesome grid');
    cy.compareSnapshot('home-page-list', 0.1);
  });

  after(() => {
    cy.task('generateReport');
  });
});
