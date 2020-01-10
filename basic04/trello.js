// const days = ['mon','tue','wed','thu','fri','sat']

// // let say = function(name) {

// // 	console.log("greatting to " + name);	// body...
// // }
// // // days.forEach(say)
// // let say = function(name) {

// // 	console.log(name);	// body...
// // }
// // days.forEach(say)
// // for (let i = 0;i<days.length;i++) {
// // 	const ele =days[i];
// // 	console.log(ele);
// // 	}

// days.forEach(function (d,i)
// {
// 	console.log(`starts with ${i} -- ${d}`);
// })

const myTodos=[]
myTodos.push('buy Bread')
myTodos.push('REcord videos for youtube')
myTodos.push('go to Gym')
myTodos.forEach(function(todo,i)
{
	console.log(`your task no ${i+1} is: ${todo}`)
})

