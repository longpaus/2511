/*! License: 84257.LB92o563jk.js.LICENSE.txt */
(self._cf=self._cf||[]).push([[84257],{392014:(e,t,i)=>{"use strict";i.d(t,{uP:()=>r,VF:()=>a,I3:()=>o,nz:()=>d});const n=24;function r(e,t,i){return(t+n)/i*e-n}function a(e,t,i){return(e+n)*i/(t+n)}function o(e,t){return(t+n)*e-n}function d(e,t){return(e+n)/(t+n)}},823236:(e,t,i)=>{"use strict";i.d(t,{vz:()=>c,rS:()=>h,T1:()=>u,bW:()=>p,ZP:()=>f});var n=i(122551),r=i(321534),a=i(412474),o=i.n(a),d=i(404510),l=i(392014),s=i(96664);const c=250,h=200,u=["wrap-left","wrap-right","align-end","align-start"],p=(e,t,i)=>u.indexOf(e)>-1&&i&&t&&t>.5*i;function f({layout:e,width:t,height:i,containerWidth:a=t,isLoading:c=!1,pctWidth:h,className:u,children:f,nodeType:m="mediaSingle",fullWidthMode:g,lineLength:w,hasFallbackContainer:v=!0,handleMediaSingleRef:y}){const x=n.Children.toArray(f);!h&&p(e,t,w)&&(h=50);const b=void 0===t;if(h){const e=Math.ceil((0,l.I3)(h/100,w||a||0));b?t=e-d.D$:void 0!==t&&(i=i/t*e,t=e)}else b&&(t=d.In-d.D$);let W,C;if(b)W=i;else if(void 0!==t){C=`${(i/t*100).toFixed(3)}%`,"embedCard"===m&&(C=`calc(${C} + 32px)`)}const[$,S]=x;return(0,r.tZ)("div",{ref:y,css:(0,s.b3)({width:t,layout:e,containerWidth:a,pctWidth:h,fullWidthMode:g}),"data-layout":e,"data-width":h,"data-node-type":m,className:o()("rich-media-item mediaSingleView-content-wrap",`image-${e}`,u,{"is-loading":c,"rich-media-wrapped":"wrap-left"===e||"wrap-right"===e})},(0,r.tZ)(s.zB,{hasFallbackContainer:v,height:W,paddingBottom:C},$),S)}},96664:(e,t,i)=>{"use strict";i.d(t,{b3:()=>l,zB:()=>c});var n=i(415911),r=(i(122551),i(321534)),a=i(404510),o=i(160752);function d(e,t,i=0,n,r){switch(e){case"align-start":case"align-end":case"wrap-right":case"wrap-left":return t>i/2?"calc(50% - 12px)":`${t}px`;case"wide":return(0,o.HV)(i);case"full-width":return(0,o.rW)(e,i);default:return r?`${t}px`:n?function(e){return e>a.zJ?"100%":`${e}px`}(t):function(e){return e>a.Vt?"100%":`${e}px`}(t)}}const l=({containerWidth:e=0,fullWidthMode:t,isResized:i,layout:n,pctWidth:a,width:l})=>r.iv`
  /* For nested rich media items, set max-width to 100% */
  tr &,
  [data-layout-column] &,
  [data-node-type='expand'] & {
    max-width: 100%;
  }

  width: ${a?function(e,t,i=0){switch(e){case"wide":return(0,o.HV)(i);case"full-width":return(0,o.rW)(e,i);default:return`${t}px`}}(n,l||0,e):d(n,l||0,e,t,i)};
  max-width: ${function(e,t){switch(e){case"wide":return(0,o.HV)(t);case"full-width":return(0,o.rW)(e,t);default:return"100%"}}(n,e)};
  float: ${function(e){switch(e){case"wrap-right":return"right";case"wrap-left":return"left";default:return"none"}}(n)};
  margin: ${function(e){switch(e){case"wrap-right":return"12px auto 12px 12px";case"wrap-left":return"12px 12px 12px auto";default:return"24px auto"}}(n)};
  ${function(e){switch(e){case"align-end":return"margin-right: 0";case"align-start":return"margin-left: 0";default:return""}}(n)};

  &:not(.is-resizing) {
    transition: width 100ms ease-in;
  }
`,s=e=>r.iv`
  position: relative;

  ${(({hasFallbackContainer:e,paddingBottom:t,height:i})=>r.iv`
  ${e?`\n  &::after {\n    content: '';\n    display: block;\n    ${i?`height: ${i}px;`:t?`padding-bottom: ${t};`:""}\n\n    /* Fixes extra padding problem in Firefox */\n    font-size: 0;\n    line-height: 0;\n  }\n  `:""}
`)(e)}

  /* Editor */
  & > figure {
    position: ${e.hasFallbackContainer?"absolute":"relative"};
    height: 100%;
    width: 100%;
  }

  & > div {
    position: ${e.hasFallbackContainer?"absolute":"relative"};
    height: 100%;
    width: 100%;
  }

  &[data-node-type='embedCard'] > div {
    width: 100%;
  }

  /* Renderer */
  [data-node-type='media'] {
    position: static !important;

    > div {
      position: absolute;
      height: 100%;
    }
  }
`,c=e=>{let{children:t}=e,i=(0,n.Z)(e,["children"]);return(0,r.tZ)("div",{css:s(i)},t)};c.displayName="WrapperMediaSingle"},412474:(e,t)=>{var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&e.push(o)}}else if("object"===a)if(i.toString===Object.prototype.toString)for(var d in i)n.call(i,d)&&i[d]&&e.push(d);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},316864:(e,t,i)=>{"use strict";i.d(t,{WH:()=>d,q8:()=>o,OC:()=>s,jj:()=>c});var n=i(122551);const r=["confluence","jira"],a={confluence:{newCardExperience:"confluence.frontend.media.cards.new.experience",captions:"confluence.frontend.fabric.editor.media.captions",mediaInline:"confluence.frontend.fabric.editor.media.inline",folderUploads:"confluence.frontend.media.picker.folder.uploads",observedWidth:"",timestampOnVideo:"confluence.frontend.media.timestamp.on.video",mediaUploadApiV2:"confluence.enable.media.upload.api.v2",memoryCacheLogging:"confluence-frontend-media-card-memory-cache-logging",fetchFileStateAfterUpload:"confluence-frontend-media-client-fetch-file-state-after-upload"},jira:{newCardExperience:"issue.details.media-cards-new-experience",captions:"issue.details.editor.media.captions",mediaInline:"",folderUploads:"issue.details.media-picker-folder-upload",observedWidth:"",timestampOnVideo:"issue.details.media-cards-timestamp-on-video",mediaUploadApiV2:"issue.details.enable-media-upload-api-version-2",memoryCacheLogging:"jira-frontend-media-card-memory-cache-logging",fetchFileStateAfterUpload:"jira-frontend-media-client-fetch-file-state-after-upload"}},o=e=>Object.entries(e).filter((([e,t])=>!!t)).map((([e])=>e)),d=e=>{const t=o(e),i=[];return t.forEach((e=>r.forEach((t=>i.push(a[t][e]))))),i.filter((e=>""!==e))},l={newCardExperience:!1,captions:!1,mediaInline:!1,folderUploads:!1,observedWidth:!1,timestampOnVideo:!1,mediaUploadApiV2:!0,memoryCacheLogging:!1,fetchFileStateAfterUpload:!1};function s(e,t){const i=(e=>{try{return"undefined"!=typeof window&&window.localStorage?window.localStorage.getItem(e):null}catch(t){}return null})(e);if(null!==i)try{return JSON.parse(i)}catch(n){}return t&&e in t?t[e]:l[e]}const c=e=>{const t=(0,n.useRef)();return((e,t)=>{if(!e&&!t)return!0;if(!e||!t)return!1;const i={newCardExperience:e.newCardExperience===t.newCardExperience,captions:e.captions===t.captions,mediaInline:e.mediaInline===t.mediaInline,folderUploads:e.folderUploads===t.folderUploads,observedWidth:e.observedWidth===t.observedWidth,timestampOnVideo:e.timestampOnVideo===t.timestampOnVideo,mediaUploadApiV2:e.mediaUploadApiV2===t.mediaUploadApiV2,memoryCacheLogging:e.memoryCacheLogging===t.memoryCacheLogging,fetchFileStateAfterUpload:e.fetchFileStateAfterUpload===t.fetchFileStateAfterUpload};return Object.values(i).every((e=>e))})(e,t.current)||(t.current=e),t.current}},683095:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>x,getMediaContainerWidth:()=>y});var n=i(122551),r=i(321534),a=i(603494),o=i(316864),d=i(823236),l=i(152933),s=i(404510),c=i(523326);let h;const u=new WeakMap,p=r.iv`
  transition: all 0.1s linear;
`,f=r.iv`
  margin-left: 50%;
  transform: translateX(-50%);
`,m=250,g=200,w=e=>{if(!e)return!1;const{nodeType:t,type:i}=e.props||{};return"media"===t||["external","file","link"].indexOf(i)>=0},v=e=>{const[t]=n.Children.toArray(e);return t&&!w(t)&&t.props.children?v(t.props.children):t},y=(e,t)=>e||"full-width"===t||"wide"===t?e:s.re,x=(0,a.ZP)((e=>{var t;const{rendererAppearance:i,featureFlags:a,isInsideOfBlockNode:x,layout:b,children:W,width:C}=e,$=(0,o.OC)("captions",a),[S,A]=n.useState({width:0,height:0}),F=n.useRef(null),O=n.useCallback((({width:e,height:t})=>{A({width:e,height:t})}),[]),U=(0,o.OC)("observedWidth",a),{width:V}=((e,t)=>{const[i,r]=n.useState({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0});return n.useEffect((()=>{if(e&&t)return h||(h=new ResizeObserver((e=>{for(let t of e)u.has(t.target)&&u.get(t.target)(t.contentRect)}))),u.set(e,(e=>{const{x:t,y:i,width:n,height:a,top:o,left:d,bottom:l,right:s}=e;return r({x:t,y:i,width:n,height:a,top:o,left:d,bottom:l,right:s})})),h.observe(e),()=>{h.unobserve(e),u.delete(e)}}),[e,t]),i})(null===(t=F.current)||void 0===t?void 0:t.parentElement,U);let k;const[E,z]=n.Children.toArray(W);if(w(E))k=E;else{const e=v(E.props.children);if(!e)return E;k=e}let{width:I=m,height:L=g,type:M}=k.props;if("external"===M){const{width:e,height:t}=S;null===I&&(I=e||m),null===L&&(L=t||g)}null===I&&(I=m,L=g);const j="full-page"===i?2*c.zA:0,Z="full-width"===i,R={height:L,width:I},D=(e,t)=>{const{cardDimensions:o,lineLength:l,containerWidth:c}=((e,t)=>{const n=y(e,b),r={width:`${n}px`,height:L/I*n+"px"};let a=n;x||"comment"===i||(a=n-j>=s.re?s.re:n-j);const o=Math.min(s.zJ,n-j);return{cardDimensions:r,lineLength:Z?o:a,containerWidth:n}})(e),h=n.cloneElement(k,{resizeMode:"stretchy-fit",cardDimensions:o,originalDimensions:R,onExternalImageLoaded:O,disableOverlay:!0,featureFlags:a}),u="full-width"===b||"wide"===b?[p,f]:[p];return(0,r.tZ)(d.ZP,{css:u,handleMediaSingleRef:F,layout:b,width:I,height:L,lineLength:x?c:l,containerWidth:c,pctWidth:C,fullWidthMode:Z},(0,r.tZ)(n.Fragment,null,h),$&&z)};return U?D(V||document.body.offsetWidth):(0,r.tZ)(l.mP,null,(({width:e,breakpoint:t})=>D(e)))}))}}]);
//# sourceMappingURL=84257.LB92o563jk.js.map