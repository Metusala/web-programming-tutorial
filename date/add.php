<html>
<head>
    <meta http-equiv="refresh" content="0; url=../contacte.html" />
</head>
<body>
<?php
$contentString = file_get_contents("contacte.json");
$contacte = json_decode($contentString, true);

$newPerson = array(
     "id" => 5,//
    "firstName" => $_GET["firstName"],
    "lastName" => $_GET["lastName"],
    "phone" =>$_GET["phone"]
);
 $contacte[] =$newPerson;
 $contentString = json_encode($contacte, true);
file_put_contents("contacte.json", $contentString);

 ?>

#contact remove (<div id="contact-id"></div>)

<script>
    var parameters = location.search.substr(1);

    var paramArray = parameters.split('&');

    console.info(paramArray);

    document.getElementById('contact-id').innerHTML = paramArray.join('; <br>') + ';';
</script>
</body>
</html>


