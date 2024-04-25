import { auto } from '../../../../support/pages/AutoComplete.Page';

describe('challengue Elements',() => {
	beforeEach('Visited in autocomplete page',() => {
		cy.visit('/auto-complete');
	});

	it('TC1: should autocomplete values in text input', function () {
		cy.step('Creating function to select random color');
		const availableColors = ['Red','Blue','White','Yellow','Black','Voilet'];
		function selectRandomColor() {
			const givenRandom = Cypress._.random(availableColors.length -1);//devuelve un numero index random pero cuenta 6 elementso en vez de 5 por eso se le rest -1
			cy.log(`Largo del Given⭐=>${availableColors.length}`);
			cy.log(`Color Aleatorio⭐=>${givenRandom}`);
			const givenColor = availableColors[givenRandom];// esta guardando el numero del array del color random
			//*remover un index Elimina un elemento del array availableColors en la posición givenRandom. Por lo tanto, después de seleccionar un color, ese color específico se elimina del array, asegurando que no se seleccione nuevamente.
			availableColors.splice(givenRandom, 1);// Elimina el color seleccionado del array availableColors para evitar seleccionarlo nuevamente en futuras llamadas.
			cy.log(`Color string⭐=>${ givenColor}`);
			return givenColor;
		}
		cy.step('#1: Select a single Color with Enter');
		const givenColors = selectRandomColor();
		cy.get('#autoCompleteMultipleInput').type(`${givenColors}{enter}`);
		//validar por medio de una array lo que se typeo
		// existe dos formas de estilo para estructurar en este tc en part6icular
		auto.iterarArray().then(values => expect(values).includes(givenColors));

		// Alias con as: Aquí, estás asignando los valores retornados por auto.iterarArray() a un alias valuesAlias. Luego, en el siguiente bloque, estás usando cy.then() para acceder y realizar acciones con esos valores usando el alias.
		cy.step('#2: Select color with enfoque AS  ');
		const givenColors2 = selectRandomColor();
		cy.get('#autoCompleteMultipleInput').type(`${givenColors2}{enter}`);
		auto.iterarArray().as('valuesAlias');// Este enfoque se puede usar para las api cuando se require utilizarlo mas adelante
		cy.then(() => {

			expect(this.valuesAlias).includes(`${givenColors2}`);
		});
		cy.step('#3: Select one color by clicking ');
		cy.get('#autoCompleteMultipleInput').type('A');

	});
});
