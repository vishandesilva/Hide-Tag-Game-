<?php
session_start() //Creates a new session, or if the user has an account, resumes it

//Host name
$host = "localhost"; 
//Login details
$user = "root"; 
$password = ""; 

//DB to store
$dbname = "account"; 

//new Connection with host connection - Username and pass

$con = mysqli_connect($host, $user, $password,$dbname);

//If no connection -> throw error
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}
?>