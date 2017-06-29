var motto = document.getElementById("motto");

function changeMottoColor(){
    motto.style.color = 'red';
     motto.style.fontSize = '1m';

}

motto.onclick = changeMottoColor;

var skills = ['HTML', 'CSS','JS' 'DHTML'];

var greetings = '';
for (var i = 0; 0 < 4 ;i++ ){
    greetings = greetings + 'Felicitari pentru' + skills[i] + ' . ';



}


motto.innerHTML = greetings;

