/// <reference types="Cypress" /> 
describe('MyTest1', () => {
    it('Next Steps', () => {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     //Check Box 
     cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
     cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
     cy.get('input[type="checkbox"]').check().should('be.checked')
     cy.get('input[type="checkbox"]').uncheck()
     cy.get('input[type="checkbox"]').check(['option1','option2']).should('be.checked')
    //DropDown
     cy.get('select[id="dropdown-class-example"]').select('option1').should('have.value','option1')
    })
  })