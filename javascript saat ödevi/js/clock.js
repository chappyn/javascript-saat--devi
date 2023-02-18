let fullName = prompt ("lütfen adinizi giriniz")
let myName = document.querySelector("#myName")

myName.innerHTML = `${fullName}`


function tarihSaat () {
	var date = new Date().toLocaleString(`tr-TR`);
	document.getElementById('myClock').innerHTML = date;
}
setInterval(tarihSaat, 1000)