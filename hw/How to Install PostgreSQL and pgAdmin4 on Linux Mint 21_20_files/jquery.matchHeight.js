!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,a=-1,n=function(t){return parseFloat(t)||0},o=function(e){var a=t(e),o=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):1>=Math.floor(Math.abs(o-a))?r[r.length-1]=s.add(e):r.push(e),o=a}),r},r=function(e){var a={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(a,e):("boolean"==typeof e?a.byRow=e:"remove"===e&&(a.remove=!0),a)},s=t.fn.matchHeight=function(e){var a=r(e);if(a.remove){var n=this;return this.css(a.property,""),t.each(s._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!a.target||(s._groups.push({elements:this,options:a}),s._apply(this,a)),this};s.version="master",s._groups=[],s._throttle=80,s._maintainScroll=!1,s._beforeUpdate=null,s._afterUpdate=null,s._rows=o,s._parse=n,s._parseOptions=r,s._apply=function(e,a){var i=r(a),l=t(e),c=[l],h=t(window).scrollTop(),p=t("html").outerHeight(!0),u=l.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),i.byRow&&!i.target&&(l.each(function(){var e=t(this),a=e.css("display");"inline-block"!==a&&"flex"!==a&&"inline-flex"!==a&&(a="block"),e.data("style-cache",e.attr("style")),e.css({display:a,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),c=o(l),l.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(c,function(e,a){var o=t(a),r=0;if(i.target)r=i.target.outerHeight(!1);else{if(i.byRow&&o.length<=1){o.css(i.property,"");return}o.each(function(){var e=t(this),a=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var o={display:n};o[i.property]="",e.css(o),e.outerHeight(!1)>r&&(r=e.outerHeight(!1)),a?e.attr("style",a):e.css("display","")})}o.each(function(){var e=t(this),a=0;!(i.target&&e.is(i.target))&&("border-box"!==e.css("box-sizing")&&(a+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),a+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(i.property,r-a+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),s._maintainScroll&&t(window).scrollTop(h/p*t("html").outerHeight(!0)),this},s._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var a=t(this),n=a.attr("data-mh")||a.attr("data-match-height");n in e?e[n]=e[n].add(a):e[n]=a}),t.each(e,function(){this.matchHeight(!0)})};var i=function(e){s._beforeUpdate&&s._beforeUpdate(e,s._groups),t.each(s._groups,function(){s._apply(this.elements,this.options)}),s._afterUpdate&&s._afterUpdate(e,s._groups)};s._update=function(n,o){if(o&&"resize"===o.type){var r=t(window).width();if(r===e)return;e=r}n?-1===a&&(a=setTimeout(function(){i(o),a=-1},s._throttle)):i(o)},t(s._applyDataApi),t(window).bind("load",function(t){s._update(!1,t)}),t(window).bind("resize orientationchange",function(t){s._update(!0,t)})}),jQuery(document).ready(function(t){var e=document.body||document.documentElement,e=e.style;if(""==e.webkitFlexWrap||""==e.msFlexWrap||""==e.flexWrap)return!1;jQuery(".wp-show-posts-columns .wp-show-posts-inner").matchHeight();var a=t.fn.matchHeight._rows(t(".wp-show-posts-columns .wp-show-posts-inner"));t.each(a,function(t,e){e.first().addClass("generate-column-first"),e.last().addClass("generate-column-last")})});
