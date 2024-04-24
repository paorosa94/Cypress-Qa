import { faker } from '@faker-js/faker';

// test suite
describe('challengue Elements',() => {
	//Preconditions
	beforeEach('Visited in textbox page',() => {
		cy.visit('/text-box');
	});

	// Test case
	it('TC1: should submit form with valid credentials', () => {
		//todo: ARRANGE(preparacion y declaracion)
		faker.name.fullName;
		faker.internet.email;

		// es bueno usar variables para luego reutilizarla si es que lo hay
		const fullName = faker.name.fullName();
		const email= faker.internet.email();
		const currentAddress = faker.address.streetAddress();
		const permaAddress = faker.address.country();

		//todo: ACT (accion y ejecucion de metodos)
		cy.get('input#userName').type(fullName);
		cy.get('input#userEmail').type(email);
		cy.get('textarea#currentAddress').type(currentAddress);
		cy.get('textarea#permanentAddress').type(permaAddress);
		cy.get('[type="button"]#submit').click();

		//todo: ASSERT (Validar los resultados esperados)
		cy.get('p#name').should('contain.text',fullName);//text es un valor que no dentro del html como un value pero es visible, en esta caso se usa contain para que valide solo la parte del nombre y no NAME que aparece tambien y por eso no se usa HAVE.TEXT
		cy.get('p#email').should('contain.text',email);//text es un valor que no dentro del html como un value pero es visible
		cy.get('p#currentAddress').should('contain.text',currentAddress);//text es un valor que no dentro del html como un value pero e s visible
		cy.get('p#permanentAddress').should('contain.text',permaAddress);//text es un valor que no dentro del html como un value pero e s visible

	});

});

//Steps (acciones,data, RE)