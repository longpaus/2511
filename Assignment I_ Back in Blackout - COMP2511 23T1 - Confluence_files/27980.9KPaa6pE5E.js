"use strict";(self._cf=self._cf||[]).push([[27980],{457733:(e,t,r)=>{r.r(t),r.d(t,{CustomHeaderFooter:()=>b});var a=r(122551),s=r(923813),n=r(89557),l=r(806297),o=r(170915),c=r(464984),d=r(603494),u=r(883383),m=r(335320),i=r(131436),f=r(621070),y=r(526770),p=r(188358),h=r(684528),E=r(588745),v=r(991332),g=r(415911),_=r(358280);r(743887),r(114486),r(663035),r(521089),r(406634),r(765526),r(964045),r(749592),r(698297),r(593940),r(410258),r(416473);const Z=(0,a.forwardRef)(((e,t)=>{let{as:r="div",style:s}=e,n=(0,g.Z)(e,["as","style"]);return a.createElement(r,(0,v.Z)((0,v.Z)({},n),{},{style:s,ref:t,className:(0,_.Z)(["_19pkidpf _2hwxidpf _otyridpf _18u0idpf _ca0qo7ao _u5f3gktf _n3tdo7ao _19bvgktf",n.className])}))}));const M=(0,a.forwardRef)(((e,t)=>{let{as:r="div",style:s}=e,n=(0,g.Z)(e,["as","style"]);return a.createElement(r,(0,v.Z)((0,v.Z)({},n),{},{style:s,ref:t,className:(0,_.Z)(["_1skznkob",n.className])}))}));const N=(0,a.forwardRef)(((e,t)=>{let{as:r="div",style:s}=e,n=(0,g.Z)(e,["as","style"]);return a.createElement(r,(0,v.Z)((0,v.Z)({},n),{},{style:s,ref:t,className:(0,_.Z)(["_y3gn1h6o _1e0c1ule",n.className])}))}));const A=(0,a.forwardRef)(((e,t)=>{let{as:r="div",style:s}=e,n=(0,g.Z)(e,["as","style"]);return a.createElement(r,(0,v.Z)((0,v.Z)({},n),{},{style:s,ref:t,className:(0,_.Z)(["_19pk12am _y3gn1h6o _1e0c1ule",n.className])}))}));const H=(0,c.defineMessages)({unsupportedMacrosTitle:{id:"custom-header-footer.unsupported.macros.title",defaultMessage:"Unsupported macros"}}),k=(0,d.ZP)((({spaUnfriendlyMacros:e=[],type:t,js:r,css:s,html:n,intl:l})=>{const o=t===E.t.HEADER?N:A,c=a.createRef(),d=a.createRef(),{createAnalyticsEvent:v}=(0,f._)();return(0,a.useEffect)((()=>{v({type:"sendScreenEvent",data:{name:"customHeaderAndFooter",attributes:{type:t===E.t.HEADER?"header":"footer"}}}).fire()}),[v,t]),(0,a.useEffect)((()=>{d.current&&c.current&&(0,y.n)().then((()=>{d.current&&(0,p.K)(d.current,r).then((()=>{c.current&&(0,h.V)(c.current)}))}))})),a.createElement(Z,null,e.length?a.createElement(M,null,a.createElement(m.default,{primaryColor:i.zx,label:l.formatMessage(H.unsupportedMacrosTitle)}),a.createElement(u.Z,{id:"custom-header-footer.unsupported.macros.list",defaultMessage:"The following macros are not currently supported in the {type}:",values:{type:t}}),a.createElement("ul",null,e.map((e=>e&&e.name&&a.createElement("li",{key:e.name},e.name))))):null,a.createElement("div",{dangerouslySetInnerHTML:{__html:s}}),a.createElement(o,{"data-test-id":`custom-settings-${t}`,dangerouslySetInnerHTML:{__html:n},ref:c}),a.createElement("div",{ref:d}))}));const w=r(331377).ZP`query CustomHeaderAndFooterQuery($spaceKey:String){space(key:$spaceKey){id settings{customHeaderAndFooter{header{html js css spaUnfriendlyMacros{name}}footer{html js css spaUnfriendlyMacros{name}}}}}}`;function b({type:e}){return a.createElement(l.S,{attribution:o.x.BACKBONE},a.createElement(n.z1.Consumer,null,(({spaceKey:t,contentId:r})=>a.createElement(s.AE,{query:w,variables:{spaceKey:t}},(({loading:t,error:s,data:n})=>{var l,o,c;const d=null==n||null===(l=n.space)||void 0===l||null===(o=l.settings)||void 0===o||null===(c=o.customHeaderAndFooter)||void 0===c?void 0:c[e];return t||s||null==d||!d.html?null:a.createElement(k,{spaUnfriendlyMacros:Array.from(new Set(d.spaUnfriendlyMacros)),type:e,css:d.css,js:d.js,html:d.html,key:r})})))))}b.displayName="CustomHeaderFooter"},335320:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=(a=r(122551))&&a.__esModule?a:{default:a},n=r(386056);const l=e=>s.default.createElement(n.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill-rule="evenodd"><path d="M12.938 4.967c-.518-.978-1.36-.974-1.876 0L3.938 18.425c-.518.978-.045 1.771 1.057 1.771h14.01c1.102 0 1.573-.797 1.057-1.771L12.938 4.967z" fill="currentColor"/><path d="M12 15a1 1 0 01-1-1V9a1 1 0 012 0v5a1 1 0 01-1 1m0 3a1 1 0 010-2 1 1 0 010 2" fill="inherit"/></g></svg>'},e));l.displayName="WarningIcon";var o=l;t.default=o}}]);
//# sourceMappingURL=27980.9KPaa6pE5E.js.map