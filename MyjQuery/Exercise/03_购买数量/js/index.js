$(function(){
    for(var i=0;i<$(".sum").length;++i)setSum(i);
    setAllSum();
    // 为每一个加按钮添加单击响应函数
    $(".add").click(function(){
        var num=$(this).siblings(".num").val();
        $(this).siblings(".num").val(++num);
        setSum($(".add").index($(this)));
        setAllSum();
        return false;
    });
    // 为每一个减按钮添加单击响应函数
    $(".sub").click(function(){
        var num=$(this).siblings(".num").val();
        if(num==1){
            setAllSum();
            return false;
        }
        $(this).siblings(".num").val(--num);
        setSum($(".sub").index($(this)));
        setAllSum();
        return false;
    });
    // 为每一个文本框添加change函数
    $(".num").change(function(){
        var renum=/^[1-9][0-9]*$/;
        if($(this).val()<1 || !renum.test($(this).val()))$(this).val(1);
        setSum($(".num").index($(this)));
        setAllSum();
    });

    function setSum(i){
        // console.log(i);
        var num=$(".num").eq(i).val();
        // console.log(num);
        var cost=parseFloat($(".cost").eq(i).text());
        var sum=cost*num;
        sum=sum.toFixed(2);
        $(".sum").eq(i).text("小计"+sum+"￥");
    }

    function setAllSum(){
        var allsum=0;
        for(var i=0;i<$(".sum").length;++i){
            var texti=$(".sum").eq(i).text();
            texti=texti.replace("小计","");
            allsum+=parseFloat(texti);
        }
        allsum=allsum.toFixed(2);
        $(".allSum").text("合计"+allsum+"￥");
    }
});