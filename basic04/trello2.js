let myTodos ={
	day :'monday',
	meeting:0,
	meetdone:0
}
//console.log(myTodos)
let addMeeting = function(todo,meet=0) {
	// body...
	todo.meeting=todo.meeting+meet
}

let meetDone=function(todo,meet=0) {
	// body...
	todo.meetdone =todo.meetdone - meet
}

let resetDay = function (todo) {
	// body...
	todo.meeting=0
	todo.meetdone=0
}
let getSumm =function (todo) {
	// body..
	let meetl = todo.meeting + todo.meetdone

	return `you have ${meetl} meetings today!`
}
addMeeting(myTodos,4)
addMeeting(myTodos,2)
meetDone(myTodos,5)
console.log(myTodos)
getSumm(myTodos)
console.log(getSumm(myTodos))