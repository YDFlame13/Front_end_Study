$(function(){
    $('button').click(function(){
        var city=$('input').val();
        $('input').val('');
        var xhr=new XMLHttpRequest();
        xhr.open('get','http://wthrcdn.etouch.cn/WeatherApi?city='+city,true);
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                $('h1').text(xhr.responseXML.querySelector('city').innerHTML);
                $('h2').text(xhr.responseXML.querySelector('forecast weather date').innerHTML);
                $('h3').eq(0).text(xhr.responseXML.querySelector('forecast weather high').innerHTML);
                $('h3').eq(1).text(xhr.responseXML.querySelector('forecast weather low').innerHTML);
                $('h3').eq(2).text(xhr.responseXML.querySelector('forecast weather type').innerHTML);
                $('h3').eq(3).text(xhr.responseXML.querySelector('forecast weather fengxiang').innerHTML);
            }
        }
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(null);
    })
})