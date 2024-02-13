"use strict";(self._cf=self._cf||[]).push([[4327],{627658:(t,e,n)=>{n.d(e,{Z:()=>i});var o=n(991332),a=n(415911),r=n(953307),s=n(122551),l=n(652459);const i=t=>e=>{const n=(0,s.forwardRef)(((n,i)=>{let{analyticsContext:c}=n,d=(0,a.Z)(n,["analyticsContext"]);const u=(0,s.useMemo)((()=>(0,o.Z)((0,o.Z)({},t),c)),[c]);return s.createElement(l.Z,{data:u},s.createElement(e,(0,r.Z)({},d,{ref:i})))}));return n.displayName=`WithAnalyticsContext(${e.displayName||e.name})`,n}},78651:(t,e,n)=>{n.d(e,{Z:()=>o});const o=t=>e=>n=>{const o=n(e),a=o.clone();return a&&a.fire(t),o}},729501:(t,e,n)=>{n.d(e,{s:()=>r});var o=n(122551);const a=(0,o.createContext)(void 0),r=()=>Math.min((0,o.useContext)(a)||0,6)},728941:(t,e,n)=>{n.d(e,{Z:()=>R});var o=n(122551),a=n(321534),r=n(451598),s=n(807892),l=n(78651),i=n(627658),c=n(644960),d=n(437705),u=n(485855),p=n(38952),g=n(307271),m=n(991332),h=n(131436),y=n(479517),Z=n(529845),f=n(676424);const v=(0,y.Z)({light:`var(--ds-surface-overlay, ${h.N0})`,dark:`var(--ds-surface-overlay, ${h.H8})`}),x=(0,y.Z)({light:`var(--ds-text, ${h.xA})`,dark:`var(--ds-text, ${h.ly})`}),C=(0,y.Z)({light:`var(--ds-shadow-overlay, 0 4px 8px -2px ${h.Nx}, 0 0 1px ${h.VG})`,dark:`var(--ds-shadow-overlay, 0 4px 8px -2px ${h.Pl}, 0 0 1px ${h._r})`}),k=(0,f.E0)(),E=(0,f.ww)(),b="--theme-background",w="--theme-color",S="--theme-box-shadow",$=(0,a.iv)({boxSizing:"content-box",maxWidth:56*E+"px",maxHeight:56*E+"px",padding:"var(--ds-space-200, 16px) var(--ds-space-300, 24px)",zIndex:f.ug.dialog(),background:"var(--theme-background)",borderRadius:`${k}px`,boxShadow:"var(--theme-box-shadow)",color:"var(--theme-color)","&:focus":{outline:"none"}}),I=(0,o.forwardRef)((({children:t,onBlur:e,onClick:n,onFocus:o,style:r,testId:s},l)=>{const i=(0,Z.m)();return(0,a.tZ)("div",{css:$,"data-testid":s,onBlur:e,onClick:n,onFocus:o,ref:l,style:(0,m.Z)({[b]:v(i),[w]:x(i),[S]:C(i)},r)},t)})),P="@atlaskit/inline-dialog",D="13.4.7",N=t=>!!t&&(t.classList&&t.classList.contains("atlaskit-portal-container")||N(t.parentElement)),B=(0,o.memo)((function({isOpen:t=!1,onContentBlur:e=d.Z,onContentClick:n=d.Z,onContentFocus:l=d.Z,onClose:i=d.Z,placement:c="bottom-start",strategy:m="fixed",testId:h,content:y,children:Z}){const f=(0,o.useRef)(null),v=(0,o.useRef)(null),x=(0,o.useRef)(i);(0,o.useEffect)((()=>{x.current=i}));const C=(0,o.useCallback)((t=>{const{target:e}=t;var n;e instanceof HTMLElement&&(document.body.contains(e)&&(v.current&&v.current.contains(e)||N(e)||f.current&&!f.current.contains(e)&&(null===(n=x.current)||void 0===n||n.call(x,{isOpen:!1,event:t}))))}),[]);(0,o.useEffect)((()=>{if(!t)return;return(0,r.ak)(window,{type:"click",listener:C,options:{capture:!0}})}),[t,C]);const k=t?(0,a.tZ)(u.r,{placement:c,strategy:m},(({ref:t,style:o})=>(0,a.tZ)(I,{onBlur:e,onFocus:l,onClick:n,ref:e=>{e&&(f.current=e,"function"==typeof t?t(e):t.current=e)},style:o,testId:h},y))):null;return(0,a.tZ)(p.dK,null,(0,a.tZ)(g.s,null,(({ref:t})=>(0,a.tZ)(s.Z,{innerRef:e=>{v.current=e,"function"==typeof t?t(e):t.current=e}},Z))),k)}));B.displayName="InlineDialog";const M=(0,l.Z)("atlaskit"),R=(0,i.Z)({componentName:"inlineDialog",packageName:P,packageVersion:D})((0,c.Z)({onClose:M({action:"closed",actionSubject:"inlineDialog",attributes:{componentName:"inlineDialog",packageName:P,packageVersion:D}})})(B))},42198:(t,e,n)=>{n.d(e,{Z:()=>a});var o=n(999407);class a{constructor(t,e){if(!t||!e)throw new Error("Need a valid CloudId and Stargate url");this.cloudId=t,this.stargateUrl=e}async start(t,e){return(0,o.jQ)(this.cloudId,this.stargateUrl,t,e)}async stop(t){return(0,o.Jk)(this.cloudId,this.stargateUrl,t)}}},663101:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(29298),a=n(122551);class r extends a.PureComponent{constructor(...t){super(...t),(0,o.Z)(this,"state",{shouldRenderChildren:!1}),(0,o.Z)(this,"stop",(async()=>{const{client:t,messageId:e}=this.props;try{await t.stop(e)}catch(n){console.error(`Unable to stop flow message ${e}. ${n}`)}}))}async componentDidMount(){const{client:t,messageId:e}=this.props;try{await t.start(e)&&this.setState({shouldRenderChildren:!0})}catch(n){console.error(`Unable to start flow message ${e}. ${n}`)}}injectStop(t){return(0,a.cloneElement)(t,{stop:this.stop})}render(){const{fallback:t,children:e}=this.props,{shouldRenderChildren:n}=this.state;return n?this.injectStop(e):t}}r.displayName="Coordination",(0,o.Z)(r,"defaultProps",{fallback:null})},34888:(t,e,n)=>{n.d(e,{Y:()=>a});var o=n(122551);const a=(t,e)=>{const[n,a]=(0,o.useState)(!1);(0,o.useEffect)((()=>{(async()=>{try{await t.start(e)&&a(!0)}catch(n){console.error(`Unable to start flow message ${e}. ${n}`)}})()}),[t,e]);return[n,async o=>{if(o||n)try{await t.stop(e)}catch(a){console.error(`Unable to stop flow message ${e}. ${a}`)}}]}},451250:(t,e,n)=>{n.r(e),n.d(e,{ContextualSurvey:()=>c.Z,ContextualSurveyWithEvents:()=>i.Hc,Coordination:()=>o.Z,CoordinationClient:()=>a.Z,EngagementContextualSurvey:()=>i.ZP,EngagementFlag:()=>s.ZP,EngagementInlineDialog:()=>P,EngagementMessages:()=>A.EngagementMessages,EngagementModalDialog:()=>D.ZP,EngagementProvider:()=>R.Z,EngagementSpotlight:()=>B.bH,Flag:()=>l.Z,FlagWithEvents:()=>s.vV,InlineDialog:()=>$,InlineDialogWithEvents:()=>I,ModalDialog:()=>N.Z,ModalDialogWithEvents:()=>D.dN,Spotlight:()=>M.Z,SpotlightWithEvents:()=>B.Fs,useCoordination:()=>r.Y});var o=n(663101),a=n(42198),r=n(34888),s=n(892096),l=n(359950),i=n(474005),c=n(399554),d=n(29298),u=n(122551),p=n(438936),g=n(395937),m=n(728941),h=n(676424),y=n(131436),Z=n(612642),f=n(744106),v=n(601749),x=n(319685),C=n(35591);const k=.5*(0,h.ww)(),E=p.ZP.div`
  display: flex;
  flex-direction: column;
`,b=p.ZP.img`
  width: 100%;
`,w=p.ZP.div`
  margin-top: ${k}px;
`,S=p.ZP.div`
  padding-top: ${k}px;
  padding-bottom: ${k}px;
  color: ${(0,Z.Z)("color.text",y.xA)};
`;class $ extends u.Component{constructor(...t){super(...t),(0,d.Z)(this,"onPrimaryClick",(()=>{this.props.fireClickEvent("primary")})),(0,d.Z)(this,"onSecondaryClick",(()=>{this.props.fireClickEvent("secondary")}))}getPrimaryButton(){const{primaryAction:t,primaryText:e}=this.props;return this.getActionButton("primary",this.onPrimaryClick,t,e)}getSecondaryButton(){const{secondaryAction:t,secondaryText:e}=this.props;return this.getActionButton("subtle-link",this.onSecondaryClick,t,e)}getActionButton(t,e,n,o){switch(n?n.type:f.l.DISMISS){case f.l.LINK:{const a=n.data;return u.createElement(g.Z,{href:a.url,target:a.target,appearance:t,onClick:e},o)}default:return u.createElement(g.Z,{appearance:t,onClick:e},o)}}render(){const{children:t,title:e,imageSrc:n,imageAlt:o,body:a,position:r,order:s,secondaryText:l}=this.props,i={image:null,title:null,body:null};e&&(i.title=u.createElement("h4",{key:"title"},e)),n&&(i.image=u.createElement(b,{key:"img",src:n,alt:o})),i.body=u.createElement(S,{key:"body"},u.createElement(C.Z,{html:a}));const c=s.map((t=>i[t])),d=u.createElement("div",null,u.createElement(E,null,c),u.createElement(w,null,this.getPrimaryButton(),l?this.getSecondaryButton():null));return u.createElement(m.Z,{content:d,placement:r,isOpen:!0},t)}}$.displayName="InlineDialog",(0,d.Z)($,"defaultProps",{children:null,order:["title","image","body"],position:"bottom left"});const I=(0,v.Z)($),P=(0,x.Z)(I,"inlineDialog");var D=n(611547),N=n(401011),B=n(915194),M=n(895430),R=n(370571),A=n(470181)}}]);
//# sourceMappingURL=4327.EWQWFxpHzK.js.map