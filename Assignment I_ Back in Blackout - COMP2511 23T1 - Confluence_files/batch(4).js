WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-spin-spin', location = 'node_modules/@atlassian/aui/src/js-vendor/spin/spin.js' */
("undefined"===typeof window?global:window).__2ca363a3a9d385312bdd2587bb2e77c6=function(){var m={exports:{}},r=m.exports,x={module:m,exports:r},s;s=function(p,e,h){var j=("undefined"===typeof window?global:window).define,f,k,h=[h,e,p].filter(function(e){return"function"===typeof e})[0],e=[e,p,[]].filter(Array.isArray)[0];f=h.apply(null,e.map(function(e){return x[e]}));k=typeof f;"function"===typeof j&&j("string"===typeof p?p:"__2ca363a3a9d385312bdd2587bb2e77c6",e,h);"string"===k?f=String(f):"number"===
k?f=Number(f):"boolean"===k&&(f=Boolean(f));void 0!==f&&(r=m.exports=f)};s.amd=!0;var w=function(){function p(b,a){var c=document.createElement(b||"div"),d;for(d in a)c[d]=a[d];return c}function e(b){for(var a=1,c=arguments.length;a<c;a++)b.appendChild(arguments[a]);return b}function h(b,a){var c=b.style,d,e,a=a.charAt(0).toUpperCase()+a.slice(1);for(e=0;e<m.length;e++)if(d=m[e]+a,void 0!==c[d])return d;if(void 0!==c[a])return a}function j(b,a){for(var c in a)b.style[h(b,c)||c]=a[c];return b}function f(b){for(var a=
1;a<arguments.length;a++){var c=arguments[a],d;for(d in c)void 0===b[d]&&(b[d]=c[d])}return b}function k(b){for(var a={x:b.offsetLeft,y:b.offsetTop};b=b.offsetParent;)a.x+=b.offsetLeft+b.clientLeft,a.y+=b.offsetTop+b.clientTop;return a}function l(b){if("undefined"==typeof this)return new l(b);this.opts=f(b||{},l.defaults,r)}var m=["webkit","Moz","ms","O"],s={},t,u,n=p("style",{type:"text/css"});e(document.getElementsByTagName("head")[0],n);u=n.sheet||n.styleSheet;var r={lines:12,length:7,width:5,
radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:0.25,fps:20,zIndex:2E9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={};f(l.prototype,{spin:function(b){this.stop();var a=this,c=a.opts,d=a.el=j(p(0,{className:c.className}),{position:c.position,width:0,zIndex:c.zIndex}),e=c.radius+c.length+c.width,i,g;b&&(b.insertBefore(d,b.firstChild||null),g=k(b),i=k(d),j(d,{left:("auto"==c.left?g.x-i.x+(b.offsetWidth>>1):parseInt(c.left,10)+e)+"px",top:("auto"==
c.top?g.y-i.y+(b.offsetHeight>>1):parseInt(c.top,10)+e)+"px"}));d.setAttribute("role","progressbar");a.lines(d,a.opts);if(!t){var f=0,m=(c.lines-1)*(1-c.direction)/2,o,h=c.fps,q=h/c.speed,s=(1-c.opacity)/(q*c.trail/100),l=q/c.lines;(function y(){f++;for(var b=0;b<c.lines;b++){o=Math.max(1-(f+(c.lines-b)*l)%q*s,c.opacity);a.opacity(d,b*c.direction+m,o,c)}a.timeout=a.el&&setTimeout(y,~~(1E3/h))})()}return a},stop:function(){var b=this.el;b&&(clearTimeout(this.timeout),b.parentNode&&b.parentNode.removeChild(b),
this.el=void 0);return this},lines:function(b,a){function c(b,c){return j(p(),{position:"absolute",width:a.length+a.width+"px",height:a.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/a.lines*d+a.rotate)+"deg) translate("+a.radius+"px,0)",borderRadius:(a.corners*a.width>>1)+"px"})}for(var d=0,f=(a.lines-1)*(1-a.direction)/2,i;d<a.lines;d++){i=p();var g=1+~(a.width/2)+"px",h=a.hwaccel?"translate3d(0,0,0)":"",m=a.opacity,o;if(o=t){o=a.opacity;var l=a.trail,q=f+
d*a.direction,k=a.lines,n=["opacity",l,~~(100*o),q,k].join("-"),q=0.01+100*(q/k),k=Math.max(1-(1-o)/l*(100-q),o),r=t.substring(0,t.indexOf("Animation")).toLowerCase(),r=r&&"-"+r+"-"||"";s[n]||(u.insertRule("@"+r+"keyframes "+n+"{0%{opacity:"+k+"}"+q+"%{opacity:"+o+"}"+(q+0.01)+"%{opacity:1}"+(q+l)%100+"%{opacity:"+o+"}100%{opacity:"+k+"}}",u.cssRules.length),s[n]=1);o=n+" "+1/a.speed+"s linear infinite"}i=j(i,{position:"absolute",top:g,transform:h,opacity:m,animation:o});a.shadow&&e(i,j(c("#000",
"0 0 4px #000"),{top:"2px"}));e(b,e(i,c("string"==typeof a.color?a.color:a.color[d%a.color.length],"0 0 1px rgba(0,0,0,.1)")))}return b},opacity:function(b,a,c){a<b.childNodes.length&&(b.childNodes[a].style.opacity=c)}});n=j(p("group"),{behavior:"url(#default#VML)"});if(!h(n,"transform")&&n.adj){var v=function(b,a){return p("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',a)};u.addRule(".spin-vml","behavior:url(#default#VML)");l.prototype.lines=function(b,a){function c(){return j(v("group",
{coordsize:i+" "+i,coordorigin:-f+" "+-f}),{width:i,height:i})}function d(b,d,g){e(h,e(j(c(),{rotation:360/a.lines*b+"deg",left:~~d}),e(j(v("roundrect",{arcsize:a.corners}),{width:f,height:a.width,left:a.radius,top:-a.width>>1,filter:g}),v("fill",{color:"string"==typeof a.color?a.color:a.color[b%a.color.length],opacity:a.opacity}),v("stroke",{opacity:0}))))}var f=a.length+a.width,i=2*f,g=2*-(a.width+a.length)+"px",h=j(c(),{position:"absolute",top:g,left:g});if(a.shadow)for(g=1;g<=a.lines;g++)d(g,
-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(g=1;g<=a.lines;g++)d(g);return e(b,h)};l.prototype.opacity=function(b,a,c,d){b=b.firstChild;d=d.shadow&&d.lines||0;if(b&&a+d<b.childNodes.length&&(b=(b=(b=b.childNodes[a+d])&&b.firstChild)&&b.firstChild))b.opacity=c}}else t=h(n,"animation");return l};"object"==typeof r?m.exports=w():"function"==typeof s&&s("aui/internal/spin",w);this.Spinner=w();return m.exports}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-vendor-jquery-jquery-spin', location = 'node_modules/@atlassian/aui/src/js-vendor/jquery/jquery.spin.js' */
("undefined"===typeof window?global:window).__159845a61d9fd1c14e7a49e1aea603c5=function(){var b=jQuery;b.fn.spin=function(a,c){var f,d;if("string"===typeof a){if(!a in b.fn.spin.presets)throw Error("Preset '"+a+"' isn't defined");f=b.fn.spin.presets[a];d=c||{}}else{if(c)throw Error("Invalid arguments. Accepted arguments:\n$.spin([String preset[, Object options]]),\n$.spin(Object options),\n$.spin(Boolean shouldSpin)");f=b.fn.spin.presets.small;d=b.isPlainObject(a)?a:{}}if(window.Spinner)return this.each(function(){var c=
b(this),e=c.data();e.spinner&&(e.spinner.stop(),delete e.spinner);!1!==a&&(d=b.extend({color:c.css("color")},f,d),e.spinner=(new Spinner(d)).spin(this))});throw"Spinner class not available.";};b.fn.spin.presets={small:{lines:12,length:3,width:2,radius:3,trail:60,speed:1.5},medium:{lines:12,length:5,width:3,radius:8,trail:60,speed:1.5},large:{lines:12,length:8,width:4,radius:10,trail:60,speed:1.5}};b.fn.spinStop=function(){if(window.Spinner)return this.each(function(){var a=b(this).data();a.spinner&&
(a.spinner.stop(),delete a.spinner)});throw"Spinner class not available.";};return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:internal-@atlassian-aui-src-js-aui-spin', location = 'node_modules/@atlassian/aui/src/js/aui/spin.js' */
("undefined"===typeof window?global:window).__ea37472b3b7f8dfd5eedc1a698a3926b=function(){"use strict";__2ca363a3a9d385312bdd2587bb2e77c6;__159845a61d9fd1c14e7a49e1aea603c5;return{}}.call(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = 'templates/status.soy' */
// This file was automatically generated from status.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Template.Util.Issue.Status.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Template == 'undefined') { JIRA.Template = {}; }
if (typeof JIRA.Template.Util == 'undefined') { JIRA.Template.Util = {}; }
if (typeof JIRA.Template.Util.Issue == 'undefined') { JIRA.Template.Util.Issue = {}; }
if (typeof JIRA.Template.Util.Issue.Status == 'undefined') { JIRA.Template.Util.Issue.Status = {}; }


JIRA.Template.Util.Issue.Status.issueStatusResolver = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.issueStatus) ? '<span class="aui-icon aui-icon-small aui-iconfont-help jira-issue-status-render-error" title="' + soy.$$escapeHtml('No issue status information was provided') + '"></span>' : (opt_data.issueStatus.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatus(opt_data) : JIRA.Template.Util.Issue.Status.iconStatus({name: opt_data.issueStatus.name, iconUrl: opt_data.issueStatus.iconUrl, description: opt_data.issueStatus.description, isCompact: opt_data.isCompact}));
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatusResolver.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatusResolver';
}


