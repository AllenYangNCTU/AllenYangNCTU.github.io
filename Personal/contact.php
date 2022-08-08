<?php
session_start();
if (!isset($_SESSION['user']) && $_SESSION['user'] = 'admin') {
    header("location:./login.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Hejie Yang's Portfolio</title>
    <meta content="" name="description">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="assets/img/favicon.png" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <!-- Template Main CSS File -->
    <link href="assets/css/style.css" rel="stylesheet">
    <style>
        h4>a {
            color: white;
        }

        .icon-box {
            background-color: rgba(218, 223, 225, 0.5);
            margin-bottom: 20px;
            padding: 5%;
        }

        .section-title>button {
            /* position: -webkit-sticky; */
            position: sticky;
            top: 0;
        }
    </style>

</head>

<body>






    <?php
    // session_start();
    date_default_timezone_set('Asia/Taipei');

    $dsn = "mysql:host=localhost;charset=utf8;dbname=portfolio";
    $pdo = new PDO($dsn, 'root', 'root');
    ?>





    <!-- <section id="management" class="services"> -->
    <!-- <div class="show_item"> -->

    <div class="container">
        <div class="section-title">

            <h2>Contact</h2>
            <p>Contact management</p>
            <button type="button" class="btn btn-warning" onclick="location.href='logout.php'">登出</button>
            <button type="button" class="btn btn-success" onclick="location.href='index.php'">回首頁</button>
        </div>

        <div class="row">
            <?php
            $sql = "select * from contact";
            $contact = $pdo->query($sql)->fetchAll(PDO::FETCH_ASSOC);
            foreach ($contact as $key => $data) {
            ?>
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                    <div class="icon-box">
                        <!-- <div class="icon"><i class="bx bx-file"></i></div> -->
                        <h4><a href=""><?php print($contact[$key]['subject']); ?></a></h4>
                        <h4><a href=""><?php print($contact[$key]['name']); ?></a></h4>
                        <h4><a href="<?php print($contact[$key]['email']); ?>"><?php print($contact[$key]['email']); ?></a></h4>
                        <h4><a href=""><?php print($contact[$key]['message']); ?></a></h4>
                        <h4><a href=""><?php print($contact[$key]['send_date']); ?></a></h4>
                        <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        <?php
                        $id = $contact[$key]['id'];
                        ?>
                        <button type="button" class="btn btn-danger" onclick="del(<?= $id ?>)">Delete</button>
                        <script>
                            function del(id) {
                                $.post("./delete_contact.php", {
                                    id: id
                                }, (res) => {
                                    if (res == 1) {
                                        window.location.reload();
                                    }
                                })
                            }
                        </script>
                    </div>
                </div>
            <?php
            }
            ?>
        </div>
    </div>
    <!-- </div> -->
    <!-- End Services Section -->

    <div class="credits">
        Copyright © 2022 He-Jie Yang. All rights reserved.
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
    <script src="assets/vendor/php-email-form/validate.js"></script>

    <!-- Template Main JS File -->
    <script src="assets/js/main.js"></script>

</body>

</html>