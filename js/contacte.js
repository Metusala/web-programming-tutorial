

function getRow(firsName, lastName, phone) {
    var row = '<tr> <td>' + lastName + '</td><td>' + firsName + '</td><td>'+ phone +'</td></tr>';
    return row;


}

var contacte = [
        ['Nicolae', 'M', '01'],
        ['Cristian','S', '02'],
        ['Silviu',  'R',  '03'],
        ['Ionut',   'A',   '04']


];
var tableContent = '';
for (var i = 0; i< contacte.length; i++){
var contact =contacte [i];
    tableContent += getRow (contact[0], contact[1], contact[2]);
}
$("#contacts-list tbody").html(tableContent);

