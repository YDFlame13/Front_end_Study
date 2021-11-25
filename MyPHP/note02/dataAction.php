<?php
    // 设置UTF-8编码
    header('content-type:text/html;charset=utf-8');
    // 接收提交过来的数据
    // php中为我们提供了一些超全局变量
        // get  $_GET
        // post $_POST
        // file $_FILES 接收文件
    echo $_GET;
    echo '<br>';
    print_r($_GET);
    echo $_POST;
    echo '<br>';
    print_r($_POST);
    echo $_FILES;
    echo '<br>';
    print_r($_FILES);
    // Array ( [File] => Array ( [name] => 01.jpg [type] => image/jpeg [tmp_name] => C:\Windows\phpAA30.tmp [error] => 0 [size] => 1533435 ) )
    // name 文件名
    // type 文件类型
    // tmp_name 服务器中存放文件的临时路径
    // error 错误代码
    // size 文件大小
    // move_uploaded_file(file,newloc)
        // file	必需。规定要移动的文件。
        // newloc 必需。规定文件的新位置。
    move_uploaded_file($_FILES['File']['tmp_name'],'./'.$_FILES['File']['name']);
    // 如果需要严谨一些，需要添加一些判断
        // 判断文件类型
        // 判断文件是否已经存在
        // 判断文件大小
?>