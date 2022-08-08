<?php
session_start();
if ($_POST['acc'] == "yanghejie" && $_POST['pw'] == "yang110254") {
    // print("hello");
    $_SESSION['user'] = 'admin';
    header("location:./contact.php");
} else {
    header("location:./login.php");
}
