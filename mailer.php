<?php
$name=$_POST["name"];
$mail=$_POST["mail"];
$msg=$_POST["msg"];


$headers = 'From: Emiliano Costanzo <no-reply@emilianocostanzo.com>';

echo $headers;

$sent=mail( 'emil.costanzo@gmail.com', 'Nuovo messaggio da '.$name.' - '.$mail, $msg, $headers);

if ( !$sent ) {
   http_response_code(400);
} else {
   http_response_code(200);
}
?>
