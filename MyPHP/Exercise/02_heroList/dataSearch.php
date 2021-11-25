<!DOCTYPE html>
<html lang="ch">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HeroList</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./fa/css/all.min.css">
    <link rel="stylesheet" href="./bootStrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/base.css">
    <link rel="stylesheet" href="./css/index.css">
    <style>
        img {
            width: 242px;
        }

        .betweendiv {
            width: 100%;
            height: 50px;
        }
    </style>
    <script src="./js/jquery-3.6.0.min.js"></script>
    <script src="./bootStrap/js/bootstrap.min.js"></script>
    <script src="./js/index.js"></script>
</head>

<body>
    <div class="betweendiv"></div>
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <form action="./dataSearch.php" method="get">
                    <div class="input-group">
                        <input name="sName" type="text" class="form-control" placeholder="输入你要查找的英雄">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="submit">搜索</button>
                        </span>
                    </div><!-- /input-group -->
                </form>
            </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->
        <div class="betweendiv"></div>
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">HeroList</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <?php
                        header('content-type:text/html;charset=utf-8');

                        include './heroArr.php';

                        $sName = $_GET['sName'];
                        $flag=false;
                        for ($i=0; $i < count($heroarr); $i++) { 
                            if($sName==$heroarr[$i]['name']){
                                echo '<div class="col-sm-6 col-md-4">
                                            <div class="thumbnail">
                                                <img src="' . $heroarr[$i]['imgsrc'] . '" alt="' . $heroarr[$i]['allname'] . '">
                                                <div class="caption">
                                                    <h3 class="text-center">' . $heroarr[$i]['name'] . '</h3>
                                                    <h3 class="text-center">' . $heroarr[$i]['allname'] . '</h3>
                                                    <p class="text-center">
                                                        <a href="#" class="btn btn-primary btn-lg" role="button">购买</a>
                                                        <a href="' . $heroarr[$i]['inf'] . '" class="btn btn-default btn-lg" role="button" target="_blank">详情</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>';
                                $flag=true;
                                break;
                            }
                        }
                        if(!$flag){
                            echo '<div class="alert alert-warning alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <strong>No Found!</strong>
                          </div>';
                        }
                        for ($i=0; $i < count($heroarr); $i++) { 
                            if($sName!=$heroarr[$i]['name']){
                                echo '<div class="col-sm-6 col-md-4">
                                            <div class="thumbnail">
                                                <img src="' . $heroarr[$i]['imgsrc'] . '" alt="' . $heroarr[$i]['allname'] . '">
                                                <div class="caption">
                                                    <h3 class="text-center">' . $heroarr[$i]['name'] . '</h3>
                                                    <h3 class="text-center">' . $heroarr[$i]['allname'] . '</h3>
                                                    <p class="text-center">
                                                        <a href="#" class="btn btn-primary btn-lg" role="button">购买</a>
                                                        <a href="' . $heroarr[$i]['inf'] . '" class="btn btn-default btn-lg" role="button" target="_blank">详情</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>';
                            }
                        }
                    ?>
                </div>
            </div>
        </div>
    </div>
</body>

</html>