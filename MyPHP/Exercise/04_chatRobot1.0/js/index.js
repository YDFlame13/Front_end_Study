$(function(){
    // 为发送按钮绑定单击事件
    $('.fsend').on('click',null,function(){
        // alert('aa');

        // 获取文本域内容
        var massage=$('.myworlds').val();
        $('.myworlds').val('');
        if(massage.length>0){
            // 用户发送消息

            // split() 方法用于把一个字符串分割成字符串数组。
            // stringObject.split(separator,howmany)
            // separator 必需。字符串或正则表达式，从该参数指定的地方分割 stringObject。 
            // howmany 可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。 
            var massages=massage.split('\n');
            // 创建一则user消息(克隆)
            var userli=$('.user').eq(0).clone();
            // 加入信息
            for(var i=0;i<massages.length;i++){
                var newp=$('<p></p>');
                newp.text(massages[i]);
                userli.find('.massagebox').append(newp);
            }
            $('.chatmassage').append(userli);
            userli.show();

            // 请求服务器，返回robot的信息
            // 获取上一条消息，避免重复
            var lastmassage='';
            for(var i=0;i<$('.robot:last').find('p').length;++i){
                lastmassage+=$('.robot:last').find('p').eq(i).text();
                if(i<$('.robot:last').find('p').length-1)lastmassage+='\n';
            }
            // 创建异步对象
            var xhr=new XMLHttpRequest();
            // 请求行
            xhr.open('post','./robot_chen.php');
            // 请求头
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            // 发送请求
            xhr.send('last='+lastmassage);
            // 回调函数
            xhr.onload=function(){
                var robotMassages=xhr.responseText.split('\n');

                // 创建一则robot消息（克隆）
                var robotli=$('.robot').eq(0).clone();
                // 加入信息
                for(var i=0;i<robotMassages.length;i++){
                    var newp=$('<p></p>');
                    newp.text(robotMassages[i]);
                    robotli.find('.massagebox').append(newp);
                }
                $('.chatmassage').append(robotli);
                robotli.show();

                // 让滚动条默认滚到底
                var height=document.querySelector('.wbody').scrollHeight;
                // console.log(height);
                $('.wbody').scrollTop(height);
            }
        }
    })

    // 为清空按钮绑定单击事件
    $('.fclose').on('click',null,function(){
        $('.myworlds').val('');
    })
})