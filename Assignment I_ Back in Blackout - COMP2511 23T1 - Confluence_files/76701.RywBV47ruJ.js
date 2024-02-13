"use strict";(self._cf=self._cf||[]).push([[76701],{288809:(e,t,n)=>{n.d(t,{u:()=>o});var r=n(755181);function o(e,t,n){let o=n;return(0,r.f)(e,{any:e=>{o=t(o,e)}}),o}},900532:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(415911),o=n(953307),a=n(122551),i=n(321534),s=n(529845),l=n(354019),d=n(924037),c=n(530289);const u=(0,a.memo)((0,a.forwardRef)((function(e,t){let{testId:n}=e,l=(0,r.Z)(e,["testId"]);const d=(0,s.m)(),u=(0,a.useMemo)((()=>(0,i.iv)((0,c.HX)(d))),[d]),{children:p,codeBidiWarnings:m=!0,codeBidiWarningLabel:f,codeBidiWarningTooltipEnabled:g=!0}=l,E=(0,r.Z)(l,["children","codeBidiWarnings","codeBidiWarningLabel","codeBidiWarningTooltipEnabled"]),b=m?(0,i.tZ)(h,{codeBidiWarningLabel:f,codeBidiWarningTooltipEnabled:g},p):p;return(0,i.tZ)("code",(0,o.Z)({ref:t,"data-testid":n,css:u},E),b)})));function h({children:e,codeBidiWarningLabel:t,codeBidiWarningTooltipEnabled:n}){const r=a.Children.map(e,(e=>{if("string"==typeof e){return(0,d.Z)(e,(({bidiCharacter:e,index:r})=>(0,i.tZ)(l.Z,{bidiCharacter:e,key:r,label:t,tooltipEnabled:n})))}if(e.type&&e.props.children){return a.cloneElement(e,{children:(0,i.tZ)(h,{codeBidiWarningLabel:t,codeBidiWarningTooltipEnabled:n},e.props.children)})}return e}));return(0,i.tZ)(a.Fragment,null,r)}u.displayName="Code";const p=u},245028:(e,t,n)=>{n.d(t,{K:()=>a,u:()=>s});var r=n(321534);const o="margin-top: 0 !important;",a=r.iv`
  & + * {
    ${o}
  }
`,i=["p","h1","h2","h3","h4","h5","h6"].map((e=>`+ .fabric-editor-block-mark > ${e}`)).join(","),s=r.iv`
  ${i} {
    ${o}
  }
`},259619:(e,t,n)=>{n.d(t,{_:()=>r});const r="media-viewer-popup"},630672:(e,t,n)=>{let r,o,a;n.d(t,{iw:()=>r,IK:()=>o}),function(e){e.NATIVE="mobileNative",e.HYBRID="mobileHybrid",e.WEB="web"}(r||(r={})),function(e){e.RENDERER="renderer",e.EDITOR="editor"}(o||(o={})),function(e){e.COMPONENT="component",e.CONSUMER="consumer",e.ORPHANED="orphaned"}(a||(a={}))},628347:(e,t,n)=>{n.d(t,{y:()=>o});const r="ak-renderer-",o={DOCUMENT:`${r}document`,EXTENSION:`${r}extension`,EXTENSION_CENTER_ALIGN:`${r}extension-center-align`,EXTENSION_OVERFLOW_CONTAINER:`${r}extension-overflow-container`,NUMBER_COLUMN:`${r}table-number-column`,SORTABLE_COLUMN_WRAPPER:`${r}tableHeader-sortable-column__wrapper`,SORTABLE_COLUMN:`${r}tableHeader-sortable-column`,SORTABLE_COLUMN_ICON_WRAPPER:`${r}tableHeader-sorting-icon__wrapper`,SORTABLE_COLUMN_ICON:`${r}tableHeader-sorting-icon`,SORTABLE_COLUMN_NO_ORDER:`${r}tableHeader-sorting-icon__no-order`}},225928:(e,t,n)=>{n.d(t,{RH:()=>o,Jj:()=>a,eV:()=>i});var r=n(464984);const o=(0,r.defineMessages)({copyHeadingLinkToClipboard:{id:"fabric.editor.headingLink.copyAnchorLink",defaultMessage:"Copy link to heading"},copiedHeadingLinkToClipboard:{id:"fabric.editor.headingLink.copied",defaultMessage:"Copied!"},failedToCopyHeadingLink:{id:"fabric.editor.headingLink.failedToCopy",defaultMessage:"Copy failed"},copyAriaLabel:{id:"fabric.editor.headingLink.copyAriaLabel",defaultMessage:"Copy"}}),a=(0,r.defineMessages)({noneSortingLabel:{id:"fabric.editor.headingLink.noneSortingLabel",defaultMessage:"none"},ascSortingLabel:{id:"fabric.editor.headingLink.ascSortingLabel",defaultMessage:"ascending"},descSortingLabel:{id:"fabric.editor.headingLink.descSortingLabel",defaultMessage:"descending"}}),i=(0,r.defineMessages)({noOrderLabel:{id:"fabric.editor.headingLink.noOrderLabel",defaultMessage:"Sort column A to Z"},ascOrderLabel:{id:"fabric.editor.headingLink.ascOrderLabel",defaultMessage:"Sort column Z to A"},descOrderLabel:{id:"fabric.editor.headingLink.descOrderLabel",defaultMessage:"Clear sorting"},invalidLabel:{id:"fabric.editor.headingLink.invalidLabel",defaultMessage:"⚠️  You can't sort a table with merged cells"}})},797706:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(122551),o=n(524798),a=n(354019),i=n(653197),s=n(924037);const l=({enableWarningTooltip:e=!0})=>{const t=(0,o.Z)().formatMessage(i.i.label);return{renderBidiWarnings:n=>(0,s.Z)(n,(({bidiCharacter:n,index:o})=>r.createElement(a.Z,{bidiCharacter:n,key:o,label:t,tooltipEnabled:e}))),warningLabel:t}}},435390:(e,t,n)=>{n.d(t,{AF:()=>h,ZP:()=>p});var r=n(122551),o=n(321534),a=n(843993),i=n(404510),s=n(131934),l=n(797706),d=n(628347);const c=o.iv`
  .${s.zq.CODEBLOCK_CONTAINER} {
    cursor: text;
  }
`,u={CONTAINER:"light-weight-code-block"},h=()=>o.iv`
    .${d.y.DOCUMENT}
      > .${u.CONTAINER}
      .${s.zq.CODEBLOCK_CONTAINER} {
      margin-top: ${i.zH};
    }
  `,p=(0,r.forwardRef)((({text:e,codeBidiWarningTooltipEnabled:t=!0,className:n},i)=>{const d=(0,a.u)(),h=(0,r.useMemo)((()=>(null!=e?e:"").split("\n")),[e]),{renderBidiWarnings:p}=(0,l.c)({enableWarningTooltip:t}),m=[u.CONTAINER,n].join(" ");return(0,o.tZ)("div",{className:m,ref:i,css:[(0,s.Hk)(d),c]},(0,o.tZ)("div",{className:s.zq.CODEBLOCK_CONTAINER},(0,o.tZ)("div",{className:s.zq.CODEBLOCK_CONTENT_WRAPPER},(0,o.tZ)("div",{className:s.zq.CODEBLOCK_LINE_NUMBER_GUTTER},h.map(((e,t)=>(0,o.tZ)("span",{key:t})))),(0,o.tZ)("div",{className:s.zq.CODEBLOCK_CONTENT},(0,o.tZ)("code",null,p(e))))))}))},780966:(e,t,n)=>{n.d(t,{n:()=>p,Z:()=>E});var r=n(415911),o=n(29298),a=n(953307),i=n(122551),s=n(321534),l=n(131436),d=n(274479),c=n(112261),u=n(603494),h=n(225928);const p="heading-anchor-wrapper",m=i.forwardRef(((e,t)=>{const{children:n}=e,o=(0,r.Z)(e,["children"]);return(0,s.tZ)("span",(0,a.Z)({},o,{className:p,ref:t}),n)})),f=s.iv`
  display: inline;
  outline: none;
  background-color: transparent;
  border: none;
  color: ${`var(--ds-icon, ${l.Mx})`};
  cursor: pointer;
  right: 0;
`;class g extends i.PureComponent{constructor(...e){super(...e),(0,o.Z)(this,"state",{tooltipMessage:"",isClicked:!1}),(0,o.Z)(this,"setTooltipState",((e,t=!1)=>{this.setState({tooltipMessage:this.props.intl.formatMessage(e),isClicked:t})})),(0,o.Z)(this,"getCopyAriaLabel",(()=>{const{copyAriaLabel:e}=h.RH;return this.props.intl.formatMessage(e)})),(0,o.Z)(this,"copyToClipboard",(async e=>{const{copiedHeadingLinkToClipboard:t,failedToCopyHeadingLink:n}=h.RH;e.stopPropagation();try{await this.props.onCopyText(),this.setTooltipState(t,!0)}catch(r){this.setTooltipState(n)}})),(0,o.Z)(this,"resetMessage",(()=>{this.setTooltipState(h.RH.copyHeadingLinkToClipboard)})),(0,o.Z)(this,"renderAnchorButton",(()=>(0,s.tZ)("button",{css:f,onMouseLeave:this.resetMessage,onClick:this.copyToClipboard,"aria-label":this.state.tooltipMessage},(0,s.tZ)(d.default,{label:this.getCopyAriaLabel(),size:this.props.level>3?"small":"medium",primaryColor:this.state.isClicked?`var(--ds-icon-selected, ${l.AX})`:`var(--ds-icon-subtle, ${l.iw})`}))))}componentDidMount(){this.resetMessage()}render(){const{tooltipMessage:e}=this.state;return e?(0,s.tZ)(c.Z,{tag:m,content:e,position:"top",delay:0,key:e},this.renderAnchorButton()):this.renderAnchorButton()}}g.displayName="HeadingAnchor";const E=(0,u.ZP)(g)},390368:(e,t,n)=>{n.d(t,{T:()=>r});const r=e=>new Promise(((t,n)=>{!!navigator.clipboard&&"function"==typeof navigator.clipboard.writeText?navigator.clipboard.writeText(e).then((()=>t()),(e=>n(e))):n("Clipboard API is not supported")}))},211964:(e,t,n)=>{n.d(t,{D:()=>T});var r=n(429185),o=n(295648),a=n(650388),i=n(102903),s=n(408798),l=n(959557),d=n(630672),c=n(755181);let u;!function(e){e.NORMAL="normal",e.DEGRADED="degraded",e.BLOCKING="blocking"}(u||(u={}));const h=10,p=25,m=(e,t)=>{const{unsupportedNodes:n,supportedNodes:r}=(e=>{let t=0,n=0;return(0,c.f)(e,{any:e=>{if(["unsupportedInline","unsupportedBlock","confluenceUnsupportedInline","confluenceUnsupportedBlock"].includes(e.type)){var r;const n=null===(r=e.attrs)||void 0===r?void 0:r.originalValue;return n&&(0,c.f)(n,{any:()=>{t++}}),!1}n++}}),{unsupportedNodes:t,supportedNodes:n}})(e),o=(e=>({degraded:(null==e?void 0:e.degraded)||h,blocking:(null==e?void 0:e.blocking)||p}))(t),a=Math.round(n/(n+r)*100);return{severity:((e,t)=>t.degraded<=e&&e<t.blocking?u.DEGRADED:t.blocking<=e?u.BLOCKING:u.NORMAL)(a,o),percentage:a,counts:{supportedNodes:r,unsupportedNodes:n}}};var f=n(751050);let g={};const E=(e,t,n)=>{var r;const{thresholds:o,samplingRates:a}=t,i=null!==(r=e.appearance)&&void 0!==r?r:"unknown";g[i]||(g[i]=new Set);if(g[i].has(e.rendererId))return;g[i].add(e.rendererId);const s=a&&a[i]||100;var c;1===g[i].size&&(c=()=>((e,t,n)=>{try{const{severity:r,percentage:o,counts:{supportedNodes:a,unsupportedNodes:i}}=m(e.doc,t);n({action:l.om.UNSUPPORTED_CONTENT_LEVELS_TRACKING_SUCCEEDED,actionSubject:l.Wt.RENDERER,attributes:{appearance:(0,f.$L)(e.appearance),platform:d.iw.WEB,unsupportedContentLevelSeverity:r,unsupportedContentLevelPercentage:o,unsupportedNodesCount:i,supportedNodesCount:a},eventType:l.Ze.OPERATIONAL})}catch(r){n({action:l.om.UNSUPPORTED_CONTENT_LEVELS_TRACKING_ERRORED,actionSubject:l.Wt.RENDERER,attributes:{platform:d.iw.WEB,error:r instanceof Error?r.message:String(r)},eventType:l.Ze.OPERATIONAL})}})(e,o,n),"function"==typeof window.requestIdleCallback?window.requestIdleCallback(c):setTimeout(c,0)),g[i].size%s==0&&(g[i]=new Set)};var b=n(560918);const v=!(!window.performance||!performance.now),y=e=>{const t=v?performance.now():Date.now();return{output:e(),time:(v?performance.now():Date.now())-t}},N=(0,r.Z)(((e,t,n,r,o)=>{let s;if(r){const{transformedAdf:n,isTransformed:r}=(0,b.e)(e);r&&o&&o({action:l.om.MEDIA_LINK_TRANSFORMED,actionSubject:l.Wt.RENDERER,eventType:l.Ze.OPERATIONAL}),s=(0,i.gh)(t,n||e,o)}else s=(0,a.l9)(e,t,n);return s?("doc"===s.type&&r&&(Array.isArray(s.content)&&0===s.content.length&&s.content.push({type:"paragraph",content:[]}),s.version||(s.version=1)),s):s}),((e,t)=>{const[n,r,o,a]=e,[i,s,l,d]=t;return C(n,i)&&r===s&&o===l&&a===d})),C=(e,t)=>e===t||("string"==typeof e&&"string"==typeof t?e===t:e.type&&e.toJSON&&t.type&&t.toJSON?JSON.stringify(e.toJSON())===JSON.stringify(t.toJSON()):JSON.stringify(e)===JSON.stringify(t)),w=(0,r.Z)(((e,t)=>e.serializeFragment(t.content)),((e,t)=>{const[n,r]=e,[o,a]=t;return n===o&&C(r,a)})),A=(0,r.Z)(((e,t,n)=>{const r=e.nodeFromJSON(t);try{r.check()}catch(o){n&&n({action:l.om.INVALID_PROSEMIRROR_DOCUMENT,actionSubject:l.Wt.RENDERER,attributes:{platform:d.iw.WEB,errorStack:o instanceof Error?o.message:String(o)},eventType:l.Ze.OPERATIONAL})}return r}),((e,t)=>{const[n,r]=e,[o,a]=t;return n===o&&C(r,a)})),T=(e,t,n=o.R4,r="final",a=!1,i="noid",l,d,c)=>{const u={sanitizeTime:0},{output:h,time:p}=y((()=>N(e,n,r,a,l)));if(u.sanitizeTime=p,!h)return{stat:u,result:null};const{output:m,time:f}=y((()=>A(n,h,l)));u.buildTreeTime=f;const{output:g,time:b}=y((()=>w(t,m)));if(u.serializeTime=b,l&&a&&((0,s.cn)(m,n,l),null!=d&&d.enabled)){E({doc:h,appearance:c,rendererId:i},d,l)}return{result:g,stat:u,pmDoc:m}}},403110:(e,t,n)=>{n.d(t,{q:()=>a,X:()=>i});var r=n(122551);const o=r.createContext({}),a=()=>r.useContext(o),i=o.Provider},976701:(e,t,n)=>{n.d(t,{ZP:()=>Mn});var r=n(991332),o=n(953307),a=n(29298),i=n(122551),s=n(321534),l=n(295648),d=n(288809),c=n(388571),u=n(720265),h=n(956160),p=n(586110),m=n(152933),f=n(905843),g=n(864950),E=n(502094),b=n(808402),v=n(146339),y=n(237137),N=n(751050),C=n(535406),w=n(512494),A=n(404510),T=n(295171),k=n(948492),R=n(197728),O=n.n(R),S=n(415911),x=n(12415);function _(e){if(!e||"boolean"==typeof e)return!1;const{allowNestedHeaderLinks:t}=e;return!!t}function I(e){if(_(e))return e.activeHeadingId}var L=n(959723),Z=n.n(L);var M=n(429185),$=n(26840),P=n(871100),D=n(205455);class W extends i.Component{constructor(...e){super(...e),(0,a.Z)(this,"state",{extensionProvider:null}),(0,a.Z)(this,"mounted",!1),(0,a.Z)(this,"handleProvider",((e,t)=>{t&&t.then((t=>{this.mounted&&this.setState({[e]:t})}))})),(0,a.Z)(this,"getNodeRenderer",(0,M.Z)($.ZY)),(0,a.Z)(this,"renderExtensionNode",(e=>{var t,n;const{extensionHandlers:r,rendererContext:o,extensionType:a,extensionKey:s,parameters:l,content:d,text:c,type:u,localId:h,marks:p}=this.props,m={type:u,extensionKey:s,extensionType:a,parameters:l,content:d||c,localId:h,fragmentLocalId:null==p||null===(t=p.find((e=>"fragment"===e.type.name)))||void 0===t||null===(n=t.attrs)||void 0===n?void 0:n.localId};let f=null;try{if(r&&r[a]){f=(0,D.c)(r[a])(m,o.adDoc)}if(!f&&e){const t=this.getNodeRenderer(e,a,s);f=i.createElement(t,{node:m})}}catch(g){}return this.props.children({result:f})})),(0,a.Z)(this,"setupAndRenderExtensionNode",(e=>{const{extensionProvider:t}=this.state;return!t&&e.extensionProvider&&this.handleProvider("extensionProvider",e.extensionProvider),this.renderExtensionNode(t)}))}UNSAFE_componentWillMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const{providers:e}=this.props;return e?i.createElement(P.S,{providers:["extensionProvider"],providerFactory:e,renderNode:this.setupAndRenderExtensionNode}):this.setupAndRenderExtensionNode({})}}W.displayName="ExtensionRenderer";var H=n(269337),B=n(160752),U=n(628347);const F=(e,t,n={},r)=>{const o=r?"":U.y.EXTENSION_OVERFLOW_CONTAINER,{isTopLevel:a=!0}=n||{},s=a&&["wide","full-width"].includes(t)?U.y.EXTENSION_CENTER_ALIGN:"";return i.createElement(m.mP,null,(({width:r})=>i.createElement("div",{ref:n.handleRef,className:`${U.y.EXTENSION} ${n.shadowClassNames} ${s}`,style:{width:a?(0,B.rW)(t,r):"100%"},"data-layout":t},i.createElement("div",{className:o},e))))},z=(0,H.Z)((e=>{const{text:t,layout:n="default",handleRef:r,shadowClassNames:a,path:s=[]}=e;return i.createElement(W,(0,o.Z)({},e,{type:"extension"}),(({result:e})=>{try{if(e&&i.isValidElement(e))return F(e,n,{isTopLevel:s.length<1,handleRef:r,shadowClassNames:a})}catch(o){}return F(t||"extension",n,{isTopLevel:s.length<1,handleRef:r,shadowClassNames:a})}))}),{overflowSelector:`.${U.y.EXTENSION_OVERFLOW_CONTAINER}`}),j=e=>{const{children:t,layout:n="default",path:r=[]}=e,a=i.Children.toArray(t).map((e=>"table"===e.props.nodeType)).every(Boolean);return i.createElement(W,(0,o.Z)({},e,{type:"bodiedExtension"}),(({result:e})=>{try{if(e&&i.isValidElement(e))return F(e,n,{isTopLevel:r.length<1},a)}catch(o){}return F(t,n,{isTopLevel:r.length<1},a)}))};var V=n(667066);function K(e){let t=1;return e.forEach((e=>{"bulletList"!==e.type.name&&"orderedList"!==e.type.name||t++})),t}const X=i.createContext({fireAnalyticsEvent:e=>null});var G=n(959557);class J{constructor(e){this.type=e?e.type:"None",e&&"None"!==this.type&&(this.range=e.getRangeAt(0))}eq(e){if(!e)return!1;if(this.range&&e.range){var t,n;const r=0===(null===(t=this.range)||void 0===t?void 0:t.compareBoundaryPoints(Range.START_TO_START,e.range)),o=0===(null===(n=this.range)||void 0===n?void 0:n.compareBoundaryPoints(Range.END_TO_END,e.range));return r&&o}return"None"===this.type&&"None"===e.type}inside(e){var t,n;return e.contains(null!==(t=null===(n=this.range)||void 0===n?void 0:n.commonAncestorContainer)&&void 0!==t?t:null)}select(e){const t=document.createRange();t.selectNodeContents(e);const n=window.getSelection();return n&&(n.removeAllRanges(),n.addRange(t)),J.fromWindow()}static fromWindow(e=window){return new J(e.getSelection())}}const q=()=>{const{fireAnalyticsEvent:e}=i.useContext(X),t=i.useRef(null),n=i.useRef(!1),r=i.useRef(),o="undefined"!=typeof navigator&&/Mac/.test(navigator.platform),a=i.useCallback((a=>{const i=t.current;if(!i)return;if(!(o?a.metaKey:a.ctrlKey)||"KeyA"!==a.code)return;const s=J.fromWindow();s.eq(r.current)?e({eventType:G.Ze.TRACK,action:G.om.SELECT_ALL_ESCAPED,actionSubject:G.Wt.RENDERER}):(s.inside(i)||"None"===s.type&&n.current)&&(e({eventType:G.Ze.TRACK,action:G.om.SELECT_ALL_CAUGHT,actionSubject:G.Wt.RENDERER}),a.preventDefault(),r.current=s.select(i))}),[o,t,e,n,r]),s=i.useCallback((e=>{var r,o;n.current=null!==(r=null===(o=t.current)||void 0===o?void 0:o.contains(e.target))&&void 0!==r&&r}),[t,n]);return i.useEffect((()=>(window.addEventListener("keydown",a),window.addEventListener("click",s),()=>{window.removeEventListener("keydown",a),window.removeEventListener("click",s)})),[a,s]),t};function Y(e){return i.createElement("div",{className:U.y.DOCUMENT},e.children)}function Q(e){return i.createElement("div",{ref:q(),className:U.y.DOCUMENT},e.children)}const ee=({forceNewLine:e=!1})=>e?i.createElement(i.Fragment,null,i.createElement("br",null),i.createElement("br",null)):i.createElement("br",null);var te=n(780966),ne=n(390368);const re=function(e){const{headingId:t,dataAttributes:n,allowHeadingAnchorLinks:r,marks:a,invisible:s}=e,l=`h${e.level}`,d=!!e.showAnchorLink,c=function(e){return!(!e||!e.length)&&e.some((e=>"alignment"===e.type.name&&"end"===e.attrs.align))}(a),u=r&&r.allowNestedHeaderLinks,h=s?void 0:t;return i.createElement(l,(0,o.Z)({id:h},n),i.createElement(i.Fragment,null,d&&c?(p=e.children,i.Children.map(p,(e=>"string"!=typeof e||/^\s*$/.test(e)?e:i.createElement("span",null,e)))):e.children,d&&t&&i.createElement(X.Consumer,null,(({fireAnalyticsEvent:n})=>i.createElement(te.Z,{enableNestedHeaderLinks:u,level:e.level,onCopyText:()=>(n({action:G.om.CLICKED,actionSubject:G.Wt.BUTTON,actionSubjectId:G.VJ.HEADING_ANCHOR_LINK,eventType:G.Ze.UI}),(0,ne.T)(((e="")=>{const t=new URL(window.location.href);return t.hash=encodeURIComponent(e),t.href})(t)))})))));var p},oe=e=>{const{text:t}=e;return i.createElement(W,(0,o.Z)({},e,{type:"inlineExtension"}),(({result:e})=>{try{if(e&&i.isValidElement(e))return i.createElement("span",null,e)}catch(n){}return i.createElement("span",null,t||"inlineExtension")}))};var ae=n(245028);const ie=s.iv`
  ${ae.K}
  ${ae.u}
`;var se=n(650516);const le=({children:e,dataAttributes:t})=>i.createElement(se.Z,{hasContent:!0,dataAttributes:t},e);var de=n(628866),ce=n(670317),ue=n(455374),he=n(67653);function pe(e){const{children:t}=e;return i.Children.toArray(t).length?t:i.createElement(i.Fragment,null," ")}var me=n(135750),fe=n(951450),ge=n(895822);function Ee(e,...t){const n=[e,...t];return function(e){return n.reduceRight(((e,t)=>t(e)),e)}}var be=n(369396),ve=n(523326),ye=n(222680),Ne=n(112261),Ce=n(676424),we=n(131436),Ae=n(225928),Te=n(603494);let ke;!function(e){e.ASC="sorting-icon-svg__asc",e.DESC="sorting-icon-svg__desc",e.NO_ORDER="sorting-icon-svg__no_order",e.SORTING_NOT_ALLOWED="sorting-icon-svg__not-allowed"}(ke||(ke={}));const Re=s.iv`
  position: absolute;
  display: flex;
  height: 28px;
  width: 28px;
  margin: 6px;
  right: 0;
  top: 0;
  border: 2px solid ${"var(--ds-border, #fff)"};
  border-radius: ${(0,Ce.ww)()/2}px;
  background-color: ${`var(--ds-surface-overlay, ${we.IR})`};
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${`var(--ds-surface-overlay-hovered, ${we.gt})`};
  }

  &:active {
    background-color: ${"var(--ds-surface-overlay-pressed, rgba(179, 212, 255, 0.6))"};
  }

  &.${U.y.SORTABLE_COLUMN_ICON}__not-allowed {
    cursor: not-allowed;
  }
`,Oe=s.iv`
  width: 8px;
  height: 12px;
  transition: transform 0.3s cubic-bezier(0.15, 1, 0.3, 1);
  transform-origin: 50% 50%;
  display: flex;
  justify-content: center;

  &.${ke.DESC} {
    transform: rotate(-180deg);
  }

  &.${U.y.SORTABLE_COLUMN_ICON}-inactive {
    opacity: 0.7;
  }
`,Se=s.iv`
  height: 100%;
  width: 2px;
  border-radius: 50px;
  background: ${"var(--ds-icon, #42526E)"};

  &::before,
  &::after {
    background: ${"var(--ds-icon, #42526E)"};
    content: '';
    height: 2px;
    width: 6px;
    position: absolute;
    border-radius: 50px;
  }

  &::before {
    transform: rotate(45deg) translate(3.4px, 8.5px);
  }

  &::after {
    transform: rotate(-45deg) translate(-6.3px, 5.7px);
  }
`,xe=(e,t)=>{const n=t!==be.As.NO_ORDER,r=`${U.y.SORTABLE_COLUMN_ICON}-${n?"active":"inactive"}`;if(!e)return`${ke.SORTING_NOT_ALLOWED} ${r}`;switch(t){case be.As.ASC:return`${ke.ASC} ${r}`;case be.As.DESC:return`${ke.DESC} ${r}`;default:return`${ke.NO_ORDER} ${r}`}},_e=(0,Te.ZP)((({isSortingAllowed:e,sortOrdered:t,intl:n,onClick:r,onKeyDown:o})=>{const a=`${U.y.SORTABLE_COLUMN_ICON}${e?"":` ${U.y.SORTABLE_COLUMN_ICON}__not-allowed`}`,i=((e,t,n)=>{const{noOrderLabel:r,ascOrderLabel:o,descOrderLabel:a,invalidLabel:i}=Ae.eV;if(!t)return e.formatMessage(i);switch(n){case be.As.NO_ORDER:return e.formatMessage(r);case be.As.ASC:return e.formatMessage(o);case be.As.DESC:return e.formatMessage(a)}return""})(n,e,t);return(0,s.tZ)(Ne.Z,{delay:0,content:i,position:"top"},(0,s.tZ)("div",{css:Re,className:a,role:"button",tabIndex:e?0:-1,"aria-label":"sort column","aria-disabled":!e,onClick:()=>{e&&r()},onKeyDown:t=>{e&&o(t)}},(0,s.tZ)("div",{css:Oe,className:xe(e,t)},(0,s.tZ)("div",{css:Se}))))}));var Ie=n(630672);const Le=["LABEL","INPUT"],Ze=(e,t)=>{const{noneSortingLabel:n,ascSortingLabel:r,descSortingLabel:o}=Ae.Jj;switch(t){case be.As.NO_ORDER:return e.formatMessage(n);case be.As.ASC:return e.formatMessage(r);case be.As.DESC:return e.formatMessage(o);default:return e.formatMessage(n)}},Me=(e,t,n)=>{const r={};return e&&!e.includes("--ds-background-neutral")&&(r.backgroundColor=e),t&&(r.width=t,r.minWidth=t),void 0!==n&&(r.top=n),r},$e=e=>class extends i.Component{render(){const{children:t,className:n,onClick:r,colwidth:a,colGroupWidth:s,rowspan:l,colspan:d,background:c,offsetTop:u,ariaSort:h}=this.props,p=c?ye.R_.get(c):"";return i.createElement(e,(0,o.Z)({rowSpan:l,colSpan:d,style:Me(c,s,u),colorname:p,onClick:r,className:n},(e=>{const t={};return e&&(t["data-colwidth"]=e.join(",")),t})(a),{"aria-sort":h}),t)}},Pe=Ee((e=>{class t extends i.Component{constructor(e){super(e),(0,a.Z)(this,"onKeyPress",(e=>{const{tagName:t}=e.target;[" ","Enter","Spacebar"].includes(e.key)&&!Le.includes(t)&&(e.preventDefault(),this.sort())})),(0,a.Z)(this,"sort",(()=>{const{fireAnalyticsEvent:e,onSorting:t,columnIndex:n,sortOrdered:r}=this.props;if(t&&null!=n){const o=(e=>{switch(e){case be.As.NO_ORDER:return be.As.ASC;case be.As.ASC:return be.As.DESC;case be.As.DESC:return be.As.NO_ORDER}return be.As.NO_ORDER})(r);t(n,o),e&&e({action:G.om.SORT_COLUMN,actionSubject:G.Wt.TABLE,attributes:{platform:Ie.iw.WEB,mode:Ie.IK.RENDERER,columnIndex:n,sortOrder:o},eventType:G.Ze.TRACK})}else e&&e({action:G.om.SORT_COLUMN_NOT_ALLOWED,actionSubject:G.Wt.TABLE,attributes:{platform:Ie.iw.WEB,mode:Ie.IK.RENDERER},eventType:G.Ze.TRACK})}))}render(){const{allowColumnSorting:t,onSorting:n,children:r,sortOrdered:a,isHeaderRow:s,intl:l}=this.props,d=a===be.As.NO_ORDER?U.y.SORTABLE_COLUMN_NO_ORDER:"";return t&&s?i.createElement(e,(0,o.Z)({},this.props,{className:U.y.SORTABLE_COLUMN_WRAPPER,ariaSort:Ze(l,a)}),i.createElement("div",{className:U.y.SORTABLE_COLUMN},r,i.createElement("figure",{className:`${U.y.SORTABLE_COLUMN_ICON_WRAPPER} ${d}`},i.createElement(_e,{isSortingAllowed:!!n,sortOrdered:a,onClick:this.sort,onKeyDown:this.onKeyPress})))):i.createElement(e,this.props)}}return t.displayName="WithSortableColumn",(0,Te.ZP)(t)}),$e)("th"),De=$e("td");var We=n(140034);const He=e=>{let{columnWidths:t,layout:n,isNumberColumnEnabled:r,renderWidth:o}=e;if(!t||!(e=>!!e.filter((e=>0!==e)).length)(t))return null;const a=((e,t)=>{switch(e){case"full-width":return A.zJ;case"wide":return A.uz;default:return A.re}})(n),s=o<a?o:a;"default"===n&&(o=Math.min(o,a));let l=r?A.XV:0,d=l,c=0;t.forEach((e=>{e?l+=Math.ceil(e):c+=1,d+=Math.ceil(e)||A.MJ}));let u=0,h=0;if(c>0){if(d>s){const e=Math.ceil((s-l)/c);u=e<A.MJ?A.MJ:e}}else o<l&&(h=(({renderWidth:e,tableWidth:t,maxScale:n})=>{const r=1-e/t;return r<n?r:n})({renderWidth:o,tableWidth:l,maxScale:.3}));return i.createElement("colgroup",null,r&&i.createElement("col",{style:{width:A.XV}}),t.map(((e,t)=>{const n=((e,t,n,r,o)=>0===e?e:0===r&&o?Math.floor((1-o)*e):Math.max(e-me.Ok,r?A.MJ:me.kB))(e,0,0,c,h)||u,r=n?{width:`${n}px`}:{};return i.createElement("col",{key:t,style:r})})))},Be=i.memo((({innerRef:e,isNumberColumnEnabled:t,columnWidths:n,layout:r,renderWidth:o,children:a})=>i.createElement("table",{"data-number-column":t,ref:e},i.createElement(He,{columnWidths:n,layout:r,isNumberColumnEnabled:t,renderWidth:o}),i.createElement("tbody",null,a))));function Ue(e,t){return i.Children.toArray(e).map((e=>i.isValidElement(e)?(e.props.children&&(e=i.cloneElement(e,{children:Ue(e.props.children,t)})),i.cloneElement(e,t)):e))}const Fe={none:s.iv`
    display: none;
  `,stick:s.iv`
    position: fixed;
  `,"pin-bottom":s.iv`
    position: absolute;
  `},ze=(e,t)=>s.iv`
  ${"number"==typeof e&&`top: ${e}px;`}
  width: ${t}px;
  z-index: ${A.r0};
  &
    .${me.Up.TABLE_CONTAINER},
    &
    .${me.Up.TABLE_STICKY_WRAPPER}
    > table {
    margin-top: 0;
    margin-bottom: 0;
  }

  border-top: ${8}px solid
    ${"var(--ds-surface, white)"};
  background: ${"var(--ds-surface-overlay, white)"};
  box-shadow: ${`var(--ds-shadow-overflow, 0 6px 4px -4px ${we.bt})`};

  div[data-expanded='false'] & {
    display: none;
  }

  &
    .${me.Up.TABLE_CONTAINER}.right-shadow::after,
    &
    .${me.Up.TABLE_CONTAINER}.left-shadow::before {
    top: 0px;
    height: 100%;
  }
`,je=e=>{const{top:t,wrapperWidth:n,mode:r}=e,a=[ze(t,n),null==Fe?void 0:Fe[r]],i={mode:r};return(0,s.tZ)("div",(0,o.Z)({},i,{"data-testid":"sticky-table-fixed",css:a}),e.children)},Ve=({top:e,left:t,mode:n,shadowClassNames:r,innerRef:o,wrapperWidth:a,tableWidth:i,isNumberColumnEnabled:l,layout:d,children:c,columnWidths:u,renderWidth:h,rowHeight:p})=>(0,s.tZ)("div",{css:{left:t&&t<0?t:void 0,top:"pin-bottom"===n?e:void 0,position:"relative"}},(0,s.tZ)(je,{top:"stick"===n?e:void 0,mode:p>300?"none":n,wrapperWidth:a},(0,s.tZ)("div",{className:`${me.Up.TABLE_CONTAINER} ${r||""}`,"data-layout":d,style:{width:i}},(0,s.tZ)("div",{ref:o,className:`${me.Up.TABLE_STICKY_WRAPPER}`,style:{overflow:"hidden"}},(0,s.tZ)(Be,{columnWidths:u,layout:d,isNumberColumnEnabled:l,renderWidth:h},Ue(c,{invisible:!0}))))));class Ke{constructor(e){this.ref=e,this.ref=e}static fromElement(e){return new Ke(function(e){let t=e;if(!t)return null;for(;t=t.parentElement;){const e=window.getComputedStyle(t);if("scroll"===e.overflow||"scroll"===e.overflowY)return t}return null}(e)||window)}get isElement(){return this.ref instanceof HTMLElement}get top(){return this.ref instanceof HTMLElement?this.ref.getBoundingClientRect().top:0}addEventListener(e,t,...n){this.ref.addEventListener(e,t,...n)}removeEventListener(e,t,...n){this.ref.removeEventListener(e,t,...n)}}const Xe=e=>{if(!e.length)return!1;const{children:t}=e[0].props;return!!t.length&&(1===t.length?t[0].type===Pe:t.every((e=>e.type===Pe)))};class Ge extends i.Component{constructor(...e){super(...e),(0,a.Z)(this,"state",{stickyMode:"none"}),(0,a.Z)(this,"tableRef",i.createRef()),(0,a.Z)(this,"stickyHeaderRef",i.createRef()),(0,a.Z)(this,"stickyWrapperRef",i.createRef()),(0,a.Z)(this,"wrapperRef",i.createRef()),(0,a.Z)(this,"overflowParent",null),(0,a.Z)(this,"componentWillUnmount",(()=>{this.overflowParent&&this.overflowParent.removeEventListener("scroll",this.onScroll),this.nextFrame&&cancelAnimationFrame(this.nextFrame)})),(0,a.Z)(this,"getScrollTop",(()=>{const{stickyHeaders:e}=this.props,t=e&&e.offsetTop||0;return(this.overflowParent?this.overflowParent.top:0)+t})),(0,a.Z)(this,"updateSticky",(()=>{const e=this.tableRef.current,t=this.stickyHeaderRef.current;if(!e||!t)return;const n=this.getScrollTop()+8,r=(o=e,Math.round(o.getBoundingClientRect().top));var o;const a=r+e.clientHeight,i=((e,t,n,r)=>t<=e&&!(n-r<=e))(n,r,a,t.clientHeight);let s="none";((e,t,n)=>t-n<=e&&!(t<e))(n,a,t.clientHeight)?s="pin-bottom":i&&(s="stick"),this.state.stickyMode!==s&&this.setState({stickyMode:s}),this.nextFrame=void 0})),(0,a.Z)(this,"onScroll",(()=>{this.nextFrame||(this.nextFrame=requestAnimationFrame(this.updateSticky))})),(0,a.Z)(this,"onWrapperScrolled",(()=>{this.wrapperRef.current&&this.stickyWrapperRef.current&&(this.stickyWrapperRef.current.scrollLeft=this.wrapperRef.current.scrollLeft)})),(0,a.Z)(this,"grabFirstRowRef",(e=>i.Children.map(e,((e,t)=>0===t&&i.isValidElement(e)?i.cloneElement(e,{innerRef:this.stickyHeaderRef}):e))))}componentDidMount(){this.props.stickyHeaders&&(this.overflowParent=Ke.fromElement(this.tableRef.current),this.overflowParent.addEventListener("scroll",this.onScroll))}componentDidUpdate(e,t){this.props.stickyHeaders&&!this.overflowParent?this.overflowParent=Ke.fromElement(this.tableRef.current):!this.props.stickyHeaders&&this.overflowParent&&(this.overflowParent.removeEventListener("scroll",this.onScroll),this.overflowParent=null),this.props.stickyHeaders!==e.stickyHeaders&&this.updateSticky(),t.stickyMode!==this.state.stickyMode&&this.onWrapperScrolled()}get pinTop(){if(this.tableRef.current&&this.stickyHeaderRef.current)return this.tableRef.current.offsetHeight-this.stickyHeaderRef.current.offsetHeight+me.MZ-8}get stickyTop(){switch(this.state.stickyMode){case"pin-bottom":return this.pinTop;case"stick":return this.props.stickyHeaders&&this.props.stickyHeaders.offsetTop;default:return}}get headerRowHeight(){return this.stickyHeaderRef.current?this.stickyHeaderRef.current.offsetHeight:0}render(){const{isNumberColumnEnabled:e,layout:t,renderWidth:n,columnWidths:r,stickyHeaders:o,tableNode:a}=this.props,{stickyMode:s}=this.state;let l=(0,me.WM)(t,n,!1);const d=A.re;let c;if(!(u=this.props.rendererAppearance,"full-page"!==u&&"mobile"!==u||"inherit"===l)){c=d/2-Number(l.substring(0,l.length-2))/2}var u;const h=this.wrapperRef.current?this.wrapperRef.current.clientWidth:0,p=i.Children.toArray(this.props.children);return i.createElement(i.Fragment,null,o&&((e,t)=>Xe(t)&&e&&e.firstChild&&!(e=>{let t=!1;return e.forEach((e=>t=t||e.attrs.rowspan>1)),t})(e.firstChild))(a,p)&&i.createElement(Ve,{isNumberColumnEnabled:e,tableWidth:l,layout:t,renderWidth:n,handleRef:this.props.handleRef,shadowClassNames:this.props.shadowClassNames,top:this.stickyTop,left:c,mode:s,innerRef:this.stickyWrapperRef,wrapperWidth:h,columnWidths:r,rowHeight:this.headerRowHeight},[p&&p[0]]),i.createElement("div",{className:`${me.Up.TABLE_CONTAINER} ${this.props.shadowClassNames||""}`,"data-layout":t,ref:this.props.handleRef,style:{width:l,left:c&&c<0?c:void 0}},i.createElement("div",{className:me.Up.TABLE_NODE_WRAPPER,ref:this.wrapperRef,onScroll:this.props.stickyHeaders&&this.onWrapperScrolled},i.createElement(Be,{innerRef:this.tableRef,columnWidths:r,layout:t,isNumberColumnEnabled:e,renderWidth:n},this.grabFirstRowRef(p)))))}}Ge.displayName="TableContainer";class Je extends i.Component{constructor(...e){super(...e),(0,a.Z)(this,"state",{tableOrderStatus:void 0}),(0,a.Z)(this,"addSortableColumn",(e=>{const{tableNode:t,allowColumnSorting:n,smartCardStorage:r}=this.props,{tableOrderStatus:o}=this.state;return n&&Xe(e)&&t&&!(0,ge.Ak)(t)?((e,t,n)=>i.Children.map(e,((e,r)=>0===r?i.cloneElement(i.Children.only(e),{tableOrderStatus:t,onSorting:n}):e)))(((e,t,n,r)=>{if(!r||r.order===be.As.NO_ORDER)return e;const{order:o,columnIndex:a}=r,i=(0,fe.zR)({getInlineCardTextFromStore(e){const{url:t}=e;return t&&n.get(t)||null}},o),s=(0,ge.oc)(t).map(((t,n)=>({rowNodes:t,rowReact:e[n]}))),l=s.shift(),d=s.sort(((e,t)=>i(e.rowNodes[a],t.rowNodes[a])));return l&&d.unshift(l),d.map((e=>e.rowReact))})(e,t,r,o),o,this.changeSortOrder):e})),(0,a.Z)(this,"changeSortOrder",((e,t)=>{this.setState({tableOrderStatus:{columnIndex:e,order:t}})})),(0,a.Z)(this,"addNumberColumnIndexes",(e=>{const{isNumberColumnEnabled:t}=this.props,n=Xe(e);return i.Children.map(e,((e,r)=>i.cloneElement(i.Children.only(e),{isNumberColumnEnabled:t,index:n?0===r?"":r:r+1})))}))}render(){const{children:e}=this.props;if(!e)return null;let t=i.Children.toArray(e);const n=Ee(this.addNumberColumnIndexes,this.addSortableColumn)(t);return i.createElement(Ge,this.props,n)}}Je.displayName="TableProcessor";const qe=(0,H.Z)(Je,{overflowSelector:`.${me.Up.TABLE_NODE_WRAPPER}`,useShadowObserver:!0}),Ye=(0,We.Fi)((e=>i.createElement(m.mP,null,(({width:t})=>{var n;const r="full-page"===e.rendererAppearance?t-2*ve.zA:t;return(null===(n=e.columnWidths)||void 0===n?void 0:n.reduce(((e,t)=>e+t),0))||0?i.createElement(qe,(0,o.Z)({renderWidth:r},e)):i.createElement(Je,(0,o.Z)({renderWidth:r},e))}))));class Qe extends i.Component{constructor(...e){super(...e),(0,a.Z)(this,"state",{colGroupWidths:[]}),(0,a.Z)(this,"addSortableColumn",(e=>{const{allowColumnSorting:t,index:n}=this.props;if(t){const t=!n;e=e.map(((e,n)=>{if(i.isValidElement(e)){const{tableOrderStatus:r}=this.props;let o=be.As.NO_ORDER;return r&&(o=n===r.columnIndex?r.order:be.As.NO_ORDER),i.cloneElement(e,{columnIndex:n,onSorting:this.props.onSorting,sortOrdered:o,isHeaderRow:t})}}))}return e})),(0,a.Z)(this,"addColGroupWidth",(e=>(this.state.colGroupWidths&&(e=e.map(((e,t)=>{if(i.isValidElement(e))return i.cloneElement(e,{colGroupWidth:this.state.colGroupWidths[t]})}))),e)))}render(){const{children:e,innerRef:t}=this.props,n=i.Children.toArray(e);return i.createElement("tr",{ref:t},this.props.isNumberColumnEnabled&&i.createElement("td",{className:U.y.NUMBER_COLUMN},this.props.index),Ee(this.addSortableColumn,this.addColGroupWidth)(n))}}Qe.displayName="TableRow";var et=n(831014);const tt=Z()({__loadable_id__:"zhgga",name:"WindowedCodeBlock",loader:()=>Promise.all([n.e(61769),n.e(78248),n.e(54936),n.e(11216),n.e(10679)]).then(n.bind(n,488464)).then((e=>e.default)),loading:()=>null}),nt=Z()({__loadable_id__:"giZaI",name:"CodeBlock",loader:()=>Promise.all([n.e(61769),n.e(78248),n.e(54936),n.e(11216),n.e(1831),n.e(98295)]).then(n.bind(n,819181)).then((e=>e.default)),loading:()=>null}),rt=Z()({__loadable_id__:"mC-wi",name:"TaskList",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(37825)]).then(n.bind(n,998159)).then((e=>e.default)),loading:()=>null}),ot=Z()({__loadable_id__:"cznEn",name:"TaskItem",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(96705)]).then(n.bind(n,780566)).then((e=>e.default)),loading:()=>null}),at=Z()({__loadable_id__:"EH2zo",name:"DecisionList",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(20871)]).then(n.bind(n,638834)).then((e=>e.default)),loading:()=>null}),it=Z()({__loadable_id__:"vJHBm",name:"DecisionItem",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(4601)]).then(n.bind(n,837727)).then((e=>e.default)),loading:()=>null}),st=Z()({__loadable_id__:"c4GIw",name:"Date",loader:()=>Promise.all([n.e(54936),n.e(11216),n.e(14315)]).then(n.bind(n,897847)).then((e=>e.default)),loading:()=>null}),lt=Z()({__loadable_id__:"kWiSa",name:"Status",loader:()=>Promise.all([n.e(61769),n.e(78248),n.e(54936),n.e(11216),n.e(95387)]).then(n.bind(n,808154)).then((e=>e.default)),loading:()=>null}),dt=Z()({__loadable_id__:"AztsO",name:"Emoji",loader:()=>Promise.all([n.e(54936),n.e(11216),n.e(43101),n.e(36546)]).then(n.bind(n,337424)).then((e=>e.default)),loading:()=>null}),ct=Z()({__loadable_id__:"s-iQl",name:"Panel",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(43101),n.e(83045)]).then(n.bind(n,947408)).then((e=>e.default)),loading:()=>null}),ut=Z()({__loadable_id__:"1375U",name:"EmbedCard",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(26495),n.e(65683),n.e(1434)]).then(n.bind(n,322961)).then((e=>e.default)),loading:()=>null}),ht=Z()({__loadable_id__:"gLaBA",name:"InlineCard",loader:()=>Promise.all([n.e(61769),n.e(78248),n.e(54936),n.e(11216),n.e(97996),n.e(26495),n.e(99335),n.e(79844),n.e(65683),n.e(94301)]).then(n.bind(n,444978)).then((e=>e.default)),loading:()=>null}),pt=Z()({__loadable_id__:"Dqb8g",name:"BlockCard",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(26495),n.e(65683),n.e(2709)]).then(n.bind(n,796005)).then((e=>e.default)),loading:()=>null}),mt=Z()({__loadable_id__:"Sx0bh",name:"Media",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(91306),n.e(40611),n.e(93964),n.e(1054),n.e(72734),n.e(50357)]).then(n.bind(n,588520)).then((e=>e.default)),loading:()=>null}),ft=Z()({__loadable_id__:"PyPFO",name:"MediaGroup",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(12903)]).then(n.bind(n,922274)).then((e=>e.default)),loading:()=>null}),gt=Z()({__loadable_id__:"JRu6a",name:"MediaInline",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(91306),n.e(40611),n.e(93964),n.e(1054),n.e(72734),n.e(34406)]).then(n.bind(n,861266)).then((e=>e.default)),loading:()=>null}),Et=Z()({__loadable_id__:"wwbWt",name:"MediaSingle",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(84257)]).then(n.bind(n,683095)).then((e=>e.default)),loading:()=>null}),bt=Z()({__loadable_id__:"rO3vy",name:"Mention",loader:()=>Promise.all([n.e(61769),n.e(78248),n.e(54936),n.e(11216),n.e(24751),n.e(13197)]).then(n.bind(n,122807)).then((e=>e.default)),loading:()=>null}),vt=Z()({__loadable_id__:"K45aA",name:"Expand",loader:()=>Promise.all([n.e(78248),n.e(54936),n.e(11216),n.e(35066)]).then(n.bind(n,24055)).then((e=>e.default)),loading:()=>null}),yt={blockquote:function(e){return i.createElement("blockquote",null,e.children)},bulletList:function(e){return i.createElement("ul",{className:V.T.substr(1),"data-indent-level":e.path?K(e.path):1},e.children)},blockCard:pt,caption:le,date:st,decisionItem:it,decisionList:at,doc:Y,emoji:dt,extension:z,bodiedExtension:j,hardBreak:ee,heading:re,inlineCard:ht,inlineExtension:oe,layoutSection:function(e){return i.createElement("div",{"data-layout-section":!0},e.children)},layoutColumn:function(e){return(0,s.tZ)("div",{"data-layout-column":!0,"data-column-width":e.width,style:{flexBasis:`${e.width}%`}},(0,s.tZ)(m.iF,null,(0,s.tZ)("div",{css:ie}),e.children))},listItem:function(e){return i.createElement("li",null,e.children)},media:mt,mediaGroup:ft,mediaInline:gt,mediaSingle:Et,mention:bt,orderedList:function(e){const t=(0,he.g)();let n={};if(null!=t&&t.restartNumberedLists){var r;const t=(0,ue.Px)({order:e.order,itemsCount:null==e||null===(r=e.content)||void 0===r?void 0:r.length});t&&(n.style=(0,ce.aP)(t,"object")),void 0!==e.order&&(n.start=(0,ue.hn)(e.order))}return i.createElement("ol",(0,o.Z)({className:de.Us.substr(1),"data-indent-level":e.path?K(e.path):1,start:e.start},n),e.children)},panel:ct,paragraph:function({children:e,dataAttributes:t}){return i.createElement("p",t,i.createElement(pe,null,e))},placeholder:function(e){return e.allowPlaceholderText?i.createElement("span",{"data-placeholder":`${e.text}`},e.text):i.createElement("span",null)},rule:function(){return i.createElement("hr",null)},status:lt,taskItem:ot,taskList:rt,table:Ye,tableCell:De,tableHeader:Pe,tableRow:Qe,unknownBlock:function(e){return i.createElement("div",{className:"UnknownBlock"},e.children)},unsupportedBlock:u.Z,unsupportedInline:et.Z,expand:vt,nestedExpand:vt,embedCard:ut},Nt=e=>"text"===e,Ct=e=>"textWrapper"===e.type.name;let wt;!function(e){e.AROUND_TEXT="AROUND_TEXT",e.START="START",e.END="END",e.INSIDE="INSIDE"}(wt||(wt={}));const At=(0,i.createContext)(null),Tt=(0,i.createContext)(null),kt=(0,i.createContext)({});class Rt extends i.Component{constructor(...e){super(...e),(0,a.Z)(this,"state",{position:null}),(0,a.Z)(this,"applyAnnotationDraftAt",(e=>{const{position:t}=this.state;t||this.setState({position:e})})),(0,a.Z)(this,"clearAnnotationDraft",(()=>{this.setState({position:null})}))}render(){const{children:e}=this.props,{position:t}=this.state,n=this.applyAnnotationDraftAt,r=this.clearAnnotationDraft;return i.createElement(At.Provider,{value:t},e({applyAnnotationDraftAt:n,clearAnnotationDraft:r}))}}Rt.displayName="AnnotationsDraftContextWrapper";const Ot=({from:e,to:t})=>({"data-annotation-draft-mark":!0,"data-draft-start-at":e,"data-draft-end-at":t}),St=e=>{const t=window.getSelection();if(!t)return!1;const n=document.querySelectorAll((e=>{const t=Ot(e);return Object.entries(t).map((([e,t])=>`[${e}="${t}"]`)).join("")})(e));if(!n||0===n.length)return!1;t.removeAllRanges();const r=document.createRange();return r.setStart(n[0],0),r.setEndAfter(n[n.length-1]),t.addRange(r),!0};var xt=n(58650);const _t=e=>s.iv`
  color: inherit;
  background-color: unset;
  -webkit-tap-highlight-color: transparent;

  ${(0,xt.Lj)(e).focus};
`,It=({draftPosition:e,children:t})=>(0,s.tZ)("mark",(0,o.Z)({"data-renderer-mark":!0},Ot(e),{css:_t}),t),Lt=({texts:e,shouldApplyAnnotationAt:t,draftPosition:n})=>{const r=(o=t,a=e.length,o===wt.START?0:o===wt.END?a-1:o===wt.INSIDE&&3===a?1:-1);var o,a;return e.map(((e,t)=>r===t?(0,s.tZ)(It,{key:t,draftPosition:n},e):(0,s.tZ)(i.Fragment,{key:t},e)))},Zt=({startPos:e,endPos:t,children:n})=>{const r=i.useMemo((()=>({start:e,end:t})),[t,e]),o=i.useContext(At),a=i.useMemo((()=>!!o&&(({start:e,end:t},n)=>n.from<=e&&n.to>=t?wt.AROUND_TEXT:n.from>e&&n.from<t&&n.to<t&&n.to>e?wt.INSIDE:n.from>=e&&n.from<=t&&n.to>=t?wt.END:!!(n.from<=e&&n.to>=e&&n.to<=t)&&wt.START)(r,o)),[o,r]);if(!1===a||!o)return(0,s.tZ)(i.Fragment,null,n);if(a===wt.AROUND_TEXT)return(0,s.tZ)(It,{key:0,draftPosition:o},n);const l=((e,{startOffset:t,endOffset:n})=>n>e.length||n-t<=0?null:[e.slice(0,t),e.slice(t,n),e.slice(n)].filter(Boolean))(n,((e,t,n)=>{const{start:r,end:o}=t;return{startOffset:Math.max(e.from-r,0),endOffset:Math.min(Math.abs(o-e.to-n.length),n.length)}})(o,r,n));if(!l)return(0,s.tZ)(i.Fragment,null,n);const d=Lt({texts:l,shouldApplyAnnotationAt:a,draftPosition:o});return(0,s.tZ)(i.Fragment,null,d)},Mt=e=>{const{startPos:t,endPos:n}=e,{children:r}=e;return r?i.createElement(Zt,{startPos:t,endPos:n},r):null};var $t=n(900532),Pt=n(653197);const Dt=(0,Te.ZP)((function(e){const t=e.intl.formatMessage(Pt.i.label);return i.createElement($t.Z,(0,o.Z)({className:"code",codeBidiWarningLabel:t,codeBidiWarningTooltipEnabled:e.codeBidiWarningTooltipEnabled},e.dataAttributes),e.children)}));var Wt=n(359398);const Ht=s.iv`
  color: ${`var(--ds-link, ${we.AX})`};

  &:hover {
    color: ${`var(--ds-link, ${we.M5})`};
    text-decoration: underline;
  }

  &:active {
    color: ${`var(--ds-link-pressed, ${we.YC})`};
  }
`;var Bt=n(656887);const Ut=s.iv`
  margin: ${A.zH} 0;
  margin-left: 50%;
  transform: translateX(-50%);
`;var Ft=n(604086);const zt=e=>{const t=e["data-align"]?s.iv`
        text-align: ${Ft.z[e["data-align"]]};
      `:"";return(0,s.tZ)("div",(0,o.Z)({css:t},e),e.children)};var jt=n(841540);const Vt=e=>s.iv`
  color: inherit;
  background-color: unset;
  -webkit-tap-highlight-color: transparent;

  &[data-mark-annotation-state='${jt.to.ACTIVE}'] {
    ${(0,xt.Lj)({theme:e}).blur};

    &:focus,
    &[data-has-focus='true'] {
      ${(0,xt.Lj)({theme:e}).focus};
    }
  }
`,Kt=({annotationParentIds:e,children:t,dataAttributes:n,id:a,state:l,hasFocus:d,onClick:c})=>{const u=(0,i.useMemo)((()=>[...new Set([...e,a])]),[a,e]),h=(0,i.useCallback)((e=>{e.defaultPrevented||l!==jt.to.ACTIVE||(e.preventDefault(),c({eventTarget:e.target,annotationIds:u}))}),[u,c,l]),p=l?(0,r.Z)((0,r.Z)({},n),{},{"data-mark-annotation-state":l,"data-has-focus":d}):n,m=l!==jt.to.ACTIVE?{"aria-disabled":!0}:{"aria-details":u.join(", ")};return(0,s.tZ)("mark",(0,o.Z)({id:a,onClick:h},m,p,{css:Vt}),t)};n(880442);let Xt;!function(e){e.SET_ANNOTATION_FOCUS="SET_ANNOTATION_FOCUS",e.SET_ANNOTATION_STATE="SET_ANNOTATION_STATE",e.REMOVE_ANNOTATION_FOCUS="REMOVE_ANNOTATION_FOCUS",e.ON_ANNOTATION_CLICK="ON_ANNOTATION_CLICK"}(Xt||(Xt={}));const Gt=({annotationParentIds:e,children:t,dataAttributes:n,id:r})=>{const o=(()=>{const e=(0,i.useContext)(Tt);if(!e)return null;const{inlineComment:{updateSubscriber:t}}=e;return t||null})(),a=(0,i.useContext)(kt),s=(({id:e,updateSubscriber:t})=>{const[n,r]=(0,i.useState)(!1);return(0,i.useLayoutEffect)((()=>{if(!t)return;const n=t=>{r(t&&t.annotationId===e)},o=()=>{r(!1)};return t.on(Xt.SET_ANNOTATION_FOCUS,n),t.on(Xt.REMOVE_ANNOTATION_FOCUS,o),()=>{t.off(Xt.SET_ANNOTATION_FOCUS,n),t.off(Xt.REMOVE_ANNOTATION_FOCUS,o)}}),[e,t]),n})({id:r,updateSubscriber:o}),l=(0,i.useMemo)((()=>n),[n]),d=(0,i.useCallback)((e=>{if(!o)return;const{eventTarget:t,annotationIds:n}=e;o.emit(Xt.ON_ANNOTATION_CLICK,{annotationIds:n,eventTarget:t})}),[o]),c=(({annotationIds:e,filter:{state:t}})=>{const n=(0,i.useContext)(kt);return(0,i.useMemo)((()=>e.reduce(((e,r)=>n&&n[r]===t?[...e,r]:e),[])),[e,n,t])})({annotationIds:e,filter:{state:jt.to.ACTIVE}});return i.createElement(Kt,{id:r,dataAttributes:l,annotationParentIds:c,onClick:d,hasFocus:s,state:a[r]},t)},Jt=e=>e&&e.type&&"annotation"===e.type.name,qt=({id:e,annotationType:t,children:n,dataAttributes:a,annotationParentIds:s=[],allowAnnotations:l})=>{const d=(0,r.Z)((0,r.Z)({},a),(0,jt.$S)({id:e,annotationType:t}));return l?i.createElement(Gt,{id:e,dataAttributes:d,annotationParentIds:s,annotationType:t},n):i.createElement("span",(0,o.Z)({id:e},d),n)};class Yt extends i.Component{render(){const{reference:e,children:t}=this.props;return i.createElement("span",{"data-mark-type":"confluenceInlineComment","data-reference":e},t)}}Yt.displayName="ConfluenceInlineComment";const Qt={code:Dt,em:function(e){return i.createElement("em",e.dataAttributes,e.children)},link:function(e){const{href:t,target:n,eventHandlers:r,fireAnalyticsEvent:a,isMediaLink:l,dataAttributes:d}=e,c={href:t,target:n,title:t};"_blank"===n&&(c.rel="noreferrer noopener");const u=(0,Wt.XU)(r,"link");return l?(0,s.tZ)(i.Fragment,null,e.children):(0,s.tZ)("a",(0,o.Z)({css:Ht,onClick:e=>{a&&a({action:G.om.VISITED,actionSubject:G.Wt.LINK,eventType:G.Ze.TRACK,attributes:{platform:Ie.iw.WEB,mode:Ie.IK.RENDERER}}),u&&u(e,t)}},c,d),e.children)},strike:function(e){return i.createElement("span",(0,o.Z)({},e.dataAttributes,{style:{textDecoration:"line-through"}}),e.children)},strong:function(e){return i.createElement("strong",e.dataAttributes,e.children)},subsup:function(e){return"sub"===e.type?i.createElement("sub",e.dataAttributes,e.children):i.createElement("sup",e.dataAttributes,e.children)},textColor:function(e){const t=(0,Bt.E)(e.color)||e.color,n=(0,i.useMemo)((()=>({"--custom-palette-color":t})),[t]);return i.createElement("span",(0,o.Z)({},e.dataAttributes,{"data-text-custom-color":e.color,className:"fabric-text-color-mark",style:n}),e.children)},underline:function(e){return i.createElement("u",e.dataAttributes,e.children)},annotation:qt,confluenceInlineComment:Yt,breakout:function(e){return(0,s.tZ)(m.mP,null,(({width:t})=>(0,s.tZ)("div",{css:Ut,"data-mode":e.mode,style:{width:(0,B.rW)(e.mode,t)},className:"fabric-editor-breakout-mark fabric-editor-block-mark"},e.children)))},alignment:function(e){return(0,s.tZ)(zt,{className:"fabric-editor-block-mark fabric-editor-alignment","data-align":e.align},e.children)},indentation:function(e){return i.createElement("div",{className:"fabric-editor-block-mark fabric-editor-indentation-mark","data-level":e.level},e.children)},unsupportedMark:function(e){return i.createElement("span",e.dataAttributes,e.children)},unsupportedNodeAttribute:function(e){return i.createElement("span",e.dataAttributes,e.children)},dataConsumer:function(e){const t=e.isInline?"span":"div";return i.createElement(t,(0,o.Z)({"data-source":e.sources?JSON.stringify(e.sources):void 0,"data-mark-type":"dataConsumer"},e.dataAttributes),e.children)},fragment:function(e){const t=e.isInline?"span":"div";return i.createElement(t,(0,o.Z)({"data-localId":e.localId,"data-name":e.name,"data-mark-type":"fragment"},e.dataAttributes),e.children)}},en=e=>Qt[e.type.name];var tn=n(650388),nn=n(923487);function rn(e){return e.reduce(((e,t)=>{const n=e.length&&e[e.length-1]||null;return t.type instanceof x.MarkType&&n&&n.type instanceof x.MarkType&&Array.isArray(n.content)&&(0,tn.E2)(n,t)?n.content=rn(n.content.concat(t.content)):e.push(t),e}),[])}class on{constructor(e){(0,a.Z)(this,"headingIds",[]),(0,a.Z)(this,"expandHeadingIds",[]),(0,a.Z)(this,"allowCopyToClipboard",!1),(0,a.Z)(this,"allowPlaceholderText",!0),(0,a.Z)(this,"allowCustomPanels",!1),(0,a.Z)(this,"startPos",1),(0,a.Z)(this,"surroundTextNodesWithTextWrapper",!1),(0,a.Z)(this,"allowAnnotations",!1),(0,a.Z)(this,"serializeFragmentChild",((e,{index:t,parentInfo:n})=>{const o=this.startPos,a=n&&n.path||[],i="taskItem"===e.type.name&&"DONE"!==e.attrs.state,s=`${e.type.name}__${this.startPos}`,l=this.serializeFragment(e.content,this.getNodeProps(e,n),((e,t,n)=>"doc"===e.type.name&&!0===(null==t?void 0:t.allowSelectAllTrap)?Q:"codeBlock"===e.type.name?!0===(null==t?void 0:t.allowWindowedCodeBlock)?tt:nt:(0,r.Z)((0,r.Z)({},yt),n)[e.type.name])(e,{allowSelectAllTrap:this.allowSelectAllTrap,allowWindowedCodeBlock:this.allowWindowedCodeBlock},this.nodeComponents),s,{parentIsIncompleteTask:i,path:[...a,e],pos:this.startPos});this.startPos=o+e.nodeSize;const d=e.marks?[...e.marks]:[],c="media"===e.type.name,u=e=>!0!==this.allowMediaLinking&&c&&"link"===e.type.name;return d.reverse().reduce(((n,r)=>u(r)?n:this.renderMark(en(r),this.withMediaMarkProps(e,r,this.getMarkProps(r,[],e)),`${r.type.name}-${t}`,n)),l)})),(0,a.Z)(this,"withMediaMarkProps",((e,t,n)=>"link"===t.type.name&&"media"===e.type.name?(0,r.Z)((0,r.Z)({},n),{},{isMediaLink:!0}):n)),(0,a.Z)(this,"getUnsupportedContentProps",(e=>({node:e,dispatchAnalyticsEvent:this.fireAnalyticsEvent}))),(0,a.Z)(this,"getAnnotationMarkProps",((e,t)=>{const n=(t||[]).reduce(((e,t)=>Jt(t)?[...e,t.attrs.id]:e),[]);return{id:e.attrs.id,annotationType:e.attrs.annotationType,annotationParentIds:n,allowAnnotations:this.allowAnnotations,dataAttributes:{"data-renderer-mark":!0}}})),(0,a.Z)(this,"getMarkProps",((e,t,n)=>{if(Jt(e))return this.getAnnotationMarkProps(e,t);const o=e.attrs,{key:a}=o,i=(0,S.Z)(o,["key"]),s={isInline:null==n?void 0:n.isInline},l=(e=>e&&e.type&&"code"===e.type.name)(e)?{codeBidiWarningTooltipEnabled:"mobile"!==this.appearance}:{};return(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({eventHandlers:this.eventHandlers,fireAnalyticsEvent:this.fireAnalyticsEvent,markKey:a},i),s),l),{},{dataAttributes:{"data-renderer-mark":!0}})})),this.providers=e.providers,this.eventHandlers=e.eventHandlers,this.extensionHandlers=e.extensionHandlers,this.portal=e.portal,this.rendererContext=e.objectContext,this.appearance=e.appearance,this.disableHeadingIDs=e.disableHeadingIDs,this.disableActions=e.disableActions,this.allowHeadingAnchorLinks=e.allowHeadingAnchorLinks,this.allowCopyToClipboard=e.allowCopyToClipboard,this.allowPlaceholderText=e.allowPlaceholderText,this.allowCustomPanels=e.allowCustomPanels,this.allowColumnSorting=e.allowColumnSorting,this.fireAnalyticsEvent=e.fireAnalyticsEvent,this.shouldOpenMediaViewer=e.shouldOpenMediaViewer,this.allowAltTextOnImages=e.allowAltTextOnImages,this.stickyHeaders=e.stickyHeaders,this.allowMediaLinking=e.allowMediaLinking,this.allowAnnotations=Boolean(e.allowAnnotations),this.surroundTextNodesWithTextWrapper=Boolean(e.surroundTextNodesWithTextWrapper),this.media=e.media,this.emojiResourceConfig=e.emojiResourceConfig,this.smartLinks=e.smartLinks,this.allowSelectAllTrap=e.allowSelectAllTrap,this.nodeComponents=e.nodeComponents,this.allowWindowedCodeBlock=e.allowWindowedCodeBlock}resetState(){this.headingIds=[],this.expandHeadingIds=[],this.startPos=1}getNodeProps(e,t){const n=t?t.path:void 0;switch(e.type.name){case"date":return this.getDateProps(e,t);case"hardBreak":return this.getHardBreakProps(e,n);case"heading":return this.getHeadingProps(e,n);case"media":return this.getMediaProps(e,n);case"emoji":return this.getEmojiProps(e);case"mediaGroup":return this.getMediaGroupProps(e);case"mediaInline":return this.getMediaInlineProps(e);case"mediaSingle":return this.getMediaSingleProps(e,n);case"table":return this.getTableProps(e,n);case"tableHeader":case"tableRow":return this.getTableChildrenProps(e);case"taskItem":return this.getTaskItemProps(e,n);case"embedCard":return this.getEmbedCardProps(e,n);case"expand":return this.getExpandProps(e,n);case"unsupportedBlock":case"unsupportedInline":return this.getUnsupportedContentProps(e);case"codeBlock":return this.getCodeBlockProps(e);case"panel":return this.getPanelProps(e);default:return this.getProps(e,n)}}serializeFragment(e,t={},n=(this.allowSelectAllTrap?Q:Y),r="root-0",o){return"root-0"===r&&this.resetState(),this.renderNode(n,t,r,on.getChildNodes(e).map(((e,t)=>Ct(e)?this.serializeTextWrapper(e.content,{index:t,parentInfo:o}):this.serializeFragmentChild(e,{index:t,parentInfo:o}))))}serializeTextWrapper(e,{index:t,parentInfo:n}){const r=n&&n.path||[],o=n&&n.pos||1;return on.buildMarkStructure(e).map(((e,t)=>this.serializeMark({mark:e,parentNode:{path:r,pos:o},parentMark:{path:[e]}})))}serializeMark({mark:e,parentNode:t,parentMark:n}){if("text"!==e.type.name){const r=(e,r)=>this.serializeMark({mark:e,parentNode:t,parentMark:{path:[...n.path,e]}}),o=(e.content||[]).map(r),a=`${e.type.name}-component__${this.startPos}__${n.path.length}`;return this.renderMark(en(e),this.getMarkProps(e,n.path),a,o)}const r=this.startPos,o=r+e.nodeSize;if(this.startPos=o,this.surroundTextNodesWithTextWrapper){const n=`text-wrapper_${this.startPos}`,a=Math.max(t.path.length-1,0);return i.createElement(Mt,{key:n,startPos:r+a,endPos:o+a},e.text)}return e.text||""}renderNode(e,t,n,r){return i.createElement(e,(0,o.Z)({key:n},t),r)}renderMark(e,t,n,r){return i.createElement(e,(0,o.Z)({key:n},t),r)}getTableChildrenProps(e){return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{allowColumnSorting:this.allowColumnSorting})}getTableProps(e,t=[]){const n=(e=>e.some((e=>"layoutSection"===e.type.name&&(e=>e.marks.some((e=>"breakout"===e.type.name)))(e))))(t)?void 0:this.stickyHeaders;return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{allowColumnSorting:this.allowColumnSorting,columnWidths:(0,ge.gf)(e),tableNode:e,stickyHeaders:n})}getDateProps(e,t){return{timestamp:e.attrs&&e.attrs.timestamp,parentIsIncompleteTask:t&&t.parentIsIncompleteTask}}getMediaSingleProps(e,t=[]){const{nodes:{expand:n,nestedExpand:o,layoutColumn:a},marks:{link:i}}=e.type.schema,s=[n,o,a].filter((e=>Boolean(e))).map((e=>e.name)),l=t&&t.some((e=>e.type&&s.indexOf(e.type.name)>-1)),d=e.firstChild&&e.firstChild.marks.filter((e=>e.type===i||!0===this.allowMediaLinking)).length;return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{isInsideOfBlockNode:l,childHasLink:d,featureFlags:this.media&&this.media.featureFlags})}getMediaProps(e,t=[]){var n;const{marks:{link:o}}=e.type.schema,a=e=>e.type===o;return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{marks:e.marks.filter((e=>!a(e)||!0===this.allowMediaLinking)),isLinkMark:a,allowAltTextOnImages:this.allowAltTextOnImages,featureFlags:this.media&&this.media.featureFlags,shouldOpenMediaViewer:this.shouldOpenMediaViewer,ssr:null===(n=this.media)||void 0===n?void 0:n.ssr})}getEmojiProps(e){return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{resourceConfig:this.emojiResourceConfig})}getEmbedCardProps(e,t=[]){const{nodes:{expand:n,nestedExpand:o,layoutColumn:a}}=e.type.schema,i=[n,o,a].filter((e=>Boolean(e))).map((e=>e.name)),s=t&&t.some((e=>e.type&&i.indexOf(e.type.name)>-1));return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{isInsideOfBlockNode:s})}getMediaGroupProps(e){var t,n;return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{shouldOpenMediaViewer:this.shouldOpenMediaViewer,allowAltTextOnImages:this.allowAltTextOnImages,featureFlags:this.media&&this.media.featureFlags,enableDownloadButton:null===(t=this.media)||void 0===t?void 0:t.enableDownloadButton,ssr:null===(n=this.media)||void 0===n?void 0:n.ssr})}getMediaInlineProps(e){return(0,r.Z)({},this.getProps(e))}getTaskItemProps(e,t=[]){return(0,r.Z)((0,r.Z)({},this.getProps(e,t)),{},{disabled:this.disableActions})}getHardBreakProps(e,t=[]){let n=!1;const o=t.length>0?t[t.length-1]:null;return o&&o.lastChild===e&&(n=!0),(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{forceNewLine:n})}getCodeBlockProps(e){const t="mobile"!==this.appearance;return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{text:e.textContent,codeBidiWarningTooltipEnabled:t})}getPanelProps(e){return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{allowCustomPanels:this.allowCustomPanels})}getProps(e,t=[]){return(0,r.Z)({text:e.text,providers:this.providers,eventHandlers:this.eventHandlers,extensionHandlers:this.extensionHandlers,portal:this.portal,rendererContext:this.rendererContext,serializer:this,content:e.content?e.content.toJSON():void 0,allowHeadingAnchorLinks:this.allowHeadingAnchorLinks,allowCopyToClipboard:this.allowCopyToClipboard,allowPlaceholderText:this.allowPlaceholderText,rendererAppearance:this.appearance,fireAnalyticsEvent:this.fireAnalyticsEvent,nodeType:e.type.name,marks:e.marks,smartLinks:this.smartLinks,dataAttributes:{"data-renderer-start-pos":this.startPos+t.length},path:t},e.attrs)}headingAnchorSupported(e=[]){return _(this.allowHeadingAnchorLinks)||0===e.length||((e,t)=>e.length>0&&e[e.length-1].type.name===t)(e,"layoutColumn")}getHeadingProps(e,t=[]){return(0,r.Z)((0,r.Z)({},this.getProps(e,t)),{},{content:e.content?e.content.toJSON():void 0,headingId:this.getHeadingId(e,this.headingIds),showAnchorLink:"comment"!==this.appearance&&this.allowHeadingAnchorLinks&&!this.disableHeadingIDs&&this.headingAnchorSupported(t)})}getExpandProps(e,t=[]){if(!_(this.allowHeadingAnchorLinks))return this.getProps(e);const n=(0,nn.D0)(e,e.type.schema.nodes.heading).map((({node:e})=>this.getHeadingId(e,this.expandHeadingIds)));return(0,r.Z)((0,r.Z)({},this.getProps(e)),{},{nestedHeaderIds:n})}getHeadingId(e,t){if(this.disableHeadingIDs||!e.content.size)return;const n=e.content.toJSON().reduce(((e,t)=>e.concat((0,Wt.Q)(t)||"")),"").trim().replace(/\s/g,"-");return n?this.getUniqueHeadingId(n,t):void 0}getUniqueHeadingId(e,t,n=0){if(0===n&&-1===t.indexOf(e))return t.push(e),e;if(0!==n){const r=`${e}.${n}`;if(-1===t.indexOf(r))return t.push(r),r}return this.getUniqueHeadingId(e,t,++n)}static getChildNodes(e){const t=[];return e.forEach((e=>{t.push(e)})),t.reduce(((e,t)=>{if(!Nt(t.type.name))return e.push(t),e;if(e.length>0&&Ct(e[e.length-1])){const n=e[e.length-1];n.content.push(t),n.nodeSize+=t.nodeSize}else e.push({type:{name:"textWrapper"},content:[t],nodeSize:t.nodeSize});return e}),[])}static getMarks(e){return e.marks&&0!==e.marks.length?(0,tn.K0)(e.marks):[]}static buildMarkStructure(e){return rn(e.map((e=>{const t=this.getMarks(e);return 0===t.length?e:t.reverse().reduce(((e,t)=>{const{eq:n}=t;return(0,r.Z)((0,r.Z)({},t),{},{eq:n,content:[e]})}),e)})))}static fromSchema(e,t){return new on(t)}}var an=n(211964);const sn=e=>{const{children:t,backgroundColor:n,fadeHeight:r,height:o}=e,a=((e,t,n)=>s.iv`
  position: relative;
  overflow-y: hidden;
  max-height: ${e}px;
  &::after {
    content: '';
    position: absolute;
    top: ${t}px;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(
      ${"var(--ds-background-neutral-subtle, rgba(255, 255, 255, 0))"},
      ${n}
    );
  }
`)(o,o-r,n);return(0,s.tZ)("div",{css:a},t)};class ln extends i.Component{constructor(e){super(e)}render(){const{height:e=95,fadeHeight:t=24,backgroundColor:n="var(--ds-surface, white)",children:r}=this.props;return(0,s.tZ)(sn,{height:e,fadeHeight:t,backgroundColor:n},r)}}function dn(){if("undefined"!=typeof window&&!window.navigator.userAgent.includes("jsdom"))return null;const e=Math.floor(9999990001*Math.random())+9999,t=function(e){return`\n  (function(window){\n    ${cn};\n    (${un.toString()})("${e}", breakoutConsts);\n  })(window);\n`}(e);return i.createElement("script",{"data-breakout-script-id":e,dangerouslySetInnerHTML:{__html:t}})}ln.displayName="TruncatedWrapper";const cn=`\n  var breakoutConsts = ${JSON.stringify(B.Z7)};\n  breakoutConsts.mapBreakpointToLayoutMaxWidth = ${B.Z7.mapBreakpointToLayoutMaxWidth.toString()};\n  breakoutConsts.getBreakpoint = ${B.Z7.getBreakpoint.toString()};\n  breakoutConsts.calcBreakoutWidth = ${B.Z7.calcBreakoutWidth.toString()};\n  breakoutConsts.calcLineLength = ${B.Z7.calcLineLength.toString()};\n  breakoutConsts.calcWideWidth = ${B.Z7.calcWideWidth.toString()};\n`;function un(e,t){const n=["full-width","wide"];function r(e,t){if(e)for(;e.parentElement;){if(t(e))return e.parentElement;e=e.parentElement}}const o=r(document.querySelector('[data-breakout-script-id="'+e+'"]'),(e=>{var t;return!(null===(t=e.parentElement)||void 0===t||!t.classList.contains("ak-renderer-wrapper"))}));if(!o)return;const a=new MutationObserver((e=>{e.forEach((e=>{e.target.nodeType===Node.ELEMENT_NODE&&(e.target.classList.contains("ak-renderer-document")?e.addedNodes.forEach((e=>{const r=e,a=r.dataset.mode||r.dataset.layout||"";if(!a||!n.includes(a))return;const i=t.calcBreakoutWidth(a,o.offsetWidth);if(r.style.width!==i&&(r.style.width=i,r.classList.contains("pm-table-container"))){const e=t.calcLineLength()/2-parseInt(i)/2;e<0&&(r.style.left=e+"px")}})):"mediaSingle"===e.target.dataset.nodeType&&i(e.target))}))})),i=e=>{if(e.style.width)return;if(r(e,(e=>e instanceof HTMLTableCellElement)))return;const t=e.dataset.mode||e.dataset.layout||"",o=e.dataset.width;n.includes(t)?e.style.width="100%":o&&(e.style.width=`${o}%`)};a.observe(o,{childList:!0,subtree:!0});const s=()=>{a.disconnect(),window.removeEventListener("load",s)};window.addEventListener("load",s)}B.Z7.calcLineLength;var hn=n(927831),pn=n(377);const mn=e=>{const t=(0,i.useContext)(Tt),n=(0,i.useContext)(hn.En),r=t&&t.inlineComment,o=(e=>{const[t,n]=(0,i.useState)(null),{updateSubscriber:r,createAnalyticsEvent:o}=e;return(0,i.useLayoutEffect)((()=>{if(!r)return;const e=({annotationIds:e,eventTarget:t})=>{const r=e.filter((e=>!!e)).map((e=>({id:e,type:jt.j9.INLINE_COMMENT})));o&&o({action:G.om.VIEWED,actionSubject:G.Wt.ANNOTATION,actionSubjectId:G.VJ.INLINE_COMMENT,eventType:G.Ze.TRACK,attributes:{overlap:r.length||0}}).fire(T.XD.editor),n({annotations:r,clickElementTarget:t})};return r.on(Xt.ON_ANNOTATION_CLICK,e),()=>{r.off(Xt.ON_ANNOTATION_CLICK,e)}}),[r,o]),t})({updateSubscriber:r&&r.updateSubscriber||null,createAnalyticsEvent:e.createAnalyticsEvent}),a=r&&r.viewComponent,s=(0,i.useMemo)((()=>e=>n.deleteAnnotation(e.id,e.type)),[n]);if(a&&o){const{annotations:e,clickElementTarget:t}=o;return i.createElement(a,{annotations:e,clickElementTarget:t,deleteAnnotation:s})}return null},fn=e=>{const{rendererRef:t}=e,[n,r]=(0,i.useState)(null),o=!!(0,i.useContext)(At);(0,i.useEffect)((()=>{const{current:e}=t;if(!document||!e)return;const n=t=>{const n=document.getSelection();if(!n||"Range"!==n.type||1!==n.rangeCount||o)return;const a=n.getRangeAt(0);((e,t)=>{const n=document.createRange();n.selectNode(e);const r=1===t.compareBoundaryPoints(Range.START_TO_START,n),o=1===t.compareBoundaryPoints(Range.START_TO_END,n),a=1===t.compareBoundaryPoints(Range.END_TO_END,n);return r&&o&&!a})(e,a)&&r(a.cloneRange())};return document.addEventListener("selectionchange",n),()=>{document.removeEventListener("selectionchange",n)}}),[t,n,o]);return[n,(0,i.useCallback)((()=>{r(null)}),[])]},gn=i.memo((e=>{const{component:t,range:n,isAnnotationAllowed:r,wrapperDOM:o,onClose:a,clearAnnotationDraft:s,applyAnnotationDraftAt:l,documentPosition:d,applyAnnotation:c,createAnalyticsEvent:u,generateIndexMatch:h}=e,[p,m]=(0,i.useState)(),f=(0,i.useContext)(hn.En),g=(0,i.useCallback)((e=>{if(!r||!d||!c)return!1;const t={annotationId:e,annotationType:jt.j9.INLINE_COMMENT};return u&&u({action:G.om.INSERTED,actionSubject:G.Wt.ANNOTATION,actionSubjectId:G.VJ.INLINE_COMMENT,attributes:{},eventType:G.Ze.TRACK}).fire(T.XD.editor),c(p||d,t)}),[r,d,c,p,u]),E=(0,i.useCallback)((()=>{if(!d||!h)return!1;const e=h(d);return e||!1}),[d,h]),b=(0,i.useCallback)(((e=!0)=>{if(d&&r){if(m(d),l(d),u){const e=f.getAnnotationsByPosition(n);u({action:G.om.OPENED,actionSubject:G.Wt.ANNOTATION,actionSubjectId:G.VJ.INLINE_COMMENT,eventType:G.Ze.TRACK,attributes:{overlap:e.length}}).fire(T.XD.editor)}window.requestAnimationFrame((()=>{if(e)St(d);else{const e=window.getSelection();e&&e.removeAllRanges()}}))}else u&&u({action:G.om.CREATE_NOT_ALLOWED,actionSubject:G.Wt.ANNOTATION,actionSubjectId:G.VJ.INLINE_COMMENT,attributes:{},eventType:G.Ze.TRACK}).fire(T.XD.editor)}),[d,r,l,u,f,n]),v=(0,i.useCallback)((()=>{s(),m(null);const e=window.getSelection();e&&e.removeAllRanges()}),[s]),y=(0,i.useCallback)((()=>{u&&u({action:G.om.CLOSED,actionSubject:G.Wt.ANNOTATION,actionSubjectId:G.VJ.INLINE_COMMENT,eventType:G.Ze.TRACK,attributes:{}}).fire(T.XD.editor),v(),a()}),[a,v,u]);return i.createElement(t,{range:n,wrapperDOM:o.current,isAnnotationAllowed:r,onClose:y,onCreate:g,getAnnotationIndexMatch:E,applyDraftMode:b,removeDraftMode:v})})),En=e=>{const{selectionComponent:t,rendererRef:n,applyAnnotationDraftAt:r,clearAnnotationDraft:o,createAnalyticsEvent:a}=e,s=(0,i.useContext)(hn.En),[l,d]=fn({rendererRef:n});if(!l)return null;const c=s.getPositionFromRange(l),u=c&&s.isValidAnnotationPosition(c);return i.createElement(gn,{range:l,wrapperDOM:n,component:t,onClose:d,documentPosition:c,isAnnotationAllowed:u,applyAnnotation:s.applyAnnotation.bind(s),applyAnnotationDraftAt:r,generateIndexMatch:s.generateAnnotationIndexMatch.bind(s),clearAnnotationDraft:o,createAnalyticsEvent:a})},bn=e=>{const t=(0,i.useContext)(Tt),{rendererRef:n,createAnalyticsEvent:r,children:o}=e,a=t&&t.inlineComment,s=a&&a.selectionComponent,l=(0,i.useCallback)((({applyAnnotationDraftAt:e,clearAnnotationDraft:t})=>i.createElement(i.Fragment,null,o,i.createElement(En,{createAnalyticsEvent:r,rendererRef:n,selectionComponent:s,applyAnnotationDraftAt:e,clearAnnotationDraft:t}))),[s,o,n,r]);return s?i.createElement(Rt,null,l):i.createElement(i.Fragment,null,o)};var vn=n(621070);const yn=i.memo((({adfDocument:e})=>((({adfDocument:e})=>{const t=(0,i.useContext)(hn.En),n=(0,i.useContext)(Tt);(0,i.useEffect)((()=>{if(!n)return;const{inlineComment:{getState:e,updateSubscriber:o}}=n,a=t.getAnnotationMarks();a.length&&e(a.map((e=>e.attrs.id))).then((e=>{if(!o)return;const t=e.reduce(((e,t)=>(0,r.Z)((0,r.Z)({},e),{},{[t.id]:t})),{});o.emit(Xt.SET_ANNOTATION_STATE,t)}))}),[t,n,e])})({adfDocument:e}),null))),Nn=e=>{const{children:t,annotationProvider:n,rendererRef:o,adfDocument:a}=e,s=n&&n.inlineComment&&n.inlineComment.updateSubscriber,l=(({type:e,updateSubscriber:t})=>{const[n,o]=(0,i.useState)({});return(0,i.useLayoutEffect)((()=>{if(!t)return;const a=t=>{if(!t)return;const a=Object.values(t).reduce(((t,o)=>{if(o.id&&o.annotationType===e){const e=null===o.state||void 0===o.state;return(0,r.Z)((0,r.Z)({},t),{},{[o.id]:e?n[o.id]:o.state})}return t}),{});o((0,r.Z)((0,r.Z)({},n),a))};return t.on(Xt.SET_ANNOTATION_STATE,a),()=>{t.off(Xt.SET_ANNOTATION_STATE,a)}}),[n,e,t]),n})({type:jt.j9.INLINE_COMMENT,updateSubscriber:s||null}),{createAnalyticsEvent:d}=(0,vn._)();return i.createElement(Tt.Provider,{value:n},i.createElement(kt.Provider,{value:l},i.createElement(bn,{createAnalyticsEvent:d,rendererRef:o},i.createElement(yn,{adfDocument:a}),i.createElement(mn,{createAnalyticsEvent:d}),t)))};var Cn=n(110724),wn=n(259619);function An(e){return"href"in e&&null!=e.href||(!!e.classList.contains(wn._)||!!e.classList.contains(Cn.n))}var Tn=n(403110);class kn extends i.Component{constructor(...e){super(...e),(0,a.Z)(this,"state",{errorCaptured:!1})}fireAnalyticsEvent(e){const{createAnalyticsEvent:t}=this.props;if(t){const n=T.XD.editor;t(e).fire(n)}}hasFallback(){return void 0!==this.props.fallbackComponent}shouldRecover(){return this.hasFallback()&&this.state.errorCaptured}componentDidCatch(e,t){this.fireAnalyticsEvent({action:G.om.CRASHED,actionSubject:this.props.component,actionSubjectId:this.props.componentId,eventType:G.Ze.OPERATIONAL,attributes:{platform:Ie.iw.WEB,errorMessage:null==e?void 0:e.message,errorStack:null==e?void 0:e.stack,componentStack:null==t?void 0:t.componentStack,errorRethrown:Boolean(this.props.rethrowError)}}),this.hasFallback()&&this.setState({errorCaptured:!0},(()=>{if(this.props.rethrowError)throw e}))}render(){return this.shouldRecover()?this.props.fallbackComponent:this.props.children}}kn.displayName="ErrorBoundary";var Rn=n(26011),On=n.n(Rn),Sn=n(849764);function xn(e){const t=(0,i.useMemo)((()=>On()(e.handleAnalyticsEvent,500)),[e.handleAnalyticsEvent]);return(0,Sn.n)({onRender:({renderCount:n,propsDifference:r,componentId:o})=>{n&&t({action:e.action,actionSubject:e.actionSubject,attributes:{count:n,propsDifference:r,componentId:o},eventType:G.Ze.OPERATIONAL})},propsDiffingOptions:{enabled:!0,props:e.componentProps,propsToIgnore:e.propsToIgnore,useShallow:e.useShallow},zeroBasedCount:!0}),null}class _n extends i.PureComponent{constructor(e){super(e),(0,a.Z)(this,"renderedMeasurementDistortedDurationMonitor",(0,g.W)()),(0,a.Z)(this,"featureFlags",(0,M.Z)((e=>({featureFlags:(0,w.I)(e,{objectFlagKeys:["rendererRenderTracking"]})})))),(0,a.Z)(this,"fireAnalyticsEvent",(e=>{const{createAnalyticsEvent:t}=this.props;if(t){const n=T.XD.editor;t(e).fire(n)}})),(0,a.Z)(this,"getSchema",(0,M.Z)(((e,t)=>e||(0,l.kp)(t)))),(0,a.Z)(this,"onMouseDownEditView",(()=>{const e=window.getSelection();this.mouseDownSelection=null!==e?e.toString():void 0})),(0,a.Z)(this,"handleMouseTripleClickInTables",(e=>{var t,n;if(E.Z.ios||E.Z.android)return;const r=E.Z.chrome||E.Z.safari,o=e.detail>=3;if(!r||!o)return;const a=window.getSelection();if(!a)return;const{type:i,anchorNode:s,focusNode:l}=a;if(!Boolean("Range"===i&&s&&l))return;const d=e.target.closest("td,th");if(!Boolean(d))return;const c=d.contains(s),u=d.contains(l);if(!!(c&&u))return;const h=c?null===(t=s.parentElement)||void 0===t?void 0:t.closest("div,p"):u?null===(n=l.parentElement)||void 0===n?void 0:n.closest("div,p"):d;h&&a.selectAllChildren(h)})),this.providerFactory=e.dataProviders||new c.Z,this.serializer=new on(this.deriveSerializerProps(e)),this.editorRef=e.innerRef||i.createRef(),this.id=O()(),(0,b.MZ)(`Renderer Render Time: ${this.id}`);const t=this.featureFlags(this.props.featureFlags).featureFlags;null!=t&&t.rendererTtiTracking&&(0,v.Ev)(((e,t,n)=>{this.fireAnalyticsEvent({action:G.om.RENDERER_TTI,actionSubject:G.Wt.RENDERER,attributes:{tti:e,ttiFromInvocation:t,canceled:n},eventType:G.Ze.OPERATIONAL})}))}anchorLinkAnalytics(){const e=window.location.hash&&decodeURIComponent(window.location.hash.slice(1)),{disableHeadingIDs:t}=this.props;if(!t&&e&&this.editorRef&&this.editorRef.current instanceof HTMLElement){const t=document.getElementById(e);t&&this.editorRef.current.contains(t)&&this.fireAnalyticsEvent({action:G.om.VIEWED,actionSubject:G.Wt.ANCHOR_LINK,attributes:{platform:Ie.iw.WEB,mode:Ie.IK.RENDERER},eventType:G.Ze.UI})}}componentDidMount(){this.fireAnalyticsEvent({action:G.om.STARTED,actionSubject:G.Wt.RENDERER,attributes:{platform:Ie.iw.WEB},eventType:G.Ze.UI}),this.rafID=requestAnimationFrame((()=>{(0,b.H0)(`Renderer Render Time: ${this.id}`,(e=>{var t,n;const{analyticsEventSeverityTracking:r}=this.props,o=void 0===r&&(0,y.p)()||null!=r&&r.enabled?(0,N.a$)(e,null!==(t=null==r?void 0:r.severityNormalThreshold)&&void 0!==t?t:2e3,null!==(n=null==r?void 0:r.severityDegradedThreshold)&&void 0!==n?n:3e3):void 0;this.fireAnalyticsEvent({action:G.om.RENDERED,actionSubject:G.Wt.RENDERER,attributes:{platform:Ie.iw.WEB,duration:e,distortedDuration:this.renderedMeasurementDistortedDurationMonitor.distortedDuration,ttfb:(0,C.i)(),nodes:(0,d.u)(this.props.document,((e,t)=>(e[t.type]=(e[t.type]||0)+1,e)),{}),severity:o},eventType:G.Ze.OPERATIONAL}),this.renderedMeasurementDistortedDurationMonitor.cleanup(),delete this.renderedMeasurementDistortedDurationMonitor})),this.anchorLinkAnalytics()}))}UNSAFE_componentWillReceiveProps(e){const t=e.media||{},n=this.props.media||{};e.portal===this.props.portal&&e.appearance===this.props.appearance&&e.stickyHeaders===this.props.stickyHeaders&&e.disableActions===this.props.disableActions&&e.allowCustomPanels===this.props.allowCustomPanels&&e.allowHeadingAnchorLinks===this.props.allowHeadingAnchorLinks&&t.allowLinking===n.allowLinking||(this.serializer=new on(this.deriveSerializerProps(e)))}deriveSerializerProps(e){const t=e.stickyHeaders?!0===e.stickyHeaders?{}:e.stickyHeaders:void 0,{annotationProvider:n}=e,o=Boolean(n&&n.inlineComment&&n.inlineComment.allowDraftMode),{featureFlags:a}=this.featureFlags(e.featureFlags);return{providers:this.providerFactory,eventHandlers:e.eventHandlers,extensionHandlers:e.extensionHandlers,portal:e.portal,objectContext:(0,r.Z)({adDoc:e.document,schema:e.schema},e.rendererContext),appearance:e.appearance,disableHeadingIDs:e.disableHeadingIDs,disableActions:e.disableActions,allowHeadingAnchorLinks:e.allowHeadingAnchorLinks,allowColumnSorting:e.allowColumnSorting,fireAnalyticsEvent:this.fireAnalyticsEvent,shouldOpenMediaViewer:e.shouldOpenMediaViewer,allowAltTextOnImages:e.allowAltTextOnImages,stickyHeaders:t,allowMediaLinking:e.media&&e.media.allowLinking,surroundTextNodesWithTextWrapper:o,media:e.media,emojiResourceConfig:e.emojiResourceConfig,smartLinks:e.smartLinks,allowCopyToClipboard:e.allowCopyToClipboard,allowCustomPanels:e.allowCustomPanels,allowAnnotations:e.allowAnnotations,allowSelectAllTrap:e.allowSelectAllTrap,allowPlaceholderText:e.allowPlaceholderText,nodeComponents:e.nodeComponents,allowWindowedCodeBlock:null==a?void 0:a.allowWindowedCodeBlock}}render(){const{document:e,onComplete:t,onError:n,appearance:r,adfStage:o,truncated:a,maxHeight:l,fadeOutHeight:d,enableSsrInlineScripts:c,allowHeadingAnchorLinks:h,allowPlaceholderText:p,allowColumnSorting:m,allowCopyToClipboard:f,allowCustomPanels:g}=this.props,E=_(h),b=e=>{var t;const n=e.target;if(this.handleMouseTripleClickInTables(e),null===(t=this.props.eventHandlers)||void 0===t||!t.onUnhandledClick)return;if(!(n instanceof window.Element))return;const r=e.currentTarget;if((0,Wt.Z7)(n,r,An))return;const o=window.getSelection(),a=null!==o?o.toString():void 0,i=a&&0!==a.length,s=this.mouseDownSelection&&0!==this.mouseDownSelection.length;!i&&!s&&this.props.eventHandlers.onUnhandledClick(e)};try{var v,y,N;const n=this.getSchema(this.props.schema,this.props.adfStage),{result:u,stat:C,pmDoc:w}=(0,an.D)(e,this.serializer,n,o,this.props.useSpecBasedValidator,this.id,this.fireAnalyticsEvent,this.props.unsupportedContentLevelsTracking,this.props.appearance);t&&t(C);const A=(0,s.tZ)(Tn.X,{value:this.featureFlags(this.props.featureFlags)},(0,s.tZ)(pn.d,{value:I(h)},(0,s.tZ)(X.Provider,{value:{fireAnalyticsEvent:e=>this.fireAnalyticsEvent(e)}},(0,s.tZ)(We.zt,null,(0,s.tZ)(Ln,{appearance:r,allowNestedHeaderLinks:E,allowColumnSorting:m,allowCopyToClipboard:f,allowCustomPanels:g,allowPlaceholderText:p,innerRef:this.editorRef,onClick:b,onMouseDown:this.onMouseDownEditView},c?(0,s.tZ)(dn,null):null,(0,s.tZ)(Zn,{doc:w,schema:n,onAnalyticsEvent:this.fireAnalyticsEvent},u))))));let T=a?(0,s.tZ)(ln,{height:l,fadeHeight:d},A):A;const k=null===(v=this.featureFlags(this.props.featureFlags))||void 0===v||null===(y=v.featureFlags)||void 0===y||null===(N=y.rendererRenderTracking)||void 0===N?void 0:N[G.Wt.RENDERER],R=(null==k?void 0:k.enabled)&&(0,s.tZ)(xn,{componentProps:this.props,action:G.om.RE_RENDERED,actionSubject:G.Wt.RENDERER,handleAnalyticsEvent:this.fireAnalyticsEvent,useShallow:k.useShallow});return(0,s.tZ)(i.Fragment,null,R,T)}catch(C){return n&&n(C),(0,s.tZ)(Ln,{appearance:r,allowCopyToClipboard:f,allowPlaceholderText:p,allowColumnSorting:m,allowNestedHeaderLinks:E,onClick:b},(0,s.tZ)(u.Z,null))}}componentWillUnmount(){const{dataProviders:e}=this.props;this.rafID&&window.cancelAnimationFrame(this.rafID),e||this.providerFactory.destroy()}}_n.displayName="Renderer";const In=i.memo((e=>(0,s.tZ)(k.oF,{data:{appearance:(0,N.$L)(e.appearance),packageName:"@atlaskit/renderer",packageVersion:"106.0.0",componentName:"renderer",editorSessionId:O()()}},(0,s.tZ)(h.O,{render:t=>(0,s.tZ)(kn,{component:G.Wt.RENDERER,rethrowError:!0,fallbackComponent:null,createAnalyticsEvent:t},(0,s.tZ)(p.G,null,(0,s.tZ)(_n,(0,o.Z)({},e,{createAnalyticsEvent:t}))))})))),Ln=i.memo((e=>{const{allowColumnSorting:t,allowNestedHeaderLinks:n,innerRef:r,appearance:o,children:a,onClick:i,onMouseDown:l}=e;return(0,s.tZ)(m.iF,{className:"ak-renderer-wrapper"},(0,s.tZ)(f.Yu,{baseFontSize:o&&"comment"!==o?A.Qd:void 0},(0,s.tZ)("div",{ref:r,onClick:i,onMouseDown:l,css:(0,ve.ze)({appearance:o,allowNestedHeaderLinks:n,allowColumnSorting:!!t})},a)))}));function Zn({children:e,doc:t,schema:n,onAnalyticsEvent:r}){const o=(0,i.useContext)(hn.En),a=(0,i.useRef)(null);return(0,i.useLayoutEffect)((()=>(t?o._privateRegisterRenderer(a,t,n,r):o._privateUnregisterRenderer(),()=>o._privateUnregisterRenderer())),[o,n,t,r]),e}const Mn=e=>{const{allowAnnotations:t,document:n}=e,r=i.useRef(null),a=e.innerRef||r;return t?(0,s.tZ)(hn.DF,null,(0,s.tZ)(Nn,{rendererRef:a,adfDocument:n,annotationProvider:e.annotationProvider},(0,s.tZ)(In,(0,o.Z)({innerRef:a},e,{featureFlags:e.featureFlags})))):(0,s.tZ)(In,(0,o.Z)({innerRef:a},e))}},523326:(e,t,n)=>{n.d(t,{zA:()=>L,ze:()=>P});var r=n(321534),o=n(479517),a=n(676424),i=n(131436),s=n(171945),l=n(135750),d=n(246847),c=n(542117),u=n(153624),h=n(839575),p=n(704954),m=n(670317),f=n(411014),g=n(94428),E=n(558338),b=n(751120),v=n(246102),y=n(369585),N=n(492503),C=n(572530),w=n(661700),A=n(454425),T=n(131934),k=n(269337),R=n(502094),O=n(404510),S=n(628347),x=n(780966),_=n(818006),I=n(435390);const L=32,Z=e=>s.$G[e].lineHeight/s.$G[e].size,M={h1:{lineHeight:Z("h700")},h2:{lineHeight:Z("h600")},h3:{lineHeight:Z("h500")},h4:{lineHeight:Z("h400")},h5:{lineHeight:Z("h300")},h6:{lineHeight:Z("h100")}},$=e=>r.iv`
    /**
     * The copy link button doesn't reserve space in the DOM so that
     * the text alignment isn't impacted by the button/icon's space.
     */
    .${x.n} {
      position: absolute;
      height: ${M[e].lineHeight}em;

      margin-left: 6px;

      button {
        padding-left: 0;
        padding-right: 0;
      }
    }

    /**
     * Applies hover effects to the heading anchor link button
     * to fade in when the user rolls over the heading.
     *
     * The link is persistent on mobile, so we use feature detection
     * to enable hover effects for systems that support it (desktop).
     *
     * @see https://caniuse.com/mdn-css_at-rules_media_hover
     */
    @media (hover: hover) and (pointer: fine) {
      .${x.n} {
        > button {
          opacity: 0;
          transform: translate(-8px, 0px);
          transition: opacity 0.2s ease 0s, transform 0.2s ease 0s;
        }
      }

      &:hover {
        .${x.n} > button {
          opacity: 1;
          transform: none !important;
        }
      }
    }
  `,P=e=>t=>{const n={theme:t};return r.iv`
      font-size: ${(0,O.pV)(n)}px;
      line-height: 1.5rem;
      color: ${(0,o.Z)({light:`var(--ds-text, ${i.q2})`,dark:"var(--ds-text, #B8C7E0)"})(n)};

      .${S.y.DOCUMENT}::after {
        // we add a clearfix after ak-renderer-document in order to
        // contain internal floats (such as media images that are "wrap-left")
        // to just the renderer (and not spill outside of it)
        content: '';
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
      }

      ${(({appearance:e},{theme:t})=>"full-page"!==e&&"mobile"!==e?"":r.iv`
    max-width: ${t&&t.layoutMaxWidth?`${t.layoutMaxWidth}px`:"none"};
    margin: 0 auto;
    padding: 0 ${"full-page"===e?L:0}px;
  `)(e,n)}
      ${(({appearance:e})=>"full-width"!==e?"":r.iv`
    max-width: ${O.zJ}px;
    margin: 0 auto;

    .fabric-editor-breakout-mark,
    .pm-table-container,
    .ak-renderer-extension {
      width: 100% !important;
    }
  `)(e)}

    & h1 {
        ${$("h1")}
      }

      & h2 {
        ${$("h2")}
      }

      & h3 {
        ${$("h3")}
      }

      & h4 {
        ${$("h4")}
      }

      & h5 {
        ${$("h5")}
      }

      & h6 {
        ${$("h6")}
      }

      & span.akActionMark {
        color: ${`var(--ds-link, ${i.AX})`};
        text-decoration: none;

        &:hover {
          color: ${`var(--ds-link, ${i.M5})`};
          text-decoration: underline;
        }

        &:active {
          color: ${`var(--ds-link-pressed, ${i.YC})`};
        }
      }

      & span.akActionMark {
        cursor: pointer;
      }

      & span[data-placeholder] {
        color: ${i.PB(n)};
      }

      ${d.u};
      ${c.V};
      ${(0,u.E)(n)};
      ${(0,h.x)(n)};
      ${p.o};
      ${m.Xo};
      ${f.x};
      ${g.U};
      ${(0,E.V)(n)};
      ${b.B};
      ${v.B};
      ${y.E};
      ${N.L};
      ${C.U}

      & .UnknownBlock {
        font-family: ${(0,a.I8)()};
        font-size: ${(0,O.Gh)((0,a.JB)())};
        font-weight: 400;
        white-space: pre-wrap;
        word-wrap: break-word;
      }

      & span.date-node {
        background: ${(0,o.Z)({light:`var(--ds-background-neutral, ${i.kd})`,dark:`var(--ds-background-neutral, ${i.nA})`})(n)};
        border-radius: ${(0,a.E0)()}px;
        color: ${(0,o.Z)({light:`var(--ds-text, ${i.q2})`,dark:`var(--ds-text, ${i.ly})`})(n)};
        padding: 2px 4px;
        margin: 0 1px;
        transition: background 0.3s;
      }

      & span.date-node-highlighted {
        background: ${`var(--ds-background-danger, ${i.r6})`};
        color: ${`var(--ds-text-danger, ${i.gR})`};
      }

      & .renderer-image {
        max-width: 100%;
        display: block;
        margin: ${3*(0,a.ww)()}px 0;
      }

      .${w.I}.rich-media-wrapped
        + .${w.I}:not(.rich-media-wrapped) {
        clear: both;
      }

      & .code-block,
      & blockquote,
      & hr,
      & > div > div:not(.rich-media-wrapped),
      .${w.I}.rich-media-wrapped
        + .rich-media-wrapped
        + *:not(.rich-media-wrapped),
      .${w.I}.rich-media-wrapped + div:not(.rich-media-wrapped),
      .${w.I}.image-align-start,
        .${w.I}.image-center,
        .${w.I}.image-align-end {
        clear: both;
      }

      & .rich-media-wrapped {
        & + h1,
        & + h2,
        & + h3,
        & + h4,
        & + h5,
        & + h6 {
          margin-top: 8px;
        }
      }

      ${(({allowNestedHeaderLinks:e})=>e?r.iv`
    .fabric-editor-block-mark[data-align] > {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        position: relative;
      }
    }

    /**
     * For right-alignment we flip the link to be before the heading
     * text so that the text is flush up against the edge of the editor's
     * container edge.
     */
    .fabric-editor-block-mark:not([data-align='center'])[data-align] {
      > {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          // Using right to left text to achieve the inverse effect
          // of where the copy link button icon sits for left/center
          // alignment.
          // Although this is unorthodox it's the only approach which
          // allows the button to sit flush against the left edge of
          // bottom line of text.
          direction: rtl;

          // By default RTL will negatively impact the layout of special
          // characters within the heading text, and potentially other
          // nested inline nodes. To prevent this we insert pseudo elements
          // containing HTML entities to retain LTR for all heading content
          // except for the copy link button.
          > *:not(.${x.n}):not(br) {
            ::before {
              // Open LTR: https://www.fileformat.info/info/unicode/char/202a/index.htm
              content: '\u202A';
            }
            ::after {
              // Close LTR: https://www.fileformat.info/info/unicode/char/202c/index.htm
              content: '\u202C';
            }
          }
        }
      }
      .${x.n} {
        margin: 0 6px 0 0;
      }

      @media (hover: hover) and (pointer: fine) {
        .${x.n} > button {
          transform: translate(8px, 0px);
        }
      }
    }
  `:"")(e)}
      /* plugin styles */
    ${w.G} &
    div[class^='image-wrap-'] + div[class^='image-wrap-'] {
        margin-left: 0;
        margin-right: 0;
      }

      /* Breakout for tables and extensions */
      .${S.y.DOCUMENT} > {
        * .${l.Up.TABLE_CONTAINER} {
          width: 100% !important;
          left: 0 !important;
        }

        * .${S.y.EXTENSION_OVERFLOW_CONTAINER} {
          overflow-x: auto;
        }

        & .${S.y.EXTENSION}:first-child {
          margin-top: 0;
        }
      }

      .${S.y.DOCUMENT} {
        .${S.y.EXTENSION} {
          margin-top: ${O.zH};
        }

        .${S.y.EXTENSION_CENTER_ALIGN} {
          margin-left: 50%;
          transform: translateX(-50%);
        }

        .${l.Up.TABLE_NODE_WRAPPER} {
          overflow-x: auto;
        }

        .${_.S4.SHADOW_CONTAINER}
          .${l.Up.TABLE_NODE_WRAPPER} {
          display: flex;
        }
      }

      ${(0,l.nP)(n)}

      .${S.y.DOCUMENT} .${l.Up.TABLE_CONTAINER} {
        z-index: 0;
        transition: all 0.1s linear;
        display: flex; /* needed to avoid position: fixed jumpiness in Chrome */

        /** Shadow overrides */
        &.${k.$.RIGHT_SHADOW}::after,
          &.${k.$.LEFT_SHADOW}::before {
          top: ${l.MZ-1}px;
          height: calc(100% - ${l.MZ}px);
          z-index: ${O.r0};
        }

        &
          .${_.S4.SENTINEL_LEFT},
          &
          .${_.S4.SENTINEL_RIGHT} {
          height: calc(100% - ${l.MZ}px);
        }

        /**
     * A hack for making all the <th /> heights equal in case some have shorter
     * content than others.
     *
     * This is done to make sort buttons fill entire <th />.
     */
        table {
          height: 1px; /* will be ignored */
          ${(({allowColumnSorting:e,allowNestedHeaderLinks:t})=>{if(!e)return"";let n="";return t&&(n=`\n      /**\n       * When the sort button is enabled we want the heading's copy link button\n       * to reserve space so that it can prematurely wrap to avoid the button\n       * being displayed underneath the sort button (hidden or obscured).\n       *\n       * The two buttons fight each other since the sort button is displayed\n       * on hover of the <th /> and the copy link button is displayed on hover\n       * of the heading.\n       *\n       * Note that this can break the WYSIWYG experience in the case where\n       * a heading fills the width of the table cell and the only thing which\n       * wraps is the copy link button. This is hopefully a rare fringe case.\n       */\n      .${x.n} {\n        position: unset;\n      }\n      > {\n        h1, h2, h3, h4, h5, h6 {\n          margin-right: 30px;\n        }\n      }\n    `),r.iv`
    .${S.y.SORTABLE_COLUMN_WRAPPER} {
      padding: 0;

      .${S.y.SORTABLE_COLUMN} {
        width: 100%;
        height: 100%;
        padding: ${l.uq}px;
        border-width: 1.5px;
        border-style: solid;
        border-color: transparent;

        > *:first-child {
          margin-top: 0;
        }

        > .ProseMirror-gapcursor:first-child + *,
        > style:first-child + .ProseMirror-gapcursor + * {
          margin-top: 0;
        }

        > .ProseMirror-gapcursor:first-child + span + *,
        > style:first-child + .ProseMirror-gapcursor + span + * {
          margin-top: 0;
        }

        @supports selector(:focus-visible) {
          &:focus {
            outline: unset;
          }
          &:focus-visible {
            border-color: ${`var(--ds-border-focused, ${i.M5})`};
          }
        }

        ${n}
      }

      .${S.y.SORTABLE_COLUMN_ICON_WRAPPER} {
        margin: 0;
        .${S.y.SORTABLE_COLUMN_ICON} {
          opacity: 1;
          transition: opacity 0.2s ease-in-out;
        }
      }

      .${S.y.SORTABLE_COLUMN_NO_ORDER} {
        .${S.y.SORTABLE_COLUMN_ICON} {
          opacity: 0;
          &:focus {
            opacity: 1;
          }
        }
      }

      &:hover {
        .${S.y.SORTABLE_COLUMN_NO_ORDER} {
          .${S.y.SORTABLE_COLUMN_ICON} {
            opacity: 1;
          }
        }
      }
    }
  `})(e)};
          margin-left: 0;
          margin-right: 0;
        }

        table tr:first-of-type {
          height: 100%;

          td,
          th {
            position: relative;
          }
        }

        table[data-number-column='true'] {
          .${S.y.NUMBER_COLUMN} {
            background-color: ${(0,o.Z)({light:`var(--ds-background-neutral, ${O.Zs})`,dark:`var(--ds-background-neutral, ${O.SX})`})(n)};
            border-right: 1px solid
              ${(0,o.Z)({light:`var(--ds-border, ${O.aX})`,dark:`var(--ds-border, ${O.Q9})`})(n)};
            width: ${O.XV}px;
            text-align: center;
            color: ${(0,o.Z)({light:`var(--ds-text-subtlest, ${i.iw})`,dark:`var(--ds-text-subtlest, ${i.oe})`})(n)};
            font-size: ${(0,O.Gh)((0,a.JB)())};
          }

          .fixed .${S.y.NUMBER_COLUMN} {
            border-right: 0px none;
          }
        }
      }

      tr[data-header-row].fixed {
        position: fixed !important;
        display: flex;
        overflow: hidden;
        z-index: ${O.r0};

        border-right: 1px solid
          ${(0,o.Z)({light:`var(--ds-border, ${O.aX})`,dark:`var(--ds-border, ${O.Q9})`})(n)};
        border-bottom: 1px solid
          ${(0,o.Z)({light:`var(--ds-border, ${O.aX})`,dark:`var(--ds-border, ${O.Q9})`})(n)};

        /* this is to compensate for the table border */
        transform: translateX(-1px);
      }

      .sticky > th {
        z-index: ${O.r0};
        position: sticky !important;
        top: 0;
      }

      /* Make the number column header sticky */
      .sticky > td {
        position: sticky !important;
        top: 0;
      }

      /* add border for position: sticky
     and work around background-clip: padding-box
     bug for FF causing box-shadow bug in Chrome */
      .sticky th,
      .sticky td {
        box-shadow: 0px 1px
            ${(0,o.Z)({light:`var(--ds-border, ${O.aX})`,dark:`var(--ds-border, ${O.Q9})`})(n)},
          0px -0.5px ${(0,o.Z)({light:`var(--ds-border, ${O.aX})`,dark:`var(--ds-border, ${O.Q9})`})(n)},
          inset -1px 0px ${(0,o.Z)({light:`var(--ds-border, ${O.Zs})`,dark:`var(--ds-border, ${O.SX})`})(n)},
          0px -1px ${(0,o.Z)({light:`var(--ds-border, ${O.Zs})`,dark:`var(--ds-border, ${O.SX})`})(n)};
      }

      /* this will remove jumpiness caused in Chrome for sticky headers */
      .fixed + tr {
        min-height: 0px;
      }

      /*
   * We wrap CodeBlock in a grid to prevent it from overflowing the container of the renderer.
   * See ED-4159.
   */
      & .code-block {
        max-width: 100%;
        /* -ms- properties are necessary until MS supports the latest version of the grid spec */
        /* stylelint-disable value-no-vendor-prefix, declaration-block-no-duplicate-properties */
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: auto 1fr;
        /* stylelint-enable */

        grid-template-columns: minmax(0, 1fr);
        position: relative;
        border-radius: ${(0,a.E0)()}px;

        /*
     * The overall renderer has word-wrap: break; which causes issues with
     * code block line numbers in Safari / iOS.
     */
        word-wrap: normal;

        & > span {
          /* stylelint-disable value-no-vendor-prefix */
          -ms-grid-row: 1;
          -ms-grid-column: 2;
          /* stylelint-enable */
          grid-column: 1;
        }
      }

      & .MediaGroup,
      & .code-block {
        margin-top: ${O.zH};

        &:first-child {
          margin-top: 0;
        }

        &:hover button.copy-to-clipboard,
        .copy-to-clipboard:focus {
          opacity: 1;
          position: absolute;
          height: 32px;
          width: 32px;
          right: 6px;
          top: 4px;
          padding: 2px;
        }
      }

      ${(0,I.AF)()}

      ${A.D};
      & [data-layout-section] {
        margin-top: ${2.5*(0,a.ww)()}px;
        & > div + div {
          margin-left: ${4*(0,a.ww)()}px;
        }

        @media screen and (max-width: ${O.Kv}px) {
          & > div + div {
            margin-left: 0;
          }
        }
      }

      & li {
        > .code-block {
          margin: ${O.zH} 0 0 0;
        }
        > .code-block:first-child {
          margin-top: 0;
        }

        > div:last-of-type.code-block {
          margin-bottom: ${O.zH};
        }
      }

      & :not([data-node-type='decisionList']) > li {
        ${R.Z.safari?T.AG:""}
      }
    `}},927831:(e,t,n)=>{n.d(t,{DF:()=>A,En:()=>w});var r=n(122551),o=n(29298),a=n(672815),i=n(604164),s=n(841540),l=n(610930);function d(e){return parseInt(e.dataset.rendererStartPos||"-1",10)}function c(e){return d(e)>-1}function u(e){const{parentElement:t}=e;return!t||g(t)?null:c(t)?t:u(t)}function h(e){const{parentElement:t}=e;return g(t)||!t?null:c(t)?e:h(t)}function p(e){return e.nodeType===Node.TEXT_NODE}function m(e){return function(e){return e.nodeType===Node.ELEMENT_NODE}(e)&&Boolean(e.dataset.rendererMark)}function f(e){let t=0,n=e.previousSibling;for(;n;)n&&p(n)?t+=(n.textContent||"").length:n&&(m(n)&&n.textContent?t+=n.textContent.length:t+=1),n=n.previousSibling;return t}function g(e){return!!e&&e.classList.contains("ak-renderer-document")}function E(e,t){if(!e)return!1;if(e instanceof HTMLElement&&c(e))return d(e)+t;const n=u(e);if(!n)return!1;let r=d(n),o=e;if(o.parentElement&&o.parentElement!==n){const e=h(o.parentElement);for((a=e)&&Boolean(a.dataset.rendererMark)||(o=o.parentElement,t=0),r+=f(o);o&&o.parentElement!==n;)o=o.parentNode,o&&(r+=f(o))}else r+=f(o);var a;return r+t}function b(e){const{startContainer:t,startOffset:n,endContainer:r,endOffset:o}=e,a=E(t,n),i=E(r,o);return!1!==a&&!1!==i&&{from:a,to:i}}var v=n(959557);function y(e,t,n,r){let o="",a=0;e.descendants(((i,s)=>{if(i.isText||!i.type.allowsMarkType(t.marks.annotation))return!0;const l=s,d=l+i.nodeSize;return r>=l&&r<=d?(o+=e.textBetween(l,r-1),a=N(o,n),o+=e.textBetween(r,d)):o+=i.textContent,!0}));return{numMatches:N(o,n),matchIndex:a,textContent:o}}function N(e,t){if(""===e||""===t)return 0;const n=new RegExp(t.replace(/(?=[.\\+*?[^\]$(){}\|])/g,"\\"),"g");return(e.match(n)||[]).length}class C{constructor(e=!1){(0,o.Z)(this,"initFromContext",!1),this.initFromContext=e,this.transformer=new a.JSONTransformer}_privateRegisterRenderer(e,t,n,r){if(this.initFromContext){if(this.ref){if(this.ref!==e)throw new Error("Renderer has already been registered! It's not allowed to re-register with another new Renderer instance.")}else this.ref=e;this.doc=t,this.schema=n,this.onAnalyticsEvent=r}}_privateUnregisterRenderer(){this.doc=void 0,this.ref=void 0,this.schema=void 0}_privateValidatePositionsForAnnotation(e,t){return!(!this.doc||!this.schema)&&(0,i.h)({from:e,to:t},this.doc,this.schema)}deleteAnnotation(e,t){if(!this.doc||!this.schema||!this.schema.marks.annotation)return!1;const n=this.schema.marks.annotation.create({id:e,annotationType:t});let r,o;if(this.doc.descendants(((e,t)=>{const a=n.isInSet(e.marks);return a&&!r?(r=t,o=t+e.nodeSize):a&&r&&(o=t+e.nodeSize),!0})),void 0===r||void 0===o)return!1;const a=new l.RemoveMarkStep(r,o,n),{doc:i,failed:s}=a.apply(this.doc);if(this.onAnalyticsEvent){const e={action:v.om.DELETED,actionSubject:v.Wt.ANNOTATION,actionSubjectId:v.VJ.INLINE_COMMENT,eventType:v.Ze.TRACK};this.onAnalyticsEvent(e)}return!(s||!i)&&{step:a,doc:this.transformer.encode(i)}}annotate(e,t,n){if(!this.doc||!this.schema||!this.schema.marks.annotation)return!1;const r=b(e);if(!r)return!1;const{from:o,to:a}=r;return!!this._privateValidatePositionsForAnnotation(o,a)&&this.applyAnnotation(r,{annotationId:t,annotationType:s.j9.INLINE_COMMENT})}isValidAnnotationRange(e){const t=b(e);return!(!t||!this.doc)&&this._privateValidatePositionsForAnnotation(t.from,t.to)}isValidAnnotationPosition(e){return!(!e||!this.doc)&&this._privateValidatePositionsForAnnotation(e.from,e.to)}getPositionFromRange(e){return!(!this.doc||!this.schema)&&b(e)}getAnnotationMarks(){const{schema:e,doc:t}=this;if(!e||!t)return[];const{marks:{annotation:n}}=e;if(!n)return[];const r=[];t.descendants((e=>{const t=e.marks.filter((e=>e.type===n));return!t||!t.length||(r.push(...t),!1)}));const o=new Map;return r.forEach((e=>{o.set(e.attrs.id,e)})),Array.from(o.values())}getAnnotationsByPosition(e){if(!this.doc||!this.schema)return[];const t=b(e);return t&&this.doc?(0,i._)(t,this.doc,this.schema):[]}applyAnnotation(e,t){if(!this.doc||!e||!this.schema)return!1;const{from:n,to:r}=e,{annotationId:o,annotationType:a}=t,i=function(e,t,n){return new l.AddMarkStep(Math.min(e,t),Math.max(e,t),n.schema.marks.annotation.create({id:n.annotationId,annotationType:n.annotationType}))}(n,r,{annotationId:o,annotationType:a,schema:this.schema}),{doc:s,failed:d}=i.apply(this.doc);if(d||!s)return!1;const c=s.textBetween(n,r),{numMatches:u,matchIndex:h}=y(this.doc,this.schema,c,n);return{step:i,doc:this.transformer.encode(s),originalSelection:c,numMatches:u,matchIndex:h}}generateAnnotationIndexMatch(e){if(!this.doc||!e||!this.schema)return!1;const{from:t,to:n}=e,r=this.doc.textBetween(t,n),{numMatches:o,matchIndex:a}=y(this.doc,this.schema,r,t);return{originalSelection:r,numMatches:o,matchIndex:a}}}const w=r.createContext(new C);function A({children:e,context:t}){const n=(0,r.useMemo)((()=>new C(!0)),[]);return r.createElement(w.Provider,{value:t||n},r.Children.only(e))}w.Consumer},140034:(e,t,n)=>{n.d(t,{zt:()=>i,Fi:()=>s});var r=n(953307),o=n(122551);const a=o.createContext(new Map),i=function({children:e}){return o.createElement(a.Provider,{value:new Map},e)},s=e=>class extends o.Component{render(){return o.createElement(a.Consumer,null,(t=>o.createElement(e,(0,r.Z)({},this.props,{smartCardStorage:t}))))}}},377:(e,t,n)=>{n.d(t,{d:()=>o,r:()=>i});var r=n(122551);const{Provider:o,Consumer:a}=r.createContext(void 0),i=({nestedHeaderIds:e,onNestedHeaderIdMatch:t})=>{const[n,o]=(0,r.useState)();return r.createElement(a,null,(r=>(r&&e.includes(r)?r!==n&&e.includes(r)&&(o(r),t()):o(void 0),null)))}},67653:(e,t,n)=>{n.d(t,{g:()=>o});var r=n(403110);const o=()=>{var e;return null===(e=(0,r.q)())||void 0===e?void 0:e.featureFlags}},359398:(e,t,n)=>{n.d(t,{Q:()=>r,XU:()=>o,Xf:()=>a,Z7:()=>i});const r=e=>e.text||e.attrs&&(e.attrs.text||e.attrs.shortName)||`[${"string"==typeof e.type?e.type:e.type.name}]`,o=(e,t,n="onClick")=>e&&t&&e[t]&&e[t][n],a=e=>"mobile"===e?"mobile":"web";function i(e,t,n){return e!==t&&(!!n(e)||!!e.parentElement&&i(e.parentElement,t,n))}}}]);
//# sourceMappingURL=76701.RywBV47ruJ.js.map