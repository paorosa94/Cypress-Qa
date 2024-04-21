
// test suite
describe('challengue Elements',() => {
	//Preconditions
	beforeEach('Visited in textbox page',() => {
		cy.visit('/checkbox');
	});

	// Test case
	it('TC1: should check and display the labels', () => {
		//TC validar hacer check y que se visualice los labels abajo
		//antes de hacer click deberia tener 1 casilla
		cy.get('[for^="tree-node"]').should('have.length', 1);
		//hacer click al icono de +  para que se despliegue
		cy.get('[aria-label="Expand all"]').click();
		//despues de hacer click deberia tener 17
		//its obtener el largo length
		//then creo una variable count que tendra el array
		cy.get('[for^="tree-node"]')
			.its('length')//.its('length') se utiliza para obtener la longitud (cantidad de elementos)
			.then(count => {
				// se utiliza el método .then() para realizar una acción con el valor obtenido. En este caso, el valor obtenido se almacena en la variable count.
			  const randomNodeIndex = Cypress._.random(count);//random lo que hace es generar un indice aleatorio y se guardara en la variable nodexindex
				cy.get('[for^="tree-node"]').should('have.length', count);//no lo tenia ely
			 // hara check a una casilla random
				cy.get('[type="checkbox"]').eq(randomNodeIndex).check({ force: true });
				//se validara la casilla random checkeada
				cy.get('[type="checkbox"]').eq(randomNodeIndex).should('be.checked');
				//se fuerza hacer check a la casilla PADRE porque esta oculta y no hay manera y se tildara todo
				cy.get('[type="checkbox"]').eq(0).check({ force: true });
				//se valida que el padre principal este checkeado
				cy.get('[type="checkbox"]').eq(0).should('be.checked');
				//Valida que este descheck una casilla y.no se puede hacer en un it aparte
				cy.get('[type="checkbox"]').eq(randomNodeIndex).uncheck({ force: true });
				cy.get('[type="checkbox"]').eq(randomNodeIndex).should('not.be.checked');
			 });

		//se esta agarrando los labels(padre) de propiedad tree-node,
		//cuyos hijos tenga una propiedad .rct-icon-check de check, con el fin de extraer lengt text
		//para compararlo y validarlo con result display

		// lo que hace el filter es que se para del elemento cy.get donde estoy parado tiene este selector de lo que me estas diciendo? si es si, lo filtra(hay 17elementos son check y uncheck quiero el de check)
		// filer->obtiene elemento del dom que macthee con un selector especifico
		// each-> itera atraves de una array y hacer algo por cada uno de ellos
		//  elements-> por cada elemento yo quiero utilizar element.text quiero sacar ese texto que tiene en el array
		const labels = [];
		// el for obtenido va agarrar aquellos cuya pseudoclase (:) tenga .title
		cy.get('[for^="tree-node"]:has(.rct-icon-check) .rct-title').each(element => {
			//por cada elemento que itera va ir retonarno el texto element.text
			labels.push(element.text());//con labels.push esta guardando los texto obtenido en la variable labels

		});
		cy.log(labels);

		const succesText = [];
		cy.get('#result .text-success')
			.each(element => {
			//por cada elemento que itera va ir retonarno el texto element.text
				succesText.push(element.text());//con labels.push esta guardando los texto obtenido en la variable labels

			})
			// se usa el then ya que se esta usando metodos asincronicos(cy) antes y para que ejecute metodo sincronicos hay encapsularlo en el then
			.then(() => {

				const checkedLabels = labels.map(text => text.toLowerCase().replace(' ','').replace('.doc',''));
				cy.log(checkedLabels);
				// text es una variable que representa cada elemento del array
				const displaytexts = succesText.map(text => text.toLowerCase());
				cy.log(displaytexts);

				// se espera que los texto visualizado sea igual a la variable de los check box tildado
				expect(displaytexts).deep.equal(checkedLabels);
				//deep adentrarnos al objeto ,de la array esperado se adentra y se asegura que sea igual al otro objeto solo valida el contenido

			});

	});
	// it('TC2: should unchecked box', () => {
	// 	cy.get('[type="checkbox"]').eq(5).uncheck({ force: true });
	// 	//se valida que el padre principal este checkeado
	// 	cy.get('[type="checkbox"]').eq(5).should('not.be.checked');

	// });
});

//Steps (acciones,data, RE)