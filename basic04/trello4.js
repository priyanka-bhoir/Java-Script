const myTodos = ['buy bread', 'go to gym', 'record youtube']

// console.log(myTodos.indexOf('buy bread'))

const newTodos =[{
	title:'Buy bread',
	isDone: false
},{
	title:'go to gym',
	isDone:false
},{
	title:'record youtube',
	isDone:true

}]

// const index = newTodos.findIndex(function (todo, index) {
// 	console.log(todo)
// 	// body...
// 	return todo.title ==='go to gym'
// })
// console.log(index)

// //method1
// const findTodo=function(myTodos,title) {
// 	const index = myTodos.findIndex(function (	todo,index) {
// 		return todo.title.toLowerCase() === title.toLowerCase()
// 	})
// 	return myTodos[index]
// }
// let print =findTodo( newTodos, 'go to gym')
// console.log(print)


const findTodo=function(myTodos, title) {
	const titleReturned = myTodos.find(function(todo,index) {
		return todo.title.toLowerCase()===title.toLowerCase()
	})
	return titleReturned
}
let print =findTodo( newTodos, 'go to gym')
console.log(print)