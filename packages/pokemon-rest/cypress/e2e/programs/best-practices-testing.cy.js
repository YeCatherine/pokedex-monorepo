/// <reference types="cypress" />

describe('Visual regression testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3002/')
  })

  it('Pa11y checker', () => {
    cy.wait(3000)
    cy.pa11y()
  })

  it('Lighthouse checker', () => {
    cy.wait(3000)
    cy.lighthouse()
  })
})
