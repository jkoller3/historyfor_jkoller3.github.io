<?php
	$con = 	mysqli_connect('localhost','dbname','pw', 'sql9154593');
 
  $code=$_POST["postIncrement"];
  
  $query= mysqli_query($con, "UPDATE userpoints SET points=points+1");
	//tag on to end of query: WHERE username="username" <- can be posted from a get request or login sequence in another php file
 
  if($query){
    echo "Score incremented";
  }
  else{
    echo "Error in updating score";
  }
?>