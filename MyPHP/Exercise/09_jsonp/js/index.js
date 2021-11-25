$(function(){
    
    $('button').click(function(){
        var myid=Math.ceil(Math.random()*50);
        console.log(myid)
        $.ajax({
            type: "post",
            url: "https://query.asilu.com/aweme/info",
            data: {
                'url':'https://v.douyin.com/eJ4k56F/',
                'id':myid
            },
            dataType: "jsonp",
            success: function (response) {
                console.log(response);
            }
        })
    })
})