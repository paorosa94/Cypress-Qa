import { auto } from '../../../../support/pages/AutoComplete.Page';

// test suite
describe('challengue Elements',() => {
	//Preconditions
	beforeEach('Visited in autocomplete page',() => {
		cy.visit('/auto-complete');
	});

	// Test case
	it('TC1: should autocomplete values in text input', () => {
		cy.get('#autoCompleteMultipleInput').type('Red{enter}');
		//validar por medio de una array lo que se typeo

		auto.iterarArray().then((values) => {
			cy.log(values);
		});
	});
});