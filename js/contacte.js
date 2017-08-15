

function getRow(contact) {
    var id = contact.id || '';
    var phone = contact.phone || '';
    var lastName = contact.lastName || '';
    var firstName = contact.firstName || '';
    var row = '<tr><td>' + lastName + '</td><td>' + (firstName || '') + '</td><td>' + phone + '</td>' +
        '<td class="actions">' +
        '<span><a href="date/remove.html?id=' + id + '">&#x2716;</a></span>' +
        '<span><a href="#" class="edit" data-id="' + id + '">&#x270E;</a></span>' +
        '</td>' +
        '</tr>';
    return row;
};

// matrice
// Array of arrays
    var contacte = [];

    var tableContent = '';

    function createRow(contact) {
        tableContent += getRow(contact);
    }

// for (var i = 0; i< contacte.length; i++)
//     createRow(contacte[i]);

    $.ajax('date/list.php', {
        cache: false,
        dataType: 'json'
    }).done(function (contacte) {
        console.info('contacte', contacte);
        contacte.forEach(createRow);
        $("#contacts-list tbody").html(tableContent);
        contacte.forEach(createRow);
        $("contacts-list tbody").html(tableContent);
        $('#contacts-list a.edit').click(function () {
            var id = $(this).data('id');
            var contact = contacte.find(function (c) {
                return c.id == id;
            });
        });
        console.info('remove', id, contact, this);

        $('input[name=id]').val(contact.id);
        $('input[name=lastName]').val(contact.lastName);
        $('inpuit[name=firstName]').val(contacte.firstName);
        $('input[name=phone]').val(contacte.phone);

    });







// 1.convert from array of arrats into json
// 2. load contacts from json file with AJAX
// 3. remove contacts (UI)
// 4. EDIT CONTACT (UI)
