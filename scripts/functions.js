//This function dynamically changes the images on the main page
function addImage(imageId,imageFile, Id){
  //Changing the value of the
  $(imageId).attr('src',imageFile.replace(/['"]+/g, ''));
  $(imageId).parent().attr('rel', Id);    
}

//This function dynamically changes content on the main page
function addContent(contentId,text){
  //Checking if the text is a string or a number 
  if(isNaN(text) && (contentId.includes("Link")) == false){
     $(contentId).text(text.replace(/['"]+/g, ''));
   }else if(contentId.includes("Link")){    
     $(contentId).attr("href",text);
     $(contentId).text(text);
     //console.log("We're in");   
   }else{    
     $(contentId).text(text);
   }
}

//Function to check the length of the string and reduces it 
function checkLength(word){
    var newWord;
    if(word.length > 343){
      newWord = word.slice(0,243).concat("...");
      return newWord;
    }else{
      return word;    
    }
}

//This function dynamically changes the images on the main page
function addImageText(imageId,imageTxt){
$(imageId).text(imageTxt);   
} 

//This function checks the page number and then returns a sum to be added to "i" 
function checkPage(page){
 var sum = 0;
 switch(page){
     case 1:
      sum = 0;
      break;
     case 2:
      sum = 12;
      break;  
     case 3:
      sum = 24;
      break;  
     case 4:
      sum = 36;
      break;  
     case 5:
      sum = 48;
      break;
     case 6:
      sum = 60;
      break;
     case 7:
      sum = 72;
      break;
     case 8:
      sum = 84;
      break;
     case 9:
      sum = 96;
      break;
      default:
      sum = 0;     
 }    
  return sum;   
}

//Function to hide images
function hideImage(imageId){
  $(imageId).attr('src',"");     
}

//Function to hide images
function emptyContentCheck(content){
  if(content == ""){
     content = "N/A";
  }
  return content;
}

//Function to print some of the content
function printSome(object,infoId){
  //Chekcing the number of records    
  num = Object.keys(object).length;
  //Limiting the number to 4    
  if (num > 10){num = 10}; 
      
  if(num == 0){
    $(infoId).append("N/A"); 
  }else{ 
      
  for(var x = 0; x < num; x++){
   //Append the list of events      
   $(infoId).append(object[x].name);
      
    if(x != (num - 1)){
     //Adding a comma    
     $(infoId).append(" , ");
     }
    if(x == (num - 1)){
     //Adding etc at the end    
     $(infoId).append(" etc.");     
    }
      
   }  
  }
}

//Function to erase all text
function eraseText(){
  $("#infoDescription").text("");  
  $("#infoEvent").text("");  
  $("#infoStories").text("");  
  $("#infoSeries").text("");  
  $("#infoFormat").text("");  
  $("#infoIssueNum").text("");  
  $("#infoCreator").text("");  
  $("#infoPageCount").text("");  
  $("#infoIsbn").text("");  
  $("#infoPrice").text("");  
  $("#infoCreator").text("");  
  $("#infoAppear").text("");  
  $("#detailLink").text("");  
  $("#wikiLink").text("");  
  $("#comicLink").text("");  
  $("#infoDateMod").text("");  
  $("#infoComics").text("");
}