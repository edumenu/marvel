<?php

if($_POST['subject'] == "30 DAY DETOX/HEALTHY LIVING RESET PROGRAM"){
   //$to = "runionpure80@gmail.com";    //Sender's email
   $to = "ehdemdume@gmail.com";    //Sender's email
   $subject = $_POST['subject'];
   $body = $_POST['body'] . ".    Name: " . $_POST['name'] . "/Email: " . $_POST['email'];  //Body of the email
   $header =  "Name: " . $_POST['name'];
    
   // send email
   $mail = mail($to,$subject,$body,$header);
  if($mail){
    echo "success";
   }else{
    echo "error";  
  } 
    
}else if($_POST['subject'] !== "30 DAY DETOX/HEALTHY LIVING RESET PROGRAM"){
 //$to = "runionpure80@gmail.com";    //Sender's email
 $to = "ehdemdume@gmail.com";    //Sender's email
 $subject = $_POST['subject'];
 $body = $_POST['body'] . ".      Name: " . $_POST['name'] . "/Email: " . $_POST['email'];  //Body of the email
 //$header = "Name: " . $_POST['name'] . " and Email: " . $_POST['email'];
 $header = "Name: " . $_POST['name'];
    
 // send email
 $mail = mail($to,$subject,$body,$header);
 if($mail){
   echo "success";
  }else{
   echo "error";  
 }    
    
}else{
 //$to = "runionpure80@gmail.com";    //Sender's email
 $to = "ehdemdume@gmail.com";    //Sender's email
 $subject = "Buyer's contact information";
 $body = "Buyer's name: " . $_POST['name'] . " and number: " . $_POST['number'];  //Body of the email
 $header = "Buyer's email: " . $_POST['email'];
    
 // send email
  $mail = mail($to,$subject,$body,$header);
  if($mail){
    echo "success";
   }else{
    echo "error";  
  } 
}

?>