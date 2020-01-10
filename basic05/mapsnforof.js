var john ={
	name:'I am john',
	age:19,
	isActive:true
}
var marry={
	name:'i am marry',
	age:23,
	isActive:true
}
var sam={
	name:'I am sam',
	age:20,
	isActive:false
}

let users = new Map()
// // console.log(typeof users)
users.set('john',john)
 users.set('marry',marry)
 users.set('sam',sam)
// console.log(users.size)
// console.log(users.keys())
// console.log(users.get('marry'))
// console.log(users.values())
for(const key of users.values())
{
	console.log(key.name);
}

for(const [key,value] of users.entries())
{
	console.log(key + '='+ value.name)
	//convert above line in lieals
}
users.forEach((value,key)=> console.log(key + '='+ value.name))


var a=[['one',1],['two',2],['three',3]]


var newMap =new Map(a)

console.log(newMap)


//document map of mdn