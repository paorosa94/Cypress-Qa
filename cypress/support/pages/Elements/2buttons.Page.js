class buttons {
	get={
		buttonDobleClick: () => cy.get('div button#doubleClickBtn'),
		buttonRigth:() => cy.get('.mt-4 [class$=btn-primary]'),
		buttonClick:() => cy.get('button.btn:not([id$=Btn])'),
		doubleClickMessage:() => cy.get('.mt-4 p#doubleClickMessage'),
		ritghClickMessage:() => cy.get('p#rightClickMessage'),
		clickMessage:() => cy.get('p#dynamicClickMessage')

	};
	doDoubleButtonclick() {
		return this.get.buttonDobleClick().dblclick();
	}
	haveDoubleClickMessage() {
		return this.get.doubleClickMessage();
	}
	doRigthButtonClick() {
		return this.get.buttonRigth().eq(1).rightclick();
	}
	haveRigthButtonMessage() {
		return this.get.ritghClickMessage();
	}
	doButtonClick() {
		return this.get.buttonClick().click();
	}
	haveButtonMessage() {
		return this.get.clickMessage();
	}
}
export const Buttons = new buttons();