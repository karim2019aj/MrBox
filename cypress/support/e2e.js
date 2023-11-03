
import './commands'

Cypress.on('uncaught:exception', () => {
  return false;
});

beforeEach(() => {
  cy.visit('/usa/index.en.shtml');
  cy.clearCookies()
  cy.log(' ⚒️ Init test scenario .. ⚒️ ');
  cy.initTests();
});
