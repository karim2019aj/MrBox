import homeSelector from "../selectors/home";

export class Search {

    static searchByHotel = (data) => {
        cy.get(homeSelector.searchDestination).clear().type(data.destination, { delay: 100 });
        cy.wait(1000);
        cy.get(homeSelector.destinationSuggest)
            .children()
            .first()
            .should('contain', 'Marília')
            .and('contain', 'State of São Paulo')
            .and('contain', 'Brazil')
            .click();
        cy.get(homeSelector.searchDateIn).clear().type(data.checkInDate + `{enter}`);
        cy.wait(500);
        cy.get(homeSelector.searchDateOut).clear().type(data.checkOutDate + '{enter}');
        cy.get(homeSelector.fakeInput).click();
        cy.get(homeSelector.roomsNumberPopUp).within(() => {
            cy.wait(500);
            for (let i = 1; i < data.adultsNum; i++) {
                cy.get(homeSelector.incrementRoomAdultNumber).click();
            }
        });
    };
}
export default Search;
