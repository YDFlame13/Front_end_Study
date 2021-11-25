<?php
    $userNameArr=array('张三','李四','王五');
    $checkName=$_GET['userName'];
    // in_array(value,array,type)
    // value 必需。规定要在数组搜索的值。 
    // array 必需。规定要搜索的数组。 
    // type 可选。如果设置该参数为 true，则检查搜索的数据与数组的值的类型是否相同。 
    if(in_array($checkName,$userNameArr)){
        echo '用户名已经存在！换一个试试！';
    }else{
        echo '注册成功！';
    }
    sleep(3);
?>