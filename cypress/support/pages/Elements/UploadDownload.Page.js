class UploadDownload {
	get={
		download:() => cy.get('[target="_blank"]'),
		Upload:() => cy.get('.mt-3 p[id="uploadedFilePath"]'),
		elementUpload:() => cy.get('[type="file"]')

	};

	fileDownload() {
		return this.get.download();

	}
	validaUpload() {
		return this.get.Upload();
	}
	fileUpload() {
		return this.get.elementUpload();
	}
}
export const uploadownload = new UploadDownload();