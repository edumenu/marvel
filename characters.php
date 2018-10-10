<!DOCTYPE html>
<html lang="zxx">
<head>
	<meta charset="utf-8">
	<title>Marvel</title>
	<meta content="" name="description">
	<meta content="width=device-width, initial-scale=1" name="viewport">
	<meta content="width=device-width" name="viewport">
	<meta content="IE=edge" http-equiv="X-UA-Compatible">
	<link href="css/bootstrap-light.css" rel="stylesheet">
	<link id="pagestyle" href="css/theme-light.css" rel="stylesheet">
    <!-- Arvo Font -->
    <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
    <!-- ICON NEEDS FONT AWESOME FOR CHEVRON UP ICON -->
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"></script>
</head>

<body data-offset="50" data-spy="scroll" data-target=".navbar" class="dark-theme">

   <!-- Return to Top -->
   <a href="javascript:" id="return-to-top"><i class="icon-chevron-up"></i></a>
    <!-- Top navigation -->
	<nav class="navbar navbar-fixed-top shadow" id="js-nav" style="background-color: rgb(204, 0, 0, 0.8);">
		<div class="container-fluid">
		<!-- Likes -->
		 <li class="pull-left" style="color: white;">
         <a href="#"><img src="img/marvel.png" width="60em" class="img-responsive wow fadeInRight"/></a>
         </li>
			<div class="navbar-header">
				<button class="navbar-toggle" data-target="#myNavbar" data-toggle="collapse" type="button">
					<span class="icon-bar"></span> 
					<span class="icon-bar"></span> 
					<span class="icon-bar"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse navbar-right" id="myNavbar">
				<ul class="nav navbar-nav">
					<li><a href="index.php" class="wow bounceInDown" style="color: #d9d9d9;">Home</a></li>
					<li><a href="#character" class="wow fadeInRight" data-wow-delay="1s" style="color: #d9d9d9;">Characters</a></li>
					<li><a href="comics.php" class="wow fadeInRight" data-wow-delay="1s" style="color: #d9d9d9;">Comics</a></li>
					<li><a href="creators.php" class="wow fadeInRight" data-wow-delay="1s" style="color: #d9d9d9;">Creators</a></li>
				</ul>
			</div>
		</div>
    </nav>
     <!-- /Top navigation -->
		
<!--Characters-->
<section class="character white-color" id="character">
    <div class="container">
     <h3 class="section-heading wow bounceInDown" style="font-family: 'Arvo', serif; color: #66CC00;">Characters</h3>

     <!-- Pagination -->
     <div class="text-center">
        <ul class="pagination-lg " id="pagination" style="background-color: #66CC00"></ul>
     </div>

     <!-- Search field -->
     <form>
     <input id="searchValue" type="text" name="search" placeholder="Search..">
     <button type="button" class=" wow zoomIn btn btn-success btn-lg" id="searchCharac" data-wow-delay="2s" style="margin: 10 auto; background-color: #66CC00; border-radius: 15px; outline: none;">Search</button>
    <button type="button" class=" wow zoomIn btn btn-success btn-lg" id="allCharac" data-wow-delay="2s" style="margin: 10 auto; background-color: #66CC00; border-radius: 15px; outline: none;">All Characters</button>
     </form>
        <div class="row">
          <div class="rowImage">
              <div class="columnImage">
               <div class="container1">
                <a href="javascript:void(0)" class="info" rel="">
                <img class="wow fadeInLeft image1" data-wow-delay="1s" id="firstImage" src="" style="width:100%">
                 <div class="middle1">
                  <div class="text1" id="firstImageTxt"></div>
                 </div>
                 </a>
                </div>
                <div class="container1">
                <a href="javascript:void(0)" class="info" rel="">
                <img class="wow fadeInLeft image1" data-wow-delay="1s" id="secondImage" src="" style="width:100%">
                <div class="middle1">
                  <div class="text1" id="secondImageTxt"></div>
                 </div>
                 </a>
                </div>
                <div class="container1">
                 <a href="javascript:void(0)" class="info" rel="">
                <img class="wow fadeInLeft image1" data-wow-delay="1s" id="thirdImage" src="" style="width:100%">
                 <div class="middle1">
                  <div class="text1" id="thirdImageTxt"></div>
                 </div>
                 </a>
                </div>
              </div>
              <div class="columnImage">
               <div class="container1">
                <a href="javascript:void(0)" class="info" rel="">
                <img class="wow fadeInLeft image1" data-wow-delay="1s" id="fourthImage" src="" style="width:100%">
                <div class="middle1">
                  <div class="text1" id="fourthImageTxt"></div>
                 </div>
                 </a>
                </div>    
                <div class="container1">
                 <a href="javascript:void(0)" class="info" rel="">
                 <img class="wow fadeInLeft image1" data-wow-delay="1s" id="fifthImage" src="" style="width:100%">
                 <div class="middle1">
                  <div class="text1" id="fifthImageTxt"></div>
                 </div>
                 </a>
                </div>
                <div class="container1">
                  <a href="javascript:void(0)" class="info" rel="">
                <img class="wow fadeInLeft image1" data-wow-delay="1s" id="sixthImage" src="" style="width:100%">
                 <div class="middle1">
                  <div class="text1" id="sixthImageTxt"></div>
                 </div>
                 </a>
                </div>
              </div>
            <div class="columnImage">
               <div class="container1">
                <a href="javascript:void(0)" class="info" rel="">
                 <img class="wow fadeInLeft image1" data-wow-delay="1s" id="seventhImage" src="" style="width:100%">
                 <div class="middle1">
                  <div class="text1" id="seventhImageTxt"></div>
                 </div>
                  </a>
                </div>
                <div class="container1">
                 <a href="javascript:void(0)" class="info" rel="">
                 <img class="wow fadeInLeft image1" data-wow-delay="1s" id="eighthImage" src="" style="width:100%">
                 <div class="middle1">
                  <div class="text1" id="eighthImageTxt"></div>
                 </div>
                 </a>
                </div>
                <div class="container1">
                <a href="javascript:void(0)" class="info" rel="">
                 <img class="wow fadeInLeft image1" data-wow-delay="1s" id="ninethImage" src="" style="width:100%">
                 <div class="middle1">
                  <div class="text1" id="ninethImageTxt"></div>
                 </div>
                 </a>
                </div>
              </div>
            <div class="columnImage">
               <div class="container1">
                <a href="javascript:void(0)" class="info" rel="">
                <img class="wow fadeInLeft image1" data-wow-delay="1s" id="tenthImage" src="" style="width:100%">
                <div class="middle1">
                  <div class="text1" id="tenthImageTxt"></div>
                 </div>
                 </a>
                </div>
                <div class="container1">
                 <a href="javascript:void(0)" class="info" rel="">
                <img class="wow fadeInLeft image1" data-wow-delay="1s" id="eleventhImage" src="" style="width:100%">
                <div class="middle1">
                  <div class="text1" id="eleventhImageTxt"></div>
                 </div>
                 </a> 
                </div>
                <div class="container1">
                 <a href="javascript:void(0)" class="info" rel="">
                <img class="wow fadeInLeft image1" data-wow-delay="1s" id="twelfthImage" src="" style="width:100%">
                <div class="middle1">
                  <div class="text1" id="twelfthImageTxt"></div>
                 </div>
                 </a>
                </div>
            </div>  
          </div>  
        </div><br>
        <div id="errorDiv" class="" role="alert"><h3 id="error"></h3></div>
        </div> 

    <div class="loader"><!-- Place at bottom of page --></div>    

