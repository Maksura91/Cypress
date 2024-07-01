// Use import keyword
/// <reference types="Cypress" /> 
import HomePage from '../../PageObjects/HomePage'
import ProductPage from "../../PageObjects/ProductPage"
import PurchasePage from '../../PageObjects/PurchasePage'
describe('MY test',()=>
    { 
        beforeEach(function(){
        // execute this task every time before executing a TC
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        this.homePage = new HomePage()
        this.productPage = new ProductPage()
        this.purchasePage = new PurchasePage()
        cy.fixture('example').then(function(data){
          this.data=data
        })
        })
        it('1st Test Case',function(){
          // Write the name & gender retrived from data file          
          this.homePage.getNameEditBox().type(this.data.name)
          this.homePage.getGender().select(this.data.gender)
        })
        it('2nd Test Case',function(){ 
          // Check if the name input is same on the binding box
          this.homePage.getNameEditBox().type(this.data.name)
          this.homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        })
        it('3rd Test Case',function(){ 
          // Check if the name input field can take minimum 2 characters
          this.homePage.getNameEditBox().should('have.attr','minlength','2')
        })
        it('4th Test Case',function(){ 
          // Check if Enterpreneur radio button disabled
          this.homePage.getEnterpreneaurRadioButton().should('be.disabled')
        })
        it('5th Test Case',function(){ 
          //Select products, Add to cart & checkout
            this.homePage.getShopTabOpen().click()
            this.data.productName.forEach((element) =>{ 
            cy.selectProduct(element)
        })
        this.productPage.getCheckOut().click()
          })
          it('6th Test Case',function(){ 
            //Select products, Add to cart, checkout & purchase
              this.homePage.getShopTabOpen().click()
              this.data.productName.forEach((element) =>{ 
              cy.selectProduct(element)
          })
          this.productPage.getCheckOut().click()
          this.productPage.getProceedCheckout()
          this.purchasePage.getCountryBox().type('an')
          cy.wait(7000)
          this.purchasePage.getClickSuggestion().contains('Bangladesh').click()
          this.purchasePage.getCheckbox().click()
          this.purchasePage.getPurchaseButton().click()
          this.purchasePage.getMessage().should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
          })  
            })