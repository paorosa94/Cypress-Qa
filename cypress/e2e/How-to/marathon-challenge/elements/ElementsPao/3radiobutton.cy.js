import { radiobuttons } from '../../../../../support/pages/Elements/3RadioButtons.Page';
// import { data } from '../../../../../fixtures/data/3RadioButtons.json';

const Yes ='Yes';
const Impressive='Impressive';
const textMessage = 'You have selected';

const { RadioButtons }=Cypress.env('endpoint');

describe('ToolsQA | Elements | Radio Buttons',() => {
	beforeEach('visited radio buttons page',() => {
		cy.visit('/radio-button');
		cy.url().should('contain',RadioButtons);
	});
	it('Validate do radio buttons Yes and should displayed a message', () => {

		cy.step('Get element Yes');
		radiobuttons.ElementRadio(Yes).then(() => {
			cy.step('Get element message and validate exist text');
			radiobuttons.elementMessage().should('contain.text',`${textMessage } ${ Yes}`);

		});
	});
	 it('Validate do radio buttons Impressive and should displayed a message', () => {
		cy.step('Get element Impressive');
		radiobuttons.ElementRadio(Impressive).then(() => {
			cy.step('Get element message and validate exist text');
			radiobuttons.elementMessage().should('have.text',`${textMessage } ${ Impressive}`);

		});
	});
	 it('Validate do radio buttons No and should be disable', () => {
		cy.step('Get element "No" and validate not be enabled');
		radiobuttons.noNotEnabled().should('not.be.enabled');

	});

});