class RadioButtons {
	get={
		ClassRadio:() => cy.get('.custom-radio'),
		message:() => cy.get('.mt-3'),
		notEnabled:() => cy.get('[for="noRadio"]')
	};
	ElementRadio(radioName) {
		//selecciona un radio button (input) dentro de una clase específica según el nombre proporcionado y lo marca (lo selecciona).

		return this.get.ClassRadio().contains(radioName).siblings().check({ force:true });
	}
	elementMessage() {
		return this.get.message();
	}
	noNotEnabled() {
		return this.get.notEnabled();
	}
}
export const radiobuttons = new RadioButtons;