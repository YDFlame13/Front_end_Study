$(function(){
    $('.getList').on('click',null,function(){
        if($('.numOfList').val().length>0){
            var number=$('.numOfList').val();
            $('.numOfList').val('');
            // 创建异步对象
            var xhr=new XMLHttpRequest();
            
            //请求行
            xhr.open('post','getHeroList.php',true);
            
            // 注册回调函数,请求响应回来后执行
            // xhr.onload=function(){
            //     console.log(xhr.responseText);
            // }
            xhr.onreadystatechange=function(){
                // 确保已经返回，并且请求地址存在
                if(xhr.readyState==4&&xhr.status==200){
                    var list=JSON.parse(xhr.responseText);
                    // console.log(list);
                    for(var i=0;i<list.length;++i){
                        var newHero=$('.hero').eq(0).clone();
                        newHero.find('img').attr('src',list[i].imgsrc);
                        newHero.find('h4').text(list[i].name);
                        $('.heroList').append(newHero);
                        newHero.show();
                    }
                }
            }
            // 请求头 setRequestHeader() 参数：key1,valve1
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            
            // 请求主体&&发
            xhr.send('number='+number);
        }
    })

    $('.heroList').on('click','.hero',function(){
        var name=$(this).find('.heroname').text();
        // 创建异步对象
        var xhr=new XMLHttpRequest();
        
        //请求行
        xhr.open('post','getHeroData.php',true);
        
        // 注册回调函数,请求响应回来后执行
        // xhr.onload=function(){
        //     console.log(xhr.responseText);
        // }
        xhr.onreadystatechange=function(){
            // 确保已经返回，并且请求地址存在
            if(xhr.readyState==4&&xhr.status==200){
                // console.log(xhr.responseText);
                var data=JSON.parse(xhr.responseText);
                // console.log(data);
                $('.herobox').find('h4').text(data.name);
                $('.herobox').find('h3').text(data.allname);
                $('.herobox').find('.heroimg').attr('src',data.imgsrc);
                $('.herobox').find('a').prop('href',data.inf);
                $('.herobox').modal('show');
            }
        }
        // 请求头 setRequestHeader() 参数：key1,valve1
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        
        // 请求主体&&发
        xhr.send('name='+name);
    })
})