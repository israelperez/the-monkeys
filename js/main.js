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
		var errorFlag;

		this.getValues();
		errorFlag = this.checkProductComplaint();
		return errorFlag; //form valid allow submit
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
	},
	checkProductComplaint: function(){
		var Engine = this;
		if(Engine.formData.cmbEnquiry === 'Product complaint'){
			if(Engine.formData.txtPname == '' || 
				Engine.formData.txtPsize == '' ||
				Engine.formData.txtPuseBy == '' ||
				Engine.formData.txtPbcode == '') return false;
			else return true;
		}
	}
}