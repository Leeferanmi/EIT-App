import './eit_list.html'
import {Eits} from '../../api/eits.js'
var eitData = [
{
	Firstname: "Feranmi",
	Lastname:'Ogundipe',
	Gender: 'Female',
	DOB: new Date().toDateString()
},
{
	Firstname: "Bimbo",
	Lastname:'Oladeji',
	Gender: 'Non comforming',
	DOB: new Date().toDateString()
},
{
	Firstname: "James",
	Lastname:'Muriuki',
	Gender: 'Male',
	DOB: new Date().toDateString()
},
]

Template.eitList.helpers({
	eits:Eits.find()
})
