if((truste&&(typeof truste.ca1=="undefined"||!truste.ca1))||(typeof truste=="undefined"||!truste)){if(typeof truste==undefined||!truste){var truste={}
}if(typeof truste.ca=="undefined"||!truste.ca){truste.ca={};truste.ca._contRegistry={};truste.ca.contRegistryListeners=[];
truste.ca.tagReferrer="";truste.ca.dominantTag={};truste.ca.creativeMap={};truste.ca.isTopAd=true}truste.ca1={};
truste.ic={};truste.ca.contMap={};truste.ca.intMap={};truste.imgic=new Image(1,1);truste.img=new Image(1,1);
truste.ca.resetCount=0;truste.ca.intervalStack=[];truste.ca.bindMap={};truste.ca.bindingInitMap={};truste.ca.intInitMap={};
truste.ca.hasRegistered=false;truste.ca.storedParentEvents=[];truste.ts=new Date();truste.ca.adTypeMap={};
truste.ca.osMap={};truste.ca.txl={object:[{":offsetWidth":"0",":offsetHeight":"0"},{":offsetWidth":"1",":offsetHeight":"1"}],embed:[{":offsetWidth":"0",":offsetHeight":"0"},{":offsetWidth":"1",":offsetHeight":"1"}],div:[{width:"0px",height:"0px"},{display:"none"},{visibility:"hidden"}],img:[{width:"1px",height:"1px"},{width:"0px",height:"0px"},{display:"none"}],iframe:[{width:"1px",height:"1px"},{width:"0px",height:"0px"},{display:"none"}],"/img":[],span:[{display:"none"}],map:[]};
truste.ca.host=(typeof window.location.origin!=="undefined")?window.location.origin:window.location.protocol+"//"+window.location.host;
truste.ca.addEvent=function(d,c,b,a){if(d.addEventListener){d.addEventListener(c,b,false);return true
}else{if(d.attachEvent){return d.attachEvent("on"+c,b)}else{if(a){b();return true}else{return false}}}};
truste.ca.addBinding=function(a){truste.ca.bindMap[a.baseName]=a};truste.ca.addRegistryListener=function(a){if(a&&a.apply){truste.ca.contRegistryListeners.push(a)
}};truste.ca.contRegister=function(a){if(a&&a.element&&a.baseName){if(!truste.ca._contRegistry[a.baseName]){for(var b=truste.ca.contRegistryListeners.length;
b-->0;){var c=truste.ca.contRegistryListeners[b];try{if(c.call({},a)){return true}}catch(d){}}}truste.ca._contRegistry[a.baseName]=a
}return false};truste.ca.getIconsByPid=function(j,h){function k(n){var o=[];for(var m in truste.ca.bindMap){var l=truste.ca.bindMap[m];
if(n.pid==l.pid){if((n.aid&&n.aid!=l.aid)&&(n.cid&&n.cid!=l.cid)){continue}if(n.width&&n.height&&n.width!=l.width&&n.height!=l.height){continue
}o.push(l.iconSpanId)}}return(o.length>0)?o:null}if(typeof j!="undefined"&&typeof j.pid!="undefined"&&typeof truste.ca.bindMap!="undefined"){if(typeof h==="boolean"){var f=k(j);
if(f[0]){var g=document.getElementById(f[0]);if(g){g.style.visibility=(h)?"visible":"hidden";g.style.display=(h)?"block":"none"
}}return null}var c={};c.icons=[];for(var e in truste.ca.bindMap){var a=truste.ca.bindMap[e];if(j.pid==a.pid){if((j.aid&&j.aid!=a.aid)&&(j.cid&&j.cid!=a.cid)){continue
}if(j.width&&j.height&&j.width!=a.width&&j.height!=a.height){continue}var f=a.iconSpanId;c.icons.push(f);
c[f]=a}}return(c.icons.length>0)?c:null}return null}}if(typeof truste.ca.mobile=="undefined"&&!truste.ca.mobile){truste.ca.mobile=truste.ca.mobile||function(){var b=navigator.userAgent||navigator.vendor||window.opera;
var d=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|nexus (7|s|one)|galaxy.*nexus|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
var c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
return(d.test(b)||c.test(b.substr(0,4)))};truste.ca.checkDimensions=truste.ca.checkDimensions||function(){var a=window.matchMedia&&window.matchMedia("(orientation: portrait)");
var c=screen.width/(window.innerHeight||0);var b;var d=false;if((a&&a.matches)||(screen.height>screen.width)){d=((screen.height*c)-document.documentElement.clientHeight)>0?true:false
}else{d=(window.parent.innerHeight<255)?true:false}return d};truste.ca.inApp=truste.ca.inApp||function(){var b=window.navigator.standalone,e=window.navigator.userAgent.toLowerCase(),d=/safari/.test(e),c=/iphone|ipod|ipad/.test(e),a=/\bandroid (\d+(?:\.\d+)+);/g.exec(e);
isInApp=false;if(c){if(!b&&!d){isInApp=true}}else{if(a&&a[1]>="4.4"){isInApp=/\bversion\/\d+\.\d+/.test(e)||/\bwv/.test(e)
}else{if(window.mraid||truste.ca.checkDimensions()){isInApp=true}}}return isInApp};truste.ca.isMobile=truste.ca.mobile();
truste.ca.isInApp=truste.ca.isMobile&&truste.ca.inApp()}truste.ca.bindingInitMapPM=truste.ca.bindingInitMapPM||{};
truste.ca.getScriptElement=truste.ca.getScriptElement||function(d){var b,f,c,e=(d&&d.test)?d:new RegExp(d);
if(document.currentScript){b=document.currentScript}else{b=document.scripts&&document.scripts[document.scripts.length-1]
}if(b&&b.src&&(!d||e.test(b.src))){return b}c=(f=document.getElementsByTagName("script")).length;while(c-->0){b=f[c];
if(e.test(b.src)){return b}}return null};if(!String.prototype.startsWith){String.prototype.startsWith=function(b,a){a=a||0;
return this.substr(a,b.length)===b}}if(typeof String.prototype.endsWith!=="function"){String.prototype.endsWith=function(a){return this.indexOf(a,this.length-a.length)!==-1
}}if(!Array.prototype.includes){Object.defineProperty(Array.prototype,"includes",{enumerable:false,value:function(b){var a=this.filter(function(c){return c==b
});return a.length>0}})}truste.ca.getUniqueAdContainersPM=function(m){var k=document.getElementsByTagName("script");
var o="//[^.]+.(intranet.)?(truste|trustarc)(-labs|-svc)?.(com|net)(:\n+)?/ca?.*c="+m+".*";var h=truste.ca.getScriptElement(o);
var d=[];if(h){var g=h.src.substring(h.src.indexOf("ca?")+3);var q=g.indexOf("&c=")+3;var e=g.substring(q);
d.push(e.substring(0,e.indexOf("&")));var j=g.split("&");if(j){var b="",f="",a=[];var p=true;for(var l=0;
l<k.length;l++){if(/(truste.com|trustarc.com|truste-svc.net)\/ca\?/.test(k[l].src)){f=k[l].src.substring(k[l].src.indexOf("ca?")+3);
a=f.split("&");if(a.length==j.length){for(var n=0;n<a.length;n++){b=(a[n].startsWith("c="))?a[n].substring((a[n].indexOf("=")+1)):b;
if(!j.includes(a[n])&&!a[n].startsWith("c=")){p=false;break}}if(p&&b!=""&&!d.includes(b.trim())){d.push(b.trim())
}b="";p=true}}}}}return d};truste.ca.tagProtocol=function(a){if(window.location.protocol=="https:"){return window.location.protocol
}else{var a=truste.ca.getScriptElement(/\/\/[^\.]+\.(intranet\.)?(truste|trustarc)(-labs|-svc)?\.(com|net)(:\n+)?\/[^\?#;]*ca(\?|\.js)/);
if(a){return a.src.substring(0,(a.src.indexOf("://")+1))}}return window.location.protocol}();truste.ca.initParameterMap=truste.ca.initParameterMap||function(d,g){if(d==null){g._query=g._url=""
}else{var b,a=g._url=d.src||g._url;a=(g._query=a.replace(/^[^;?#]*[;?#]/,"").replace(/&(amp|#38|#x00026);/ig,"&").replace(/&(equals|#61|#x0003d);/ig,"=").replace(/&(semi|#59|#x0003b);/ig,";")).replace(/[#;?]|&(num|#35|#x00023|quest|#63|#x0003f);/ig,"&");
if(a){for(a=a.split("&"),b=a.length;b-->0;){var c=a[b].split("=");try{g[String(c.shift()).toLowerCase()]=decodeURIComponent(c.length?c.join("="):"")
}catch(f){window.console&&console.log(f)}}}}return g};truste.ca.getDeviceIds=truste.ca.getDeviceIds||function(f,e){var a={ids:[],vals:[]};
var b,c;for(c=0;c<f.length;c++){b=f[c];var d=new RegExp(/^[a-z0-9\-_]+$/i);if(e[b]&&d.test(e[b])){a.ids.push(b);
a.vals.push(e[b])}}return a};truste.ca.getOptoutLink=truste.ca.getOptoutLink||function(c){var a=c.optoutLink.replace(/_SID_/,c.sid);
a=a+"&language=en";var j=["uid","device-sha1","platform-sha1","ifa","mac-sha1","gaid","anid-sha1"];var d=truste.ca.getDeviceIds(j,c.directParams);
if(d.ids.length>0){a=a+"&ids="+d.ids.join("|")+"&vals="+d.vals.join("|")}if(c.directParams.paid){a=a+"&paid="+c.directParams.paid
}if(c.directParams.oba&&c.directParams.oba!=="0"){var g=c.directParams.pid;var f=a.indexOf("pid=")+4;
var h=a.indexOf("&",f);var e=/^.*[_]+\d$/i;if(!e.test(g)){g+="_"+c.directParams.oba;if(h!=-1){a=a.substring(0,f)+g+a.substring(h)
}else{a=a.substring(0,f)+g}}}return a};truste.ca.processInterstitial=truste.ca.processInterstitial||function(b,d,c){var a=d.indexOf(b)+b.length;
if(a>-1){d=d.replace(b,c.optoutLink)}return d};truste.ca.isSecure=(window.location.protocol!="http:");
truste.ca.protocolCheck=function(a){return(truste.ca.isSecure)?a.replace("http:","https:"):a};String.prototype.equalsIgnoreCase=function(a){return(new String(this.toLowerCase())==(new String(a)).toLowerCase())
};var te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_ib='<div id="te-clr1-72dbb9ca-dc62-4d94-b2d9-b17f926c6769-itl" style="position: absolute; margin: 0pt auto; padding: 0px; width: 300px; height: 250px; border: 1px solid rgb(204, 204, 204); display: block; background: none repeat scroll 0% 0% rgb(255, 255, 255); overflow: hidden; line-height: 12px; font-size: 11px; font-family: arial,helvetica,clean,sans-serif; text-align: left; z-index: 1001;"> \n   <div class="closeTag" style="float: right; padding: 5px;"><a style="cursor: pointer;" alt="close" onclick="javascript:truste.ca.hideoverlay(te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi)">[close]</a></div> \n   <div class="mainRolloverSection"> \n      <div style="padding: 0px 3px;">\n        <a onclick="truste.ca.interstitial_click(\'001\', te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi )" href="https://www.thetradedesk.com/" target="_blank"  style="display: block; padding-top: 5px; border-top: 1px solid #bbb;">\n        <img src="https://choices.trustarc.com/get?name=theTradeDesk-LogoLockup-RGB.png" style="vertical-align: text-top;" alt="ad choices" class="advertiserLogo"></a>\n      </div>\n      <div style="padding: 0px 8px;"> \n        <p>To make this ad more relevant, it may have been select based on data related to your browsing activity or perceived interests.  We are committed to providing you with transparency and choice with respect to our use of this type of data.</p>\n          <div class="prefsLink" style="padding-bottom: 10px;">\n            <a onclick="truste.ca.interstitial_click(\'005\', te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi )" href="http://preferences-mgr.trustarc.com/?type=tradedesk&pid=tradedesk01&aid=tradedesk01&cid=rhff2xr_uvko0kk_vxngvib2&w=300&h=250" target="_blank" style="display: block; padding-top: 5px; border-top: 1px solid #bbb;"><b>Set Your Ad Preferences &raquo;</b></a><br> \n            <a onclick="truste.ca.interstitial_click(\'002\', te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi )" href="http://www.thetradedesk.com/privacy-policy/" target="_blank" style="display: block; padding-top: 5px; border-top: 1px solid #bbb;"><b>The Trade Desk Privacy Policy &raquo;</b></a><br>\n            <span style="display: block; padding-top: 5px; border-top: 1px solid #bbb;">Industry Resources: <a href="http://www.youronlinechoices.com/" target="_blank"><b>EU</b></a> | <a href="http://www.aboutads.info/" target="_blank"><b>US</b></a></span>\n         \n         </div>\n      </div>\n   </div>\n     <div style="padding: 3px 8px; height: 100%; background: none repeat scroll 0% 0% rgb(239, 239, 239); border-top: 1px solid #ddd;">\n       <b>Powered by: </b><a href="https://www.trustarc.com/adchoices/" target="_blank"><img src="https://consent.trustarc.com/get?name=trustarc-without-truste-logo-xs.png" style="vertical-align: middle; border: medium none; width: 70px;"></a> 	\n   </div>\n</div>';
var te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi={baseName:"te-clr1-72dbb9ca-dc62-4d94-b2d9-b17f926c6769",anchName:"te-clr1-72dbb9ca-dc62-4d94-b2d9-b17f926c6769-anch",baseUrl:truste.ca.protocolCheck("https://choices.trustarc.com/"),width:300,height:250,ox:0,oy:0,plc:"tr",iplc:"rel",intDivName:"te-clr1-72dbb9ca-dc62-4d94-b2d9-b17f926c6769-itl",iconSpanId:"te-clr1-72dbb9ca-dc62-4d94-b2d9-b17f926c6769-icon",backgroundColor:"white",opacity:0.8,filterOpacity:80,containerId:"tradedesk01cont1",noticeBaseUrl:truste.ca.protocolCheck("https://choices.trustarc.com/camsg?"),oBaseUrl:truste.ca.protocolCheck("http://choices.trustarc.com/"),irBaseUrl:truste.ca.protocolCheck("https://choices.trustarc.com/cair?"),icBaseUrl:truste.ca.protocolCheck("https://choices.trustarc.com/caic?"),capBaseUrl:truste.ca.protocolCheck("https://choices.trustarc.com/cap?"),interstitial:te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_ib,interstitialWidth:300,interstitialHeight:250,popTab:false,showLink:"javascript:truste.ca.showoverlay(te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi)",hideLink:"javascript:truste.ca.hideoverlay(te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi)",icon:truste.ca.protocolCheck("https://choices.trustarc.com/assets/forward_i.png"),icon_cam:truste.ca.protocolCheck("https://choices.trustarc.com/assets/admarker.png"),icon_cam_daa:truste.ca.protocolCheck("http://choices.trustarc.com/")+"assets/ad_choices_i.png",icon_cam_mo:truste.ca.protocolCheck("http://choices.trustarc.com/")+"assets/ad_choices_en.png",iconText:"&nbsp;AdChoices",aid:"tradedesk01",pid:"tradedesk01",zindex:"1000001",cam:"3",cid:"rhff2xr_uvko0kk_vxngvib2",sid:(!"0"||/^_LB.*LB_$/.test("0"))?"0":"0",priority:"2-0",optoutLink:"http://preferences-mgr.trustarc.com/?type=tradedesk&pid=tradedesk01&aid=tradedesk01&cid=rhff2xr_uvko0kk_vxngvib2&w=300&h=250",mobilePrefUrl:truste.ca.protocolCheck("https://mobile.truste.com/mobile/preferences/"),target:"over",admarker:"default",docRef:document,reportCalls:{},validParams:"pid=tradedesk01&aid=tradedesk01&cid=rhff2xr_uvko0kk_vxngvib2&w=300&h=250",callback:(typeof _LBcallbackLB_=="function")?_LBcallbackLB_:null,directParams:{},bindingsName:"te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi",isPMW:true,style:null};
if(te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi.aid.endsWith("-ma")||te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi.aid.endsWith("-mw")){(new Image(1,1)).src=((window.location.protocol=="http:")?"https://choices.trustarc.com/cap?":"https://choices.trustarc.com/cap?".replace("http:","https:"))+"aid=mata01&pid=mata01&cid=mamw-"+te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi.aid+"&w=300&h=250&c="+(((1+Math.random())*65536)|0).toString(16).substring(1)
}truste.ca.initParameterMap(truste.ca.getScriptElement(/\/\/[^\.]+\.(intranet\.)?(truste|trustarc)(-labs|-svc)?\.(com|net)(:\n+)?\/[^\?#;]*ca(\?|\.js)/),te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi.directParams);
truste.ca.bindingInitMapPM[te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi.baseName]=0;truste.ca.addBinding(te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi);
truste.ca.addEvent(window,"load",function(){setTimeout(function a(){truste.ca.initPMW(te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi)
},750)});truste.ca.getConsent=function(){var a={PrivacyManagerAPI:{action:"getConsent",timestamp:new Date().getTime(),domain:window.location.hostname,self:window.location.hostname,authority:"truste.com"}};
var b=JSON.stringify(a);window.top.postMessage(b,"*")};truste.ca.uuid=truste.ca.uuid||function(){return"te-"+(((1+Math.random())*65536)|0).toString(16).substring(1)
};truste.ca.getCreativeId=function(a){var c=null;if(a!==null){for(var b in truste.ca.creativeMap){if(truste.ca.creativeMap.hasOwnProperty(b)&&truste.ca.creativeMap[b]===a){c=b;
break}}if(c===null){c=truste.ca.uuid();truste.ca.creativeMap[c]=a}}return c};truste.ca.getCreativeIdOfWindow=function(b){var c=null;
for(var a in truste.ca.dominantTag){if(truste.ca.dominantTag.hasOwnProperty(a)){creative=truste.ca.dominantTag[a].creative;
if(creative.tagName==="IFRAME"&&creative.contentWindow===b){c=a;break}}}return c};truste.ca.checkIfParentHasCaJS=function(){var d;
if(self!=top){d={DeCollision:{action:"hasCaJS"}};window.parent.postMessage(JSON.stringify(d),"*")}else{var c="";
for(var a in truste.ca.dominantTag){if(truste.ca.dominantTag.hasOwnProperty(a)){c=truste.ca.dominantTag[a].baseName
}}if(c.length>0){if(truste.ca.checkForOtherIcons(self)){var b=truste.ca.getCapURL(c,"-cx");if(b.length>0){(new Image(1,1)).src=b
}}if(truste.ca.checkForOtherIcons2(self)){var b=truste.ca.getCapURL(c,"-cy");if(b.length>0){(new Image(1,1)).src=b
}}}}};truste.ca.checkCollision=function(d){var c,f,a,e;if(truste.ca.findCreative){e=truste.ca.findCreative(d)
}if(!e&&truste.ca2){e=truste.ca2.findCreative(d)}c=truste.ca.getCreativeId(e);if(typeof d.priority==="string"){f=d.priority.split("-")
}else{f=[d.priority,0]}if(f[0].toLowerCase()=="off"||f[1].toLowerCase()=="off"){return}if(typeof truste.ca.dominantTag[c]==="undefined"){truste.ca.dominantTag[c]={baseName:d.baseName,priority:f,creative:e,host:truste.ca.host}
}else{a=truste.ca.dominantTag[c].priority;if(a[1]==f[1]){if(a[0]<f[0]){truste.ca.removeIcon(d.baseName)
}else{truste.ca.removeIcon(truste.ca.dominantTag[c].baseName);truste.ca.dominantTag[c].baseName=d.baseName;
truste.ca.dominantTag[c].priority=f}}else{if(a[1]<f[1]){truste.ca.removeIcon(d.baseName)}else{truste.ca.removeIcon(truste.ca.dominantTag[c].baseName);
truste.ca.dominantTag[c].baseName=d.baseName;truste.ca.dominantTag[c].priority=f}}}setTimeout(function(){truste.ca.checkIfParentHasCaJS()
},750)};truste.ca.removeBaseNameInIframes=function(c,a){var b={DeCollision:{action:"suppress",baseName:c}};
a.contentWindow.postMessage(JSON.stringify(b),"*")};truste.ca.removeTag=function(d){var b,a;a=false;for(var c in truste.ca.bindMap){if(truste.ca.bindMap.hasOwnProperty(c)){if(truste.ca.bindMap[c].baseName===d){truste.ca.removeIcon(d);
a=true;break}}}if(!a){for(var c in truste.ca.dominantTag){if(truste.ca.dominantTag.hasOwnProperty(c)){b=truste.ca.dominantTag[c].creative;
if(b.tagName=="IFRAME"){truste.ca.removeBaseNameInIframes(d,b)}}}}};truste.ca.processCheckCollision=function(e){var b,a,c,f,d;
b=e.creativeHash;if(e.baseName!==truste.ca.dominantTag[b].baseName){a=truste.ca.dominantTag[b].priority;
c=e.priority;if(a[1]==c[1]){if(a[0]<c[0]){d=e.baseName}else{d=truste.ca.dominantTag[b].baseName;truste.ca.dominantTag[b].baseName=e.baseName;
truste.ca.dominantTag[b].priority=e.priority;truste.ca.dominantTag[b].host=e.host}}else{if(a[1]<c[1]){d=e.baseName
}else{d=truste.ca.dominantTag[b].baseName;truste.ca.dominantTag[b].baseName=e.baseName;truste.ca.dominantTag[b].priority=e.priority;
truste.ca.dominantTag[b].host=e.host}}truste.ca.removeTag(d)}else{console.log("Abort Collision check, no need to compare same baseName");
console.log("Challenger Tag");console.log(e);console.log("Dominant tag");consoloe.log(truste.ca.dominantTag[b])
}};truste.ca.passDominantTagToParent=function(d){var c,a;c={};for(var b in d){if(d.hasOwnProperty(b)){c[b]={baseName:d[b].baseName,priority:d[b].priority,host:d[b].host}
}}a={DeCollision:{action:"dominantTagPass",dominantTag:c}};window.parent.postMessage(JSON.stringify(a),"*")
};truste.ca.processDominantTagPass=function(e){var d,a,c;d=JSON.parse(e.data);if(truste.ca.isTopAd){a=truste.ca.getCreativeIdOfWindow(e.source);
for(var b in d.DeCollision.dominantTag){if(d.DeCollision.dominantTag.hasOwnProperty(b)){c=d.DeCollision.dominantTag[b];
truste.ca.processCheckCollision({baseName:c.baseName,source:e.source,priority:c.priority,creativeHash:a,host:c.host})
}}}else{truste.ca.passDominantTagToParent(d.DeCollision.dominantTag)}};truste.ca.processPostMessage=function(h){var l,d,c;
try{try{d=JSON.parse(h.data)}catch(j){d=h.data}if(d&&d.PrivacyManagerAPI){truste.ca.tagReferrer=h.origin
}else{if(d&&d.DeCollision){c=d.DeCollision.action;switch(c){case"hasCaJS":l={DeCollision:{action:"hasCaJSResponse"}};
h.source.postMessage(JSON.stringify(l),h.origin);break;case"hasCaJSResponse":truste.ca.isTopAd=false;
setTimeout(function(){truste.ca.passDominantTagToParent(truste.ca.dominantTag)},750);break;case"dominantTagPass":truste.ca.processDominantTagPass(h);
break;case"suppress":truste.ca.removeTag(d.DeCollision.baseName);break;default:break}}else{if(d&&d==="AMZNOVRIDE"){var a="http://www.amazon.com/adprefs/?pn=1&pg=daaedisc&pp=1,t,";
var n;for(var k in truste.ca.bindMap){if(truste.ca.bindMap.hasOwnProperty(k)){truste.ca.bindMap[k].target="directlink";
n=a;n=n+truste.ca.bindMap[k].pid+",";n=n+truste.ca.bindMap[k].aid+",";n=n+truste.ca.bindMap[k].cid+",";
n=n+truste.ca.bindMap[k].width+",";n=n+truste.ca.bindMap[k].height;truste.ca.bindMap[k].optoutLink=n}}}else{if(h.source===self.parent){if(!truste.ca.hasRegistered){var g={};
g.source=h.source;g.data=h.data;g.origin=h.origin;truste.ca.storedParentEvents.push(g)}else{for(var f in truste.ca._contRegistry){var b=truste.ca._contRegistry[f];
if(d.priority<=b.priority){truste.ca.removeIcon(b.baseName)}else{if(b){var m=JSON.stringify({suppress:true});
h.source.postMessage(m,h.origin)}}}}}else{if(d.suppress){for(var f in truste.ca._contRegistry){truste.ca.removeIcon(truste.ca._contRegistry[f].baseName)
}}}}}}}catch(h){}};truste.ca.isInBindMap=function(a){for(var b in truste.ca.bindMap){if(a==truste.ca.bindMap[b].containerId){return true
}}return false};truste.ca.initializeBindingInitMapPM=function(c){var f=truste.ca.getUniqueAdContainersPM(c.containerId);
var d=c;var e;for(var a=0;a<f.length;a++){if(!truste.ca.isInBindMap(f[a])){e=d.baseName+"-c"+a;var g=Object.assign({},d);
g.baseName=e;g.anchName=e+"-anch";g.intDivName=e+"-itl";g.iconSpanId=e+"-icon";g.containerId=f[a];g.bindingsName=e.replace(/-/g,"_")+"_bi";
g.showLink=d.showLink.replace(d.baseName.replace(/-/g,"_")+"_bi","truste.ca.bindMap['"+e+"']");g.hideLink=d.hideLink.replace(d.baseName.replace(/-/g,"_")+"_bi","truste.ca.bindMap['"+e+"']");
truste.ca.bindingInitMapPM[g.baseName]=0;truste.ca.addBinding(g)}}};truste.ca.initPMW=function(g){truste.ca.initializeBindingInitMapPM(g);
for(var d in truste.ca.bindingInitMapPM){var f=truste.ca.bindingInitMapPM[d];if(f==0){var a=truste.ca.bindMap[d];
truste.ca.bindingInitMapPM[d]=f+1;var c=document.createElement("script");var h="aid="+a.aid;if(truste.ca.isMobile&&!a.suffix){a.suffix=true;
if(h.endsWith("-ma")){h=h.substring(0,h.indexOf("-ma"))}else{if(h.endsWith("-mw")){h=h.substring(0,h.indexOf("-mw"))
}}h=h+((truste.ca.isInApp)?"-ma":"-mw")}if(!a.impression){(new Image(1,1)).src=a.capBaseUrl+h+"&pid="+a.pid+"&cid="+a.cid+"&w="+a.width+"&h="+a.height+"&c="+(((1+Math.random())*65536)|0).toString(16).substring(1);
a.impression=1}var e=h+"&pid="+a.pid+"&cid="+a.cid+"&w="+a.width+"&h="+a.height+"&c="+a.containerId+"&js=pmw1&base="+a.baseName;
if(a.directParams.plc){e=e+"&plc="+a.directParams.plc}if(a.directParams.cam){e=e+"&cam="+a.directParams.cam
}if(a.directParams.admarker){e=e+"&admarker="+a.directParams.admarker}if(a.directParams.language){e=e+"&language="+a.directParams.language
}if(a.directParams.locale){e=e+"&locale="+a.directParams.locale}if(a.directParams.sid){e=e+"&sid="+a.directParams.sid
}c.src=((truste.ca.tagProtocol=="https:")?a.baseUrl.replace("http:","https:"):a.baseUrl)+"ca?"+e;document.body.appendChild(c);
if(truste.ca.tagProtocol=="https:"){a.noticeBaseUrl=a.noticeBaseUrl.replace("http:","https:");a.irBaseUrl=a.irBaseUrl.replace("http:","https:")
}var c=document.createElement("script");var e=h+"&pid="+a.pid+"&cid="+a.cid+"&w="+a.width+"&h="+a.height+"&c="+a.containerId+"&js=pmw2";
c.src=((truste.ca.tagProtocol=="https:")?a.baseUrl.replace("http:","https:"):a.baseUrl)+"ca?"+e;document.body.appendChild(c)
}}};truste.ca.loadCapImg=function(a){if(a.length>0){(new Image(1,1)).src=a;return 1}return 0};truste.ca.removeIcon=function(d){var c=document.getElementById(d+"-icon")||document.getElementById(d);
if(c&&c.parentNode){c.parentNode.removeChild(c)}delete truste.ca._contRegistry[d];var a=truste.ca.bindMap[d];
if(!a.reportCalls.ct){a.reportCalls.ct=truste.ca.loadCapImg(truste.ca.getCapURL(d,"-ct"))}};var readyState=document.readyState;
if((readyState)&&(readyState=="complete"||readyState=="interactive")){setTimeout(truste.ca.initPMW(te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi),750)
}setTimeout(function(){if(document.readyState=="loading"){truste.ca.initPMW(te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi)
}},750);truste.ca.addRegistryListener(function(b){var g=te_clr1_72dbb9ca_dc62_4d94_b2d9_b17f926c6769_bi;
var a=g.baseName;var f=truste.ca._contRegistry[a];var e=function e(j,h){for(var k=h;k!=null;k=k.parentNode){if(k==j){return true
}}return false};if(b.baseName==a){if(!a){return true}for(var c in truste.ca._contRegistry){var d=truste.ca._contRegistry[c];
if(e(d.element,b.element)||e(b.element,d.element)){return true}}}if(!f){return}if(f.priority&&(!b.priority||f.priority<b.priority)){if(e(b.element,f.element)||e(f.element,b.element)){truste.ca.removeIcon(f.baseName)
}}});truste.ca.getCapURL=function(f,e){for(var c in truste.ca.bindMap){if(truste.ca.bindMap.hasOwnProperty(c)){if(truste.ca.bindMap[c].baseName==f){var a=truste.ca.bindMap[c];
var d=a.capBaseUrl;return d.concat("aid=").concat(a.aid).concat(e).concat("&pid=").concat(a.pid).concat("&cid=").concat(a.cid).concat("&w=").concat(a.width).concat("&h=").concat(a.height)
}}}return""};truste.ca.obfuscate=truste.ca.obfuscate||function(a){foo=btoa(a);return foo.replace(/(.{1})/g,"-$1")
};truste.ca.iconMap=truste.ca.iconMap||{"-Y-y-5-i-Z-X-R-y-Y-W-Q-u-Y-2-9-t":"-R-X-Z-p-Z-G-9-u","-c-2-l-u-L-n-N-0-Y-y-5-z-L-W-1-z-b-i-5-j-b-2-0-=":"T-V-N-O","-c-G-F-n-Z-W-F-k-M-i-5-n-b-2-9-n-b-G-V-z-e-W-5-k-a-W-N-h-d-G-l-v-b-i-5-j-b-2-0-=":"-R-2-9-v-Z-2-x-l","-L-V-I-t-M-i-0-5-L-X-Y-t-W-i-0-y-L-X-g-t-b-A-=-=":"-U-3-B-l-Y-2-l-m-a-W-M-g-T-W-V-k-a-W-E-=","-Y-2-R-u-L-m-R-v-d-W-J-s-Z-X-Z-l-c-m-l-m-e-S-5-j-b-2-0-=":"-R-G-9-1-Y-m-x-l-I-F-Z-l-c-m-l-m-e-Q-=-=","-Z-G-9-t-Z-G-V-4-L-m-N-v-b-Q-=-=":"-T-W-F-n-b-m-V-0-a-W-M-=","-c-3-B-l-L-m-F-0-Z-G-1-0-L-m-N-v-b-Q-=-=":"-T-W-l-j-c-m-9-z-b-2-Z-0","-d-X-N-3-Z-W-I-u-Z-G-9-0-b-2-1-p-L-m-N-v-b-Q-=-=":"-R-G-9-0-b-2-1-p","-c-3-R-h-d-G-l-j-L-n-B-1-b-H-N-l-M-z-Y-w-L-m-N-v-b-Q-=-=":"-U-H-V-s-c-2-U-z-N-j-A-=","-b-C-5-5-a-W-1-n-L-m-N-v-b-Q-=-=":"-W-W-F-o-b-2-8-="};
truste.ca.checkForOtherIcons=function(b){var d=b.document.getElementsByTagName("img");var c,a;a=truste.ca.getURLHostFile("http://choices.trustarc.com/");
for(i=0;i<d.length;i++){c=truste.ca.getURLHostFile(d[i].src);if(truste.ca.iconMap.hasOwnProperty(truste.ca.obfuscate(c.host))||((c.host!=a.host)&&(truste.ca.isAdChoiceSizeMatch(d[i])||(d[i].alt.toLowerCase().search(/(?:ad).*(?:choices?|icon|marker)+/i)>=0)||(c.path.toLowerCase().search(/(?:ad).*(?:choices?|icon|marker)+/i)>=0)))){return true
}}return false};truste.ca.checkForOtherIcons2=function(a){var c=a.document.getElementsByTagName("script");
var b;for(i=0;i<c.length;i++){b=truste.ca.getURLHostFile(c[i].src);if(truste.ca.iconMap.hasOwnProperty(truste.ca.obfuscate(b.host))){return true
}}return false};truste.ca.isAdChoiceSizeMatch=function(f){var c=f.naturalWidth;var a=f.naturalHeight;
var b=((c>74)?77:19)-3;var e=((c>74)?77:19)+3;var g=15-3;var d=15+3;return(c>=b&&c<=e)&&(a>=g&&a<=d)};
truste.ca.getURLHostFile=function(c){var b=document.createElement("a");b.href=c;return{host:b.hostname,path:b.pathname}
};truste.ca._version="5.28";