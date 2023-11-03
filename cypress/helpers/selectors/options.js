export const optionsPageSelecor = {
    optionsList: '#options-list-0',
    selectOption: (option) => `[id="room0-${option}"]`,
    getOptionTitle: (option) => `[id="header--${option}--0]`,
    optionImg: '.card-option-img',
    optionCheckbox: '[class="checkbox card-option__checkbox"]',
    optionPrice: '[class="card-option__price"]',
    recapConfirm: '.validation-button'
}
export default optionsPageSelecor;