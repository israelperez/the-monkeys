var UIEngine = {
	formData:{
		txtFname: '',
		txtSname: '',
		txtEamil: '',
		txtPhone: '',
		txtAddress: '',
		txtSuburb: '',
		cmbState: '',
		txtPcode: '',
		cmbEnquiry: '',
		txtPname: '',
		txtPsize: '',
		txtPuseBy: '',
		txtPbcode: '',
		txtMsg: ''
	},
	validation: function(){
		this.getValues();
		return false; //form valid allow submit
	},
	getValues: function(){
		var Engine = this;
		for (var key in Engine.formData) {
			if (Engine.formData.hasOwnProperty(key)) {
				Engine.formData[key] = Engine.getElementValue(key);
			}
		}
		console.log(Engine.formData);
	},
	getElementValue: function(element){
		return document.getElementById(element).value;
	}
}