/**
 * 
 * @param {*} option {
 *      type:请求方式 get或者post
 *      url:请求路径
 *      flag:同步or异步请求(false or true) 默认true
 *      data:发送的数据
 *      success:回调函数
 * }
 */
function myAjax(option){
    // 创建异步对象
    var xhr=new XMLHttpRequest();

    // 判断同步还是异步，默认异步
    if(option.flag&&option.flag==false)option.flag=false;
    else option=true;

    // 请求行
    // 如果是get并且有数据
    if(option.type='get'&&option.data){
        option.url+='?'+option.data;
        option.data=null;
    }
    xhr.open(option.type,option.url,option.flag);

    // 请求头 setRequestHeader() 参数：key1,valve1
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    
    // 注册回调函数,请求响应回来后执行
    xhr.onreadystatechange=function(){
        // 确保已经返回，并且请求地址存在
        if(xhr.readyState==4&&xhr.status==200){
            var type=xhr.getResponseHeader('Content-Type');
            // 是否为json
            if(type.indexOf('json')!=-1)option.success(JSON.parse(xhr.responseText));
            // 是否为xml
            else if(type.indexOf('xml')!=-1)option.success(xhr.responseXML);
            // 为普通字符串
            else option.success(xhr.responseText);
        }
    }
    
    // 请求主体&&发
    xhr.send(option.data);
}