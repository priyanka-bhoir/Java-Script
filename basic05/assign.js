const todos =[{
	title:'buy bread',
	isDone:true
},{
	title:'Go to gym',
	isDone:true
},{
	title:'Record youtube videos',
	isDone:false
}]

 const thingsDone = todos.filter((todo)=>{if(todo.isDone ===false) return todo.title})
console.log(thingsDone)
//let print =filter( todos)
//  const index = newTodos.findIndex(function (todo, index) {
//  	console.log(todo)
// 	// body...
//  	return todo.title ==='go to gym'
//  })
// console.log(index)
// let p = thingsDone.indexOf()
// console.log(p)