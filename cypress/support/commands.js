

Cypress.Commands.add('initTests', () => {
    cy.wait(1000);
    cy.get('#onetrust-group-container').then(($el) => {
        if (Cypress.dom.isVisible($el)) {
            cy.get('.onetrust-close-btn-handler > strong').should('be.visible').click();
        }
    })
});