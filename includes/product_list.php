<?php
 
    //Obtaining the about content already in the database
    $query = "SELECT * FROM products";
    $result = $connection->query($query);
    confirmQuery($result);
    $num_rows = mysqli_num_rows($result);
    $counter = 0;
        
        if($num_rows == 0){
            echo "<h1 style='margin: 100px auto;'>There are no products</h1>";
        }else{

   echo "<ul class='swiper-wrapper product-list product-list-vertical'>";

    while($row = mysqli_fetch_assoc($result)) {
      //Counting the number of rows    
      $num_rows = mysqli_num_rows($result);
      //Storing the about content into a variable
      $product_id = $row['product_id'];
      $product_name = $row['product_name'];
      $product_description = $row['product_description'];
      $product_image_1 = $row['product_image_1'];
      $product_image_2 = $row['product_image_2'];
      $product_price = $row['product_price'];
        
        if($product_image_1 == ''){
            $product_image_1 = 'default.png';
        }
        
        if($counter > 0){
            
       
      echo "<li class='swiper-slide wow fadeInUp text-center' data-wow-delay='.1s'> 
                <span class='product-list-left pull-left'>";
              if($counter == 0){
                  echo "<a id='prodRequest' href='#' data-target='#product-02' data-toggle='modal'><img class='prod' rel='{$product_id}' id='responsive_img1' alt='product image'  src='admin_page/admin/includes/images/{$product_image_1}'>
                    </a>
                </span>";
              }else{       
                 echo "<a id='prod' href='#' data-target='#product-01' data-toggle='modal'><img class='prod' rel='{$product_id}' id='responsive_img1' alt='product image'  src='admin_page/admin/includes/images/{$product_image_1}'>
                    </a>
                </span>";
              }
                if($counter == 0){
             echo "<a class='prodRequest' rel='{$product_id}' href='#' data-target='#product-02' data-toggle='modal'>
                    <span class='product-list-right pull-left'>
                        <span class='product-list-name' style='font-size: 1vw; font-weight: bold;'>{$product_name}</span>
                        <span class='product-list-price'>\${$product_price}</span>
                    </span>
                </a>";
                }else{
                echo "<a class='prod' rel='{$product_id}' href='#' data-target='#product-01' data-toggle='modal'>
                    <span class='product-list-right pull-left'>
                        <span class='product-list-name' style='font-size: 1vw; font-weight: bold;'>{$product_name}</span>
                        <span class='product-list-price'>\${$product_price}</span>
                    </span>
                </a>";   
                }
                
          if($counter == 0){
             // echo"<button type='button' data-toggle='modal' data-target='#myModal' class='btn btn-primary'>Place your order</button> </li>"; 
              echo"</li>"; 
          }else{
              echo"<button class='btn btn-primary add-item wow swing' type='button' data-image='admin_page/admin/includes/images/{$product_image_1}' data-name='{$product_name}' data-cost='$product_price' data-id='$product_id'><span class='ti-shopping-cart'></span>add to cart </button> </li>";  
          }
        
        }
      $counter++;
    }

  echo "</ul>";
    }

?>