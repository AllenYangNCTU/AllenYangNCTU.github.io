<?php
date_default_timezone_set('Asia/Taipei');
$dsn = "mysql:host=localhost;charset=utf8;dbname=portfolio";
$pdo = new PDO($dsn, 'root', 'root');
// $sql = "delete from contact where id = {$_GET['id']}";
$sql = "delete from contact where id = {$_POST['id']}";
$test = $pdo->exec($sql);
print($test);
