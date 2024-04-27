import { radiobuttons } from '../../../../../support/pages/Elements/3RadioButtons.Page';
import { data } from '../../../../../fixtures/data/3RadioButtons.json';

const { RadioButtons }=Cypress.env('endpoint');

const Yes ='Yes';
const Impressive='Impressive';

describe('ToolsQA | Elements | Radio Buttons',() => {
	beforeEach('visited radio buttons page',() => {
		cy.visit('/radio-button');
		cy.url().should('contain',RadioButtons);
	});

	// it('Validate do radio buttons Yes and should displayed a message', () => {
	// cy.pending();
	// radiobuttons.ElementRadio(Yes).should('be.exist');
	// radiobuttons.ElementRadio(Yes).then(() => {
	// 		cy.get('.mt-3').should('have.text',data.select + Yes);

	// });
	// it('Validate do radio buttons Impressive and should displayed a message', () => {
	// 	radiobuttons.ElementRadio(Impressive).should('be.exist');
	// 	radiobuttons.ElementRadio(Impressive).then(() => {
	// 		cy.get('.mt-3').should('have.text',data.select + Impressive);

	// 	});
	// });
	// it('Validate do radio buttons No and should be disable', () => {
	// 		cy.get('[for="noRadio"]').should("not.be.disable")

	// 	});
	// });
});