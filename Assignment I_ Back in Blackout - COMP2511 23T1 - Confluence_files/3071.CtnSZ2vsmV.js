"use strict";(self._cf=self._cf||[]).push([[3071],{541580:(e,t,n)=>{n.d(t,{i:()=>s,m:()=>l});var o=n(122551);const s=(0,o.createContext)({hasContentChanged:!1,onChange:()=>{},resetContentChanged:()=>{},isCommentContentReady:!1,onCommentContentReady:()=>{}});s.displayName="CommentContentContext";const l=({children:e})=>{const[t,n]=(0,o.useState)(!1),[l,i]=(0,o.useState)(!1);return o.createElement(s.Provider,{value:{hasContentChanged:t,onChange:e=>n(e),resetContentChanged:()=>n(!1),isCommentContentReady:l,onCommentContentReady:()=>i(!0)}},e)};l.displayName="CommentContentProvider"},34868:(e,t,n)=>{n.d(t,{v:()=>o});const o=(0,n(28201).y$)({__loadable_id__:"4bSdP",name:"CommentWarningDialog",loader:async()=>(await Promise.all([n.e(12705),n.e(61769),n.e(78248),n.e(89990),n.e(12953),n.e(41476)]).then(n.bind(n,174863))).CommentWarningDialog})},358372:(e,t,n)=>{n.d(t,{n:()=>i});var o=n(991332),s=n(122551),l=n(772610);const i=()=>{const{getQueryParams:e,setQueryParams:t}=(0,s.useContext)(l.M),{focusedCommentId:n,editComment:i,commentId:a,replyToComment:r,showCommentArea:m}=e(),c=n||void 0,d=i&&"true"===i&&a?a:void 0,C=r||void 0,h="true"===m;return{focusedCommentId:c,editCommentId:d,replyToCommentId:C,shouldOpenNewCommentEditor:h,removeCommentQueryParams:()=>{let n,s;if(c?n="focusedCommentId":C?n="replyToComment":d?(n="editComment",s="commentId"):h&&(n="showCommentArea"),n||s){const l=e();t((0,o.Z)((0,o.Z)({},l),{},{[n]:void 0,[s]:void 0}))}}}}},328446:(e,t,n)=>{n.d(t,{l:()=>a});var o=n(991332),s=n(29298),l=n(122551),i=n(507080);class a extends i.W2{constructor(e=[]){super(),(0,s.Z)(this,"nextKey",void 0),(0,s.Z)(this,"showModal",((e,t,n)=>{this.showDialog(e,t,n)})),(0,s.Z)(this,"showDialog",((e,t,n)=>{const s=this.nextKey,i=t||{};this.nextKey++;const a=l.createElement(e,(0,o.Z)((0,o.Z)({},i),{},{onClose:(...e)=>this.onChildClose(s,...e),onCloseComplete:(...e)=>this.onChildCloseComplete(s,...e)}),n);return this.setState((e=>({stack:[...e.stack,{key:s,component:a,alive:!0,originalProps:{onClose:"onClose"in i?i.onClose:void 0,onCloseComplete:"onCloseComplete"in i?i.onCloseComplete:void 0}}]}))),()=>{this.onChildClose(s)}})),this.nextKey=0,this.state={stack:e},e&&e.forEach((e=>{this.nextKey=Math.max(this.nextKey,e.key+1)}))}onChildClose(e,...t){const n=this.state.stack.find((t=>t.key===e));n&&(n.originalProps.onClose&&n.originalProps.onClose(...t),this.setState((e=>({stack:e.stack.map((e=>e===n?(0,o.Z)((0,o.Z)({},e),{},{alive:!1}):e))}))))}onChildCloseComplete(e,...t){const n=this.state.stack.find((t=>t.key===e));n&&(n.originalProps.onCloseComplete&&n.originalProps.onCloseComplete(...t),this.setState((e=>({stack:e.stack.filter((e=>e!==n))}))))}}},449328:(e,t,n)=>{n.r(t),n.d(t,{InlineCommentsHighlighterComponent:()=>w,InlineCommentsHighlighter:()=>L});var o=n(122551),s=n(507080),l=n(621070),i=n(684157),a=n(920872),r=n(358372),m=n(259220),c=n(526938),d=n(541580),C=n(350844),h=n(328446),u=n(34868),g=n(511461),f=n(170915),E=n(616158),y=n(528365),_=n(628933),k=n(772610),p=n(595500),v=n(61271),S=n(203574);const I=(0,E.j)("inline-comment"),R=e=>e&&null!==(0,a.w)(e),w=({pageId:e,dialogs:t})=>{const{match:n}=(0,o.useContext)(k.M),{removeCommentQueryParams:s}=(0,r.n)(),{markerRefs:c,markerRefMap:h,loading:g}=(0,_.Q)({pageId:e}),{hasContentChanged:f,resetContentChanged:E}=(0,o.useContext)(d.i),{createAnalyticsEvent:w}=(0,l._)(),{onHighlightClick:L}=(0,o.useContext)(C.s),N=(0,o.useRef)(null),P=(0,o.useRef)(null),M="string"==typeof(null==n?void 0:n.query.focusedCommentId)?null==n?void 0:n.query.focusedCommentId:void 0,{cohort:T}=(0,i.a)(v.TQ,["variation","not-enrolled","control"],"not-enrolled",!0),x="variation"===T,A=(0,o.useCallback)(((e,t=!1)=>{let n=!1;for(;e&&R(e);){if(t){const t=(0,a.w)(e);n=Boolean(t&&c.includes(t))}else n=e.classList.contains(p.EL);if(n)break;e=e.parentElement}return{isValid:n,element:e}}),[c]),b=(0,o.useCallback)(((e,t)=>{const n=Object.keys(h).find((t=>(null==h?void 0:h[t])===e));w({type:"sendUIEvent",data:{action:"clicked",actionSubject:"inlineCommentHighlight",attributes:{mode:"view",context:"default",isSSR:t},objectType:"inlineComment",objectId:n&&h[n],source:"viewPageScreen"}}).fire()}),[w,h]),H=(0,o.useCallback)((({element:e,markerRef:t,isSSR:n=!1}={})=>{E(),!n&&e.classList.contains(p.GR)?((0,p.o1)(),L(null)):((0,p.o1)(),e.classList.add(p.GR),(0,p.QR)(t),L(t),b(t,n))}),[L,E,b]),O=(0,o.useCallback)((e=>{const{isValid:t,element:n}=A(e,!0);if(!n||!t)return;S.lD.start();const o=(0,a.w)(n);N.current=o,H({element:n,markerRef:o,isSSR:!0})}),[H,A]),Q=(0,o.useCallback)((e=>{const{target:n}=e,{isValid:o,element:l}=A(n);if(!l||!o)return;e.preventDefault(),S.lD.start(),s();const i=(0,a.w)(l);f?t.showModal(u.v,{onConfirm:()=>H({element:l,markerRef:i})}):H({element:l,markerRef:i})}),[f,t,H,A,s]);(0,o.useEffect)((()=>{try{if(!N.current&&c.length>0&&window.__SSR_INLINE_COMMENTS_EVENTS_CAPTURE__&&window.__SSR_INLINE_COMMENTS_EVENTS_CAPTURE__.clickedInlineHighlightElements&&Array.isArray(window.__SSR_INLINE_COMMENTS_EVENTS_CAPTURE__.clickedInlineHighlightElements)){const e=window.__SSR_INLINE_COMMENTS_EVENTS_CAPTURE__.clickedInlineHighlightElements,t=e[e.length-1];t&&O(t)}}catch(e){I.log`An error occurred when opening SSR Inline higlight - ${e}`}}),[c]),(0,o.useEffect)((()=>{const e=document.querySelector("#content");if(e)return e.addEventListener("click",Q),()=>{e.removeEventListener("click",Q)}}),[Q,e]),(0,o.useEffect)((()=>{const e=document.querySelectorAll((0,p.YU)()),t={};new Set(Array.from(e).map((e=>(0,a.w)(e)))).forEach((n=>{const o=Array.from(e).filter((e=>(0,a.w)(e)===n));n&&(t[n]={start:o[0],end:o[o.length-1]})})),e.forEach((e=>{const n=(0,a.w)(e);if(n){c.includes(n)?(e.classList.add(p.EL),e===t[n].start&&e.classList.add(p.dX),e===t[n].end&&e.classList.add(p.QM)):(e.classList.remove(p.EL),e.classList.remove(p.dX),e.classList.remove(p.QM)),N.current===n?(e.classList.add(p.GR),N.current=null):x&&!P.current&&M&&h[M]===n&&(e.classList.add(p.GR),P.current=!0)}})),S.nH.markFMP((0,y.es)("CFP-63.ssr-ttr")),S.nH.mark("highlightsRendered")}),[c,e,M,x,h]);const Z=c&&Array.isArray(c)?c.length:0;return g?null:o.createElement(m.M,{key:`stop-${e}`,metric:S.nH,customData:{numberOfInlineComments:Z}})},L=({pageId:e})=>o.createElement(g.k,{attribution:f.x.COLLABORATION},o.createElement(s.xs,{to:[h.l]},(t=>o.createElement(o.Fragment,null,o.createElement(c.q,{key:`start-${e}`,metric:S.nH}),o.createElement(w,{pageId:e,dialogs:t})))));L.displayName="InlineCommentsHighlighter"}}]);
//# sourceMappingURL=3071.CtnSZ2vsmV.js.map