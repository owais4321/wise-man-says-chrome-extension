
function get_piece_of_advice() {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
         a=JSON.parse(this.responseText);
         //alert(JSON.stringify(a));
         document.getElementById('h1').innerHTML=JSON.stringify(a['slip']['advice'])
	 }
    };
    xhttp.open("GET", "https://api.adviceslip.com/advice", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
    xhttp.send();
}
get_piece_of_advice();