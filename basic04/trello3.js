let myTodos ={
	day:"monday",
	meetings:0,
	meetdone:0,


	addMeeting: function (meetings) {
			console.log(this.meetings+meetings)
	},
	meetDone: function(meetdone)
	{
			console.log(this.meetdone + meetdone)
	},
	reset: function()
	{
		this.day='null'
		this.meetings=0
		this.meetdone=0
	}
}
myTodos.addMeeting(6)
myTodos.meetDone(7)
console.log(myTodos)
// console.log()

//assignment

//handel meeting done
//reset meeting of entire day


