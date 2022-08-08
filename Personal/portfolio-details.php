<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Portfolio Details - Personal Bootstrap Template</title>
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
    td {
      border: 1px solid white
    }

    #doc li {
      /* border: 1px solid white; */
      list-style-type: disc;
    }
  </style>
</head>

<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <main id="main">

    <!-- ======= Portfolio Details ======= -->
    <div id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row">

          <div class="col-lg-8">
            <!-- <h2 class="portfolio-title">This is an example of portfolio detail</h2> -->
            <h2 class="portfolio-title">Portfolio details</h2>

            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <!-- <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-1.jpg" alt="">
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-2.jpg" alt="">
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio/portfolio-details-3.jpg" alt="">
                </div> -->
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-1.jpg" alt="">
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-2.jpg" alt="">
                </div>

                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-3.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-4.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-5.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-6.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-7.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-8.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-9.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-10.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-11.jpg" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="assets/img/portfolio_<?= $_GET['project'] ?>/portfolio-11.jpg" alt="">
                </div>

              </div>
              <div class="swiper-pagination"></div>
            </div>

          </div>

          <div class="col-lg-4 portfolio-info">
            <h3>Project information</h3>
            <ul>
              <!-- <li><strong>Category</strong>: Web design</li> -->
              <li><strong>Category</strong>: <?= $_GET['category'] ?></li>
              <li><strong>Project</strong>: <?= $_GET['project'] ?></li>
              <!-- <li><strong>Client</strong>: ASU Company</li> -->
              <li><strong>Client</strong>: <?= $_GET['client'] ?></li>
              <!-- <li><strong>Project date</strong>: 01 March, 2020</li> -->
              <li><strong>Project date</strong>: <?= $_GET['date'] ?></li>
              <!-- <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li> -->
              <li><strong>Project URL</strong>: <a href="<?= $_GET['link_github'] ?>" target="_blank"><i class="fa-brands fa-github"></i></a></li>
              <li><strong>Project live demo</strong>: <a href="<?= $_GET['link_demo'] ?>"><i class="fa-solid fa-laptop"></i></a></li>
            </ul>

            <p id="information">

            </p>
            <script src="./assets/js/information.js"></script>
            <script>
              $(document).ready(function() {
                const information = $("#information");
                information.append(Electoral_System);
              });
            </script>

          </div>

        </div>

      </div>
    </div><!-- End Portfolio Details -->

  </main><!-- End #main -->

  <div class="credits">
    <!-- All the links in the footer should remain intact. -->
    <!-- You can delete the links only if you purchased the pro version. -->
    <!-- Licensing information: https://bootstrapmade.com/license/ -->
    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/personal-free-resume-bootstrap-template/ -->
    <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
    Copyright © 2022 He-Jie Yang. All rights reserved.
  </div>

  <!-- Vendor JS Files -->
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