class Form {
	get={
		fullName:() => cy.get('#userForm .col-md-9:has([id="userName"])'),
		email:() => cy.get('#userEmail-wrapper .col-md-9:has([type="email"])'),
		currentAddress:() => cy.get('#currentAddress'),
		permanentAddress:() => cy.get('textarea#permanentAddress'),
		submit:() => cy.get('.mt-2'),
		// parrafo
		//name and permanent
		paragraph:() => cy.get('#output'),
		paragraphEmail:() => cy.get('#email'),
		paragraphCurrent:() => cy.get('p#currentAddress')

	};
	enterfullName(name) {
		return this.get.fullName().type(name);
	}
	enterEmail(email) {
		return this.get.email().type(email);
	}
	enterCurrentAddress(current) {
		return this.get.currentAddress().type(current);

	}
	enterPermanentAddress(permanent) {
		return this.get.permanentAddress().type(permanent);
	}
	buttonSubtmit(name) {
		//obtiene los elementos filtra por texto y busca el button de ese texto
		return this.get.submit().filter(`:contains("${name}")`).find('button').click();

	}
	outputName(name) {
		//obtiene los elementos filtra por texto y busca el p de ese texto
		return this.get.paragraph().filter(`:contains("${name}")`).find('p');
	}
	outputEmail() {
		return this.get.paragraphEmail();
	}
	outputCurrent() {
		return this.get.paragraphCurrent();
	}
	outputPermanent(permanent) {
		return this.get.paragraph().filter(`:contains("${permanent}")`).find('p');
	}
	//empty
	emptyfullName() {
		return this.get.fullName();
	}
	emptycurrentAddress() {
		return this.get.currentAddress();
	}
	emptyPermanentAddress() {
		return this.get.permanentAddress();
	}
	redCss() {
		return this.get.email();
	}
}
export const form = new Form();