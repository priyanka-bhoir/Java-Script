const sayHello= (n) => `hey there ${n}`

console.log(sayHello('priyanka'))

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

const thingsDone = todos.filter((todo)=>todo.isDone === false
)
console.log(thingsDone)