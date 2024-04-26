class DynamicProperties {

	get = {
		Button : () => cy.get('div [class$=btn-primary]')
	};

	notEnableButton() {
		return this.get.Button({ timeout:4999 }).eq(0);
	}
	enableButton() {
		return this.get.Button({ timeout:5000 }).eq(0);

	}
	notChangeColor() {
		return this.get.Button({ timeout:4999 }).eq(1);
	}
	changeColor() {
		return this.get.Button({ timeout:5000 }).eq(1);
	}
	notVisibleAtrr() {
		return this.get.Button({ timeout:4998 }).eq(2);
	}
	visibleAtrr() {
		return this.get.Button({ timeout:5000 }).eq(2);
	}
}

export const dynamic = new DynamicProperties();