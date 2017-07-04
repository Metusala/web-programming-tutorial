

function getRow(firsName, lastName, phone) {
    //se poate asa!!
    if(phone == undefined){
        phone = '';
    }
    // sau asas!!
    if(typeof lastName == 'undefined'){
        lastName = '';
    }
    //sau asa cu linute sau fara!!
    // firsName = firsName || '---';
    firsName = firsName || '---';
    var row = '<tr> <td>' + lastName + '</td><td>' + (firsName || '') +  '</td><td>'+ phone +'</td></tr>';
    return row;


}
var gerRow2 = function( firsName, lastName, phone ){
    var row = '<tr> <td>' + lastName + '</td><td>' + firsName + '</td><td>'+ phone +'</td></tr>';
    return row;
    // identic ca susu, pot fi scrise la fel ca sus sau jos!!!!

};

// matrice
// Array of arrays
var contacte = [];

var tableContent = '';

function createRow (contact) {
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
}
// for (var i = 0; i< contacte.length; i++){
//     createRow(contacte[i]);

$.ajax('date/contacte.json').done(function (contacte){
    console.info('contacte' , contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);

});

console.info()










// 1.convert from array of arrats into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. EDIT CONTACT (UI)
