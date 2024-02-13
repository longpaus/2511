"use strict";(self._cf=self._cf||[]).push([[23822,41801],{170915:(e,t,r)=>{let n;r.d(t,{x:()=>n}),function(e){e.INHERIT="inherit",e.BACKBONE="backbone",e.BETTER_TOGETHER="better-together",e.COLLABORATION="collaboration",e.CONTENT_EXPERIENCE="content-experience",e.DISCO="disco",e.ECOSYSTEM="ecosystem",e.GROWTH="growth",e.GROWTH_APOLLO="growth-apollo",e.GROWTH_UPFLOW="growth-upflow",e.MISSION_CONTROL="mission-control",e.CC_ONBOARDING="cc-onboarding",e.TAILORED_EXPERIENCES="tailored-experiences",e.SMARTS="smarts",e.CC_ANALYTICS="cc-analytics",e.ECONOMY="economy"}(n||(n={}))},806297:(e,t,r)=>{r.d(t,{q:()=>c,S:()=>u});var n=r(991332),a=r(122551),o=r(275513),i=r(147543),s=r(28201),l=r(72055);const c=(0,s.ZR)({__loadable_id__:"IzFuP",name:"ErrorComponent",loader:async()=>(await Promise.all([r.e(12705),r.e(61769),r.e(78248),r.e(54936),r.e(11216),r.e(89990),r.e(12953),r.e(96068),r.e(99735)]).then(r.bind(r,743037))).ErrorComponent}),u=({attribution:e,attributes:t,children:r,modal:s})=>{const u=(0,a.useCallback)((e=>a.createElement(c,(0,n.Z)((0,n.Z)({},e),{},{modal:s}))),[s]),d=(0,a.useCallback)((e=>{(0,i.OG)(e)||(0,o.OV)().fail({error:e,attributes:t})}),[t]);return a.createElement(l.O,{attribution:e,renderOnError:u,onError:d},r)};u.displayName="ErrorBoundary"},72055:(e,t,r)=>{r.d(t,{O:()=>E});var n=r(991332),a=r(122551),o=r(268481),i=r.n(o),s=r(401487),l=r(598728),c=r(596207),u=r(170915);const d=a.createContext("unknown");d.displayName="AttributionContext";var m=r(919712),h=r(28201),p=r(184786);const v=(0,h.y$)({__loadable_id__:"r3Z-4",name:"IntlNextProvider",loader:async()=>(await r.e(54936).then(r.bind(r,464984))).IntlProvider});class f extends a.Component{componentDidCatch(e){throw e}render(){var e;if(null!==(e=this.state)&&void 0!==e&&e.missingIntlProviderInAncestry){const{locale:e,messages:t}=(0,p.i0)();return a.createElement(v,{key:e,"data-test-language":e,locale:e,defaultLocale:p.ZW,messages:t,textComponent:"span"},this.props.children)}return this.props.children}}f.displayName="IntlNextErrorBoundary";class b extends a.Component{componentDidMount(){this.checkForAttributionError()}componentDidUpdate(){this.checkForAttributionError()}componentDidCatch(e,t){this.props.onError(e,t),this.setState({error:e,errorInfo:t})}checkForAttributionError(){0}render(){const{attribution:e,children:t,renderOnError:r}=this.props;return this.state&&this.state.error&&this.state.errorInfo?a.createElement(r,{attribution:e,error:this.state.error,errorInfo:this.state.errorInfo}):t}}function E(e){const{children:t,onError:r,renderOnError:o}=e,i=function(e){const t=(0,a.useContext)(d);return e===u.x.INHERIT?t:e}(e.attribution),h=(0,a.useContext)(m.W),p=(0,a.useCallback)(((e,t)=>{if(h&&h(e))throw e;(0,l.aU)(e,{componentStack:t.componentStack,errorHashCode:y(e,t)}),(0,s.LZ)(e)||((0,c.U)().submitError(e,{attribution:i}),(0,s.Xb)(e)),r&&r(e,t)}),[i,h,r]),v=(0,a.useCallback)((e=>a.createElement(o,(0,n.Z)({},e))),[]);return a.createElement(d.Provider,{value:i},a.createElement(b,{attribution:i,onError:p,renderOnError:v},a.createElement(f,null,t)))}function y(e,t){const r=i()(`${e.message||String(e)}${t.componentStack}`,{asBytes:!0});return(1073741823&(255&r[0]|(255&r[1])<<8|(255&r[2])<<16|(255&r[3])<<24)).toString(32)}b.displayName="GenericErrorBoundaryComponent",E.displayName="GenericErrorBoundary"},919712:(e,t,r)=>{r.d(t,{W:()=>n});const n=r(122551).createContext((()=>!1));n.displayName="KnownErrorBoundaryContext"},511461:(e,t,r)=>{r.d(t,{k:()=>i});var n=r(122551),a=r(72055);const o=()=>null,i=({attribution:e,children:t,onError:r})=>n.createElement(a.O,{attribution:e,renderOnError:o,onError:r},t);i.displayName="TransparentErrorBoundary"},801683:(e,t,r)=>{r.d(t,{P:()=>s,m:()=>l});var n=r(991332),a=r(122551),o=r(806297),i=r(511461);function s(e){return c(o.S,e)}function l(e){return c(i.k,e)}function c(e,t){return function(r){return o=>a.createElement(e,(0,n.Z)({},t),a.createElement(r,(0,n.Z)({},o)))}}},534322:(e,t,r)=>{r.d(t,{t:()=>n});class n extends Error{constructor(e){super(e),this.name="ExperienceTimeoutError"}}},866380:(e,t,r)=>{r.d(t,{D:()=>b});var n=r(29298),a=r(197728),o=r.n(a),i=r(616158),s=r(147543),l=r(12793),c=r(991332),u=r(574409),d=r(534322),m=r(972416),h=r(69210);class p{constructor(){(0,n.Z)(this,"callbacks",new Map)}start(){let e;document.addEventListener("freeze",(()=>{e=performance.now()})),document.addEventListener("resume",(()=>{if("number"!=typeof e)return;const t=performance.now();for(const r of this.callbacks.values())r(t-e)}))}subscribe(e,t){this.callbacks.set(e,t)}unsubscribe(e){this.callbacks.delete(e)}}const v=(0,h.default)((()=>new p));class f{constructor({name:e,id:t,timeout:r,startTime:a=window.performance.now(),attributes:o,onStart:i,onSuccess:s,onFailure:l,onAbort:d}){(0,n.Z)(this,"name",void 0),(0,n.Z)(this,"id",void 0),(0,n.Z)(this,"timeout",void 0),(0,n.Z)(this,"freezeTime",0),(0,n.Z)(this,"stopState",null),(0,n.Z)(this,"startTime",void 0),(0,n.Z)(this,"attributes",void 0),(0,n.Z)(this,"onStop",void 0),(0,n.Z)(this,"onSuccess",void 0),(0,n.Z)(this,"onFailure",void 0),(0,n.Z)(this,"onAbort",void 0),this.name=e,this.id=t,this.timeout=r,this.startTime=a,this.attributes=o,this.onSuccess=s,this.onFailure=l,this.onAbort=d;const m={action:"taskStart",name:e,id:t,startTime:a,timeout:r,attributes:(0,c.Z)((0,c.Z)({},o),(0,u.aX)())};i&&(this.onStop=i(m)),v().subscribe(e,(e=>{this.freezeTime+=e}))}succeed(e){this.hasStopped||(this.onSuccess&&this.onSuccess(),this.stop({action:"taskSuccess",name:this.name,id:this.id,startTime:this.startTime,duration:this.getAbsoluteDuration(),activeDuration:this.getDurationAdjustedForActive(),adjustedDuration:this.getDurationAdjustedForTabActivity(),attributes:(0,c.Z)((0,c.Z)((0,c.Z)({},this.attributes),e),(0,u.aX)())}))}fail({error:e,attributes:t}){this.hasStopped||(this.onFailure&&this.onFailure(),this.stop({action:"taskFail",name:this.name,id:this.id,startTime:this.startTime,duration:this.getAbsoluteDuration(),activeDuration:this.getDurationAdjustedForActive(),adjustedDuration:this.getDurationAdjustedForTabActivity(),error:e,attributes:(0,c.Z)((0,c.Z)({},this.attributes),t)}))}abort({reason:e,attributes:t,checkForTimeout:r=!0}){if(this.hasStopped)return;const n=this.getDurationAdjustedForTabActivity();r&&null!=this.timeout&&n>=this.timeout?this.fail({attributes:t,error:new d.t(`${this.name} failed to complete in ${this.timeout}ms`)}):(this.onAbort&&this.onAbort(),this.stop({action:"taskAbort",name:this.name,id:this.id,startTime:this.startTime,duration:this.getAbsoluteDuration(),activeDuration:this.getDurationAdjustedForActive(),adjustedDuration:n,reason:e,checkForTimeout:r,attributes:(0,c.Z)((0,c.Z)({},this.attributes),t)}))}stopOn(e){e&&("taskSuccess"===e.action?this.succeed({}):"taskAbort"===e.action?this.abort({reason:e.reason,checkForTimeout:e.checkForTimeout}):"taskFail"===e.action&&this.fail({error:e.error}))}getState(){return{timeout:this.timeout,hasStopped:this.hasStopped,stopState:this.stopState,startTime:this.startTime,name:this.name,attributes:this.attributes}}get hasStopped(){return null!==this.stopState}stop(e){this.stopState=e.action,this.onStop&&this.onStop(e),v().unsubscribe(this.name)}getAbsoluteDuration(){return Math.round(window.performance.now()-this.startTime)}getDurationAdjustedForTabActivity(){return this.getAbsoluteDuration()-(0,m.y)().getInactiveMillisecondsSince(this.startTime)}getDurationAdjustedForActive(){return this.getAbsoluteDuration()-this.freezeTime}}class b{constructor(){(0,n.Z)(this,"experiences",{}),(0,n.Z)(this,"subscribers",[]),(0,n.Z)(this,"logger",(0,i.j)("ExperienceTracker")),v().start(),window.addEventListener("pagehide",(()=>{this.abort({reason:"Window unloading"})}))}start({name:e,id:t=o()(),timeout:r,startTime:n,attributes:a,onSuccess:i,onFailure:s,onAbort:l,collect:c}){const u=this.experiences[e];if(u&&u.id===t)return;u&&u.abort({reason:"Aborted because the same experience was started with a new id"});const d=new f({name:e,id:t,timeout:r,startTime:n,attributes:a,onSuccess:i,onFailure:s,onAbort:l,onStart:e=>{this.emit(e);let t=()=>{};if(c){const e=[];t=this.subscribe((t=>{("taskStart"===t.action||e.some((e=>e.name===t.name&&"taskStart"===e.action)))&&(e.push(t),c(e,d))}))}return e=>{t(),this.emit(e)}}});this.experiences[e]=d}succeed({name:e,attributes:t}){const r=this.experiences[e];r&&r.succeed(t)}fail({name:e,error:t,attributes:r}){Object.values(this.experiences).forEach((n=>{null!=e&&n.name!==e||n.fail({error:t,attributes:r})}))}abort({name:e,reason:t,attributes:r,checkForTimeout:n}){Object.values(this.experiences).forEach((a=>{null!=e&&a.name!==e||a.abort({reason:t,checkForTimeout:n,attributes:r})}))}stopOnError({error:e,name:t,attributes:r}){const n=function(e){return(0,s.OG)(e)?`Aborted because of session expiration error: ${e.toString()}`:(0,l.S)(e)?`Aborted because of network error: ${e.toString()}`:void 0}(e);n?this.abort({name:t,reason:n,checkForTimeout:!1,attributes:r}):this.fail({name:t,error:e,attributes:r})}subscribe(e){if("function"!=typeof e)throw new Error("Subscriber must be a function");return this.subscribers.push(e),()=>{this.subscribers=this.subscribers.filter((t=>t!==e))}}getExperienceState(e){return this.experiences[e]?this.experiences[e].getState():null}emit(e){this.logger.debug`${e.action} ${e}`,this.subscribers.forEach((t=>{try{t(e)}catch(r){this.logger.error`Error occurred in ExperienceTracker subscriber ${r} when handling event ${e}`}}))}}},972416:(e,t,r)=>{r.d(t,{y:()=>s});var n=r(29298),a=r(69210),o=r(616158);class i{constructor({maxIntervalsToStore:e}={}){(0,n.Z)(this,"inactivityIntervals",[]),(0,n.Z)(this,"logger",(0,o.j)("TabInactivityTracker")),(0,n.Z)(this,"maxIntervalsToStore",void 0),(0,n.Z)(this,"onVisibilityChange",(()=>{document.hidden?(this.inactivityIntervals.length>=this.maxIntervalsToStore&&this.inactivityIntervals.splice(this.maxIntervalsToStore-1),this.inactivityIntervals.unshift([window.performance.now(),null])):0===this.inactivityIntervals.length||null!=this.inactivityIntervals[0][1]?this.logger.error`Invariant violation: tab is currently active, but inactivity intervals are in inconsistent state`:this.inactivityIntervals[0][1]=window.performance.now()}));this.maxIntervalsToStore="number"==typeof e?e:100}initialize(){return document.hidden&&this.onVisibilityChange(),document.addEventListener("visibilitychange",this.onVisibilityChange),{teardown:()=>{document.removeEventListener("visibilitychange",this.onVisibilityChange)}}}getInactiveMillisecondsSince(e){let t=0;for(const[r,n]of this.inactivityIntervals){const a=n||window.performance.now();if(e>a)break;t+=a-Math.max(r,e)}return t}}const s=(0,a.default)((()=>{const e=new i;return e.initialize(),e}))},275513:(e,t,r)=>{r.d(t,{Nq:()=>p,OV:()=>v,Cf:()=>f});var n=r(991332),a=r(69210),o=r(699692),i=r(443033),s=r(596207),l=r(598728),c=r(199319),u=r(866380),d=r(534322);const m=new Set([c.RNN,c.dc_,c.pXy,c.z09]),h=new Set;function p(){return Array.from(h).pop()}const v=(0,a.default)((()=>{const e=new u.D;return/bot/i.test(window.navigator.userAgent)||e.subscribe((t=>{!function({action:e,name:t}){m.has(t)&&("taskStart"===e?h.add(t):h.delete(t),(0,s.U)().updateContext({slaExperience:p()}))}(t),(0,i.getAnalyticsWebClient)().then((e=>{e.sendOperationalEvent((0,o.p)(t))}));const r=[`action:${t.action}`,`isActiveTab:${"visible"===document.visibilityState}`];if(t.attributes)for(const e in t.attributes)r.push(`${e}:${t.attributes[e]}`);(0,s.U)().incrementCounter(`experience-tracker:${t.name}`,r),"taskFail"===t.action&&m.has(t.name)&&(t.error instanceof d.t||((0,l.NP)(t.error,{failedSlaExperience:t.name}),(0,s.U)().submitError(t.error,{attribution:"sla"}))),t.name===c.bbO&&b(e,t)})),e}));function f(e,t,r){v().stopOnError({name:e,error:t,attributes:r})}const b=(e,t)=>{((e,t,r)=>{switch(t.action){case"taskStart":e.start((0,n.Z)((0,n.Z)({},t),{},{name:r}));break;case"taskSuccess":e.succeed((0,n.Z)((0,n.Z)({},t),{},{name:r}));break;case"taskFail":e.fail((0,n.Z)((0,n.Z)({},t),{},{name:r}));break;case"taskAbort":e.abort((0,n.Z)((0,n.Z)({},t),{},{name:r}))}})(e,t,t.attributes&&"space"===t.attributes.contentType?c.ywK:c.z09)}},172328:(e,t,r)=>{r.d(t,{UE:()=>n,_N:()=>a,OR:()=>o,gU:()=>i,x9:()=>s,D4:()=>l,rI:()=>c,KJ:()=>u,c0:()=>d});const n={TEMPLATE:"com.atlassian.confluence.template",MACRO_CORE:"com.atlassian.confluence.macro.core",MIGRATION:"com.atlassian.confluence.migration",MACRO_WITH_REFERENCES:"com.atlassian.confluence.macro.with.references"},a={INVALID:"__confluenceADFMigrationUnsupportedContentInternalExtension__"},o="extension",i="inlineExtension",s="bodiedExtension",l=[{content:[],type:"paragraph"}],c={TEMPLATE:"variable",INLINE_EXTERNAL_IMAGE:"inline-external-image",INLINE_MEDIA_IMAGE:"inline-media-image",PRIVACY_MARK:"privacy-mark",ANCHOR:"anchor",PANEL:"panel",SECTION:"section",CHEESE:"cheese",COLUMN:"column",CONTENT_BY_USER:"content-by-user",CREATE_SPACE_BUTTON:"create-space-button",FAVORITE_PAGES:"favpages",GLOBAL_REPORTS:"global-reports",IM_PRESENCE:"im",LOREMIPSUM:"loremipsum",NAVIGATION_MAP:"navmap",RECENTLY_USED_LABELS:"recently-used-labels",SEARCH:"search",SPACE_DETAILS:"space-details",INVALID:"__confluenceADFMigrationUnsupportedContentInternalExtension__",REDACTED_MACRO_PLACEHOLDER:"redactedMacroPlaceholder"},u=["toc","expand","jira","trello-board","status","jiraroadmap"],d=255},668410:(e,t,r)=>{r.d(t,{Mj:()=>p,MK:()=>m,XF:()=>v,g$:()=>h,I:()=>l,Z6:()=>f,LW:()=>c,ZI:()=>u});var n=r(991332),a=r(415911),o=r(315677),i=r(172328);const s=r(331377).ZP`query ContentBodyConvertQuery($from:String!$to:String!$body:String!$contentIdContext:String)@experimental{experimentalContentBodyConvert(body:$body from:$from to:$to contentIdContext:$contentIdContext){value}}`;function l(e){return e.hasOwnProperty("")&&d(e[""])||""}function c(e={}){return Object.keys(e).reduce(((t,r)=>{const n=d(e[r]);return""!==n&&(t[r]=n),t}),{})}function u(e={}){return Object.keys(e).reduce(((t,r)=>{const n=d(e[r]);return""===r&&""===n||(t[r]={value:n}),t}),{})}function d(e){return null!=e&&e.hasOwnProperty("value")?e.value:e}function m(e){const{type:t,content:r}=e,n=(0,a.Z)(e,["type","content"]),{macroParams:o}=n.parameters,i={type:t,attrs:n};return i.attrs.bodyType="none","bodiedExtension"===t&&(i.content=r&&r.length>0?r:[],i.attrs.bodyType="rich"),i.attrs.parameters.macroParams=u(o),i}function h(e){const{attrs:t,content:r,type:n}=e,{macroParams:a}=t.parameters;let o=i.OR;n===i.x9?o=i.x9:n===i.gU&&(o=i.gU);const s={type:o,attrs:t};return s.attrs.parameters||(s.attrs.parameters={}),r&&(s.content=r),s.attrs.parameters.macroParams=u(a),s}async function p(e,t,r,n){var a;return null===(a=(await(0,o.WQ)().query({query:s,variables:{from:e,to:t,body:r,contentIdContext:n}})).data.experimentalContentBodyConvert)||void 0===a?void 0:a.value}async function v(e){if(e.hasOwnProperty("name")&&!e.hasOwnProperty("attrs"))return Promise.resolve(e);const t=e,{attrs:r}=t,{extensionKey:n,parameters:a}=r||{extensionKey:null,parameters:{macroParams:{},macroMetadata:{schemaVersion:null}}},{macroParams:o,macroMetadata:i}=a,s=n||"",u=c(o||{}),d=l(o||{}),m=i&&i.schemaVersion||"1";if(!t.content||0===t.content.length)return{name:s,params:u,defaultParameterValue:d,schemaVersion:m,body:""};return{name:s,params:u,defaultParameterValue:d,schemaVersion:m,body:await p("atlas_doc_format","storage",JSON.stringify({type:"doc",content:t.content,version:1}))||""}}function f(e){var t;const r=(0,n.Z)({},(null==e||null===(t=e.parameters)||void 0===t?void 0:t.macroParams)||{});return r.__bodyContent&&delete r.__bodyContent,JSON.stringify(c(r))}},401487:(e,t,r)=>{r.d(t,{Xb:()=>l,LZ:()=>c,wY:()=>u});var n=r(29298),a=r(853102),o=r(596207);const i=Symbol("error marked as handled");const s=new class{constructor(e,t){this.gracefulHandlingPeriodMs=e,this.errorHandler=t,(0,n.Z)(this,"errorsToHandle",new Map),(0,n.Z)(this,"processError",(e=>{e&&this.scheduleErrorReporting(e)})),(0,n.Z)(this,"isErrorMarkedAsHandled",(e=>!!e&&("object"==typeof e&&Boolean(e[i])))),(0,n.Z)(this,"markErrorAsHandled",(e=>{if(!e)return;(0,a.MS)(e)&&((e.graphQLErrors||[]).forEach((e=>this.markErrorAsHandled(e))),this.markErrorAsHandled(e.networkError));const t=this.errorsToHandle.get(e);"object"==typeof e&&(e[i]=!0),window.clearTimeout(t),this.errorsToHandle.delete(e)}))}scheduleErrorReporting(e){const t=window.setTimeout((()=>{this.errorHandler(e),l(e)}),this.gracefulHandlingPeriodMs);this.errorsToHandle.set(e,t)}}(100,(function(e){(0,o.U)().submitError(e,{attribution:"graphql"})})),l=s.markErrorAsHandled,c=s.isErrorMarkedAsHandled,u=s.processError},694205:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(483565),a=r(897599),o=r(844151);function i({attributes:e,children:t=null,contentId:r,extensionKey:i,error:s,mode:l,name:c}){const u=(0,n.TW)(o.Sx);return(0,a.K)((()=>{u&&(0,o.SY)(l,r).fail({name:c,attributes:e,error:s})}),[e,r,i,s,u,l,c]),t}},690359:(e,t,r)=>{r.d(t,{N:()=>i});var n=r(483565),a=r(844151),o=r(897599);function i({attributes:e,children:t=null,contentId:r,extensionKey:i,mode:s,name:l}){const c=(0,n.TW)(a.Sx);return(0,o.K)((()=>{c&&(0,a.SY)(s,r).succeed({name:l,attributes:e})}),[e,r,i,c,s,l]),t}},897599:(e,t,r)=>{r.d(t,{K:()=>i});var n=r(122551),a=r(405124),o=r.n(a);function i(e,t){(0,n.useEffect)(e,function(e){const t=(0,n.useRef)();o()(e,t.current)||(t.current=e);return t.current}(t))}},917465:(e,t,r)=>{r.d(t,{b:()=>n});const n="/wiki"},147543:(e,t,r)=>{r.d(t,{RX:()=>i,Fo:()=>s,OG:()=>l});var n=r(853102),a=r(251846);const o="Session expired";class i extends a.K{constructor(e,t){super(`${e} Session expired`,t)}}function s(e){var t,r;if(!e)return!1;if(e instanceof i)return!0;if(-1!=((null!=(r=e)?r.message:r)||"").indexOf(o))return!0;return 401==(null!=(t=e)&&null!=(t=t.extensions)?t.statusCode:t)}function l(e){if(!e)return!1;if(s(e))return!0;if((0,n.MS)(e)){const{graphQLErrors:t,networkError:r}=e;if(s(r))return!0;if((t||[]).some(s))return!0}return!1}},57230:(e,t,r)=>{r.d(t,{E:()=>s});var n=r(29298),a=r(913879);class o{constructor(e={}){(0,n.Z)(this,"store",void 0),this.store=e}serialize(e){if(Array.isArray(e))return`[${e.map(this.serialize,this).join(",")}]`;if("object"==typeof e){return`{${Object.entries(null!=e?e:{}).filter((e=>void 0!==e[1])).sort(((e,t)=>e[0]<t[0]?-1:e[0]>t[0]?1:0)).map((([e,t])=>`${e}:${this.serialize(t)}`)).join(",")}}`}return String(e)}toHashKey({name:e,variables:t}){return`${e}:${this.serialize(null!=t?t:{})}`}load(e,t,{refetchIfNotClaimed:r=!0}={}){const n=this.toHashKey(e);return(!this.store[n]||r&&(0,a.wp)(this.store[n]))&&(this.store[n]=(0,a.LW)(t())),this.store[n]}claim(e,t){const r=this.toHashKey(e),n=this.store[r];return n?n.catch((()=>(delete this.store[r],null))).then((e=>(delete this.store[r],t?t(e):e&&e.data?e:null))):Promise.resolve(null)}}let i=null;function s(){return null===i&&(window.QUERY_PRELOADER_RESULTS||(window.QUERY_PRELOADER_RESULTS={}),i=new o(window.QUERY_PRELOADER_RESULTS)),i}},536347:(e,t,r)=>{r.d(t,{b:()=>l});var n=r(984218),a=r(443709),o=r(616158),i=r(57230);const s=(0,o.j)("PreloadedQueryLink"),l=()=>new n.ApolloLink(((e,t)=>{const{operationName:r,variables:n}=e;return r?new a.Z((a=>{let o=null;return(0,i.E)().claim({name:r,variables:n}).then((n=>{n?(s.debug`Query matched: ${r} ${n}`,a.next(n),a.complete()):o=t(e).subscribe({next:a.next.bind(a),error:a.error.bind(a),complete:a.complete.bind(a)})})),()=>{o&&o.unsubscribe()}})):t(e)}))},330828:(e,t,r)=>{function n(e,t){if(!e)return;const r=e[t];return Array.isArray(r)?r[0]:r}function a(e,t,r){const a=n(e,t),o=parseInt(a||"",10);return isNaN(o)?r:o}r.d(t,{r:()=>n,S:()=>a})},19978:(e,t,r)=>{r.d(t,{g:()=>n});const n=r(122551).createContext(void 0);n.displayName="SessionDataContext"},483565:(e,t,r)=>{r.d(t,{TW:()=>o,hS:()=>i});var n=r(158466),a=r(619241);const o=e=>{const t=(0,n.D)();return(0,a.x)(e),Boolean(null==t?void 0:t.featureFlags[e])},i=e=>{const t=(0,n.D)(),r=null==t?void 0:t.featureFlags[e];return(0,a.x)(e),null!=r?String(r):void 0}},158466:(e,t,r)=>{r.d(t,{D:()=>o});var n=r(122551),a=r(19978);const o=()=>(0,n.useContext)(a.g)},619241:(e,t,r)=>{r.d(t,{x:()=>i});var n=r(122551),a=r(937613),o=r(158466);const i=e=>{const t=(0,o.D)();(0,n.useEffect)((()=>{var r,n;null==t||null===(r=t.featureFlagClient)||void 0===r||null===(n=r.trackFeatureFlag)||void 0===n||n.call(r,e,{triggerReason:a.s.AutoExposure})}),[e,null==t?void 0:t.featureFlagClient])}},115181:(e,t,r)=>{r.d(t,{H:()=>a});var n=r(29298);const a=new class{constructor(){(0,n.Z)(this,"measures",void 0),(0,n.Z)(this,"startTime",void 0),this.measures={},this.startTime=0}setStartTime(){this.startTime=performance.now()>>0}run(e,t){return t()}markMeasureStart(e){this.measures[e]={startTime:(performance.now()>>0)-this.startTime,duration:0}}markMeasureEnd(e){var t;null!==(t=this.measures[e])&&void 0!==t&&t.startTime&&(this.measures[e].duration=(performance.now()>>0)-this.startTime-this.measures[e].startTime)}getMeasures(){return Object.entries(this.measures).sort(((e,t)=>e[1].startTime-t[1].startTime)).reduce(((e,[t,r])=>(e[t]=r,e)),{})}clearMeasures(){this.measures={}}}},660630:(e,t,r)=>{r.r(t),r.d(t,{EmptyTocItem:()=>V,NonPrintableWrapper:()=>K,PrintableWrapper:()=>z,TableOfContents:()=>Y,getSeparators:()=>G,nonPrintableWrapperTestId:()=>B,printableWrapperTestId:()=>W});var n=r(991332),a=r(415911),o=r(122551),i=r(358280),s=r(405124),l=r.n(s),c=r(801683),u=r(170915),d=r(668410),m=r(844151),h=r(694205),p=r(690359),v=r(962285);r(205356),r(229e3),r(374914),r(401933),r(840517);const f=(0,o.forwardRef)(((e,t)=>{let{as:r="span",style:s,prop:l}=e,c=(0,a.Z)(e,["as","style","prop"]);return o.createElement(r,(0,n.Z)((0,n.Z)({},c),{},{style:(0,n.Z)((0,n.Z)({},s),{},{"--_11g6jqc":(0,v.Z)(l.fontSize)}),ref:t,className:(0,i.Z)(["_1wybtxbk","true"===l.outline||"true"===l.display?"_1e0c1nu9":"_1e0cglyw",c.className])}))}));const b=(0,o.forwardRef)(((e,t)=>{let{as:r="a",style:s,fontSize:l}=e,c=(0,a.Z)(e,["as","style","fontSize"]);return o.createElement(r,(0,n.Z)((0,n.Z)({},c),{},{style:(0,n.Z)((0,n.Z)({},s),{},{"--_ahmjk1":(0,v.Z)(l)}),ref:t,className:(0,i.Z)(["_1wyb18pa",c.className])}))}));const E=(0,o.forwardRef)(((e,t)=>{let{as:r="li",style:s,listStyle:l}=e,c=(0,a.Z)(e,["as","style","listStyle"]);return o.createElement(r,(0,n.Z)((0,n.Z)({},c),{},{style:(0,n.Z)((0,n.Z)({},s),{},{"--_fbfouu":(0,v.Z)(l)}),ref:t,className:(0,i.Z)(["_qtt81pb4",c.className])}))}));const y=(e,t)=>o.createElement(o.Fragment,null,o.createElement("span",{className:"toc-item-body","data-outline":e.outline},o.createElement(f,{prop:{display:"",fontSize:"16px",outline:t}},e.outline," "),o.createElement(b,{href:e.link,onClick:()=>(e=>{if(!e)return;const t=e.replace(/[.:;*+?^$!@$^&~%{}()=/|[\]\\]/g,"\\$&"),r=document.querySelector(`#presenter-mode-container ${t}`);r&&r.scrollIntoView()})(e.link),"data-testid":"toc-item-body",className:"toc-link",fontSize:"16px"},e.innerContent)));y.displayName="TocItemBody";const g=({children:e,prop:t})=>o.createElement("ul",{"data-testid":"list-style-toc-level-container",style:{paddingLeft:null==t?void 0:t.csslistindent}},e);g.displayName="ListStyleTocLevelContainer";const S=({children:e,prop:t,link:r})=>{let n;var a;"toc-empty-item"===r?n="none":n=null!==(a=null==t?void 0:t.cssliststyle)&&void 0!==a?a:"default";return o.createElement(E,{"data-testid":"list-style-toc-item-container",listStyle:n},e)};S.displayName="ListStyleTocItemContainer";const T=({children:e})=>o.createElement("span",{"data-testid":"flat-style-toc-item-container",className:"toc-item-container"},e);T.displayName="FlatStyleTocItemContainer";var I=r(894917),w=r.n(I),_=r(755181),x=r(616158);function C(e,t){var r;if(null==e||null===(r=e.content)||void 0===r||!r.length)return;const n=e.content.reduce(((e,t)=>e.concat(A(t)||"")),"").trim().replace(/\s/g,"-");return n?k(n,t):void 0}const A=e=>e.text||e.attrs&&(e.attrs.text||e.attrs.shortName)||`[${"string"==typeof e.type?e.type:""}]`;function k(e,t,r=0){if(0===r&&-1===t.indexOf(e))return t.push(e),e;if(0!==r){const n=`${e}.${r}`;if(-1===t.indexOf(n))return t.push(n),n}return k(e,t,r+1)}const N=(0,x.j)("table-of-contents"),Z=(e,t)=>{var r,n,a,o,i,s,l,c,u,d,m,h,p,v,f,b,E,y,g,S,T,I,x,A;const k=Math.max(1,parseInt(null==e||null===(r=e.attrs)||void 0===r||null===(n=r.parameters)||void 0===n||null===(a=n.macroParams)||void 0===a||null===(o=a.minLevel)||void 0===o?void 0:o.value)||1),Z=Math.min(6,parseInt(null==e||null===(i=e.attrs)||void 0===i||null===(s=i.parameters)||void 0===s||null===(l=s.macroParams)||void 0===l||null===(c=l.maxLevel)||void 0===c?void 0:c.value)||6),O=null==e||null===(u=e.attrs)||void 0===u||null===(d=u.parameters)||void 0===d?void 0:d.macroParams,R=[],P=null==O||null===(m=O.include)||void 0===m?void 0:m.value,L=null==O||null===(h=O.exclude)||void 0===h?void 0:h.value;const F=[];let M=t;if("string"==typeof t)try{M=JSON.parse(t)}catch(D){}return(0,_.f)(M||{},{heading:e=>{if(function(e){if(null==e||!e.content)return!1;if(!P&&!L)return!0;try{let a,o;P&&(a=new RegExp(P)),L&&(o=new RegExp(L));let i="";for(const s of null==e?void 0:e.content){var t,r,n;i+=(null==s?void 0:s.text)||(null==s||null===(t=s.attrs)||void 0===t?void 0:t.text)||(null==s||null===(r=s.attrs)||void 0===r||null===(n=r.__confluenceMetadata)||void 0===n?void 0:n.contentTitle)||""}if(a&&!a.test(i))return!1;if(o&&o.test(i))return!1}catch(a){N.error`@@@@@ Failed to handle regular expression - ${a}`}return!0}(e)){var t,r;const n=w()(e);n.attrs.id=C(n,F),(null==e||null===(t=e.attrs)||void 0===t?void 0:t.level)>=k&&(null==e||null===(r=e.attrs)||void 0===r?void 0:r.level)<=Z&&R.push(n)}}}),{className:`${(null==O||null===(p=O.class)||void 0===p?void 0:p.value)||"macro-core"} toc-macro conf-macro output-block`,cssliststyle:null==O||null===(v=O.style)||void 0===v?void 0:v.value,csslistindent:null==O||null===(f=O.indent)||void 0===f?void 0:f.value,separators:null==O||null===(b=O.separator)||void 0===b?void 0:b.value,headerelements:R,headerRange:["H1","H2","H3","H4","H5","H6"].slice(k-1,Z),hasbody:"none"===(null==e?void 0:e.attrs.bodyType)?"false":"true",name:null==e||null===(E=e.attrs)||void 0===E?void 0:E.extensionKey,structure:null==O||null===(y=O.type)||void 0===y?void 0:y.value,outline:null==O||null===(g=O.outline)||void 0===g?void 0:g.value,printable:(null==O||null===(S=O.printable)||void 0===S?void 0:S.value)||"true",macroId:null==e||null===(T=e.attrs)||void 0===T||null===(I=T.parameters)||void 0===I||null===(x=I.macroMetadata)||void 0===x||null===(A=x.macroId)||void 0===A?void 0:A.value}};var O=r(28201);const R=(0,O.ZR)({__loadable_id__:"K9wJ_",name:"DateLoader",loader:async()=>(await Promise.all([r.e(12705),r.e(54936),r.e(12031)]).then(r.bind(r,324598))).DateComponent}),P=(0,O.ZR)({__loadable_id__:"SaNqn",name:"EmojiLoader",loader:async()=>(await Promise.all([r.e(12705),r.e(78248),r.e(54936),r.e(11216),r.e(91306),r.e(40611),r.e(93964),r.e(1054),r.e(43101),r.e(33079),r.e(86888),r.e(10676)]).then(r.bind(r,803914))).EmojiComponent}),L=(0,O.ZR)({__loadable_id__:"KerpZ",name:"EmojiLoader",loader:async()=>(await Promise.all([r.e(12705),r.e(27617)]).then(r.bind(r,60920))).MentionComponent}),F=(0,O.ZR)({__loadable_id__:"8ECly",name:"StatusLoader",loader:async()=>(await Promise.all([r.e(61769),r.e(78248),r.e(54936),r.e(11216),r.e(57220)]).then(r.bind(r,647360))).StatusComponent}),M=({adfEntities:e,cloudId:t,userId:r})=>o.createElement("span",null,e.map(((e,n)=>{var a,i,s,l,c,u,d,m,h,p;switch(null==e?void 0:e.type){case"date":return o.createElement(R,{timestamp:null==e||null===(a=e.attrs)||void 0===a?void 0:a.timestamp});case"emoji":return o.createElement(P,{id:null==e||null===(i=e.attrs)||void 0===i?void 0:i.id,shortName:null==e||null===(s=e.attrs)||void 0===s?void 0:s.shortName,cloudId:t,userId:r});case"mention":return o.createElement(L,{name:null==e||null===(l=e.attrs)||void 0===l?void 0:l.text,isUserSelf:(null==e||null===(c=e.attrs)||void 0===c?void 0:c.id)===r});case"status":return o.createElement(F,{text:null==e||null===(u=e.attrs)||void 0===u?void 0:u.text,color:null==e||null===(d=e.attrs)||void 0===d?void 0:d.color});default:return o.createElement("span",{key:n},(null==e?void 0:e.text)||(null==e||null===(m=e.attrs)||void 0===m?void 0:m.text)||(null==e||null===(h=e.attrs)||void 0===h||null===(p=h.__confluenceMetadata)||void 0===p?void 0:p.contentTitle)||"")}})));function D(e,t=[],r,n){var a,i;if(0===e.length)return null;const s=e.map((e=>{var t;return null==e||null===(t=e.attrs)||void 0===t?void 0:t.level})).reduce((function(e,t){return Math.min(e,t)}));(null===(a=e[0])||void 0===a||null===(i=a.attrs)||void 0===i?void 0:i.level)!==s&&e.unshift({type:"toc",attrs:{level:s},content:[{text:V,type:"string",innerHTML:""}]});const l=[],c={subElements:[],currentItem:{innerContent:null,link:"",outline:[],children:null},outline:void 0,flush(){c.subElements.length>0&&c.currentItem&&(c.currentItem.children=D(c.subElements,c.outline,r,n),c.subElements=[])},add(e){c.subElements.push(e)},resetItem:e=>(c.outline=(t||[]).slice(0),c.outline.push(e),c.currentItem={innerContent:null,link:"",outline:[],children:null},l.push(c.currentItem),c.currentItem)};let u=0;return e.forEach((function(e){var t,a,i;if((null==e||null===(t=e.attrs)||void 0===t?void 0:t.level)===s)if(u++,c.flush(),c.resetItem(u),(null===(a=e.content)||void 0===a||null===(i=a[0])||void 0===i?void 0:i.text)!==V&&c.currentItem){var l;const t=function(e,t,r,n){var a;return{outline:n,linkHref:`#${null==e||null===(a=e.attrs)||void 0===a?void 0:a.id}`,linkText:$(e.content||[],t,r)}}(e,r,n,null===(l=c.outline)||void 0===l?void 0:l.join("."));c.currentItem.innerContent=t.linkText,c.currentItem.link=t.linkHref,c.currentItem.outline=t.outline?[t.outline]:[]}else c.currentItem.innerContent=o.createElement(o.Fragment,null),c.currentItem.link=V;else c.add(e)})),c.flush(),l}function $(e,t,r){return e?o.createElement(M,{adfEntities:e,cloudId:t,userId:r}):null}function H(e){return!0===e.current&&(e.current=!1,!0)}M.displayName="MiniRenderer",$.displayName="getTextsFromElements";const j=({elementsArray:e,elementFactory:t,config:r,separators:n,initialSeparatorRef:a})=>{if(!e)return o.createElement("div",null);const i=t.createTocLevelContainer(),s=t.createTocItemContainer();if("flat"===r.structure){function t(e){return e.map((e=>o.createElement(o.Fragment,{key:e.outline},e.link!==V?o.createElement(o.Fragment,null,o.createElement("span",{className:"toc-separator"},H(a)?null==n?void 0:n[0]:null==n?void 0:n[1]),U(e,r.outline)):null,e.children?t(e.children):null)))}return o.createElement(i,{prop:r},e.map(((i,s)=>o.createElement(o.Fragment,{key:s},i.link!==V?o.createElement(o.Fragment,null,o.createElement("span",{className:"toc-separator"},H(a)?null==n?void 0:n[0]:null==n?void 0:n[1]),U(i,r.outline)):null,i.children?o.createElement(o.Fragment,null,t(i.children)):null,o.createElement("span",{className:"toc-separator"},s===e.length-1?null==n?void 0:n[2]:null)))))}return e?o.createElement(i,{prop:r},e.map((e=>e.innerContent?o.createElement(o.Fragment,null,e.link!==V||null!=e&&e.children?o.createElement(s,{link:e.link,prop:r,key:null==e?void 0:e.outline},e.link!==V?U(e,r.outline):null,e.children?o.createElement(j,{elementsArray:e.children,elementFactory:t,config:r,separators:n,initialSeparatorRef:a}):null):null):null))):o.createElement("div",{"data-testid":"Empty-TOC"})};function U(e,t){return y(e,t)}j.displayName="TableOfContentsComponent",r(533654),r(162203),r(493290),r(326383);const B="non-printable-wrapper",K=(0,o.forwardRef)(((e,t)=>{let{as:r="div",style:s}=e,l=(0,a.Z)(e,["as","style"]);return o.createElement(r,(0,n.Z)((0,n.Z)({},l),{},{style:s,ref:t,className:(0,i.Z)(["_1reo1wug _18m91wug _24zuglyw _ugi3idpf _gutmidpf",l.className])}))}));const W="printable-wrapper",z=(0,o.forwardRef)(((e,t)=>{let{as:r="div",style:s}=e,l=(0,a.Z)(e,["as","style"]);return o.createElement(r,(0,n.Z)((0,n.Z)({},l),{},{style:s,ref:t,className:(0,i.Z)(["_1reo1wug _18m91wug _ugi3idpf _gutmidpf",l.className])}))}));const V="toc-empty-item";function G(e){let t=[];switch(e){case"braces":t=["{ "," } { "," }"];break;case"pipe":t=[""," | ",""];break;case"parens":t=["( "," ) ( "," )"];break;case"":case"brackets":t=["[ "," ] [ "," ]"];break;default:t=["",e,""]}return t}const Y=(0,o.memo)((0,c.P)({attribution:u.x.BACKBONE})((({cloudId:e,userId:t,adf:r,macroDefaultProps:a})=>{var i,s,l,c;const{node:u,mode:v,contentId:f,extensionKey:b}=a,E=(0,d.MK)(u),y=Z(E,r),I=(0,m.iQ)(u),w=(0,m.ag)(v,u);let _,x;_="flat"===y.structure?{createTocLevelContainer:()=>T,createTocItemContainer:()=>T,decorateToc:()=>!0}:{createTocLevelContainer:()=>g,createTocItemContainer:()=>S};try{x=D(y.headerelements,[],e,t)}catch(N){return o.createElement(h.Z,{name:w,contentId:f,extensionKey:b,mode:v,error:N||new Error(`${b} failed to render`),attributes:I})}const C=G(y.separators||""),A={current:!0},k=()=>{const e="flat"===y.structure?{"data-preseparator":C[0],"data-midseparator":C[1],"data-postseparator":C[2]}:{};return o.createElement("div",(0,n.Z)({className:y.className,"data-numberedoutline":y.outline,"data-cssliststyle":y.cssliststyle,"data-csslistindent":y.csslistindent,"data-headerelements":y.headerRange,"data-hasbody":y.hasbody,"data-macro-name":y.name,"data-macro-id":y.macroId,"data-structure":y.structure},e),o.createElement(j,{elementsArray:x,elementFactory:_,config:y,separators:C,initialSeparatorRef:A}),o.createElement(p.N,{name:w,contentId:f,extensionKey:b,mode:v}))};return"false"===y.printable?o.createElement(K,{title:"Macro (toc)","data-fabric-macro":y.macroId,"data-macro-body":!0,"data-macro-parameters":JSON.stringify(null==E||null===(i=E.attrs)||void 0===i||null===(s=i.parameters)||void 0===s?void 0:s.macroParams),"data-testid":B},o.createElement(k,null)):o.createElement(z,{title:"Macro (toc)","data-fabric-macro":y.macroId,"data-macro-body":!0,"data-macro-parameters":JSON.stringify(null==E||null===(l=E.attrs)||void 0===l||null===(c=l.parameters)||void 0===c?void 0:c.macroParams),"data-testid":W},o.createElement(k,null))})),l())},574409:(e,t,r)=>{r.d(t,{aX:()=>a,V:()=>o});const n={uuid:null,pageId:"",routeName:"",transitionId:0,routingTimestamp:0,currentSavedTimestamp:0},a=()=>(n.currentSavedTimestamp=performance.now(),{uuid:n.uuid,contentId:n.pageId,isInitial:0===n.transitionId,isSSR:Boolean(window.__SSR_RENDERED__),routingDuration:n.currentSavedTimestamp-n.routingTimestamp}),o=(e="",t,r,a)=>{var o;const l=null==t||null===(o=t.params)||void 0===o?void 0:o.contentId,c=a.userId;if(n.pageId!==l||n.routeName!==e){let t;t=c?s(e,l,a):i(),n.uuid=t,n.routeName=e,n.pageId=l,n.transitionId=r,n.routingTimestamp=performance.now()}},i=()=>"10000000-1000-4000-8000-100000000000".replace(/1|0/g,(function(){return(0|16*Math.random()).toString(16)})),s=(e,t,r)=>{const{userId:n,cloudId:a}=r;return`${e=e||"route"}-${t=t||"page"}-${n}-${a}-${Date.now()}`}}}]);
//# sourceMappingURL=23822.HevmHBNyLd.js.map