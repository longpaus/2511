"use strict";(self._cf=self._cf||[]).push([[96207],{443033:(e,t,r)=>{r.r(t),r.d(t,{createConfig:()=>f,getAnalyticsWebClient:()=>m,getDwellTimeHelper:()=>w,initializeAnalyticsClient:()=>g});var n=r(991332),o=r(833094),s=r(913879),i=r(304911),a=r(792873),c=r(814581),l=r(207976);let u;const d=(0,s.LW)(new Promise((e=>{u=e})));let h;const p=(0,s.LW)(new Promise((e=>{h=e}))),f=({envType:e,originType:t,environment:r,platformType:o,locale:s,product:c,subproduct:l})=>{const u="localhost"===window.location.hostname?e.DEV:"STAGING"===r?e.STAGING:"PRODUCTION"===r?e.PROD:e.DEV;return(0,n.Z)((0,n.Z)({env:u,product:c||"confluence"},l?{subproduct:l}:void 0),{},{version:(0,i.J)().FRONTEND_VERSION,origin:t.WEB,platform:(0,a.Zc)()?o.MOBILE_WEB:o.WEB,locale:s})},g=({cloudId:e,userId:t,environment:s,product:i,subproduct:a,locale:d,eventFilterOptions:p={shouldFilterEvents:!1,eventMatchers:[]},callback:g})=>{let m;Promise.all([Promise.all([r.e(78248),r.e(54936),r.e(11216),r.e(5403),r.e(86591),r.e(36311)]).then(r.bind(r,976673)),r.e(16621).then(r.bind(r,829070)),"undefined"==typeof URLSearchParams?r.e(90375).then(r.t.bind(r,661289,23)):Promise.resolve()]).then((async([w,{buildCompressionFunction:y,canCompress:E}])=>{const{default:b,originType:v,tenantType:S,userType:I,envType:N,platformType:x,DwellTimeHelper:T,CompressionRule:C}=w;m=f({envType:N,originType:v,environment:s,platformType:x,locale:d,product:i,subproduct:a}),h(T);const k=(0,c.U)(),A={historyReplaceFn:e=>{const{pathname:t,search:r,hash:n}=new URL(e);k.replace({pathname:t,search:r,hash:n})},delayQueueCompressors:[new C(E,y())]};let O;const{shouldFilterEvents:R,eventMatchers:L}=p;if(R){const{createFilteredAWC:e}=await Promise.all([r.e(54936),r.e(93866)]).then(r.bind(r,934198));O=e(w,m,(0,n.Z)((0,n.Z)({},A),{},{useStargate:!1}),L)}else O=new b(m,A);O.setTenantInfo(S.CLOUD_ID,e),t&&O.setUserInfo(I.ATLASSIAN_ACCOUNT,t),O.setOriginTracingHandlers({atlOrigin:e=>{const t=o.Z.fromEncoded(e),r=t.toAnalyticsAttributes();return(e=>{const t=window.GLOBAL_APOLLO_CLIENT_URI||"/cgraphql";(0,l.y)(`${t}?q=isNewUserQuery`,{method:"POST",credentials:"include",headers:{"X-APOLLO-OPERATION-NAME":"isNewUserQuery","Content-Type":"application/json"},body:JSON.stringify({query:"\n  query isNewUserQuery {\n    isNewUser\n  }\n"})}).then((async t=>{if(t.ok){var r;const n=await t.json();(null==n||null===(r=n.data)||void 0===r?void 0:r.isNewUser)&&((0,l.y)("/wiki/rest/onboarding/1/store",{method:"PUT",body:JSON.stringify({key:"onboarding-origin-state:attributes",value:JSON.stringify(e)}),headers:{"Content-Type":"application/json"}}),window.dispatchEvent(new Event("onboardingAttributesUpdated")),window.sessionStorage.setItem("NEW_XFLOW_USER","true"))}}))})(r),{originTracingAttributes:{id:r.originId,product:r.originProduct,library:r.originLibrary},taskSessionId:t.id}}}),O.startUIViewedEvent(),u(O),g&&g()})).catch((e=>{throw new Error(`Analytics Web Client ${e}, ${JSON.stringify((0,n.Z)({},m))}`)}))},m=()=>d,w=()=>p},814581:(e,t,r)=>{r.d(t,{U:()=>o});var n=r(583770);const o=(0,r(69210).default)((()=>(0,n.Z)()))},304911:(e,t,r)=>{function n(){const e=window.__buildInfo||{};let{FRONTEND_VERSION:t}=e;t||(t="");const r=/^([^-]+)-(.+)-(\d+)$/.exec(t);return{FRONTEND_VERSION:r?t:"UNKNOWN-unknown-0",BRANCH_NAME:r?r[2]:"unknown",BUILD_NUMBER:r?parseInt(r[3],10):0,BUILD_DATE:e.BUILD_DATE||0,PUBLIC_PATH:e.PUBLIC_PATH||"unknown",RELEASE_TRACK:"canary"}}r.d(t,{J:()=>n})},913879:(e,t,r)=>{r.d(t,{LW:()=>s,wp:()=>i,NA:()=>a});const n=Symbol("PromiseStatus"),o=Symbol("PromiseValue"),s=e=>{const t=e.then((e=>(t[n]="resolved",t[o]=e,e)),(e=>{throw t[n]="rejected",t[o]=e,e}));return t[n]="pending",t},i=e=>"resolved"===e[n],a=e=>e[o]},616158:(e,t,r)=>{r.d(t,{j:()=>s});var n=r(29298);class o{constructor(e){(0,n.Z)(this,"name",void 0),this.name=function(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}(e)}log(e,...t){this.logAnyLevel(1,console.log,"#009966",e,t)}debug(e,...t){this.logAnyLevel(2,console.debug,"#999",e,t)}info(e,...t){this.logAnyLevel(3,console.info,"#4488dd",e,t)}warn(e,...t){this.logAnyLevel(4,console.warn,"black",e,t)}error(e,...t){this.logAnyLevel(5,console.error,"black",e,t)}logAnyLevel(e,t,r,n,o){try{if("undefined"==typeof sessionStorage||"true"===sessionStorage.getItem("confluence.enable-logging")){const s="undefined"!=typeof sessionStorage&&sessionStorage.getItem("confluence.log-level");if((parseInt(s||"",10)||1)>e)return;const i=[`%c[@${Math.round(performance.now())} ${this.name}]`,`color: ${r}`];t(...n.reduce(((e,t,r)=>{const s=o[r],i=t.trim().replace(/\n\s+/g,"\n");return e.concat(r===n.length-1?[i]:[i,"string"==typeof s?JSON.stringify(s):s])}),i))}}catch(s){console.error(s)}}}const s=e=>new o(e)},792873:(e,t,r)=>{r.d(t,{r3:()=>c,mS:()=>l,jd:()=>u,br:()=>d,Zc:()=>h});const n=(0,r(616158).j)("mobile-detection"),o=/(iPhone;|iPad;|iPhone Simulator;|iPod;|iPod touch;|Linux; U; Android)/i,s=/Chrome\/[.\d]* Mobile/i,i=/Linux; U; Android (?:[23]\.\d|4\.0\.[12])/i,a="mobile.web.desktop.override.active",c=()=>{const e=window.navigator.userAgent;return!!e&&!i.test(e)&&(o.test(e)||s.test(e))},l=()=>"true"===window.localStorage.getItem(a),u=()=>{try{window.localStorage.setItem(a,"true")}catch(e){n.error`Unable to set local storage. key = "${a}", value = "true"`}},d=()=>window.localStorage.removeItem(a);function h(){return!!window.location.search.includes("mobileWebTestingMode=testing")||c()&&!l()}},598728:(e,t,r)=>{r.d(t,{aU:()=>c,gj:()=>l,Qp:()=>d,NP:()=>f,z8:()=>g});var n=r(991332),o=r(251846),s=r(977332),i=r(146859);const a=Symbol("React error context");function c(e,t){"object"==typeof e&&null!==e&&(e[a]=t)}function l(e){if("object"==typeof e&&null!==e)return e[a]}const u=Symbol("Graphql error context");function d(e,t){"object"==typeof e&&null!==e&&(e[u]=t)}function h(e){if("object"==typeof e&&null!==e)return e[u]?e[u]:function(e){if(!function(e){return"object"==typeof e&&null!==e&&("graphQLErrors"in e||"networkError"in e)}(e))return;const t=e.graphQLErrors;if(t&&t.length>0&&t[0][u])return t[0][u];if(e.networkError)return e.networkError[u];return}(e)}const p=Symbol("SLA error context");function f(e,t){"object"==typeof e&&null!==e&&(e[p]=t)}function g(e){return e&&"object"==typeof e?(0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)((0,n.Z)({},l(e)),h(e)),function(e){if("object"==typeof e&&null!==e)return e[p]}(e)),function(e){if(e instanceof i.I)return{statusCode:e.statusCode,restMethod:e.method,restRoute:e.route,traceId:e.traceId}}(e)),function(e){if(e instanceof o.K)return{statusCode:e.response.status,traceId:(0,s.Y)(e.response)}}(e)):{}}},596207:(e,t,r)=>{r.d(t,{W:()=>T,U:()=>x});var n=r(991332),o=r(29298),s=r(616158),i=r(443033),a=r(304911),c=r(913879),l=r(415911),u=r(69210),d=r(146859),h=r(598728);const p=/(https?):\/\/[a-z0-9]+\.cloudfront\.net\//g,f=/(https?):\/\/[a-z0-9]+\.cloudfront\.net\/download\//g,g=/s\/[^_]+_\/download\//g;function m(e){try{return JSON.parse(e).message||e}catch(t){return e}}const w=function(e,t){var r;let o=!1,s=!1;if(null!==(r=e.exception)&&void 0!==r&&r.values&&(e.exception.values=e.exception.values.map((e=>(e.stacktrace&&e.stacktrace.frames&&(e.stacktrace.frames=e.stacktrace.frames.map((e=>{var t;return e.filename&&(o=Boolean(e.filename.match(g)),s=Boolean(e.filename.match(f)),e.filename=(t=e.filename).match(g)?t.replace(g,"download/").replace(p,"$1://"):t),e}))),e)))),"object"==typeof(null==t?void 0:t.originalException)&&null!==(null==t?void 0:t.originalException)){e.fingerprint=function(e){if(e.message.startsWith("Quota exceeded on key")||e.message.startsWith("QuotaExceededError"))return["storage-quota-error"];if(e.message.startsWith("Maximum call stack size exceeded")||e.message.startsWith("too much recursion"))return["maximum-call-stack"];if(e.message.startsWith("Invalid position"))return["invalid-position"];if(e.message.match(/Loading chunk .+? failed/))return["chunk-load-error"];if(e.message.startsWith("Error creating blueprint content:"))return["blueprint-creation-error",e.message.substr(0,100)];if(e.message.startsWith("Error from synchrony plugin"))return["error-from-synchrony-plugin"];if(e.message.includes("Error fetching data from identity - Error has been logged with execution ID:"))return["identity-fetching-error"];if(e.message.includes("java.net.SocketTimeoutException"))return["socket-timeout"];if(e instanceof URIError)return["malformed-uri-error"];if(e instanceof d.I&&e.route)return[`rest-api-${e.route}-${e.statusCode}`];const t=(0,h.z8)(e);return t.failedSlaExperience?t.operationName||t.statusCode?[`experience-${t.failedSlaExperience}`,m(e.message).substr(0,100)]:["{{ default }}",`experience-${t.failedSlaExperience}`]:void 0}(t.originalException);const r=(0,h.z8)(t.originalException),{componentStack:o,failedSlaExperience:s}=r,i=(0,l.Z)(r,["componentStack","failedSlaExperience"]);e.extra=(0,n.Z)((0,n.Z)({},e.extra),i)}return e.logger=o?"wrm":s?"react":"javascript",e.request&&delete e.request.url,delete e.breadcrumbs,e.transaction="",e};function y(e){const t={};return(0,n.Z)({release:(0,a.J)().FRONTEND_VERSION,dsn:e,environment:"CONFLUENCE",beforeSend:(e,t)=>w(e,t),ignoreErrors:["Transport destroyed","Worker was destroyed","Failed to connect on any of the ADC ports","Cannot read property 'postMessage' of undefined","Cannot read property 'postMessage' of null","d.hide is not a function",/^network error/i,/^network failure/i,"TypeError: Failed to fetch","ResizeObserver loop limit exceeded",/ResizeObserver loop completed with undelivered notifications/],autoSessionTracking:!1},t)}const E=(0,u.default)((async()=>{return(0,c.LW)(r.e(68050).then(r.bind(r,271507)).then((({BrowserClient:e,Hub:t})=>new t(new e(y("https://2d329ea4a8a04cf0b19117b4675b336f@api.atlassian.com/sentry-cloud/5988900"))))).catch((()=>null)))}));class b{constructor(e,t){this.flushIntervalMs=e,this.batchMaxSize=t,(0,o.Z)(this,"flushIntervalId",void 0),(0,o.Z)(this,"onFlushCallbacks",new Set),(0,o.Z)(this,"currentBatch",[]),(0,o.Z)(this,"flush",(()=>{const e=this.renewBatch();this.unscheduleFlush(),0!==e.length&&this.onFlushCallbacks.forEach((t=>{try{t(e)}catch(r){setTimeout((()=>{throw console.error('"onFlush" callback threw the below error. Please make sure your callbacks have proper error handling'),r}),0)}}))}))}add(e){this.scheduleFlush(),this.currentBatch.push(e),this.currentBatch.length>=this.batchMaxSize&&this.flush()}onFlush(e){if(!(e instanceof Function))throw new Error(`"onFlush" callback is supposed to be a function; saw ${typeof e} instead`);return this.onFlushCallbacks.add(e),{unsubscribe:()=>{this.onFlushCallbacks.delete(e)}}}forceFlush(){this.flush()}renewBatch(){const e=this.currentBatch;return this.currentBatch=[],e}scheduleFlush(){this.flushIntervalId||(this.flushIntervalId=window.setInterval(this.flush,this.flushIntervalMs))}unscheduleFlush(){this.flushIntervalId&&(window.clearInterval(this.flushIntervalId),this.flushIntervalId=void 0)}}const v=(0,s.j)("CustomMonitoringClient");class S{constructor({errorsPerTransitionLimit:e=1e3,metricBatchMaxSize:t=50,metricBatchFlushIntervalMs:r=1e4}={}){(0,o.Z)(this,"batcher",void 0),(0,o.Z)(this,"isWindowUnloading",!1),(0,o.Z)(this,"context",{}),(0,o.Z)(this,"firstErrorInSession",!0),(0,o.Z)(this,"newSentryEnabled",!1),(0,o.Z)(this,"errorsPerTransitionLimit",void 0),(0,o.Z)(this,"errorsPerCurrentTransition",0),this.errorsPerTransitionLimit=e,this.batcher=new b(r,t),this.batcher.onFlush((e=>{this.onBatch(e)}));window.addEventListener("pagehide",(()=>{this.isWindowUnloading=!0,this.batcher.forceFlush()}))}enableNewSentry(){this.newSentryEnabled=!0}submitError(e,t){if(this.errorsPerCurrentTransition===this.errorsPerTransitionLimit)return;this.errorsPerCurrentTransition++;const r=(0,h.z8)(e),{attribution:o}=t,s=this.firstErrorInSession;this.incrementCounter("jsErrors",[`attribution:${o}`,`firstInSession:${s}`,...r.operationName?[`queryName:${r.operationName}`]:[]]),this.firstErrorInSession=!1;const i=e&&e.stack&&e.message?e:new Error(e&&e.message||String(e)),a={attribution:o};this.context.slaExperience&&(a.slaExperience=this.context.slaExperience),this.context.pageName&&(a.pageName=this.context.pageName),r.failedSlaExperience&&(a.failedSlaExperience=r.failedSlaExperience),r.operationName&&(a.operationName=r.operationName),a.ssrRendered=Boolean(window.__SSR_RENDERED__).toString(),r.failedSlaExperience?this.logSlaErrorToSentry(i,a).catch((e=>{this.logError(e,{attribution:"backbone"})})):this.newSentryEnabled&&this.logErrorToSentry(i,a),this.logError(i,(0,n.Z)((0,n.Z)((0,n.Z)({},t),r),{},{firstInSession:s}))}updateContext(e){void 0===e.transitionId||0!==e.transitionId&&this.context.transitionId===e.transitionId||(this.incrementCounter("session",["type:"+(0===e.transitionId?"initial":"transition")]),this.firstErrorInSession=!0,this.errorsPerCurrentTransition=0),e.pageName&&this.context.pageName!==e.pageName&&void 0!==this.context.pageName&&this.batcher.forceFlush(),Object.assign(this.context,e)}incrementCounter(e,t){this.batcher.add(this.createMetric({type:"increment",name:e,value:1,tags:t}))}logErrorToSentry(e,t){r.e(68050).then(r.bind(r,271507)).then((({withScope:r,captureException:n})=>{r((r=>{r.setTags(t),n(e)}))})).catch((e=>{this.logError(e,{attribution:"backbone"})}))}async logSlaErrorToSentry(e,t){let r=null;const n=E();r=(0,c.wp)(n)?(0,c.NA)(n):await n,r&&r.withScope((n=>{n.setTags(t),r.captureException(e)}))}async logError(e,t){try{var r,o;const s=(0,i.getAnalyticsWebClient)();let l;l=(0,c.wp)(s)?(0,c.NA)(s):await s,l.sendOperationalEvent({source:"ui",action:"unhandledError",actionSubject:"ui",attributes:(0,n.Z)({error:e.message||String(e),stack:e.stack,browserInfo:window.navigator.userAgent,ssrRendered:Boolean(window.__SSR_RENDERED__),releaseId:(0,a.J)().FRONTEND_VERSION,track:(0,a.J)().RELEASE_TRACK,pageName:this.context.pageName,shard:this.context.shard,jqVer:null===(r=window.jQuery)||void 0===r||null===(o=r.fn)||void 0===o?void 0:o.jquery},t)})}catch(s){}}formatContextAsTags(){const e=[];this.context.pageName&&e.push(`page:${this.context.pageName}`),this.context.tenantId&&e.push(`cloudId:${this.context.tenantId}`),this.context.shard&&e.push(`shard:${this.context.shard}`),this.context.product&&e.push(`product:${this.context.product}`);const{FRONTEND_VERSION:t,RELEASE_TRACK:r}=(0,a.J)();return t&&e.push(`version:${t}`),r&&e.push(`track:${r}`),e}onBatch(e){const t={type:"metric",meta:{globalTags:this.formatContextAsTags()},data:e};this.send(t)}send(e){try{v.info`Sending monitoring events: ${e}`;const t="/gateway/api/telemetry",r=JSON.stringify(e);let n=!1;if(navigator.sendBeacon&&(n=navigator.sendBeacon(t,r)),!n){const e=new XMLHttpRequest,n=this.isWindowUnloading;e.open("POST",t,!n),e.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),e.send(r)}}catch(t){v.error`Sending monitoring data failed: ${t}`}}createMetric({type:e,name:t,value:r,tags:n=[]}){return{type:e,name:t,value:r,sampleRate:1,tags:n,timestamp:(new Date).toISOString()}}}class I{submitError(){}updateContext(){}incrementCounter(){}}let N;const x=()=>(N||(N=/bot/i.test(window.navigator.userAgent)?new I:new S),N),T=()=>{r.e(68050).then(r.bind(r,271507)).then((({init:e})=>{e(y("https://1f56d81aaaae4b1ea5ca08bca6633223@api.atlassian.com/sentry-cloud/5988811"))})).catch((()=>{})),N instanceof S&&N.enableNewSentry()}},251846:(e,t,r)=>{r.d(t,{K:()=>i});var n=r(29298),o=r(977332),s=r(246918);class i extends s.F{constructor(e,t){super(e),(0,n.Z)(this,"response",void 0),(0,n.Z)(this,"name","BadStatusError"),this.response=t}get traceId(){return(0,o.Y)(this.response)}static isBadStatusError(e){return e instanceof i}}},146859:(e,t,r)=>{r.d(t,{I:()=>o});var n=r(29298);class o extends Error{constructor({message:e,method:t,url:r,"status-code":o},{route:s,traceId:i}={}){super(e.length?e:`Failed to ${t} ${s||r}`),(0,n.Z)(this,"url",void 0),(0,n.Z)(this,"method",void 0),(0,n.Z)(this,"statusCode",void 0),(0,n.Z)(this,"route",void 0),(0,n.Z)(this,"traceId",void 0),this.url=r,this.route=s,this.method=t,this.statusCode=o,this.traceId=i}}},246918:(e,t,r)=>{r.d(t,{F:()=>n});class n extends Error{}},12793:(e,t,r)=>{r.d(t,{f:()=>a,S:()=>c});var n=r(29298),o=r(853102),s=r(755704),i=r(246918);class a extends i.F{constructor(...e){super(...e),(0,n.Z)(this,"ignore",void 0)}}function c(e){if(e instanceof a)return!0;if((0,o.MS)(e)){const{graphQLErrors:t,networkError:r}=e;return!!r||t.some(c)}if((0,s.P)(e)){const{originalError:t}=e;if(t)return c(t)}return!1}},550915:(e,t,r)=>{r.d(t,{e:()=>o});var n=r(251846);class o extends n.K{constructor(e,t){super(`${e} rate limit exceeded`,t)}}},207976:(e,t,r)=>{r.d(t,{y:()=>u});var n=r(415911),o=r(991332),s=r(616158),i=r(997811),a=r(251846),c=r(12793),l=r(550915);const u=async(e,t)=>{let r,{ignoreNoNetworkError:s,requestInit:u}=function(e={}){const{ignoreNoNetworkError:t}=e,r=(0,n.Z)(e,["ignoreNoNetworkError"]);return{ignoreNoNetworkError:t,requestInit:Object.getOwnPropertyNames(r).length?(0,i.I)(r):void 0}}(t);e&&"string"!=typeof e&&e.credentials||(u=(0,o.Z)({credentials:"include"},u));try{r=await fetch(e,u)}catch(d){0;const e=new c.f(`Network failure: ${d}`);throw e.ignore=s,e.ignore||p(void 0,e),e}if(!r.ok){let t;throw t=429===r.status?new l.e(e.toString(),r):new a.K(`Received status ${r.status}`,r),p(r,t),t}return p(r,void 0),r};const d=(0,s.j)(u);let h=[];function p(e,t){h.forEach((r=>{try{r(e,t)}catch(n){d.error`Error occurred in a cfetch subscriber: ${n}`}}))}u.subscribe=e=>{if("function"!=typeof e)throw new Error("Subscriber must be a function");return h.push(e),()=>{h=h.filter((t=>t!==e))}}},997811:(e,t,r)=>{r.d(t,{I:()=>o});var n=r(415911);function o(e){if(e&&"referrerPolicy"in e){const{referrerPolicy:r}=e,o=(0,n.Z)(e,["referrerPolicy"]);try{new Request("/",{referrerPolicy:r})}catch(t){e=o}}return e}},977332:(e,t,r)=>{r.d(t,{Y:()=>n});const n=e=>{var t,r;return(null==e||null===(t=e.headers)||void 0===t?void 0:t.get("x-b3-traceid"))||(null==e||null===(r=e.headers)||void 0===r?void 0:r.get("atl-traceid"))||null}},755704:(e,t,r)=>{r.d(t,{P:()=>o});var n=r(419793);function o(e){return e instanceof n._}}}]);
//# sourceMappingURL=96207.AX1FSZifWh.js.map