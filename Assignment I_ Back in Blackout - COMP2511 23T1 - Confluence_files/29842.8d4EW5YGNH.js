"use strict";(self._cf=self._cf||[]).push([[29842],{398957:(e,t,r)=>{r.d(t,{Z:()=>k});var o=r(415911),n=r(122551),s=r(321534),i=r(504554),d=r(905657),a=r(955520),l=r(131436),c=r(67657),u=r(676424),h=r(396979),p=r(864212);const v=(0,s.iv)({display:"flex",padding:"var(--ds-space-200, 16px) var(--ds-space-250, 20px)",flexDirection:"column"}),g=(0,s.iv)({display:"flex",paddingBottom:"var(--ds-space-100, 8px)",alignItems:"baseline",justifyContent:"space-between"}),m=({children:e})=>(0,s.tZ)("div",{css:g},e),f=(0,s.iv)({display:"flex",paddingTop:"var(--ds-space-100, 8px)",alignItems:"center",justifyContent:"space-between"}),b=({children:e})=>(0,s.tZ)("div",{css:f},e),x=(0,s.iv)({height:"fit-content",zIndex:u.ug.spotlight()+1,background:`var(--ds-background-discovery-bold, ${l.Wn})`,borderRadius:`${(0,u.E0)()}px`,color:`var(--ds-text-inverse, ${l.N0})`,overflow:"auto"}),y=(0,s.iv)({boxShadow:`var(--ds-shadow-raised, 0 4px 8px -2px ${l.Nx}, 0 0 1px ${l.VG})`}),Z=(0,c.j)((()=>({container:{}}))),$=(0,n.forwardRef)(((e,t)=>{const{actions:r=[],actionsBeforeElement:n,children:l,components:c={},heading:u,headingAfterElement:g,image:f,innerRef:$,isFlat:k,testId:E,theme:w,width:N=400}=e,{Header:C=m,Footer:S=b}=c;return(0,s.tZ)(i.ZP.Provider,{value:p.H},(0,s.tZ)(Z.Provider,{value:w},(0,s.tZ)(Z.Consumer,null,(({container:e})=>(0,s.tZ)("div",{css:[x,!k&&y,e],style:{width:`${Math.min(Math.max(N,160),600)}px`},ref:t||$,"data-testid":E},"string"==typeof f?(0,s.tZ)("img",{src:f,alt:""}):f,(0,s.tZ)("div",{css:v},u||g?(0,s.tZ)(C,null,(0,s.tZ)(a.Z,{color:"inverse",level:"h600",as:"h4"},u),g):null,l,r.length>0||n?(0,s.tZ)(S,null,n||(0,s.tZ)("span",null),(0,s.tZ)(h.y0,null,r.map(((e,t)=>{let{text:r,key:n}=e,i=(0,o.Z)(e,["text","key"]);return(0,s.tZ)(h.o$,{key:n||("string"==typeof r?r:`${t}`)},(0,s.tZ)(d.Z,i,r))})))):null))))))}));$.displayName="SpotlightCard";const k=$},907057:(e,t,r)=>{r.d(t,{o:()=>l,Z:()=>c});var o=r(29298),n=r(122551),s=r(437705);const i=(0,n.createContext)({isOpen:!0,onExited:s.Z}),d=e=>n.Children.count(e)>0&&n.Children.map(e,(e=>!!e)).filter(Boolean).length>0;class a extends n.Component{constructor(...e){super(...e),(0,o.Z)(this,"state",{currentChildren:void 0}),(0,o.Z)(this,"onExited",(()=>{this.setState({currentChildren:this.props.children})}))}static getDerivedStateFromProps(e,t){const{currentChildren:r}=t;return{currentChildren:d(r)&&!d(e.children)?r:e.children}}render(){return n.createElement(i.Provider,{value:{onExited:this.onExited,isOpen:d(this.props.children)}},this.state.currentChildren)}}a.displayName="SpotlightTransition";const l=i.Consumer,c=a},629842:(e,t,r)=>{r.d(t,{Z:()=>F});var o=r(415911),n=r(953307),s=r(122551),i=r(991332),d=r(29298),a=r(185338),l=r(807892),c=r(512953);function u(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function h(e,t){return(!t||"hidden"!==e)&&("visible"!==e&&"clip"!==e)}function p(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return h(r.overflowY,t)||h(r.overflowX,t)}return!1}function v(e,t,r,o,n,s,i,d){return s<e&&i>t||s>e&&i<t?0:s<=e&&d<=r||i>=t&&d>=r?s-e-o:i>t&&d<r||s<e&&d>r?i-t+n:0}const g=function(e,t){var r=t.scrollMode,o=t.block,n=t.inline,s=t.boundary,i=t.skipOverflowHiddenElements,d="function"==typeof s?s:function(e){return e!==s};if(!u(e))throw new TypeError("Invalid target");for(var a=document.scrollingElement||document.documentElement,l=[],c=e;u(c)&&d(c);){if((c=c.parentNode)===a){l.push(c);break}c===document.body&&p(c)&&!p(document.documentElement)||p(c,i)&&l.push(c)}for(var h=window.visualViewport?visualViewport.width:innerWidth,g=window.visualViewport?visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,f=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),x=b.height,y=b.width,Z=b.top,$=b.right,k=b.bottom,E=b.left,w="start"===o||"nearest"===o?Z:"end"===o?k:Z+x/2,N="center"===n?E+y/2:"end"===n?$:E,C=[],S=0;S<l.length;S++){var I=l[S],W=I.getBoundingClientRect(),D=W.height,H=W.width,M=W.top,O=W.right,T=W.bottom,B=W.left;if("if-needed"===r&&Z>=0&&E>=0&&k<=g&&$<=h&&Z>=M&&k<=T&&E>=B&&$<=O)return C;var V=getComputedStyle(I),R=parseInt(V.borderLeftWidth,10),L=parseInt(V.borderTopWidth,10),P=parseInt(V.borderRightWidth,10),j=parseInt(V.borderBottomWidth,10),J=0,A=0,F="offsetWidth"in I?I.offsetWidth-I.clientWidth-R-P:0,U="offsetHeight"in I?I.offsetHeight-I.clientHeight-L-j:0;if(a===I)J="start"===o?w:"end"===o?w-g:"nearest"===o?v(f,f+g,g,L,j,f+w,f+w+x,x):w-g/2,A="start"===n?N:"center"===n?N-h/2:"end"===n?N-h:v(m,m+h,h,R,P,m+N,m+N+y,y),J=Math.max(0,J+f),A=Math.max(0,A+m);else{J="start"===o?w-M-L:"end"===o?w-T+j+U:"nearest"===o?v(M,T,D,L,j+U,w,w+x,x):w-(M+D/2)+U/2,A="start"===n?N-B-R:"center"===n?N-(B+H/2)+F/2:"end"===n?N-O+P+F:v(B,O,H,R,P+F,N,N+y,y);var z=I.scrollLeft,X=I.scrollTop;w+=X-(J=Math.max(0,Math.min(X+J,I.scrollHeight-D+U))),N+=z-(A=Math.max(0,Math.min(z+A,I.scrollWidth-H+F)))}C.push({el:I,top:J,left:A})}return C};function m(e){return e===Object(e)&&0!==Object.keys(e).length}const f=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(m(t)&&"function"==typeof t.behavior)return t.behavior(r?[]:g(e,t));if(!r){var o=function(e){return!1===e?{block:"end",inline:"nearest"}:m(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var o=e.el,n=e.top,s=e.left;o.scroll&&r?o.scroll({top:n,left:s,behavior:t}):(o.scrollTop=n,o.scrollLeft=s)}))}(g(e,o),o.behavior)}};var b=r(52054),x=r(676424),y=r(451598);const Z=e=>{const{height:t,left:r,top:o,width:n}=e.getBoundingClientRect();return{height:t,left:r,top:o,width:n}},$=e=>{const t=(e=>{const[t,r]=(0,s.useState)({width:0,height:0,left:0,top:0});return(0,s.useLayoutEffect)((()=>{r(Z(e))}),[e]),(0,s.useEffect)((()=>(0,y.ak)(window,{type:"resize",listener:()=>{requestAnimationFrame((()=>{r(Z(e))}))}})),[e]),t})(e.element);return e.children(t)};var k=r(187253),E=r(815659);function w(e){const t=e.cloneNode(!0);return t.style.margin="0",t.style.position="static",t.style.transform="translate(0, 0) translate3d(0, 0, 0)",t}const N=e=>{const{pulse:t,style:r,target:o,targetBgColor:n,targetOnClick:i,targetNode:d,targetRadius:a,testId:l}=e;return s.createElement(E.MV,{"data-testid":l,pulse:t,bgColor:n,radius:a,style:r},s.createElement("div",{dangerouslySetInnerHTML:{__html:w(d).outerHTML},style:{height:"100%",pointerEvents:"none"}}),s.createElement(E.Xn,{onClick:i?e=>i({event:e,target:o}):void 0}))};var C=r(389990),S=r(78651),I=r(627658),W=r(644960),D=r(485855),H=r(396979),M=r(398957);class O extends s.Component{componentDidUpdate(e){e.value!==this.props.value&&this.props.onChange()}render(){return this.props.children}}O.displayName="ValueChanged";const T="@atlaskit/onboarding",B="10.6.9";class V extends s.Component{constructor(...e){super(...e),(0,d.Z)(this,"state",{focusLockDisabled:!0})}componentDidMount(){this.focusLockTimeoutId=window.setTimeout((()=>{this.setState({focusLockDisabled:!1})}),200)}componentWillUnmount(){window.clearTimeout(this.focusLockTimeoutId)}render(){const{actions:e,actionsBeforeElement:t,animationStyles:r,children:o,dialogPlacement:n,dialogWidth:d,footer:a,header:l,heading:c,headingAfterElement:u,image:h,targetNode:p,testId:v}=this.props,{focusLockDisabled:g}=this.state,m=n?{"top left":"top-start","top center":"top","top right":"top-end","right top":"right-start","right middle":"right","right bottom":"right-end","bottom left":"bottom-start","bottom center":"bottom","bottom right":"bottom-end","left top":"left-start","left middle":"left","left bottom":"left-end"}[n]:void 0;return s.createElement(D.r,{modifiers:[{name:"preventOverflow",options:{padding:5,rootBoundary:"document",altAxis:!0,tether:!1}}],referenceElement:p,placement:m},(({ref:n,style:p,update:m})=>s.createElement(O,{value:d,onChange:m},s.createElement(C.ZP,{disabled:g,returnFocus:!1,autoFocus:!0},s.createElement("div",{ref:n,style:(0,i.Z)((0,i.Z)({},p),r)},s.createElement(M.Z,{testId:v,width:d,actions:e,actionsBeforeElement:t,image:h&&s.createElement(H.IO,{alt:c,src:h}),components:{Header:l,Footer:a},heading:c,headingAfterElement:u},o))))))}}V.displayName="SpotlightDialog";const R=(0,S.Z)("atlaskit"),L=(0,I.Z)({componentName:"spotlight",packageName:T,packageVersion:B})((0,W.Z)({targetOnClick:R({action:"clicked",actionSubject:"spotlight",attributes:{componentName:"spotlight",packageName:T,packageVersion:B}})})(V));var P=r(907057);class j extends s.Component{constructor(...e){super(...e),(0,d.Z)(this,"state",{replacementElement:null}),(0,d.Z)(this,"getTargetNodeStyle",(e=>a.canUseDOM?(0,i.Z)((0,i.Z)({},e),{},{position:"fixed"}):{}))}componentDidUpdate(e){e.targetNode!==this.props.targetNode&&f(this.props.targetNode,{scrollMode:"if-needed"})}componentDidMount(){f(this.props.targetNode,{scrollMode:"if-needed"}),this.props.onOpened()}componentWillUnmount(){this.props.onClosed()}render(){const{pulse:e,target:t,targetNode:r,targetBgColor:o,targetOnClick:i,targetRadius:d,testId:a,targetReplacement:u}=this.props,{replacementElement:h}=this.state;return s.createElement(P.o,null,(({isOpen:p,onExited:v})=>s.createElement(b.Z,{zIndex:x.ug.spotlight()+1},u?s.createElement(l.Z,{innerRef:e=>this.setState({replacementElement:e})},s.createElement($,{element:r},(e=>s.createElement(u,(0,n.Z)({"data-testid":`${a}--target`},this.getTargetNodeStyle(e)))))):s.createElement($,{element:r},(n=>s.createElement(N,{testId:`${a}--target`,pulse:e,target:t,style:this.getTargetNodeStyle(n),targetBgColor:o,targetNode:r,targetOnClick:i,targetRadius:d}))),u&&!h?null:s.createElement(k.p,{hasEntered:p,onExited:v},(e=>s.createElement(L,{testId:`${a}--dialog`,actions:this.props.actions,actionsBeforeElement:this.props.actionsBeforeElement,children:this.props.children,dialogPlacement:this.props.dialogPlacement,dialogWidth:this.props.dialogWidth,footer:this.props.footer,header:this.props.header,heading:this.props.heading,headingAfterElement:this.props.headingAfterElement,image:this.props.image,targetNode:h||r,animationStyles:e}))),s.createElement(c.ZP,null))))}}j.displayName="SpotlightInner",(0,d.Z)(j,"defaultProps",{dialogWidth:400,pulse:!0});const J=j;var A=r(452557);const F=e=>{let{dialogWidth:t=400,pulse:r=!0,testId:i="spotlight",targetNode:d,target:a}=e,l=(0,o.Z)(e,["dialogWidth","pulse","testId","targetNode","target"]);return s.createElement(A.ST,null,(({opened:e,closed:o,targets:c})=>{const u=d||("string"==typeof a?c[a]:void 0);return u?s.createElement(J,(0,n.Z)({},l,{targetNode:u,target:a,onOpened:e,onClosed:o,testId:i,dialogWidth:t,pulse:r})):null}))}},864212:(e,t,r)=>{r.d(t,{H:()=>l,j:()=>c});var o=r(991332),n=r(415911),s=r(131436);const i={default:{background:{default:`var(--ds-background-inverse-subtle, ${s.HD})`,hover:`var(--ds-background-inverse-subtle-hovered, ${s.vJ})`,active:`var(--ds-background-inverse-subtle-pressed, ${s.J1})`,disabled:`var(--ds-background-disabled, ${s.HD})`,selected:`var(--ds-background-inverse-subtle-pressed, ${s.gR})`,focus:`var(--ds-background-inverse-subtle, ${s.HD})`},boxShadow:{focus:`0 0 0 2px var(--ds-border-discovery, ${s.Vi})`},color:{default:`var(--ds-text-inverse, ${s.N0})`,hover:`var(--ds-text-inverse, ${s.N0})`,active:`var(--ds-text-inverse, ${s.N0})`,disabled:{light:`var(--ds-text-disabled, ${s.N0})`,dark:`var(--ds-text-disabled, ${s.Dw})`},selected:`var(--ds-text-inverse, ${s.N0})`,focus:`var(--ds-text-inverse, ${s.N0})`},outline:{focus:"none"}},subtle:{background:{default:"none",hover:`var(--ds-background-inverse-subtle-hovered, ${s.vJ})`,active:`var(--ds-background-inverse-subtle-pressed, ${s.J1})`,disabled:"none",selected:{light:`var(--ds-background-selected-hovered, ${s.TG})`,dark:`var(--ds-background-selected-hovered, ${s.xU})`},focusSelected:{light:`var(--ds-background-selected-hovered, ${s.TG})`,dark:`var(--ds-background-selected-hovered, ${s.xU})`}},boxShadow:{focus:`0 0 0 2px var(--ds-icon-discovery, ${s.Vi})`},color:{default:`var(--ds-text-inverse, ${s.N0})`,hover:`var(--ds-text-inverse, ${s.N0})`,active:`var(--ds-text-inverse, ${s.N0})`,disabled:`var(--ds-text-disabled, ${s.N0})`,selected:`var(--ds-text-inverse, ${s.N0})`,focus:`var(--ds-text-inverse, ${s.N0})`},outline:{focus:"none"}},"subtle-link":{textDecoration:{hover:`underline var(--ds-text-inverse, ${s.kJ})`},textDecorationLine:{active:"none"},boxShadow:{focus:`0 0 0 2px var(--ds-border-discovery, ${s.Vi})`},color:{default:`var(--ds-text-inverse, ${s.N0})`,hover:`var(--ds-text-inverse, ${s.kJ})`,active:`var(--ds-text-inverse, ${s.Vi})`,disabled:`var(--ds-text-discovery, ${s.J1})`,selected:`var(--ds-text-selected, ${s.N0})`,focus:`var(--ds-text-inverse, ${s.N0})`}}},d={primary:{background:{default:`var(--ds-background-discovery-bold, ${s.HD})`,hover:`var(--ds-background-discovery-bold-hovered, ${s.vJ})`,active:`var(--ds-background-discovery-bold-pressed, ${s.J1})`,disabled:{light:`var(--ds-background-disabled, ${s.gt})`,dark:`var(--ds-background-disabled, ${s.nA})`},selected:`var(--ds-background-selected-hovered, ${s.gR})`,focus:`var(--ds-background-discovery-bold-hovered, ${s.HD})`},boxShadow:{focus:{light:`0 0 0 2px var(--ds-border-discovery, ${s.Vi})`,dark:`0 0 0 2px var(--ds-border-discovery, ${s.Vi})`}},color:{default:`var(--ds-text-inverse, ${s.N0})`,disabled:{light:`var(--ds-text-disabled, ${s.N0})`,dark:`var(--ds-text-disabled, ${s.Dw})`},selected:`var(--ds-text-selected, ${s.N0})`,focus:`var(--ds-text-inverse, ${s.N0})`}}};function a(e,{mode:t,appearance:r,state:o}){if(!e[r])return;const n=e[r];return Object.keys(n).reduce(((e,r)=>{let s=n;return[r,o,t].forEach((t=>{s[t]&&("object"==typeof s[t]?s=s[t]:e[r]=s[t])})),e}),{})}const l=(e,t)=>{const r=e(t),{buttonStyles:s}=r,d=(0,n.Z)(r,["buttonStyles"]);return(0,o.Z)({buttonStyles:(0,o.Z)((0,o.Z)({},s),a(i,t))},d)},c=(e,t)=>{const r=e(t),{buttonStyles:s}=r,i=(0,n.Z)(r,["buttonStyles"]);return(0,o.Z)({buttonStyles:(0,o.Z)((0,o.Z)({},s),a(d,t))},i)}},396979:(e,t,r)=>{r.d(t,{IO:()=>l,y0:()=>c,o$:()=>u});var o=r(415911),n=r(953307),s=r(321534);const i=(0,s.iv)({maxWidth:"100%",height:"auto"}),d=(0,s.iv)({display:"flex",margin:"var(--ds-space-0, 0px) -4px",flexDirection:"row-reverse"}),a=(0,s.iv)({margin:"var(--ds-space-0, 0px) var(--ds-space-050, 4px)"}),l=e=>{let{alt:t}=e,r=(0,o.Z)(e,["alt"]);return(0,s.tZ)("img",(0,n.Z)({css:i,alt:t},r))},c=({children:e})=>(0,s.tZ)("div",{css:d},e),u=({children:e})=>(0,s.tZ)("div",{css:a},e)},815659:(e,t,r)=>{r.d(t,{MV:()=>v,Xn:()=>m,GM:()=>f});var o=r(991332),n=r(415911),s=r(953307),i=r(321534),d=r(131436),a=r(676424);const l=`0 0 0 2px var(--ds-border-discovery, ${d.Wn})`,c=(0,i.F4)({"0%, 33%":{boxShadow:`${l}, 0 0 0 var(--ds-border-discovery, rgba(101, 84, 192, 1))`},"66%, 100%":{boxShadow:`${l}, 0 0 0 10px rgba(101, 84, 192, 0.01)`}}),u=(c.name,(0,i.iv)({animation:`${c} 3000ms cubic-bezier(0.55, 0.055, 0.675, 0.19) infinite`})),h=(0,i.iv)({zIndex:a.ug.spotlight()+1}),p=e=>{let{children:t,bgColor:r,radius:d,style:a,testId:l}=e,c=(0,n.Z)(e,["children","bgColor","radius","style","testId"]);return(0,i.tZ)("div",(0,s.Z)({css:h,"data-testid":l,style:(0,o.Z)((0,o.Z)({},a),{},{backgroundColor:r,borderRadius:d?`${d}px`:void 0})},c),t)},v=e=>{let{children:t,pulse:r}=e,o=(0,n.Z)(e,["children","pulse"]);return(0,i.tZ)(p,(0,s.Z)({},o,{css:[r&&u]}),t)},g=(0,i.iv)({width:"100%",height:"100%",position:"absolute",top:0,left:0}),m=e=>(0,i.tZ)("div",(0,s.Z)({},e,{css:g,style:{cursor:e.onClick?"pointer":"auto"}})),f=e=>{let{children:t,pulse:r=!0,testId:o}=e,d=(0,n.Z)(e,["children","pulse","testId"]);return(0,i.tZ)(p,(0,s.Z)({},d,{css:[r&&u],testId:o}),t)}}}]);
//# sourceMappingURL=29842.8d4EW5YGNH.js.map