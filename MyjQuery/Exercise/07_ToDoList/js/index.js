$(function(){
    // 本地存储数据方法
    // // 1.创建数据对象列表
    // var todolist=[
    //     {item:'吃屎',done:false},
    //     {item:'学习',done:true},
    //     {item:'拉屎',done:true},
    // ];
    // // 2.将数据对象列表转换为JSON字符串并存入本地
    // localStorage.setItem("tododata",JSON.stringify(todolist));
    // // 3.取得本地数据并将JSON字符串转化为对象格式
    // // var data=JSON.parse(localStorage.getItem("tododata"));

    showdata();

    // 读取数据
    function getData(path){
        var data=localStorage.getItem(path);
        if(data!==null)return JSON.parse(data);
        return [];
    }
    // 存入数据
    function setData(path,data){
        localStorage.setItem(path,JSON.stringify(data));
    }

    // 读取并显示本地数据
    function showdata(){
        $(".nowDo ul").empty();
        $(".did ul").empty();
        var data=getData("tododata");
        var numOfNowDo=0;
        var numOfDid=0;
        for(var i=0;i<data.length;++i){
            if(!data[i].done){
                numOfNowDo++;
                var newli=$("<li></li>");
                newli.html('<input type="checkbox" value="">\n<span >'+data[i].item+'</span>\n<a href="#"></a>');
                $(".nowDo ul").prepend(newli);
            }
            else{
                numOfDid++;
                var newli=$("<li></li>");
                newli.html('<input type="checkbox" value="">\n<span >'+data[i].item+'</span>\n<a href="#"></a>');
                $(".did ul").prepend(newli);
            }
            $("li").on("click","a",aclick);
            $("li").on("click","input",iclick);
        }
        $(".did ul li input").prop("checked",true);
        $(".nowDo .num p").html(numOfNowDo);
        $(".did .num p").html(numOfDid);
    }

    // 按下回车，将新的数据添加到本地
    $(".add input").on("keydown",function(event){
        if(event.keyCode===13&&$(this).val().length>0){
            var data=getData("tododata");
            var flag=false;
            for(var i=0;i<data.length;++i){
                if(data[i].item===$(this).val()){
                    flag=true;
                    break;
                }
            }
            if(flag){
                alert($(this).val()+"正在进行！");
            }
            else{
                data.push({item:$(this).val(),done:false});
                setData("tododata",data);
                showdata();
            }
            $(this).val("");
        }
    });

    // 按下删除可以删除任务
    function aclick(){
        var data=getData("tododata");
        for(var i=0;i<data.length;++i){
            if(data[i].item===$(this).siblings("span").html()){
                data.splice(i,1);
                break;
            }
        }
        setData("tododata",data);
        showdata();
    }

    // 更改任务类型
    function iclick(){
        var data=getData("tododata");
        for(var i=0;i<data.length;++i){
            if(data[i].item===$(this).siblings("span").html()){
                data[i].done=$(this).prop("checked");
                break;
            }
        }
        setData("tododata",data);
        showdata();
    }

    // $("li").on("click","a",aclick);
    // $("li").on("click","input",iclick);
});