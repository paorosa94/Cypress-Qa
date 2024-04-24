
// test suite
describe('challengue Elements',() => {
	//Preconditions
	beforeEach('Visited in textbox page',() => {
		cy.visit('/buttons');
	});

	// Test case
	it('TC1: should be clickable', () => {
		//cy.contains es un metodo para obtener texto dentro de un elemento
		//Esta función es útil cuando se trabaja con elementos que no tienen atributos únicos como clases o IDs, pero se puede identificar por su contenido de texto.
		cy.contains('Double Click Me').dblclick();
		cy.contains('Right Click Me').rightclick();
		//TAG.CLASE QUE NO TENGA ID QUE TERMINE ($) Btn
		cy.get('button.btn:not([id$=Btn])').click();

	});
});