JIRA.Template.Util.Issue.Status.iconStatus = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml(opt_data.iconUrl) + '" width="16" height="16" alt="' + soy.$$escapeHtml(opt_data.name) + '" title="' + soy.$$escapeHtml(opt_data.name) + ((opt_data.description) ? ' - ' + soy.$$escapeHtml(opt_data.description) : '') + '" class="jira-issue-status-icon">' + ((! opt_data.isCompact) ? ' ' + soy.$$escapeHtml(opt_data.name) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.iconStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.iconStatus';
}


JIRA.Template.Util.Issue.Status.issueStatus = function(opt_data, opt_ignored) {
  return '' + JIRA.Template.Util.Issue.Status.statusLozenge({name: opt_data.issueStatus.name, categoryKey: opt_data.issueStatus.statusCategory.key, colorName: opt_data.issueStatus.statusCategory.colorName, description: opt_data.issueStatus.description, isSubtle: opt_data.isSubtle, isCompact: opt_data.isCompact, maxWidth: opt_data.maxWidth});
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatus';
}


JIRA.Template.Util.Issue.Status.statusLozenge = function(opt_data, opt_ignored) {
  var output = '';
  var maxWidth__soy46 = opt_data.maxWidth ? opt_data.maxWidth : 'medium';
  var tooltipContent__soy47 = '<span class="jira-issue-status-tooltip-title">' + soy.$$escapeHtml(opt_data.name) + '</span>' + ((opt_data.description) ? '<br><span class="jira-issue-status-tooltip-desc">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '');
  output += '<span class=" jira-issue-status-lozenge aui-lozenge ' + JIRA.Template.Util.Issue.Status.statusLozengeClasses(opt_data) + ((opt_data.isSubtle && ! opt_data.isCompact) ? ' aui-lozenge-subtle' : '') + ((opt_data.isCompact) ? ' jira-issue-status-lozenge-compact' : '') + ' jira-issue-status-lozenge-max-width-' + soy.$$escapeHtml(maxWidth__soy46) + '" data-tooltip="' + soy.$$escapeHtml(tooltipContent__soy47) + '">' + soy.$$escapeHtml(opt_data.name) + '</span>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozenge.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozenge';
}


JIRA.Template.Util.Issue.Status.statusLozengeClasses = function(opt_data, opt_ignored) {
  return 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.colorName ? opt_data.colorName : 'medium-gray') + ' ' + ((opt_data.categoryKey) ? 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.categoryKey) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozengeClasses.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozengeClasses';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = '/js/issue-status-plugin.js' */
AJS.$(function(){if(AJS.$.fn.tooltip){AJS.$(".jira-issue-status-lozenge[data-tooltip]").tooltip({aria:true,gravity:AJS.$.fn.tipsy.autoWE,delayIn:100,html:true,live:true,title:"data-tooltip",className:"jira-issue-status-tooltip"})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = 'soy/jira-metadata.soy' */
// This file was automatically generated from jira-metadata.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Metadata.JIRA.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Metadata == 'undefined') { Confluence.Templates.Metadata = {}; }
if (typeof Confluence.Templates.Metadata.JIRA == 'undefined') { Confluence.Templates.Metadata.JIRA = {}; }


Confluence.Templates.Metadata.JIRA.metadata = function(opt_data, opt_ignored) {
  var output = '<div id="jira-metadata-dialog" class="rendered-content"><h2 class="title">' + soy.$$escapeHtml('Jira links') + '</h2><div class="items-section">';
  var groupList6 = opt_data.groups;
  var groupListLen6 = groupList6.length;
  for (var groupIndex6 = 0; groupIndex6 < groupListLen6; groupIndex6++) {
    var groupData6 = groupList6[groupIndex6];
    if (groupData6.items.length) {
      switch (groupData6.type) {
        case 'ISSUES':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Issues', type: groupData6.type, links: groupData6.links});
          break;
        case 'SPRINTS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Sprints', type: groupData6.type, links: groupData6.links});
          break;
        case 'VERSIONS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Versions', type: groupData6.type, links: groupData6.links});
          break;
        case 'EPICS':
          output += Confluence.Templates.Metadata.JIRA.renderGroup({items: groupData6.items, headingText: 'Epics', type: groupData6.type, links: groupData6.links});
          break;
      }
    }
  }
  output += '</div>' + Confluence.Templates.Metadata.JIRA.renderAuthPrompts({appLinks: opt_data.unauthorisedAppLinks}) + Confluence.Templates.Metadata.JIRA.renderJiraErrors(opt_data) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.metadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.metadata';
}


