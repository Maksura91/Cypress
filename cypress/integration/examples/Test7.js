/// <reference types="Cypress" /> 
describe('MyTest3', () => {
    it('Next Steps2', () => {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('.mouse-hover-content').invoke('show')// you have to click on the hidden element so give its css locator
     cy.contains('Top').click()
     cy.url().should('include','top')
     cy.contains('Reload').click({force: true})// you can use that without hovering
     cy.url().should('include','AutomationPractice')

    })
  })