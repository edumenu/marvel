$(document).ready(function(){
    
      //Get request to the marvel API for a list of characters 
      $.get("http://gateway.marvel.com/v1/public/characters?&ts="+ timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"&limit=40", function(data, status){
        //path/extension(jpg)/imageFile (full image file) array
        var path = new Array();
        var extension = new Array();
        var imageFile = new Array();
        //Obtaining the length of the array received
        var imageCounter = Object.keys(data.data.results).length;
        var characterId;
        //Creator full name array
        var imageTxt = new Array();
        //Id for the images   
        var imageId = new Array("#firstImage", "#secondImage", "#thirdImage", "#fourthImage", "#fifthImage", "#sixthImage", "#seventhImage", "#eighthImage", "#ninethImage");
        //Id for the image text  
        var imageTextId = new Array("#firstImageTxt", "#secondImageTxt", "#thirdImageTxt", "#fourthImageTxt", "#fifthImageTxt", "#sixthImageTxt", "#seventhImageTxt", "#eighthImageTxt", "#ninethImageTxt", "#tenthImageTxt", "#eleventhImageTxt", "#twelfthImageTxt");
        var size1 = "/portrait_uncanny.";
        var size2 = "/standard_fantastic.";
        
        //Checking the number of charcters being returned before printing the out
        if(imageCounter > 0){  
        //This for loop is converting the json object into a string and joining the path, the size and the extension to be displayed on the main page.
        for(var i = 0; i < 9; i++){
          if(i != 3 && i != 5){
             path[i] = JSON.stringify(data.data.results[i].thumbnail.path);
             extension[i] = JSON.stringify(data.data.results[i].thumbnail.extension);
             //Character name    
             imageTxt[i] = data.data.results[i].name;
             //Obtaining the character Id
             characterId = data.data.results[i].id;   
              if(i == 1 || i == 8){
                imageFile[i] = path[i] + size2 + extension[i];
              }else{
                imageFile[i] = path[i] + size1 + extension[i];
              }   
             addImage(imageId[i],imageFile[i], characterId);
             //Check if the image text is empty
             if(imageTxt[i ] == ""){
                //Add N/A if the image text is empty 
                addImageText(imageTextId[i],"N/A");
               }else{
                addImageText(imageTextId[i],imageTxt[i]);    
               }   
              
            }else if(i == 3){
             path[i] = JSON.stringify(data.data.results[12].thumbnail.path);
             extension[i] = JSON.stringify(data.data.results[12].thumbnail.extension);
             imageFile[i] = path[i] + size2 + extension[i];
             imageTxt[i] = data.data.results[12].name;
              //Obtaining the character Id
             characterId = data.data.results[12].id;
             addImage(imageId[i],imageFile[i], characterId);
             //Check if the image text is empty
             if(imageTxt[i ] == ""){
                //Add N/A if the image text is empty 
                addImageText(imageTextId[i],"N/A");
               }else{
                addImageText(imageTextId[i],imageTxt[i]);    
               }
                
            }else{
             path[i] = JSON.stringify(data.data.results[36].thumbnail.path);
             extension[i] = JSON.stringify(data.data.results[i].thumbnail.extension);
             imageFile[i] = path[i] + size1 + extension[i];
             imageTxt[i] = data.data.results[i].name;
             //Obtaining the character Id
             characterId = data.data.results[i].id;    
             addImage(imageId[i],imageFile[i], characterId);
             //Check if the image text is empty
             if(imageTxt[i ] == ""){
                //Add N/A if the image text is empty 
                addImageText(imageTextId[i],"N/A");
               }else{
                addImageText(imageTextId[i],imageTxt[i]);    
               }    
            }
         }
       }else{
          //Display an error message if no characters are received   
          $("#error").text("There are no characters!");    
        }
      });
    
    
      //Get request to the API to retrieve to books
      $.get("http://gateway.marvel.com/v1/public/comics?format=magazine&ts="+ timestamp +"&apikey=930bc42f98a3c3757189bb28f9869d40&hash="+ hash +"&limit=25", function(data, status){
        //path/extension(jpg)/imageFile (full image file) array
        var path = new Array();
        var extension = new Array();
        //Number of books returned  
        var bookCounter = Object.keys(data.data.results).length;
        var comicId;
        var size1 = "/portrait_uncanny.";
        var size2 = "/standard_fantastic.";
        
        //Checking the name books returned
        if(bookCounter > 0){
             
        //This for loop is converting the json object into a string and joining the path, the size and the extension to be displayed on the main page.
        for(var i = 0; i < 4; i++){
          if(i == 0){
             path[i] = JSON.stringify(data.data.results[i].thumbnail.path);
             extension[i] = JSON.stringify(data.data.results[i].thumbnail.extension);
             comicId = data.data.results[i].id;
             addImage("#firstBook",path[i] + size1 + extension[i], comicId);
             addContent("#h1Book",JSON.stringify(data.data.results[i].title));
             addContent("#para1",checkLength(JSON.stringify(data.data.results[i].description)));
            }else if(i == 2){
             path[i] = JSON.stringify(data.data.results[11].thumbnail.path);
             extension[i] = JSON.stringify(data.data.results[11].thumbnail.extension);
             comicId = data.data.results[11].id;    
             addImage("#thirdBook",path[i] + size1 + extension[i], comicId);
             addContent("#h3Book",JSON.stringify(data.data.results[13].title));
             addContent("#para3",checkLength(JSON.stringify(data.data.results[13].description)));
            }else if(i == 1){
             path[i] = JSON.stringify(data.data.results[22].thumbnail.path);
             extension[i] = JSON.stringify(data.data.results[22].thumbnail.extension);
             comicId = data.data.results[22].id;    
             addImage("#secondBook",path[i] + size1 + extension[i], comicId);
             addContent("#h2Book",JSON.stringify(data.data.results[22].title));
             addContent("#para2",checkLength(JSON.stringify(data.data.results[22].description)));
            }else{
             path[i] = JSON.stringify(data.data.results[24].thumbnail.path);
             extension[i] = JSON.stringify(data.data.results[24].thumbnail.extension);
             comicId = data.data.results[24].id;    
             addImage("#fourthBook",path[i] + size1 + extension[i], comicId);
             addContent("#h4Book",JSON.stringify(data.data.results[24].title));
             addContent("#para4",checkLength(JSON.stringify(data.data.results[24].description)));
            }
          }
        }else{
         $("#error2").text("There are no books available!");    
         }
       });
    
       $(".info").click(function(){   
         //Obtain character Id from rel   
         var rel = $(this).attr('rel');
         if(rel == ''){
            
          }else{
            var href = $(this).attr('href');
            $(this).attr('href', href + '?characterId=' + rel); 
          }       
       });
    
       $(".infoBook").click(function(){   
         //Obtain book Id from rel   
         var rel = $(this).attr('rel');
         if(rel == ''){
            
          }else{
            var href = $(this).attr('href');
            $(this).attr('href', href + '?comicId=' + rel); 
          }       
       });  
});