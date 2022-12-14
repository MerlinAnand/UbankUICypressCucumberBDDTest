/// <reference types="Cypress" />

class SearchResultsPage {
    
  verifyProductInSearchResults(product) {
    cy.findByText(product);
  }
}
export const searchResultsPage = new SearchResultsPage();
