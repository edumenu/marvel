<?php
$date = new DateTime();
$timeStamp = $date->getTimestamp();
$publicKey = "930bc42f98a3c3757189bb28f9869d40";
$privateKey = "e1db567c21d5b9bc6e74c0f62926597e16702daa";
$hash = md5($timeStamp.$privateKey.$publicKey);

echo "http://gateway.marvel.com/v1/public/comics?ts=$timeStamp&apikey=$publicKey&hash=$hash";

?> 