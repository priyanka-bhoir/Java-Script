let say = function(name) {

	console.log("greatting to " + name);	// body...
}

say('priyanka')



let fullNameMaker = function(fname,lname) {

	console.log("\twelocome to LCD")

	//console.log(` \n happy to have you ${fname} ${lname}`)
	// body...
}

//fullNameMaker("jhon","doe")


let myAdder =function(num1,num2)
{
	let added=num1+num2
	return added;
}
//console.log(myAdder(3,4))

let mult =function(num1,num2)
{
	return added=num1*num2
	
}
//console.log(mult(3,4))



let guest = function(name ='unName', course=0) {
	// body...
	return 'hello ' +name+ ' and your course is:'+course
}

console.log(guest('jhon',9));
console.log();