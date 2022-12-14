///<reference types="Cypress" />
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import {homePage} from '../pages/HomePage';
import {searchResultsPage} from '../pages/SearchResultsPage';

Given("User is on ebay home page", function () {
   cy.visit(Cypress.env('url'));   
});

When(/^User search "([^"]*)"$/, function (product) {
  homePage.searchProduct(product)  
});

Then(/^Verify the item listed contains "([^"]*)"$/, function (product) {
  searchResultsPage.verifyProductInSearchResults(product)  
});