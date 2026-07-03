var authLogin = {
    apiUrl:'',
    def:'',
    config:{},
    onPost:false,
    douyinInit:false,
    myGetJs:function(url,succ,err) {
        var script = document.createElement('script');
        script.type = "text/javascript";
        script.src = url;

        if (script.readyState) {
            script.onreadystatechange = function() {
                if (script.readyState == "loaded"|| script.readyState == "complete") {
                    script.onreadystatechange = null;
                    succ();
                }
            };
        } else {
            script.onload = succ;
        }
        script.onerror=err;
        var head = document.getElementsByTagName("body")[0];
        head.appendChild(script);
    },
    dev:function(){
        var ua = navigator.userAgent.toLowerCase();
        var isWx = /micromessenger/i.test(ua);
        var isQQ = /qq/i.test(ua);
        var isDS = /godlike/i.test(ua);
        var isWb = /weibo/i.test(ua);
        var isLine = /line/i.test(ua);
        var isTt = /twitter/i.test(ua);
        var isDy = /bytedance/i.test(ua);
        var isZfb = /alipayclient/i.test(ua);
        var isFb = function(){var ua = navigator.userAgent || navigator.vendor || window.opera;return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);}();
        var dev='';
        if(isWx) {
            dev = 'weixin';
        } else if(isDS) {
            dev = '';
        } else if(isQQ) {
            dev = 'qq';
        } else if(isWb) {
            dev = 'weibo';
        } else if(isFb) {
            dev = 'facebook';
        } else if(isLine) {
            dev = 'line';
        } else if(isTt) {
            dev = 'twitter';
        } else if(isDy) {
            dev = 'douyin';
        } else if(isZfb) {
            dev = 'zfb';
        }
        return dev;
    },
    urlps:function(a){var b,c,d,e,f,g,h,i,j,k="";for(a.indexOf("#")>=0&&(k=a.substr(a.indexOf("#")+1,a.length),a=a.replace("#"+k,"")),b="",a.indexOf("?")>=0&&(b=a.substr(a.indexOf("?")+1,a.length),a=a.replace("?"+b,"")),c=a,d=b.split("&"),e=d.length,h=[],i=[],f=0;e>f;f++)g=d[f].split("="),h[g[0]]=g[1];for(j=k.split("&"),e=j.length,f=0;e>f;f++)g=j[f].split("="),i[g[0]]=g[1];return{lists:function(){return h},data:function(a,b){if("undefined"==typeof b){var c=h[a.toLowerCase()];return"undefined"==typeof c?"":c}h[a]=b},hash:function(a,b){if("undefined"==typeof b){var c=i[a.toLowerCase()];return"undefined"==typeof c?"":c}i[a]=b},getHash:function(){var a,b,c=[];for(a in i)i[a]&&c.push(a+"="+i[a]);return b="",c.length>0&&(b=c.join("&")),b},url:function(){var a,b,d,e=[];for(a in h)h[a]&&e.push(a+"="+h[a]);b="",e.length>0&&(b="?"+e.join("&")),e=[];for(a in i)i[a]&&e.push(a+"="+i[a]);return d="",e.length>0&&(d="#"+e.join("&")),c+""+b+d}}},
    check:function(pro){
        if(!pro) {
            console.log('请配置当前产品代号');
            return;
        }
        //授权中转通用地址 https://game.163.com/callback/
        authLogin.config.douyinAppid = 'awqc2w6lrho1qyvh';
        authLogin.config.douauthAppid = 'awqc2w6lrho1qyvh';
        authLogin.config.weixinAppid = 'wx85f583832dbd07e9';
        switch(pro) {
            case 'hy':
                authLogin.config.weiboAppid = 3105659870;
                authLogin.config.fbAppid = 362581687527744;
                authLogin.config.fbCallback = "https://www.knivesout.jp/callback/";
                authLogin.config.lineAppid = 1590337385;
                authLogin.config.lineCallback = "https://www.knivesout.jp/callback/";
                authLogin.config.ttCallback = "https://www.knivesout.jp/callback/";
                break;
            case 'ssr':
                authLogin.config.weiboAppid = 1581692899;
                authLogin.config.fbAppid = 181981313132544;
                authLogin.config.fbCallback = "https://www.onmyoji-card.com/callback/";
                authLogin.config.lineAppid = 1655092783;
                authLogin.config.lineCallback = "https://www.onmyoji-card.com/callback/";
                authLogin.config.ttCallback = "https://www.onmyoji-card.com/callback/";
                break;
            case 'mrzh':
                authLogin.config.weiboAppid = 1581692899;
                authLogin.config.fbAppid = 1142533622588358;
                authLogin.config.fbCallback = "https://www.lifeafter.game/callback/";
                authLogin.config.ttCallback = "https://www.lifeafter.game/callback/";
                authLogin.config.lineAppid = 2005753025;
                authLogin.config.lineCallback = "https://www.lifeafter.game/callback/";
                break;
            case 'g66tw':
                authLogin.config.weiboAppid = 1581692899;
                authLogin.config.fbAppid = 575062189619248;
                authLogin.config.fbCallback = "https://www.lifeafter.game/callback/";
                authLogin.config.ttCallback = "https://www.lifeafter.game/callback/";
                authLogin.config.lineAppid = 2005753010;
                authLogin.config.lineCallback = "https://www.lifeafter.game/callback/";
                break;
            case 'yys':
                authLogin.config.weiboAppid = 3084015878;
                authLogin.config.fbAppid = 723517304476519;
                authLogin.config.fbCallback = "https://www.onmyojigame.jp/callback/";
                authLogin.config.ttCallback = "https://www.onmyojigame.jp/callback/";
                break;
            case 'infinitelagrange':
                authLogin.config.fbAppid = 513605446085539;
                authLogin.config.lineAppid = 1656114565;
                authLogin.config.lineCallback = "https://www.infinitelagrange.com/callback/";
                authLogin.config.fbCallback = "https://www.infinitelagrange.com/callback/";
                authLogin.config.ttCallback = "https://www.infinitelagrange.com/callback/";
                break;
            case 'eclipse':
                authLogin.config.fbAppid = 446604786479590;
                authLogin.config.fbCallback = "https://www.eclipse.games/callback/";
                authLogin.config.ttCallback = "https://www.eclipse.games/callback/";
                break;
            case 'stzb':
                authLogin.config.weiboAppid = 1581692899;
                authLogin.config.ttCallback = "https://www.daisangoku.com/callback/";
                break;
            case 'stzb-new':
                authLogin.config.weixinAppid = 'wx35182ef22b6333ba';
                authLogin.config.weiboAppid = 1581692899;
                authLogin.config.ttCallback = "https://www.daisangoku.com/callback/";
                break;
            case 'stzb-kr':
                authLogin.config.fbAppid = 1682541428805942;
                authLogin.config.fbCallback = "https://www.infiniteborders.kr/callback/";
                authLogin.config.ttCallback = "https://www.infiniteborders.kr/callback/";
                break;
            case 'xy3d':
                authLogin.config.weiboAppid = 2756851256;
                break;
            case 'f7':
                authLogin.config.fbAppid = 2630103503872831;
                authLogin.config.fbCallback = "https://www.forevernana.com/callback/";
                authLogin.config.ttCallback = "https://www.forevernana.com/callback/"
                break;
            case 'g93':
                authLogin.config.weiboAppid = 1581692899;
                authLogin.config.fbAppid = 299888623969620;
                authLogin.config.fbCallback = "https://www.supermechachampions.com/callback/";
                authLogin.config.lineAppid = 1653370481;
                authLogin.config.lineCallback = "https://www.supermechachampions.com/callback/";
                authLogin.config.ttCallback = "https://www.supermechachampions.com/callback/";
                break;
            case 'g93tw':
                authLogin.config.weiboAppid = 1581692899;
                authLogin.config.fbAppid = 315324852516335;
                authLogin.config.fbCallback = "https://www.supermechachampions.com/callback/";
                authLogin.config.lineAppid = 1653370481;
                authLogin.config.lineCallback = "https://www.supermechachampions.com/callback/";
                authLogin.config.ttCallback = "https://www.supermechachampions.com/callback/";
                break;
            case '4wdgame':
                authLogin.config.fbAppid = 578961710159869;
                authLogin.config.fbCallback = "https://www.4wdgame.com/callback/";
                break;
            case 'eve':
                authLogin.config.fbAppid = 371081370126685;
                authLogin.config.fbCallback = "https://www.eveechoes.com/callback/";
                authLogin.config.ttCallback = "https://www.eveechoes.com/callback/";
                break;
            case 'g96':
                authLogin.config.fbAppid = 491526771661911;
                authLogin.config.fbCallback = "https://www.lotr-risetowar.com/callback/";
                authLogin.config.ttCallback = "https://www.lotr-risetowar.com/callback/";
                break;
            case 'ma96':
                authLogin.config.fbAppid = 671158550801693;
                authLogin.config.fbCallback = "https://www.neveraftergame.com/callback/";
                authLogin.config.lineAppid = 1657781226;
                authLogin.config.lineCallback = "https://www.neveraftergame.com/callback/";
                authLogin.config.ttCallback = "https://www.neveraftergame.com/callback/";
                break;
            case 'g92':
                authLogin.config.fbAppid = 525634611326844;
                authLogin.config.lineAppid = 1655982507;
                authLogin.config.lineCallback = "https://www.harrypottermagicawakened.com/callback/";
                authLogin.config.fbCallback = "https://www.harrypottermagicawakened.com/callback/";
                authLogin.config.ttCallback = "https://www.harrypottermagicawakened.com/callback/";
                break;
            case 'g92n':
                authLogin.config.fbAppid = 1830995543951208;
                authLogin.config.lineAppid = 1661333339;
                authLogin.config.lineCallback = "https://www.harrypottermagicawakened.com/callback/";
                authLogin.config.fbCallback = "https://www.harrypottermagicawakened.com/callback/";
                authLogin.config.ttCallback = "https://www.harrypottermagicawakened.com/callback/";
                break;
            case 'id5':
                authLogin.config.fbAppid  = 578777605819697;
                authLogin.config.fbCallback = "https://www.identityvgame.com/callback/";
                authLogin.config.lineAppid  = 1605075601;
                authLogin.config.lineCallback = "https://www.identityvgame.com/callback/";
                authLogin.config.ttCallback = "https://www.identityvgame.com/callback/";
                authLogin.config.zfbAppid  = 2021005119688162;
                authLogin.config.zfbCallback = "https://id5.163.com/callback/";
                break;
            case 'ma100':
                authLogin.config.fbAppid  = 430179884723572;
                authLogin.config.fbCallback = "https://www.dbdmobile-sea.com/callback/";
                authLogin.config.lineAppid = 1656940814;
                authLogin.config.lineCallback = "https://www.dbdmobile-sea.com/callback/";
                authLogin.config.ttCallback = "https://www.dbdmobile-sea.com/callback/";
                break;
            case 'ma135':
                authLogin.config.ttCallback = "https://www.clovertheater.jp/callback/";
                break;
            case 'g101':
                authLogin.config.fbAppid  = 722257358608612;
                authLogin.config.fbCallback = "https://www.badlanders.game/callback/";
                authLogin.config.ttCallback = "https://www.badlanders.game/callback/";
                break;
            case 'g99':
                authLogin.config.lineAppid  = 1657487051;
                authLogin.config.lineCallback = "https://www.foralltime.jp/callback/";
                authLogin.config.fbCallback = "https://www.foralltime.jp/callback/";
                authLogin.config.ttCallback = "https://www.foralltime.jp/callback/";
                break;
            case 'moba':
                authLogin.config.fbAppid  = 513069255755418;
                authLogin.config.fbCallback = "https://www.onmyojiarena.us/callback/";
                break;
            case 'g112':
                authLogin.config.lineAppid  = 2004187201;
                authLogin.config.lineCallback = "https://www.racingmaster.game/callback/";
                authLogin.config.fbAppid  = 810675027289234;
                authLogin.config.fbCallback = "https://www.racingmaster.game/callback/";
                authLogin.config.ttCallback = "https://www.racingmaster.game/callback/";
                authLogin.config.googleAppid = "741737646655-hu0tiiqn5hiis8905dosl28in336kror.apps.googleusercontent.com";
                authLogin.config.googleCallback = "https://www.racingmaster.game/callback/";
                break;
            case 'ma167':
                authLogin.config.fbAppid  = 478055900473382;
                authLogin.config.fbCallback = "https://www.octopathsp.com/callback/";
                authLogin.config.ttCallback = "https://www.octopathsp.com/callback/";
                break;
            case 'ma96tw':
                authLogin.config.fbAppid = 263768312201912;
                authLogin.config.fbCallback = "https://www.neverafter.tw/callback/";
                authLogin.config.ttCallback = "https://www.neverafter.tw/callback/";
                break;
            case 'g141jp':
                authLogin.config.lineAppid  = 1656974938;
                authLogin.config.lineCallback = "https://www.onmyohyakki.com/callback/";
                authLogin.config.fbAppid = 5841093009331195;
                authLogin.config.fbCallback = "https://www.onmyohyakki.com/callback/";
                authLogin.config.ttCallback = "https://www.onmyohyakki.com/callback/";
                break;
            case 'g141tw':
                authLogin.config.lineAppid  = 1660683164;
                authLogin.config.lineCallback = "https://www.onmyohyakki.com/callback/";
                authLogin.config.fbAppid = 2446174145532839;
                authLogin.config.fbCallback = "https://www.onmyohyakki.com/callback/";
                authLogin.config.ttCallback = "https://www.onmyohyakki.com/callback/";
                break;
            case 'h73na':
                authLogin.config.ttCallback = "https://www.oncehuman.game/callback/";
                authLogin.config.twitchAppid  = '788jy1ddmnri420wxefet8poq0z18i';
                authLogin.config.twitchCallback = "https://www.oncehuman.game/callback/";
                authLogin.config.fbAppid = 495185061762745;
                authLogin.config.fbCallback = "https://www.oncehuman.game/callback/";
                authLogin.config.googleAppid = "418188960745-t28mqt7d8ns2heh3p56crqc0ha42l107.apps.googleusercontent.com";
                authLogin.config.googleCallback = "https://www.oncehuman.game/callback/";
                authLogin.config.steamAppid  = 'E3A73A97';
                authLogin.config.steamCallback = "https://www.oncehuman.game/callback/";
                authLogin.config.epicAppid  = 'xyza7891mxxeSMPwjSmwjPG40TFlWwId';
                authLogin.config.epicCallback = "https://www.oncehuman.game/callback/";
                break;
            case 'x20':
                authLogin.config.ttCallback = "https://www.marvelrivals.com/callback/";
                authLogin.config.twitchAppid  = 'pl4dqz6pyeduo98dfmdkp3ijvzzzrm';
                authLogin.config.twitchCallback = "https://www.marvelrivals.com/callback/";
                authLogin.config.psAppid  = '8d9df526-57b3-4bcb-8ec9-5bac9677f56c';
                authLogin.config.psCallback = "https://www.marvelrivals.com/callback/";
                authLogin.config.steamCallback = "https://www.marvelrivals.com/callback/";
                authLogin.config.xboxAppid  = 'b87ebce1-fd4b-4cd0-963a-c9b3a42d7a0e';
                authLogin.config.xboxCallback = "https://www.marvelrivals.com/callback/";
                authLogin.config.feverAppid  = 'drop';
                authLogin.config.feverCallback = "https://www.marvelrivals.com/callback/";
                authLogin.config.feverPromark  = '74bc3b46811817be';
                authLogin.config.epicAppid  = 'xyza7891WaXRFNVfmu8d1qzt2inNg1QI';
                authLogin.config.epicCallback = "https://www.marvelrivals.com/callback/";
                break;
            case 'marvelrivals':
                authLogin.config.steamCallback = "https://marvelrivals.163.com/callback/";
                authLogin.config.epicAppid  = 'xyza7891WaXRFNVfmu8d1qzt2inNg1QI';
                authLogin.config.epicCallback = "https://marvelrivals.163.com/callback/";
                authLogin.config.douyuAppid  = 'dyyc5l9ouampl';
                authLogin.config.douyuCallback = "https://marvelrivals.163.com/callback/";
                authLogin.config.huyaAppid  = '4c7xmj5a';
                authLogin.config.huyaCallback = "https://marvelrivals.163.com/callback/";
                authLogin.config.bilibiliAppid  = '38673a6f00d143cf';
                authLogin.config.bilibiliCallback = "https://marvelrivals.163.com/callback/";
                authLogin.config.douauthAppid  = 'awmmt0thohs6ymfl';
                authLogin.config.douauthGameAppid  = '640985';
                authLogin.config.douauthCallback = "https://marvelrivals.163.com/callback/";
                break;
            case 'party':
                authLogin.config.weiboAppid = 1581692899;
                authLogin.config.lineAppid  = 1661374000;
                authLogin.config.lineCallback = "https://www.eggyparty.com/callback/";
                authLogin.config.fbAppid = 3618539641590455;
                authLogin.config.fbCallback = "https://www.eggyparty.com/callback/";
                authLogin.config.ttCallback = "https://www.eggyparty.com/callback/";
                break;
            case 'yhtj':
                authLogin.config.douauthAppid  = 'awxweeehm1yj9cbo';
                authLogin.config.douauthGameAppid  = '565101';
                authLogin.config.douauthCallback = "https://game.163.com/callback/";
                break;
            case 'h72na':
                authLogin.config.ttCallback = "https://www.wherewindsmeetgame.com/callback/";
                authLogin.config.fbAppid = 1711042432896851;
                authLogin.config.fbCallback = "https://www.wherewindsmeetgame.com/callback/";
                authLogin.config.discordAppid = '1433852490318741514';
                authLogin.config.discordCallback = "https://www.wherewindsmeetgame.com/callback/";
                authLogin.config.googleAppid = "663710153479-qe0qt6t3ep971uvj5lkv2aho3l0u88l7.apps.googleusercontent.com";
                authLogin.config.googleCallback = "https://www.wherewindsmeetgame.com/callback/";
                break;
            default:
                authLogin.config.weiboAppid = 1581692899;
        }
        var myurl = authLogin.urlps(location.href);
        var dev = authLogin.dev();
        if(authLogin.def) {
            dev=authLogin.def;
        }
        switch(dev) {
            case 'weixin':
            case 'qq':
            case 'weibo':
            case 'facebook':
            case 'line':
            case 'douyin':
            case 'twitch':
            case 'google':
            case 'epic':
            case 'ps':
            case 'xbox':
            case 'fever':
            case 'douyu':
            case 'huya':
            case 'bilibili':
            case 'discord':
            case 'naver':
            case 'douauth':
                if(myurl.data('code')) {
                    return true;
                } else {
                    return false;
                }
            case 'twitter':
                if(myurl.data('oauth_token')) {
                    return true;
                } else {
                    return false;
                }
            case 'zfb':
                if(myurl.data('auth_code')) {
                    return true;
                } else {
                    return false;
                }
            case 'steam':
                if(myurl.data('access_token')||myurl.data('sig')) {
                    return true;
                } else {
                    return false;
                }
        }
    },
    go:function(opts){
        var myurl = authLogin.urlps(location.href);
        var dev = authLogin.dev();
        if(authLogin.def) {
            dev=authLogin.def;
        }
        var scope = "";
        if(typeof opts!=undefined) {
            for(var k in opts) {
                if(k=="scope") {
                    scope = opts[k];
                } else {
                    myurl.data(k,opts[k]);
                }
            }
        }
        myurl.data("code","");
        myurl.data("oauth_token","");
        myurl.data("oauth_verifier","");
        myurl.data("state","");
        myurl.data("rurl","");
        myurl.data("r","");
        myurl.data("nie","");
        var jurl = myurl.url();
        var toLink='';
        switch(dev) {
            case 'weixin':
                if(!scope) {
                    scope = "snsapi_userinfo";
                }
                if(location.host=="game.163.com") {
                    toLink="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+authLogin.config.weixinAppid+"&redirect_uri=" + encodeURIComponent(jurl) + "&response_type=code&scope="+scope+"&state=163#wechat_redirect";
                } else {
                    var rdurl = 'https://game.163.com/webcb/';
                    jurl = escape(jurl);
                    jurl=encodeURIComponent(rdurl+"?source_uri="+jurl);
                    toLink="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+authLogin.config.weixinAppid+"&redirect_uri=" + jurl + "&response_type=code&scope="+scope+"&state=163#wechat_redirect";
                }
                location.href=toLink;
                break;
            case 'qq':
                var rurl = encodeURIComponent('https://game.163.com/qqcallback/?u='+encodeURIComponent(jurl));
                toLink="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101465632&redirect_uri="+rurl+"&scope=get_user_info";
                location.href=toLink;
                break;
            case 'weibo':
                jurl = 'https://game.163.com/weibo/callback/?link='+encodeURIComponent(jurl);
                jurl=encodeURIComponent(jurl);
                toLink="https://api.weibo.com/oauth2/authorize?response_type=code&client_id="+authLogin.config.weiboAppid+"&response_type=code&redirect_uri="+jurl;
                location.href=toLink;
                break;
            case 'douyin':
                if(!authLogin.config.douyinAppid) {
                    console.log('当前产品没有配置douyin的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                if(authLogin.dev()=="douyin") {
                    authLogin.myGetJs('https://unpkg.byted-static.com/bridge/douyin_open/1.0.10/lib/douyin_open.umd.js',function(){
                        if(window.DouyinOpenJSBridge) {
                            const sdk = window.DouyinOpenJSBridge;
                            let clientKey=""
                            $.ajax({
                                url: 'https://wxsign.nie.netease.com/sharecom/dytoken_awqc2w6lrho1qyvh.php',
                                data:{url:encodeURIComponent(location.href)},
                                async: false,
                                dataType: "jsonp",
                                success: function success(data) {
                                    if (data.signature) {
                                        const url = location.href;
                                        clientKey=data.client_key
                                        sdk.config({
                                            params: {
                                                client_key: data.client_key,
                                                signature: data.signature,
                                                timestamp:data.timestamp,
                                                nonce_str: data.nonce_str,
                                                url,
                                            },
                                        });
                                    }
                                }
                            });
                            sdk.ready(() => {
                                sdk.showOpenAuth({
                                    params: {
                                        client_key: clientKey,
                                        state: state,
                                        scopes: {
                                            user_info: 0,
                                        },
                                        response_type: "code",
                                    },
                                    success: ({ ticket, grant_permissions }) => {
                                        if(typeof authLogin.douyinCallback=="function") {
                                            authLogin.douyinCallback(ticket)
                                        }
                                    },
                                    error: (res) => {
                                        console.log(res)
                                    },
                                });
                            });
                            sdk.error((res) => {
                                
                            });
                        }
                    },function(){
                    });
                } else {
                    toLink = "https://open.douyin.com/platform/oauth/connect?client_key="+authLogin.config.douyinAppid+"&response_type=code&scope=user_info&redirect_uri=" + encodeURIComponent("https://game.163.com/callback/") + "&state=" + state;
                    location.href=toLink;
                }
                break;
            case 'douauth':
                if(!authLogin.config.douauthAppid) {
                    console.log('当前产品没有配置douauth的授权账号');
                    return;
                }
                if(!scope) {
                    scope='user_info'
                } else {
                    scope = encodeURIComponent(scope)
                }
                var state = encodeURIComponent(jurl);
                var cburl="https://game.163.com/callback/"
                if(authLogin.config.douauthCallback) {
                    cburl=authLogin.config.douauthCallback
                }
                var extra=''
                if(authLogin.config.douauthGameAppid) {
                    extra="&open_extra=%7B%22osdk_extra_info_app_id%22%3A%22"+authLogin.config.douauthGameAppid+"%22%7D"
                }
                if(authLogin.dev()=="douyin") {
                    toLink = "https://open.douyin.com/platform/oauth/mobile/auth?client_key="+authLogin.config.douauthAppid+"&redirect_uri=" + encodeURIComponent(cburl) + "&response_type=code&scope="+scope+"&state=" + state+extra;
                } else {
                    toLink = "https://open.douyin.com/platform/oauth/pc/qrcode-auth?client_key="+authLogin.config.douauthAppid+"&redirect_uri=" + encodeURIComponent(cburl) + "&response_type=code&scope="+scope+"&state=" + state+extra;
                }
                location.href=toLink;
                break;
            case 'zfb':
                if(!authLogin.config.zfbAppid) {
                    console.log('当前产品没有配置zfb的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id="+authLogin.config.zfbAppid+"&scope=auth_user&redirect_uri=" + encodeURIComponent(authLogin.config.zfbCallback) + "&state=" + state;
                location.href=toLink;
                break;
            case 'facebook':
                if(!authLogin.config.fbAppid) {
                    console.log('当前产品没有配置Facebook的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://www.facebook.com/dialog/oauth?client_id="+authLogin.config.fbAppid+"&redirect_uri=" + encodeURIComponent(authLogin.config.fbCallback) + "&scope=public_profile,email&state=" + state;
                location.href=toLink;
                break;
            case 'line':
                if(!authLogin.config.lineAppid) {
                    console.log('当前产品没有配置Line的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id="+authLogin.config.lineAppid+"&redirect_uri=" + encodeURIComponent(authLogin.config.lineCallback) + "&scope=profile%20openid&state=" + state;
                location.href=toLink;
                break;
            case 'twitch':
                if(!authLogin.config.twitchAppid) {
                    console.log('当前产品没有配置twitch的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://id.twitch.tv/oauth2/authorize?response_type=code&client_id="+authLogin.config.twitchAppid+"&redirect_uri=" + encodeURIComponent(authLogin.config.twitchCallback) + "&scope=user_read&state=" + state;
                location.href=toLink;
                break;
            case 'steam':
                var state = encodeURIComponent(jurl);
                if(!authLogin.config.steamAppid) {
                    var cburl = encodeURIComponent(authLogin.config.steamCallback+'?state='+state)
                    toLink="https://steamcommunity.com/openid/login?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.mode=checkid_setup&openid.return_to=" + cburl + "&openid.realm=" + cburl + "&openid.ns_sreg=http%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select"
                } else {
                    toLink = "https://steamcommunity.com/oauth/login?response_type=token&client_id="+authLogin.config.steamAppid+"&state=" + state;
                }
                location.href=toLink;
                break;
            case 'epic':
                if(!authLogin.config.epicAppid) {
                    console.log('当前产品没有配置Facebook的授权账号');
                    return;
                }
                if(!scope) {
                    scope='basic_profile'
                } else {
                    scope = encodeURIComponent(scope)
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://www.epicgames.com/id/authorize?client_id="+authLogin.config.epicAppid+"&redirect_uri=" + encodeURIComponent(authLogin.config.epicCallback) + "&response_type=code&scope="+scope+"&state=" + state;
                location.href=toLink;
                break;
            case 'ps':
                if(!authLogin.config.psAppid) {
                    console.log('当前产品没有配置PS的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://ca.account.sony.com/api/authz/v3/oauth/authorize?service_entity=urn%3Aservice-entity%3Apsn&response_type=code&client_id="+authLogin.config.psAppid+"&redirect_uri=" + encodeURIComponent(authLogin.config.psCallback) + "&scope=psn%3As2s+openid+id_token%3Apsn.basic_claims&state=" + state;
                location.href=toLink;
                break;
            case 'xbox':
                if(!authLogin.config.xboxAppid) {
                    console.log('当前产品没有配置XBOX的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?client_id="+authLogin.config.xboxAppid+"&redirect_uri=" + encodeURIComponent(authLogin.config.xboxCallback) + "&response_type=code&scope=xboxlive.signin&prompt=select_account&state=" + state;
                location.href=toLink;
                break;
            case 'fever':
                if(!authLogin.config.feverAppid) {
                    console.log('当前产品没有配置fever的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://passport.mpsdk.easebar.com/oauth/v2/auth?client_id="+authLogin.config.feverAppid+"&redirect_uri=" + encodeURIComponent(authLogin.config.feverCallback) + "&response_type=code&state=" + state;
                if(authLogin.config.feverPromark) {
                    toLink=toLink+'&promark='+authLogin.config.feverPromark
                }
                location.href=toLink;
                break;
            case 'douyu':
                if(!authLogin.config.douyuAppid) {
                    console.log('当前产品没有配置douyu的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://passport.douyu.com/auth/oauth2/authorize?appid="+authLogin.config.douyuAppid+"&redirect_uri=" + encodeURIComponent(authLogin.config.douyuCallback) + "&scope=snsapi_userinfo&state=" + state;
                location.href=toLink;
                break;
            case 'huya':
                if(!authLogin.config.huyaAppid) {
                    console.log('当前产品没有配置huya的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://udbapi.huya.com/open/oauth/authorize?client_id="+authLogin.config.huyaAppid+"&redirect_uri=" + encodeURIComponent(authLogin.config.huyaCallback) + "&scope=get_user_info&state=" + state;
                location.href=toLink;
                break;
            case 'bilibili':
                if(!authLogin.config.bilibiliAppid) {
                    console.log('当前产品没有配置bilibili的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://passport.bilibili.com/register/pc_oauth2.html#/?client_id="+authLogin.config.bilibiliAppid+"&response_type=code&return_url=" + encodeURIComponent(authLogin.config.bilibiliCallback) + "&state=" + state;
                location.href=toLink;
                break;
            case 'discord':
                if(!authLogin.config.discordAppid) {
                    console.log('当前产品没有配置discord的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://discord.com/oauth2/authorize?client_id="+authLogin.config.discordAppid+"&response_type=code&redirect_uri=" + encodeURIComponent(authLogin.config.discordCallback) + "&scope=identify&state=" + state;
                location.href=toLink;
                break;
            case 'naver':
                if(!authLogin.config.naverAppid) {
                    console.log('当前产品没有配置naver的授权账号');
                    return;
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://nid.naver.com/oauth2.0/authorize?client_id="+authLogin.config.naverAppid+"&response_type=code&redirect_uri=" + encodeURIComponent(authLogin.config.naverCallback) + "&state=" + state;
                location.href=toLink;
                break;
            case 'google':
                if(!authLogin.config.googleAppid) {
                    console.log('当前产品没有配置google的授权账号');
                    return;
                }
                if(!scope) {
                    scope = "profile%20email%20openid";
                }
                var state = encodeURIComponent(jurl);
                toLink = "https://accounts.google.com/o/oauth2/v2/auth?scope="+scope+"&access_type=offline&include_granted_scopes=true&response_type=code&state="+state+"&redirect_uri=" + encodeURIComponent(authLogin.config.googleCallback) + "&client_id="+authLogin.config.googleAppid+"&prompt=consent";
                location.href=toLink;
                break;
            case 'twitter':
                if(!authLogin.apiUrl) {
                    console.log("miss apiUrl for twitter");
                    return;
                }
                if(authLogin.onPost) {
                    return;
                }
                authLogin.onPost=true;
                jurl = authLogin.config.ttCallback+"?link="+encodeURIComponent(encodeURIComponent(jurl));
                $.ajax({
                    url:authLogin.apiUrl,
                    data:{'oauth_callback':jurl},
                    dataType:"jsonp",
                    success:function(data){
                        authLogin.onPost=false;
                        if (data.success == true) {
                            location.href = "https://api.twitter.com/oauth/authorize?oauth_token=" + data.oauth_token;
                        } else if(data.code==200&&data.data) {
                            location.href = "https://api.twitter.com/oauth/authorize?oauth_token=" + data.data;
                        } else {
                            alert(data.msg);
                        }
                    },
                    error:function(){
                        authLogin.onPost=false;
                        alert('network error');
                    }
                });
                break;
        }
    },
    subscribemsg:function(opts){
        if(!opts) {
            opts={};
        }
        if(typeof opts.scene=="undefined") {
            opts.scene=0;
        }
        if(typeof opts.template_id=="undefined") {
            opts.template_id="ztU3MvdeFsEXzSUC85sF4awRKql8pxL5_bp4bdA8sf8";
        }
        if(typeof opts.link=="undefined") {
            var myurl = authLogin.urlps(location.href);
            myurl.data("code","");
            myurl.data("oauth_token","");
            myurl.data("oauth_verifier","");
            myurl.data("state","");
            myurl.data("rurl","");
            myurl.data("r","");
            myurl.data("nie","");
            var jurl=myurl.url();
            opts.link = 'https://game.163.com/callback/subscribemsg.html?link='+encodeURIComponent(jurl);
        }
        location.href="https://mp.weixin.qq.com/mp/subscribemsg?action=get_confirm&appid=wx85f583832dbd07e9&scene="+opts.scene+"&template_id="+opts.template_id+"&redirect_url="+encodeURIComponent(opts.link)+"&reserved=163#wechat_redirect";
    },
    data:function(conf){
        var pro = conf.pro||'';
        var loginErrorAutoJump=conf.loginErrorAutoJump;
        var apiUrl = conf.apiUrl;
        function getLoginInfo(cb) {
            var myurl = authLogin.urlps(location.href);
            var dev = authLogin.dev()||authLogin.def;
            var page_key = myurl.data("page_key");
            var share_key = myurl.data("share_key");
            var code='';
            var ap = '';
            var dobj = {page_key:page_key,need_userinfo:1};
            if(share_key) {
                dobj = {share_key:share_key,need_userinfo:1};
            }
            switch(dev) {
                case 'weixin':
                    code = myurl.data('code');
                    dobj.code = code;
                    ap = 'wx/login';
                    break;
                case 'qq':
                    code = myurl.data('code');
                    dobj.code = code;
                    dobj.redirect_uri = decodeURIComponent(myurl.data("rurl"));
                    ap = 'qq/login';
                    break;
                case 'weibo':
                    code = myurl.data('code');
                    dobj.code = code;
                    dobj.redirect_uri = "https://game.163.com/weibo/callback/";
                    ap = 'weibo/login';
                    break;
                case 'facebook':
                    code = myurl.data('code');
                    dobj.code = code;
                    dobj.redirect_uri = authLogin.config.fbCallback;
                    ap = 'fb/login';
                    break;
                case 'line':
                    code = myurl.data('code');
                    dobj.code = code;
                    dobj.redirect_uri = authLogin.config.lineCallback;
                    ap = 'line/login';
                    break;
                case 'twitter':
                    code = myurl.data('oauth_token');
                    dobj.oauth_token = code;
                    dobj.oauth_verifier = myurl.data("oauth_verifier");
                    ap = 'twitter/login';
                    break;
                case 'douyin':
                    code = myurl.data('code');
                    dobj.code = code;
                    dobj.redirect_uri = "https://game.163.com/weibo/callback/";
                    ap = 'douyin/login';
                    break;
            }
            
            $.ajax({
                url:apiUrl+ap,
                data:dobj,
                dataType:"jsonp",
                success:function(data){
                    if (data.success == true) {
                        cb(data);
                    } else {
                        if(!loginErrorAutoJump) {
                            return;
                        }
                        if(!data.msg) {
                            data.msg=data.error;
                        }
                        if (data.msg.indexOf('invalid') != -1) {
                            authLogin.go();
                        } else if(data.msg=='无效的Code：') {
                            authLogin.go();
                        } else if(data.msg.toLowerCase().indexOf('code') != -1) {
                            authLogin.go();
                        } else if(data.msg.toLowerCase().indexOf('req_id') != -1) {
                            authLogin.go();
                        } else if(data.msg.toLowerCase().indexOf('信息异常') != -1) {
                            authLogin.go();
                        } else if(data.msg.toLowerCase().indexOf('failed') != -1) {
                            authLogin.go();
                        } else if(data.msg.toLowerCase().indexOf('error') != -1) {
                            authLogin.go();
                        } else {
                            alert(data.msg);
                        }
                    }
                },
                error:function(){
                    alert('网络信号不好，请刷新再试');
                }
            });
        }
        var dev = authLogin.dev();
        if(!dev) {
            authLogin.def=conf.def||'weibo';//配置当前页面使用哪个平台的授权，可配置值 weixin,qq,weibo,facebook,line,twitter,不配置则自动判断当前所属平台，国内平台判断会正常，海外的判断不了平台，海外的项目需要指定一下
        }
        authLogin.apiUrl = apiUrl+'twitter/request_token';//配置平台提供的获取推特request_token的链接
        if(!authLogin.check(pro)) {
            authLogin.go();
        } else {
            if(typeof conf.authCallback=='function') {
                conf.authCallback();
            }
            getLoginInfo(function(ret){
                if(typeof conf.authApiCallback=='function') {
                    conf.authApiCallback(ret);
                }
            });
        }
    }
}