Confluence.Templates.Metadata.JIRA.featureDiscovery = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-feature-discovery"><h2>' + soy.$$escapeHtml('View related Jira items here') + '</h2><p>' + soy.$$escapeHtml('Now you can see which epics, sprints, versions and issues relate to this page.') + '</p><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner">' + aui.buttons.button({text: 'Show me', extraClasses: 'showme'}) + aui.buttons.button({text: 'Don\x27t show again', type: 'link', extraClasses: 'close'}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.featureDiscovery.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.featureDiscovery';
}


Confluence.Templates.Metadata.JIRA.nometadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Jira links cannot be displayed. Either you do not have correct Jira permissions or the links have been removed.') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.nometadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.nometadata';
}


Confluence.Templates.Metadata.JIRA.renderAuthPrompts = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.appLinks.length) {
    var param66 = '';
    if (opt_data.appLinks.length == 1) {
      var appLink__soy69 = opt_data.appLinks[0];
      param66 += '<p>' + soy.$$filterNoAutoescape(AJS.format('{0}Login \x26amp; Approve{1} to retrieve data from {2}','<a class="jira-metadata-auth-link" href="#" data-href="' + appLink__soy69.authorisationUrl + '">','</a>',appLink__soy69.htmlSafeName)) + '</p>';
    } else {
      param66 += '<p>' + soy.$$escapeHtml('Authenticate to retrieve data from the following instances:') + '</p>';
      var appLinkList78 = opt_data.appLinks;
      var appLinkListLen78 = appLinkList78.length;
      for (var appLinkIndex78 = 0; appLinkIndex78 < appLinkListLen78; appLinkIndex78++) {
        var appLinkData78 = appLinkList78[appLinkIndex78];
        param66 += '<div><a class="jira-metadata-auth-link" href="#" data-href="' + soy.$$escapeHtml(appLinkData78.authorisationUrl) + '">' + soy.$$escapeHtml(appLinkData78.name) + '</a></div>';
      }
    }
    output += aui.message.hint({content: param66});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderAuthPrompts.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderAuthPrompts';
}


