<!DOCTYPE html>
<html lang="ch">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ImgList</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./fa/css/all.min.css">
    <link rel="stylesheet" href="./bootStrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/index.css">
    <style>
        img{
            width: 300px;
            height: 200px;
        }
        span{
            margin: 5px;
        }
        li{
            margin:10px 0;
        }
    </style>
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="./bootStrap/js/bootstrap.min.js"></script>
    <script src="./js/index.js"></script>
</head>
<body>
    <?php
        include './data.php';
        echo '<ul>';
        for($i=0;$i<count($imgDataArr);++$i){
            echo '<li>';
            echo '<span class="name">'.$imgDataArr[$i]['name'].'</span>';
            echo '<img src="'.$imgDataArr[$i]['src'].'" alt="">';
            echo '<span class="inf">'.$imgDataArr[$i]['inf'].'</span>';
            echo '<a href="'.$imgDataArr[$i]['href'].'">more</a>';
            echo '<span class="type">'.$imgDataArr[$i]['type'].'</span>';
            echo '</li>';
        }
        echo '</ul>';
    ?>
    
</body>
</html>