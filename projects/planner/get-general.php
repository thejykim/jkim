<?php
    $id = hash('sha256', $_POST["id"]);
    if( is_dir($id) === false )
    {
        mkdir($id);
    }
    echo file_get_contents("{$id}/general.txt");
?>