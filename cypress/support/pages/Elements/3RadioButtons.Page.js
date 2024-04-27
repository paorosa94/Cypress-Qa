class RadioButtons {
	get={
		ClassRadio:() => cy.get('.custom-radio')
	};
	ElementRadio(radioName) {
		//selecciona un radio button (input) dentro de una clase específica según el nombre proporcionado y lo marca (lo selecciona).

		 this.get.ClassRadio().contains(radioName).siblings().check({ force:true });
	}
}
export const radiobuttons = new RadioButtons;