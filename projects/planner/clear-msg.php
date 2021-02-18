<?php
    $file = $_POST["file"];
    $id = hash('sha256', $_POST["id"]);
    if( is_dir($id) === false )
    {
        mkdir($id);
    }
    $dataFile = fopen("{$id}/{$file}.txt", "w");
    // post back to planner.php
    //The url you wish to send the POST request to
    $url = 'https://thejyk.com/projects/planner/planner.php';
    
    //The data you want to send via POST
    $fields = [
        'id'      => $_POST["id"]
    ];
    
    //url-ify the data for the POST
    $fields_string = http_build_query($fields);
    
    //open connection
    $ch = curl_init();
    
    //set the url, number of POST vars, POST data
    curl_setopt($ch,CURLOPT_URL, $url);
    curl_setopt($ch,CURLOPT_POST, true);
    curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
    
    //So that curl_exec returns the contents of the cURL; rather than echoing it
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true); 
    
    //execute post
    $result = curl_exec($ch);
    echo $result;
?>