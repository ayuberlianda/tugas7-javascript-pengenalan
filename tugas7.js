var tinggi = [185, 187, 170, 155, 160, 150, 175, 135, 167, 100]

console.log("Menggunakan pengulangan biasa")
for(i=0; i<tinggi.length ; i++){
	console.log(tinggi[i])
}

var x;
console.log("Menggunakan for of")
for(x of tinggi){
	console.log(x)
}
