// Use import keyword
/// <reference types="Cypress" /> 
import HomePage from '../../PageObjects/HomePage'
import ProductPage from "../../PageObjects/ProductPage"
import PurchasePage from '../../PageObjects/PurchasePage'
describe('MY testSuit0',()=>
    { 
        beforeEach(function(){
        // execute this task every time before executing a TC
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        this.homePage = new HomePage()
        this.productPage = new ProductPage()
        this.purchasePage = new PurchasePage()
        cy.fixture('example').then(function(data){
          this.data=data
        })
        })
        it('1st Test Case',function(){ 
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
        it('2nd Test Case',function(){ 
            //Select products, Add to cart multiple times, checkout & purchase
            let count=0
            this.productPage.getProductName().each(($e1, index, $list) => {
            const text=$e1.text()
            cy.log(text)
            if(text.includes('Blackberry'))
           {
            for(count=0;count<7;count++){
            this.productPage.getAddtoCartButton().eq(index).click()
           }
        }
        if(text.includes('iphone X'))
            {
             for(count=0;count<5;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
         }
         if(text.includes('Samsung Note 8'))
            {
             for(count=0;count<3;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
         }
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
          it('3rd Test Case',function(){ 
            //Select products, Add to cart multiple times, checkout, check quantity & purchase
            let count=0
            this.productPage.getProductName().each(($e1, index, $list) => {
            const text=$e1.text()
            cy.log(text)
            if(text.includes('Blackberry'))
           {
            for(count=0;count<7;count++){
            this.productPage.getAddtoCartButton().eq(index).click()
           }
        }        
        if(text.includes('iphone X'))
            {
             for(count=0;count<5;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
         }
         if(text.includes('Samsung Note 8'))
            {
             for(count=0;count<3;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
         }
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
          it('4th Test Case',function(){ 
            //Select products, Add to cart multiple times, checkout, check unit price & purchase
            let count=0
            this.productPage.getProductName().each(($e1, index, $list) => {
            const text=$e1.text()
            cy.log(text)
            if(text.includes('Blackberry'))
           {
            for(count=0;count<7;count++){
            this.productPage.getAddtoCartButton().eq(index).click()
           }
        }        
        if(text.includes('iphone X'))
            {
             for(count=0;count<5;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
         }
         if(text.includes('Samsung Note 8'))
            {
             for(count=0;count<3;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
         }
        })
          this.productPage.getCheckOut().click()
          this.productPage.getPriceButton().each(($e1, index, $list) => {
            let text1=$e1.text()
            this.productPage.getCartProductName().each(($e1, index, $list) => {
               let text=$e1.text()
               if(text.includes('Blackberry'))
              {
               this.productPage.getPriceButton().eq(index).contains("₹. 50000")
               cy.log("Test Passed")
              }
              if(text.includes('iphone X'))
               {
                cy.log("value is"+text1)
                this.productPage.getPriceButton().eq(index).contains("₹. 100000")
                cy.log("Test Passed")
               }
               if(text.includes('Samsung Note 8'))
                  {
                   cy.log("value is"+text1)
                   this.productPage.getPriceButton().eq(index).contains("₹. 85000")
                   cy.log("Test Passed")
                  }
           })        
            
        })
          this.productPage.getProceedCheckout()
          this.purchasePage.getCountryBox().type('an')
          cy.wait(7000)
          this.purchasePage.getClickSuggestion().contains('Bangladesh').click()
          this.purchasePage.getCheckbox().click()
          this.purchasePage.getPurchaseButton().click()
          this.purchasePage.getMessage().should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
          })  
          it('5th Test Case',function(){ 
            //Select products, Add to cart multiple times, checkout, check individual price & purchase
            let count=0
            this.productPage.getProductName().each(($e1, index, $list) => {
            const text=$e1.text()
            cy.log(text)
            if(text.includes('Blackberry'))
           {
            for(count=0;count<7;count++){
            this.productPage.getAddtoCartButton().eq(index).click()
           }
        }        
        if(text.includes('iphone X'))
            {
             for(count=0;count<5;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
         }
         if(text.includes('Samsung Note 8'))
            {
             for(count=0;count<3;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
         }
        })
          this.productPage.getCheckOut().click()
          this.productPage.getPriceButton().each(($e1, index, $list) => {
            let text1=$e1.text()
            this.productPage.getCartProductName().each(($e1, index, $list) => {
               let text=$e1.text()
               if(text.includes('Blackberry'))
              {
               this.productPage.getPriceButton().eq(index).contains("₹. 50000")
               cy.log("Test Passed")
              }
              if(text.includes('iphone X'))
               {
                this.productPage.getPriceButton().eq(index).contains("₹. 100000")
                cy.log("Test Passed")
               }
               if(text.includes('Samsung Note 8'))
                  {
                   cy.log("value is"+text1)
                   this.productPage.getPriceButton().eq(index).contains("₹. 85000")
                   cy.log("Test Passed")
                  }
           })        
            
        })
          this.productPage.getProceedCheckout()
          this.purchasePage.getCountryBox().type('an')
          cy.wait(7000)
          this.purchasePage.getClickSuggestion().contains('Bangladesh').click()
          this.purchasePage.getCheckbox().click()
          this.purchasePage.getPurchaseButton().click()
          this.purchasePage.getMessage().should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
          })
          it('6th Test Case',function(){ 
            //Select products, Add to cart multiple times, checkout, check individual total price & purchase
            let count=0, BlackberryPrice=0, iphoneXPrice=0, samsungNote8Price=0
            this.productPage.getProductName().each(($e1, index, $list) => {
            const text=$e1.text()
            cy.log(text)
            if(text.includes('Blackberry'))
           {
            for(count=0;count<7;count++){
            this.productPage.getAddtoCartButton().eq(index).click()
           }
           BlackberryPrice= count* 50000
            cy.log(BlackberryPrice)
        }        
        if(text.includes('iphone X'))
            {
             for(count=0;count<5;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
            iphoneXPrice= count* 100000
            cy.log(iphoneXPrice)
         }
         if(text.includes('Samsung Note 8'))
            {
             for(count=0;count<3;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
            samsungNote8Price= count* 85000
            cy.log(samsungNote8Price)
         }
        })
          this.productPage.getCheckOut().click()
          this.productPage.getTotalButton().each(($e1, index, $list) => {
            let text1=$e1.text()
            this.productPage.getCartProductName().each(($e1, index, $list) => {
               let text=$e1.text()
               if(text.includes('Blackberry'))
              {
               let BlackberryToalPrice = "₹. "+BlackberryPrice
               if(text1=BlackberryToalPrice){
                  cy.log("BlackberryToalPrice Test Passed")
               }
              }
              if(text.includes('iphone X'))
               {
                  let iphoneXToalPrice = "₹. "+iphoneXPrice
                  if(text1=iphoneXToalPrice){
                     cy.log("iphoneXTotalPrice Test Passed")
                  }
               }
               if(text.includes('Samsung Note 8'))
                  {
                     let samsungNote8ToalPrice = "₹. "+samsungNote8Price
                     if(text1=samsungNote8ToalPrice){
                        cy.log("samsunNote8Price Test Passed")
                     }
                  }
           }) 
        })
          this.productPage.getProceedCheckout()
          this.purchasePage.getCountryBox().type('an')
          cy.wait(7000)
          this.purchasePage.getClickSuggestion().contains('Bangladesh').click()
          this.purchasePage.getCheckbox().click()
          this.purchasePage.getPurchaseButton().click()
          this.purchasePage.getMessage().should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
          })
          it('7th Test Case',function(){ 
            //Select products, Add to cart multiple times, checkout, check grand total price & purchase
            let count=0, BlackberryPrice=0, iphoneXPrice=0, samsungNote8Price=0, grandTotal=0
            this.productPage.getProductName().each(($e1, index, $list) => {
            const text=$e1.text()
            cy.log(text)
            if(text.includes('Blackberry'))
           {
            for(count=0;count<7;count++){
            this.productPage.getAddtoCartButton().eq(index).click()
           }
           BlackberryPrice= count* 50000
            cy.log(BlackberryPrice)
        }        
        if(text.includes('iphone X'))
            {
             for(count=0;count<5;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
            iphoneXPrice= count* 100000
            cy.log(iphoneXPrice)
         }
         if(text.includes('Samsung Note 8'))
            {
             for(count=0;count<3;count++){
             this.productPage.getAddtoCartButton().eq(index).click()
            }
            samsungNote8Price= count* 85000
            cy.log(samsungNote8Price)
         }
         grandTotal= BlackberryPrice+iphoneXPrice+samsungNote8Price
         cy.log("granTotal:"+grandTotal)
        })
        this.productPage.getCheckOut().click()
          let text= cy.log(this.productPage.getGrandTotalButton())
          let grandTotalPrice= "₹. "+grandTotal
          if(text=grandTotalPrice){
            cy.log("GrandTotalTest Passed")
          }
          //this.productPage.getCheckOut().click()
          this.productPage.getProceedCheckout()
          this.purchasePage.getCountryBox().type('an')
          cy.wait(7000)
          this.purchasePage.getClickSuggestion().contains('Bangladesh').click()
          this.purchasePage.getCheckbox().click()
          this.purchasePage.getPurchaseButton().click()
          this.purchasePage.getMessage().should('contain.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
          })            
            })