/// <reference types="Cypress" /> 
describe('MyTest1', () => {
    it('Next Steps', () => {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     // CheckBox
     cy.get('#checkBoxOption1').check().should('be.checked')
     //Static Dropdown
     cy.get('select').select('option2').should('have.value','option2')
     // Dynamic DropDown
     cy.get('input[id="autocomplete"]').type('Ind')
     cy.get('.ui-menu-item').each(($el, index, $list) => {
      if($el.text()=="Indonesia"){
        cy.wrap($el).click()
      }
    })
    //Hide & display options
    cy.get('input#displayed-text').should('be.visible')
    cy.get('input#hide-textbox').click()
    cy.get('input#displayed-text').should('not.be.visible')
    cy.get('input#show-textbox').click()
    cy.get('input#displayed-text').should('be.visible')
    // Radio Button  
    cy.get('[value="radio3"]').check().should('be.checked')
    })
  })
  
