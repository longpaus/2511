(self._cf=self._cf||[]).push([[38727],{394374:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},a=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],o=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],s=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],i="undefined"!=typeof window&&void 0!==window.document?window.document:{},l="fullscreenEnabled"in i&&Object.keys(r)||a[0]in i&&a||o[0]in i&&o||s[0]in i&&s||[];const c={requestFullscreen:function(e){return e[l[r.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[l[r.requestFullscreen]]},get exitFullscreen(){return i[l[r.exitFullscreen]].bind(i)},get fullscreenPseudoClass(){return":"+l[r.fullscreen]},addEventListener:function(e,t,n){return i.addEventListener(l[r[e]],t,n)},removeEventListener:function(e,t,n){return i.removeEventListener(l[r[e]],t,n)},get fullscreenEnabled(){return Boolean(i[l[r.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return i[l[r.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return i[("on"+l[r.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return i[("on"+l[r.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return i[("on"+l[r.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return i[("on"+l[r.fullscreenerror]).toLowerCase()]=e}}},330472:e=>{e.exports=function(e,t,n,r){var a=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++a]);++a<o;)n=t(n,e[a],a,e);return n}},423789:(e,t,n)=>{"use strict";let r;n.d(t,{XD:()=>a,vU:()=>o,h7:()=>s,w1:()=>i,i8:()=>d,xv:()=>u});const a=e=>{e?r=e:n.g.window&&(r=n.g.window.navigator.userAgent)},o=()=>-1!==r.indexOf("Firefox/"),s=()=>-1!==r.indexOf("Edge/"),i=()=>-1!==r.indexOf("MSIE")||-1!==r.indexOf("Trident/")||s(),l=()=>-1!==r.indexOf("Chrome/"),c=()=>-1!==r.indexOf("Safari/")&&-1===r.indexOf("Chrome/"),d=()=>{if(i()){const e=r.match(/MSIE\s([\d.]+)/)||r.match(/rv:([\d.]+)/)||r.match(/Edge\/([\d.]+)/);return parseInt(e[1])}return l()?parseInt(r.match(/Chrome\/([\d.]+)/)[1]):c()?parseInt(r.match(/Version\/([\d.]+)/)[1]):o()?parseInt(r.match(/Firefox\/([\d.]+)/)[1]):void 0},u=()=>s()?"MSEdge":i()?"IE":l()?"Chrome":c()?"Safari":o()?"Firefox":void 0},259928:(e,t,n)=>{"use strict";n.d(t,{x:()=>r,W:()=>a});const r={transitionId:0,pageLoadStartTimestamp:0,routeName:null,previousRoute:null,startTimes:{}},a=()=>0===r.transitionId},551029:(e,t,n)=>{"use strict";n.d(t,{x:()=>o,g:()=>s});var r=n(331377),a=n(146740);const o=r.ZP`query getDraftContentAppearanceProperty($contentId:ID$status:[String]){content(id:$contentId status:$status){nodes{id ...contentAppearanceDraftFragment}}}${a.t}`,s=r.ZP`query getPublishedContentAppearanceProperty($contentId:ID$status:[String])@SLA{content(id:$contentId status:$status){nodes{id ...contentAppearancePublishedFragment}}}${a.O}`},784453:(e,t,n)=>{"use strict";n.d(t,{Y:()=>s});var r=n(69210),a=n(146238);const o={[a.X.DEFAULT]:"full-page",[a.X.FULL_WIDTH]:"full-width"},s=(0,r.default)((e=>{const t=o[e];return t||i()})),i=()=>o[a.X.DEFAULT]},97497:(e,t,n)=>{"use strict";n.d(t,{bp:()=>l,uS:()=>c,te:()=>d,Ag:()=>p,C7:()=>v,T:()=>g});var r=n(991332),a=n(122551),o=n(902195),s=n(551029),i=n(146238);const l=(e,t)=>{const n=null==e?void 0:e.find((e=>(null==e?void 0:e.key)===t&&(null==e?void 0:e.version)));let r=i.X.DEFAULT,a=0;var o;n&&(r=n.value?JSON.parse(n.value):r,a=(null===(o=n.version)||void 0===o?void 0:o.number)||a);return{appearance:r,version:a}},c=e=>{var t,n;return l(null!==(t=null===(n=e.appearancePublished)||void 0===n?void 0:n.nodes)&&void 0!==t?t:null,i.q.PUBLISHED)},d=async(e,t,n,r)=>{try{return await e(t),f(r,t),t}catch(a){if((0,o.j)(a,"409")){const a=await p(t.contentId,t.propertyKey,n,"network-only");if(a.version)return t=u(t,a),await e(t),f(r,t),t}throw a}},u=(e,t)=>(e.versionNumber=t.version+1,e.propertyValue!==t.appearance&&(e.propertyValue=t.appearance===i.X.DEFAULT?i.X.FULL_WIDTH:i.X.DEFAULT),e),p=async(e,t,n,r="cache-first")=>{var a,o;const d=t===i.q.PUBLISHED?s.g:s.x,u="network-only"===r?Date.now():void 0,p=null===(a=(await n.query({query:d,variables:{contentId:e,status:["current","draft"],dummy:u},fetchPolicy:r,context:{single:"true"}})).data)||void 0===a||null===(o=a.content)||void 0===o?void 0:o.nodes[0];return p?t===i.q.PUBLISHED?c(p):(e=>{var t,n;return l(null!==(t=null===(n=e.appearanceDraft)||void 0===n?void 0:n.nodes)&&void 0!==t?t:null,i.q.DRAFT)})(p):m()},m=()=>({appearance:i.X.DEFAULT,version:0}),v="editorAppearance",f=(e,t)=>{e&&("function"==typeof e.setMetadata?e.setMetadata({editorWidth:{value:t.propertyValue,version:t.versionNumber}}):e.sendMessage({type:v,appearance:t.propertyValue,version:t.versionNumber}))},g=({children:e,userOffline:t,params:n,apolloClient:o,updateContentAppearanceProperty:s,collabEditProvider:i})=>{const[l,c]=(0,a.useState)(!1),d=async()=>{const e=await p(n.contentId,n.propertyKey,o,"network-only");await(async(e,t,n,a)=>{const o=(0,r.Z)((0,r.Z)({},t),{},{propertyValue:e.appearance,versionNumber:e.version+1});e.version&&(await n(o),f(a,o))})(e,n,s,i)};return(0,a.useEffect)((()=>{c(!!t)}),[t]),!t&&l&&d(),e}},146740:(e,t,n)=>{"use strict";n.d(t,{O:()=>o,t:()=>s});var r=n(331377);const a=r.ZP`fragment contentAppearanceInnerFragment on PaginatedJsonContentPropertyList{nodes{id key value version{number}}}`,o=r.ZP`fragment contentAppearancePublishedFragment on Content{appearancePublished:properties(key:"content-appearance-published"){...contentAppearanceInnerFragment}}${a}`,s=r.ZP`fragment contentAppearanceDraftFragment on Content{appearanceDraft:properties(key:"content-appearance-draft"){...contentAppearanceInnerFragment}}${a}`},146238:(e,t,n)=>{"use strict";let r,a;n.d(t,{q:()=>r,X:()=>a}),function(e){e.PUBLISHED="content-appearance-published",e.DRAFT="content-appearance-draft"}(r||(r={})),function(e){e.DEFAULT="default",e.FULL_WIDTH="full-width"}(a||(a={}))},579849:(e,t,n)=>{"use strict";n.d(t,{l:()=>r});const r=(0,n(122551).createContext)({})},609145:(e,t,n)=>{"use strict";n.d(t,{sH:()=>r,Yn:()=>a,pN:()=>o,wG:()=>s,Lc:()=>i});const r="confluence.frontend.invite.from.mention",a="confluence.frontend.exus.import-from-slack",o="confluence.frontend.growth.invite-3rd-party-teams";let s,i;!function(e){e.ENROLLED="enrolled",e.NOT_ENROLLED="not-enrolled",e.CONTROL="control",e.EXPERIMENT="experiment",e.VARIATION="variation",e.VARIATION_SOURCE="variation-source",e.VARIATION_HOME="variation-home"}(s||(s={})),function(e){e.MENTION="mention",e.PEOPLE_MENU="peopleMenu",e.APP_NAV_INVITE_TEAMMATE_BTN="navInvite",e.QSV2_INVITE_TEAMMATE_TASK="quickstart-checklist.invite-teammate-v2",e.ONBOARDING_INVITE_FLAG="onboarding-invite-flag"}(i||(i={}))},831388:(e,t,n)=>{"use strict";n.d(t,{k:()=>r});const r=(0,n(122551).createContext)({isExternalShareRequest:!1})},441130:(e,t,n)=>{"use strict";n.d(t,{N:()=>r});const r=n(122551).createContext({shouldRefetchMacroQuery:!1})},905451:(e,t,n)=>{"use strict";n.r(t),n.d(t,{defer:()=>r.P});var r=n(123026)},628906:(e,t,n)=>{"use strict";n.r(t),n.d(t,{getLogger:()=>r.j});var r=n(616158)},368807:(e,t,n)=>{"use strict";n.d(t,{S:()=>l});var r=n(268481),a=n.n(r),o=n(781095);let s;s=n.n(o)()();const i=e=>null===e?"null":Array.isArray(e)?`[${e.map((e=>i(e))).join(",")}]`:"object"==typeof e?l(e):"string"==typeof e?`"${e}"`:`${e.toString()}`,l=e=>{const t=`${Object.entries(e).filter((([e,t])=>void 0!==t)).sort(((e,t)=>e[0].localeCompare(t[0]))).map((([e,t])=>`${e}:${i(t)}`)).join()},${s}`;return a()(t)}},773731:(e,t,n)=>{"use strict";n.d(t,{au:()=>r,KL:()=>a,TY:()=>o,iF:()=>s,XO:()=>i,qA:()=>l,AF:()=>c,yB:()=>d,TB:()=>u});const r=50,a=565,o=360,s=515,i="?utm_source=Confluence&utm_medium=referral",l="growing",c="https://unsplash.com/license",d="https://unsplash.com/terms",u=615},876441:(e,t,n)=>{"use strict";n.d(t,{q_:()=>o,N0:()=>s});var r=n(773731),a=n(580453);function o(e){let t,n;try{t=JSON.parse(e.value),n=parseInt(JSON.parse(e.version.number));const o=t.match(/"/g);if(o?o.length:0)try{t=JSON.parse(t)}catch(a){t=null}else t={id:t,position:r.au}}catch(a){t=null,n=null}return e?{value:t,version:n}:null}function s(e){var t,n,r,s,i,l,c,d,u,p,m,v;const f=(null==e||null===(t=e.content)||void 0===t||null===(n=t.nodes)||void 0===n||null===(r=n[0])||void 0===r||null===(s=r.appearancePublished)||void 0===s||null===(i=s.nodes)||void 0===i||null===(l=i[0])||void 0===l?void 0:l.value)||'"default"',g={draft:null,published:o(((null==e||null===(c=e.content)||void 0===c||null===(d=c.nodes)||void 0===d||null===(u=d[0])||void 0===u||null===(p=u.properties)||void 0===p?void 0:p.nodes)||[]).find((e=>(null==e?void 0:e.key)===a.h.PUBLISHED)))};return{coverPicture:g,contentAppearance:{draft:"",published:JSON.parse(f)},hasCoverPicture:!(null==g||null===(m=g.published)||void 0===m||null===(v=m.value)||void 0===v||!v.id)}}},626166:(e,t,n)=>{"use strict";n.d(t,{S9:()=>m,n3:()=>v,t:()=>f});var r=n(28201),a=n(991332),o=n(415911),s=n(122551),i=n(962285),l=n(358280),c=n(131436),d=n(612642),u=n(146238);n(423722),n(104086),n(344677),n(18558),n(985037),n(117027),n(971479),n(348716),n(137909),n(593940),n(983237),n(416473),n(234119),n(452109),n(438641),n(520700);const p=(0,s.forwardRef)(((e,t)=>{let{as:n="div",style:r}=e,p=(0,o.Z)(e,["as","style"]);return s.createElement(n,(0,a.Z)((0,a.Z)({},p),{},{style:(0,a.Z)((0,a.Z)({},r),{},{"--_1dixpwq":(0,i.Z)((0,d.Z)("color.background.neutral",c.IR))}),ref:t,className:(0,l.Z)(["_1bsb1osq _bfhk135j _4t3i11ux _2rko1l7b",p.contentAppearance==u.X.DEFAULT?"_19pkidpf _2hwx1wug _otyridpf _18u01wug":"_19pkn7od _2hwxn7od _otyrn7od _18u0n7od",p.isPagePreview?"_otyro7ao":"_otyrzwfg",p.contentAppearance==u.X.DEFAULT?"_p12fukw8":"_p12fn7od",p.className])}))}));const m=(0,r.ZR)({__loadable_id__:"_OERx",name:"EditorPageCoverPictureEntry",loader:async()=>{const{EditorPageCoverPictureEntry:e}=await Promise.all([n.e(12705),n.e(54936),n.e(11216),n.e(66133)]).then(n.bind(n,80034));return e}}),v=(0,r.ZR)({__loadable_id__:"UblIt",name:"PreviewPageCoverPicture",loader:async()=>{const{PreviewPageCoverPicture:e}=await Promise.all([n.e(12705),n.e(78248),n.e(54936),n.e(11216),n.e(91306),n.e(99319),n.e(38639),n.e(84786),n.e(15677),n.e(77284),n.e(53770)]).then(n.bind(n,139446));return e}}),f=(0,r.ZR)({__loadable_id__:"tMRTV",name:"RendererPageCoverPicture",loader:async()=>(await Promise.all([n.e(12705),n.e(78248),n.e(54936),n.e(11216),n.e(91306),n.e(99319),n.e(38639),n.e(84786),n.e(15677),n.e(77284),n.e(85544)]).then(n.bind(n,902870))).RendererPageCoverPicture,loading:({coverPicture:e,isPagePreview:t,contentAppearance:n})=>{var r,a,o,i;const l=t?!(null==e||null===(r=e.draft)||void 0===r||null===(a=r.value)||void 0===a||!a.id):!(null==e||null===(o=e.published)||void 0===o||null===(i=o.value)||void 0===i||!i.id),c=t?n.draft:n.published;return l?s.createElement("div",null,s.createElement(p,{contentAppearance:c,isPagePreview:t})):null}})},580453:(e,t,n)=>{"use strict";let r;n.d(t,{h:()=>r}),function(e){e.PUBLISHED="cover-picture-id-published",e.DRAFT="cover-picture-id-draft"}(r||(r={}))},409161:(e,t,n)=>{"use strict";n.d(t,{T:()=>o,k:()=>s});var r=n(122551);const a=r.createContext({isSettingsOpen:!1,setIsSettingsOpen:()=>{},isNavigationMenuOpen:!1,setIsNavigationMenuOpen:()=>{},width:"1"}),o=({children:e})=>{var t;const[n,o]=(0,r.useState)(!1),[s,i]=(0,r.useState)(!1),[l,c]=(0,r.useState)("1"),d=(null===(t=document.getElementById("presenter-mode-control-panel"))||void 0===t?void 0:t.getBoundingClientRect().width)||242;(0,r.useEffect)((()=>{c(d.toString())}),[d]);const u=(0,r.useMemo)((()=>({isSettingsOpen:n,setIsSettingsOpen:o,isNavigationMenuOpen:s,setIsNavigationMenuOpen:i,width:l})),[n,o,s,i,l]);return r.createElement(a.Provider,{value:u},e)};o.displayName="ControlPanelContextProvider";const s=()=>(0,r.useContext)(a)},203081:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c,s:()=>d});var r=n(122551),a=n(876441),o=n(626166),s=n(146238),i=n(785709),l=n(544179);const c="presenter-mode-header-image-container",d=({contentId:e,coverPictureQueryData:t})=>{const[n,d]=(0,r.useState)(void 0);return(0,r.useEffect)((()=>{var e,n,r,o,s,i,c,u;const p=null!==(e=null==t||null===(n=t.content)||void 0===n||null===(r=n.nodes)||void 0===r||null===(o=r[0])||void 0===o||null===(s=o.properties)||void 0===s||null===(i=s.nodes)||void 0===i?void 0:i[0])&&void 0!==e?e:void 0;if(!p)return;const m=(0,a.q_)(p);if(!m)return;const v={draft:null,published:{value:{id:(0,l.KI)(null==m||null===(c=m.value)||void 0===c?void 0:c.id),position:(null==m||null===(u=m.value)||void 0===u?void 0:u.position)||0},version:null==m?void 0:m.version}};d(v)}),[t]),n?r.createElement(i.E$,{id:c},r.createElement(o.t,{contentId:e,isPagePreview:!1,coverPicture:n,contentAppearance:{draft:"",published:s.X.FULL_WIDTH}})):r.createElement(i.$p,null)};d.displayName="HeaderImage"},4293:(e,t,n)=>{"use strict";n.d(t,{M:()=>b,T:()=>P});var r=n(790632),a=n(122551),o=n(464984),s=n(524798),i=n(131436),l=n(395937),c=n(621070),d=n(511461),u=n(170915),p=n(409161),m=n(785709),v=n(685753),f=n(28201);const g=(0,r.Z)("div",{target:"e1793tp50"})({name:"15i63cp",styles:"display:flex;justify-content:center;align-items:center;height:32px;width:32px;margin-right:12px;"}),h=()=>a.createElement(g,null,a.createElement(v.Z,null));h.displayName="LoadingSpinner";const x=(0,f.ui)({__loadable_id__:"Lx9cN",name:"LazyNavigation",loader:async()=>(await Promise.all([n.e(12705),n.e(61769),n.e(78248),n.e(11216),n.e(29842),n.e(8458)]).then(n.bind(n,267226))).NavigationPresenterMode,loading:()=>a.createElement(h,null)}),y=(0,f.ui)({__loadable_id__:"2tL5L",name:"LazySettingsMenu",loader:async()=>(await n.e(45415).then(n.bind(n,404342))).SettingsMenu,loading:()=>a.createElement(h,null)});var E=n(510132);const b="presenter-mode-control-panel",w=(0,r.Z)("div",{target:"e1j1ppkx0"})({name:"9enrk0",styles:"align-items:center;background-color:white;position:fixed;top:24px;right:24px;display:flex;z-index:800;padding:12px;box-shadow:0px 8px 12px rgba(9,30,66,0.15),0px 0px 1px rgba(9,30,66,0.31);border-radius:4px;"}),I=(0,r.Z)("div",{target:"e1j1ppkx1"})("height:24px;width:0px;border-left:1px solid ",i.YS,";"),C=(0,r.Z)("div",{target:"e1j1ppkx2"})({name:"t2bfik",styles:"margin-left:auto;display:flex;justify-content:flex-end;align-items:center;"}),Z=(0,o.defineMessages)({exit:{id:"presentation-mode.header.exit",defaultMessage:"Exit"}}),P=({onSwitchCursorClick:e,contentRendered:t,spaceKey:n,contentId:r})=>{const{exitPresenterMode:o,isBrowserFullscreen:i,setIsBrowserFullscreen:v}=(0,E.usePresenterModeContext)(),{createAnalyticsEvent:f}=(0,c._)(),g=(0,s.Z)();(0,a.useEffect)((()=>{f({type:"sendScreenEvent",data:{name:"viewPresentScreen",attributes:{objectId:r,containerId:n}}}).fire()}),[f,r,n]);const h=(0,a.useCallback)((()=>{f({type:"sendUIEvent",data:{source:"present",action:"clicked",actionSubject:"button",actionSubjectId:"close",objectId:r,containerId:n}}).fire(),o()}),[f,o,r,n]);return a.createElement(d.k,{attribution:u.x.CONTENT_EXPERIENCE},a.createElement(p.T,null,a.createElement("div",{"data-testid":"presentation-mode-header"},a.createElement(w,{id:b},a.createElement(C,null,a.createElement(x,{contentRendered:t,contentId:r,spaceKey:n}),a.createElement(I,null),a.createElement(y,{onSwitchCursorClick:e,contentId:r,spaceKey:n}),a.createElement(m.qO,{id:"presenter-mode-exit-button"},a.createElement(l.Z,{testId:"presentation-mode-button-close",onClick:i?()=>v(!1):h},g.formatMessage(Z.exit))))))))};P.displayName="HeaderPresenterMode"},510132:(e,t,n)=>{"use strict";n.r(t),n.d(t,{PresenterModeContextConsumer:()=>v,PresenterModeContextProvider:()=>p,usePresenterModeContext:()=>m});var r=n(122551),a=n(394374),o=n(451379),s=n(199319),i=n(507080),l=n(185346),c=n(660010);const d=({contentId:e,spaceKey:t})=>{const{isPresenterModeActive:n,isBrowserFullscreen:a}=m();return n||a?r.createElement(i.xs,{to:[l.Q]},(n=>r.createElement(c.t_,{contentId:e,spaceKey:t,setFlagsVisibility:n.setFlagsVisibility}))):null},u=r.createContext({isPresenterModeActive:!1,isBrowserFullscreen:!1,presenterModeContextError:null,isPresenterModeEnabled:!1,enterPresenterMode:()=>{},exitPresenterMode:()=>{},setPresenterModeContextError:()=>{},enterBrowserFullscreen:()=>{},enterSystemFullscreen:()=>{},setIsBrowserFullscreen:()=>{}}),p=({children:e,contentId:t,spaceKey:n})=>{const[i,l]=(0,r.useState)(!1),[c,p]=(0,r.useState)(!1),[m,v]=(0,r.useState)(null),f=(0,r.useContext)(o.F),g=(0,r.useCallback)((()=>{p(!0)}),[]),h=(0,r.useCallback)((e=>{g(),v(e)}),[v,g]),x=(0,r.useCallback)((()=>Promise.resolve(a.Z.requestFullscreen(document.documentElement))),[]),y=(0,r.useCallback)((()=>Promise.resolve(a.Z.exitFullscreen())),[]),E=a.Z.fullscreenEnabled,b=(0,r.useCallback)((()=>{if(f.start({name:s.eDB}),a.Z.addEventListener("fullscreenerror",h,!1),l(!0),v(null),!E){const e=new Error("Fullscreen mode is not supported");return h(e),void g()}a.Z.fullscreenElement?y().then(x).then((()=>{f.succeed({name:s.jGm})})).catch(g):x().then((()=>{f.succeed({name:s.jGm})})).catch(g)}),[f,x,E,y,h,g]),w=(0,r.useCallback)((()=>{p(!1),b()}),[b]),I=(0,r.useCallback)((()=>{l(!1),a.Z.removeEventListener("fullscreenerror",h,!1)}),[l,h]),C=(0,r.useMemo)((()=>({isPresenterModeActive:i,isBrowserFullscreen:c,enterPresenterMode:b,exitPresenterMode:I,isPresenterModeEnabled:E,presenterModeContextError:m,setPresenterModeContextError:v,enterBrowserFullscreen:g,setIsBrowserFullscreen:p,enterSystemFullscreen:w})),[i,c,b,I,E,m,v,g,p,w]);return r.createElement(u.Provider,{value:C},e,r.createElement(d,{contentId:t,spaceKey:n}))};p.displayName="PresenterModeContextProvider";const m=()=>(0,r.useContext)(u),v=({children:e})=>{const{enterPresenterMode:t}=m();return e(t)}},660010:(e,t,n)=>{"use strict";n.d(t,{V$:()=>$,aO:()=>j,aG:()=>B,t_:()=>z,ce:()=>G,o3:()=>T});var r=n(122551),a=n(499082),o=n(464984),s=n(524798),i=n(394374),l=n(52054),c=n(685753),d=n(222690),u=n(724507),p=n(810602),m=n(968948),v=n(991332),f=n(415911),g=n(358280),h=n(28201);n(520700),n(645299),n(456928),n(319272),n(354326);const x=(0,r.forwardRef)(((e,t)=>{let{as:n="div",style:a}=e,o=(0,f.Z)(e,["as","style"]);return r.createElement(n,(0,v.Z)((0,v.Z)({},o),{},{style:a,ref:t,className:(0,g.Z)(["_1e0c1txw _1bah1h6o _4cvr1h6o _4t3i1osq _1bsb1osq",o.className])}))}));const y=()=>r.createElement(x,null,r.createElement(c.Z,{size:"large"}));y.displayName="LoadingSpinner";const E=(0,h.ui)({__loadable_id__:"v98sQ",name:"LazyQRCodeGenerator",loader:async()=>(await Promise.all([n.e(12705),n.e(67912)]).then(n.bind(n,139070))).QRCodeComponent,loading:y});var b=n(441130),w=n(511461),I=n(170915),C=n(423789),Z=n(510132);var P=n(4293),_=n(203081),S=n(966290),k=n(642403),F=n(131436),M=n(612642);const A=({title:e})=>r.createElement(S.Z,{appearance:"error",icon:r.createElement(k.default,{label:"Error",secondaryColor:(0,M.Z)("color.background.danger.bold",F.$H)}),id:"error",key:"error",title:e});A.displayName="ErrorFlag";var N=n(785709),L=n(331377);const D=L.ZP`query PresenterModeContentTitleQuery($contentId:ID!){content(id:$contentId){nodes{id title emojiTitlePublished:properties(key:"emoji-title-published"){nodes{id key value}}}}}`,O=L.ZP`query PresenterModeCoverPictureQuery($contentId:ID$status:[String]){content(id:$contentId status:$status){nodes{id properties(keys:["cover-picture-id-published"]){nodes{id key value version{number}}}}}}`,R=(0,o.defineMessages)({genericErrorMessage:{id:"presentation-mode.portal.generic.error.message",defaultMessage:"Something's not right. Refresh and try again."}}),T="presenter-mode-zoom-container",j="presenter-mode-container",G="presenter-mode-portal-container",B="presenter-mode-title-text",$="presenter-mode-content-container-bottom-spacer";(0,C.XD)();const z=({contentId:e,spaceKey:t,setFlagsVisibility:n})=>{var o,v,f,g;const[h,x]=(0,r.useState)(!0),[y,S]=(0,r.useState)(!1),{isBrowserFullscreen:k}=(0,Z.usePresenterModeContext)(),F=(0,s.Z)();(0,r.useLayoutEffect)((()=>{const e=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}),[]),(()=>{const{exitPresenterMode:e}=(0,Z.usePresenterModeContext)();(0,r.useEffect)((()=>{const t=()=>{i.Z.fullscreenElement||e()};return i.Z.addEventListener("fullscreenchange",t,!1),()=>{i.Z.fullscreenElement&&i.Z.exitFullscreen(),i.Z.removeEventListener("fullscreenchange",t,!1)}}),[e])})(),(0,r.useEffect)((()=>{k&&i.Z.exitFullscreen()}),[k]),(e=>{(0,r.useEffect)((()=>(e(!1),()=>{e(!0)})),[e])})(n);const{data:M,loading:L,error:z}=(0,a.aM)(D,{fetchPolicy:"cache-first",variables:{contentId:e}}),q=(0,d.M)(),U=(0,u.u$)(M),{data:H,loading:X,error:V}=(0,a.aM)(q,{fetchPolicy:"cache-first",context:{single:!0},skip:!e||!t,variables:{contentId:e,spaceKey:t,versionOverride:null}}),{data:K,loading:W,error:Q}=(0,a.aM)(O,{fetchPolicy:"cache-first",context:{single:!0},variables:{contentId:e,status:["current"]}}),Y=X||L||W;return r.createElement(l.Z,{zIndex:519},r.createElement(w.k,{attribution:I.x.CONTENT_EXPERIENCE},r.createElement(N.Op,{id:G,isCustomCursorActive:h},r.createElement(P.T,{contentRendered:y,onSwitchCursorClick:e=>x(e),contentId:e,spaceKey:t}),r.createElement(N.gG,{id:j},Y?r.createElement(N.ly,{"data-testid":"presenter-mode-spinner"},r.createElement(N.eg,null,r.createElement(c.Z,{size:"large"}))):r.createElement(r.Fragment,null,K?r.createElement(_.s,{contentId:e,coverPictureQueryData:K}):r.createElement(N.$p,null),r.createElement(N.zt,{"data-testid":"presenter-mode-zoom-container",id:T,isFirefox:(0,C.vU)()},r.createElement(N.s5,null,(z||V||Q)&&r.createElement(A,{title:F.formatMessage(R.genericErrorMessage)})),r.createElement(N.c7,{id:B},U&&r.createElement(N.xo,null,r.createElement("span",null,r.createElement(p.gN,{emoji:U,height:26,context:"presenterMode",showTooltip:!0}))),r.createElement(N.Dx,null,null!==(o=null==M||null===(v=M.content)||void 0===v||null===(f=v.nodes)||void 0===f||null===(g=f[0])||void 0===g?void 0:g.title)&&void 0!==o?o:"")),r.createElement(b.N.Provider,{value:{shouldRefetchMacroQuery:!0}},r.createElement(m.Y,{contentId:e,data:H,onRendered:()=>S(!0),hasInlineComments:!1,appearance:"full-page",stickyHeaders:{offsetTop:0}})),r.createElement(N.LZ,{id:$}))))),r.createElement(E,{contentId:e,spaceKey:t})))};z.displayName="PresenterModePortal"},785709:(e,t,n)=>{"use strict";n.d(t,{rm:()=>u,Op:()=>p,E$:()=>m,$p:()=>v,gG:()=>f,zt:()=>h,LZ:()=>x,ly:()=>y,eg:()=>E,c7:()=>b,Dx:()=>w,xo:()=>I,s5:()=>C,qO:()=>Z});var r=n(790632),a=n(171945),o=n(131436),s=n(585914);const i=1536,l=2560,c=`url(${s}), auto`,d="\n  @media only screen and (min-width: 1792px) {\n    height: 360px;\n  }\n  @media only screen and (min-width: 1536px) and (max-width: 1792px) {\n    height: 240px;\n  }\n  @media only screen and (max-width: 1536px) {\n    height: 240px;\n  }\n",u="1.5",p=(0,r.Z)("div",{target:"e3fmlue0"})("width:100vw;height:100vh;background-color:#ffffff;position:fixed;top:0;left:0;overflow-y:scroll;overflow-x:hidden;display:flex;justify-content:center;cursor:",(({isCustomCursorActive:e})=>e?c:"auto"),";.ak-renderer-tableHeader-sorting-icon{display:none;}.ak-renderer-tableHeader-sortable-column__button{cursor:",(({isCustomCursorActive:e})=>e?`${c} !important`:"auto !important"),";}h1#title-text{text-align:center;padding-bottom:32px;justify-content:center;}span.inline-highlight{cursor:auto !important;background:none !important;border-bottom:none !important;box-shadow:none !important;}span.heading-anchor-wrapper{display:none;}"),m=(0,r.Z)("div",{target:"e3fmlue1"})("width:100vw;margin-bottom:72px;background:",o.IR,";",d,' .renderer-page-cover-picture{width:100%;[class*="UnsplashWrapper"]{width:100%;}[class*="LoadingDiv"]{max-width:unset;width:100%;margin-top:0;',d,"}img{margin:0;max-width:unset;border-radius:unset;",d,"}}"),v=(0,r.Z)("div",{target:"e3fmlue2"})({name:"onfabk",styles:"margin-bottom:32px;height:150px;"}),f=(0,r.Z)("div",{target:"e3fmlue3"})({name:"8atqhb",styles:"width:100%;"}),g=(e,t)=>t?`transform: scale(${e})`:`zoom: ${e};`,h=(0,r.Z)("div",{target:"e3fmlue4"})("margin:0 auto;transform-origin:top;@media only screen and (min-width:",l,"px){width:1520px;",(e=>g(2,e.isFirefox)),"}@media only screen and (min-width:",i,"px) and (max-width:",l,"px){width:1140px;",(e=>g(u,e.isFirefox)),"}@media only screen and (min-width:",1080,"px) and (max-width:",i,"px){",(e=>g(1.3,e.isFirefox)),"}@media only screen and (min-width:",1280,"px) and (max-width:",i,"px){width:988px;}@media only screen and (min-width:",1080,"px) and (max-width:",1280,"px){width:760px;}"),x=(0,r.Z)("div",{target:"e3fmlue5"})({name:"16kb41",styles:"height:50px;"}),y=(0,r.Z)("div",{target:"e3fmlue6"})({name:"65avyl",styles:"display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;"}),E=(0,r.Z)("div",{target:"e3fmlue7"})({name:"zlgd6e",styles:"display:flex;justify-content:center;align-items:center;flex:1;"}),b=(0,r.Z)("div",{target:"e3fmlue8"})({name:"wzcth0",styles:"display:flex;justify-content:center;align-items:baseline;box-sizing:border-box;min-height:76px;width:100%;max-width:760px;margin:0 auto 32px auto;word-break:break-word;word-wrap:break-word;"}),w=(0,r.Z)("h1",{target:"e3fmlue9"})("&#title-text{",a.Dq,";font-weight:500;margin-top:0;}font-weight:500;margin:0;color:#333;word-break:break-word;word-wrap:break-word;min-height:35px;padding-top:5px;display:flex;font-size:calc(64px / ",1.3,");@media (min-width:",i,"){font-size:calc(72px / ",u,");}@media (min-width:",l,"px){font-size:calc(84px / ",2,");}"),I=(0,r.Z)("div",{target:"e3fmlue10"})({name:"1e3kg7x",styles:"padding-right:10px;display:flex;justify-content:center;max-width:26px;align-items:center;"}),C=(0,r.Z)("div",{target:"e3fmlue11"})({name:"r3v470",styles:'zoom:0.7;div[role="alert"]{margin:20px auto;width:600px;}'}),Z=(0,r.Z)("span",{target:"e3fmlue12"})({name:"nd8tex",styles:"margin-left:8px;display:inline-block;"})},544179:(e,t,n)=>{"use strict";n.d(t,{rO:()=>a,fd:()=>o,KI:()=>s,ot:()=>i,Xy:()=>l,xb:()=>c,Or:()=>d,jt:()=>u,wb:()=>p,Lk:()=>m,ci:()=>v,N5:()=>f,zm:()=>g});var r=n(660010);let a;!function(e){e.LAYOUT="layout",e.HR="hr",e.EXPAND="expand",e.HEADING="header",e.EMPTY="empty",e.OTHER="other",e.STICKY_HEADER="stickyHeader",e.TABLE="table",e.MACRO="macro",e.IMAGE="image"}(a||(a={}));const o=e=>{const t=document.getElementById(`${r.ce}`),n=.5*window.innerHeight*(e?-1:1);"undefined"!=typeof window&&"function"==typeof window.requestAnimationFrame&&window.requestAnimationFrame((()=>{null==t||t.scrollBy({top:t.getBoundingClientRect().top+n,behavior:"smooth"})}))},s=e=>{var t,n;if(!e.includes("images.unsplash.com"))return e;const r=e.split("?"),a=new URLSearchParams(r[1]),o=Math.min(null===(t=document)||void 0===t||null===(n=t.documentElement)||void 0===n?void 0:n.clientWidth,3e3);return a.set("w",o.toString()),a.delete("q"),`${r[0]}?${a.toString()}`},i=e=>(e=>{const t=[e];for(;t.length>0;){var n;const e=t.pop();if(3==e.nodeType&&0!==(null===(n=e.nodeValue)||void 0===n?void 0:n.trim().length))return e;for(let n=e.childNodes.length-1;n>=0;n--)t.push(e.childNodes[n])}})(e),l=e=>/^([Hh])[0-6].*/.test(null==e?void 0:e.tagName),c=e=>{const t=i(e);if(l(e)&&!t)return!0;if(h(e))return!0;return!(e.classList.contains("rich-media-item")||!!e.querySelector("img")||!!e.querySelector("svg"))&&!t},d=e=>e.classList.contains("rich-media-item")||!!e.querySelector("img")||!!e.querySelector("svg"),u=e=>!!e.querySelector(".pm-table-sticky-wrapper"),p=e=>e.classList.contains("pm-table-container")||!!e.querySelector(".pm-table-container")&&!u(e),m=e=>"true"===e.getAttribute("data-layout-section"),v=e=>"HR"===e.tagName,f=e=>e.classList.contains("ak-renderer-extension")||!!e.querySelector(".ak-renderer-extension"),g=e=>e.classList.contains("code-block")||!!e.querySelector(".code-block"),h=e=>"BR"===e.tagName},959723:(e,t,n)=>{n(122551);const r=n(258428),{defer:a}=n(905451),{getLogger:o}=n(628906),s=o("WrappedReactLoadable"),i=[],l={},c=new Set;function d(){if(0===i.length)for(const e of window.__REACT_LOADABLE__||[]){const{resolve:t,promise:n}=a(5e3);i.push(n),l[e]=t}}function u(e){const{__loadable_id__:t,loader:n,render:a}=e;if(window.__SSR_RENDERED__&&t){d();const e=l[t];e&&n().then(e,(t=>{s.error(t),e()}))}return r(e)}u.preloadReactLoadable=()=>(d(),Promise.all(i)),u.getLoadableIds=()=>Array.from(c),e.exports=u},497176:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(122551),a=n(321534);const o={center:(0,a.iv)({alignItems:"center"}),baseline:(0,a.iv)({alignItems:"baseline"}),flexStart:(0,a.iv)({alignItems:"flex-start"}),flexEnd:(0,a.iv)({alignItems:"flex-end"}),start:(0,a.iv)({alignItems:"start"}),end:(0,a.iv)({alignItems:"end"})},s={center:(0,a.iv)({justifyContent:"center"}),flexStart:(0,a.iv)({justifyContent:"flex-start"}),"space-between":(0,a.iv)({justifyContent:"space-between"}),flexEnd:(0,a.iv)({justifyContent:"flex-end"}),start:(0,a.iv)({justifyContent:"start"}),end:(0,a.iv)({justifyContent:"end"}),spaceBetween:(0,a.iv)({justifyContent:"space-between"})},i={wrap:(0,a.iv)({flexWrap:"wrap"})},l=(0,a.iv)({display:"flex",boxSizing:"border-box",flexDirection:"row"}),c=(0,a.iv)({margin:"0 -2px",color:"var(--ds-text-subtle, #42526E)",pointerEvents:"none",userSelect:"none"}),d=({children:e})=>(0,a.tZ)("span",{css:c},e),u=(0,r.memo)((0,r.forwardRef)((({gap:e,alignItems:t,justifyContent:n,flexWrap:c,divider:u,UNSAFE_style:p,children:v,testId:f},g)=>{const h="string"==typeof u?(0,a.tZ)(d,null,u):u,x=u?r.Children.toArray(v).filter(Boolean).map(((e,t)=>(0,a.tZ)(r.Fragment,{key:t},u&&t>0?h:null,e))):v;return(0,a.tZ)("div",{style:p,css:[l,e&&m[e],t&&o[t],n&&s[n],c&&i[c]],"data-testid":f,ref:g},x)})));u.displayName="Inline";const p=u,m={"space.0":(0,a.iv)({columnGap:"var(--ds-space-0, 0px)"}),"space.025":(0,a.iv)({columnGap:"var(--ds-space-025, 2px)"}),"space.050":(0,a.iv)({columnGap:"var(--ds-space-050, 4px)"}),"space.075":(0,a.iv)({columnGap:"var(--ds-space-075, 6px)"}),"space.100":(0,a.iv)({columnGap:"var(--ds-space-100, 8px)"}),"space.1000":(0,a.iv)({columnGap:"var(--ds-space-1000, 80px)"}),"space.150":(0,a.iv)({columnGap:"var(--ds-space-150, 12px)"}),"space.200":(0,a.iv)({columnGap:"var(--ds-space-200, 16px)"}),"space.250":(0,a.iv)({columnGap:"var(--ds-space-250, 20px)"}),"space.300":(0,a.iv)({columnGap:"var(--ds-space-300, 24px)"}),"space.400":(0,a.iv)({columnGap:"var(--ds-space-400, 32px)"}),"space.500":(0,a.iv)({columnGap:"var(--ds-space-500, 40px)"}),"space.600":(0,a.iv)({columnGap:"var(--ds-space-600, 48px)"}),"space.800":(0,a.iv)({columnGap:"var(--ds-space-800, 64px)"})}},259308:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(122551),a=n(321534);const o={center:(0,a.iv)({alignItems:"center"}),baseline:(0,a.iv)({alignItems:"baseline"}),flexStart:(0,a.iv)({alignItems:"flex-start"}),flexEnd:(0,a.iv)({alignItems:"flex-end"}),start:(0,a.iv)({alignItems:"start"}),end:(0,a.iv)({alignItems:"end"})},s={center:(0,a.iv)({justifyContent:"center"}),flexStart:(0,a.iv)({justifyContent:"flex-start"}),flexEnd:(0,a.iv)({justifyContent:"flex-end"}),start:(0,a.iv)({justifyContent:"start"}),end:(0,a.iv)({justifyContent:"end"})},i={wrap:(0,a.iv)({flexWrap:"wrap"})},l=(0,a.iv)({display:"flex",boxSizing:"border-box",flexDirection:"column"}),c=(0,r.memo)((0,r.forwardRef)((({gap:e,alignItems:t,justifyContent:n,flexWrap:r,children:c,UNSAFE_style:d,testId:p},m)=>(0,a.tZ)("div",{style:d,css:[l,e&&u[e],t&&o[t],n&&s[n],r&&i[r]],"data-testid":p,ref:m},c))));c.displayName="Stack";const d=c,u={"space.0":(0,a.iv)({rowGap:"var(--ds-space-0, 0px)"}),"space.025":(0,a.iv)({rowGap:"var(--ds-space-025, 2px)"}),"space.050":(0,a.iv)({rowGap:"var(--ds-space-050, 4px)"}),"space.075":(0,a.iv)({rowGap:"var(--ds-space-075, 6px)"}),"space.100":(0,a.iv)({rowGap:"var(--ds-space-100, 8px)"}),"space.1000":(0,a.iv)({rowGap:"var(--ds-space-1000, 80px)"}),"space.150":(0,a.iv)({rowGap:"var(--ds-space-150, 12px)"}),"space.200":(0,a.iv)({rowGap:"var(--ds-space-200, 16px)"}),"space.250":(0,a.iv)({rowGap:"var(--ds-space-250, 20px)"}),"space.300":(0,a.iv)({rowGap:"var(--ds-space-300, 24px)"}),"space.400":(0,a.iv)({rowGap:"var(--ds-space-400, 32px)"}),"space.500":(0,a.iv)({rowGap:"var(--ds-space-500, 40px)"}),"space.600":(0,a.iv)({rowGap:"var(--ds-space-600, 48px)"}),"space.800":(0,a.iv)({rowGap:"var(--ds-space-800, 64px)"})}},966290:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(991332),a=n(953307),o=n(122551),s=n(321534),i=n(733437),l=n(497176),c=n(259308),d=n(269375),u=n(781578),p=n(437705),m=n(772657);const v="normal",f="--color",g="--bg-color",h="--bg-color-hover",x="--bg-color-active",y="--focus-color";var E=n(843563),b=n(905657);const w=(0,n(676424).ww)(),I=(0,s.iv)({"&&, a&&":{padding:`0 ${w}px !important`,background:"var(--bg-color)",color:"var(--color) !important",fontWeight:"var(--ds-font-weight-medium, 500)"},"&&:focus, a&&:focus":{boxShadow:"0 0 0 2px var(--focus-color)"},"&&:hover, &&:active, a&&:hover, a&&:active":{textDecoration:"underline"},"&&:hover":{backgroundColor:"var(--bg-color-hover)"},"&&:active":{backgroundColor:"var(--bg-color-active)"}}),C=(0,s.iv)({"&&, a&&":{padding:"0 !important"}}),Z=e=>{const{appearance:t=v,actions:n=[],linkComponent:r,testId:a}=e;if(!n.length)return null;const o=t!==v;return(0,s.tZ)(l.Z,{gap:"space.100",flexWrap:"wrap",alignItems:"center",divider:o?null:"·",UNSAFE_style:o?void 0:{transform:"translateX(-2px)"},testId:a&&`${a}-actions`},n.map(((e,n)=>(0,s.tZ)(b.Z,{onClick:e.onClick,href:e.href,target:e.target,appearance:o?"default":"link",component:r,spacing:"compact",testId:e.testId,key:n,style:{[f]:E.HC[t],[g]:E.hR[t].default,[h]:E.hR[t].pressed,[x]:E.hR[t].active,[y]:E.Qx[t]},css:[I,"normal"===t&&C]},e.content))))};var P=n(723780),_=n(607159),S=n(146872),k=n(218986);const F=({appearance:e,onClick:t,isBold:n,isExpanded:r,testId:a})=>{let o=k.default,l="Dismiss",c="small",d=a&&`${a}-dismiss`;return n&&(o=r?S.default:_.default,l=r?"Collapse":"Expand",c="medium",d=a&&`${a}-toggle`),(0,s.tZ)(m.Z,null,(0,s.tZ)(i.Z,{as:"button",type:"button",justifyContent:"center",alignItems:"center",borderStyle:"none",borderRadius:"normal",padding:"space.0",width:"size.200",height:"size.200",onClick:t,"aria-expanded":n?r:void 0,UNSAFE_style:{flex:"0 0 auto",background:"none",cursor:"pointer",whiteSpace:"nowrap"},testId:d},(0,s.tZ)(o,{label:l,size:c,primaryColor:E.F7[e]})))},M=(0,o.memo)(F);var A=n(396598),N=n(407552);const L=({children:e,isExpanded:t,testId:n})=>o.createElement(i.Z,{UNSAFE_style:{minWidth:0,maxHeight:t?150:0,flex:"1 1 100%",transition:"max-height 0.3s"},"aria-hidden":!t,testId:n&&`${n}-expander`},o.createElement(A.Z,{appear:!0},t&&o.createElement(N.ZP,null,(t=>o.createElement(i.Z,(0,a.Z)({display:"block",UNSAFE_style:{width:"100%"}},t),o.createElement(c.Z,{gap:"space.100"},e)))))),D={componentName:"flag",packageName:"@atlaskit/flag",packageVersion:"15.0.6"},O=e=>{const{actions:t=[],appearance:n=v,icon:f,title:g,description:h,linkComponent:x,onMouseOver:y,onFocus:b=p.Z,onMouseOut:w,onBlur:I=p.Z,onDismissed:C=p.Z,testId:_,id:S,analyticsContext:k}=e,{onDismissed:F,isDismissAllowed:A}=(0,P.Mx)(),N=(0,o.useCallback)(((e,t)=>{C(e,t),F(e,t)}),[C,F]),[O,R]=(0,o.useState)(!1),T=(0,u.B)((0,r.Z)({fn:N,action:"dismissed",analyticsData:k},D)),j=n!==v,G=(0,o.useCallback)((()=>{R((e=>!e))}),[]),B=(0,o.useCallback)((()=>{A&&T(S)}),[T,S,A]);(0,o.useEffect)((()=>{j&&O&&!h&&!t.length&&R(!1)}),[t.length,h,j,O]);const $={onMouseOver:y,onFocus:(0,u.B)((0,r.Z)({fn:b,action:"focused",analyticsData:k},D)),onMouseOut:w,onBlur:(0,u.B)((0,r.Z)({fn:I,action:"blurred",analyticsData:k},D))},z=E.FK[n],q=E.zH[n],U=j||A,H=!j&&(h||t.length)||O;return(0,s.tZ)(m.Z,null,(0,s.tZ)(i.Z,(0,a.Z)({display:"block",backgroundColor:E.Yt[n],shadow:"overlay",padding:"space.200",borderRadius:"normal",overflow:"hidden",layer:"flag",UNSAFE_style:{width:"100%",transition:"background-color 200ms"},role:"alert",tabIndex:0,testId:_},$),(0,s.tZ)(l.Z,{gap:"space.200"},(0,s.tZ)(i.Z,{alignItems:"start",UNSAFE_style:{color:q,flexShrink:0}},f),(0,s.tZ)(c.Z,{gap:H?"space.100":"space.0",UNSAFE_style:{flexGrow:1,transition:"gap 0.3s"}},(0,s.tZ)(l.Z,{gap:"space.100",justifyContent:"spaceBetween"},(0,s.tZ)(i.Z,{display:"block",UNSAFE_style:{paddingTop:2}},(0,s.tZ)(d.Z,{color:z,fontWeight:"semibold",UNSAFE_style:{overflowWrap:"anywhere"}},g)),U?!(j&&!h&&!t.length)&&(0,s.tZ)(M,{testId:_,appearance:n,isBold:j,isExpanded:O,onClick:j?G:B}):null),(0,s.tZ)(L,{isExpanded:!j||O,testId:_},h&&(0,s.tZ)(d.Z,{as:"div",color:z,UNSAFE_style:{maxHeight:100,overflow:"auto",overflowWrap:"anywhere"},testId:_&&`${_}-description`},h),(0,s.tZ)(Z,{actions:t,appearance:n,linkComponent:x,testId:_}))))))}},218986:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(122551))&&r.__esModule?r:{default:r},o=n(386056);const s=e=>a.default.createElement(o.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M12 10.586L6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 10-1.414-1.414L12 10.586z" fill="currentColor"/></svg>'},e));s.displayName="CrossIcon";var i=s;t.default=i},607159:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(122551))&&r.__esModule?r:{default:r},o=n(386056);const s=e=>a.default.createElement(o.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M6.744 8.744a1.053 1.053 0 000 1.49l4.547 4.557a1 1 0 001.416 0l4.55-4.558a1.051 1.051 0 10-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 00-1.487 0z" fill="currentColor"/></svg>'},e));s.displayName="HipchatChevronDownIcon";var i=s;t.default=i},146872:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(122551))&&r.__esModule?r:{default:r},o=n(386056);const s=e=>a.default.createElement(o.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M11.294 8.708l-.001.001-4.549 4.559a1.051 1.051 0 101.486 1.488l.001-.001 3.77-3.776 3.768 3.776a1.05 1.05 0 001.486.001h.001a1.054 1.054 0 00.001-1.489l-4.548-4.558a1 1 0 00-1.415-.001z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));s.displayName="HipchatChevronUpIcon";var i=s;t.default=i},835801:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(122551),a=n(967079),o=n(195298),s=n(573378);const i=(e,t,n)=>({["entering"===t?"0%":"100%"]:{transform:{top:"translate3d(0, -100%, 0)",right:"translate3d(100%, 0, 0)",bottom:"translate3d(0, 100%, 0)",left:"translate3d(-100%, 0, 0)"}[e],opacity:"inout"===n||"in"===n&&"entering"===t||"out"===n&&"exiting"===t?0:1},["entering"===t?"100%":"0%"]:{transform:"none",opacity:1}}),l=({children:e,enterFrom:t,exitTo:n,fade:l="none",duration:c=o.MH,isPaused:d,onFinish:u,animationTimingFunction:p=(e=>"entering"===e?a.Vv:a.YQ)})=>r.createElement(s.Z,{duration:c,enteringAnimation:i(t,"entering",l),exitingAnimation:i(n||t,"exiting",l),animationTimingFunction:p,isPaused:d,onFinish:u},e)},585914:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjciIGN4PSIxNiIgY3k9IjE2IiByPSIxNiIgZmlsbD0iIzRDOUFGRiIvPgo8L3N2Zz4K"}}]);
//# sourceMappingURL=38727.9vjEjrxAWr.js.map