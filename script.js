document.getElementById("js-alert").classList.add("is-hidden");
window.addEventListener("hashchange", function(){
	const hash = window.location.hash.replace("#","") || "home"
	const readyHash = hash.split("/")
		
	document.querySelectorAll(".page").forEach(function($e){
		$e.classList.add("is-hidden")
	})
	console.log(readyHash)
	console.log(readyHash.length)
	if (readyHash.length == 2){
		console.log(readyHash[1])
		document.getElementById(readyHash[1]).classList.remove("is-hidden")
	}
	if (readyHash.length == 1){
		document.getElementById(readyHash[0]).classList.remove("is-hidden")
	}
});