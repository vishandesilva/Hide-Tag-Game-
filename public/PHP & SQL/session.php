<?php
include "config.php";

if(isset($_POST['but_submit'])){

    $uname = mysqli_real_escape_string($con,$_POST['txt_uname']);
    $password = mysqli_real_escape_string($con,$_POST['txt_pwd']);

    if ($uname != "" && $password != ""){

        $sql_query = "select count(*) as cntUser from users where username='".$user."' and password='".$password."'";
        $result = mysqli_query($con,$sql_query);
        $row = mysqli_fetch_array($result);
        $count = $row['cntUser'];

        if($count > 0){
            $_SESSION['user'] = $uname;
            header('Location: index.html');
        }else if ($count < 0){
            echo "Invalid username and password";
        }

    }

}