Confluence.Templates.Metadata.JIRA.renderGroup = function(opt_data, opt_ignored) {
  var output = '<div class="jira-metadata-section ' + soy.$$escapeHtml(opt_data.type) + '-section"><div class="section-label"><span class="icon"></span><span>' + soy.$$escapeHtml(opt_data.headingText) + '</span></div><ul class="jira-metadata-list jira-' + soy.$$escapeHtml(opt_data.type) + '-list">';
  var itemList94 = opt_data.items;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output += '<li class="jira-metadata-item"><span class="item-label"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(itemData94.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '" title="' + soy.$$escapeHtml(itemData94.name) + '">' + soy.$$escapeHtml(itemData94.name) + '</a>' + ((itemData94.status) ? '&nbsp;' + ((itemData94.status.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatusResolver({issueStatus: itemData94.status, isSubtle: true}) : '<span class="item-status">(' + soy.$$escapeHtml(itemData94.status.name) + ')</span>') : '') + '</span>' + ((itemData94.description != '') ? '<span class="item-subtext">' + soy.$$escapeHtml(itemData94.description) + '</span>' : '') + '</li>';
  }
  output += '</ul><ul class="jira-metadata-list ' + soy.$$escapeHtml(opt_data.type) + '-more-link">';
  var linkList130 = opt_data.links;
  var linkListLen130 = linkList130.length;
  for (var linkIndex130 = 0; linkIndex130 < linkListLen130; linkIndex130++) {
    var linkData130 = linkList130[linkIndex130];
    output += '<li class="jira-metadata-item"><a href="' + soy.$$escapeHtml("/wiki") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(linkData130.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '&more">' + soy.$$escapeHtml(AJS.format('View {0} more in {1}',linkData130.numItems,linkData130.appName)) + '</a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderGroup.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderGroup';
}


Confluence.Templates.Metadata.JIRA.loadingMetadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog"><h2 class="title">' + soy.$$escapeHtml('Jira links') + '</h2><div class="spinner-container"><div class="spinner"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.loadingMetadata.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.loadingMetadata';
}


