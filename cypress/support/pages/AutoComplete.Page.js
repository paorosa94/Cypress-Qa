export class Auto {
// constructor que se obtiene para iterar en funciones
	get={

		getlength: () => cy.get('[class$="auto-complete__multi-value__label"]')
	};
	iterarArray() {
		const autoCompleted = [];
		// el get es el nombre del constructor y getlength el nombre del elemento agarrable
		//por eache element del array que se obtuvo se extrae el texto y se pushea
		return this.get.getlength().each(element => {
			autoCompleted.push(element.text());
		})
			.then(() => {
				// return es útil cuando deseas retornar algo específico de ese bloque para usarlo fuera del mismo.
				return autoCompleted; //Esto es útil cuando quieres usar el resultado de una operación asíncrona en otro lugar del código.

			});
	}
}
