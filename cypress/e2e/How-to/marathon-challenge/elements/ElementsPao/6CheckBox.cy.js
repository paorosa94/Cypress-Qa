import { checkbox } from '../../../../../support/pages/Elements/6CheckBox.Page';

const { checkBox }= Cypress.env('endpoint');

describe('ToolsQA | Elements | Checkbox',() => {
	beforeEach('',() => {
		cy.visit('/checkbox');
		cy.url().should('contain',checkBox);
	});
	it('TC1:Validate should in Expand All and Collapse All check select', () => {
		cy.step('get length');

		checkbox.ValidHome().its('length').then((element) => {
			cy.step('should its length');
			checkbox.ValidHome().should('have.length',element);
		});
		cy.step('clicked expand all');
		checkbox.clickExpandAll();
		cy.step('clicked collapse all');
		checkbox.clickCollapseAll();

	});
	const home = [0];
	it('TC2:validate should check and display the labels', () => {
		cy.step('clicked expand all');
		checkbox.clickExpandAll();
		cy.step('check home and should be checked');
		checkbox.TypeCheckBox(home).check({ force: true });
		checkbox.TypeCheckBox(home).should('be.checked');

		const checkLabels= [];
		cy.step('get element whose pseudoclass has .rct-title and For each element that is iterated, the text element.text will be returned and saved in the variable');
		checkbox.getClass().each(elements => {
			checkLabels.push(elements.text());
		});;

		const displayLabels=[];
		cy.step('get element and For each element that is iterated, the text element.text will be returned and saved in the variable');
		checkbox.getIdClass().each(elements => {
			displayLabels.push(elements.text());

		});

		cy.step('then map the text check labels to lowercase and replace the spacing and formatting');
		cy.step('expects tags to be the same in structure and content');
		cy.then(() => {
			const labels= displayLabels.map(text => text.toLowerCase());
			const checkedLabels = checkLabels.map(text => text.toLowerCase().replace(' ','').replace('.doc',''));
			//En Cypress, deep.equal es un método de aserción que se utiliza para comparar si los dos objetos son iguales en estructura y contenido.
			expect(labels).deep.equal(checkedLabels);

		});
	});
	it.only('TC3:validate should check and uncheck and display the labels ', () => {

		cy.step('clicked expand all');
		checkbox.clickExpandAll();
		cy.step('get length of element with its and with number return with cypress random ');
		//its quiero obtener solo el legnth del elemento agarrable
		checkbox.TypeCheck().its('length')
			.then(items => {
				//Cypress._.random(items) incluira hasta la longitud del (0,17)
				const randomLength = Cypress._.random(1,items - 1);//1 indica que comienza indice 1 para seleccionar el nro aleatorio y -1  evita seleccionar un elemento fuera de la lista.
				checkbox.TypeCheckBox(randomLength).check({ force: true });
				checkbox.TypeCheck().should('be.checked');

				const checkLabels= [];
				cy.step('get element whose pseudoclass has .rct-title and For each element that is iterated, the text element.text will be returned and saved in the variable');
				checkbox.getClassTitle().each(elements => {
					checkLabels.push(elements.text());
				});;

				const displayLabels=[];
				cy.step('get element and For each element that is iterated, the text element.text will be returned and saved in the variable');
				checkbox.getIdClass().each(elements => {
					displayLabels.push(elements.text());

				});

				cy.step('then map the text check labels to lowercase and replace the spacing and formatting');
				cy.step('expects tags to be the same in structure and content');
				cy.then(() => {
					const labels= displayLabels.map(text => text.toLowerCase());
					const checkedLabels = checkLabels.map(text => text.toLowerCase().replace(' ','').replace('.doc',''));
					//En Cypress, deep.equal es un método de aserción que se utiliza para comparar si los dos objetos son iguales en estructura y contenido.
					expect(labels).deep.equal(checkedLabels);
				});
				cy.step('uncheck labels checked');
				checkbox.TypeCheckBox(randomLength).uncheck({ force: true });
				checkbox.TypeCheck().should('not.be.checked');
			});
	});
});