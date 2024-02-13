"use strict";(self._cf=self._cf||[]).push([[16089],{998805:(e,t,a)=>{a.r(t),a.d(t,{ProfileComponent:()=>U});var n=a(991332),l=a(415911),o=a(122551),i=a(358280),r=a(499082),s=a(464984),c=a(603494),d=a(915194),u=a(621070),p=a(452557),v=a(920818),f=a(953307),m=a(627490),g=a(362076);const y=e=>{const{tooltip:t}=e,a=(0,l.Z)(e,["tooltip"]);return o.createElement(g.h,(0,f.Z)({icon:o.createElement(m.default,{label:"string"==typeof t?t:"Sign-in Icon"}),tooltip:t},a))},h=g.h;var b=a(197996),E=a(824464),M=a(275513),C=a(199319),I=a(772610),Z=a(661315),_=a(940362),x=a(187079),P=a(728504);var N=a(917465),w=a(309006),z=a(405665),S=a(28201),V=a(221831);a(638550),a(559627),a(464211);const A=`${N.b}/login.action?os_destination=${window.location.pathname.replace(N.b,"")}`,j=(0,s.defineMessages)({signIn:{id:"app-navigation.sign.in.tooltip",defaultMessage:"Sign In"},profile:{id:"app-navigation.profile.label",defaultMessage:"Your profile and preferences"}}),k=(0,o.forwardRef)(((e,t)=>{let{as:a="div",style:r}=e,s=(0,l.Z)(e,["as","style"]);return o.createElement(a,(0,n.Z)((0,n.Z)({},s),{},{style:r,ref:t,className:(0,i.Z)(["_c71l132o",s.className])}))}));const H=(0,o.forwardRef)(((e,t)=>{let{as:a="div",style:r}=e,s=(0,l.Z)(e,["as","style"]);return o.createElement(a,(0,n.Z)((0,n.Z)({},s),{},{style:r,ref:t,className:(0,i.Z)(["_1bsb14no _4t3i14no",s.className])}))}));const O=(0,S.ui)({__loadable_id__:"VqAcq",name:"ProfileMenuLoader",loader:async()=>(await Promise.all([a.e(12705),a.e(61769),a.e(36268),a.e(37176)]).then(a.bind(a,558947))).ProfileMenu}),L=(0,o.memo)((({intl:e,openDialog:t,isOpen:a,onClose:l,onClick:i})=>{const{match:s}=(0,o.useContext)(I.M),{createAnalyticsEvent:c}=(0,u._)(),{data:f,loading:m}=(0,r.aM)(V.U),{isAnonymous:g,loading:N}=(0,o.useContext)(z.wu),S=(0,o.useCallback)((()=>{(0,M.OV)().abort({name:C.nPk,reason:"dropdown closed by user"}),l()}),[l]),L=(0,o.useCallback)((()=>{c({type:"sendUIEvent",data:{source:"globalNavigation",action:"clicked",actionSubject:"navigationItem",actionSubjectId:"login",attributes:{selectedItemPageContext:s?s.name:void 0,navigationLayer:"global",navVersion:"3",navdexPointType:w.yo}}}).fire()}),[s,c]),U=(0,o.useCallback)((()=>{i(),a&&S(),c({type:"sendUIEvent",data:{source:"globalNavigation",action:"clicked",actionSubject:"navigationItem",actionSubjectId:"profile",attributes:{selectedItemPageContext:s?s.name:void 0,navigationLayer:"global",navVersion:"3",navdexPointType:w.yo}}}).fire()}),[a,S,i,s,c]),q=(0,o.useCallback)((()=>{Promise.all([(0,x.M)({location:P.I0})]),O.preload()}),[]);if(m||N)return o.createElement(H,null);if(g)return o.createElement("span",{"data-testid":"app-navigation-login",onClick:L},o.createElement(y,{tooltip:e.formatMessage(j.signIn),href:A}));{var B,G;const l=(null!=(G=f)?G.user:G)||{photos:[],displayName:null,id:null},i=null!=(B=l)&&null!=(B=B.photos)&&null!=(B=B[0])?B.value:B,r=l.displayName?l.displayName:null,s=o.createElement(b.Z,{src:i,size:"small"});return o.createElement(E.Z,{isOpen:a,onClose:S,offset:[14,0],content:({update:e})=>o.createElement(k,null,o.createElement(O,{onClose:S,dialogFn:t,scheduleUpdate:e})),trigger:t=>o.createElement("span",{"data-testid":"app-navigation-profile"},o.createElement(p.ZP,null,o.createElement(v.Z,{name:"nav-profile"},o.createElement(Z.u,{metricName:_.EE},o.createElement(h,(0,n.Z)((0,n.Z)({},t),{},{icon:s,onClick:U,onFocus:q,onMouseEnter:q,tooltip:r,isSelected:a,"aria-label":e.formatMessage(j.profile),"aria-haspopup":!0,"aria-expanded":a})))),o.createElement(d.bH,{engagementId:"nav-profile"}))),placement:"bottom-end"})}})),U=(0,c.ZP)(L)},187079:(e,t,a)=>{a.d(t,{M:()=>o});var n=a(439754),l=a(669159);function o({location:e=null,contentId:t=null,spaceKey:a=null,version:o=null}={}){const i={location:Array.isArray(e)?null:e,locations:Array.isArray(e)?e:[],contentId:t,spaceKey:a,version:o};return(0,n.I)({query:l.W,variables:i})}},627658:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(991332),l=a(415911),o=a(953307),i=a(122551),r=a(652459);const s=e=>t=>{const a=(0,i.forwardRef)(((a,s)=>{let{analyticsContext:c}=a,d=(0,l.Z)(a,["analyticsContext"]);const u=(0,i.useMemo)((()=>(0,n.Z)((0,n.Z)({},e),c)),[c]);return i.createElement(r.Z,{data:u},i.createElement(t,(0,o.Z)({},d,{ref:s})))}));return a.displayName=`WithAnalyticsContext(${t.displayName||t.name})`,a}},78651:(e,t,a)=>{a.d(t,{Z:()=>n});const n=e=>t=>a=>{const n=a(t),l=n.clone();return l&&l.fire(e),n}},729501:(e,t,a)=>{a.d(t,{s:()=>o});var n=a(122551);const l=(0,n.createContext)(void 0),o=()=>Math.min((0,n.useContext)(l)||0,6)},941117:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=a(122551))&&n.__esModule?n:{default:n},o=a(386056);const i=e=>l.default.createElement(o.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"/><circle cx="12" cy="7" r="4"/></g></svg>'},e));i.displayName="PersonIcon";var r=i;t.default=r},311933:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=a(122551))&&n.__esModule?n:{default:n},o=a(386056);const i=e=>l.default.createElement(o.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M6 12h8v-2H6v2zM4 8.99C4 8.445 4.456 8 5.002 8h9.996C15.55 8 16 8.451 16 8.99V14H4V8.99z" fill-rule="nonzero"/><path d="M6 7.005C6 5.898 6.898 5 7.998 5h2.004C11.106 5 12 5.894 12 7.005V10H6V7.005zm4 0V7H7.999c.005 0 .002.003.002.005V8h2v-.995z"/><path d="M4.5 17h13.994l1.002-3H4.14l.36 3zm-2.495-4.012A.862.862 0 012.883 12h18.393c.55 0 .857.417.681.944l-1.707 5.112c-.174.521-.758.944-1.315.944H3.725a1.149 1.149 0 01-1.118-.988l-.602-5.024z" fill-rule="nonzero"/></g></svg>'},e));i.displayName="ShipIcon";var r=i;t.default=r},627490:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=(n=a(122551))&&n.__esModule?n:{default:n},o=a(386056);const i=e=>l.default.createElement(o.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M15.503 3H12v2h7v14h-7v2h7.006c1.1 0 1.994-.893 1.994-1.995V4.995A1.993 1.993 0 0019.006 3h-3.503z"/><path d="M3.977 11A.99.99 0 003 12.001c0 .551.437.999.977.999h11.047a.988.988 0 00.976-.999.99.99 0 00-.976-1.001H3.977z"/><path d="M12.303 8.305a1.053 1.053 0 000 1.478L14.5 12l-2.197 2.217a1.05 1.05 0 000 1.476c.404.409 1.06.409 1.465 0l2.93-2.955a1.055 1.055 0 000-1.477l-2.93-2.956a1.034 1.034 0 00-1.465 0z"/></g></svg>'},e));i.displayName="SignInIcon";var r=i;t.default=r}}]);
//# sourceMappingURL=16089.RKFmqyVi4v.js.map