/// <reference types="Cypress" /> 
describe('My 2nd Test', () => {
    it('Next Step', () => {
     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
     cy.get('.brand').then(function(logo)
     {
       cy.log(logo.text())
     })
    })
  })
