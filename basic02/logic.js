// &&-and operation
// ||- or
// 


let isVari =true
let isLogged = true
let hasPay =true
let isGuest =true

if (!isVari && isLogged && hasPay) {
	console.log("reading message")
	console.log("grant access")
}
else if (isVari || isGuest) {
	console.log("preview")
} 
else {
	console.log("plz contact admin")
}