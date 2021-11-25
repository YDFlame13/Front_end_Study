$(function(){
    $('.btn').on('click',null,function(){
        if(!$(this).hasClass('btn-primary')){
            var name=$(this).text();
            var xhr=new XMLHttpRequest();
            xhr.open('post','starData.php',true);
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4&&xhr.status==200){
                    var data=xhr.responseText.split(',');
                    $('.panel-title').text(data[0]+'详细信息');
                    $('img').attr("src",data[2]);
                    $('h3').text(data[0]);
                    $('.caption p').text(data[1]);
                }
            }
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            xhr.send('name='+name+'');

            $(this).addClass('btn-primary');
            $(this).siblings().removeClass('btn-primary').addClass('btn-default');
        }
    })
})