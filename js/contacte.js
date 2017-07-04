

function getRow(firsName, lastName, phone) {
    //se poate asa!!
    if(phone == undefined){
        phone = '';
    };
    // sau asas!!
    if(typeof lastName == 'undefined'){
        lastName = '';
    };
    //sau asa cu linute sau fara!!
    // firsName = firsName || '---';
    firsName = firsName || '---';
    var row = '<tr> <td>' + lastName + '</td><td>' + (firsName || '') +  '</td><td>'+ phone +'</td></tr>';
    return row;


}
var gerRow = function( firsName, lastName, phone ){
    var row = '<tr> <td>' + lastName + '</td><td>' + firsName + '</td><td>'+ phone +'</td></tr>';
    return row;
    // identic ca susu, pot fi scrise la fel ca sus sau jos!!!!

};

// matrice
// Array of arrays
var contacte = [
    {firstName:'Nicolae', lastName: 'M', phone: '01' },
    {firstName:'Cristian', lastName: 'S', phone:'02'  },
    {firstName:'Silviu', lastName:  'R', phone:  '03'},
    {firstName: 'Ionut', lastName:  'A',  phone: '04'},
    {firstName: 'Andrei'  },
    {lastName: 'Basescu'}


];


var tableContent = '';
for (var i = 0; i< contacte.length; i++){
var contact =contacte [i];
    tableContent += getRow (contact.firstName, contact.lastName, contact.phone);
}
$("#contacts-list tbody").html(tableContent);

// 1.convert from array of arrats into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. EDIT CONTACT (UI)
