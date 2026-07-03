!function (window, $) {

	var MDebug=function(){function e(e){"string"==typeof e&&(e=[e]);for(var t=0;t<e.length;t++)$("#js_mshare_debug_list").append('<li style="word-break: break-all;border-bottom: 1px solid darkred;">'+e[t]+"</li>")}var t='<div style="position: fixed;left: 0;bottom: 0;width:100%;z-index:100;">						<a id="js_mshare_debug_btn" href="javascript:void(0)" style="display: block;width:40px;height:40px;background:orangered;color:white;text-decoration: none;font-size: 40px;text-align: center;line-height: 50px;">^</a>						<ul id="js_mshare_debug_list" style="background:white;display: block;list-style:none;width:100%;margin: 0;padding: 0;border: 1px solid orangered;max-height: 400px;overflow: auto;font-size: 14px;display: none;">						</ul>					</div>',i=!1,o=[];return{init:function(){i=!0,$(document.body).append(t),$("#js_mshare_debug_btn").bind("click",function(){$("#js_mshare_debug_list").toggle()}),e(o),o=[]},log:function(t){i?e(t):o.push(t)}}}();;

	//加载工具类
	var Util=function(){function e(e){var t=document.createElement("a");t.href=e,this.url=e,this.get=function(e){var t=new RegExp("(?:&|/?)"+e+"=([^&$]+)").exec(this.url);return t?t[1]:""},this.set=function(e,n){var r=this.get(e);r?t.search=t.search.replace(new RegExp(e+"=([^&$]+)"),e+"="+n):t.search+=t.search.indexOf("?")>-1?"&"+e+"="+n:"?"+e+"="+n,this.url=t.href}}function t(e){for(var t="",n=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],r=0;e>r;r++)pos=Math.round(Math.random()*(n.length-1)),t+=n[pos];return t}function n(e){return"string"!=typeof e?e:e.indexOf("%25")>-1?e:encodeURIComponent(e)}return{UrlParse:function(t){return new e(t)},randomWord:t,getStore:function(e){return window.localStorage?window.localStorage.getItem(e):""},setStore:function(e,t){return window.localStorage?window.localStorage.setItem(e,t):void 0},encode:n}}();;
	//加载分享类
	var ShareLoad=function(){function e(e,n){var t=document,o=t.head||t.getElementsByTagName("head")[0]||t.documentElement,i=t.createElement("script");i.onload=n,i.onerror=function(){},i.async=!0,i.src=e[0],o.appendChild(i)}function n(e,n){var t={};for(var o in e)t[o]=e[o];for(var o in n)t[o]=n[o];return t}function t(e){var n="https://wxsign.nie.netease.com/sharecom/wxjs.php";(location.href.indexOf("eggy-go.com")>-1||location.href.indexOf("eggy-party.com")>-1||location.href.indexOf("eggy-gogogo.com")>-1)&&(n="https://wxsign.nie.netease.com/sharecom/wxjs_wx514c8f26b11fc6e2.php"),(location.href.indexOf("eggygogame.com")>-1||location.href.indexOf("party-eggygame.com")>-1)&&(n="https://wxsign.nie.netease.com/sharecom/wxjs_wx514c8f26b11fc6e2.php"),(location.href.indexOf("dhxy888.com")>-1||location.href.indexOf("dhxy917.com")>-1||location.href.indexOf("dhxymobile.com")>-1)&&(n="https://wxsign.nie.netease.com/sharecom/wxjs_wx46f6939995f0c2de.php"),(location.href.indexOf("onmyojimobile.com")>-1||location.href.indexOf("onmyoji-mobile.com")>-1||location.href.indexOf("yysmobile.com")>-1)&&(n="https://wxsign.nie.netease.com/sharecom/wxjs_wxc428b3a1eb73c91d.php"),"stzb"===d&&(n="https://wxsign.nie.netease.com/sharecom/wxjs_wx35182ef22b6333ba.php"),$.ajax({url:n,data:{url:location.href,type:"jsonp"},async:!1,dataType:"jsonp",success:function(n){n.appId&&e(n)}})}function o(n){e([m],function(e){e.config||(e=window.wx),t(function(t){var o=["onMenuShareTimeline","onMenuShareQQ","onMenuShareAppMessage","onMenuShareQZone","hideMenuItems","showMenuItems","showOptionMenu","hideOptionMenu"],i=[];n.wxapi&&n.wxapi.length&&(o=o.concat(n.wxapi)),n.wxtag&&n.wxtag.length&&(i=i.concat(n.wxtag)),e.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:o,openTagList:i}),e.ready(function(){g=!0;var t=[];n.hideMoments&&t.push("menuItem:share:timeline"),n.hideFriend&&t.push("menuItem:share:appMessage"),t.length&&e.hideMenuItems({menuList:t}),b&&c(b),n.ready&&n.ready()}),e.error(function(){})})})}function i(){e([u],function(){g=!0,b&&a(b)})}function c(e){if(!g)return void(b=e);var t={title:e.title,desc:e.desc,link:e.url,imgUrl:e.imgurl,type:"",dataUrl:"",success:function(){},cancel:function(){}};wx.onMenuShareAppMessage(n(t,{success:function(){e.callback&&e.callback({type:1,type_en:"friend",channel:f})}})),wx.onMenuShareQQ(n(t,{success:function(){e.callback&&e.callback({type:3,type_en:"qq",channel:f})}})),wx.onMenuShareQZone(n(t,{success:function(){e.callback&&e.callback({type:4,type_en:"qzone",channel:f})}})),wx.onMenuShareTimeline(n(t,{success:function(){e.callback&&e.callback({type:2,type_en:"moments",channel:f})},title:e.moments_title||e.title})),b=null}function a(e){if(!g)return void(b=e);var n={title:e.title,desc:e.desc,share_url:e.url,image_url:e.imgurl};window.mqq.data.setShareInfo(n),e.callback&&e.callback({type:0,channel:f}),b=null}function r(e){var n='<meta itemprop="image" content="'+e.imgurl+'" /> 					<meta name="description" itemprop="description" content="'+e.desc+'" />',t=$("head meta[itemprop=image]")[0],o=$("head meta[itemprop=description]")[0];t&&o?(t.content=e.imgurl,o.content=e.desc):$("head").append(n),p(e)}function s(e){if("other"==f||e.type){var n="";switch(e.type){case"facebook":n="https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e.url)+"&picture="+encodeURIComponent(e.imgurl)+"&description="+encodeURIComponent(e.desc)+"&title="+encodeURIComponent(e.title)+"&display=popup&ref=plugin&src=share_button";break;case"twitter":n="https://twitter.com/intent/tweet?text="+encodeURIComponent(e.desc)+"&url="+encodeURIComponent(e.url);break;case"line":n="https://lineit.line.me/share/ui?url="+encodeURIComponent(e.url);break;case"weibo":n="http://service.weibo.com/share/share.php?title="+encodeURIComponent(e.title)+"&url="+encodeURIComponent(e.url)+"&pic="+e.imgurl;break;case"yixin":n="http://open.yixin.im/share?appkey=yx3ae08a776bf04178a583cb745fb6aa0c&type=webpage&url="+encodeURIComponent(e.url)+"&title="+encodeURIComponent(e.title)+"&desc="+encodeURIComponent(e.desc)+"&pic="+encodeURIComponent(e.imgurl);break;case"qqzone":n="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(e.url)+"&title="+encodeURIComponent(e.title)+"&desc="+encodeURIComponent(e.desc)+"&pics="+encodeURIComponent(e.imgurl)}n&&setTimeout(function(){window.location.href=n},300)}else switch(f){case"facebook":window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(e.url)+"&picture="+encodeURIComponent(e.imgurl)+"&description="+encodeURIComponent(e.desc)+"&title="+encodeURIComponent(e.title)+"&display=popup&ref=plugin&src=share_button","facebook");break;case"twitter":window.open("https://twitter.com/share?url="+encodeURIComponent(e.url)+"&text="+encodeURIComponent(e.desc),"twiiter");break;case"line":window.open("line://msg/text/"+encodeURIComponent(e.url),"line");break;case"weibo":window.open("http://service.weibo.com/share/share.php?title="+encodeURIComponent(e.title)+"&url="+encodeURIComponent(e.url)+"&pic="+e.imgurl,"weibo")}e.callback&&e.callback({type:0,channel:f})}function p(e){if(document.title=e.title,window.history.replaceState)try{window.history.replaceState(null,e.title,e.url)}catch(n){return e.callback&&e.callback({type:0,channel:f,msg:n.message})}e.callback&&e.callback({type:0,channel:f})}function l(e){d=e.product||"","wechat"==f?o(e):"qq"==f?i():g=!0}var m="//res.wx.qq.com/open/js/jweixin-1.6.2.js",u="//open.mobile.qq.com/sdk/qqapi.js?_bid=152",h={},d="",f="",w="",g=!1,b=null;return{initParam:function(){var e=navigator.userAgent;f="other",w="other",e.match(/MicroMessenger\/([\d\.]+)/i)&&(f="wechat"),e.match(/QQ\/([\d\.]+)/i)&&(f="qq"),e.match(/WeiBo/i)&&(f="weibo"),e.match(/\[FB|Facebook/i)&&(f="facebook"),e.match(/Twitter/i)&&(f="twitter"),e.match(/Line/i)&&(f="line"),"undefined"!=typeof yyy&&yyy.isInApp&&yyy.isInApp()?f="music":e.match(/NeteaseMusic/i)&&(f="music"),e.match(/iphone os|ipad/i)&&(w="ios"),e.match(/android/i)&&(w="android")},init:l,setShare:function(e){var n=$.extend({title:document.title,desc:document.desc,url:window.location.href,imgurl:"https://webinput.nie.netease.com/img/nie/icon.png/128"},e);switch(h=n,f){case"wechat":c(n);break;case"qq":e.isnew?r(n):a(n);break;case"weibo":p(n)}},openShare:function(e){var n=$.extend({title:document.title,desc:document.desc,url:window.location.href,imgurl:"https://webinput.nie.netease.com/img/nie/icon.png/128"},e);e.url?h=n:h.type=e.type,s(h)},updateShare:function(e){h=$.extend(h,e),this.setShare(h)},getClient:function(){return f},getOS:function(){return w},getShareParam:function(){return h}}}();;
	//加载上报类
	var Report=function(){function e(e,o){"number"!=typeof o&&(o=0);var t=function(e){var t=[],a="";for(var c in e)e[c]&&t.push(c+"="+Util.encode(e[c]));if(a=n+"?"+t.join("&")+"&_t="+Math.random(),o){var r=$("<iframe name='img_report' />");r.css("display","none").appendTo("body");try{$(r[0].contentWindow.document.body).append('<img src="'+a+'" />')}catch(i){(new Image).src=a}setTimeout(function(){r.remove()},o)}else(new Image).src=a;console.log(a),MDebug.log(a)};setTimeout(function(){t(e)},o)}function o(e){var o=[],t="";for(var a in e)e[a]&&o.push(a+"="+Util.encode(e[a]));t=n+"?"+o.join("&")+"&_t="+Math.random(),navigator&&navigator.sendBeacon&&navigator.sendBeacon(t,null)}var n=window.location.hostname.match(/\.163\.com|\.netease\.com|\.16163\.com|\.eggygogame\.com|\.eggy-go\.com|\.eggy-party\.com|\.blizzard\.cn|\.yysls\.cn|\.party-eggygame\.com/i)?"https://bee.tc.netease.com/record_one":"https://bee.tc.easebar.com/record_one";return window.location.hostname.match(/\.harrypottermagicawakened\.com/i)&&window.location.pathname.indexOf("/cn/")>-1&&(n="https://bee.tc.netease.com/record_one"),{report:e,closeReport:o}}();;
	//加载弹层类
	var ShareDialog=function(){function t(){return l?!1:(e(),n(),r(),void(l=!0))}function e(){var t=document.createElement("link");t.href="https://nie.res.netease.com/comm/js/nie/util/mshare/css/share-dialog/mobile-share.css",t.rel="stylesheet",document.head.appendChild(t)}function n(){c=document.createElement("div"),c.id="NIE-share-m",c.className="NIE-share-m",document.body.appendChild(c);var t='<%if( type == "other") {%>\n<div class="NIE-share_ctrl">\n    <div class="NIE-share_buttons">\n        <a class="NIE-share-btn_cp" href="javascript:void(0)"\n            data-clipboard-text="<%=shareUrl%>"\n        >\n            <i class="sharefont">&#xa0004;</i><em>\u590d\u5236\u94fe\u63a5</em>\n        </a>\n        <a class="NIE-share-btn_wx" href="javascript:void(0)"><i class="sharefont">&#xa0005;</i><em>\u5fae\u4fe1</em></a>\n        <a class="NIE-share-btn_wb" href="javascript:void(0)"><i class="sharefont">&#xa0003;</i><em>\u5fae\u535a</em></a>\n        <a class="NIE-share-btn_qq" href="javascript:void(0)"><i class="sharefont">&#xa0006;</i><em>QQ\u7a7a\u95f4</em></a>\n    </div>\n    <div class="NIE-share_qrcode">\n        <div>\n            <a class="NIE-btn-close "><i class="sharefont ">&#xa0001;</i></a>\n            <p><%=referText.qnCoder%></p>\n            <span></span>\n        </div>\n    </div>\n</div>\n<%}else{%>\n<div class="NIE-share-guide">\n    <div class="arrow_line">\n        <em></em><i></i><span></span>\n    </div>\n    <p><%=guideText%></p>\n</div>\n<%}%>',e=tmpl(t,{type:MShare.getClient(),guideText:h.guideText,referText:f,shareUrl:a()});c.innerHTML=e,c=$(c)}function r(){if(c[0].addEventListener("click",function(t){var e=t.target;$(e).hasClass("NIE-btn-close")||$(e).parent().hasClass("NIE-btn-close")?(o(),t.stopPropagation()):($(e).hasClass("NIE-share_buttons")||$(e).hasClass("NIE-share_qrcode")||$(e).hasClass("NIE-share_link")||$(e).hasClass("NIE-share-m"))&&(c.removeClass("show"),setTimeout(function(){c.hide(),o()},300))},!1),c[0].addEventListener("touchmove",function(t){t.preventDefault()},!1),"other"==MShare.getClient()){var t=new ClipboardJS(".NIE-share-btn_cp",{text:function(){return a()}});t.on("success",function(){alert("\u590d\u5236\u6210\u529f")}),t.on("error",function(){alert("\u590d\u5236\u5931\u8d25")}),c.find(".NIE-share-btn_wx")[0].addEventListener("click",function(t){i(),c.find(".NIE-share_ctrl").addClass("show_qrcode"),t.stopPropagation()},!1),c.find(".NIE-share-btn_wb")[0].addEventListener("click",function(){MShare.openShare({type:"weibo"})},!1),c.find(".NIE-share-btn_qq")[0].addEventListener("click",function(){MShare.openShare({type:"qqzone"})},!1)}}function o(){var t=c.find(".NIE-share_ctrl");t.removeClass(t.hasClass("show_qrcode")?"show_qrcode":"show_link")}function i(){function t(){var t=new u(n,{width:400,height:400,icon:h.qrcodeIcon==d?e:h.qrcodeIcon});t.makeCode(a())}if(window.location.hostname.indexOf(".163.com")<0){var e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAHOyDIJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADBQTFRF9Z2k71hk////+s7S5gET/efp6BMj6ic2/vP07DxK/vn5+Le88nuE/Nzf/e3u////N/82YwAAABB0Uk5T////////////////////AOAjXRkAAAZnSURBVHjaRIxBDsAwCMNo6l3GNP7/25bSdTkQC0W2CFXCPpLs0LWQF8gvt/q8E1247y2ZhVmNXgaekv3eIYDgTH5+hBVITBYQk4+JnYUdZAXIVqhtTOxMDJxAFpDJzMTGBEIQR7IwcUGYjCwgaWSn8wMEYIMMlwAEQRhsuEaSne//tmJ2alf84sbBtxHKJP/Alpri0aIYwNxFY7KscieVTR4rbqvhAjo09E3vKZowbp4u7a74QDlAuKR9DjHmN53gYulrvpQqAKFkkAMhDALAgpRaYdv//1agat1Nk71onHiAGQz2H9Tf3XCh98/uK0htQnAh9kj0zEmCapAt0zW8b0h7pIg2DnmzrfMQBJcly4oEO4vtqqgBm1fPOH6saQiJr1L8zU8jC+PjbKJi6m+IAtVNw4dRb5813CYPMnPE/TSn9O6e43ihDHTMNenrllbqVo1OARgpoyQGQRiIYohAgOD9b9sNONZiW2XED2YNMfsS82ij/2sbvt3Jjoj0aH1n+7pi+iXMqtpGH5jD9SoszOKncLCFzsIEPGonJ9aiTX1xWCv5M+yColfDAdygjwIfnwc0yCFkMRMrBYHa2fX9vEQOjdthYrNIRkFweK0slhby7/YuJ7cL7UIJTXDRgr0uyDbEz3EAoEjwjKEC0pPRbuzzLKwBYVCD4vLI3mEz6STEpR6DIwNXtvqo8Sw9mXkS9ZThQLTmq+P+vI/TaWShdmI/pQkcF6ur/zXb3keod7uePsbsEbiD8Lte6IrtJQCr1aKjMAzD0iVdX9v4/789O2Vc2Q4xdCAmIeGlSRrb6cDbW9ztu+R6oZ6vipku0nX6LrBeBK56DRgwJq+Acef/pCCo/RlRZuufuRt/yCb5DCz2PLAkQDiLVHBatXIPmRKjt4Oa1cnFX3ma6Ba7ojR35AEoFjPOyC4S2ob3Sc8HcGVm+AqeSoqFgRiDkIqBnS48EdUAVMojQGdZB4pl00zCZ1+AUvcsSqjcfd+B1bZqFBWkh3BClYr016TdIXfgjD/RXKKNErS67Lbe1ToAkVNAODTGdZNP22V6dIWIlyg7yK/prmUSVtezEZj61oJC1VxuF/4IJkefsRbpvX1jQ8Xa1z5o3pKegLNwDyh0Wdxs6WmyAcx8BLKQ7DtjFGUWwKKR8OVDjtGNo/olbwtvYkM50epmBy/EizP632a0DT1GihwOmcbBdKCiqw8HypjFiPNlKnZy18XXHNTCMU0ry/m9vCcbXnysVmExHLPS158//Loi1oJQFVslYTrugQdjl7Qv27yY9n4D0DMPz8DqPN7+sVN8JKQf2Md0Ueyv+cyPALVY12LDIAwUYLZw/v9vqwGpndjOKPVTmpSz0Did1PvMG03kdSvaAdo/PntAO+X5BbR2IiJMgxthtnYu4lTAdS0zASsx9GonATZkFgqfADrAHEcDJwYr1HqzMTnrdwFZWPu3ruyMnAnZIFTnaHRwznm2Sh6oTGko3bW85BGRGxH93e0MRqBr+o1ERSY/LK+Jiby8RCFHj3k5f6Kp0htPAR2aYpORFs03Fp6E9eLVcO+VT4DC3dWWzsiO/gw8MtAEO7rJU4Tjhr33gFW8n6XX93EhVB2N6GvqOvjYRtTJizkkd542WuAf6VPTuSLpW2Tgg7zs+00V5YJbvA2gk+OZ7QNup/QxeJ0JCbxlsVE936DHKILM9/Wo/Uif56s26vb8L6IbjWaXYUfajYzMCH5sL8xhPwMxh2DFwCCarpG7Tfd56dIsQ9q73BS706UPUWaJoYC+3wR6XHAYud2s5HbWcYfmQr6nYrmetdyo2UiT+py+6FTs3dVaYDhWsaAP0o2rVMpUfgYuMIKn2ThI9PEaUG4KEhsfWaMmlm+jTNnITGiVIQO/UPx9Bhg51XkxxHHGbTwN28ZlqBlOqeLZG66fOQMk64qqfSm63eJCoIVLODDN9tUC8pFzGSQJnYgj3ag0uj8qd6pAl4LxqiJFci7+cleTZRTnU7hZulY91DhHJGs6EfjAlH29/AHN+ZUzKCE4+X9fe5EZt3ElVw68sU0yg061cvusllEdWke810OteUxfTgavWp4IN9xdicu5dYcEW2BY1+dIkvsxYru70qxfLdBSnzdd54Ik7wlYrqb21+rZV0AzGKtOUNmUl5Goz32kvm4T9dw/Cc5ZmvhBtN+moO3Him9Bb7vnB1JNXHQa2ih+AAAAAElFTkSuQmCC",n=c.find(".NIE-share_qrcode span")[0];n.innerHTML="";var r=new Image;return r.onload=function(){t()},r.onerror=function(){t()},r.src=h.qrcodeIcon==d?e:h.qrcodeIcon,!1}var o=c.find(".NIE-share_qrcode span");if(0==o.find("img").length){var i=document.createElement("img");i.src="https://qrcode2.webapp.163.com/l?d="+encodeURIComponent(a())+"&l="+encodeURIComponent(h.qrcodeIcon),o.append(i)}else o.find("img")[0].src="https://qrcode2.webapp.163.com/l?d="+encodeURIComponent(a())+"&l="+encodeURIComponent(h.qrcodeIcon)}function a(){return MShare.getShareParam().url}function s(e){h=$.extend({guideText:"\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2\u8fdb\u884c\u5206\u4eab",qrcodeIcon:d},e||{}),t(),setTimeout(function(){c.show(),c.addClass("show")},200)}!function(){var t={};this.tmpl=function e(n,r){var o=/\W/.test(n)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+n.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):t[n]=t[n]||e(document.getElementById(n).innerHTML);return r?o(r):o}}();var u;!function(){function t(t){this.mode=c.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;n>e;e++){var r=[],o=this.data.charCodeAt(e);o>65536?(r[0]=240|(1835008&o)>>>18,r[1]=128|(258048&o)>>>12,r[2]=128|(4032&o)>>>6,r[3]=128|63&o):o>2048?(r[0]=224|(61440&o)>>>12,r[1]=128|(4032&o)>>>6,r[2]=128|63&o):o>128?(r[0]=192|(1984&o)>>>6,r[1]=128|63&o):r[0]=o,this.parsedData.push(r)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function n(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}function r(t,e){this.totalCount=t,this.dataCount=e}function o(){this.buffer=[],this.length=0}function i(){return"undefined"!=typeof CanvasRenderingContext2D}function a(){var t=!1,e=navigator.userAgent;return/android/i.test(e)&&(t=!0,aMat=e.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(t=parseFloat(aMat[1]))),t}function s(t,e){for(var n=1,r=l(t),o=0,i=m.length;i>=o;o++){var a=0;switch(e){case h.L:a=m[o][0];break;case h.M:a=m[o][1];break;case h.Q:a=m[o][2];break;case h.H:a=m[o][3]}if(a>=r)break;n++}if(n>m.length)throw new Error("Too long data");return n}function l(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}t.prototype={getLength:function(){return this.parsedData.length},write:function(t){for(var e=0,n=this.parsedData.length;n>e;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var n=new t(e);this.dataList.push(n),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,n){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++)this.modules[r][o]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,n),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,n)},setupPositionProbePattern:function(t,e){for(var n=-1;7>=n;n++)if(!(-1>=t+n||this.moduleCount<=t+n))for(var r=-1;7>=r;r++)-1>=e+r||this.moduleCount<=e+r||(this.modules[t+n][e+r]=n>=0&&6>=n&&(0==r||6==r)||r>=0&&6>=r&&(0==n||6==n)||n>=2&&4>=n&&r>=2&&4>=r?!0:!1)},getBestMaskPattern:function(){for(var t=0,e=0,n=0;8>n;n++){this.makeImpl(!0,n);var r=d.getLostPoint(this);(0==n||t>r)&&(t=r,e=n)}return e},createMovieClip:function(t,e,n){var r=t.createEmptyMovieClip(e,n),o=1;this.make();for(var i=0;i<this.modules.length;i++)for(var a=i*o,s=0;s<this.modules[i].length;s++){var u=s*o,l=this.modules[i][s];l&&(r.beginFill(0,100),r.moveTo(u,a),r.lineTo(u+o,a),r.lineTo(u+o,a+o),r.lineTo(u,a+o),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=d.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],o=t[n];if(null==this.modules[r][o])for(var i=-2;2>=i;i++)for(var a=-2;2>=a;a++)this.modules[r+i][o+a]=-2==i||2==i||-2==a||2==a||0==i&&0==a?!0:!1}},setupTypeNumber:function(t){for(var e=d.getBCHTypeNumber(this.typeNumber),n=0;18>n;n++){var r=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(var n=0;18>n;n++){var r=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},setupTypeInfo:function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=d.getBCHTypeInfo(n),o=0;15>o;o++){var i=!t&&1==(r>>o&1);6>o?this.modules[o][8]=i:8>o?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(var o=0;15>o;o++){var i=!t&&1==(r>>o&1);8>o?this.modules[8][this.moduleCount-o-1]=i:9>o?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var n=-1,r=this.moduleCount-1,o=7,i=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[r][a-s]){var u=!1;i<t.length&&(u=1==(t[i]>>>o&1));var l=d.getMask(e,r,a-s);l&&(u=!u),this.modules[r][a-s]=u,o--,-1==o&&(i++,o=7)}if(r+=n,0>r||this.moduleCount<=r){r-=n,n=-n;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,n,i){for(var a=r.getRSBlocks(t,n),s=new o,u=0;u<i.length;u++){var l=i[u];s.put(l.mode,4),s.put(l.getLength(),d.getLengthInBits(l.mode,t)),l.write(s)}for(var c=0,u=0;u<a.length;u++)c+=a[u].dataCount;if(s.getLengthInBits()>8*c)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*c+")");for(s.getLengthInBits()+4<=8*c&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*c||(s.put(e.PAD0,8),s.getLengthInBits()>=8*c));)s.put(e.PAD1,8);return e.createBytes(s,a)},e.createBytes=function(t,e){for(var r=0,o=0,i=0,a=new Array(e.length),s=new Array(e.length),u=0;u<e.length;u++){var l=e[u].dataCount,c=e[u].totalCount-l;o=Math.max(o,l),i=Math.max(i,c),a[u]=new Array(l);for(var h=0;h<a[u].length;h++)a[u][h]=255&t.buffer[h+r];r+=l;var f=d.getErrorCorrectPolynomial(c),p=new n(a[u],f.getLength()-1),g=p.mod(f);s[u]=new Array(f.getLength()-1);for(var h=0;h<s[u].length;h++){var m=h+g.getLength()-s[u].length;s[u][h]=m>=0?g.get(m):0}}for(var v=0,h=0;h<e.length;h++)v+=e[h].totalCount;for(var y=new Array(v),A=0,h=0;o>h;h++)for(var u=0;u<e.length;u++)h<a[u].length&&(y[A++]=a[u][h]);for(var h=0;i>h;h++)for(var u=0;u<e.length;u++)h<s[u].length&&(y[A++]=s[u][h]);return y};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},h={L:1,M:0,Q:3,H:2},f={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;d.getBCHDigit(e)-d.getBCHDigit(d.G15)>=0;)e^=d.G15<<d.getBCHDigit(e)-d.getBCHDigit(d.G15);return(t<<10|e)^d.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;d.getBCHDigit(e)-d.getBCHDigit(d.G18)>=0;)e^=d.G18<<d.getBCHDigit(e)-d.getBCHDigit(d.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return d.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case f.PATTERN000:return(e+n)%2==0;case f.PATTERN001:return e%2==0;case f.PATTERN010:return n%3==0;case f.PATTERN011:return(e+n)%3==0;case f.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case f.PATTERN101:return e*n%2+e*n%3==0;case f.PATTERN110:return(e*n%2+e*n%3)%2==0;case f.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new n([1],0),r=0;t>r;r++)e=e.multiply(new n([1,p.gexp(r)],0));return e},getLengthInBits:function(t,e){if(e>=1&&10>e)switch(t){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(27>e)switch(t){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(41>e))throw new Error("type:"+e);switch(t){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;e>r;r++)for(var o=0;e>o;o++){for(var i=0,a=t.isDark(r,o),s=-1;1>=s;s++)if(!(0>r+s||r+s>=e))for(var u=-1;1>=u;u++)0>o+u||o+u>=e||(0!=s||0!=u)&&a==t.isDark(r+s,o+u)&&i++;i>5&&(n+=3+i-5)}for(var r=0;e-1>r;r++)for(var o=0;e-1>o;o++){var l=0;t.isDark(r,o)&&l++,t.isDark(r+1,o)&&l++,t.isDark(r,o+1)&&l++,t.isDark(r+1,o+1)&&l++,(0==l||4==l)&&(n+=3)}for(var r=0;e>r;r++)for(var o=0;e-6>o;o++)t.isDark(r,o)&&!t.isDark(r,o+1)&&t.isDark(r,o+2)&&t.isDark(r,o+3)&&t.isDark(r,o+4)&&!t.isDark(r,o+5)&&t.isDark(r,o+6)&&(n+=40);for(var o=0;e>o;o++)for(var r=0;e-6>r;r++)t.isDark(r,o)&&!t.isDark(r+1,o)&&t.isDark(r+2,o)&&t.isDark(r+3,o)&&t.isDark(r+4,o)&&!t.isDark(r+5,o)&&t.isDark(r+6,o)&&(n+=40);for(var c=0,o=0;e>o;o++)for(var r=0;e>r;r++)t.isDark(r,o)&&c++;var h=Math.abs(100*c/e/e-50)/5;return n+=10*h}},p={glog:function(t){if(1>t)throw new Error("glog("+t+")");return p.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return p.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},g=0;8>g;g++)p.EXP_TABLE[g]=1<<g;for(var g=8;256>g;g++)p.EXP_TABLE[g]=p.EXP_TABLE[g-4]^p.EXP_TABLE[g-5]^p.EXP_TABLE[g-6]^p.EXP_TABLE[g-8];for(var g=0;255>g;g++)p.LOG_TABLE[p.EXP_TABLE[g]]=g;n.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<t.getLength();o++)e[r+o]^=p.gexp(p.glog(this.get(r))+p.glog(t.get(o)));return new n(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=p.glog(this.get(0))-p.glog(t.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(var o=0;o<t.getLength();o++)r[o]^=p.gexp(p.glog(t.get(o))+e);return new n(r,0).mod(t)}},r.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r.getRSBlocks=function(t,e){var n=r.getRsBlockTable(t,e);if(void 0==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var o=n.length/3,i=[],a=0;o>a;a++)for(var s=n[3*a+0],u=n[3*a+1],l=n[3*a+2],c=0;s>c;c++)i.push(new r(u,l));return i},r.getRsBlockTable=function(t,e){switch(e){case h.L:return r.RS_BLOCK_TABLE[4*(t-1)+0];case h.M:return r.RS_BLOCK_TABLE[4*(t-1)+1];case h.Q:return r.RS_BLOCK_TABLE[4*(t-1)+2];case h.H:return r.RS_BLOCK_TABLE[4*(t-1)+3];default:return void 0}},o.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;e>n;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var m=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],v=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var n=document.createElementNS("http://www.w3.org/2000/svg",t);for(var r in e)e.hasOwnProperty(r)&&n.setAttribute(r,e[r]);return n}var n=this._htOption,r=this._el,o=t.getModuleCount();Math.floor(n.width/o),Math.floor(n.height/o),this.clear();var i=e("svg",{viewBox:"0 0 "+String(o)+" "+String(o),width:"100%",height:"100%",fill:n.colorLight});i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(i),i.appendChild(e("rect",{fill:n.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;o>a;a++)for(var s=0;o>s;s++)if(t.isDark(a,s)){var u=e("use",{x:String(a),y:String(s)});u.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),i.appendChild(u)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),y="svg"===document.documentElement.tagName.toLowerCase(),A=y?v:i()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var n=this;if(n._fFail=e,n._fSuccess=t,null===n._bSupportDataURI){var r=document.createElement("img"),o=function(){n._bSupportDataURI=!1,n._fFail&&_fFail.call(n)},i=function(){n._bSupportDataURI=!0,n._fSuccess&&n._fSuccess.call(n)};return r.onabort=o,r.onerror=o,r.onload=i,void(r.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}n._bSupportDataURI===!0&&n._fSuccess?n._fSuccess.call(n):n._bSupportDataURI===!1&&n._fFail&&n._fFail.call(n)}if(this._android&&this._android<=2.1){var n=1/window.devicePixelRatio,r=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,o,i,a,s,u,l){if("nodeName"in t&&/img/i.test(t.nodeName))for(var c=arguments.length-1;c>=1;c--)arguments[c]=arguments[c]*n;else"undefined"==typeof l&&(arguments[1]*=n,arguments[2]*=n,arguments[3]*=n,arguments[4]*=n);r.apply(this,arguments)}}var o=function(t,e){this._bIsPainted=!1,this._android=a(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return o.prototype.draw=function(t){var e=this._elImage,n=this._oContext,r=this._htOption,o=t.getModuleCount(),i=r.width/o,a=r.height/o,s=Math.round(i),u=Math.round(a);e.style.display="none",this.clear();for(var l=0;o>l;l++)for(var c=0;o>c;c++){var h=t.isDark(l,c),f=c*i,d=l*a;n.strokeStyle=h?r.colorDark:r.colorLight,n.lineWidth=1,n.fillStyle=h?r.colorDark:r.colorLight,n.fillRect(f,d,i,a),n.strokeRect(Math.floor(f)+.5,Math.floor(d)+.5,s,u),n.strokeRect(Math.ceil(f)-.5,Math.ceil(d)-.5,s,u)}this._bIsPainted=!0},o.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},o.prototype.isPainted=function(){return this._bIsPainted},o.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},o.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},o}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,n=this._el,r=t.getModuleCount(),o=Math.floor(e.width/r),i=Math.floor(e.height/r),a=['<table style="border:0;border-collapse:collapse;">'],s=0;r>s;s++){a.push("<tr>");for(var u=0;r>u;u++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+o+"px;height:"+i+"px;background-color:"+(t.isDark(s,u)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),n.innerHTML=a.join("");var l=n.childNodes[0],c=(e.width-l.offsetWidth)/2,h=(e.height-l.offsetHeight)/2;c>0&&h>0&&(l.style.margin=h+"px "+c+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();u=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:h.H,icon:""},"string"==typeof e&&(e={text:e}),e)for(var n in e)this._htOption[n]=e[n];"string"==typeof t&&(t=document.getElementById(t)),this._android=a(),this._el=t,this._oQRCode=null,this._oDrawing=new A(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},u.prototype.makeCode=function(t){function n(){r._oQRCode=new e(s(t,r._htOption.correctLevel),r._htOption.correctLevel),r._oQRCode.addData(t),r._oQRCode.make(),r._el.title=t,r._oDrawing.draw(r._oQRCode)}var r=this;if("string"==typeof this._htOption.icon){var o=new Image;o.onload=function(){n();var t=r._oDrawing._elCanvas,e=t.getContext("2d");e.save(),e.drawImage(this,0,0,this.width,this.height,3*r._htOption.width/8,3*r._htOption.height/8,r._htOption.width/4,r._htOption.height/4),e.restore(),r.makeImage()},o.onerror=function(){n(),r.makeImage()},o.src=this._htOption.icon}else n(),this.makeImage()},u.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},u.prototype.clear=function(){this._oDrawing.clear()},u.CorrectLevel=h}(),!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return function(){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}var e={686:function(t,e,n){"use strict";function r(t){try{return document.execCommand(t)}catch(e){return!1}}function o(t){var e="rtl"===document.documentElement.getAttribute("dir"),n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[e?"right":"left"]="-9999px";var r=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(r,"px"),n.setAttribute("readonly",""),n.value=t,n}function i(t){"@babel/helpers - typeof";return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){"@babel/helpers - typeof";return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=g();return function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function v(t,e){var n="data-clipboard-".concat(t);return e.hasAttribute(n)?e.getAttribute(n):void 0}n.d(e,{"default":function(){return M}});var y=n(279),A=n.n(y),E=n(370),b=n.n(E),w=n(817),C=n.n(w),_=function(t){var e=C()(t);return r("cut"),e},T=_,I=function(t,e){var n=o(t);e.container.appendChild(n);var i=C()(n);return r("copy"),n.remove(),i},D=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof t?n=I(t,e):t instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null===t||void 0===t?void 0:t.type)?n=I(t.value,e):(n=C()(t),r("copy")),n},L=D,k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.action,n=void 0===e?"copy":e,r=t.container,o=t.target,a=t.text;if("copy"!==n&&"cut"!==n)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==i(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===n&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===n&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return a?L(a,{container:r}):o?"cut"===n?T(o):L(o,{container:r}):void 0},N=k,P=function(t){function e(t,r){var o;return s(this,e),o=n.call(this),o.resolveOptions(r),o.listenClick(t),o}c(e,t);var n=f(e);return l(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===a(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=b()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget,n=this.action(e)||"copy",r=N({action:n,container:this.container,target:this.target(e),text:this.text(e)});this.emit(r?"success":"error",{action:n,text:r,trigger:e,clearSelection:function(){e&&e.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(t){return v("action",t)
}},{key:"defaultTarget",value:function(t){var e=v("target",t);return e?document.querySelector(e):void 0}},{key:"defaultText",value:function(t){return v("text",t)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return L(t,e)}},{key:"cut",value:function(t){return T(t)}},{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}(A()),M=P},828:function(t){function e(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=e},438:function(t,e,n){function r(t,e,n,r,o){var a=i.apply(this,arguments);return t.addEventListener(n,a,o),{destroy:function(){t.removeEventListener(n,a,o)}}}function o(t,e,n,o,i){return"function"==typeof t.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return r(t,e,n,o,i)}))}function i(t,e,n,r){return function(n){n.delegateTarget=a(n.target,e),n.delegateTarget&&r.call(t,n)}}var a=n(828);t.exports=o},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(t))return o(t,e,n);if(s.nodeList(t))return i(t,e,n);if(s.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return u(document.body,t,e,n)}var s=n(879),u=n(438);t.exports=r},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){o.off(t,r),e.apply(n,arguments)}var o=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;o>r;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;a>i;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},n={};return!function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),!function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),!function(){t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),t(686)}().default});var l=!1,c=null,h={},f={qnCoder:"\u957f\u6309\u4fdd\u5b58\u4e8c\u7ef4\u7801\u5230\u672c\u5730<br />\u4f7f\u7528\u5fae\u4fe1\u8bc6\u522b\u8fdb\u884c\u5206\u4eab",copyLink:"\u957f\u6309\u94fe\u63a5\u590d\u5236\u540e\u5206\u4eab\u7ed9\u597d\u53cb"},d="https://nie.res.netease.com/comm/js/nie/util/mobishare2/logo_min.png";return{open:s}}();;

	var Download = function () {
    
    var isInit = false,
        $dialogDom = null;

    function _init() {

        if (isInit) return false;

        _loadFile();
        _createHtml();
        _initEvent();

        isInit = true;
    }

    function _loadFile() {

        var styleTag = document.createElement("link");
        styleTag.href = "https://nie.res.netease.com/comm/js/nie/util/mshare/css/download.css";
        styleTag.rel = "stylesheet";
        document.head.appendChild(styleTag);
    }

    function _createHtml() {

        $dialogDom = document.createElement("div");
        $dialogDom.id = "NIE-share-download";
        $dialogDom.className = "NIE-share-download";
        document.body.appendChild($dialogDom);

        var tmplStr = "\n<div class=\"NIE-share-download-arrow\"></div>\n<div class=\"NIE-share-download-guide\">\n    <div class=\"NIE-share-download-tips\">\n        <span>第一步：</span>\n        <p>复制下载地址</p>\n    </div>\n    <div class=\"NIE-share-download-link\">\n        <span></span>\n        <div class=\"NIE-share-download-btn_cp\">复制</div>\n    </div>\n    <div class=\"NIE-share-download-tips\">\n        <span>第二步：</span>\n        <p>前往浏览器打开地址<br>即可下载游戏！</p>\n    </div>\n</div>";

        var html = tmpl(tmplStr, {});

        $dialogDom.innerHTML = html;

        $dialogDom = $($dialogDom);
    }

    function _initEvent() {

        $dialogDom[0].addEventListener("click", function (e) {
            var tag = e.target;
            if ($(tag).hasClass("NIE-share-download")) {
                closeDownload()
            }
        }, false);

        $dialogDom[0].addEventListener("touchmove", function (e) {
            e.preventDefault();
        }, false);

        var clipboard = new ClipboardJS('.NIE-share-download-btn_cp',{
            text : function(){
                MShare.report({ monitor: 'download_action_copy', desc: '复制下载地址' })
                return $dialogDom.find('.NIE-share-download-link span').text();
            }
        });
        clipboard.on('success', function (e) {
            alert("复制成功");
        });
        clipboard.on('error', function (e) {
            alert("复制失败");
        });

    }


	function setDownload (params) {
        _init();

		$(params.target).on('click', function (e) {
			const url = params.url || $(this).attr('href')
			$dialogDom.find('.NIE-share-download-link span').text(url)

			var type = 'web'
            var desc = '专题页'
			if (window.__wxjs_environment === 'miniprogram' || window.navigator.userAgent.indexOf('miniProgram') !== -1) {
				type = 'miniprogram'
                desc = '小程序H5'
			}
			if (params.minigame()) {
				type = 'minigame'
                desc = '小游戏'
			}
            
			MShare.report({ monitor: 'download_action_' + type, desc: '下载游戏-' + desc }, 0)

			if (type !== 'web') {
				e.preventDefault()
				openDownload()
			}
			params.callback && params.callback(type, e)
		})
	}

	function openDownload() {
		$dialogDom.show();
		setTimeout(function () {
			$dialogDom.addClass("show");
		}, 300);
	}

	function closeDownload() {
		$dialogDom.removeClass("show");
		setTimeout(function () {
			$dialogDom.hide();
		}, 300);
	}

    return {
        setDownload,
        openDownload,
        closeDownload,
    }
}();

	var MShare = window.MShare = function () {
		var locationHref = window.location.href

		//基础信息
		var baseParam = {
			system: 'buildin_js', //调用方，目前固定
			monitor: 'open_action', //上报方式，默认为打开页面
			product: window.location.hostname, //产品名，不填则默认为当前域名
			activity: window.location.hostname + window.location.pathname.replace(/\/[^\/]+\.html/i, "/").replace(/\/\/+/gi, "/"), //活动名，不填则默认为当前路径，忽略后缀html
			scene: '', //进入页面方式
			plateform: '', //平台
			os: '', //操作系统
			fake_user_id: '',
			share_key: '', //分享相关key
			page_key: '', //分享相关key
			kw : '', //客户端分享出来的kw参数
			gitCode : '', //项目git名称唯一值
			appCode : '',
			platCode : '',
			is_random : false,
			hard_random : false,
			lang : navigator.language || ""
		};

		//分享链接额外的链路参数
		var shareParam = {
			traceid: "",
			p_spanid: "",
			c_spanid: ""
		};

		//用户相关信息，授权登录才有
		var shareUser = null;

		//处理页面参数
		function _processQuery() {

			var nowUrl = Util.UrlParse(window.location.href);
			//refferUrl = Util.UrlParse(document.referrer);

			var traceid = nowUrl.get("traceid"),   //祖先id
				p_spanid = nowUrl.get("p_spanid"), //父级id
				c_spanid = nowUrl.get("c_spanid"), //当前id
				code = nowUrl.get("code"); //微信code

			var cacheTraceid = Util.getStore("mshare_traceid"),
				cacheSpanid = Util.getStore("mshare_spanid");
			//微信的来源，渠道
			var from = nowUrl.get("from"),
				channel = nowUrl.get("channel");
			//默认读取url参数
			baseParam.scene = nowUrl.get("scene") || 2000; //场景值

			baseParam.share_key = nowUrl.get("share_key") || ""; //分享相关key
			baseParam.page_key = nowUrl.get("page_key") || ""; //分享相关key
			baseParam.kw = nowUrl.get("kw") || "";

			//有来源场景值
			if (from) {
				switch (from) {
					case "singlemessage":
						baseParam.scene = 2007;
						break;
					case "groupmessage":
						baseParam.scene = 2008;
						break;
					case "timeline":
						baseParam.scene = 2009;
						break;
					default: break;
				}
			}

			//有来源渠道
			if (channel) {
				baseParam.channel = channel;
			}

			//判断是否有reffer
			//if(nowUrl.url != refferUrl.url && document.referrer){
			//if(refferUrl.url.indexOf("weixin.qq") < 0)baseParam.scene = 2038;
			//}

			//traceid存在，继续沿用
			if (traceid) {
				shareParam.traceid = traceid;
			}
			else {
				//判断缓存（避免同一个用户刷新页面）
				if (cacheTraceid && !code) {
					shareParam.traceid = cacheTraceid;
				}
				else {
					//存在微信的code值
					if (code && code.length > 5) shareParam.traceid = code;
					else {
						shareParam.traceid = "tra_" + Util.randomWord(10);
					}

					Util.setStore("mshare_traceid", shareParam.traceid);
				}

			}

			//存在p_spanid和c_spanid
			if (p_spanid && c_spanid) {

				var level = c_spanid.split(".")[0];
				level = parseInt(level) + 1;

				if (cacheSpanid == c_spanid || ShareLoad.getClient() == "other") {
					shareParam.p_spanid = p_spanid;
					shareParam.c_spanid = c_spanid;
				}
				else {
					shareParam.p_spanid = c_spanid;
					//存在缓存spanid
					if (cacheSpanid) {
						if (cacheSpanid.split(".")[0] == level) shareParam.c_spanid = cacheSpanid;
						else shareParam.c_spanid = (level + "." + Util.randomWord(5));
					}
					else {
						shareParam.c_spanid = (level + "." + Util.randomWord(5));
					}
					//shareParam.c_spanid = cacheSpanid ? cacheSpanid : (level + "." + Util.randomWord(5));
				}
			}
			else {
				shareParam.p_spanid = (cacheSpanid && cacheSpanid.indexOf("0.") > -1) ? cacheSpanid : "0." + Util.randomWord(5);
				shareParam.c_spanid = shareParam.p_spanid;
			}

			Util.setStore("mshare_spanid", shareParam.c_spanid);
		}

		//组装上报的参数
		function mergeParam() {

			var ret = {};

			for (var i = 0; i < arguments.length; i++) {

				if (arguments[i]) ret = $.extend(ret, arguments[i]);
			}

			return ret;
		}

		//处理分享地址
		function mergeShareUrl(url, params) {

			url = url || window.location.href;

			//如果是随机路径模式，分享路径，带上随机数
			if(baseParam.is_random){

				//不包含随机路径，补充随机
				if(!url.match(/\/[a-zA-Z0-9]+\/\d{8}\/[a-zA-Z0-9]+\/[^\/]{16,}\//i)){

					url = url.replace(/(\/[a-zA-Z0-9]+\/\d{8}\/[a-zA-Z0-9]+\/)/i,function(a,b){return b + Util.randomWord(16) + '/'});
				}
				//包含随机路径，且强随机
				else if(baseParam.hard_random){
					url = url.replace(/(\/[a-zA-Z0-9]+\/\d{8}\/[a-zA-Z0-9]+\/([^\/]{16,}\/))/i,function(a,b,c){return b.replace(c,'') + Util.randomWord(16) + '/'});
				}
				//针对蛋仔备用域名
				if(!url.match(/\/[a-zA-Z0-9]+\/[^\/]{16,}\//i) && url.split("/").length <= 6){

					url = url.replace(/(\/[a-zA-Z0-9]+\/)/i,function(a,b){return b + Util.randomWord(16) + '/'});
				}
			}

			var shareUrl = Util.UrlParse(url);

			shareUrl.set("traceid", shareParam.traceid);
			shareUrl.set("p_spanid", shareParam.p_spanid);
			shareUrl.set("c_spanid", shareParam.c_spanid);

			if (params) {

				for (var key in params) {
					shareUrl.set(key, params[key]);
				}
			}

			return shareUrl.url;
		}

		//长按指定图片
		function _bindLongTapImg() {

			var longTimeId = 0;

			$(document.body).on({
				touchstart: function (e) {

					var target = e.target;

					clearTimeout(longTimeId);
					longTimeId = 0;

					//点击的非二维码图片，退出
					if (!target || !target.tagName || target.tagName.toLowerCase() != "img" || !target.className || target.className != "js_mshare_qrcode") return;

					longTimeId = setTimeout(function () {

						if (!longTimeId) return;

						var conf = mergeParam(baseParam, shareParam, shareUser, { monitor: "qrcode_save_action" });

						//上报长按保存图片(不一定准确)
						Report.report(conf);
					}, 500);
				},
				touchmove: function (e) {

					clearTimeout(longTimeId);
					longTimeId = 0;
				},
				touchend: function (e) {

					clearTimeout(longTimeId);
					longTimeId = 0;
				}
			});
		}

		//针对特殊事件监听
		function _bindEvent() {

			_bindLongTapImg();
		}

		//内部初始化
		function _init(param) {

			//初始化分享相关
			ShareLoad.init(param);
		}

		//自初始化，上报打开页面
		function _initStart() {

			//初始化分享内部参数
			ShareLoad.initParam();

			//处理页面参数
			_processQuery();

			//绑定事件
			_bindEvent();

			//用户唯一的ID
			var cacheFakeId = Util.getStore("mshare_fake_user_id");

			if (cacheFakeId) {
				baseParam.fake_user_id = cacheFakeId; "elk_" + Util.randomWord(7);
			}
			else {
				baseParam.fake_user_id = "elk_" + Util.randomWord(7);
				Util.setStore("mshare_fake_user_id", baseParam.fake_user_id);
			}

			baseParam.plateform = ShareLoad.getClient();
			baseParam.os = ShareLoad.getOS();

			_pageStay();
		}

		//页面停留时间
		function _pageStay() {

			var startTime = 0;

			$(window).on("load", function () {

				startTime = new Date();

			}, false);

			$(window).on("unload", function () {

				//表明页面还没加载完就关闭
				if (startTime == 0) return false;

				var stayTime = new Date() - startTime;

				var conf = mergeParam(baseParam, shareParam, { monitor: "pageStay_action", type: 'avg', value: stayTime, desc: '页面停留时间' });

				Report.closeReport(conf);

			}, false);
		}

		//自执行内部初始化
		_initStart();

		return {
			init: function (data,time) {

				data = data || {};
				
				if(typeof time != "number")time = 200;
                
				//初始化
				_init({
					hideMoments: data.hideMoments || false,
					hideFriend: data.hideFriend || false,
					wxapi: data.wxapi || [],
					wxtag: data.tag || [],
					ready: data.ready || function () { },
					product : data.product || ""
				});
				
				//改变默认参数
				if(data.activity)baseParam.activity = data.activity;
				if(data.product)baseParam.product = data.product;
				if(data.appCode)baseParam.appCode = data.appCode;
				if(data.platCode)baseParam.platCode = data.platCode;

				//获取页面的git来源
				try{
					baseParam.gitCode = document.head.getElementsByTagName("meta").from.content.split("/")[1];
					
					// 针对具体项目去掉gitcode
					if(baseParam.gitCode === 'three-family-h5-20241225'){

						// 针对蛋仔
						if(window.location.pathname.indexOf("/hd10/") > -1){
							baseParam.gitCode = 'three-family-h5-20241225-egg';
							baseParam.activity = 'party.163.com/family/h5/';
							baseParam.product = 'party.163.com';
						}
						else{
							baseParam.activity = 'three.163.com/family/h5/';
							baseParam.product = 'three.163.com';
						}
					}
				}
				catch(e){}

				if(data.gitCode)baseParam.gitCode = data.gitCode;

				//当前随机路径模式
				if(data.is_random){

					//判断当前是否有随机路径
					if(baseParam.activity.match(/\/[a-zA-Z0-9]+\/\d{8}\/[a-zA-Z0-9]+\/[^\/]{16,}\//i)){

						//去掉随机路径
						baseParam.activity = baseParam.activity.replace(/(\/[a-zA-Z0-9]+\/\d{8}\/[a-zA-Z0-9]+\/)[^\/]+\//i,function(a,b){return b;});
					}
					else if(baseParam.activity.match(/\/[a-zA-Z0-9]+\/[^\/]{16,}\//i) && baseParam.activity.split("/").length <= 4){

						//去掉随机路径
						baseParam.activity = baseParam.activity.replace(/(\/[a-zA-Z0-9]+\/)[^\/]{16,}\//i,function(a,b){return b;});
					}
					baseParam.is_random = data.is_random;

					// 特殊渠道地址
					if(baseParam.activity.match(/\/h5\/\d{8}\/[a-zA-Z0-9]+\/[^\/]{1,15}\//i)){

						baseParam.is_random = false;
					}

					if(data.hard_random) {
						baseParam.is_random = true;
						baseParam.hard_random = true;
					}
				}

				//打开debug界面，显示log
				if (data.debug) MDebug.init();
				
				var conf = mergeParam(baseParam, shareParam, { monitor: "open_action" });

			    //上报打开页面
			    Report.report(conf, time);
			},
			//设置分享内容
			setShare: function (data) {

				var shareCallback = data.callback;

				data.url = mergeShareUrl(data.url);
				data.callback = function (ret) {

					try {
						shareCallback(ret);
					}
					catch (e) { }

					if (!ret.type) return false;

					var conf = mergeParam(baseParam, shareParam, shareUser, { monitor: "share_action", shareto: ret.type_en });

					//上报分享行为
					Report.report(conf);
				}
				//调用分享
				ShareLoad.setShare(data);
			},
			//跳转分享，海外使用
			openShare: function (data) {

				var conf = mergeParam(baseParam, shareParam, shareUser, { monitor: "share_action", shareto: data.type || "moments" });

				//上报分享行为
				Report.report(conf);

				if (data.url) data.url = mergeShareUrl(data.url);
				//打开分享
				ShareLoad.openShare(data);
			},
			//修改分享内容
			updateShare: function (data) {

				if (data.url) {
					data.url = mergeShareUrl(data.url);
				}

				ShareLoad.updateShare(data);
			},
			//授权登录上报
			loginReport: function (data) {

				shareUser = {
					user_id: data.user_id,
					user_name: data.user_name,
					sex: data.sex
				};

				shareUser = mergeParam(shareUser, data);

				var conf = mergeParam(baseParam, shareParam, shareUser, { monitor: "auth_action" });

				//上报授权行为
				Report.report(conf);
			},
			//参与活动上报
			joinReport: function (data) {

				var conf = mergeParam(baseParam, shareParam, shareUser, { action_name: data.action_name, monitor: "join_action" });

				//上报参与活动
				Report.report(conf);
			},
			//完成活动上报
			activityReport: function (data) {

				var conf = mergeParam(baseParam, shareParam, shareUser, { activity_name: data.activity_name }, { monitor: "finish_activity_action" });

				//上报活动事件
				Report.report(conf);
			},
			//分享上报
			shareReport: function (data) {

				var conf = mergeParam(baseParam, shareParam, shareUser, { monitor: "share_action", shareto: "moments" }, data);

				//上报分享行为
				Report.report(conf);
			},
			//自定义事件上报
			report: function (data,time) {

				if (!data.monitor) data.monitor = "report_action";

				var conf = mergeParam(baseParam, shareParam, shareUser, data);

				//上报自定义事件
				Report.report(conf,time);
			},
			//获取最终分享的地址
			getShareUrl: function (url, channel) {

				var params = {};

				if (channel == "qrcode") {

					params.scene = 2012;
				}
				else if (channel) {

					params.channel = channel;
				}

				return mergeShareUrl(url, params);
			},
			//获取当前客户端版本，比如qq,weixin,facebook
			getClient: function () {

				return ShareLoad.getClient();
			},
			getShareParam: function () {

				return ShareLoad.getShareParam();
			},
			showShare: function (params) {

				return ShareDialog.open(params);
			},

			setDownload: function(params) {
				var options = $.extend({
					minigame: function() {
						return Util.UrlParse(locationHref).get('minigame')
					}
				}, params || {});
				Download.setDownload(options)
			},
			openDownload: function() {
				Download.openDownload()
			},
			closeDownload: function() {
				Download.closeDownload()
			},
		};
	}();

}(window, window.Zepto || window.jQuery);
