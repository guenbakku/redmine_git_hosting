/*!
 octocard
 1.2.0
 07-04-2014
*/
!function(){var a='/* resert css */#root-id {    position: relative;    padding: 1em;    min-height: 40px;    margin: 0 2px 2px 0;    display: block;    color: #666;    font: 14px "Helvetica Neue", Arial, Helvetica, sans-serif;    text-align: left;    line-height: 1.5;    border: 1px solid #CCC;    background-color: #FFF;    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;    -webkit-box-shadow: 2px 2px 0 #E6E9ED;    box-shadow: 2px 2px 0 #E6E9ED;}#root-id.octocard-min {    font-size: 12px;}#root-id span,#root-id img,#root-id ul,#root-id ol,#root-id h1,#root-id h2,#root-id li,#root-id p,#root-id div {    margin: 0;    padding: 0;    border: none;    float: none;    position: static;    overflow: hidden;    width: auto;    height: auto;    line-height: inherit;    color: inherit;    font-size: inherit;    font-weight: normal;    background: none;}#root-id h1,#root-id h2 {    color: #333;    font-weight: bold;}#root-id li {    list-style: none;}#root-id p,#root-id div,#root-id img {    display: block;}#root-id a,#root-id span {    display: inline;    font-size: inherit;    text-decoration: none;}#root-id a {    color: #666;    text-decoration: none;    -webkit-transition: color 0.5s ease;    transition: color 0.5s ease;}#root-id a:hover {    color: #4A89DC;    text-decoration: none;}#root-id .octocard-m {    position: relative;    width: 100%;    padding: 0 0 10px 0;    margin: 0 0 10px 0;    border-bottom: 1px solid #CCC;}#root-id .octocard-m:last-child {    margin-bottom: 0;    padding-bottom: 0;    border-bottom: none;}#root-id .octocard-error {    display: inline-block;    vertical-align: middle;    color: #DA4453;}#root-id .octocard-error a {    margin-left: 10px;}/* loader css */#root-id .octocard-loading {    position: absolute;    top: 0;    left: 0;    height: 100%;    width: 100%;    background-color: rgba(255, 255, 255, 0.8);}#root-id .octocard-loading-inner {    position: absolute;    top: 50%;    left: 50%;    width: 80px;    height: 20px;    margin-left: -40px;    margin-top: -10px;    overflow: visible;}#root-id .octocard-loading-0,#root-id .octocard-loading-1,#root-id .octocard-loading-2 {    float: left;    width: 20px;    height: 100%;    margin-right: 10px;    background: #5D9CEC;}#root-id .octocard-loading-2 {    margin-right: 0;}#root-id .octocard-loading-cur {    background-color: #4A89DC;    -webkit-transform: scale(1.2);    -ms-transform: scale(1.2);    transform: scale(1.2);}/* module/base css */#root-id .octocard-m-base {   margin: -1em -1em 10px -1em;   padding: 0.5em 1em;   background-color: #EAEAEA;   background-image: -moz-linear-gradient(#FAFAFA, #EAEAEA);   background-image: -webkit-linear-gradient(#FAFAFA, #EAEAEA);   background-image: linear-gradient(#fafafa, #EAEAEA);}#root-id .octocard-m-base a {    display: block;}#root-id .octocard-m-base a:hover {    text-decoration: none;}#root-id .octocard-m-base img {    float: left;    margin-right: 10px;    padding: 1px;    width: 44px;    height: 44px;    border: 1px solid #DDD;    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);    -webkit-transition: border-color 0.5s ease;    transition: border-color 0.5s ease;}#root-id .octocard-m-base a:hover img {    border-color: #4A89DC;}#root-id .octocard-m-base span,#root-id .octocard-m-base h1 {    overflow: hidden;    line-height: 28px;    font-size: 20px;    white-space: nowrap;    text-overflow: ellipsis;    -webkit-transition: color 0.5s ease;    transition: color 0.5s ease;}#root-id .octocard-m-base a:hover h1 {    color: #4A89DC;}#root-id .octocard-m-base .octocard-m-base-noname {    line-height: 48px;    font-size: 24px;}#root-id .octocard-m-base span {    display: block;    font-size: 16px;    line-height: 20px;}/* min base */#root-id.octocard-min .octocard-m-base img {    width: 36px;    height: 36px;    padding: 0;    border: none;    -webkit-box-shadow: none;    box-shadow: none;}#root-id.octocard-min .octocard-m-base h1 {    font-size: 16px;    line-height: 20px;}#root-id.octocard-min .octocard-m-base .octocard-m-base-noname {    font-size: 16px;    line-height: 36px;}#root-id.octocard-min .octocard-m-base span {    font-size: 14px;    line-height: 16px;}/* module/details css */#root-id .octocard-m-details li {    white-space: nowrap;    text-overflow: ellipsis;}#root-id .octocard-m-details li:before {    content: "-";    float: left;    margin-right: 10px;    color: #AAB2BD;}#root-id .octocard-m-details a {    display: block;    overflow: hidden;    text-overflow: ellipsis;}/* min details */#root-id.octocard-min .octocard-m-details li:before {    display: none;}/* max details */#root-id.octocard-max .octocard-m-details li {    float: left;    margin-right: 2%;    width: 48%;}/* module/orgs css */#root-id .octocard-m-orgs h2 {    margin-bottom: 5px;}#root-id .octocard-m-orgs ul {    margin: 0;    padding: 0;    overflow: hidden;    list-style: none;}#root-id .octocard-m-orgs li {    list-style: none;    float: left;    margin-right: 4px;    margin-bottom: 4px;}#root-id .octocard-m-orgs li:last-child {    margin-right: 0;}#root-id .octocard-m-orgs a {    float: left;    text-decoration: none;    color: inherit;}#root-id .octocard-m-orgs img {    padding: 1px;    width: 32px;    height: 32px;    border: 1px solid #ddd;}#root-id .octocard-m-orgs a:hover img {    border-color: #4A89DC;}/* min orgs */#root-id.octocard-min .octocard-m-orgs img {    padding: 0;    width: 24px;    height: 24px;    border: none;}/* module/repos css */#root-id .octocard-m-repos ul {    margin: 0;    padding: 0;    overflow: hidden;    list-style: none;}#root-id .octocard-m-repos li {    list-style: none;}#root-id .octocard-m-repos a {    position: relative;    display: block;    text-decoration: none;    color: inherit;}#root-id .octocard-m-repos a {    width: 100%;}#root-id .octocard-m-repos a h2,#root-id .octocard-m-repos a p {    font-size: 14px;    margin-right: 50px;    white-space: nowrap;    text-overflow: ellipsis;}#root-id .octocard-m-repos a:hover h2 {    color: #4A89DC;    -webkit-transition: color 0.5s ease;    transition: color 0.5s ease;}#root-id .octocard-m-repos a span {    position: absolute;    top: 50%;    right: 0;    margin-top: -10.5px;    line-height: 1.5;    font-size: 14px;    color: #999;}/* min repos */#root-id.octocard-min .octocard-m-repos a {    margin: 0.15em 0;   /* (1.5 - 1.2) / 2 = 0.15 */    line-height: 1.2;}#root-id.octocard-min .octocard-m-repos p {    display: none;}#root-id.octocard-min .octocard-m-repos h2 {    margin-right: 0.25em;    display: inline;    white-space: initial;    word-wrap: break-word;}#root-id.octocard-min .octocard-m-repos span {    display: inline;    position: static;    margin: 0;    font-size: 12px;}/* max repos */#root-id.octocard-max .octocard-m-repos h2 {    font-size: 16px;}#root-id.octocard-max .octocard-m-repos p {    white-space: initial;}/* module/stats css */#root-id .octocard-m-stats ul {    margin: 0;    padding: 0;    height: 42px;    overflow: hidden;    list-style: none;}#root-id .octocard-m-stats li,#root-id .octocard-m-stats a {    float: left;    width: 33.33%;    text-decoration: none;    list-style: none;    color: inherit;    text-align: center;}#root-id .octocard-m-stats a {    width: 100%;}#root-id .octocard-m-stats a strong,#root-id .octocard-m-stats a span {    display: block;    width: 100%;    line-height: 1.2;    text-align: center;}#root-id .octocard-m-stats a:hover strong,#root-id .octocard-m-stats a:hover span {    color: #4A89DC;    -webkit-transition: color 0.5s ease;    transition: color 0.5s ease;}#root-id .octocard-m-stats a span {    margin-top: -5px;    font-size: 12px;    color: #999;}#root-id .octocard-m-stats a strong {    font-size: 28px;    font-weight: bold;    color: #333;}/* min stats */#root-id.octocard-min .octocard-m-stats ul {    height: 37px;}#root-id.octocard-min .octocard-m-stats a strong {    font-size: 24px;}#root-id.octocard-min .octocard-m-stats li {    width: 50%;}/* max stats */#root-id.octocard-max .octocard-m-stats li {    width: 25%;}/* module/eventsStatis css */#root-id .octocard-m-eventsstatis {    position: relative;}#root-id .octocard-m-eventsstatis h2 {    margin-bottom: 5px;}#root-id .octocard-m-eventsstatis-bd {    overflow: hidden;    width: 100%;    height: 80px;}#root-id .octocard-m-eventsstatis-bar {    position: relative;    float: right;    min-width: 3px;    height: 100%;}#root-id .octocard-m-eventsstatis-bar div {    position: absolute;    bottom: 0;    left: 0;    width: 100%;    text-indent: -9999px;    background-color: #5D9CEC;}#root-id .octocard-m-eventsstatis-date {    overflow: hidden;    font-size: 12px;    color: #888;}#root-id .octocard-m-eventsstatis-date-end {    float: right;}/* min eventsstatis */#octocard.octocard-min .octocard-m-eventsstatis-bd {    height: 48px;}#octocard.octocard-min .octocard-m-eventsstatis-date {    display: none;}/* module/footer css */#root-id:hover .octocard-footer {    display: block;}#root-id .octocard-footer {    position: absolute;    bottom: -1px;    right: -1px;    display: none;    padding: 1px 4px;    z-index: 1;    height: 12px;    text-align: center;    font-size: 12px;    line-height: 12px;    background: #EFEFEF;    border: 1px solid #CCC;}',b=/(\d{4})-(\d{2})-(\d{2})T/,c={createStyle:function(a){var b=document.createElement("style");return b.type="text/css",b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a)),b},format:function(a,b,c){if(!b)return a;var d;if("object"!=typeof b){var e=c?b:"#{v}";return d=c||b,a.replace(new RegExp(e,"g"),""+d)}var f=b;return a.replace(c||/#\{([^{}]+)\}/g,function(a,b){return d=f[b],null==d?"":""+d})},jsonp:function(a,b,c){var d,e=document.createElement("script"),f="githubcardjsonp"+(new Date).getTime(),g=5e4,h=0,i=!1,j=a.match(/[?&]callback=([^$&]+)/);e.src=j?a.replace(/([?&]callback=)[^$&]+/,"$1"+f):a+(-1===a.indexOf("?")?"?":"&")+"callback="+f,e.type="text/javascript",e.charset="UTF-8",window[f]=function(a){return a.success?(i=!0,b(a.data),window[f]=null,void 0):(c(a.message),i=!0,void 0)};var k=function(){!i&&c&&c("Server or network error."),e.onload=e.onreadystatechange=null,document.body.removeChild(e)};e.onload=e.onreadystatechange=function(){if(!h){var a=e.readyState;("undefined"==typeof a||"loaded"==a||"complete"==a)&&(h=1,k(),clearTimeout(d))}},d=setTimeout(function(){k(),window[f]=function(){}},g),document.body.appendChild(e)},bind:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},resetTime:function(a){return a.setMilliseconds(0),a.setMinutes(0),a.setHours(0),a.setSeconds(0),a},today:function(){return c.resetTime(new Date)},nextDay:function(a){return new Date(a.getTime()+864e5)},tomorrow:function(){return c.nextDay(c.today())},strToDate:function(a){var c=a.match(b);return new Date(c[1],c[2]-1,c[3],0,0,0,0)},getPageHeight:function(a){var b="scrollHeight",c="offsetHeight",d=a.documentElement,e=a.body;return Math.max(e[b],e[c],d[b],d[c])},getShadowRoot:function(a){for(var b,c=["","webkit","moz","ms"],d=0,e=c.length;e>d;d++)if(b=this._getShadowRoot(a,c[d]))return b},_getShadowRoot:function(a,b){var d="createShadowRoot",e="shadowRoot";if(b&&(d=b+c.capitalize(d),e=b+c.capitalize(e)),"function"==typeof a[d]){var f=a[e];return f?(f.innerHTML="",f):(f=a[d](),f.resetStyleInheritance=!0,f)}},capitalize:function(a){return a.charAt(0).toUpperCase()+a.slice(1)},addSizeClass:function(a,b){for(var c,d,e=a.offsetWidth,f=[0,240,480],g={480:"octocard-max",240:"octocard-mid",0:"octocard-min"},h=0;h<f.length&&(d=f[h],c=f[h+1],!(e>=d&&(c>e||!c)));h++);b.getAttribute("data-rule")!=d&&(b.className=b.className.replace(/(^| )octocard\-m[^ $]+/,"")+" "+g[d],b.setAttribute("data-rule",d))}},d='<div class="octocard-loading-inner"><div class="octocard-loading-0"></div><div class="octocard-loading-1"></div><div class="octocard-loading-2"></div></div>',e=function(a,b){this.element=a;var c=document.createElement("div");c.style.zIndex=b||9,c.className="octocard-loading",this.element.appendChild(c),this.root=c,c.innerHTML=d,this.highlightNum=2,this.start()};e.prototype.start=function(){var a=this.root.firstChild.childNodes,b=this;this.timer=setInterval(function(){var c=b.highlightNum;a[c].className="octocard-loading-"+c,b.highlightNum=c=(c+1)%3,a[c].className="octocard-loading-"+c+" octocard-loading-cur"},500)},e.prototype.stop=function(){clearInterval(this.timer)},e.prototype.end=function(){this.stop(),this.root&&(this.element.removeChild(this.root),delete this.root)};var f=function(a,b){return new e(a,b)},g={mods:{},get:function(a){return this.mods[a]},add:function(a,b){this.mods[a]=b}},h=function(a,b){var d=a.data.base;d.name&&d.name!==d.login?d._login=d.login:(d.name=d.name||d.login,d._nameClass="octocard-m-base-noname");var e=c.format(h.MOD_HTML,a.data.base);a.appendModHTML("base",e),b()};h.MOD_HTML='<a href="#{html_url}" target="_blank"><img src="#{avatar_url}" width="44" height="44"/><h1 class="#{_nameClass}">#{name}</h1><span>#{_login}</span></a>',g.add("base",h);var i=function(a,b){var c=a.data.base;if(c.email||c.blog||c.bio||c.location||c.company){var d="<ul>"+(c.email?"<li>"+c.email+"</li>":"")+(c.blog?'<li><a href="'+c.blog+'" target="_blank">'+c.blog+"</a></li>":"")+(c.bio?"<li>"+c.bio+"</li>":"")+(c.location?"<li>"+c.location+"</li>":"")+(c.company?"<li>"+c.company+"</li>":"")+"</ul>";a.appendModHTML("details",d)}b()};g.add("details",i);var j=function(a,b){var d=a.data.eventsStatis;if(0===d.length)return b(),void 0;for(var e,f,g,h=0,i=d.length-1,k=[],l=function(a){for(f=new Date(864e5+f.getTime());a>f;)k.push({date:f,counter:0}),f=new Date(864e5+f.getTime())};i>=0&&(e=d[i],h=Math.max(h,e.counter),f=c.strToDate(e.date),k.push({date:f,counter:e.counter}),0!==i);i--)g=c.strToDate(d[i-1].date),l(g);var m=c.tomorrow();l(m);var n="";i=k.length-1;for(var o=100/(i+1);i>=0;i--)e=k[i],n+=c.format(j.MOD_BAR_HTML,{date:e.date.toDateString(),counter:e.counter,width:o,height:100*(e.counter/h),visibility:e.counter?"visible":"hidden"});a.appendModHTML("eventsStatis",c.format(j.MOD_HTML,{map:n})),b()};j.MOD_HTML='<h2>Events</h2><div class="octocard-m-eventsstatis-bd">#{map}</div><div class="octocard-m-eventsstatis-date"><span class="octocard-m-eventsstatis-date-end">Now</span></div>',j.MOD_BAR_HTML='<div class="octocard-m-eventsstatis-bar" style="width:#{width}%;"><div style="height:#{height}%;visibility:#{visibility};">#{date} - #{counter}</div></div>',g.add("eventsStatis",j);var k=function(a,b){var c=a.config.noFooter;if(c&&"false"!==c)return b(),void 0;var d=document.createElement("a");d.href="http://octocard.info/",d.target="_blank",d.className="octocard-footer",d.innerHTML="Octocard.info",a.element.appendChild(d),b()};g.add("footer",k);var l=function(a,b){var d=a.data.orgs;if(0===d.length)return b(),void 0;var e=parseInt(a.config.orgsNum,10)||-1;e>=0&&(d=d.slice(0,e));for(var f="",g=0,h=d.length;h>g;g++)f+=c.format(l.MOD_LI_HTML,d[g]);a.appendModHTML("orgs",c.format(l.MOD_HTML,f)),b()};l.MOD_HTML="<h2>Organizations</h2><ul>#{v}</ul>",l.MOD_LI_HTML='<li><a href="https://github.com/#{login}" target="_blank" title="#{login}"><img src="#{avatar_url}" alt="#{login}" height="32" width="32" /></a></li>',g.add("orgs",l);var m=function(a,b){var d,e;if(data=a.data.repos,0===data.length)return b(),void 0;data.sort(function(a,b){return b.watchers_count-a.watchers_count});var f=a.config.reposIgnored,g={};if(f)for(f=f.split(","),d=0,e=f.length;e>d;d++)g[f[d]]=1;var h,i=parseInt(a.config.reposNum,10)||3,j="<ul>";for(d=0,h=0,e=data.length;e>d&&h!==i;d++)g[data[d].name]||(h++,j+=c.format(m.MOD_LI_HTML,data[d]));j+="</ul>",a.appendModHTML("repos",j),b()};m.MOD_LI_HTML='<li><a href="#{html_url}" target="_blank"><h2>#{name}</h2><p>#{description}</p><span>#{watchers_count}&#10029;</span></a></li>',g.add("repos",m);var n=function(a,b){var d=c.format(n.MOD_HTML,a.data.base);a.appendModHTML("stats",d),b()};n.MOD_HTML='<ul><li><a target="_blank" href="#{html_url}/followers"><strong>#{followers}</strong><span>followers</span></a></li><li><a target="_blank" href="#{html_url}/following"><strong>#{following}</strong><span>following</span></a></li><li><a target="_blank" href="#{html_url}?tab=repositories"><strong>#{public_repos}</strong><span>repos</span></a></li><li><a target="_blank" href="https://gist.github.com/#{login}"><strong>#{public_gists}</strong><span>gists</span></a></li></ul>',g.add("stats",n);var o=function(a){this.reload(a)};o.prototype.reload=function(b){if(this.host&&(this.host.innerHTML=""),b=b||{},this.config=b,b.api=b.api||"http://octocard.info/api",this.element=b.element||"octocard","string"==typeof this.element?(this.elementId=this.element,this.element=document.getElementById(this.element),this.element||(this.element=document.createElement("div"),this.element.id=this.elementId,r.parentNode.insertBefore(this.element,r))):this.element.id?this.elementId=this.element.id:(this.elementId="octocard"+(new Date).getTime(),this.element.id=this.elementId),this.host=this.element,b.noIsolated&&"false"!==b.noIsolated||this._createContainer(),this._bindSizeClass(),"undefined"==typeof a)throw new Error("Theme css not found!");var c=this.createStyle(a);this.element.appendChild(c),this.username=b.name;var d=b.modules||"base,details,stats,repos,eventsStatis,orgs";d=d.split(","),d.unshift("footer"),this.setupModules(d)},o.prototype._showErrorMsg=function(a,b){var d=document.createElement("div");d.className="octocard-error",d.innerHTML=a;var e=document.createElement("a");e.href="javascript:void(0)",e.innerHTML="Refresh";var f=this;c.bind(e,"click",function(){f.element.removeChild(d),f._updateContainer(),f.setupModules(b)}),d.appendChild(e),this.element.appendChild(d),this._updateContainer()},o.prototype.loadModule=function(a,b){var c=g.get(a);c&&c(this,b)},o.prototype.appendModHTML=function(a,b){var c=document.createElement("div");return c.className="octocard-m octocard-m-"+a.toLowerCase(),c.innerHTML=b,this.element.appendChild(c),c},o.prototype.createStyle=function(a){return c.createStyle(c.format(a,"#root-id","#"+this.elementId))},o.prototype.setupModules=function(a,b){function d(c){function d(){e.loadModule(a[f],function(){f++,h>f?d():(g&&g.end(),e._updateContainer(),b&&b())})}e.data=c;var f=0,h=a.length;d()}var e=this;if(e.config.data)return d(e.config.data),void 0;var g=f(this.element);e._updateContainer(),c.jsonp(this.config.api+"?mods="+a.join(",")+"&login="+this.username,d,function(b){g&&g.end(),e._showErrorMsg(b,a)})},o.prototype._createContainer=function(){var a=document.createElement("div");this.elementId+=(new Date).getTime(),a.id=this.elementId;var b=c.getShadowRoot(this.element);if(b)b.appendChild(a);else{var d=document.createElement("iframe");d.style.cssText="width:100%;height:0;position:relative;top:0;left:0;right:0;bottom:0;display:block;padding:0;margin:0;border:none;",d.frameBorder="0",this.element.appendChild(d);var e=d.contentDocument||d.contentWindow.document;e.open(),e.write(""),e.close(),e.body.style.cssText="overflow:hidden;margin:0;padding:0;",e.body.appendChild(a),this.doc=e,this.iframe=d}this.isIsolated=!0,this.element=a},o.prototype._updateContainer=function(){if(this.iframe){var a=navigator.userAgent;if(a.match(/iPhone/i)||a.match(/iPad/i)){var b=this.iframe.parentNode.offsetWidth;this.doc.body.style.width=b+"px"}var d=c.getPageHeight(this.doc);this.iframe.style.height=d+"px"}},o.prototype._bindSizeClass=function(){var a=this;if(c.addSizeClass(a.host,a.element),!a._binded){a._binded=!0;var b;c.bind(window,"resize",function(){b&&clearTimeout(b),b=setTimeout(function(){c.addSizeClass(a.host,a.element)},250)})}},window.octocard=function(a){return new o(a)};var p;if("object"==typeof OCTOCARD)p=OCTOCARD;else{var q=document.getElementsByTagName("script"),r=q[q.length-1];if(!r)return;p={name:"",modules:"",reposNum:"",reposIgnored:"",orgsNum:"",element:"",api:"",noIsolated:!1,noFooter:!1};for(var s in p)p[s]=r.getAttribute("data-"+s)}p.name&&new o(p)}();