<?php
    // php标签,所有php代码都要写到php标签中
    // 设置编码格式
    header('content-type:text/html;charset=utf-8');
    // 输出内容
    echo("hello world!");
    // 定义变量
    $name='王伟生';
    echo($name);
    // 换行
    // '</br>'
    echo '换行';
    echo '</br>';
    echo '换行';
    // 拼接字符串用点
    echo '</br>';
    echo '今天天气'.'真不错';


    // 定义数组
    $arr=array(1,2,3,4,5);
    // count(数组),获取数组长度
    for($i=0;$i<count($arr);++$i){
        echo '</br>';
        echo $arr[$i];
    }
    // 输出复杂类型
    echo '</br>';
    print_r($arr);

    // 关系数组 （类数于对象，键值对）
    $man=array('name'=>'张三','age'=>'28');
    echo '</br>';
    print_r($man);
    // 遍历
    foreach($man as $key=>$value){
        echo '</br>';
        echo $key.'---'.$value;
    }

    // 二维数组
    $man1=array('name'=>'李四','age'=>'18');
    $people=array($man,$man1);
    echo '</br>';
    echo $people[0]['name'];
    
?>