import {Meteor} from 'meteor/meteor';
import {Mongo} from'meteor/mongo';
import {check} from 'meteor/check';

export const Eits = new Mongo.Collection("eits");

Meteor.methods({
	'eits.insert'(Firstname, Lastname, Gender, DOB){
		check(Firstname, String);
		check(Lastname, String);
		check(Gender, String);
		check(DOB, Date);

		Eits.insert({
			Firstname:Firstname,
			Lastname:Lastname,
			Gender:Gender,
			DOB:DOB
		})
	},
	'eits.delete'(id){
		check(id, String);
		Eits.remove(id);
	},
	'eits.update'(id, Firstname, Lastname, Gender, DOB){
		check(Firstname, String);
		check(Lastname, String);
		check(Gender, String);
		check(DOB, Date);

		Eits.update(id,{ $set:{
			Firstname:Firstname,
			Lastname:Lastname,
			Gender:Gender,
			DOB:DOB
		}} );
	},
})
