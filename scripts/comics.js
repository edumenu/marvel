$body = $("body");

$(document).on({
   ajaxStart: function() { $body.addClass("loading");    },
   ajaxStop: function() { $body.removeClass("loading"); }    
});


$(document).ready(function(){
        //Hide "All Characters" button
        $("#allComics").hide();
        //Id for the images on the character's page  
        var imageId = new Array("#firstImage", "#secondImage", "#thirdImage", "#fourthImage", "#fifthImage", "#sixthImage", "#seventhImage", "#eighthImage", "#ninethImage", "#tenthImage", "#eleventhImage", "#twelfthImage");
        //Id for the image text  
        var imageTextId = new Array("#firstImageTxt", "#secondImageTxt", "#thirdImageTxt", "#fourthImageTxt", "#fifthImageTxt", "#sixthImageTxt", "#seventhImageTxt", "#eighthImageTxt", "#ninethImageTxt", "#tenthImageTxt", "#eleventhImageTxt", "#twelfthImageTxt");
       //path/extension(jpg)/imageFile (full image file) array
        var path = new Array();
        var extension = new Array();
        var imageFile = new Array();
        //Creator full name array
        var imageTxt = new Array();
        //Marvel sizes for its images  
        var size1 = "/portrait_uncanny.";
        var size2 = "/standard_fantastic.";
        //Hide "All Characters" button
        $("#allComics").hide();
    
        //Get request to the marvel API for a list of characters 
        $.get("http://gateway.marvel.com/v1/public/comics?&ts=" + timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"&limit=100", function(data, status){ 
        //Number of data in the object
        var imageCounter = Object.keys(data.data.results).length;
        //Number of images for pagination number display
        var numPage = Math.ceil(imageCounter/12);
            
         //Initializing the pagination
        window.pagObj = $('#pagination').twbsPagination({
            totalPages: numPage,
            visiblePages: (numPage - 2),
            onPageClick: function (event, page) {
                for(var i = 0; i < 12; i++){
                 //Checking for the last image
                if((i + checkPage(page)) < imageCounter){
                 path[i] = JSON.stringify(data.data.results[i + checkPage(page)].thumbnail.path);
                 extension[i] = JSON.stringify(data.data.results[i + checkPage(page)].thumbnail.extension);
                 //Combining the image file with its file extension    
                 imageFile[i] = path[i] + size2 + extension[i];
                 imageTxt[i] = data.data.results[i + checkPage(page)].title;
                 //Obtaining the character Id
                 comicId = data.data.results[i + checkPage(page)].id;    
                 addImage(imageId[i],imageFile[i], comicId);
                 //Check if the image text is empty
                 if(imageTxt[i ] == ""){
                    //Add N/A if the image text is empty 
                    addImageText(imageTextId[i],"N/A");
                   }else{
                    addImageText(imageTextId[i],imageTxt[i]);    
                   } 
                  }else{
                    //Hide all images after last image in the container
                    hideImage(imageId[i]);
                  }
                }    
            }
         });               
     });
    
    //Submitting the searched character
    $("#searchComics").click(function(){
        //Value in the search bar
        var searchValue = $("#searchValue").val();
        //Destroy the pagination object to create a new one 
        $("#pagination").twbsPagination('destroy');
        
        //Get request to the marvel API for a list of characters 
        $.get("http://gateway.marvel.com/v1/public/comics?titleStartsWith="+ searchValue +"&ts=" + timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"", function(data, status){
        //Number of data in the object
        var imageCounter = Object.keys(data.data.results).length;
        //Number of images for pagination number display
        var numPage = Math.ceil(imageCounter/12); 
        
        if(imageCounter == 0){
            for(var x = 0; x < 12; x++){
              hideImage(imageId[x]);    
            }
           //Display error message    
           $("#error").text("Character does not exist. Please try again.");
           $("#errorDiv").addClass("alert alert-danger text-center");
            //Show all characters button
           $("#allComics").show();
        }else{    
            
        //Initializing the pagination
        $('#pagination').twbsPagination({
            totalPages: numPage,
            visiblePages: (numPage - 2),
            onPageClick: function (event, page) {
                for(var i = 0; i < 12; i++){
                 //Checking for the last image
                if((i + checkPage(page)) < imageCounter){
                 path[i] = JSON.stringify(data.data.results[i + checkPage(page)].thumbnail.path);
                 extension[i] = JSON.stringify(data.data.results[i + checkPage(page)].thumbnail.extension);
                 //Combining the image file with its file extension    
                 imageFile[i] = path[i] + size2 + extension[i];
                 imageTxt[i] = data.data.results[i + checkPage(page)].title;
                //Obtaining the character Id
                 comicId = data.data.results[i + checkPage(page)].id;    
                 addImage(imageId[i],imageFile[i], comicId);
                 //Check if the image text is empty
                 if(imageTxt[i ] == ""){
                    //Add N/A if the image text is empty 
                    addImageText(imageTextId[i],"N/A");
                   }else{
                    addImageText(imageTextId[i],imageTxt[i]);    
                   }
                  }else{
                    //Hide all images after last image in the container
                    hideImage(imageId[i]);
                  }
               }    
            }
         });
        
        //Show all characters button
        $("#allComics").show();
        //Hide error message    
        $("#error").text("");
        //Hide bootstrap div
        $("#errorDiv").removeClass("alert alert-danger text-center");    
            
        }    
            
       });  
            
    });
    
    //Refresh page when all button is clicked
    $("#allComics").click(function(){
      location.reload();  
    });
    
   //Refresh page when all button is clicked
    $(".info").click(function(){
      //Get character Id
      comicClickId = $(this).attr('rel');
      //Clear event list upon click
      //$("#infoEvent").text("");
      eraseText();
        
      //Get character based on the clicked image using their Id
      $.get("http://gateway.marvel.com/v1/public/comics/"+ comicClickId +"?ts=" + timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"", function(data, status){   
       //Image path      
       moreInfoPath = JSON.stringify(data.data.results[0].thumbnail.path);
       moreInfoExtension1 = JSON.stringify(data.data.results[0].thumbnail.extension);
       //Combining the image file with its file extension    
       moreInfoImageFile = moreInfoPath + size2 + moreInfoExtension1;
      //Character info      
       comicName = data.data.results[0].title;   
       comicDescript = data.data.results[0].description;
       //Comic Stories      
       comicStories = printSome(data.data.results[0].stories.items, "#infoStories");
        //Comic Stories      
       comicSeries = data.data.results[0].series.name;
        //Comic Format      
       comicFormat = data.data.results[0].format;
        //Comic Issue number       
       comicIssueNum = data.data.results[0].issueNumber;
        //Comic creator     
       comicCreator = printSome(data.data.results[0].creators.items, "#infoCreator");
       //Number of comics      
       comicPageCount = data.data.results[0].pageCount;
       //Comic isbn
       comicIsbn = data.data.results[0].isbn;
       //Comic price
       comicPrice = data.data.results[0].prices[0].price;
       //Detail link
       urlNum = Object.keys(data.data.results[0].urls).length;      
        if(urlNum >= 1){  
       //Comic Detail URL
       comicUrl1 = data.data.results[0].urls[0].url;
       addContent("#detailLink", emptyContentCheck(comicUrl1));        
        }  
       //Date modified
       comicModDate = data.data.results[0].modified;      
          
       //Add the content to the info section 
       addImage("#moreInfoImage",moreInfoImageFile,0);          
       addContent("#moreInfoHeader",emptyContentCheck(comicName));
       addContent("#infoDescription",emptyContentCheck(comicDescript));
       //addContent("#infoStories",emptyContentCheck(comicStories));
       addContent("#infoSeries",emptyContentCheck(comicSeries));
       addContent("#infoFormat",emptyContentCheck(comicFormat));
       addContent("#infoIssueNum",emptyContentCheck(comicIssueNum));
       //addContent("#infoCreator",emptyContentCheck(comicCreator));
       addContent("#infoPageCount",emptyContentCheck(comicPageCount));
       addContent("#infoIsbn",emptyContentCheck(comicIsbn));
       addContent("#infoPrice", emptyContentCheck(comicPrice));
       addContent("#infoDateMod", emptyContentCheck(comicModDate.slice(0, 10)));
            
       });    
        
      //Showing the collapsible info by dropping down the div section    
      $('#moreInfo').show();
      //Execute the scroll function after 2 seconds of showing the collapse    
      setTimeout(scroll(), 2000);   
    });
    
   //'Function to scroll user to the more info section
   function scroll(){
     //Scrolls to the bottom of the page within 2 seconds    
//     $('html,body').animate({
//          scrollTop: $("#moreInfo").offset().top
//      }, 2000);
     $("html, body").animate({ scrollTop: $("#moreInfo").offset().top }, 1000);   
    }
    
    if(window.location.href.indexOf("=") > -1){
      var equalPos = window.location.href.indexOf("=");
      var dropId = window.location.href.slice(equalPos + 1,72);
      //Clear event list upon click
      eraseText();
        
      //Get character based on the clicked image using their Id
      $.get("http://gateway.marvel.com/v1/public/comics/"+ dropId +"?ts=" + timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"", function(data, status){   
       //Image path      
       moreInfoPath = JSON.stringify(data.data.results[0].thumbnail.path);
       moreInfoExtension1 = JSON.stringify(data.data.results[0].thumbnail.extension);
       //Combining the image file with its file extension    
       moreInfoImageFile = moreInfoPath + size2 + moreInfoExtension1;
      //Character info      
       comicName = data.data.results[0].title;   
       comicDescript = data.data.results[0].description;
       //Comic Stories      
       comicStories = printSome(data.data.results[0].stories.items, "#infoStories");
        //Comic Stories      
       comicSeries = data.data.results[0].series.name;
        //Comic Format      
       comicFormat = data.data.results[0].format;
        //Comic Issue number       
       comicIssueNum = data.data.results[0].issueNumber;
        //Comic creator     
       comicCreator = printSome(data.data.results[0].creators.items, "#infoCreator");
       //Number of comics      
       comicPageCount = data.data.results[0].pageCount;
       //Comic isbn
       comicIsbn = data.data.results[0].isbn;
       //Comic price
       comicPrice = data.data.results[0].prices[0].price;
       //Detail link
       urlNum = Object.keys(data.data.results[0].urls).length;      
        if(urlNum >= 1){  
       //Comic Detail URL
       comicUrl1 = data.data.results[0].urls[0].url;
       addContent("#detailLink", emptyContentCheck(comicUrl1));        
        }  
       //Date modified
       comicModDate = data.data.results[0].modified;      
          
       //Add the content to the info section 
       addImage("#moreInfoImage",moreInfoImageFile,0);          
       addContent("#moreInfoHeader",emptyContentCheck(comicName));
       addContent("#infoDescription",emptyContentCheck(comicDescript));
       //addContent("#infoStories",emptyContentCheck(comicStories));
       addContent("#infoSeries",emptyContentCheck(comicSeries));
       addContent("#infoFormat",emptyContentCheck(comicFormat));
       addContent("#infoIssueNum",emptyContentCheck(comicIssueNum));
       //addContent("#infoCreator",emptyContentCheck(comicCreator));
       addContent("#infoPageCount",emptyContentCheck(comicPageCount));
       addContent("#infoIsbn",emptyContentCheck(comicIsbn));
       addContent("#infoPrice", emptyContentCheck(comicPrice));
       addContent("#infoDateMod", emptyContentCheck(comicModDate.slice(0, 10)));
            
       });     
        
      //Showing the collapsible info by dropping down the div section    
      $('#moreInfo').show();
      //Execute the scroll function    
       $(window).load( function(){
           //Execute the scroll function after 2 seconds of showing the collapse    
           //ajaxStop: function() { setTimeout(scroll(), 30000); }
           setTimeout(scroll(), 10000);    
        }); 
    }
     
});