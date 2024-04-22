//todos los cy son asincronos
// test suite
describe('challengue Elements',() => {
	//Preconditions
	beforeEach('Visited ',() => {
		cy.visit('/radio-button');
	});

	// Test case
	it('TC1:should check randio buttons ', () => {
		//*ARRANGE
		const radioYes = 'Yes';
		const radioImpressive = 'Impressive';
		const radioNo = 'No';
		//*ACT
		function getRadio(radioName) {
			//ely camnbo el enfoque pero la diferencia es que del elemento actual busca todos los hermanos que tenga y no es tan expecifico
			return cy.get('.custom-radio').contains(radioName).siblings();
			//Invocar una Variable se debe poner `` y {} y luego $
			//obtiene los elementos filtra por texto y busca el input de ese texto
			// return cy.get('.custom-radio').filter(`:contains("${radioName}")`).find('input');
		}
		//Nota se debe usar then para encadenar acciones asincronas que tiene promesas y tambien para para los expect
		//then() permite ejecutar código después de que se haya completado una operación asíncrona
		// se usa para encadenar y manejar acciones asíncronas en Cypress, asegurándose de que las operaciones se ejecuten en el orden correct
		//esto cuando se esta haciendo varias acciones de un mismo elemento obtenido prinicipal
		//*ACT
		getRadio(radioYes)
			.check({ force:true })
			.then(() => {
				cy.get('.text-success').should('have.text',radioYes);
			});
		//*ACT
		getRadio(radioImpressive)
			.check({ force:true })
			.then(() => {
				cy.get('.text-success').should('have.text',radioImpressive);
			});

		//*ACT
		getRadio(radioNo).should('be.disabled');

	});
});