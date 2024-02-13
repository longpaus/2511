"use strict";(self._cf=self._cf||[]).push([[98650],{340575:(e,n,t)=>{let r;t.d(n,{m:()=>r}),function(e){e.FREE="FREE",e.PREMIUM="PREMIUM",e.STANDARD="STANDARD"}(r||(r={}))},170915:(e,n,t)=>{let r;t.d(n,{x:()=>r}),function(e){e.INHERIT="inherit",e.BACKBONE="backbone",e.BETTER_TOGETHER="better-together",e.COLLABORATION="collaboration",e.CONTENT_EXPERIENCE="content-experience",e.DISCO="disco",e.ECOSYSTEM="ecosystem",e.GROWTH="growth",e.GROWTH_APOLLO="growth-apollo",e.GROWTH_UPFLOW="growth-upflow",e.MISSION_CONTROL="mission-control",e.CC_ONBOARDING="cc-onboarding",e.TAILORED_EXPERIENCES="tailored-experiences",e.SMARTS="smarts",e.CC_ANALYTICS="cc-analytics",e.ECONOMY="economy"}(r||(r={}))},72055:(e,n,t)=>{t.d(n,{O:()=>g});var r=t(991332),o=t(122551),a=t(268481),s=t.n(a),i=t(401487),l=t(598728),d=t(596207),c=t(170915);const m=o.createContext("unknown");m.displayName="AttributionContext";var u=t(919712),h=t(28201),E=t(184786);const v=(0,h.y$)({__loadable_id__:"r3Z-4",name:"IntlNextProvider",loader:async()=>(await t.e(54936).then(t.bind(t,464984))).IntlProvider});class p extends o.Component{componentDidCatch(e){throw e}render(){var e;if(null!==(e=this.state)&&void 0!==e&&e.missingIntlProviderInAncestry){const{locale:e,messages:n}=(0,E.i0)();return o.createElement(v,{key:e,"data-test-language":e,locale:e,defaultLocale:E.ZW,messages:n,textComponent:"span"},this.props.children)}return this.props.children}}p.displayName="IntlNextErrorBoundary";class C extends o.Component{componentDidMount(){this.checkForAttributionError()}componentDidUpdate(){this.checkForAttributionError()}componentDidCatch(e,n){this.props.onError(e,n),this.setState({error:e,errorInfo:n})}checkForAttributionError(){0}render(){const{attribution:e,children:n,renderOnError:t}=this.props;return this.state&&this.state.error&&this.state.errorInfo?o.createElement(t,{attribution:e,error:this.state.error,errorInfo:this.state.errorInfo}):n}}function g(e){const{children:n,onError:t,renderOnError:a}=e,s=function(e){const n=(0,o.useContext)(m);return e===c.x.INHERIT?n:e}(e.attribution),h=(0,o.useContext)(u.W),E=(0,o.useCallback)(((e,n)=>{if(h&&h(e))throw e;(0,l.aU)(e,{componentStack:n.componentStack,errorHashCode:R(e,n)}),(0,i.LZ)(e)||((0,d.U)().submitError(e,{attribution:s}),(0,i.Xb)(e)),t&&t(e,n)}),[s,h,t]),v=(0,o.useCallback)((e=>o.createElement(a,(0,r.Z)({},e))),[]);return o.createElement(m.Provider,{value:s},o.createElement(C,{attribution:s,onError:E,renderOnError:v},o.createElement(p,null,n)))}function R(e,n){const t=s()(`${e.message||String(e)}${n.componentStack}`,{asBytes:!0});return(1073741823&(255&t[0]|(255&t[1])<<8|(255&t[2])<<16|(255&t[3])<<24)).toString(32)}C.displayName="GenericErrorBoundaryComponent",g.displayName="GenericErrorBoundary"},440297:(e,n,t)=>{t.d(n,{W:()=>s});var r=t(29298),o=t(122551),a=t(919712);class s extends o.Component{constructor(...e){super(...e),(0,r.Z)(this,"willParentCatch",void 0),(0,r.Z)(this,"state",{error:null}),(0,r.Z)(this,"willCatch",(e=>{var n;return Boolean(this.props.isKnownError(e)||(null===(n=this.willParentCatch)||void 0===n?void 0:n.call(this,e)))}))}componentDidCatch(e){if(!this.props.isKnownError(e))throw e;var n,t;null===(n=(t=this.props).onError)||void 0===n||n.call(t,e),this.setState({error:e})}render(){const{error:e}=this.state;return o.createElement(a.W.Consumer,null,(n=>(this.willParentCatch=n,o.createElement(a.W.Provider,{value:this.willCatch},e?this.props.renderOnError(e):this.props.children))))}}s.displayName="KnownErrorBoundary"},919712:(e,n,t)=>{t.d(n,{W:()=>r});const r=t(122551).createContext((()=>!1));r.displayName="KnownErrorBoundaryContext"},213489:(e,n,t)=>{t.d(n,{Y:()=>i,T:()=>d});var r=t(991332),o=t(122551),a=t(902195),s=t(440297);const i=e=>o.createElement(s.W,(0,r.Z)({isKnownError:d},e));i.displayName="UnauthorizedErrorBoundary";const l=e=>{var n,t;return!1===(null==e||null===(n=e.extensions)||void 0===n||null===(t=n.data)||void 0===t?void 0:t.authorized)},d=e=>(0,a.j)(e,"403",l)},902195:(e,n,t)=>{t.d(n,{j:()=>o,e:()=>s});var r=t(853102);function o(e,n,t){var o;return!!e&&((0,r.MS)(e)?(null===(o=e.graphQLErrors)||void 0===o?void 0:o.some((e=>a(e,n,t))))||a(null==e?void 0:e.networkError,n,t):a(e,n,t))}function a(e,n,t){if(e){if(s(e)===n||null!=t&&t(e))return!0;const{originalError:r}=e;if(r)return o(r,n,t)}return!1}function s(e){if(e){var n,t;let o=null===(n=e.response)||void 0===n?void 0:n.status;if(null==o){const{extensions:n}=e;var r;if(n)o=n.statusCode||(null===(r=n.http)||void 0===r?void 0:r.status)}return null===(t=o)||void 0===t?void 0:t.toString()}}},401487:(e,n,t)=>{t.d(n,{Xb:()=>l,LZ:()=>d,wY:()=>c});var r=t(29298),o=t(853102),a=t(596207);const s=Symbol("error marked as handled");const i=new class{constructor(e,n){this.gracefulHandlingPeriodMs=e,this.errorHandler=n,(0,r.Z)(this,"errorsToHandle",new Map),(0,r.Z)(this,"processError",(e=>{e&&this.scheduleErrorReporting(e)})),(0,r.Z)(this,"isErrorMarkedAsHandled",(e=>!!e&&("object"==typeof e&&Boolean(e[s])))),(0,r.Z)(this,"markErrorAsHandled",(e=>{if(!e)return;(0,o.MS)(e)&&((e.graphQLErrors||[]).forEach((e=>this.markErrorAsHandled(e))),this.markErrorAsHandled(e.networkError));const n=this.errorsToHandle.get(e);"object"==typeof e&&(e[s]=!0),window.clearTimeout(n),this.errorsToHandle.delete(e)}))}scheduleErrorReporting(e){const n=window.setTimeout((()=>{this.errorHandler(e),l(e)}),this.gracefulHandlingPeriodMs);this.errorsToHandle.set(e,n)}}(100,(function(e){(0,a.U)().submitError(e,{attribution:"graphql"})})),l=i.markErrorAsHandled,d=i.isErrorMarkedAsHandled,c=i.processError},917465:(e,n,t)=>{t.d(n,{b:()=>r});const r="/wiki"},426266:(e,n,t)=>{t.d(n,{v:()=>o});var r=t(538639);const o={[r.tH.name]:r.tH,[r.ts.name]:r.ts,[r.Ch.name]:r.Ch,[r.z8.name]:r.z8,[r.XN.name]:r.XN,[r.B$.name]:r.B$,[r.Cj.name]:r.Cj,[r.km.name]:r.km,[r.q9.name]:r.q9,[r.zh.name]:r.zh,[r.ri.name]:r.ri,[r.uV.name]:r.uV,[r.tz.name]:r.tz,[r.N4.name]:r.N4,[r.Rs.name]:r.Rs,[r.EZ.name]:r.EZ,[r.Vr.name]:r.Vr,[r.Ku.name]:r.Ku,[r.$j.name]:r.$j,[r.So.name]:r.So,[r.F.name]:r.F,[r.Ay.name]:r.Ay,[r.KP.name]:r.KP,[r.cu.name]:r.cu,[r.eL.name]:r.eL,[r.vP.name]:r.vP,[r.RI.name]:r.RI,[r.y4.name]:r.y4,[r.SM.name]:r.SM,[r.Cz.name]:r.Cz,[r.TA.name]:r.TA,[r.S1.name]:r.S1,[r.ME.name]:r.ME,[r.At.name]:r.At,[r.Lf.name]:r.Lf,[r.AI.name]:r.AI,[r.uc.name]:r.uc,[r.z4.name]:r.z4,[r._t.name]:r._t,[r.xL.name]:r.xL,[r.tO.name]:r.tO,[r.te.name]:r.te,[r.oq.name]:r.oq,[r.rq.name]:r.rq,[r.y9.name]:r.y9,[r.dn.name]:r.dn,[r.O2.name]:r.O2,[r.XZ.name]:r.XZ,[r.s2.name]:r.s2,[r.Xp.name]:r.Xp,[r.sj.name]:r.sj,[r.Z1.name]:r.Z1,[r.Qv.name]:r.Qv,[r.s3.name]:r.s3,[r.BJ.name]:r.BJ,[r.RT.name]:r.RT,[r.Z9.name]:r.Z9,[r.Cp.name]:r.Cp,[r.nX.name]:r.nX,[r.dm.name]:r.dm,[r.rW.name]:r.rW,[r.s$.name]:r.s$,[r.mE.name]:r.mE,[r.iN.name]:r.iN,[r.jT.name]:r.jT,[r.zo.name]:r.zo,[r.Xu.name]:r.Xu,[r.p4.name]:r.p4,[r.ck.name]:r.ck,[r.U1.name]:r.U1,[r._p.name]:r._p,[r._2.name]:r._2,[r.WQ.name]:r.WQ,[r.Jd.name]:r.Jd,[r.Yw.name]:r.Yw,[r.T3.name]:r.T3,[r.HE.name]:r.HE,[r.gC.name]:r.gC,[r.Te.name]:r.Te,[r.dd.name]:r.dd,[r.nM.name]:r.nM,[r.cz.name]:r.cz,[r.RW.name]:r.RW,[r.Sd.name]:r.Sd,[r.LH.name]:r.LH,[r.u$.name]:r.u$,[r.dc.name]:r.dc,[r.Fd.name]:r.Fd,[r.Lz.name]:r.Lz,[r.mR.name]:r.mR,[r.me.name]:r.me,[r.oG.name]:r.oG,[r.i1.name]:r.i1,[r.m1.name]:r.m1,[r.pH.name]:r.pH,[r.Fg.name]:r.Fg,[r.G9.name]:r.G9,[r.yM.name]:r.yM,[r.uL.name]:r.uL,[r.Gr.name]:r.Gr,[r.uR.name]:r.uR,[r.Bn.name]:r.Bn,[r.Ts.name]:r.Ts,[r.Es.name]:r.Es,[r.KD.name]:r.KD,[r.dj.name]:r.dj,[r.kk.name]:r.kk,[r.kj.name]:r.kj,[r.wJ.name]:r.wJ,[r.QT.name]:r.QT,[r.J3.name]:r.J3,[r.aR.name]:r.aR,[r.xt.name]:r.xt,[r.s8.name]:r.s8,[r.Rm.name]:r.Rm,[r.nZ.name]:r.nZ,[r.vr.name]:r.vr,[r.J1.name]:r.J1,[r.R4.name]:r.R4,[r.GJ.name]:r.GJ}},89557:(e,n,t)=>{t.d(n,{z1:()=>i,Sd:()=>l});var r=t(991332),o=t(122551),a=t(64172),s=t.n(a);const i=o.createContext({contentId:void 0,contentIdLoading:!1,contentSlug:void 0,embeddedContentRender:void 0,queryHash:void 0,routeName:void 0,spaceKey:void 0,versionOverride:void 0,searchSessionId:void 0,isLite:!1});i.displayName="PageContext";s().shape({contentId:s().oneOfType([s().string,s().symbol]),contentIdLoading:s().bool,contentSlug:s().string,embeddedContentRender:s().string,queryHash:s().string,routeName:s().string,spaceKey:s().string,versionOverride:s().number,searchSessionId:s().string,isLite:s().bool});function l(e){const n=n=>o.createElement(i.Consumer,null,(t=>o.createElement(e,(0,r.Z)((0,r.Z)({},n),{},{pageContext:t}))));return n.displayName=`withPageContext(${e.displayName||e.name})`,n}},402493:(e,n,t)=>{t.d(n,{Jv:()=>g,gZ:()=>R,vd:()=>y});var r=t(122551),o=t(499082),a=t(401487),s=t(596207),i=t(213489),l=t(483565),d=t(158466),c=t(426266),m=t(340575);const u=t(331377).ZP`query PageRestrictionsQuery($contentId:ID!$status:[String]$includeAncestors:Boolean!){singleContent(id:$contentId status:$status){id hasInheritedRestrictions hasViewRestrictions hasRestrictions ancestors@include(if:$includeAncestors){id title hasRestrictions links{webui}}}}`;var h=t(597936),E=t(772610);const v=["current","draft","archived"],p={loading:!1,refetch:()=>{}},C=(0,r.createContext)(p),g=C.Consumer,R=e=>{const n=(0,h.k)(e.contentId),t=function(){const{transitionId:e}=(0,r.useContext)(E.M),n=(0,r.useRef)(0),t=n.current===e?"cache-first":"network-only";return n.current=e,t}(),g=[c.v.CREATE_BLOG.name,c.v.CREATE_PAGE.name,c.v.EDIT_BLOG.name,c.v.EDIT_PAGE.name],R=(0,l.TW)("confluence.frontend.page-share-and-permissions"),y=e.routeName||"",I=g.includes(y),{edition:T}=(0,d.D)()||{},b=m.m.FREE===T&&(!R||I),{data:A,loading:N,error:S,refetch:w}=(0,o.aM)(u,{variables:{contentId:null==n?void 0:n.toString(),status:v,includeAncestors:b},skip:!n||"symbol"==typeof n,fetchPolicy:t});S&&((0,i.T)(S)||(0,s.U)().submitError(S,{attribution:"backbone"}),(0,a.Xb)(S));const x=(0,r.useMemo)((()=>n?{loading:N,error:S,restrictions:f(A),refetch:w}:p),[N,S,A,w,n]);return r.createElement(C.Provider,{value:x},e.children)};R.displayName="PageRestrictionsContextProvider";const f=e=>{const n=null==e?void 0:e.singleContent;var t;if(n)return{hasRestrictions:n.hasRestrictions,hasViewRestrictions:n.hasViewRestrictions,hasInheritedRestrictions:n.hasInheritedRestrictions,ancestors:(null===(t=n.ancestors)||void 0===t?void 0:t.map((e=>{var n;return{id:(null==e?void 0:e.id)||null,title:(null==e?void 0:e.title)||null,hasRestrictions:Boolean(null==e?void 0:e.hasRestrictions),links:{webui:(null==e||null===(n=e.links)||void 0===n?void 0:n.webui)||null}}})))||[]}},y=()=>(0,r.useContext)(C)},597936:(e,n,t)=>{t.d(n,{k:()=>i});var r=t(122551),o=t(89557),a=t(772610),s=t(330828);function i(e){const{contentId:n}=(0,r.useContext)(o.z1),{getQueryParams:t}=(0,r.useContext)(a.M);return e||(n||(0,s.r)(t(),"draftId"))}},772610:(e,n,t)=>{t.d(n,{M:()=>s});const r=()=>null,o=()=>"",a=()=>{},s=t(122551).createContext({getHref:o,history:null,location:null,match:null,transitionId:null,toUrl:o,matchRoute:r,matchSupportedRoute:r,getQueryParams:()=>({}),setQueryParams:a,getHash:o,setHash:a,replace:a,routes:[],push:a,open:r,onPageReload:a,preloadRoute:a});s.displayName="RoutesContext"},330828:(e,n,t)=>{function r(e,n){if(!e)return;const t=e[n];return Array.isArray(t)?t[0]:t}function o(e,n,t){const o=r(e,n),a=parseInt(o||"",10);return isNaN(a)?t:a}t.d(n,{r:()=>r,S:()=>o})},19978:(e,n,t)=>{t.d(n,{g:()=>r});const r=t(122551).createContext(void 0);r.displayName="SessionDataContext"},483565:(e,n,t)=>{t.d(n,{TW:()=>a,hS:()=>s});var r=t(158466),o=t(619241);const a=e=>{const n=(0,r.D)();return(0,o.x)(e),Boolean(null==n?void 0:n.featureFlags[e])},s=e=>{const n=(0,r.D)(),t=null==n?void 0:n.featureFlags[e];return(0,o.x)(e),null!=t?String(t):void 0}},158466:(e,n,t)=>{t.d(n,{D:()=>a});var r=t(122551),o=t(19978);const a=()=>(0,r.useContext)(o.g)},619241:(e,n,t)=>{t.d(n,{x:()=>s});var r=t(122551),o=t(937613),a=t(158466);const s=e=>{const n=(0,a.D)();(0,r.useEffect)((()=>{var t,r;null==n||null===(t=n.featureFlagClient)||void 0===t||null===(r=t.trackFeatureFlag)||void 0===r||r.call(t,e,{triggerReason:o.s.AutoExposure})}),[e,null==n?void 0:n.featureFlagClient])}}}]);
//# sourceMappingURL=98650.G136vVCgvV.js.map