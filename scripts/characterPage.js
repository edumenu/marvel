$body = $("body");

$(document).on({
   ajaxStart: function() { $body.addClass("loading");    },
   ajaxStop: function() { $body.removeClass("loading"); }    
});


$(document).ready(function(){
        //Hide "All Characters" button
        $("#allCharac").hide();
        //Id for the images on the character's page  
        var imageId = new Array("#firstImage", "#secondImage", "#thirdImage", "#fourthImage", "#fifthImage", "#sixthImage", "#seventhImage", "#eighthImage", "#ninethImage", "#tenthImage", "#eleventhImage", "#twelfthImage");
       //Id for the image text  
        var imageTextId = new Array("#firstImageTxt", "#secondImageTxt", "#thirdImageTxt", "#fourthImageTxt", "#fifthImageTxt", "#sixthImageTxt", "#seventhImageTxt", "#eighthImageTxt", "#ninethImageTxt", "#tenthImageTxt", "#eleventhImageTxt", "#twelfthImageTxt");
       //path/extension(jpg)/imageFile (full image file) array
        var path = new Array();
        var extension = new Array();
        var imageFile = new Array();
        //Character full name array
        var imageTxt = new Array();
        //Marvel sizes for its images  
        var size1 = "/portrait_uncanny.";
        var size2 = "/standard_fantastic.";
        //Hide "All Characters" button
        $("#allCharac").hide();
    
        //Get request to the marvel API for a list of characters 
        $.get("http://gateway.marvel.com/v1/public/characters?&ts=" + timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"&limit=100", function(data, status){
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
                 imageTxt[i] = data.data.results[i + checkPage(page)].name;
                 //Obtaining the character Id
                 characterId = data.data.results[i + checkPage(page)].id;    
                 addImage(imageId[i],imageFile[i], characterId);
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
    $("#searchCharac").click(function(){
        //Value in the search bar
        var searchValue = $("#searchValue").val();
        //Destroy the pagination object to create a new one 
        $("#pagination").twbsPagination('destroy');
        
        //Get request to the marvel API for a list of characters 
        $.get("http://gateway.marvel.com/v1/public/characters?nameStartsWith="+ searchValue +"&ts=" + timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"", function(data, status){
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
           $("#allCharac").show();
        }else{    
            
        //Initializing the pagination
        $('#pagination').twbsPagination({ 
            totalPages: numPage,
            visiblePages: (numPage - 2),
            onPageClick: function (event, page) {
                for(var i = 0; i < 12; i++){
                 //removeID(imageId[i]);    
                 //Checking for the last image
                if((i + checkPage(page)) < imageCounter){
                 path[i] = JSON.stringify(data.data.results[i + checkPage(page)].thumbnail.path);
                 extension[i] = JSON.stringify(data.data.results[i + checkPage(page)].thumbnail.extension);
                 //Combining the image file with its file extension    
                 imageFile[i] = path[i] + size2 + extension[i];
                 imageTxt[i] = data.data.results[i + checkPage(page)].name;
                 //Obtaining the character Id
                 characterId = data.data.results[i + checkPage(page)].id;    
                 addImage(imageId[i],imageFile[i], characterId); 
                 addImageText(imageTextId[i],emptyContentCheck(imageTxt[i]));      
                  }else{
                    //Hide all images after last image in the container
                    hideImage(imageId[i]);
                  }
               }    
            }
         });
        
        //Show all characters button
        $("#allCharac").show();
        //Hide error message    
        $("#error").text("");
        //Hide bootstrap div
        $("#errorDiv").removeClass("alert alert-danger text-center");    
            
        }    
            
       });  
            
    });
    
    //Refresh page when all button is clicked
    $("#allCharac").click(function(){
      location.reload();  
    });
    
    //Refresh page when all button is clicked
    $(".info").click(function(){
      //Get character Id
      characClickId = $(this).attr('rel');
      //Clear event list upon click
      //$("#infoEvent").text("");
      eraseText();
        
      //Get character based on the clicked image using their Id
      $.get("http://gateway.marvel.com/v1/public/characters/"+ characClickId +"?ts=" + timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"", function(data, status){
        urlNum = Object.keys(data.data.results[0].urls).length; 
       //Image path      
       moreInfoPath = JSON.stringify(data.data.results[0].thumbnail.path);
       moreInfoExtension1 = JSON.stringify(data.data.results[0].thumbnail.extension);
       //Combining the image file with its file extension    
       nmoreInfoImageFile = moreInfoPath + size2 + moreInfoExtension1;
      //Character info      
       characterName = data.data.results[0].name;   
       characterDescript = data.data.results[0].description;
       //Number of comics      
       comicNumbers = Object.keys(data.data.results[0].comics.items).length;
       //Comic events      
       comicEvents = printSome(data.data.results[0].events.items, "#infoEvent");
       //Comic series
       comicSeries = printSome(data.data.results[0].series.items, "#infoSeries");
       //Comic stories
       comicStories = printSome(data.data.results[0].stories.items, "#infoStories");
        if(urlNum >= 1){  
       //Comic Detail URL
       comicUrl1 = data.data.results[0].urls[0].url;
       addContent("#detailLink", emptyContentCheck(comicUrl1));         
        }
        if(urlNum >= 2){  
       //Comic wiki URL
       comicUrl2 = data.data.results[0].urls[1].url;
       addContent("#wikiLink", emptyContentCheck(comicUrl2));        
        }
       if(urlNum >= 3){
        //Comiclink URL
        comicUrl3 = data.data.results[0].urls[2].url;
        addContent("#comicLink", emptyContentCheck(comicUrl3));   
       }      
       //Date modified
       comicModDate = data.data.results[0].modified;      
          
       //Add the content to the info section 
       addImage("#moreInfoImage",nmoreInfoImageFile,0);          
       addContent("#moreInfoHeader",emptyContentCheck(characterName));
       addContent("#infoDescription",emptyContentCheck(characterDescript));
       addContent("#infoAppear", emptyContentCheck(comicNumbers));
       addContent("#infoDateMod", emptyContentCheck(comicModDate.slice(0, 10)));
            
       });    
        
      //Showing the collapsible info by dropping down the div section    
      $('#moreInfo').show();
      //Execute the scroll function after 2 seconds of showing the collapse    
      setTimeout(scroll(), 2000);   
    });
    
    //Function to scroll user to the more info section
    function scroll(){
     //Scrolls to the bottom of the page within 2 seconds    
     $("html, body").animate({ scrollTop: $("#moreInfo").offset().top }, 1000);
    }
    
    if(window.location.href.indexOf("=") > -1){
        
     var equalPos = window.location.href.indexOf("=");
     var dropId = window.location.href.slice(equalPos + 1,72);
        
      eraseText();
        
      //Get character based on the clicked image using their Id
      $.get("http://gateway.marvel.com/v1/public/characters/"+ dropId +"?ts=" + timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"", function(data, status){
        urlNum = Object.keys(data.data.results[0].urls).length; 
       //Image path      
       moreInfoPath = JSON.stringify(data.data.results[0].thumbnail.path);
       moreInfoExtension1 = JSON.stringify(data.data.results[0].thumbnail.extension);
       //Combining the image file with its file extension    
       nmoreInfoImageFile = moreInfoPath + size2 + moreInfoExtension1;
      //Character info      
       characterName = data.data.results[0].name;   
       characterDescript = data.data.results[0].description;
       //Number of comics      
       comicNumbers = Object.keys(data.data.results[0].comics.items).length;
       //Comic events      
       comicEvents = printSome(data.data.results[0].events.items, "#infoEvent");
       //Comic series
       comicSeries = printSome(data.data.results[0].series.items, "#infoSeries");
       //Comic stories
       comicStories = printSome(data.data.results[0].stories.items, "#infoStories");
        if(urlNum >= 1){  
       //Comic Detail URL
       comicUrl1 = data.data.results[0].urls[0].url;
       addContent("#detailLink", emptyContentCheck(comicUrl1));        
        }
        if(urlNum >= 2){  
       //Comic wiki URL
       comicUrl2 = data.data.results[0].urls[1].url;
       addContent("#wikiLink", emptyContentCheck(comicUrl2));        
        }
       if(urlNum >= 3){
        //Comiclink URL
        comicUrl3 = data.data.results[0].urls[2].url;
        addContent("#comicLink", emptyContentCheck(comicUrl3));   
       }      
       //Date modified
       comicModDate = data.data.results[0].modified;      
          
       //Add the content to the info section 
       addImage("#moreInfoImage",nmoreInfoImageFile,0);          
       addContent("#moreInfoHeader",emptyContentCheck(characterName));
       addContent("#infoDescription",emptyContentCheck(characterDescript));
       addContent("#infoAppear", emptyContentCheck(comicNumbers));
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