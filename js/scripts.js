window.onload = function() {

   // var url = 'https://api.icndb.com/jokes/random'; //zmieniłem na https

    var button = document.getElementById('get-joke');
    button.addEventListener('click', function() {
        getJoke();
    });
	
	/*dowcip wygenerowany przy ladowaniu strony*/
	getJoke();

    var paragraph = document.getElementById('joke');

    function getJoke() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.icndb.com/jokes/random');
        xhr.addEventListener('load', function() {
            var response = JSON.parse(xhr.response);
            paragraph.innerHTML = response.value.joke;
        });
        xhr.send();
    }
	

}