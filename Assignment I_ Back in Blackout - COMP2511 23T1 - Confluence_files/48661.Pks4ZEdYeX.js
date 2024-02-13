"use strict";(self._cf=self._cf||[]).push([[48661],{146238:(e,t,r)=>{let n,a;r.d(t,{q:()=>n,X:()=>a}),function(e){e.PUBLISHED="content-appearance-published",e.DRAFT="content-appearance-draft"}(n||(n={})),function(e){e.DEFAULT="default",e.FULL_WIDTH="full-width"}(a||(a={}))},982791:(e,t,r)=>{r.d(t,{L:()=>n});const n=()=>{const e=Array.from(document.getElementsByClassName("atlaskit-portal")).filter((e=>e.firstChild));return Boolean(e.filter((e=>e.querySelectorAll('[role="dialog"]').length)).length)}},806297:(e,t,r)=>{r.d(t,{q:()=>c,S:()=>E});var n=r(991332),a=r(122551),o=r(275513),T=r(147543),l=r(28201),s=r(72055);const c=(0,l.ZR)({__loadable_id__:"IzFuP",name:"ErrorComponent",loader:async()=>(await Promise.all([r.e(12705),r.e(61769),r.e(78248),r.e(54936),r.e(11216),r.e(89990),r.e(12953),r.e(96068),r.e(99735)]).then(r.bind(r,743037))).ErrorComponent}),E=({attribution:e,attributes:t,children:r,modal:l})=>{const E=(0,a.useCallback)((e=>a.createElement(c,(0,n.Z)((0,n.Z)({},e),{},{modal:l}))),[l]),i=(0,a.useCallback)((e=>{(0,T.OG)(e)||(0,o.OV)().fail({error:e,attributes:t})}),[t]);return a.createElement(s.O,{attribution:e,renderOnError:E,onError:i},r)};E.displayName="ErrorBoundary"},511461:(e,t,r)=>{r.d(t,{k:()=>T});var n=r(122551),a=r(72055);const o=()=>null,T=({attribution:e,children:t,onError:r})=>n.createElement(a.O,{attribution:e,renderOnError:o,onError:r},t);T.displayName="TransparentErrorBoundary"},801683:(e,t,r)=>{r.d(t,{P:()=>l,m:()=>s});var n=r(991332),a=r(122551),o=r(806297),T=r(511461);function l(e){return c(o.S,e)}function s(e){return c(T.k,e)}function c(e,t){return function(r){return o=>a.createElement(e,(0,n.Z)({},t),a.createElement(r,(0,n.Z)({},o)))}}},780044:(e,t,r)=>{r.d(t,{U:()=>o});var n=r(122551),a=r(275513);class o extends n.Component{constructor(e){super(e),this.markExperienceStart()}markExperienceStart(){const{id:e,name:t,timeout:r,attributes:n,collect:o,onSuccess:T}=this.props;(0,a.OV)().start({attributes:n,name:t,timeout:r,id:e,collect:o,onSuccess:T})}render(){return null}}o.displayName="ExperienceStart"},291597:(e,t,r)=>{r.r(t),r.d(t,{ViewPageLabelsComponent:()=>C,ViewPageLabels:()=>m});var n=r(991332),a=r(415911),o=r(122551),T=r(358280),l=r(780044),s=r(199319),c=r(146238),E=r(801683),i=r(170915),u=r(559214),_=r(414762),O=r(286108);r(423722),r(104086),r(520700),r(137909),r(884023),r(983237),r(629189);const d=(0,o.forwardRef)(((e,t)=>{let{as:r="div",style:l}=e,s=(0,a.Z)(e,["as","style"]);return o.createElement(r,(0,n.Z)((0,n.Z)({},s),{},{style:l,ref:t,className:(0,T.Z)(["_19pkys9h _2hwx1wug _otyr1ylp _18u01wug _1bsb1osq",s.isDefaultWidth?"_p12fukw8":"_p12fn7od",s.className])}))}));const S={container:e=>(0,n.Z)((0,n.Z)({},e),{},{margin:"0 -10px"}),control:e=>(0,n.Z)((0,n.Z)({},e),{},{backgroundColor:"white","&:hover, &:focus, &:active, &:focus-within":{backgroundColor:"white"},":not(&:focus-within, :hover)":{borderColor:"white"}}),menu:e=>(0,n.Z)((0,n.Z)({},e),{},{zIndex:4})},C=({pageWidthType:e,contentId:t,spaceKey:r})=>{const n=(0,o.useRef)(null);return o.createElement(o.Fragment,null,o.createElement(l.U,{id:t,name:s.No3}),o.createElement(d,{isDefaultWidth:JSON.parse(e)===c.X.DEFAULT,"data-testid":"view-page-labels-container"},o.createElement(u.S,{accelerator:_.LABELS_SHORTCUT,listener:e=>{var t;e.preventDefault(),null===(t=n.current)||void 0===t||t.focus()}}),o.createElement(O.LabelsSelect,{key:`labels-select-${t}`,source:"viewPage",experienceName:s.No3,contentId:t,spaceKey:r,styles:S,ref:n,maxMenuHeight:208})))},m=(0,E.P)({attribution:i.x.DISCO})(C)},15648:(e,t,r)=>{r.d(t,{sY:()=>n,MF:()=>a,xd:()=>o});const n=["current","draft"];let a;!function(e){e.CLEAR="clear",e.CREATE_OPTION="create-option",e.REMOVE_VALUE="remove-value",e.POP_VALUE="pop-value",e.SELECT_OPTION="select-option"}(a||(a={}));const o=/[:;,.•?&[\]()#^*@!<>]/},414762:(e,t,r)=>{r.r(t),r.d(t,{EDITOR2_SHORTCUTS:()=>n,BROWSER_SAVE_SHORTCUT:()=>a,COMMENT_EDITOR_SHORTCUT:()=>o,INLINE_COMMENTS_SHORTCUT:()=>T,BLOG_SHORTCUT:()=>l,GLOBAL_CREATE_SHORTCUT:()=>s,STAR_BUTTON_SHORTCUT:()=>c,CREATE_COMMENT_SHORTCUT:()=>E,LINK_TO_THIS_PAGE_SHORTCUT:()=>i,EDIT_SHORTCUT:()=>u,PRESENTATION_MODE_SHORTCUT:()=>_,WATCH_PAGE_SHORTCUT:()=>O,SHARE_PAGE_SHORTCUT:()=>d,LABELS_SHORTCUT:()=>S,VIEW_ATTACHMENTS_SHORTCUT:()=>C,NEXT_COMMENT_SHORTCUT:()=>m,PREV_COMMENT_SHORTCUT:()=>R,SUBMIT_FEEDBACK_SHORTCUT:()=>H,NAVIGATION_SHORTCUT:()=>U,GO_HOME_SHORTCUT:()=>f,NOTIFICATIONS_SHORTCUT:()=>p,GO_TO_RECENT_SHORTCUT:()=>N,SPACE_OVERVIEW_SHORTCUT:()=>I,NAVIGATION_SLASH_SHORTCUT:()=>A,SIDE_NAVIGATION_SHORTCUT:()=>h,CLOSE_INLINE_COMMENTS_SHORTCUT:()=>L,UNDO_SHORTCUT:()=>b,PREV_TEMPLATE_SHORTCUT:()=>P,NEXT_TEMPLATE_SHORTCUT:()=>g,HELP_SHORTCUT:()=>M});const n={PUBLISH:"mod+enter",PUBLISH_WITH_COMMENT:"mod+shift+enter",EDIT:"e",PREVIEW:"mod+shift+e"},a="mod+s",o="command+enter",T="mod+enter",l="b",s="c",c="f",E="m",i="k",u="e",_="r",O="w",d="s",S="l",C="t",m="n",R="p",H="g f",U="g g",f="g d",p="g n",N="g r",I="g s",A="/",h="[",L="]",b="mod+z",P="left",g="right",M="?"},604343:(e,t,r)=>{r.d(t,{j3:()=>o,Mm:()=>T,qX:()=>l,fK:()=>s,HU:()=>c});var n=r(414762);const a=(e,t)=>("string"==typeof t?e.push(t):"object"==typeof t&&e.push(...Object.values(t).reduce(a,[])),e),o="shortcuts-are-allowed",T="shortcuts-are-allowed-in-modal",l=["ProseMirror-focused",o],s=[T],c=Object.values(n).reduce(a,[])}}]);
//# sourceMappingURL=48661.Pks4ZEdYeX.js.map