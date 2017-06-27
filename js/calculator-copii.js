function tatiCatFacAdunareaNumerelor(a , b) {

    console.info("primul numar este " + a);
    console.info("al 2-lea numar este " + b);
    var max = b;
    var min = a;
    if(a > b) {
        console.info(a + " este mai mare ca " + b );
        max = a;
        min = b;
    }else {
        max = b;
        min = a;
    }
    console.info("numarul cel mai mare este" + max);
    console.info("vom numara " +  min  +  " degetele");

    for(min--; min >= 0 ; min--){
        // aici vrem sa numaram
        max++;
        console.info("avem " + max + " degetele, au ramas de numarat " + min + " degetele ")


    }


    return  max;

}
var rezultat = tatiCatFacAdunareaNumerelor(3 , 5);
console.info(rezultat);

var rezultat = tatiCatFacAdunareaNumerelor(7, 2 );
console.info(rezultat);
