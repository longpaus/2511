"use strict";(self._cf=self._cf||[]).push([[93964],{890369:(t,e,r)=>{r.d(e,{Q:()=>s});class n{constructor(t){this.streams=t}has(t){return!!this.streams.find(t)}set(t,e){this.streams.set(t,e)}get(t){return this.streams.get(t)}getOrInsert(t,e){return this.has(t)||this.set(t,e()),this.get(t)}removeAll(){this.streams.clear()}remove(t){this.streams.delete(t)}get size(){return this.streams.size}}let a;const s=()=>{if(!a){const t=r(501341).nA;a=new n(t.streams)}return a}},893793:(t,e,r)=>{r.d(e,{tM:()=>n});class n extends Error{constructor(t){super(t),this.message=t,Object.setPrototypeOf(this,new.target.prototype),"captureStackTrace"in Error&&Error.captureStackTrace(this,new.target)}}},79680:(t,e,r)=>{r.d(e,{__:()=>a,y2:()=>s,vh:()=>i,f6:()=>o,jL:()=>c,nT:()=>u,mo:()=>h,eS:()=>l,L5:()=>d});var n=r(991332);const a=t=>"uploading"===t.status,s=t=>"processing"===t.status,i=t=>"processed"===t.status,o=t=>"error"===t.status,c=t=>!o(t)&&!!t.preview,u=t=>["processed","failed-processing","error"].includes(t.status),h=t=>{switch(t.status){case"processing":case"processed":case"failed-processing":return!(!t.representations||!t.representations.image);default:return!1}},l=t=>{const{id:e,name:r,size:a,processingStatus:s,artifacts:i,mediaType:o,mimeType:c,representations:u,createdAt:h,metadataTraceContext:l}=t.data,d={id:e,name:r,size:a,mediaType:o,mimeType:c,artifacts:i,representations:u,createdAt:h,metadataTraceContext:l};switch(s){case"pending":case void 0:return(0,n.Z)((0,n.Z)({},d),{},{status:"processing"});case"succeeded":return(0,n.Z)((0,n.Z)({},d),{},{status:"processed"});case"failed":return(0,n.Z)((0,n.Z)({},d),{},{status:"failed-processing"})}},d=(t,e)=>l({data:(0,n.Z)({id:t},e)})},365681:(t,e,r)=>{r.d(e,{dR:()=>u});var n=r(991332),a=(r(73377),r(315830)),s=r.n(a),i=r(594047);const o=(t,e)=>e?`${t}-${e}`:t,c=(t,e)=>{const r=e.reduce(((t,e)=>{const{id:r,collection:a}=e;return t[o(r,a)]=e.error instanceof Error?e.error:(0,n.Z)((0,n.Z)({},e.details),{},{metadataTraceContext:e.metadataTraceContext}),t}),{});return t.map((t=>{const{id:e,collectionName:n}=t,a=o(e,n);return r[a]||null}))};function u(t){return new(s())(function(t){return async e=>{const r="__media-single-file-collection__",a=e.reduce(((t,e)=>{const n=e.collectionName||r,a=t[n]||[];return-1===a.indexOf(e.id)&&a.push(e.id),t[n]=a,t}),{}),s=[];return await Promise.all(Object.keys(a).map((async e=>{const o={traceId:(0,i.QB)(8),spanId:(0,i.QB)(8)},c=a[e],u=e===r?void 0:e;try{const e=(await t.getItems(c,u,o)).data.items.map((t=>(0,n.Z)((0,n.Z)({},t),{},{metadataTraceContext:o})));s.push(...e)}catch(h){c.forEach((t=>{s.push({id:t,collection:u,error:h})}))}}))),c(e,s)}}(t),{maxBatchSize:100})}},895524:(t,e,r)=>{r.d(e,{O:()=>a});var n=r(322584);function a(t){const e=new n.ReplaySubject(1);return t instanceof Error?e.error(t):t&&e.next(t),e}},273167:(t,e,r)=>{r.d(e,{d:()=>n});function n(t,e=Date.now()){const{artifacts:r,mediaType:n,mimeType:a,name:s,processingStatus:i,representations:o,size:c,createdAt:u}=t;if(!(r||n||a||s||i||o||c||"number"!=typeof u)){if(e-u>432e5)return!0}return!1}},477666:(t,e,r)=>{r.d(e,{t:()=>n});const n=async t=>new Promise(((e,r)=>{const n=URL.createObjectURL(t),a=document.createElement("video");a.preload="metadata",a.src=n,a.muted=!0,a.addEventListener("loadedmetadata",(function t(){a.removeEventListener("loadedmetadata",t),e({width:a.videoWidth,height:a.videoHeight}),URL.revokeObjectURL(n)})),a.addEventListener("error",(()=>{r(new Error("failed to load video")),URL.revokeObjectURL(n)}))}))},736250:(t,e,r)=>{r.d(e,{k:()=>a,C:()=>s});var n=r(893793);class a extends n.tM{constructor(t,e){super(t),this.reason=t,this.attempts=e}get attributes(){const{reason:t,attempts:e}=this;return{reason:t,attempts:e}}}function s(t){return t instanceof a}},374171:(t,e,r)=>{r.d(e,{D:()=>o});var n=r(991332),a=r(29298),s=r(736250);const i={poll_intervalMs:3e3,poll_maxAttempts:30,poll_backoffFactor:1.25,poll_maxIntervalMs:2e5};class o{constructor(t){(0,a.Z)(this,"poll_intervalMs",0),(0,a.Z)(this,"attempt",1),(0,a.Z)(this,"shouldIterate",!0),(0,a.Z)(this,"timeoutId",0),this.options=(0,n.Z)((0,n.Z)({},i),t),this.poll_intervalMs=this.options.poll_intervalMs}async execute(t){const{poll_maxAttempts:e}=this.options;if(0===e)return this.fail(new s.k("pollingMaxAttemptsExceeded",this.attempt));try{if(this.shouldIterate=!1,await t(),!this.shouldIterate)return;if(this.attempt>=e)return this.fail(new s.k("pollingMaxAttemptsExceeded",this.attempt));this.poll_intervalMs=this.getIntervalMsForIteration(this.attempt),this.attempt++,this.timeoutId=window.setTimeout((()=>this.execute(t)),this.poll_intervalMs)}catch(r){this.fail(r)}}fail(t){const{onError:e}=this;this.cancel(),e&&e(t)}getIntervalMsForIteration(t){let e=this.options.poll_intervalMs;if(1===t)return e;for(let r=2;r<=t;r++)e*=this.options.poll_backoffFactor;return Math.min(Math.round(e),this.options.poll_maxIntervalMs)}next(){this.shouldIterate=!0}cancel(){window.clearTimeout(this.timeoutId),this.timeoutId=0}}},370353:(t,e,r)=>{r.d(e,{M:()=>o,J:()=>c});var n=r(253025),a=r(629413),s=r(172611),i=r(477666);async function o(t,e,r){if(("doc"===t||!(0,a.PU)(e)||!r)&&(0,s.ld)(e))return!0;if("video"===t&&r){const t=(await r).value;if(!(t instanceof Blob))return!1;try{const{width:e,height:r}=await(0,i.t)(t);return!e&&!r}catch(n){return!0}}return!1}function c(t,e,r){return(0,n.D)(o(t,e,r))}},315830:t=>{var e,r=function(){function t(t,e){if("function"!=typeof t)throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: "+t+".");this._batchLoadFn=t,this._maxBatchSize=function(t){if(t&&!1===t.batch)return 1;var e=t&&t.maxBatchSize;if(void 0===e)return 1/0;if("number"!=typeof e||e<1)throw new TypeError("maxBatchSize must be a positive number: "+e);return e}(e),this._batchScheduleFn=function(t){var e=t&&t.batchScheduleFn;if(void 0===e)return n;if("function"!=typeof e)throw new TypeError("batchScheduleFn must be a function: "+e);return e}(e),this._cacheKeyFn=function(t){var e=t&&t.cacheKeyFn;if(void 0===e)return function(t){return t};if("function"!=typeof e)throw new TypeError("cacheKeyFn must be a function: "+e);return e}(e),this._cacheMap=function(t){if(t&&!1===t.cache)return null;var e=t&&t.cacheMap;if(void 0===e)return new Map;if(null!==e){var r=["get","set","delete","clear"].filter((function(t){return e&&"function"!=typeof e[t]}));if(0!==r.length)throw new TypeError("Custom cacheMap missing methods: "+r.join(", "))}return e}(e),this._batch=null}var e=t.prototype;return e.load=function(t){if(null==t)throw new TypeError("The loader.load() function must be called with a value,but got: "+String(t)+".");var e=function(t){var e=t._batch;if(null!==e&&!e.hasDispatched&&e.keys.length<t._maxBatchSize&&(!e.cacheHits||e.cacheHits.length<t._maxBatchSize))return e;var r={hasDispatched:!1,keys:[],callbacks:[]};return t._batch=r,t._batchScheduleFn((function(){return function(t,e){if(e.hasDispatched=!0,0===e.keys.length)return void s(e);var r=t._batchLoadFn(e.keys);if(!r||"function"!=typeof r.then)return a(t,e,new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: "+String(r)+"."));r.then((function(t){if(!i(t))throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: "+String(t)+".");if(t.length!==e.keys.length)throw new TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n"+String(e.keys)+"\n\nValues:\n"+String(t));s(e);for(var r=0;r<e.callbacks.length;r++){var n=t[r];n instanceof Error?e.callbacks[r].reject(n):e.callbacks[r].resolve(n)}})).catch((function(r){return a(t,e,r)}))}(t,r)})),r}(this),r=this._cacheMap,n=this._cacheKeyFn(t);if(r){var o=r.get(n);if(o){var c=e.cacheHits||(e.cacheHits=[]);return new Promise((function(t){c.push((function(){return t(o)}))}))}}e.keys.push(t);var u=new Promise((function(t,r){e.callbacks.push({resolve:t,reject:r})}));return r&&r.set(n,u),u},e.loadMany=function(t){if(!i(t))throw new TypeError("The loader.loadMany() function must be called with Array<key> but got: "+t+".");for(var e=[],r=0;r<t.length;r++)e.push(this.load(t[r]).catch((function(t){return t})));return Promise.all(e)},e.clear=function(t){var e=this._cacheMap;if(e){var r=this._cacheKeyFn(t);e.delete(r)}return this},e.clearAll=function(){var t=this._cacheMap;return t&&t.clear(),this},e.prime=function(t,e){var r=this._cacheMap;if(r){var n,a=this._cacheKeyFn(t);if(void 0===r.get(a))e instanceof Error?(n=Promise.reject(e)).catch((function(){})):n=Promise.resolve(e),r.set(a,n)}return this},t}(),n="object"==typeof process&&"function"==typeof process.nextTick?function(t){e||(e=Promise.resolve()),e.then((function(){return process.nextTick(t)}))}:setImmediate||setTimeout;function a(t,e,r){s(e);for(var n=0;n<e.keys.length;n++)t.clear(e.keys[n]),e.callbacks[n].reject(r)}function s(t){if(t.cacheHits)for(var e=0;e<t.cacheHits.length;e++)t.cacheHits[e]()}function i(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(0===t.length||t.length>0&&Object.prototype.hasOwnProperty.call(t,t.length-1))}t.exports=r},594047:(t,e,r)=>{r.d(e,{o8:()=>n,GM:()=>a,QB:()=>i});const n=t=>void 0===t,a=(t,e)=>Object.fromEntries(Object.entries(t).filter((([t,r])=>!e(r))));function s(t){return[...Array(2*t)].map((()=>Math.floor(16*Math.random()).toString(16))).join("")}function i(t){var e;let r;if(null!==(e=window)&&void 0!==e&&e.crypto)try{r=Array.from(window.crypto.getRandomValues(new Uint8Array(t))).map((t=>t.toString(16).padStart(2,"0"))).join("")}catch(n){r=s(t)}else r=s(t);return r}}}]);
//# sourceMappingURL=93964.8pGEEfuAEV.js.map