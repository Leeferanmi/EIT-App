import './eit.html'

Template.eit.helpers({
	DOBs:function(){
		return this.DOB.toDateString()
	}
})