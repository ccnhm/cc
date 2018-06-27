//设定 url 中的 QueryString 值
function setUrlParam(param,v,url){
    if(!url) url = window.location.href;
	var urlmao="";
	var urlmaosize=url.lastIndexOf('#');
    if (urlmaosize != -1){
		urlmao=url.substring(urlmaosize);
		url=url.substring(0,urlmaosize);
	}
	var re1 = new RegExp("&" + param + "=([^&|$]*)","i");
	var re2 = new RegExp("\\?" + param + "=([^&|$]*)","i");
	url=url.replace(re1,"").replace(re2,"?").replace("?&","?");
    if (url.indexOf('?') == -1)
        return (url + '?' + param + '=' + v + urlmao);
    else if (url.indexOf('?') == url.length-1)
        return (url + param + '=' + v + urlmao);
	else
        return (url + '&' + param + '=' + v + urlmao);
}
//获取Query String 中某个参数的值
function getUrlParam(param,url){
    if(!url) url = window.location.href;
    var reg = new RegExp("(\\\?|&)" + param + "=([^&]+)(&|$)", "i");
    var r = url.match(reg);
    if (r != null) {
       // return r[2];
        return decodeURI(r[2]);

    } else {
        return "";
    }
}
//转向页面
function UrlGo(param, v, url){
    if(!url) url = window.location.href;
	window.location.href=setUrlParam(param, v, url);
}