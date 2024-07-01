/// <reference types="Cypress" /> 
describe('MY test',()=>
    { 
        beforeEach(function(){
        // execute this task every time before executing a TC
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.fixture('example').then(function(data){
          this.data=data
        })
    })
        it('1st Test Case',function(){
          // Write the name & gender retrived from data file
          cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
          cy.get('select').select(this.data.gender)
        })
        it('2nd Test Case',function(){ 
          // Check if the name input is same on the binding box
          cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
          cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        })
        it('3rd Test Case',()=>{ 
          // Check if the name input field can take minimum 2 characters
          cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        })
        it('4th Test Case',()=>{ 
          // Check if Enterpreneur radio button disabled
          cy.get('#inlineRadio3').should('be.disabled')
        })
    })  