/// <reference types="Cypress" />
export class HomePage {

  getSearchItem() {return cy.get('input.gh-tb.ui-autocomplete-input'); }
  getSearchButton() {return cy.get('input#gh-btn.btn.btn-prim.gh-spr'); }
    
  //search the product in the eBay Site 
  searchProduct(product) {
    this.getSearchItem().type(product).should('have.value',product);
    this.getSearchButton().click();   
  }

}
export const homePage = new HomePage();