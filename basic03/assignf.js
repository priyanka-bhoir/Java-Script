
let get =function(currentm,totalm) {
	// body...
	let myp=(currentm/totalm)*100
	let myg=''


	if(myp>=90){
		myg= 'A'
	}
	else if (myp>=80) {
		myg='B'
	}
	else{
		myg='f'
	}
	return `your grade is ${myg} and percentage is ${myp}`

}

let yourr = get(92,100) 
console.log(yourr)