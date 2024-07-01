/// <reference types="Cypress" /> 
describe('MyTest5', () => {
    it('Next Steps5', () => {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#opentab').then(function(el){
      const url= el.prop('href')
      cy.visit(url)
      cy.origin(url,()=>
        {
       cy.get('.navbar-nav > :nth-child(4) > a').click()
     })
    })
  })
})