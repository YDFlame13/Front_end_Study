<?php
    // 设置编码格式
    //header('content-type:text/html;charset=utf-8');
    //header('content-type:text/xml;charset=utf-8');
    header('content-type:application/json;charset=utf-8');
    include "./heroArr.php";
    $ansJson="[";
    $arr=array_rand($heroarr,$_POST['number']);
    for($i=0;$i<$_POST['number'];++$i){
        $ansJson=$ansJson.'{';
        $ansJson=$ansJson.'"allname":"'.$heroarr[$arr[$i]]['allname'].'",';
        $ansJson=$ansJson.'"name":"'.$heroarr[$arr[$i]]['name'].'",';
        $ansJson=$ansJson.'"imgsrc":"'.$heroarr[$arr[$i]]['imgsrc'].'",';
        $ansJson=$ansJson.'"inf":"'.$heroarr[$arr[$i]]['inf'].'"';
        if($i==$_POST['number']-1)$ansJson=$ansJson.'}';
        else $ansJson=$ansJson.'},';
    }
    $ansJson=$ansJson."]";
    echo $ansJson;
?>