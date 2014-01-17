<?php
$keywords = $_POST['keywords'];

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
$con = mysqli_connect("31.22.4.32","feifeiha_public","p0OnMM722iqZ","feifeiha_ws_spotlight");
$res = '{"status":"';

// Check connection
if (mysqli_connect_errno($con))
{
    $res = $res. '400", "data": "Failed to connect to MySQL: ' . mysqli_connect_error() . '"';
} else {
    // $keys = explode(" ", $keywords);
    $keys = explode(",", $keywords);
    $query = "SELECT * FROM restful_apis WHERE description LIKE '%%' ";

    foreach ($keys as $key) {
        $query = $query . "AND description LIKE '%" . $key . "%' ";
    }


    $result = mysqli_query($con, $query);
    $res = $res . '200", "data": [';
    while($row = mysqli_fetch_array($result))
    {
        $desc = $row['description'];
        // add highlight tags on keywords
        // foreach ($keys as $k) {
        //     $replace = '<span class"highlight-tag">' .$k. '</span>';
        //     $desc = str_replace('/(' . $k . ')/g', $replace, $desc);
        // }

        $res = $res . '{"serviceName":"' . $row['service_name'] .
            '", "provider":"' . $row['provider'] . '", "providerUrl":"' .
            $row['provider_url'] . '", "descriptionUrl":"' . $row['description_url'] .
            '", "description":"' . $desc . '"},';
    }
    $res = rtrim($res, ',');
    $res = $res . ']';

}
mysqli_close($con);
$res = $res . '}';
echo $res;
?>

