
// test suite
describe('challengue Elements',() => {
	//Preconditions
	beforeEach('Visited in textbox page',() => {
		cy.visit('/dynamic-properties');
	});

	// Test case
	it('TC1: should show up after waiting or bofore waiting ', () => {
		//no deberia estar habilitado
		cy.get('#enableAfter').should('not.be.enabled');
		cy.get('#colorChange').should('not.have.css','color','#dc3545');
		//no deberia estar visible
		cy.get('#visibleAfter').should('not.exist');
		cy.wait(5000);
		//deberia estar habilitado en 5 segunds
		cy.get('#enableAfter').should('be.enabled');
		cy.get('#visibleAfter').should('be.visible');
		cy.get('#colorChange').should('have.css','color','rgb(220, 53, 69)');
	});
});