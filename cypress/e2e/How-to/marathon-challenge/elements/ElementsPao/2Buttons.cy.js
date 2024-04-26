import { Buttons } from '../../../../../support/pages/Elements/2buttons.Page';

const { buttons }= Cypress.env('endpoint');
const messageDoubleClick = 'You have done a double click';
const messageRigthClick= 'You have done a right click';
const messageClickMe = 'You have done a dynamic click';
describe('ToolsQA | Elements | Buttons',() => {

	beforeEach('User be visited buttons page ', function () {
		cy.visit('/buttons');
		cy.url().should('contain',buttons);
	});
	it('TC1:validate should Double Click” button is clicked', () => {
		cy.step('Do double click button and should text with:AS for practice');
		Buttons.doDoubleButtonclick();
		cy.step('Validate text to double click button');
		Buttons.haveDoubleClickMessage().as('getMessage');
		cy.get('@getMessage').should('have.text',messageDoubleClick);

	});
	it('TC2:Validate should Right Click button is clicked', () => {
		cy.step('Do ritgh click button');
		Buttons.doRigthButtonClick();
		cy.step('Validate text to rigth click button');
		Buttons.haveRigthButtonMessage().should('have.text',messageRigthClick);
	});
	it('TC3:Validate should Click button is clicked', () => {
		cy.step('Do click to button');
		Buttons.doButtonClick();
		cy.step('should have text message');
		Buttons.haveButtonMessage().should('have.text',messageClickMe);
	});
});