import { dynamic } from '../../../../../support/pages/Elements/DynamicProperties.Page';

const { dynamicProperties } = Cypress.env('endpoint');

describe('ToolsQA | TS | Elements | Dynamic Properties',() => {

	beforeEach('Visited endpoint page dynamic properties',() => {

		cy.visit('/dynamic-properties');
		cy.url().should('contain',dynamicProperties);
	});
	it('TC1:Should getting the element without using “text“ (contains text) for  Element: Dynamic ID', () => {
		cy.step('Get element and validate exist text');
		cy.get('.col-md-6 p').should('have.text','This text has random Id');

	});

	it('TC2:should be asserted before and after is enabled.', () => {
		cy.step('get element using then and wrap validating not being enabled');
		dynamic.notEnableButton().then(notEnable => {
			cy.wrap(notEnable).should('not.be.enabled');
		});
		cy.step('get element using then and wrap validating being enabled');
		dynamic.enableButton().then(element => {
			cy.wrap(element).should('be.enabled');

		});

	});

	it('TC3:should be asserted before and after the color is changed.', () => {
		cy.step('get element validating not being have css');
		dynamic.notChangeColor().should('not.have.css','color','#dc3545');
		cy.step('get element validating being have css');
		dynamic.changeColor().should('have.css','color','rgb(220, 53, 69)');

	});
	it('TC4:should be asserted before and after is visible.', () => {
		cy.step('get element validating not being have value id');
		dynamic.notVisibleAtrr().should('not.have.value','visibleAfter');
		cy.step('get element validating being have value id');
		dynamic.visibleAtrr().should('have.id','visibleAfter');
	});
});