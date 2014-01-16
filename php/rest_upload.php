<?php
$serviceName = $_POST['serviceName'];
$provider = $_POST['provider'];
$providerUrl = $_POST['providerUrl'];
$descriptionUrl = $_POST['descriptionUrl'];
$description = $_POST['description'];

header('Content-Type: text/plain');

$res = '';
$con=mysqli_connect("31.22.4.32","feifeiha_public","p0OnMM722iqZ","feifeiha_ws_spotlight");

// Check connection
if (mysqli_connect_errno($con))
{
    $res = "Failed to connect to MySQL: " . mysqli_connect_error();
}

mysqli_query($con, "INSERT INTO restful_apis (service_name, provider, provider_url, description_url, description) VALUES(\"" . $serviceName . "\",\"" . $provider . "\", \"" . $providerUrl . "\", \"" . $descriptionUrl . "\", \"" . $description . "\")");

$res = 'OK';

mysqli_close($con);
echo $res;
?>
