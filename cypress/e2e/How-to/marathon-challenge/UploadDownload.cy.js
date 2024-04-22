
// test suite
describe('challengue Elements',() => {
	//Preconditions
	beforeEach('Visited in textbox page',() => {
		cy.visit('/upload-download');
	});

	// Test case
	it('TC1: should opload a file and download it', () => {
		//se invoka el atrubuto su valor se guardara en la variable name
		cy.get('#downloadButton')
			.invoke('attr','download')
			.then(name => {
				cy.log(name);
				//descarga el archivo
				cy.get('#downloadButton').click();
				//lee el archivo descargado y lo valida
				cy.readFile(`cypress/downloads/${ name}`).should('exist');
				//mismo archivo descargado lo sube
				cy.get('#uploadFile').selectFile(`cypress/downloads/${ name}`);
				cy.get('#uploadedFilePath').should('contain.text',name);
			});
	});
});