/* eslint-disable no-undef */
// ***********************************************
// https://on.cypress.io/custom-commands
// ***********************************************
import { SpaceCheckoutPage } from '@pages/SpaceCheckout.Page';
import { SpaceLoginPage } from '@pages/SpaceLogin.Page';
import { SpaceDestinationPage } from '@pages/SpaceProduct.Page';
import { Auto } from '@pages/AutoComplete.Page';
import 'cypress-file-upload';

beforeEach(() => {
	Cypress.on('uncaught:exception', () => false); // returning false here prevents Cypress from failing the test
	cy.intercept({ resourceType: /^(xhr|fetch)$/ }, { statusCode: 200, body: { data: 'fake data' } });
	cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

//* Este es el commando principal para usar los Page Object Models sin necesidad de importarlos en cada archivo de test
Cypress.Commands.add('page', () => {
	const page = {
		spaceLoginPage: new SpaceLoginPage(),
		spaceProductPage: new SpaceDestinationPage(),
		spaceCheckoutPage: new SpaceCheckoutPage(),
		 auto : new Auto()
	};
	return cy.wrap(page);
});

Cypress.Commands.add('react', (dataReactToolbox, hasText ) => {
	const selector = `[data-react-toolbox=${dataReactToolbox}]`;
	if (options?.hasText) {
		cy.contains(selector, hasText);
	} else {
		cy.get(selector);
	}
});
// Cypress.Commands.add('getAutoCompleted', () => {
// 	const autoCompleted = [];
// 	return cy.get('[class$="auto-complete__multi-value__label"]')
// 		.each(element => {
// 			autoCompleted.push(element.text());
// 		})
// 		.then(() => {
// 			// return es útil cuando deseas retornar algo específico de ese bloque para usarlo fuera del mismo.
// 			return autoCompleted; //Esto es útil cuando quieres usar el resultado de una operación asíncrona en otro lugar del código.

// 		});
// });