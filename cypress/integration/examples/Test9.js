/// <reference types="Cypress" /> 
describe('MyTest6', () => {
    it('Next Steps6', () => {
// My way of solving        
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    cy.get('div.react-date-picker__wrapper [class="react-date-picker__calendar-button__icon react-date-picker__button__icon"]').click()
    cy.get('div.react-calendar span[class="react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from"]').click()
    cy.get('div.react-calendar__viewContainer > :nth-child(1)').contains('May').click()
    cy.get('div.react-calendar__month-view__days').contains('16').click()
})
    it('Next Steps7', () => {
// Learned way
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    const year='2027', month ='May', date='16';
    cy.get('.react-date-picker__inputGroup').click()
    cy.get('.react-calendar__navigation__label').click()
    cy.get('.react-calendar__navigation__label').click()
    cy.contains('button',year).click()
    cy.contains(month).click()
    cy.contains(date).click()

    })
it('Next Steps77', () => {
    // Shortcut way
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('.react-date-picker__inputGroup').click().get('.react-calendar__navigation__label').click().get('.react-calendar__navigation__label').click().get('.react-calendar__decade-view__years > :nth-child(5)').click().get('.react-calendar__year-view__months > :nth-child(5)').click().get('div.react-calendar__month-view__days').contains('16').click()
    })
})