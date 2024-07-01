/// <reference types="Cypress" /> 
describe('MyTest3', () => {
    it('Next Steps2', () => {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     // To open a new tab or window
     cy.get('[id="opentab"]').invoke('removeAttr','target').click()
     cy.origin("https://www.qaclickacademy.com/",() =>{
     cy.get('[href="https://www.qaclickacademy.com/blog"]').click()
     cy.get('.has-x-large-font-size').should('contain','Got any book recommendations?')
     }
    )
    })
  })