Confluence.Templates.Metadata.JIRA.renderJiraErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.errors.length == 1) {
    var error__soy150 = opt_data.errors[0];
    output += aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata.') + ' ' + soy.$$escapeHtml(error__soy150.errorMessage) + '</p>'});
  } else if (opt_data.errors.length > 1) {
    var param159 = '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata. The following errors occurred:') + '</p><ul>';
    var errorList163 = opt_data.errors;
    var errorListLen163 = errorList163.length;
    for (var errorIndex163 = 0; errorIndex163 < errorListLen163; errorIndex163++) {
      var errorData163 = errorList163[errorIndex163];
      param159 += '<li>' + soy.$$escapeHtml(errorData163.errorMessage) + '</li>';
    }
    param159 += '</ul>';
    output += aui.message.warning({content: param159});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.renderJiraErrors.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.renderJiraErrors';
}


Confluence.Templates.Metadata.JIRA.unknownError = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata. Could not connect to Confluence') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.JIRA.unknownError.soyTemplateName = 'Confluence.Templates.Metadata.JIRA.unknownError';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = '/js/jira-metadata.js' */
define('confluence/jira-metadata', [
    'jquery',
    'ajs',
    'confluence/legacy',
    'skate'
], function(
    $,
    AJS,
    Confluence,
    skate
) {
    'use strict';

    var pluginKey = "com.atlassian.confluence.plugins.confluence-jira-metadata";
    var dataLoaded = false; // only load inline dialog contents once
    var dialog;
    var dialogContents;
    var dialogId = "jira-metadata-dialog";
    var discoveryDialog;
    var discoveryDialogId = "jira-metadata-discovery";
    var featureDiscoveryId = "linked-issues-dropdown";

    function enableWebItem($webItem, count, incomplete) {
        updateWebItemText($webItem, count, incomplete);
        $webItem.removeClass("hidden");

        if(shouldBindInlineDialog($webItem)) {
            dialog = AJS.InlineDialog($webItem, dialogId,
                    function(content, trigger, showPopup) {
                        if(!dialogContents || !dataLoaded) {
                            dialogContents = content;
                            showPopup();
                            updateInlineDialogContents($webItem);
                        } else {
                            showPopup();
                        }
                        return false;
                    }, { hideDelay: null });

            // Workaround to dismiss the inline dialog until https://ecosystem.atlassian.net/browse/AUI-1175 is done
            $webItem.click(function() {
                if($('#' + dialogId).is(':visible')) {
                    dialog.hide();
                }
            });
        }

        //Pop feature discovery if appropriate
        if($webItem && shouldShowFeatureDiscovery()) {
            showFeatureDiscoveryDialog($webItem);
            // Mark feature as discovered if user clicks the JIRA link button: https://jira.atlassian.com/browse/CONF-32814
            $webItem.one("click", function() {
                Confluence.FeatureDiscovery.forPlugin(pluginKey).markDiscovered(featureDiscoveryId);
            });
        }
    }

    function updateWebItemText($webItem, count, incomplete) {
        if (!incomplete) {
            var text = (count === 1)
                ? "1 Jira link"
                : AJS.format("{0} Jira links", count);
            $webItem.children('span').text(text);
        }
    }

    function shouldBindInlineDialog($webItem) {
        return !$webItem.attr('href'); // web-item might be a direct link to a single JIRA entity
    }

    // Shows the feature discovery inline dialog immediately.
    function showFeatureDiscoveryDialog($webItem) {
        discoveryDialog = AJS.InlineDialog($webItem, discoveryDialogId, function(content, trigger, showPopup) {
            content.html(Confluence.Templates.Metadata.JIRA.featureDiscovery());
            content.find(".showme").on("click", function() {
                Confluence.FeatureDiscovery.forPlugin(pluginKey).markDiscovered(featureDiscoveryId);
                discoveryDialog.hide();
                dialog.show();
            });
            content.find(".close").on("click", function() {
                Confluence.FeatureDiscovery.forPlugin(pluginKey).markDiscovered(featureDiscoveryId);
                discoveryDialog.hide();
            });
            showPopup();
        }, {
            noBind: true,
            closeOthers: false,
            hideDelay: null
        });
        discoveryDialog.show();
        Confluence.FeatureDiscovery.forPlugin(pluginKey).addDiscoveryView(featureDiscoveryId);
    }


    function shouldShowFeatureDiscovery() {
        // TODO: can get rid of this entirely once BP plugin is using feature discovery API also.
        return !AJS.Meta.get('blueprint-index-popup-key') && Confluence.FeatureDiscovery &&
                Confluence.FeatureDiscovery.forPlugin(pluginKey).shouldShow(featureDiscoveryId);
    }

    function updateInlineDialogContents($webItem) {
        lockInlineDialogHeight(); // preserve existing dialog height when we replace the contents for the 'loading' state
        dialogContents.html(Confluence.Templates.Metadata.JIRA.loadingMetadata());
        dialogContents.find(".spinner").spin("medium");

        var pageId = $webItem.attr('data-page-id') || AJS.Meta.get('page-id');

        $.ajax({
            url: AJS.contextPath() + "/rest/jira-metadata/1.0/metadata?pageId=" + pageId,
            type: "GET",
            dataType: "json",
            contentType: "application/json",
            error:function (xhr) {
                unlockInlineDialogHeight();
                dialogContents.html(Confluence.Templates.Metadata.JIRA.unknownError());
            },
            success: function (response) {
                unlockInlineDialogHeight();
                dataLoaded = true;

                updateWebItemText($webItem, response.count, false);

                var content;
                if(response.count === 0 && !(response.unauthorisedAppLinks && response.unauthorisedAppLinks.length > 0) && response.errors.length == 0) {
                    content = Confluence.Templates.Metadata.JIRA.nometadata();
                }
                else {
                    content = Confluence.Templates.Metadata.JIRA.metadata(response);
                }

                dialogContents.html(content);

                // We call this inside a setTimeout to force a re-layout, which makes the CSS animation trigger.
                setTimeout(function() {
                    dialogContents.find("#" + dialogId).addClass("show");
                }, 0);

                bindApplinkAuthLinks($webItem);
            },
            complete: function() {
                $('#' + dialogId + ' .icon-close').click(function(e) {
                    e.stopPropagation();
                    $(this).closest('.closable').remove();
                });
            }
        });
    }

    function bindApplinkAuthLinks($webItem) {
        $('.jira-metadata-auth-link').click(function(e) {
            e.preventDefault();
            window.AppLinks.authenticateRemoteCredentials(
                $(this).data('href'),
                function() {
                    updateInlineDialogContents($webItem);
                },
                function() {}
            );
        });
    }

    function lockInlineDialogHeight() {
        if (dialogContents && dialogContents.height() > 0)
            dialogContents.css('height', dialogContents.height());
    }

    function unlockInlineDialogHeight() {
        dialogContents && dialogContents.css('height', '');
    }

    return {
        init: function() {
            skate('content-metadata-jira', {
                type: skate.types.CLASS,

                attached: function(el) {
                    var $webItem = $(el);

                    var initialCount = $webItem.attr('data-jira-metadata-count') || AJS.Meta.get('jira-metadata-count');
                    initialCount = parseInt(initialCount, 10);
                    var countIncomplete = $webItem.attr('data-count-incomplete') || AJS.Meta.get('jira-metadata-count-incomplete');
                    var pageId = $webItem.attr('data-page-id') || AJS.Meta.get('page-id');

                    if(initialCount > 0) {
                        enableWebItem($webItem, initialCount, countIncomplete);
                    } else if (initialCount === -1) {
                        var url = AJS.contextPath() + '/rest/jira-metadata/1.0/metadata/aggregate?pageId=' + pageId;

                        $.ajax({
                            url: url,
                            type: 'GET',
                            dataType: 'json',
                            contentType: 'application/json',
                            cache: false,
                            success: function (response) {
                                if(response.count > 0) {
                                    enableWebItem($webItem, response.count, response.incomplete);
                                }
                            }
                        });
                    }
                }
            });
        }
    };
});

require('confluence/module-exporter').safeRequire('confluence/jira-metadata', function(ConfluenceJiraMetadata) {
    'use strict';
    ConfluenceJiraMetadata.init();
});

}catch(e){WRMCB(e)};