<?php
    $massageArr = array(
        'SB',
        '儿子',
        '你好',
        '你是来拉屎的吧！',
        '…………',
        '不行',
        '我想吃屎
        你可以喂我吗？',
        '屎真好吃',
        '王伟生爱吃屎'
    );

    // array_rand(array,number)从数组中随机选出一个或多个元素，并返回。
    // array 必需。规定输入的数组参数。 
    // number 可选。默认是 1。规定返回多少个随机的元素。
    while(true){
        $massage=array_rand($massageArr,1);
        if($massageArr[$massage]!=$_POST['last']){
            echo $massageArr[$massage];
            break;
        }
    }
?>