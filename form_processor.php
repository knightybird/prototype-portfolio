<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link type="text/css" rel="stylesheet" href="css/style.css" />
</head>
<body>
<?php 
include('config.php');
?>
<?php
$firstName      = "";
$lastName       = "";
$userEmail  = "";
$userProfile         = "";
$userComment ="";

if (isset ($_POST['firstname']) == false){
    die("<p>Stop processing. firstname does not exist</p>");
}
// if (isset ($_POST['lastname']) == false){
//     die("<p>Stop processing. lastname does not exist</p>");
}
if (isset ($_POST['userEmail']) == false){
    die("<p>Stop processing. studentNumber does not exist</p>");

if (isset ($_POST['userComment']) == false){
    die("<p>Stop processing. comment does not exist, please leave a comment")
}

$firstName = ucfirst(strtolower(trim($_POST['firstname'])));
$lastName = ucfirst(strtolower(trim($_POST['lastname'])));
$userEmail = strtolower(trim($_POST['email']));
$userProfile = $_POST['profile'];
$userComment = $_POST['comment'];

if ($userProfile == "guest") {
    $title = "Guest ";
} else if ($userProfile == "student"){
    $title = "Student ";
} else if ($userProfile == "employer"){
    $title = "Sir ";
} else if ($userProfile == "hacker"){
    $title = "Hacker ";
} else {
    echo "<p>invalid user profile</p><a href='index.html' style='color: white'> Try the form again...</a>";
    die();
?>

<div id="processing_output">
    <p>Please fill in the form</p>
    <a href="index.html" style="color:white">Try the form again...</a>
</div>
</body>
</html>