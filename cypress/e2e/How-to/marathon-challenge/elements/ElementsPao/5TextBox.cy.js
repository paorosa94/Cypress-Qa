import { form } from '../../../../../support/pages/Elements/TexBox.Page';
import { faker } from '@faker-js/faker';

const { textBox } = Cypress.env('endpoint');
const nameRandom = faker.name.fullName();
const emailRandom = faker.internet.email();
const currentRandom = faker.address.streetAddress();
const permanentRandom = faker.address.country();
const nameButton = 'Submit';
describe('ToolsQA | Elements | Text Box: Fill form and Submit',function () {
	beforeEach('visited tex box page',() => {
		cy.visit('/text-box');
		cy.url().should('contain',textBox);
	});
	it('TC1:Validate should  String is displayed as a paragraph after submitting when all fields is filled', () => {

		cy.step('get elements for fields is filled');
		form.enterfullName(nameRandom);
		form.enterEmail(emailRandom);
		form.enterCurrentAddress(currentRandom);
		form.enterPermanentAddress(permanentRandom);
		form.buttonSubtmit(nameButton);

		cy.step('validate output paragraph after submitting.');
		form.outputName(nameRandom).then(value => {
			cy.wrap(value).should('be.visible').and('contain.text',nameRandom);
		});

		form.outputEmail().then(value => {
			cy.wrap(value).should('be.visible').and('contain.text',emailRandom);
		});

		form.outputCurrent().then(value => {
			cy.wrap(value).should('be.visible').and('contain.text',currentRandom);
		});
		form.outputPermanent(permanentRandom).then(value => {
			cy.wrap(value).should('be.visible').and('contain.text',permanentRandom);
		});
	});
	it('TC2:Validate should  String is displayed only paragraph fields fullName,Current Address,Permanent Address after submitting', () => {
		cy.step('get elements for fields is filled');
		form.enterfullName(nameRandom);
		form.enterCurrentAddress(currentRandom);
		form.enterPermanentAddress(permanentRandom);
		form.buttonSubtmit(nameButton);

		cy.step('validate output paragraph after submitting.');
		form.outputName(nameRandom).then(value => {
			cy.wrap(value).should('be.visible').and('contain.text',nameRandom);
		});
		form.outputCurrent().then(value => {
			cy.wrap(value).should('be.visible').and('contain.text',currentRandom);
		});
		form.outputPermanent(permanentRandom).then(value => {
			cy.wrap(value).should('be.visible').and('contain.text',permanentRandom);
		});
	});
	it('TC3:Validate should fields fullName,Current Address,Permanent is empty', () => {
		cy.step('clicking button subtmit');
		form.buttonSubtmit(nameButton);
		cy.step('obtains element being invoked for validation with expect ');
		form.emptyfullName().invoke('val').then(value => {
			expect(value).to.be.empty;
		});
		cy.step('obtains element for validation with should ');
		form.emptycurrentAddress().then(value => {
			cy.wrap(value).should('be.empty');
		});

		form.emptyPermanentAddress().then(value => {
			cy.wrap(value).should('be.empty');
		});

	});
	it.only('TC4:Validate the email field that is marked in red when it does not contain @', () => {
		// form.enterEmail('pao.rosa944gmail.com')
		cy.get('#userEmail').type('pao.rosa944gmail.com').as('val');
		form.buttonSubtmit(nameButton);
		cy.wait(1000);
		cy.get('@val').then(value => {
			expect(value).to.contain.css('border-color','rgb(255, 0, 0)');
		});
	});
});