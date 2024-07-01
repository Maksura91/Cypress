/// <reference types="Cypress" /> 
describe('MyTest2', () => {
    it('Next Steps1', () => {
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('input[value="Alert"]').click()
     cy.get('input[value="Confirm"]').click()
     cy.on('window:alert',(str)=>{
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
     }
    )
    cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
     }
    )
    })
  })