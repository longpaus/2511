(self._cf=self._cf||[]).push([[76530],{636222:(t,e,r)=>{var n=r(581323);t.exports=function(t,e){return new Promise((function(r,o){var i,s=e||{};function a(t){o(t||new Error("Aborted"))}function c(t,e){t.bail?a(t):i.retry(t)?s.onRetry&&s.onRetry(t,e):o(i.mainError())}"randomize"in s||(s.randomize=!0),(i=n.operation(s)).attempt((function(e){var n;try{n=t(a,e)}catch(o){return void c(o,e)}Promise.resolve(n).then(r).catch((function(t){c(t,e)}))}))}))}},581323:(t,e,r)=>{t.exports=r(823577)},823577:(t,e,r)=>{var n=r(795822);e.operation=function(t){var r=e.timeouts(t);return new n(r,{forever:t&&(t.forever||t.retries===1/0),unref:t&&t.unref,maxRetryTime:t&&t.maxRetryTime})},e.timeouts=function(t){if(t instanceof Array)return[].concat(t);var e={retries:10,factor:2,minTimeout:1e3,maxTimeout:1/0,randomize:!1};for(var r in t)e[r]=t[r];if(e.minTimeout>e.maxTimeout)throw new Error("minTimeout is greater than maxTimeout");for(var n=[],o=0;o<e.retries;o++)n.push(this.createTimeout(o,e));return t&&t.forever&&!n.length&&n.push(this.createTimeout(o,e)),n.sort((function(t,e){return t-e})),n},e.createTimeout=function(t,e){var r=e.randomize?Math.random()+1:1,n=Math.round(r*Math.max(e.minTimeout,1)*Math.pow(e.factor,t));return n=Math.min(n,e.maxTimeout)},e.wrap=function(t,r,n){if(r instanceof Array&&(n=r,r=null),!n)for(var o in n=[],t)"function"==typeof t[o]&&n.push(o);for(var i=0;i<n.length;i++){var s=n[i],a=t[s];t[s]=function(n){var o=e.operation(r),i=Array.prototype.slice.call(arguments,1),s=i.pop();i.push((function(t){o.retry(t)||(t&&(arguments[0]=o.mainError()),s.apply(this,arguments))})),o.attempt((function(){n.apply(t,i)}))}.bind(t,a),t[s].options=r}}},795822:t=>{function e(t,e){"boolean"==typeof e&&(e={forever:e}),this._originalTimeouts=JSON.parse(JSON.stringify(t)),this._timeouts=t,this._options=e||{},this._maxRetryTime=e&&e.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._timer=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}t.exports=e,e.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts.slice(0)},e.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timer&&clearTimeout(this._timer),this._timeouts=[],this._cachedTimeouts=null},e.prototype.retry=function(t){if(this._timeout&&clearTimeout(this._timeout),!t)return!1;var e=(new Date).getTime();if(t&&e-this._operationStart>=this._maxRetryTime)return this._errors.push(t),this._errors.unshift(new Error("RetryOperation timeout occurred")),!1;this._errors.push(t);var r=this._timeouts.shift();if(void 0===r){if(!this._cachedTimeouts)return!1;this._errors.splice(0,this._errors.length-1),r=this._cachedTimeouts.slice(-1)}var n=this;return this._timer=setTimeout((function(){n._attempts++,n._operationTimeoutCb&&(n._timeout=setTimeout((function(){n._operationTimeoutCb(n._attempts)}),n._operationTimeout),n._options.unref&&n._timeout.unref()),n._fn(n._attempts)}),r),this._options.unref&&this._timer.unref(),!0},e.prototype.attempt=function(t,e){this._fn=t,e&&(e.timeout&&(this._operationTimeout=e.timeout),e.cb&&(this._operationTimeoutCb=e.cb));var r=this;this._operationTimeoutCb&&(this._timeout=setTimeout((function(){r._operationTimeoutCb()}),r._operationTimeout)),this._operationStart=(new Date).getTime(),this._fn(this._attempts)},e.prototype.try=function(t){console.log("Using RetryOperation.try() is deprecated"),this.attempt(t)},e.prototype.start=function(t){console.log("Using RetryOperation.start() is deprecated"),this.attempt(t)},e.prototype.start=e.prototype.try,e.prototype.errors=function(){return this._errors},e.prototype.attempts=function(){return this._attempts},e.prototype.mainError=function(){if(0===this._errors.length)return null;for(var t={},e=null,r=0,n=0;n<this._errors.length;n++){var o=this._errors[n],i=o.message,s=(t[i]||0)+1;t[i]=s,s>=r&&(e=o,r=s)}return e}},204013:t=>{"use strict";class e extends Error{constructor(){super("Throttled function aborted"),this.name="AbortError"}}t.exports=({limit:t,interval:r,strict:n})=>{if(!Number.isFinite(t))throw new TypeError("Expected `limit` to be a finite number");if(!Number.isFinite(r))throw new TypeError("Expected `interval` to be a finite number");const o=new Map;let i=0,s=0;const a=[];const c=n?function(){const e=Date.now();if(a.length<t)return a.push(e),0;const n=a.shift()+r;return e>=n?(a.push(e),0):(a.push(n),n-e)}:function(){const e=Date.now();return e-i>r?(s=1,i=e,0):(s<t?s++:(i+=r,s=1),i-e)};return t=>{const r=function(...e){if(!r.isEnabled)return(async()=>t.apply(this,e))();let n;return new Promise(((r,i)=>{n=setTimeout((()=>{r(t.apply(this,e)),o.delete(n)}),c()),o.set(n,i)}))};return r.abort=()=>{for(const t of o.keys())clearTimeout(t),o.get(t)(new e);o.clear(),a.splice(0,a.length)},r.isEnabled=!0,r}},t.exports.AbortError=e},73377:function(t,e,r){!function(t,e){"use strict";if(!t.setImmediate){var r,n,o,i,s,a=1,c={},u=!1,h=t.document,l=Object.getPrototypeOf&&Object.getPrototypeOf(t);l=l&&l.setTimeout?l:t,"[object process]"==={}.toString.call(t.process)?r=function(t){process.nextTick((function(){p(t)}))}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,r=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=r,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){p(t.data)},r=function(t){o.port2.postMessage(t)}):h&&"onreadystatechange"in h.createElement("script")?(n=h.documentElement,r=function(t){var e=h.createElement("script");e.onreadystatechange=function(){p(t),e.onreadystatechange=null,n.removeChild(e),e=null},n.appendChild(e)}):r=function(t){setTimeout(p,0,t)}:(i="setImmediate$"+Math.random()+"$",s=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(i)&&p(+e.data.slice(i.length))},t.addEventListener?t.addEventListener("message",s,!1):t.attachEvent("onmessage",s),r=function(e){t.postMessage(i+e,"*")}),l.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return c[a]=o,r(a),a++},l.clearImmediate=f}function f(t){delete c[t]}function p(t){if(u)setTimeout(p,0,t);else{var e=c[t];if(e){u=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(void 0,r)}}(e)}finally{f(t),u=!1}}}}}("undefined"==typeof self?void 0===r.g?this:r.g:self)},631513:(t,e,r)=>{"use strict";r.d(e,{F:()=>i,W:()=>s});var n=r(991332);const o=[200,401,404];class i extends Error{constructor(t){super(t)}}async function s(t,e,r,s){const a=(0,n.Z)({method:t,credentials:"include",headers:(0,n.Z)({Accept:"application/json","Cache-Control":"no-cache","Content-Type":"application/json"},s)},r?{body:JSON.stringify(r)}:{});try{const t=await fetch(e,a);if(t.ok||o.includes(t.status))return await t.json();throw t}catch(c){if("string"==typeof c||c instanceof TypeError)throw new i(c);throw c}}},240713:(t,e,r)=>{"use strict";r.d(e,{Z:()=>g});var n=r(415911),o=r(29298),i=(r(73377),r(395223)),s=r.n(i),a=r(636222),c=r.n(a),u=r(204013),h=r.n(u);class l extends Error{constructor(t,e,r,n){super(`${t}: ${r}`),this.kind=t,this.hostname=e,this.message=r,this.type=n,this.name="APIError",this.type=n,this.kind=t,this.message=r,this.hostname=e}}var f=r(631513),p=r(792501);const m=t=>{if(!t)return!1;return 200===t.status&&"body"in t},d=t=>{if(!t)return!1;return"status"in t&&t.status>=200&&"error"in t};var y=r(226751),v=r(608259);const w=new v.LRUMap(100);class g{constructor(t,e){(0,o.Z)(this,"batchResolve",(async t=>{const e=[...new Set(t)];let r=[];try{r=await f.W("post",`${this.resolverUrl}/resolve/batch`,e.map((t=>({resourceUrl:t}))))}catch(o){r=t.map((()=>({status:d(o)?o.status:500,error:o})))}const n={};for(let i=0;i<e.length;++i){const t=e[i],o=r[i];n[t]=o}return t.map((t=>n[t]))})),this.resolverUrl=(0,p.rV)(t,e),this.loadersByDomain={},this.retryConfig={retries:2},this.resolvedCache={}}createLoader(){const t=h()({limit:1,interval:250})(this.batchResolve);return new(s())((e=>t(e)),{maxBatchSize:50,cache:!1})}getLoader(t){return this.loadersByDomain[t]||(this.loadersByDomain[t]=this.createLoader()),this.loadersByDomain[t]}async resolveUrl(t,e=!1){const r=new URL(t).hostname,n=this.getLoader(r);let o,i;o=w.get(t),o&&!e||(o=n.load(t),w.set(t,o));try{i=await o}catch(s){throw w.delete(t),s}return(!m(i)||"resolved"!==(0,y.l)(i.body))&&w.delete(t),i}async prefetchData(t){const e=await this.resolveUrl(t,!1);if(m(e))return e.body;try{return(await c()((async()=>{if(this.resolvedCache[t])throw new Error("Retry unneeded - link has been resolved.");{const e=await this.resolveUrl(t,!1);if(m(e))return e;throw new Error("Retry for URL failed")}}),this.retryConfig)).body}catch(r){return}}isRateLimitError(t){return d(t)&&429===t.error.status}async fetchData(t,e){let r=await this.resolveUrl(t,e);if(this.isRateLimitError(r)&&(r=await c()((async()=>{const e=await this.resolveUrl(t,!1);if(this.isRateLimitError(e))throw this.mapErrorResponse(e,new URL(t).hostname);return e}),this.retryConfig)),!m(r))throw this.mapErrorResponse(r,new URL(t).hostname);return this.resolvedCache[t]=!0,r.body}async postData(t){const e={key:t.key,action:t.action,context:t.context};return await f.W("post",`${this.resolverUrl}/invoke`,e)}async search(t){const{key:e,action:r}=t,{query:n,context:o}=r,i={key:e,search:{query:n,context:o}},s=await f.W("post",`${this.resolverUrl}/invoke/search`,i);if(d(s))throw this.mapErrorResponse(s);return s}async fetchAvailableSearchProviders(){return(await f.W("post",`${this.resolverUrl}/providers`,{type:"search"})).providers}mapErrorResponse(t,e=""){if(null!=t&&t.error){const r=t.error.type,n=t.error.message;if(t.error instanceof f.F)return new l("fallback",e,n,r);switch(r){case"ResolveBadRequestError":case"SearchBadRequestError":return new l("fallback",e,n,r);case"ResolveAuthError":case"SearchAuthError":return new l("auth",e,n,r);case"ResolveUnsupportedError":case"SearchUnsupportedError":return new l("fatal",e,n,r);case"ResolveFailedError":case"SearchFailedError":case"ResolveTimeoutError":case"SearchTimeoutError":case"SearchRateLimitError":case"ResolveRateLimitError":case"InternalServerError":return new l("error",e,n,r)}}const r=t||{},{error:o}=r,i=(0,n.Z)(r,["error"]);return new l("fatal",e,t?`${this.stringifyError(o)} ${JSON.stringify(i)}`:"Response undefined","UnexpectedError")}stringifyError(t){return JSON.stringify(t,"object"==typeof t?Object.getOwnPropertyNames(t):void 0)}}},792501:(t,e,r)=>{"use strict";r.d(e,{SV:()=>a,rV:()=>c});const n="https://api-private.dev.atlassian.com",o="https://pug.jira-dev.com/gateway/api",i="https://api-private.atlassian.com",s={dev:n,development:n,stg:o,staging:o,prd:i,prod:i,production:i},a=t=>t?t in s?s[t]:i:window.location.origin,c=(t,e)=>{if(t||e){return`${e||a(t)}/object-resolver`}return"/gateway/api/object-resolver"}},226751:(t,e,r)=>{"use strict";r.d(e,{l:()=>n});const n=({meta:t})=>{const{access:e,visibility:r}=t;switch(e){case"forbidden":return"not_found"===r?"not_found":"forbidden";case"unauthorized":return"unauthorized";default:return"resolved"}}},476530:(t,e,r)=>{"use strict";r.d(e,{G:()=>g});var n=r(122551),o=r(801430);var i=r(385513),s=r(991332);const a="pending",c="resolving",u="resolved",h="reloading",l="errored",f="fallback",p="metadata";var m=r(226751);function d(t,e,r){const n=t,o=(0,s.Z)({},e);return n?(o.status=(0,m.l)(n),o.details=n):o.status=r,o}const y=(t,e)=>{if(!(t=>[a,c,u,h,l,f,p].includes(t.type))(e))return t;const r=t[e.url];if(!e.ignoreStatusCheck&&r&&r.status===e.type)return t;{const n=function(t,e){switch(e.type){case a:return{status:e.type};case c:return(0,s.Z)((0,s.Z)({},t),{},{status:e.type});case u:return d(e.payload,t,e.type);case h:return d(e.payload,t,"resolved");case l:return(0,s.Z)((0,s.Z)({},t),{},{status:e.type,error:e.error});case f:return(0,s.Z)((0,s.Z)({},t),{},{status:e.type,error:e.error,details:e.payload});case p:return(0,s.Z)((0,s.Z)({},t),{},{metadataStatus:e.metadataStatus})}}(r,e);return(0,s.Z)((0,s.Z)({},t),{},{[e.url]:n})}};var v=r(96682),w=r(240713);function g({storeOptions:t,client:e,authFlow:r,children:s,renderers:a,featureFlags:c}){const u=(0,n.useContext)(v.wy),h=(0,n.useMemo)((()=>({})),[]),{initialState:l}=t||{initialState:h},f=(0,n.useMemo)((()=>(0,o.MT)(y,l)),[l]),p=(0,n.useMemo)((()=>{const t=e||new w.Z;return{renderers:a,store:f,prefetchStore:{},connections:{client:t},config:{authFlow:r||"oauth2"},extractors:{getPreview:(t,e)=>{const r=((t,e)=>t.getState()[e]||{status:"pending"})(f,t);return r.details?(0,i.A)(r.details.data,e):void 0}},featureFlags:c}}),[e,r,a,c,f]);return n.createElement(v.wy.Provider,{value:u||p},s)}},96682:(t,e,r)=>{"use strict";r.d(e,{wy:()=>o,ap:()=>i});var n=r(122551);const o=(0,n.createContext)(void 0);function i(){const t=(0,n.useContext)(o);if(!t)throw Error("useSmartCard() must be wrapped in <SmartCardProvider>");return t}},395223:t=>{"use strict";var e,r=function(){function t(t,e){if("function"!=typeof t)throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: "+t+".");this._batchLoadFn=t,this._maxBatchSize=function(t){if(t&&!1===t.batch)return 1;var e=t&&t.maxBatchSize;if(void 0===e)return 1/0;if("number"!=typeof e||e<1)throw new TypeError("maxBatchSize must be a positive number: "+e);return e}(e),this._batchScheduleFn=function(t){var e=t&&t.batchScheduleFn;if(void 0===e)return n;if("function"!=typeof e)throw new TypeError("batchScheduleFn must be a function: "+e);return e}(e),this._cacheKeyFn=function(t){var e=t&&t.cacheKeyFn;if(void 0===e)return function(t){return t};if("function"!=typeof e)throw new TypeError("cacheKeyFn must be a function: "+e);return e}(e),this._cacheMap=function(t){if(t&&!1===t.cache)return null;var e=t&&t.cacheMap;if(void 0===e)return new Map;if(null!==e){var r=["get","set","delete","clear"].filter((function(t){return e&&"function"!=typeof e[t]}));if(0!==r.length)throw new TypeError("Custom cacheMap missing methods: "+r.join(", "))}return e}(e),this._batch=null}var e=t.prototype;return e.load=function(t){if(null==t)throw new TypeError("The loader.load() function must be called with a value,but got: "+String(t)+".");var e=function(t){var e=t._batch;if(null!==e&&!e.hasDispatched&&e.keys.length<t._maxBatchSize&&(!e.cacheHits||e.cacheHits.length<t._maxBatchSize))return e;var r={hasDispatched:!1,keys:[],callbacks:[]};return t._batch=r,t._batchScheduleFn((function(){return function(t,e){if(e.hasDispatched=!0,0===e.keys.length)return void i(e);var r=t._batchLoadFn(e.keys);if(!r||"function"!=typeof r.then)return o(t,e,new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: "+String(r)+"."));r.then((function(t){if(!s(t))throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: "+String(t)+".");if(t.length!==e.keys.length)throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n"+String(e.keys)+"\n\nValues:\n"+String(t));i(e);for(var r=0;r<e.callbacks.length;r++){var n=t[r];n instanceof Error?e.callbacks[r].reject(n):e.callbacks[r].resolve(n)}})).catch((function(r){return o(t,e,r)}))}(t,r)})),r}(this),r=this._cacheMap,n=this._cacheKeyFn(t);if(r){var a=r.get(n);if(a){var c=e.cacheHits||(e.cacheHits=[]);return new Promise((function(t){c.push((function(){return t(a)}))}))}}e.keys.push(t);var u=new Promise((function(t,r){e.callbacks.push({resolve:t,reject:r})}));return r&&r.set(n,u),u},e.loadMany=function(t){if(!s(t))throw new TypeError("The loader.loadMany() function must be called with Array<key> but got: "+t+".");for(var e=[],r=0;r<t.length;r++)e.push(this.load(t[r]).catch((function(t){return t})));return Promise.all(e)},e.clear=function(t){var e=this._cacheMap;if(e){var r=this._cacheKeyFn(t);e.delete(r)}return this},e.clearAll=function(){var t=this._cacheMap;return t&&t.clear(),this},e.prime=function(t,e){var r=this._cacheMap;if(r){var n,o=this._cacheKeyFn(t);if(void 0===r.get(o))e instanceof Error?(n=Promise.reject(e)).catch((function(){})):n=Promise.resolve(e),r.set(o,n)}return this},t}(),n="object"==typeof process&&"function"==typeof process.nextTick?function(t){e||(e=Promise.resolve()),e.then((function(){return process.nextTick(t)}))}:setImmediate||setTimeout;function o(t,e,r){i(e);for(var n=0;n<e.keys.length;n++)t.clear(e.keys[n]),e.callbacks[n].reject(r)}function i(t){if(t.cacheHits)for(var e=0;e<t.cacheHits.length;e++)t.cacheHits[e]()}function s(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(0===t.length||t.length>0&&Object.prototype.hasOwnProperty.call(t,t.length-1))}t.exports=r},385513:(t,e,r)=>{"use strict";r.d(e,{A:()=>o});var n=r(864966);const o=(t,e)=>{const r=t.preview,o=((t,e)=>{if(t){if("string"==typeof t)return!0;{const r=t["atlassian:supportedPlatforms"];if(r){const t="web"===e;return t&&r.includes("web")||!t&&r.includes("mobile")}return!0}}return!1})(r,e);if(r&&o){if("string"==typeof r)return{src:r};if("Link"===r["@type"])return{src:(0,n.F)(r),aspectRatio:r["atlassian:aspectRatio"]};if(r.url||r.href)return{src:(0,n.F)(r.url||r.href),aspectRatio:r["atlassian:aspectRatio"]};if(r.content)return{content:r.content}}}},864966:(t,e,r)=>{"use strict";r.d(e,{F:()=>n});const n=t=>"string"==typeof t?t:Array.isArray(t)?t.length>0?n(t[0]):void 0:t.href}}]);
//# sourceMappingURL=76530.LNiGfdDNAg.js.map