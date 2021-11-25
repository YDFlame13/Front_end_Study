<?php
    // 设置编码格式
    //header('content-type:text/html;charset=utf-8');
    //header('content-type:text/xml;charset=utf-8');
    header('content-type:application/json;charset=utf-8');
    include "./heroArr.php";
    $ansJson="{";
    for($i=0;$i<count($heroarr);++$i){
        if($heroarr[$i]['name']==$_POST['name']){
            $ansJson=$ansJson.'"allname":"'.$heroarr[$i]['allname'].'",';
            $ansJson=$ansJson.'"name":"'.$heroarr[$i]['name'].'",';
            $ansJson=$ansJson.'"imgsrc":"'.$heroarr[$i]['imgsrc'].'",';
            $ansJson=$ansJson.'"inf":"'.$heroarr[$i]['inf'].'"';
            break;
        }
    }
    $ansJson=$ansJson."}";
    echo $ansJson;
?>