import {Template} from "meteor/templating";
import {ReactiveDict} from "meteor/reactive-dict";
import {Eits} from "../api/eits.js";

import "./templates/eit_list.js";
import "./templates/eit.js";

import "./body.html";

let deleteEits = [];

Template.body.onCreated(function bodyOnCreated(){
	this.state = new ReactiveDict();
	this.state.set('theArray',[]);
})

Template.body.events({
	'submit #data-capture'(event){
		event.preventDefault()
		const target = event.target
		var Firstname = target.Firstname.value
		var Lastname = target.Lastname.value
		var Gender = target.Gender.value
		var DOB = target.DateofBirth.value.split("-")
		var DateofBirth = new Date(Number(DOB[0]),Number(DOB[1])-1,Number(DOB[2]))
		
		Meteor.call('eits.insert',Firstname, Lastname, Gender, DateofBirth)
	},
	'change .checkedValue'(event, instance){
		// var getAll = instance.state.get('theArray')
		if (event.target.checked) {
			// getAll.push(this._id)
			// instance.state.set('theArray',getAll)

			deleteEits.push(this._id);
		}else {
			deleteEits.splice(deleteEits.indexOf(this._id), 1)
			// instance.state.set('theArray', getAll)
		}
	},
	'click #delete-eit' (event, instance) {
		// console.log('i think');
		// var getAll = instance.state.get('theArray')
		// console.log(Eits);
		deleteEits.forEach(function(id){
			Meteor.call('eits.delete',id)
		})
	}
});
