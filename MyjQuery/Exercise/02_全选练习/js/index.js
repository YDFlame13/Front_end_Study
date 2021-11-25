$(function(){
    // 为全选按钮添加单击事件响应函数
    $("#checkedAllBtn").click(function(){
        $("input[name='items']").prop("checked",true);
        $("#checkedAllBox").prop("checked",true);
    });
    // 为全不选按钮添加单击响应函数
    $("#checkedNoBtn").click(function(){
        $("input[name='items']").prop("checked",false);
        $("#checkedAllBox").prop("checked",false);
    });
    // 为反选按钮添加单击响应函数
    $("#checkedRevBtn").click(function(){
        for(var i=0;i<$("input[name='items']").length;++i){
            $("input[name='items']").eq(i).prop("checked",!$("input[name='items']").eq(i).prop("checked"));
        };
        if($("input[name='items']:checked").length===$("input[name='items']").length)$("#checkedAllBox").prop("checked",true);
        else $("#checkedAllBox").prop("checked",false);
    });
    // 为提交按钮设置单击响应函数
    $("#sendBtn").click(function(){
        for(var i=0;i<$("input[name='items']").length;++i){
            if($("input[name='items']").eq(i).prop("checked"))alert($("input[name='items']").eq(i).prop("id"));
        };
    });
    // 为全选/全不选添加状态改变响应函数
    $("#checkedAllBox").change(function(){
        $("input[name='items']").prop("checked",$(this).prop("checked"));
    });
    // 为每一个项目添加状态改变响应函数
    $("input[name='items']").change(function(){
        if($("input[name='items']:checked").length===$("input[name='items']").length)$("#checkedAllBox").prop("checked",true);
        else $("#checkedAllBox").prop("checked",false);
    });
});