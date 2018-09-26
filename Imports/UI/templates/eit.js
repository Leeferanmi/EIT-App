import './eit.html'

Template.eit.helpers({
	DOBs:function(){
		return this.DOB.toDateString()
	}
})
 Template.eit.events({
 	'click button':function(){
 		var editForm = document.getElementById('data-capture');
 		editForm.Firstname.value= this.Firstname;
 		editForm.Lastname.value= this.Lastname;
 		editForm.Gender.value= this.Gender;
 		var month = ("0"+(this.DOB.getMonth() + 1)).slice(-2);
 		editForm.DateofBirth.value= this.DOB.getFullYear()+"-"+month+"-"+this.DOB.getDate();
 		editForm.id.value= this._id;
 	}
 })