<?php
    $starArr=array(
        array('name'=>'迪丽热巴','inf'=>'迪丽热巴（Dilraba），1992年6月3日出生于新疆乌鲁木齐市，中国内地影视女演员、歌手，毕业于上海戏剧学院。','img'=>'./img/dlrb.jpg'),
        array('name'=>'孙红雷','inf'=>'孙红雷，1970年8月16日出生于黑龙江省哈尔滨市道里区，中国内地男演员，毕业于中央戏剧学院音乐剧大专班。','img'=>'./img/shl.jpg'),
        array('name'=>'刘亦菲','inf'=>'刘亦菲，1987年8月25日出生于湖北省武汉市，华语影视女演员、歌手，毕业于北京电影学院2002级表演系本科。','img'=>'./img/lyf.jpg'),
        array('name'=>'胡歌','inf'=>'胡歌，1982年9月20日出生于上海市徐汇区，中国内地影视男演员、流行乐歌手，民盟盟员，毕业于上海戏剧学院表演系。','img'=>'./img/hg.jpg'),
    );
    for($i=0;$i<count($starArr);++$i){
        if($starArr[$i]['name']==$_POST['name']){
            echo $starArr[$i]['name'].','.$starArr[$i]['inf'].','.$starArr[$i]['img'];
            break;
        }
    }
?>