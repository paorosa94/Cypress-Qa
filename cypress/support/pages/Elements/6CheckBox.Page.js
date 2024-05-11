class CheckBox {
	get={
		expandAll:() => cy.get('[aria-label="Expand all"]'),
		CollapseAll:() => cy.get('[aria-label="Collapse all"]'),
		items:() => cy.get('[for^="tree-node"]'),
		checkBox:() => cy.get('[type=checkbox]'),
		//items
		hasClass:() => cy.get('[for^="tree-node"]:has(.rct-title)'),
		hasIdClass:() => cy.get('#result .text-success'),
		hasTitle:() => cy.get('[for^="tree-node"]:has(.rct-icon-check) .rct-title')

	};
	ValidHome() {
		return this.get.items();
	}
	clickExpandAll() {
		 this.get.expandAll().click();
	}
	clickCollapseAll() {
		this.get.CollapseAll().click();
	}
	getClass() {
		return this.get.hasClass();
	}
	getIdClass() {
		return	this.get.hasIdClass();
	}
	getClassTitle() {
		return this.get.hasTitle();
	}
	TypeCheckBox(item)
	{
		return this.get.checkBox().eq(item);
	}
	TypeCheck()
	{
		return this.get.checkBox();
	}
}
export const checkbox= new CheckBox();