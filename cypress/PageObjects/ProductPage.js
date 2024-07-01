class ProductPage{
    getAddtoCartButton(){
        return cy.get('button.btn.btn-info')
    }
    getProductName(){
        return cy.get('h4.card-title') 
    }
    getSelectProductName(){
        return cy.get('.card > .card-body > .card-title > a')
    }
    getProceedCheckout(){
        return cy.get(':nth-child(5) > .btn').contains('Checkout').click()
    }  
    getCartProductName(){
        return cy.get('.col-sm-8 > .media > .media-body > h4.media-heading > a')
    }
    getCheckOut(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }
    getRemoveButton(){
        return cy.get(':nth-child(5) > .btn').contains('Remove').click()
    }
    getContinueShoppingButton(){
        return cy.get(':nth-child(4) > .btn')
    }
    getQuantityButton(){
        return cy.get('[style="text-align: center"] > #exampleInputEmail1')
    }
    getPriceButton(){
        return cy.get(':nth-child(3) > strong')
    }
    getTotalButton(){
        return cy.get(':nth-child(4) > strong')
    }
    getGrandTotalButton(){
        //return cy.get(':nth-child(4) > h3')
        //return cy.get('.text-right > h3')
        return cy.get('h3 > strong')
    }
    }
export default ProductPage