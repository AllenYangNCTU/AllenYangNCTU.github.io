<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="assets/css/style.css" rel="stylesheet">
</head>

<body>




  <?php
  $dsn = "mysql:host=localhost;charset=utf8;dbname=portfolio";
  $pdo = new PDO($dsn, "root", "root");
  // $dsn="mysql:host=localhost;charset=utf8;dbname=s1110222";
  // $pdo=new PDO($dsn,'s1110222','s1110222');
  // print($_POST['name']);
  // print($_POST['email']);
  // print($_POST['subject']);
  // print($_POST['message']);
  // print_r($_POST);
  // print("seperate");
  // print($_GET['name']);
  // print($_GET['email']);
  // print($_GET['subject']);
  // print($_GET['message']);
  // print_r($_GET);
  date_default_timezone_set('Asia/Taipei');
  $date = date("Y-m-d H:i:s");
  $pdo->exec("insert into contact (`name`,`email`,`subject`,`message`,`send_date`) values ('{$_POST["name"]}','{$_POST["email"]}','{$_POST["subject"]}','{$_POST["message"]}','{$date}')");
  // $pdo->exec("insert into contact (`name`,`email`,`subject`,`message`) values ('{$_GET["name"]}','{$_GET["email"]}','{$_GET["subject"]}','{$_GET["message"]}')");
  // header("location:../index.html");
  // print("success!");
  ?>
  <!-- <div class="sent-message">Your message has been sent. Thank you!</div> -->
  <?php







  $to = "xx276f@gmail.com";
  $subject = $_POST["subject"];
  $message = $_POST["message"];
  $from = $_POST["email"];
  // $headers = "From:" . $from;
  $headers = "From:" . $_POST["name"];
  mail($to, $subject, $message, $headers);
  // echo "Mail Sent.";






  // Replace contact@example.com with your real receiving email address
  // $receiving_email_address = 'contact@example.com';

  // if( file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php' )) {
  //   include( $php_email_form );
  // } else {
  //   die( 'Unable to load the "PHP Email Form" Library!');
  // }

  // $contact = new PHP_Email_Form;
  // $contact->ajax = true;

  // $contact->to = $receiving_email_address;
  // $contact->from_name = $_POST['name'];
  // $contact->from_email = $_POST['email'];
  // $contact->subject = $_POST['subject'];

  // // Uncomment below code if you want to use SMTP to send emails. You need to enter your correct SMTP credentials

  // $contact->smtp = array(
  //   'host' => 'example.com',
  //   'username' => 'example',
  //   'password' => 'pass',
  //   'port' => '587'
  // );


  // $contact->add_message( $_POST['name'], 'From');
  // $contact->add_message( $_POST['email'], 'Email');
  // $contact->add_message( $_POST['message'], 'Message', 10);

  // echo $contact->send();
  ?>
</body>

</html>