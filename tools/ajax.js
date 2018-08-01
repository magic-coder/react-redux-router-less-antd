/*
**opts: {'可选参数'}
**method: 请求方式:GET/POST,默认值:'GET';
**url:    发送请求的地址, 默认值: 当前页地址;
**data: string,json;
**async: 是否异步:true/false,默认值:true;
**cache: 是否缓存：true/false,默认值:true;
**contentType: HTTP头信息，默认值：'application/x-www-form-urlencoded';
**success: 请求成功后的回调函数;
**error: 请求失败后的回调函数;
*/


// 根据地址栏区分本地环境和线上环境
var baseUrl  = ""
if(window.location.host.indexOf("localhost")>-1){
  baseUrl="/api"
}else{
  baseUrl=window.location.protocol+"//"+window.location.host
}

let configResText = function (responseText, resTextType){
  return resTextType == 'html' ? responseText : JSON.parse(responseText);
};

let ajax = function (opts){
  //一.设置默认参数
  var defaults = {    
      method: 'GET',
         url: '',
        data: '',
       async: true,
       cache: false,
 contentType: 'application/x-www-form-urlencoded',
 resTextType: '',
     success: function (){},
       error: function (){}
  };

  //二.用户参数覆盖默认参数    
  for(var key in opts){
    defaults[key] = opts[key];
  }

  //三.对数据进行处理
  if(typeof defaults.data === 'object'){    //处理 data
    var str = '';
    for(var key in defaults.data){
      var curDataStr = JSON.stringify(defaults.data[key]);
      if (curDataStr.charAt(0) == '[' && curDataStr.charAt(curDataStr.length-1) == ']') {
        var arrQuery = JSON.parse(curDataStr).map(function (item){
          return key + '[]=' + item
        }).join('&');
        str += key + '=' + arrQuery + '&';
      } else {
        str += key + '=' + defaults.data[key] + '&';
      }
    }
    defaults.data = str.substring(0, str.length - 1);
  }

  defaults.method = defaults.method.toUpperCase();    //处理 method

  defaults.cache = defaults.cache ? '' : '&' + new Date().getTime() ;//处理 cache

  if( defaults.method === 'GET' && (defaults.data || defaults.cache) ) {
    defaults.url += String('?' + defaults.data + defaults.cache);    //处理 url
    if(defaults.cache){
      defaults.url = defaults.url.replace(/(\?[^\?]+)\?/gi, '$1');
    }
  }

  //四.开始编写ajax
  //1.创建ajax对象
  var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  //2.和服务器建立联系，告诉服务器你要取什么文件
  oXhr.open(defaults.method, defaults.url, defaults.async);
  //3.发送请求
  if(defaults.method === 'GET')
    oXhr.send(null);
  else{
    oXhr.setRequestHeader("Content-type", defaults.contentType);
    oXhr.send(defaults.data);
  }    
  //4.等待服务器回应
  oXhr.onreadystatechange = function (){
    if(oXhr.readyState === 4){
      if(oXhr.status === 200)
        defaults.success.call(oXhr, configResText(oXhr.responseText, defaults.resTextType));
      else{
        defaults.error();
      }
    }
  };
};

// 通过 promist封装ajax的post方法
const POST = (url,data)=>{
    return new Promise((suce,fail)=>{
        ajax({
            method:'POST',
            url: baseUrl+url,
            data: data,
            success: (res)=> {
              suce(res)
            },
            error:(err)=>{
              fail(err)
            }
        });
    })
}
// 通过 promist封装ajax的get方法

const GET=(url,data)=>{
    return new Promise((suce,fail)=>{
        ajax({
            url: baseUrl+url,
            data: data,
            success: (res)=> {
              suce(res)
            },
            error:(err)=>{
              fail(err)
            }
        });
    })
}

const QmAjax={
  POST,
  GET
}

export default QmAjax