import { uploadownload } from '../../../../../support/pages/Elements/UploadDownload.Page';
const { uploadDownload }= Cypress.env('endpoint');

describe('ToolsQA | Elements | Upload and Download',function () {
	beforeEach('',() => {
		cy.visit('/upload-download');
		cy.url().should('contain',uploadDownload);
	});

	it('TC1:Validate should The "download" button is selected.', () => {
		cy.step('get selector and invoke atrr for validated exist file');
		uploadownload.fileDownload().as('getDownload');
		// se invova el atrr download su valor se guardara en una varible
		cy.get('@getDownload').invoke('attr','download').then(name => {
			cy.log(name);
			uploadownload.fileDownload().click();
			cy.readFile(`cypress/downloads/${name}`).should('exist');
		});

	});
	const nameFile='sampleFile.jpeg';
	it('TC2:Validate should The "choose file" button is selected.', () => {
		cy.step('get selector for upload and validated contain text');
		uploadownload.fileUpload().selectFile(`cypress/downloads/${nameFile}`);
		uploadownload.validaUpload().should('contain.text',`${nameFile}`);
	});
});