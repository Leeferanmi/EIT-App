import "./body.html"
import "./templates/eit_list.js"
import "./templates/eit.js"
import {Eits} from "../api/eits.js"

Template.body.events({
	'submit #data-capture'(event){
		event.preventDefault()
		const target = event.target
		var Firstname = target.Firstname.value
		var Lastname = target.Lastname.value
		var Gender = target.Gender.value
		var DOB = target.DateofBirth.value.split("-")
		var DateofBirth = new Date(Number(DOB[0]),Number(DOB[1])-1,Number(DOB[2]))

		Eits.insert({
			Firstname:Firstname,
			Lastname:Lastname,
			Gender:Gender,
			DOB:DateofBirth
		})
	}
})
