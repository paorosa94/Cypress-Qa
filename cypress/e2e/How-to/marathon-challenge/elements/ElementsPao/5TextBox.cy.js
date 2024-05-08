import { form } from '../../../../../support/pages/Elements/TexBox.Page';
import { faker } from '@faker-js/faker';
import data from '../../../../../fixtures/data/TexBox.json';

const { textBox } = Cypress.env('endpoint');
const nameRandom = faker.name.fullName();
const emailRandom = faker.internet.email();
const currentRandom = faker.address.streetAddress();
const permanentRandom = faker.address.country();
const nameButton = 'Submit';
const rgbRed= 'rgb(255, 0, 0)';
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
	it('TC4:Validate the email field that is marked in red when it does not contain @', () => {
		cy.step('get element for click button sunbmit');
		form.enterEmailInvalid(data.dataInvalid['NotContain@']).as('val');
		form.buttonSubtmit(nameButton);
		cy.wait(1000);
		cy.step('validate with expect to contain css');
		cy.get('@val').then(value => {
			expect(value).to.contain.css('border-color',`${rgbRed}`);
		});
	});
	it('TC5:Validate the email field that is marked in red when it does not contain 1 carácter alfanumérico before “@”', () => {
		cy.step('get element and type @gmail.com and click button sunbmit');
		form.enterEmailInvalid(data.dataInvalid.NotInclude1).as('val');
		form.buttonSubtmit(nameButton);
		cy.wait(1000);
		cy.step('validate with should css');
		cy.get('@val').should('have.css','border-color',`${rgbRed}`);
	});
	it('TC6:Validate the email field that is marked in red when it does not contain 1 carácter alfanumérico afther “@”', () => {
		cy.step('get element and type pao.rosa@ and click button sunbmit');
		form.enterEmailInvalid(data.dataInvalid.NotContain['CharacterAfther{']).as('val');
		form.buttonSubtmit(nameButton);
		cy.wait(1000);
		cy.step('validate with should css');
		cy.get('@val').should('have.css','border-color',`${rgbRed}`);
	});
	it('TC7: Validate the email field that is marked in red when it does not contain "." afther 1 carácter alfanumérico afther “@”', () => {
		cy.step('get element and type paorosa@gmailcom and click button sunbmit');
		form.enterEmailInvalid(data.dataInvalid.NotContain.PuntoAfther).as('val');
		form.buttonSubtmit(nameButton);
		cy.wait(1000);
		cy.step('validate with should css');
		cy.get('@val').should('have.css','border-color',`${rgbRed}`);
	});
	it('TC8: Validate the email field that is marked in red when it does not contain min 2 carácter alfanumérico afther “.”', () => {
		cy.step('get element and type paorosa@gmail.c and click button sunbmit');
		form.enterEmailInvalid(data.dataInvalid.NotContain['2CharacterAftherPunt']).as('val');
		form.buttonSubtmit(nameButton);
		cy.wait(1000);
		cy.step('validate with should css');
		cy.get('@val').should('have.css','border-color',`${rgbRed}`);
	});
});