</section>
<!-- /Characters -->

<!-- Character Information -->
<section class="moreInfo bg-primary collapse" id="moreInfo">
<div class="card">
  <img class="wow fadeInLeft" data-wow-delay="1s" id="moreInfoImage" src="" style="width:100%">
  <div class="containerCard">
    <h3 class="text-center" id="moreInfoHeader"><b></b></h3> 
    <p><strong>Description: </strong><span id="infoDescription"></span></p> 
    <p><strong>Number of Comic Appearances: </strong><span id="infoAppear"></span></p> 
    <p><strong>Events:</strong> <span id="infoEvent"></span></p> 
    <p><strong>Series:</strong> <span id="infoSeries"></span></p> 
    <p><strong>Stories:</strong> <span id="infoStories"></span></p> 
    <p><strong>Detail link:</strong> <a id="detailLink" href="" target="_blank"></a></p> 
    <p><strong>Wiki link:</strong> <a id="wikiLink" href="" target="_blank"></a></p> 
    <p><strong>Comic link:</strong> <a id="comicLink" href="" target="_blank"></a></p> 
    <p><font size="2" id="infoDateMod">This is some text!</font></p> 
  </div>
</div> 
</section>
<!-- /Character Information -->
	
<!-- Footer -->
	<div class="section section-min">
		<footer class="footer">
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-md-push-4 text-center">
						<div class="social">
							<ul>
								<li><a href="https://www.facebook.com/richard.l.runion" target="_blank"><span class="ti-facebook"></span></a></li>
								<li><a href="https://twitter.com/" target="_blank"><span class="ti-twitter-alt"></span></a></li>
								<li><a href="https://www.instagram.com/lee_runion" target="_blank"><span class="ti-instagram"></span></a></li>
								<li><a href="http://linkedin.com/" target="_blank"><span class="ti-linkedin"></span></a></li>
								<li><a href="http://youtube.com/" target="_blank"><span class="ti-youtube"></span></a></li>
							</ul>
						</div>
					</div>
					
				</div>
			</div>
		</footer>
	</div>
<!-- End of footer -->
    
    
	<script src="js/vendor/wow.js"></script>
	<script src="js/vendor/jquery-1.11.2.min.js"></script>
	<script src="js/vendor/swiper.min.js"></script>
	<script src="js/vendor/bootstrap.min.js"></script>
	<script src="js/vendor/jquery.countTo.js"></script>
	<script src="js/vendor/jquery.inview.js"></script>
	<script src="js/vendor/jquery.filterizr.js"></script>
	<script src="js/main.js"></script>
    <!-- Toastr.js -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
	<!-- Scripts -->
<!--	<script src="scripts/scripts.js"></script>-->
	<script src="js/jquery.twbsPagination.js" type="text/javascript"></script>
	<script src="scripts/characterPage.js" type="text/javascript"></script>
	<script src="scripts/functions.js" type="text/javascript"></script>
</body>

</html>