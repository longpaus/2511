(self._cf=self._cf||[]).push([[93130],{184465:(e,t,n)=>{var a=n(420879),s=n(935813);e.exports=function(e,t){return e&&e.length?s(e,a(t,2)):[]}},235821:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(122551),s=n(815599);const o=()=>{};function c({children:e,analyticsData:t,innerRef:n,wrapChildren:c=!1}){var l;const r=(null!=(l=e)&&null!=(l=l.props)?l.onClick:l)||o,i=(0,s.r)(r,t);return c?a.createElement("span",{ref:n,onMouseDown:i},e):(0,a.cloneElement)(e,{onClick:i,ref:n})}},609690:(e,t,n)=>{"use strict";n.d(t,{wd:()=>S,y5:()=>Z});var a=n(991332),s=n(415911),o=n(122551),c=n(962285),l=n(358280),r=n(464984),i=n(603494),u=n(621070),d=n(905657),m=n(840654),p=n(131436),h=n(612642),y=n(235821),f=n(917465),b=n(89557),_=n(806297),w=n(170915);n(137341),n(391890),n(680404),n(525437),n(322235),n(388523),n(28189),n(621997),n(570601),n(37614),n(70296),n(843385);const g=(0,o.forwardRef)(((e,t)=>{let{as:n="span",style:r}=e,i=(0,s.Z)(e,["as","style"]);return o.createElement(n,(0,a.Z)((0,a.Z)({},i),{},{style:(0,a.Z)((0,a.Z)({},r),{},{"--_kxh7a4":(0,c.Z)((0,h.Z)("color.text.subtle",p.zN))}),ref:t,className:(0,l.Z)(["_4rtxtlke _jq8g1ul9 _14hp1ul9 _1gflidpf _yhjmidpf _1gqnidpf _11lvidpf _1hbsidpf _1u71idpf _y2qtidpf _fl8bidpf _43dsuy0n _oxk4uy0n",i.className])}))}));const v=(0,r.defineMessages)({attachments:{id:"attachments.view-attachments-button",defaultMessage:"View attachments"}}),E={type:"sendUIEvent",data:{action:"clicked",actionSubject:"ViewAttachmentsButton",source:"attachments",attributes:{triggeredFrom:"fromView"}}},S={type:"sendUIEvent",data:{action:"clicked",actionSubject:"ViewAttachmentsButton",source:"attachments",attributes:{triggeredFrom:"actionsMenu"}}},I=({intl:e})=>{const t=e.formatMessage(v.attachments),{createAnalyticsEvent:n}=(0,u._)();return n({type:"sendTrackEvent",data:{actionSubject:"feature",action:"exposed",source:"ViewAttachmentsButton",attributes:{isPageSSRd:window.__SSR_RENDERED__}}}).fire(),o.createElement(_.S,{attribution:w.x.BACKBONE},o.createElement(b.z1.Consumer,null,(({contentId:e})=>o.createElement(g,null,o.createElement(d.Z,{appearance:"subtle"},o.createElement(y.Z,{analyticsData:E},o.createElement("a",{href:`${f.b}/pages/viewpageattachments.action?pageId=${e}&metadataLink=true`},o.createElement(m.default,{label:t}))))))))};I.displayName="ViewAttachmentsButtonComponent";const Z=(0,i.ZP)(I)},967888:(e,t,n)=>{"use strict";n.d(t,{p:()=>g});var a=n(991332),s=n(29298),o=n(122551),c=n(923813),l=n(184465),r=n.n(l),i=n(564013),u=n.n(i),d=n(213489),m=n(961634),p=n(401487),h=n(415911),y=n(358280),f=n(526770);n(494929),n(408475),n(679490),n(67451),n(13059),n(67466),n(118267),n(653494),n(978602),n(315755),n(846669),n(480862),n(576998),n(526421),n(264481),n(85017),n(779838),n(507819),n(569862),n(563952);const b=(0,o.forwardRef)(((e,t)=>{let{as:n="div",style:s}=e,c=(0,h.Z)(e,["as","style"]);return o.createElement(n,(0,a.Z)((0,a.Z)({},c),{},{style:s,ref:t,className:(0,y.Z)(["_1e0c1o8l _15y51o8l _4wh61h6o _e8hjusvi _ydux1t0q _oun6okh7 _t1661o8l _18411kw7 _3t5xdlk8 _qjtikklf _19ebiio8 _c50s1y44 _97xh19bv _3qnx1y44 _1bsz19bv _10v91r31 _62naglyw _7b6anqa1 _1cg81q9y _1gxg1q9c",c.className])}))}));class _ extends o.Component{constructor(...e){super(...e),(0,s.Z)(this,"state",{superBatchLoaded:!1})}componentDidMount(){this.mounted=!0;const{webItems:e,onLoad:t,waitForSuperBatch:n}=this.props;t&&t({webItems:e}),n&&(0,f.n)().then((()=>{this.mounted&&this.setState({superBatchLoaded:!0})}))}componentWillUnmount(){this.mounted=!1}render(){var e,t;const{id:n,tagName:a,className:s,style:c,children:l,webItems:r,webSections:i,location:u,contentId:d,waitForSuperBatch:m}=this.props;if(m&&!this.state.superBatchLoaded)return null;const p={"data-webitem-location":u,"data-content-id":d,children:"function"==typeof l?l({webItems:r,webSections:i}):null};if(n&&(p.id=n),s&&(p.className=s),c&&(p.style=c),"aui-button-subtle"===(null==p||null===(e=p.children)||void 0===e||null===(t=e.props)||void 0===t?void 0:t.buttonType)){return o.createElement(b,null,o.createElement(a,p))}return o.createElement(a,p)}}_.displayName="WebItemLocationComponent",(0,s.Z)(_,"defaultProps",{tagName:"div"});var w=n(669159);class g extends o.Component{constructor(...e){super(...e),(0,s.Z)(this,"experienceSuccess",(e=>{this.props.experienceSuccess&&this.props.experienceSuccess(e)}))}render(){const{location:e,children:t,onLoad:n,hasMultipleSections:s,renderWhenLoading:l,allowedWebItems:i,notAllowedWebItems:h,fetchPolicy:y,spaceKey:f,contentId:b,id:g,className:v,style:E,tagName:S,version:I,waitForSuperBatch:Z}=this.props,x={location:Array.isArray(e)?null:e,locations:Array.isArray(e)?e:[],contentId:b||null,spaceKey:f||null,version:I||null};return o.createElement(c.AE,{query:w.W,variables:x,fetchPolicy:y},(({data:c,loading:y,error:f})=>{var b;if(y&&!c)return l&&"function"==typeof t?t({loading:y}):null;if(f)return(0,d.T)(f)?((0,p.Xb)(f),null):o.createElement(m.X,{error:f});let w=((null!=(b=c)?b.webItemSections:b)||[]).reduce(((e,t)=>e.concat((t.items||[]).map((e=>(0,a.Z)((0,a.Z)({},e),{},{parentSection:{label:t.label||t.styleClass}}))))),[]);w=r()(w,"completeKey"),i&&(w=w.filter((e=>i.includes(e.completeKey)))),h&&(w=w.filter((e=>!h.includes(e.completeKey)))),w.forEach((e=>{const t={};if(Array.isArray(e.params)&&(e.params.forEach((e=>{t[e.key]=e.value})),e.params=t),e.section&&-1!==e.section.indexOf("/")){const t=e.section.split("/");e.webSection=t[1]}}));let I=[];return s&&(I=u()(w.map((e=>e.section)))),w.sort(((e,t)=>e.weight-t.weight==0?e.label.localeCompare(t.label):e.weight-t.weight)),y||this.experienceSuccess(!0),o.createElement(_,{id:g,className:v,style:E,tagName:S,location:e,webItems:w,webSections:I,onLoad:n,waitForSuperBatch:Z},t)}))}}g.displayName="WebItemLocation",(0,s.Z)(g,"defaultProps",{fetchPolicy:"cache-and-network"})},669159:(e,t,n)=>{"use strict";n.d(t,{W:()=>a});const a=n(331377).ZP`query WebItemLocationQuery($location:String$locations:[String]$contentId:ID$spaceKey:String$version:Int){webItemSections(location:$location locations:$locations contentId:$contentId key:$spaceKey version:$version){id label cacheKey styleClass items{accessKey completeKey hasCondition id icon{height width path}params{key value}label moduleKey section styleClass tooltip url urlWithoutContextPath weight}}}`},7841:(e,t,n)=>{"use strict";n.d(t,{$_:()=>a,xv:()=>s,Nj:()=>o,On:()=>c,t:()=>l,BZ:()=>r,Iw:()=>i,lu:()=>u,AE:()=>d});const a="content-metadata-jira",s="content-metadata-attachments",o="content-metadata-page-restrictions",c="draft-status-lozenge",l="status-lozenge-scheduled",r="rte-button-restrictions",i="inviteToEdit",u="com.addonengine.analytics__analytics-content-byline-item",d="com.addonengine.analytics__analytics-content-menu-item"},815599:(e,t,n)=>{"use strict";n.d(t,{r:()=>c});var a=n(122551),s=n(621070),o=n(274317);const c=(e,t,n)=>{const{createAnalyticsEvent:c}=(0,s._)(),l=(0,o.V)(e),r=(0,o.V)(t);return(0,a.useCallback)(((...e)=>{const t="function"==typeof r.current?r.current(...e):r.current;c(t).fire(n),l.current(...e)}),[c,l,r,n])}},840654:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,s=(a=n(122551))&&a.__esModule?a:{default:a},o=n(386056);const c=e=>s.default.createElement(o.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M11.643 17.965c-1.53 1.495-4.016 1.496-5.542.004a3.773 3.773 0 01.002-5.412l7.147-6.985a2.316 2.316 0 013.233-.003c.893.873.895 2.282.004 3.153l-6.703 6.55a.653.653 0 01-.914-.008.62.62 0 010-.902l6.229-6.087a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.23 6.087a2.502 2.502 0 000 3.607 2.643 2.643 0 003.683.009l6.703-6.55a4.074 4.074 0 00-.003-5.859 4.306 4.306 0 00-6.002.003l-7.148 6.985a5.655 5.655 0 00-.001 8.118c2.29 2.239 6.015 2.238 8.31-.005l6.686-6.533a.941.941 0 000-1.353.995.995 0 00-1.384 0l-6.686 6.534z" fill="currentColor" fill-rule="evenodd"/></svg>'},e));c.displayName="AttachmentIcon";var l=c;t.default=l}}]);
//# sourceMappingURL=93130.QbMRp2oLRN.js.map