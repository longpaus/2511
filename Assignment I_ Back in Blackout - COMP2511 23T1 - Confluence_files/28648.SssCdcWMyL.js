"use strict";(self._cf=self._cf||[]).push([[28648,76140],{259220:(e,t,n)=>{n.d(t,{M:()=>d});var r=n(991332),o=n(122551),s=n(257848),i=n(574409),a=n(118140),l=n(379128);const c=()=>{},d=(0,o.memo)((({customData:e={},metric:t,onComplete:n=c,stopTime:d,timing:u})=>{const _=(0,o.useCallback)((()=>{t&&(s.n.getPageLoadMetric().mark(`${l.T}:${t.key}`),t.stop({customData:(0,r.Z)((0,r.Z)({},e),{},{pageLoadInfo:(0,i.aX)()}),stopTime:d}),n())}),[t,n]);return(0,a.G)(_,u),null}))},940362:(e,t,n)=>{n.d(t,{ck:()=>r,o2:()=>o,cu:()=>s,yG:()=>i,xl:()=>a,fZ:()=>l,Ex:()=>c,hM:()=>d,cT:()=>u,Ck:()=>_,Ho:()=>S,GR:()=>E,$u:()=>m,Up:()=>p,lr:()=>T,gX:()=>f,EE:()=>R,p$:()=>w,Ku:()=>h,Qf:()=>g,qi:()=>N,iC:()=>I});const r="SSR_COMMENT_BUTTON",o="SSR_SHARE_BUTTON",s="SSR_REACTIONS_BUTTON",i="SSR_WATCH_BUTTON",a="SSR_FAVORITE_BUTTON",l="SSR_EDIT_BUTTON",c="SSR_RESTRICTIONS_BUTTON",d="SSR_NAV_APP_SWITCHER",u="SSR_NAV_APPS_BUTTON",_="SSR_NAV_CREATE",S="SSR_NAV_CUSTOM_HOMEPAGE_BUTTON",E="SSR_NAV_HELP",m="SSR_NAV_HOME_BUTTON",p="SSR_NAV_NOTIFICATIONS",T="SSR_NAV_PAGES_BUTTON",f="SSR_NAV_PEOPLE_BUTTON",R="SSR_NAV_PROFILE",w="SSR_NAV_SETTINGS",h="SSR_NAV_SPACES_BUTTON",g="SSR_NAV_TEMPLATES_BUTTON",N="SSR_PAGE_TREE_NON_LINK",I="SSR_NAV_INVITE_BUTTON"},961634:(e,t,n)=>{n.d(t,{X:()=>i});var r=n(122551),o=n(170915),s=n(72055);function i({children:e,error:t}){const[n,i]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=e=>{e.error===t&&e.preventDefault()};return window.addEventListener("error",e),i(!0),()=>{window.removeEventListener("error",e),i(!1)}}),[t,i]);const l=(0,r.useCallback)((t=>r.createElement(r.Fragment,null,e)),[e]);return r.createElement(s.O,{attribution:o.x.INHERIT,renderOnError:l},n?r.createElement(a,{error:t}):null)}function a({error:e}){throw e}i.displayName="ErrorDisplay"},186483:(e,t,n)=>{n.d(t,{F:()=>s});var r=n(122551),o=n(451379);function s({name:e,attributes:t}){const n=(0,r.useContext)(o.F);return(0,r.useEffect)((()=>n.succeed({name:e,attributes:t})),[e,t,n]),null}},451379:(e,t,n)=>{n.d(t,{F:()=>s,Q:()=>i});var r=n(991332),o=n(122551);const s=(0,o.createContext)({start(){},succeed(){},fail(){},abort(){},stopOnError(){},subscribe:()=>()=>{},getExperienceState:()=>null});function i(e){const t=t=>o.createElement(s.Consumer,null,(n=>o.createElement(e,(0,r.Z)((0,r.Z)({},t),{},{experienceTracker:n}))));return t.displayName=`withExperienceTracker(${e.displayName||e.name})`,t}},161461:(e,t,n)=>{n.d(t,{M:()=>r});const r=n(331377).ZP`fragment UserPermissionFragment on Query{user(current:true){id confluence{permissionType}}}`},257428:(e,t,n)=>{n.d(t,{S:()=>s});var r=n(331377),o=n(161461);const s=r.ZP`query GlobalOperationsUserPermissionTypeQuery{...UserPermissionFragment}${o.M}`},90818:(e,t,n)=>{let r;n.d(t,{n:()=>r}),function(e){e.ANONYMOUS="ANONYMOUS",e.APP="APP",e.EXTERNAL="EXTERNAL",e.INTERNAL="INTERNAL",e.JSD="JSD"}(r||(r={}))},275281:(e,t,n)=>{n.d(t,{F:()=>r});const r=e=>{var t,n;return null==e||null===(t=e.user)||void 0===t||null===(n=t.confluence)||void 0===n?void 0:n.permissionType}},755492:(e,t,n)=>{n.d(t,{pA:()=>r,KN:()=>o,by:()=>s});const r="confluence.frontend.enable.external.collab",o="confluence.frontend.enable.external.collab.single.space",s="confluence.frontend.external-collab-improvements"},96962:(e,t,n)=>{n.d(t,{Q:()=>d});var r=n(499082),o=n(483565),s=n(257428),i=n(90818),a=n(755492),l=n(275281);let c;const d=()=>{const e=(0,o.TW)(a.pA),{data:t,loading:n,error:d}=(0,r.aM)(s.S,{errorPolicy:"all",skip:!e||void 0!==c,onCompleted(e){c=c||(0,l.F)(e)===i.n.EXTERNAL}});return{isExternalCollaborator:c||(0,l.F)(t)===i.n.EXTERNAL,loading:n,error:d}}},990862:(e,t,n)=>{let r;n.d(t,{k:()=>r}),function(e){e.SHARE_PAGE="share-page",e.PAGE_RESTRICTIONS="page-restrictions",e.CONTENT_TOOLS="content-tools",e.PAGE_FAVOURITE="page-favourite",e.WATCH_PAGE="watch-page",e.EDIT_PAGE="edit-page",e.PAGE_COMMENTS="page-comments"}(r||(r={}))},528365:(e,t,n)=>{n.d(t,{tl:()=>a,tv:()=>l,Oi:()=>c,es:()=>d,So:()=>u,_N:()=>S});var r=n(991332),o=n(917068),s=n(443033),i=n(596207);const a=e=>{window.performance&&window.performance.clearMarks&&e.forEach((e=>window.performance.clearMarks(e)))},l=e=>{if(window.performance&&window.performance.getEntriesByName){const t=window.performance.getEntriesByName(e);return t&&t[0]}},c=(e,t)=>{const n=l(e),r=l(t);if(n&&r)return Math.abs(n.startTime-r.startTime)},d=e=>{const t=l(e);if(t)return t.startTime},u=({subject:e,subjectId:t=""})=>{const n=`${e}.${t}.start`;a([n,`${e}.${t}.end`]),window.performance.mark(n)},_=async({details:e,subject:t,subjectId:n,includeFeatureFlags:a})=>{const l=`${t}.${n}.end`;window.performance.mark(l);const d=c(`${t}.${n}.start`,l);if(void 0!==d)try{const i=(0,s.getAnalyticsWebClient)(),l=a?(0,o.g)():Promise.resolve({featureFlags:{}}),[c,{featureFlags:u}]=await Promise.all([i,l]),_=((e={})=>Object.keys(e).filter((t=>e[t])).reduce(((t,n)=>(t[n]=e[n],t)),{}))(u);c.sendOperationalEvent({tags:["performance"],source:"confluence-frontend",action:"done",actionSubject:t,actionSubjectId:n,attributes:(0,r.Z)({featureFlags:_,duration:d},e)})}catch(u){(0,i.U)().submitError(u,{attribution:"unknown"})}},S=({subject:e,subjectId:t="",details:n={},includeFeatureFlags:r=!1})=>{l(`${e}.${t}.end`)||_({details:n,includeFeatureFlags:r,subject:e,subjectId:t})}},616519:(e,t,n)=>{n.r(t),n.d(t,{RestrictionsButton:()=>Z});var r=n(991332),o=n(790632),s=n(122551),i=n(464984),a=n(524798),l=n(883383),c=n(507080),d=n(395937),u=n(612642),_=n(112261),S=n(213715),E=n(186483),m=n(199319),p=n(990862),T=n(661315),f=n(940362),R=n(259220),w=n(717599),h=n(528365),g=n(772610),N=n(975568),I=n(597936),A=n(402493),v=n(755492),y=n(96962),O=n(483565),b=n(961634),C=n(216952),P=n(171025),D=n(417810),L=n(955749);const x=(0,o.Z)("span",{target:"eltl3nx0"})({name:"wvzyhw",styles:"button{font-size:14px;}"}),U=(0,o.Z)("div",{target:"eltl3nx1"})("display:",(e=>e.isGuest?"none":"block"),";"),M=(0,i.defineMessages)({noRestrictions:{id:"restrictions.button.no-restrictions.tooltip",defaultMessage:"No restrictions"},editRestrictionsApply:{id:"restrictions.button.edit-restrictions-apply.tooltip",defaultMessage:"Editing restricted"},restrictionsApply:{id:"restrictions.button.restrictions-apply.tooltip",defaultMessage:"Restrictions apply"}}),Z=e=>{const t=(0,a.Z)(),{className:n,onClick:o,markItemAsLoaded:i,isDisabled:Z,shouldHideSpinner:k,resetDialogState:B,restrictionsButtonSSRRendered:F=!1,restrictionsButtonSSRLocation:V="",triggeredFrom:$=""}=e,j=(0,I.k)(e.contentId),G=(0,O.TW)(v.KN),H=(0,y.Q)(),W=G&&!H.error&&H.isExternalCollaborator;(0,N.n)("restrictions-button");const K=Boolean(window.__SSR_RENDERED__&&F),Q=()=>{var e;return Boolean((null===(e=window.__SSR_EVENTS_CAPTURE__)||void 0===e?void 0:e.restrictionsButton)&&(window.__SSR_RENDERED__||!1)&&K)},X=(0,s.useCallback)((e=>{K&&(window.__SSR_EVENTS_CAPTURE__||(window.__SSR_EVENTS_CAPTURE__={}),window.__SSR_EVENTS_CAPTURE__.restrictionsButton=e),o()}),[window.__SSR_RENDERED__]),{transitionId:z}=(0,s.useContext)(g.M);(0,s.useEffect)((()=>{var e,t,n,r;B&&z&&(B(),null!==(e=window)&&void 0!==e&&null!==(t=e.__SSR_EVENTS_CAPTURE__)&&void 0!==t&&t.restrictionsButton&&(null===(n=window)||void 0===n||(null===(r=n.__SSR_EVENTS_CAPTURE__)||void 0===r||delete r.restrictionsButton)))}),[z]),(0,s.useEffect)((()=>{Q()&&o()}),[]),(0,s.useEffect)((()=>{var e,t,n;k&&window.__SSR_EVENTS_CAPTURE__&&null!==(e=window)&&void 0!==e&&null!==(t=e.__SSR_EVENTS_CAPTURE__)&&void 0!==t&&t.restrictionsButton&&(null===(n=window.__SSR_EVENTS_CAPTURE__)||void 0===n||delete n.restrictionsButton)}),[k]),(0,s.useEffect)((()=>{K&&C.j.markFMP((0,h.es)("CFP-63.ssr-ttr"))}),[K]);const J=(0,s.useCallback)(((e,o,a)=>{const{content:c,icon:w,ariaLabel:h}=function(e,t,n,o){if(t)return{content:s.createElement(l.Z,(0,r.Z)({},M.restrictionsApply)),icon:s.createElement(S.default,{primaryColor:(0,u.Z)("color.icon.danger","#DE350B"),testId:"locked-icon",label:""}),ariaLabel:e.formatMessage(M.restrictionsApply)};if(n)return{content:s.createElement(l.Z,(0,r.Z)({},M.restrictionsApply)),icon:s.createElement(D._,{primaryColor:(0,u.Z)("color.icon.danger","#DE350B"),testId:"unlocked-restricted-icon",label:""}),ariaLabel:e.formatMessage(M.restrictionsApply)};if(o&&!t)return{content:s.createElement(l.Z,(0,r.Z)({},M.editRestrictionsApply)),icon:s.createElement(D._,{primaryColor:(0,u.Z)("color.icon","#42526E"),testId:"unlocked-icon",label:""}),ariaLabel:e.formatMessage(M.editRestrictionsApply)};return{content:s.createElement(l.Z,(0,r.Z)({},M.noRestrictions)),icon:s.createElement(D._,{primaryColor:(0,u.Z)("color.icon","#42526E"),testId:"unlocked-icon",label:""}),ariaLabel:e.formatMessage(M.noRestrictions)}}(t,e,o,a);return i&&i(p.k.PAGE_RESTRICTIONS),s.createElement(s.Fragment,null,G&&H.error&&s.createElement(b.X,{error:H.error}),!1,s.createElement(T.u,{metricName:f.Ex},s.createElement(x,{className:n||"","data-testid":"restriction-button"},s.createElement(_.Z,{content:c},s.createElement(d.Z,{appearance:"subtle","data-test-id":"restrictions.dialog.button",onClick:X,isDisabled:Z,iconBefore:w,"aria-label":h,"data-id":"restrictions-button",style:{width:"32px"}}))),s.createElement(E.F,{name:m.esI}),s.createElement(R.M,{key:`end-${j}`,metric:C.j,customData:{restrictionsButtonSSRRendered:F,restrictionsButtonSSRLocation:V,triggeredFrom:$}})))}),[n,i,X,t,j,Z,F,V,$,G,H.error]),{restrictions:q,loading:Y}=(0,A.vd)(),ee=!q&&Y||G&&H.loading;return j?s.createElement(c.xs,{to:[P.I]},(e=>{if(Q()&&!1===k)return s.createElement(w.C,{spinnerId:"restrictions-loading-spinner",actionType:"restrictionsButton"});if(ee||W)return s.createElement(U,{isGuest:W,"data-test-id":"restriction-placeholder-container"},s.createElement(L.D,null));const t=Boolean(null==q?void 0:q.hasViewRestrictions),n=Boolean(null==q?void 0:q.hasInheritedRestrictions),r=Boolean(null==q?void 0:q.hasRestrictions);return e.setData({hasRestrictions:r,hasInheritedRestrictions:n,hasDirectViewRestrictions:t}),J(t,n,r)})):null};Z.displayName="RestrictionsButton"},171025:(e,t,n)=>{n.d(t,{I:()=>s});var r=n(29298),o=n(507080);class s extends o.W2{constructor({contentId:e=null,userCanEditRestrictions:t=!1,currentUserInfo:n=null,hasInheritedRestrictions:o=!1,hasRestrictions:s=!1,isLoaded:i=!1,restrictionsDetails:a=null,spaceKey:l=null,spaceContainsExternalCollaborators:c=!1,operations:d=null,contentTitle:u=null,edition:_=null,isSiteAdmin:S=!1,contentType:E=null,isExternalShareEnabledForSite:m=!1,isPageExternallyShared:p=!1,isExternalShareVariation:T=!1,isContentExternallySharable:f=!1,ancestors:R=[]}={}){super(),(0,r.Z)(this,"getData",(()=>this.state)),(0,r.Z)(this,"resetData",(()=>{this.setState({contentId:null,contentPermissions:null,currentUserInfo:null,hasInheritedRestrictions:!1,hasRestrictions:!1,isLoaded:!1,restrictionsDetails:null,spaceKey:null,spaceContainsExternalCollaborators:!1,operations:null,contentTitle:null,edition:null,isSiteAdmin:!1,contentType:null,isExternalShareEnabledForSite:!1,isPageExternallyShared:!1,isExternalShareVariation:!1,isContentExternallySharable:!1,ancestors:[]})})),(0,r.Z)(this,"setData",(e=>{Object.keys(e).some((t=>e[t]!==this.state[t]))&&this.setState(e)})),(0,r.Z)(this,"getIsLoaded",(()=>this.state.isLoaded)),(0,r.Z)(this,"getContentId",(()=>this.state.contentId)),this.state={contentId:e,userCanEditRestrictions:t,currentUserInfo:n,hasInheritedRestrictions:o,hasRestrictions:s,isLoaded:i,restrictionsDetails:a,spaceKey:l,spaceContainsExternalCollaborators:c,operations:d,contentTitle:u,edition:_,isSiteAdmin:S,contentType:E,isExternalShareEnabledForSite:m,isPageExternallyShared:p,isExternalShareVariation:T,isContentExternallySharable:f,ancestors:R}}}},417810:(e,t,n)=>{n.d(t,{_:()=>a});var r=n(991332),o=n(122551),s=n(529590);const i=e=>o.createElement("svg",(0,r.Z)((0,r.Z)({},e),{},{width:"24",height:"24",viewBox:"0 0 24 24"}),o.createElement("g",{fill:"none",fillRule:"evenodd"},o.createElement("path",{opacity:".5",d:"M0 0h24v24H0z"}),o.createElement("path",{d:"M8 10V8a2 2 0 10-4 0v3H2V8a4 4 0 118 0v2h6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6c0-1.1.9-2 2-2zm4 7a2 2 0 100-4 2 2 0 000 4z",fill:"currentColor",fillRule:"nonzero"})));i.displayName="UnlockedIconGlyph";const a=e=>o.createElement(s.Z,(0,r.Z)({glyph:i},e));a.displayName="UnlockedIcon"},510555:(e,t,n)=>{n.d(t,{jb:()=>i,g6:()=>a,bs:()=>c,Es:()=>d,Nd:()=>u,RW:()=>_});const r=(0,n(616158).j)("session-data"),o="confluence-frontend-next.featureFlagLocalOverrides",s=(()=>{try{const e="__random__local__storage__test__key__";return window.localStorage.setItem(e,e),window.localStorage.removeItem(e),!0}catch(e){return!1}})(),i=()=>{let e;e=s?window.localStorage.getItem(o):window.sessionStorage.getItem(o);try{return e?JSON.parse(e):{}}catch(t){return{}}},a=()=>s?null!=window.localStorage.getItem(o):null!=window.sessionStorage.getItem(o),l=e=>{const t=e(i());if(Object.keys(t).length)if(s)try{window.localStorage.setItem(o,JSON.stringify(t))}catch(n){r.error`Unable to set local storage. key = "${o}", value = "${JSON.stringify(t)}"`}else window.sessionStorage.setItem(o,JSON.stringify(t));else s?window.localStorage.removeItem(o):window.sessionStorage.removeItem(o);return t},c=(e,t)=>l((n=>(n[e]=t,n))),d=e=>l((t=>(delete t[e],t))),u=()=>l((()=>({}))),_=(e,t)=>{if(!a())return e;const n=i();return Object.keys(e).reduce(((r,o)=>(r[o]=t(o,n,e),r)),{})}},917068:(e,t,n)=>{n.d(t,{e:()=>u,g:()=>d});var r=n(29298),o=n(122551),s=n(913879),i=n(158238),a=n(991332),l=n(997811),c=n(115181);const d=()=>window.__SESSION_DATA_PROMISE__?window.__SESSION_DATA_PROMISE__:window.__SESSION_DATA_PROMISE__=(0,s.LW)(async function(e={}){if(window.USE_MOCKED_SESSION_DATA)return new Promise((e=>{window.MOCK_SESSION_DATA_RESOLVE=e}));if(window.__SESSION_DATA__)return window.__SESSION_DATA__;const t=window.GLOBAL_APOLLO_CLIENT_URI||"/cgraphql";return window.__SESSION_DATA__=c.H.run("fetch:SessionDataQuery",(()=>fetch(`${t}?q=SessionDataQuery`,(0,l.I)({method:"POST",credentials:"include",referrerPolicy:"same-origin",headers:(0,a.Z)({"X-APOLLO-OPERATION-NAME":"SessionDataQuery","Content-Type":"application/json"},e.headers),body:JSON.stringify({query:"\nquery SessionDataQuery @SLA {\n  tenant {\n    shard\n    cloudId\n    environment\n    activationId\n    editions {\n      edition\n    }\n  }\n  userForAnalytics: user {\n    id\n  }\n  user(current: true) {\n    id\n    displayName\n    confluence {\n      accountId\n      userKey\n      locale\n    }\n    timeZone\n  }\n  featureFlags(extraTargeting: true) {\n    nodes {\n      id\n      value\n      explanation {\n        ruleIndex\n        ruleId\n        kind\n      }\n    }\n  }\n}\n"})})).then((async e=>{if(!e.ok)throw new Error(`Cannot load session data: ${e.statusText}`);const t=(await e.json()).data;return window.__SESSION_DATA__=t,t}))))}().then(i.K));class u extends o.Component{constructor(e){super(e),(0,r.Z)(this,"_mount",void 0),(0,r.Z)(this,"state",{});const t=d();this._mount=!0,(0,s.wp)(t)?this.state={sessionData:(0,s.NA)(t)}:t.then((e=>{this._mount&&this.setState({sessionData:e})}))}componentWillUnmount(){this._mount=!1}render(){const{sessionData:e}=this.state;return e?this.props.children(e):!0===this.props.renderChildrenWhenLoading?this.props.children({loading:!0}):null}}u.displayName="SessionData"},505841:(e,t,n)=>{n.d(t,{B:()=>w});var r=n(991332),o=n(69210),s=n(405124),i=n.n(s),a=n(937613),l=n(443033);const c={sendOperationalEvent:e=>(0,l.getAnalyticsWebClient)().then((t=>{t.sendOperationalEvent(e)}))},d=(0,o.default)(((e={})=>new a.Z({flags:e,analyticsHandler:c})),i());var u=n(510555),_=n(596207);let S={},E={};const m=(e,t)=>{const n=(e=>{if(!e&&!window.location.href)return{};const t=new URL(e||window.location.href);return new URLSearchParams(t.search)})(t);for(const r in S)void 0!==e[r]&&("true"!==n.get(S[r])?"false"===n.get(S[r])&&(e[r]=!1):e[r]=!0)};function p(e){return"true"===e||"false"!==e&&("object"==typeof e?JSON.stringify(e):e)}function T(e,t){return e.reduce(((e,n)=>(e[n.id]=t(n),e)),{})}const f=(e,t,n)=>t.hasOwnProperty(e)?(0,r.Z)((0,r.Z)({},n[e]),{},{value:t[e]}):n[e];function R(e){return"object"==typeof e&&"value"in e?(0,r.Z)((0,r.Z)({},e.explanation?{explanation:(0,r.Z)({},e.explanation)}:{}),{},{value:p(e.value)}):{value:p(e),explanation:void 0}}const w=(0,o.default)(((e,t)=>{const n=e?T(e,R):{},r=(0,u.RW)(n,f),o=d();o.setFlags(r);const{original:s,withOverrides:i}=(e=>{const t=T(e,(e=>p(e.value)));return{original:t,withOverrides:(0,u.RW)(t,((e,t,n)=>t.hasOwnProperty(e)?t[e]:n[e]))}})(e);return((e,t)=>{for(const o in E){const s=e[E[o].rolloutFF];if("string"==typeof s)try{const r=JSON.parse(s);var n;e[o]=t?e[o]&&(r.enabledLastDigits.includes(t.substr(-1))||(null===(n=r.enabledUserIds)||void 0===n?void 0:n.includes(t))):e[o]&&r.includeAnonUsers}catch(r){(0,_.U)().submitError(r,{attribution:"backbone"})}}})(i,t),m(i),{originalFeatureFlags:s,featureFlagsWithOverrides:i,featureFlagClient:o}}))},975568:(e,t,n)=>{n.d(t,{n:()=>s});var r=n(122551),o=n(596207);const s=e=>{(0,r.useEffect)((()=>{if(!window.__SSR_CLIENT_ERRORS__||!window.__SSR_CLIENT_ERRORS__[e])return;window.__SSR_CLIENT_ERRORS__[e].forEach((e=>(0,o.U)().submitError(e,{attribution:"backbone"}))),delete window.__SSR_CLIENT_ERRORS__[e]}),[e])}},115181:(e,t,n)=>{n.d(t,{H:()=>o});var r=n(29298);const o=new class{constructor(){(0,r.Z)(this,"measures",void 0),(0,r.Z)(this,"startTime",void 0),this.measures={},this.startTime=0}setStartTime(){this.startTime=performance.now()>>0}run(e,t){return t()}markMeasureStart(e){this.measures[e]={startTime:(performance.now()>>0)-this.startTime,duration:0}}markMeasureEnd(e){var t;null!==(t=this.measures[e])&&void 0!==t&&t.startTime&&(this.measures[e].duration=(performance.now()>>0)-this.startTime-this.measures[e].startTime)}getMeasures(){return Object.entries(this.measures).sort(((e,t)=>e[1].startTime-t[1].startTime)).reduce(((e,[t,n])=>(e[t]=n,e)),{})}clearMeasures(){this.measures={}}}},574409:(e,t,n)=>{n.d(t,{aX:()=>o,V:()=>s});const r={uuid:null,pageId:"",routeName:"",transitionId:0,routingTimestamp:0,currentSavedTimestamp:0},o=()=>(r.currentSavedTimestamp=performance.now(),{uuid:r.uuid,contentId:r.pageId,isInitial:0===r.transitionId,isSSR:Boolean(window.__SSR_RENDERED__),routingDuration:r.currentSavedTimestamp-r.routingTimestamp}),s=(e="",t,n,o)=>{var s;const l=null==t||null===(s=t.params)||void 0===s?void 0:s.contentId,c=o.userId;if(r.pageId!==l||r.routeName!==e){let t;t=c?a(e,l,o):i(),r.uuid=t,r.routeName=e,r.pageId=l,r.transitionId=n,r.routingTimestamp=performance.now()}},i=()=>"10000000-1000-4000-8000-100000000000".replace(/1|0/g,(function(){return(0|16*Math.random()).toString(16)})),a=(e,t,n)=>{const{userId:r,cloudId:o}=n;return`${e=e||"route"}-${t=t||"page"}-${r}-${o}-${Date.now()}`}},213715:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(122551))&&r.__esModule?r:{default:r},s=n(386056);const i=e=>o.default.createElement(s.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentColor" fill-rule="evenodd" d="M8 10V8.002A4.004 4.004 0 0112 4a4 4 0 014 4.002V10a2 2 0 012 2v6c0 1.105-.902 2-2.009 2H8.01A2 2 0 016 18v-6c0-1.102.897-1.995 2-2zm2 0h4V8.002A2.001 2.001 0 0012 6c-1.102 0-2 .898-2 2.002V10zm2 7a2 2 0 100-4 2 2 0 000 4z"/></svg>'},e));i.displayName="LockFilledIcon";var a=i;t.default=a}}]);
//# sourceMappingURL=28648.SssCdcWMyL.js.map