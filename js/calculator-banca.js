//primul script
console.info("salut");
//declaration
function getInfo(name) {
    var msg = "Hello" + name + "," +
        "welcome at FastTrackIT.";
    return msg;
}
//store result of call to function
var info=getInfo("Cristian");
console.info(info);

function adunaNumerele(a,b) {
    console.info("primul numar este "+a);
    console.info("al doile numar este "+b);
    var rezultat = a + b;
    rezultat = rezultat * 0.9;
    return rezultat;

}


var calculat = adunaNumerele(4, 3);
console.info (calculat);