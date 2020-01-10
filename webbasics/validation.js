function myvalid() {
	let myValue=document.getElementById('myform').value;

	if (isNaN(myValue)|| myValue<1 || myValue>20) {
		console.log("not a valed imput")
	}
	else{
		console.log("valid")
	}
}

//form validtion

document.querySelector('.myform').addEventListener('submit',(event)=>{
	event.preventDefault();
	console.log(event.target.uname.value);
	console.log(event.target.rname.value);
	event.target.uname.value=''
	event.target.rname.value=''
})