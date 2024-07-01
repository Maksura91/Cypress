/// <reference types="Cypress" /> 
// above line is to activate auto suggestion
describe('My First Test', () => {
    it('Learn Step By Step', () => {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get(".search-keyword").type("me")
      cy.wait(5000)// it would wait for 5sec to execute 
      cy.get('.product:visible').should('have.length',3)
      cy.get('.products').find('.product').should('have.length',3)//Parent child chaining
      cy.get('.products').find('.product').eq(0).contains('ADD TO CART').click() // to get the 2nd product, click on add to cart & add to cart
      cy.get('.products').find('.product').each(($el, index, $list) => {
      const vegName=$el.find('h4.product-name').text()
      if(vegName.includes('Pomegranate')){
        // $el.find('button').click()
        cy.wrap($el).find('button').click()
      }
      })
    })
  })