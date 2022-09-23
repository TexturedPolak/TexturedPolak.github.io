//Automatyczne ukrycie komunikatu o braku JavaScriptu
document.getElementById("js-alert").classList.add("is-hidden");
//Refresh bądź załadowanie strony z historii
//Usunięcie znaku "#" i zastąpienie pustego #, #home
const hash = window.location.hash.replace("#","") || "home";
//Rozdziela podstronę od podstrony podstrony
const readyHash = hash.split("/");
const home = "home"
//Dla wszystkich Div'ów z klasą page dodaję klasę is-hidden ukrywającą niepotrzebną zawartość
document.querySelectorAll(".page").forEach(function($e){
	$e.classList.add("is-hidden")
});
//Sprawdzanie czy to podstrona czy podstrona podstrony i odkrywanie porządanej zawartości
//Podstrona podstrony
if (readyHash[0] == "prev"){

document.getElementById(home).classList.remove("is-hidden")

}
else{
if (readyHash.length == 2){
	//Odkrywanie porządanej zawartości
	document.getElementById(readyHash[1]).classList.remove("is-hidden")
};
//Podstrona
if (readyHash.length == 1){
	//Odkrywanie porządanej zawartości
	document.getElementById(readyHash[0]).classList.remove("is-hidden")
};};
//Podmienianie zawartości strony w locie
//Oczekiwanie aż hash się zmieni
window.addEventListener("hashchange", function(){
	//Usunięcie znaku "#" i zastąpienie pustego #, #home
	prevHash = null
	const home = "home"
	const hash = window.location.hash.replace("#","") || "home"
	const readyHash = hash.split("/")
	//Rozdziela podstronę od podstrony podstrony
	//Dla wszystkich Div'ów z klasą page dodaję klasę is-hidden ukrywającą niepotrzebną zawartość
	document.querySelectorAll(".page").forEach(function($e){
		$e.classList.add("is-hidden")
	})
	//Sprawdzanie czy to podstrona czy podstrona podstrony i odkrywanie porządanej zawartości
	//Podstrona podstrony
	if (readyHash.length == 2){
		//Odkrywanie porządanej zawartości
		document.getElementById(readyHash[1]).classList.remove("is-hidden")
	};
	//Podstrona
	if (readyHash.length == 1){
		//Odkrywanie porządanej zawartości
		document.getElementById(readyHash[0]).classList.remove("is-hidden")
	};
});