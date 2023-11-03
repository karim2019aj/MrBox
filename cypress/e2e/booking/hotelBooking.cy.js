const { default: Search } = require("../../helpers/actions/search");
const { default: Login } = require("../../helpers/actions/login");
import hotelsSelectors from '../../helpers/selectors/searchResults';
import homeSelector from '../../helpers/selectors/home';
import roomsSelectors from '../../helpers/selectors/roomsResults';
import moment from 'moment';
import optionsPageSelecor from '../../helpers/selectors/options';

const bookingData = {
    destination: 'Marilia, State of São Paulo, Brazil',
    checkInDate: moment().format('DD/MM/YYYY'),
    checkOutDate: moment().add(3, 'days').format('DD/MM/YYYY'),
    adultsNum: 2,
    option: 'ERYCHK'
}


context('Customer Booking with Option - Test Suit', () => {
    it('TR000 Should Book a Specific hotel with one Option', function () {
        Search.searchByHotel(bookingData);
        cy.get(homeSelector.homeSearchBtn).click();
        cy.get(hotelsSelectors.hotelsList).should('have.length.at.least', 1);
        cy.get(hotelsSelectors.hotelsList).children().first().within(() => {
            cy.get(hotelsSelectors.seeRoomsHotelBtn).should('be.visible').click();
        });
        cy.get(roomsSelectors.selectedRoomTitle).should('be.visible');
        cy.get(roomsSelectors.roomStandardOffers).eq(1).click({ force: true });
        // vlidate btn
        cy.get(roomsSelectors.recapValidateBtn).click();
        // continue with public price
        cy.get(roomsSelectors.continuePbPrice).click();
        // should be visible
        cy.get(optionsPageSelecor.optionsList).should('be.visible');
        cy.get(optionsPageSelecor.selectOption(bookingData.option)).within(() => {
            cy.get(optionsPageSelecor.optionCheckbox).click();
        })
        cy.get(optionsPageSelecor.recapConfirm).click();
        cy.wait(10000);
        cy.contains('Early Check In');

    })
})