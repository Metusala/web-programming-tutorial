

function getRow(contact) {
    var id = contact.id || '';
    var phone = contact.phone|| '';
    var lastName = contact.lastName || '';
    var firstName = contact.firstName ||  '';
    var row = '<tr><td>' + lastName + '</td><td>' + (firstName || '') +  '</td><td>'+ phone +'</td>' +
        '<td class="actions">' +
        '<span>[<a href="date/remove.html?id='+ id +'">x</a>]</td>' +''

        '</tr>';
    return row;





}

// matrice
// Array of arrays
var contacte = [];

var tableContent = '';

function createRow (contact) {
    tableContent += getRow(contact);
}
// for (var i = 0; i< contacte.length; i++){
//     createRow(contacte[i]);

$.ajax('date/contacte.json').done(function (contacte){
    console.info('contacte' , contacte);
    contacte.forEach(createRow);
    $("#contacts-list tbody").html(tableContent);

});

console.info();


// 1.convert from array of arrats into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. EDIT CONTACT (UI)
