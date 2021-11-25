window.onload=function(){
    //获取warp
    var warp=document.getElementById("warp");
    //获取imglist
    var imglist=document.getElementById("imglist");
    //获取li
    var lis=imglist.getElementsByTagName("li");
    //获取pointlist
    var pointlist=document.getElementById("pointlist");
    var point="<a href='#'></a>";

    var warpstyle=warp.currentStyle||getComputedStyle(warp,null);
    var imgliststyle=imglist.currentStyle||getComputedStyle(imglist,null);
    var onestep=parseInt(warpstyle.width)+parseInt(warpstyle.paddingLeft)+parseInt(warpstyle.paddingRight);
    imglist.style.width=lis.length*(onestep)+"px";
    var pointer="";
    for(var i=0;i<lis.length-1;++i){
        pointer+=point;
    };
    pointlist.innerHTML=pointer;
    var points=pointlist.getElementsByTagName("a");
    var index=0;
    nowpointstyle(index);

    var timer=autochange();

    function autochange(){
        // 设置一个计时器
        var time=setInterval(function(){
            othpointstyle(index);
            index++;
            index%=(lis.length-1);
            // console.log(index);
            nowpointstyle(index);
            var nowleft=parseInt(imgliststyle.left)-onestep;
            var speed=10;
            var ttimer=setInterval(function(){
                var nextleft=parseInt(imgliststyle.left)-speed;
                if(nextleft<nowleft)nextleft=nowleft;
                imglist.style.left=nextleft+"px";
                if(nextleft==nowleft){
                    if(nowleft==-onestep*(lis.length-1))imglist.style.left="0px";
                    clearInterval(ttimer);
                }
            },10);
        },2000+onestep);
        return time;
    };

    function nowpointstyle(i){
        points[i].style.backgroundColor="white";
        points[i].style.border="3px solid rgba(0,0,0,.1)";
        points[i].style.margin="0 1px";
    };
    function othpointstyle(i){
        points[i].style.backgroundColor="rgba(255,255,255,.4)";
        points[i].style.border="1px solid rgba(0,0,0,.05)";
        points[i].style.margin="2px 3px";
    };

    //为每一个point绑定鼠标移动事件响应函数
    for(var i=0;i<points.length;++i){
        points[i].index=i;
        points[i].onmouseover=function(){
            clearInterval(timer);
            othpointstyle(index);
            index=this.index;
            nowpointstyle(index);
            imglist.style.left=-this.index*onestep+"px";
            var outtimer=setTimeout(timer=autochange(),1000);
            // clearTimeout(outtimer);
        };
    };
}