"use strict";(self._cf=self._cf||[]).push([[38639],{538639:(e,n,a)=>{a.d(n,{tH:()=>E,ts:()=>r,Ch:()=>c,z8:()=>o,XN:()=>i,B$:()=>m,Cj:()=>_,km:()=>T,q9:()=>I,zh:()=>d,ri:()=>S,uV:()=>b,tz:()=>w,N4:()=>l,Rs:()=>C,EZ:()=>P,Vr:()=>R,Ku:()=>O,$j:()=>N,So:()=>y,F:()=>L,Ay:()=>G,KP:()=>u,cu:()=>g,eL:()=>D,vP:()=>M,RI:()=>K,y4:()=>h,SM:()=>v,Cz:()=>f,TA:()=>Y,S1:()=>B,ME:()=>V,At:()=>W,Lf:()=>H,AI:()=>U,uc:()=>k,z4:()=>F,_t:()=>z,xL:()=>q,tO:()=>Z,te:()=>X,oq:()=>x,rq:()=>j,y9:()=>Q,dn:()=>J,O2:()=>$,XZ:()=>ee,s2:()=>ne,Xp:()=>ae,sj:()=>te,Z1:()=>se,Qv:()=>pe,s3:()=>Ae,BJ:()=>Ee,RT:()=>re,Z9:()=>ce,Cp:()=>oe,nX:()=>ie,dm:()=>me,rW:()=>_e,s$:()=>Te,mE:()=>Ie,iN:()=>de,jT:()=>Se,zo:()=>be,Xu:()=>we,p4:()=>le,ck:()=>Ce,U1:()=>Pe,_p:()=>Re,_2:()=>Oe,WQ:()=>Ne,Jd:()=>ye,Yw:()=>Le,T3:()=>Ge,HE:()=>ue,gC:()=>ge,Te:()=>De,dd:()=>Me,nM:()=>Ke,cz:()=>he,RW:()=>ve,Sd:()=>fe,LH:()=>Ye,u$:()=>Be,dc:()=>Ve,Fd:()=>We,Lz:()=>He,mR:()=>Ue,me:()=>ke,oG:()=>Fe,i1:()=>ze,m1:()=>qe,pH:()=>Ze,Fg:()=>Xe,G9:()=>xe,yM:()=>je,uL:()=>Qe,Gr:()=>Je,uR:()=>$e,Bn:()=>en,Ts:()=>nn,Es:()=>tn,KD:()=>sn,dj:()=>pn,kk:()=>An,xt:()=>En,aR:()=>rn,kj:()=>cn,wJ:()=>on,QT:()=>mn,J3:()=>_n,s8:()=>Tn,Rm:()=>In,nZ:()=>dn,vr:()=>Sn,J1:()=>bn,R4:()=>wn,GJ:()=>ln});var t=a(234693),s=a(917465);const p=(e,n)=>e.params.contentId!==n.params.contentId,A=(e,n)=>e.params.spaceKey!==n.params.spaceKey,E=new t.A({name:"BASE",pattern:"/"}),r=new t.A({name:"WIKI",pattern:s.b}),c=new t.A({name:"HOME",pattern:s.b+"/home/:view?"}),o=new t.A({name:"TEMPLATE_GALLERY",pattern:s.b+"/templates"}),i=new t.A({name:"CALENDAR",pattern:s.b+"/calendar/mycalendar.action"}),m=new t.A({name:"MY_CALENDAR",pattern:s.b+"/mycalendar"}),_=new t.A({name:"QUESTIONS",pattern:s.b+"/plugins/servlet/ac/com.atlassian.confluence.plugins.confluence-questions/globalQuestionsViewer?ac.com.atlassian.confluence.plugins.confluence-questions.pattern=/questions/ask"}),T=new t.A({name:"CONTENT_HISTORY",pattern:s.b+"/spaces/:spaceKey/history/:contentId(\\d+)/:contentSlug?"}),I=new t.A({name:"CONTENT_HISTORY_LEGACY",pattern:s.b+"/pages/viewpreviousversions.action"}),d=new t.A({name:"EDIT_PAGE",pattern:s.b+"/spaces/:spaceKey/:contentType(pages)/edit/:contentId(\\d+)"}),S=new t.A({name:"EDIT_BLOG",pattern:s.b+"/spaces/:spaceKey/:contentType(blog)/edit/:contentId(\\d+)"}),b=new t.A({name:"EDIT_PAGE_V2",pattern:s.b+"/spaces/:spaceKey/:contentType(pages)/edit-v2/:contentId(\\d+)"}),w=new t.A({name:"EDIT_BLOG_V2",pattern:s.b+"/spaces/:spaceKey/:contentType(blog)/edit-v2/:contentId(\\d+)"}),l=new t.A({name:"EDIT_PAGE_EMBED",pattern:s.b+"/spaces/:spaceKey/:contentType(pages)/edit-embed/:contentId(\\d+)"}),C=new t.A({name:"CREATE_CONTENT",pattern:s.b+"/create-content/:contentType"}),P=new t.A({name:"CREATE_PAGE",pattern:s.b+"/spaces/:spaceKey/:contentType(pages)/create"}),R=new t.A({name:"CREATE_BLOG",pattern:s.b+"/spaces/:spaceKey/:contentType(blog)/create"}),O=new t.A({name:"CREATE_WHITEBOARD",pattern:s.b+"/spaces/:spaceKey/:contentType(whiteboard)/create"}),N=new t.A({name:"DELETE_PAGE",pattern:s.b+"/pages/removepage.action?pageId=:contentId(\\d+)"}),y=new t.A({name:"ONBOARDING",pattern:s.b+"/welcome"}),L=new t.A({name:"SPACE_DIRECTORY",pattern:s.b+"/spaces"}),G=new t.A({name:"SPACE_SETTINGS",pattern:s.b+"/spaces/viewspacesummary.action?key=:spaceKey([^&]+)"}),u=new t.A({name:"SPACE_SETTINGS_REORDERPAGES",pattern:s.b+"/pages/reorderpages.action?key=:spaceKey([^&]+)"}),g=new t.A({name:"SPACE_PERMISSION",pattern:s.b+"/spaces/spacepermissions.action?key=:spaceKey([^&]+)"}),D=new t.A({name:"SPACE_OVERVIEW_REDIRECT_LEGACY",pattern:s.b+"/spaces/viewspace.action"}),M=new t.A({name:"DELETE_SPACE_LEGACY",pattern:s.b+"/spaces/doremovespace.action?key=:spaceKey([^&]+)"}),K=new t.A({name:"SPACE_INDEX",pattern:s.b+"/spaces/:spaceKey",condition:({params:e})=>Boolean(e.spaceKey&&!e.spaceKey.endsWith(".action")),isTransition:A}),h=Object.assign(new t.A({name:"SPACE_OVERVIEW",pattern:s.b+"/spaces/:spaceKey/overview",isTransition:A}),{HOMEPAGE_ID_QUERY_KEY:"homepageId"}),v=new t.A({name:"VIEW_PAGE",pattern:s.b+"/spaces/:spaceKey/pages/:contentId(\\d+)/:contentSlug?",isTransition:p}),f=new t.A({name:"NEXT_VIEW_PAGE",pattern:s.b+"/spaces/:spaceKey/next-pages/:contentId(\\d+)/:contentSlug?",isTransition:p}),Y=new t.A({name:"BLOG_HOME",pattern:s.b+"/spaces/:spaceKey/blog"}),B=new t.A({name:"VIEW_BLOG",pattern:s.b+"/spaces/:spaceKey/blog/:contentId(\\d+)/:contentSlug?",isTransition:p}),V=new t.A({name:"WHITEBOARD_HOME",pattern:s.b+"/spaces/:spaceKey/whiteboard"}),W=new t.A({name:"WHITEBOARD_BOARD",pattern:s.b+"/spaces/:spaceKey/whiteboard/:contentId"}),H=new t.A({name:"CONTACT_ADMINISTRATOR",pattern:s.b+"/contact-administrators"}),U=new t.A({name:"ADMIN_SETTINGS",pattern:s.b+"/admin"}),k=new t.A({name:"ADMIN_GLOBAL_AUTOMATION",pattern:s.b+"/admin/automation"}),F=new t.A({name:"ADMIN_EDIT_EXTERNAL_SHARING",pattern:s.b+"/admin/public-links"}),z=new t.A({name:"ADMIN_FORGE_APPS",pattern:s.b+"/admin/forge?id=:id(.+)"}),q=new t.A({name:"ADMIN_NEW_GLOBAL_PERMISSIONS",pattern:s.b+"/admin/permissions/global"}),Z=new t.A({name:"ADMIN_NEW_GLOBAL_PERMISSIONS_USER_DETAILS",pattern:s.b+"/admin/permissions/global/user/:accountId"}),X=new t.A({name:"ADMIN_NEW_GLOBAL_PERMISSIONS_GROUP_DETAILS",pattern:s.b+"/admin/permissions/global/group/:groupId"}),x=new t.A({name:"ADMIN_GLOBAL_PERMISSIONS",pattern:s.b+"/admin/permissions/globalpermissions.action"}),j=new t.A({name:"ADMIN_EDIT_GLOBAL_PERMISSIONS",pattern:s.b+"/admin/permissions/editglobalpermissions.action"}),Q=new t.A({name:"ADMIN_SPACE_PERMISSIONS",pattern:s.b+"/admin/permissions/viewdefaultspacepermissions.action"}),J=new t.A({name:"ADMIN_EDIT_SPACE_PERMISSIONS",pattern:s.b+"/admin/permissions/editdefaultspacepermissions.action"}),$=new t.A({name:"ADMIN_AUDIT_LOG",pattern:s.b+"/admin/auditlogging.action"}),ee=new t.A({name:"SPACE_CALENDAR",pattern:s.b+"/spaces/:spaceKey/calendars?src=sidebar&openAddCalDialog=true"}),ne=new t.A({name:"SPACE_CALENDARS",pattern:s.b+"/spaces/:spaceKey/calendars"}),ae=new t.A({name:"DISCOVER",pattern:s.b+"/discover"}),te=new t.A({name:"ALL_UPDATES",pattern:s.b+"/discover/all-updates"}),se=new t.A({name:"POPULAR",pattern:s.b+"/discover/popular"}),pe=new t.A({name:"MY_WORK_HOME",pattern:s.b+"/my"}),Ae=new t.A({name:"MY_WORK_DRAFTS",pattern:s.b+"/my/drafts"}),Ee=new t.A({name:"MY_WORK_RECENT",pattern:s.b+"/my/recent-work"}),re=new t.A({name:"MY_RECENTLY_VISITED",pattern:s.b+"/my/recently-visited"}),ce=new t.A({name:"MY_SAVED_FOR_LATER",pattern:s.b+"/my/saved-for-later"}),oe=new t.A({name:"RECENT_PAGES",pattern:s.b+"/recent"}),ie=new t.A({name:"RECENT_VISITED",pattern:s.b+"/recent/visited"}),me=new t.A({name:"RECENT_DRAFTS",pattern:s.b+"/recent/draft"}),_e=new t.A({name:"RECENT_SAVED",pattern:s.b+"/recent/saved"}),Te=new t.A({name:"TEMPLATE_MIGRATION_PREVIEW",pattern:s.b+"/template/migration/preview?templateId=:contentId([0-9a-z-]+)"}),Ie=new t.A({name:"EDIT_TEMPLATE",pattern:s.b+"/templates/edit/:contentId([0-9a-z-]+)"}),de=new t.A({name:"EDIT_TEMPLATE_BLUEPRINT",pattern:s.b+"/templates/edit/:pluginKey/:moduleKey"}),Se=new t.A({name:"EDIT_TEMPLATE_SPACE",pattern:s.b+"/spaces/:spaceKey/templates/edit/:contentId([0-9a-z-]+)"}),be=new t.A({name:"CREATE_TEMPLATE",pattern:s.b+"/templates/create"}),we=new t.A({name:"CREATE_TEMPLATE_SPACE",pattern:s.b+"/spaces/:spaceKey/templates/create"}),le=new t.A({name:"HELLO_WORLD",pattern:s.b+"/hello-world"}),Ce=new t.A({name:"DASHBOARD_ACTION_LEGACY",pattern:s.b+"/dashboard.action"}),Pe=new t.A({name:"SPA_ACTION_LEGACY",pattern:s.b+"/spa.action"}),Re=new t.A({name:"INDEX_ACTION_LEGACY",pattern:s.b+"/index.action"}),Oe=new t.A({name:"CREATE_PAGE_ACTION_LEGACY",pattern:s.b+"/pages/createpage.action"}),Ne=new t.A({name:"CREATE_BLOG_ACTION_LEGACY",pattern:s.b+"/pages/createblogpost.action"}),ye=new t.A({name:"CREATE_PAGE_VARIABLES_ACTION_LEGACY",pattern:s.b+"/pages/createpage-entervariables.action"}),Le=new t.A({name:"RESUME_DRAFT_LEGACY",pattern:s.b+"/pages/resumedraft.action"}),Ge=new t.A({name:"COPY_PAGE_LEGACY",pattern:s.b+"/pages/copypage.action"}),ue=new t.A({name:"VIEW_PAGE_ACTION_LEGACY",pattern:s.b+"/pages/viewpage.action",condition:({query:e})=>Boolean(e.pageId&&1===Object.keys(e).length)}),ge=new t.A({name:"SPACE_OVERVIEW_INDEX_ACTION_LEGACY",pattern:s.b+"/spaces/:spaceKey/overview/index.action"}),De=new t.A({name:"SPACE_INDEX_ACTION_LEGACY",pattern:s.b+"/spaces/:spaceKey/index.action"}),Me=new t.A({name:"SPACE_PAGES",pattern:s.b+"/spaces/:spaceKey/pages"}),Ke=new t.A({name:"VIEW_BLOG_DATE_LEGACY",pattern:s.b+"/spaces/:spaceKey/blog/:year(\\d+)/:month(\\d+)/:day(\\d+)/:contentId(\\d+)/:contentSlug?",isTransition:p}),he=new t.A({name:"ACTION_REDIRECT_LEGACY",pattern:s.b+"/spaces/(.*).action",condition:({query:e})=>null==e.key}),ve=new t.A({name:"ADVANCED_SEARCH_LEGACY",pattern:s.b+"/dosearchsite.action"}),fe=new t.A({name:"ADVANCED_SEARCH",pattern:s.b+"/search"}),Ye=new t.A({name:"EXTERNAL_SHARE",pattern:s.b+"/external/:contentId/:externalToken"}),Be=new t.A({name:"PDF_EXPORT_PAGE",pattern:s.b+"/pdf/spaces/:spaceKey/pages/:contentId(\\d+)"}),Ve=new t.A({name:"PDF_EXPORT_SPACE",pattern:s.b+"/pdf/spaces/:spaceKey/pages/overview"}),We=new t.A({name:"VIEW_PAGE_MOBILE",pattern:s.b+"/mobile/spaces/:spaceKey/pages/:contentId(\\d+)/:contentSlug?"}),He=new t.A({name:"VIEW_BLOG_MOBILE",pattern:s.b+"/mobile/spaces/:spaceKey/blog/:year(\\d+)/:month(\\d+)/:day(\\d+)/:contentId(\\d+)/:contentSlug?"}),Ue=new t.A({name:"PEOPLE_DIRECTORY_SEARCH",pattern:"/people/search"}),ke=new t.A({name:"CONFLUENCE_PEOPLE_DIRECTORY_SEARCH",pattern:s.b+"/people/search"}),Fe=new t.A({name:"MARKETPLACE_FIND_APPS",pattern:s.b+"/marketplace(.*)"}),ze=new t.A({name:"MARKETPLACE_APP_REQUESTS",pattern:s.b+"/marketplace/manage/app-requests"}),qe=new t.A({name:"MARKETPLACE_MANAGE_PROMOTIONS",pattern:s.b+"/marketplace/manage/promotions"}),Ze=new t.A({name:"PEOPLE_DIRECTORY",pattern:s.b+"/people(/[\\w-:]+)*"}),Xe=new t.A({name:"SPACE_RESTRICTED_PAGES",pattern:s.b+"/pages/listpermissionpages.action"}),xe=new t.A({name:"SPACE_ARCHIVED_PAGES",pattern:s.b+"/spaces/:spaceKey/archivedpages"}),je=new t.A({name:"PAGE_DIFF_BY_VERSION",pattern:s.b+"/pages/diffpagesbyversion.action"}),Qe=new t.A({name:"SPACE_ANALYTICS",pattern:s.b+"/display/:spaceKey/customcontent/list/ac%3Acom.addonengine.analytics%3Aspace-analytics"}),Je=new t.A({name:"SPACE_QUESTIONS",pattern:s.b+"/display/:spaceKey/customcontent/list/ac%3Acom.atlassian.confluence.plugins.confluence-questions%3Aquestion"}),$e=new t.A({name:"SPACE_CUSTOM_CONTENT_LIST",pattern:s.b+"/display/:spaceKey/customcontent/list/:type"}),en=new t.A({name:"CUSTOM_CONTENT_VIEW",pattern:s.b+"/display/:spaceKey/customcontent/:contentId(\\d+)"}),nn=new t.A({name:"SPACE_BULK_TOOLS",pattern:s.b+"/spaces/:spaceKey/bulktools"}),an=s.b+"/spaces/:spaceKey/settings",tn=new t.A({name:"SPACE_SETTINGS_LANDING_PAGE",pattern:an+"/home"}),sn=new t.A({name:"SPACE_SETTINGS_LANDING_PAGE_ALT",pattern:an}),pn=new t.A({name:"SPACE_SETTINGS_AUTOMATION",pattern:an+"/automation"}),An=new t.A({name:"SPACE_SETTINGS_ARCHIVE_SPACE",pattern:an+"/archiveSpace"}),En=new t.A({name:"SPACE_SETTINGS_EDITOR_CONVERSION",pattern:an+"/editorConversion"}),rn=new t.A({name:"SPACE_SETTINGS_RELATED_PAGES",pattern:an+"/relatedPages"}),cn=new t.A({name:"SPACE_FORGE_APPS",pattern:s.b+"/spaces/:spaceKey/apps/:appId([0-9a-z-]+)/:envId([0-9a-z-]+)/:forgeManifestRoute([0-9a-z-]+)/:appRoutePath*"}),on=new t.A({name:"GLOBAL_PAGE_FORGE",pattern:s.b+"/apps/:appId([0-9a-z-]+)/:envId([0-9a-z-]+)/:forgeManifestRoute([0-9a-z-]+)/:appRoutePath*"}),mn=new t.A({name:"SPACE_SETTINGS_FORGE_APPS",pattern:an+"/apps/:appId([0-9a-z-]+)/:envId([0-9a-z-]+)/:appRoutePath*"}),_n=new t.A({name:"SPACE_SETTINGS_CONTENT_STATE",pattern:an+"/contentStatuses"}),Tn=new t.A({name:"SPACE_TRASH",pattern:s.b+"/pages/viewtrash.action?key=:spaceKey([^&]+)"}),In=new t.A({name:"MOBILE_TAKEOVER_PAGE",pattern:s.b+"/mobileapp"}),dn=new t.A({name:"DEFAULT_ADMIN_PAGE",pattern:s.b+"/admin/viewgeneralconfig.action"}),Sn=new t.A({name:"DEFAULT_ADMIN_MANAGE_APPS",pattern:s.b+"/plugins/servlet/upm"}),bn=new t.A({name:"SPACE_SETTINGS_TEMPLATE_LIST_PAGE",pattern:s.b+"/pages/templates2/listpagetemplates.action?key=:spaceKey([^&]+)"}),wn=new t.A({name:"GLOBAL_SETTINGS_TEMPLATE_LIST_PAGE",pattern:s.b+"/pages/templates2/listglobaltemplates.action"}),ln=new t.A({name:"CUSTOM_CONTENTS_ON_PAGE_LIST",pattern:s.b+"/display/:spaceKey/pages/:contentId(\\d+)/customcontents/:type?"})},234693:(e,n,a)=>{a.d(n,{A:()=>r});var t=a(991332),s=a(29298),p=a(831904),A=a(910423);var E=a(564625);class r{static matchFirst(e,n){for(const a of e){if(!(a instanceof r))continue;const e=a.match(n);if(e)return e}return null}constructor(e){(0,s.Z)(this,"name",void 0),(0,s.Z)(this,"pattern",void 0),(0,s.Z)(this,"condition",void 0),(0,s.Z)(this,"isTransition",void 0),this.name=e.name,this.pattern=e.pattern,this.condition=e.condition?e.condition:()=>!0,this.isTransition=(n,a)=>!n||(e.isTransition?n.name!==a.name||e.isTransition(n,a):n.pathname!==a.pathname)}match(e){const n=function(e,n){const a=(0,p.parse)(n,!0),t=a.pathname||"";let s=(0,A.Z)(t,{path:e,exact:!0});if(s||(s=(0,A.Z)(`${t}${a.search}`,{path:e,exact:!0})),!s)return null;const E={};if(s.params)for(const[p,A]of Object.entries(s.params)){let e=A;try{e=decodeURIComponent(A)}catch(r){}E[p]=e}return{url:n,pathname:t,search:a.search||"",hash:a.hash||"",pattern:e,params:E,query:a.query||""}}(this.pattern,e);return n?this.condition&&!this.condition(n)?null:(0,t.Z)((0,t.Z)({},n),{},{name:this.name}):null}toUrl(e,n){return((e,n={},a={})=>{const s=(0,E.MY)(e,{encode:decodeURIComponent})(n),A=(0,p.parse)(s,!0);return(0,p.format)({pathname:A.pathname,query:(0,t.Z)((0,t.Z)({},A.query),a.query||{}),hash:a.hash})})(this.pattern,e,n)}}}}]);
//# sourceMappingURL=38639.Me27Eaq5Up.js.map