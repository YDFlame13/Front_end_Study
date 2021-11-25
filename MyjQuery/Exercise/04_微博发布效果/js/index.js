$(function(){
    $(".submit").click(function(){
        var str=$(".text").val();
        if(str.length>0){
            var newli=$("<li>"+str+"<a href='javascript:;'>删除</a></li>");
            $(".items").prepend(newli);
            $(".items li").eq(0).slideDown();
            $(".text").val("");
        }
    });

    $(".items").on("click","li>a",function(){
        $(this).parent().slideUp(function(){
            $(this).remove();
        });
    });
});