//  // console.log(document.getElementById('idone'));
//  // console.log(document.getElementByClassName('classone'));


// const myElement=document.querySelectorAll('#idone')
// console.log(myElement[0])


// // const mypElement=document.querySelector('p')
// // mypElement.textContent='I am being changed by js'


// // const mypElement=document.querySelectorAll('p')
// // // mypElement.forEach(function (p) {
// // // 	//p.textContent="changed using loop"
// // // 	//p.remove()
// // // })


// // mypElement.forEach((p)=>{
// // 	p.textContent="changed using loop ooo"
// // })

// // console.log(document.title);



//track inputform
document.querySelector('#myform').addEventListener('submit',(event)=>{
	console.log(event.target.value) 
})