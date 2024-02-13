"use strict";(self._cf=self._cf||[]).push([[24751],{662474:(e,t,i)=>{let r;i.d(t,{i:()=>r}),function(e){e.INDIVIDUAL="individual",e.TEAM="team"}(r||(r={}))},143351:(e,t,i)=>{i.d(t,{w:()=>r});const r=(0,i(122551).lazy)((()=>Promise.all([i.e(61769),i.e(78248),i.e(54936),i.e(11216),i.e(89990),i.e(12953),i.e(54787),i.e(98634)]).then(i.bind(i,584382))))},524751:(e,t,i)=>{i.d(t,{ZP:()=>b});var r=i(122551);const s=(0,r.lazy)((()=>Promise.all([i.e(61769),i.e(78248),i.e(54936),i.e(11216),i.e(97996),i.e(38936),i.e(76338),i.e(76949),i.e(99470)]).then(i.bind(i,547374))));var o=i(415911),a=i(991332),n=i(953307),d=i(29298),l=i(130860),h=i(143351),c=i(662474),p=i(824464),u=i(676424),w=i(544338),g=i(818735),m=i(53567),f=i(907345),x=i(685753);const v=({fireAnalytics:e})=>((0,r.useEffect)((()=>{e((0,m.XO)("user","spinner"))}),[e]),r.createElement(g.eg,null,r.createElement(x.Z,null)));class y extends r.PureComponent{constructor(...e){super(...e),(0,d.Z)(this,"_isMounted",!1),(0,d.Z)(this,"showDelay","click"===this.props.trigger?0:f.w),(0,d.Z)(this,"hideDelay","click"===this.props.trigger?0:f.y),(0,d.Z)(this,"showTimer",0),(0,d.Z)(this,"hideTimer",0),(0,d.Z)(this,"fireAnalytics",(e=>{this._isMounted&&this.props.createAnalyticsEvent&&(0,m.BX)(this.props.createAnalyticsEvent,e)})),(0,d.Z)(this,"hideProfilecard",(()=>{clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.hideTimer=window.setTimeout((()=>{this.setState({visible:!1})}),this.hideDelay)})),(0,d.Z)(this,"showProfilecard",(()=>{clearTimeout(this.hideTimer),clearTimeout(this.showTimer),this.showTimer=window.setTimeout((()=>{this.state.visible||(this.clientFetchProfile(),this.setState({visible:!0}))}),this.showDelay)})),(0,d.Z)(this,"onClick",(e=>{e.stopPropagation(),this.showProfilecard(),this.state.visible||this.fireAnalytics((0,m.cw)("user","click"))})),(0,d.Z)(this,"onMouseEnter",(()=>{this.showProfilecard(),this.state.visible||this.fireAnalytics((0,m.cw)("user","hover"))})),(0,d.Z)(this,"containerListeners","hover"===this.props.trigger?{onMouseEnter:this.onMouseEnter,onMouseLeave:this.hideProfilecard}:{onClick:this.onClick}),(0,d.Z)(this,"layerListeners",{handleClickOutside:this.hideProfilecard,handleEscapeKeydown:this.hideProfilecard}),(0,d.Z)(this,"state",{visible:!1,isLoading:void 0,hasError:!1,error:null,data:null,reportingLinesData:void 0,shouldShowGiveKudos:!1,teamCentralBaseUrl:void 0,kudosDrawerOpen:!1}),(0,d.Z)(this,"clientFetchProfile",(()=>{const{cloudId:e,userId:t}=this.props,{isLoading:i}=this.state;!0!==i&&(this.setState({teamCentralBaseUrl:this.props.resourceClient.getTeamCentralBaseUrl()}),this.setState({isLoading:!0,hasError:!1,data:null},(()=>{Promise.all([this.props.resourceClient.getProfile(e||"",t,this.fireAnalytics),this.props.resourceClient.getReportingLines(t),this.props.resourceClient.shouldShowGiveKudos()]).then((e=>this.handleClientSuccess(...e)),(e=>this.handleClientError(e))).catch((e=>this.handleClientError(e)))})))})),(0,d.Z)(this,"openKudosDrawer",(()=>{this.hideProfilecard(),this.setState({kudosDrawerOpen:!0})})),(0,d.Z)(this,"closeKudosDrawer",(()=>{this.setState({kudosDrawerOpen:!1})})),(0,d.Z)(this,"renderCard",(()=>{const{isLoading:e}=this.state;return!0===e||void 0===e?r.createElement(g.UK,null,r.createElement(v,{fireAnalytics:this.fireAnalytics})):this.renderProfileCard()}))}componentDidMount(){this._isMounted=!0}componentDidUpdate(e){const{userId:t,cloudId:i,resourceClient:r}=this.props,{visible:s}=this.state;!s||t===e.userId&&i===e.cloudId&&r===e.resourceClient||this.setState({isLoading:void 0},this.clientFetchProfile)}componentWillUnmount(){this._isMounted=!1,clearTimeout(this.showTimer),clearTimeout(this.hideTimer)}handleClientSuccess(e,t,i){this._isMounted&&this.setState({isLoading:!1,hasError:!1,data:e,reportingLinesData:t,shouldShowGiveKudos:i})}handleClientError(e){this._isMounted&&this.setState({isLoading:!1,hasError:!0,error:e})}filterActions(){return(0,w.Z)(this.props.actions,this.state.data)}renderProfileCard(){var e;const t=(0,a.Z)((0,a.Z)({userId:this.props.userId,isCurrentUser:null===(e=this.state.data)||void 0===e?void 0:e.isCurrentUser,clientFetchProfile:this.clientFetchProfile},this.state.data),{},{reportingLines:this.state.reportingLinesData,onReportingLinesClick:this.props.onReportingLinesClick,isKudosEnabled:this.state.shouldShowGiveKudos,teamCentralBaseUrl:this.state.teamCentralBaseUrl,cloudId:this.props.cloudId,openKudosDrawer:this.openKudosDrawer}),i="hover"===this.props.trigger?{onMouseEnter:this.onMouseEnter,onMouseLeave:this.hideProfilecard}:{};return r.createElement("div",i,this.state.visible&&r.createElement(r.Suspense,{fallback:null},r.createElement(s,(0,n.Z)({},t,{actions:this.filterActions(),hasError:this.state.hasError,errorType:this.state.error,withoutElevation:!0}))))}renderWithTrigger(){return r.createElement(r.Fragment,null,r.createElement(p.Z,{isOpen:!!this.state.visible,onClose:this.hideProfilecard,placement:this.props.position,content:this.renderCard,trigger:e=>{const{ref:t}=e,i=(0,o.Z)(e,["ref"]);return r.createElement("span",(0,n.Z)({},i,this.containerListeners,{ref:t,"data-testid":this.props.testId}),this.props.children)},zIndex:u.ug.modal(),shouldUseCaptureOnOutsideClick:!0,autoFocus:"click"===this.props.trigger}),this.state.shouldShowGiveKudos&&r.createElement(r.Suspense,{fallback:null},r.createElement(h.w,{isOpen:this.state.kudosDrawerOpen,recipient:{type:c.i.INDIVIDUAL,recipientId:this.props.userId},analyticsSource:"profile-card",teamCentralBaseUrl:this.state.teamCentralBaseUrl,cloudId:this.props.cloudId,addFlag:this.props.addFlag,onClose:this.closeKudosDrawer})))}render(){if(this.props.children)return this.renderWithTrigger();throw new Error('Component "ProfileCardTrigger" must have "children" property')}}y.displayName="ProfilecardTrigger",(0,d.Z)(y,"defaultProps",{actions:[],trigger:"hover",position:"bottom-start"});const b=(0,l.Z)()(y)},544338:(e,t,i)=>{i.d(t,{Z:()=>r});const r=(e=[],t)=>e.filter((e=>!e.shouldRender||("function"!=typeof e.shouldRender?Boolean(e.shouldRender):e.shouldRender(t))))},818735:(e,t,i)=>{i.d(t,{UK:()=>h,m1:()=>c,kx:()=>p,YI:()=>g,pr:()=>m,uF:()=>f,uu:()=>x,aY:()=>v,k0:()=>y,p8:()=>b,IA:()=>Z,qW:()=>k,f4:()=>C,Gv:()=>E,hN:()=>z,eg:()=>D,_L:()=>P,gp:()=>T,o$:()=>I,bm:()=>A});var r=i(790632),s=i(953307),o=i(122551),a=i(321534),n=i(131436),d=i(676424),l=i(973564);(0,r.Z)("div",{target:"e1yrdz1e0"})();const h=(0,r.Z)("div",{target:"e1yrdz1e1"})("background-color:",l.Um,";border-radius:",d.E0,"px;width:",45*(0,d.ww)(),"px;"),c=(0,r.Z)("div",{target:"e1yrdz1e2"})("position:absolute;top:",3*(0,d.ww)(),"px;left:",3*(0,d.ww)(),"px;"),p=(0,r.Z)("div",{target:"e1yrdz1e3"})({name:"1c3h18e",styles:"flex:1 0 auto;"}),u=a.F4`{
  0%   { transform: translate(-80px, -50px); }
  100% { transform: translate(90px, -70px); }
}`,w=(0,r.Z)("div",{target:"e1yrdz1e4"})("display:none;height:150px;width:150px;z-index:-1;position:absolute;animation-name:",u,";animation-iteration-count:1;animation-duration:3s;background-image:radial-gradient( circle,var(--ds-background-information-pressed, #85B8FF) 0%,var(--ds-background-discovery-pressed, #B8ACF6) 25%,transparent 50% );overflow:hidden;"),g=e=>o.createElement(w,(0,s.Z)({className:"kudos-blob-animation"},e)),m=(0,r.Z)("div",{target:"e1yrdz1e5"})("margin-left:",d.ww,"px;&:hover .kudos-blob-animation{display:block;}button,a{clip-path:inset(0px 0px 0px 0px round ",d.E0,"px);}overflow:hidden;"),f=(0,r.Z)("div",{target:"e1yrdz1e6"})("user-select:none;margin:",2*(0,d.ww)(),"px 0 0 0;text-align:right;display:flex;justify-content:flex-end;button,a,span{margin-left:",d.ww,"px;&:first-child{margin-left:0;}}"),x=(0,r.Z)("div",{target:"e1yrdz1e7"})("display:inline-block;width:32px;height:32px;margin-left:",d.ww,"px;"),v=(0,r.Z)("div",{target:"e1yrdz1e8"})("display:flex;flex-direction:column;min-height:",17*(0,d.ww)(),"px;"),y=(0,r.Z)("div",{target:"e1yrdz1e9"})("display:flex;flex-direction:column;margin-left:",14.5*(0,d.ww)(),"px;width:",24.5*(0,d.ww)(),"px;"),b=(0,r.Z)("div",{target:"e1yrdz1e10"})("font-size:",d._V,"px;color:",l.k3,";margin:",1.5*(0,d.ww)(),"px 0 0 0;line-height:",2*(0,d.ww)(),"px;"),Z=(0,r.Z)("span",{target:"e1yrdz1e11"})("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:18px;color:",(e=>e.isDisabledAccount?l.J9:l.DU),";margin:",(e=>(e=>e.noMeta?`${4.5*(0,d.ww)()}px 0 ${1.5*(0,d.ww)()}px 0`:1.5*(0,d.ww)()+"px 0 0 0")(e)),";line-height:",24/18,"em;"),k=(0,r.Z)("div",{target:"e1yrdz1e12"})("margin-top:",2*(0,d.ww)(),"px;text-transform:uppercase;display:block;"),C=(0,r.Z)(k,{target:"e1yrdz1e13"})("display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin-top:",1.5*(0,d.ww)(),"px;> *{margin-top:",(0,d.ww)()/2,"px;&:not(:last-child){margin-right:",(0,d.ww)()/2,"px;}}"),E=(0,r.Z)("span",{target:"e1yrdz1e14"})("overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;color:",l.DU,";margin:0 0 ",1.5*(0,d.ww)(),"px 0;line-height:",24/14,"em;"),z=(0,r.Z)("span",{target:"e1yrdz1e15"})("background:",l.DW,";color:",l.u5,";border-radius:",(0,d.E0)(),";padding:0 6px;width:fit-content;font-weight:bold;text-transform:uppercase;font-size:12px;margin:4px 0 ",1.5*(0,d.ww)(),"px 0;line-height:",24/14,"em;"),D=(0,r.Z)("div",{target:"e1yrdz1e16"})("align-items:center;display:flex;height:",12*(0,d.ww)(),"px;justify-content:center;position:relative;"),P=(0,r.Z)("div",{target:"e1yrdz1e17"})("position:relative;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-image:linear-gradient( to bottom,",(e=>e.isDisabledUser?l.h_:l.KH)," 0%,",(e=>e.isDisabledUser?l.h_:l.KH)," 100% );background-repeat:no-repeat;background-size:100% ",12*(0,d.ww)(),"px;box-sizing:content-box;padding:",3*(0,d.ww)(),"px;box-shadow:",(e=>e.withoutElevation?"":`var(--ds-shadow-overlay, 0 4px 8px -2px ${n.Nx}, 0 0 1px ${n.VG})`),";border-radius:",(e=>e.withoutElevation?"":`${(0,d.E0)()}px`),";overflow:hidden;"),T=(0,r.Z)("div",{target:"e1yrdz1e18"})("display:flex;align-items:center;line-height:",3*(0,d.ww)(),"px;font-size:",1.5*(0,d.ww)(),"px;margin:",2*(0,d.ww)(),"px 0 0 0;white-space:nowrap;& + &{margin-top:",(0,d.ww)()/4,"px;}"),I=(0,r.Z)("div",{target:"e1yrdz1e19"})("display:flex;flex-shrink:0;color:",l.SW,";width:",2*(0,d.ww)(),"px;height:",2*(0,d.ww)(),"px;padding:",(0,d.ww)()/2,"px;vertical-align:top;svg{width:100%;height:100%;}"),A=(0,r.Z)("span",{target:"e1yrdz1e20"})("overflow:hidden;text-overflow:ellipsis;color:",l.k3,";padding-left:",(0,d.ww)()/2,"px;")},973564:(e,t,i)=>{i.d(t,{Um:()=>s,KH:()=>o,SS:()=>a,h_:()=>n,DU:()=>d,J9:()=>l,DW:()=>h,u5:()=>c,k3:()=>p,SW:()=>u,kq:()=>w,TA:()=>g,VA:()=>m});var r=i(131436);const s=`var(--ds-surface-overlay, ${r.N0})`,o=`var(--ds-background-brand-bold, ${r.YC})`,a=`var(--ds-background-neutral, ${r.uv})`,n=`var(--ds-background-disabled, ${r.gt})`,d=`var(--ds-text-inverse, ${r.N0})`,l=`var(--ds-text, ${r.q2})`,h=`var(--ds-background-neutral, ${r.IR})`,c=`var(--ds-text, ${r.Mx})`,p=`var(--ds-text, ${r.q2})`,u=`var(--ds-text-subtlest, ${r.ip})`,w=`var(--ds-text-disabled, ${r.WA})`,g=`var(--ds-text, ${r.q2})`,m=`var(--ds-text-subtlest, ${r.WA})`},53567:(e,t,i)=>{i.d(t,{BX:()=>o,cw:()=>l,Mm:()=>h,Hr:()=>c,XO:()=>p,oM:()=>u,Ve:()=>w,JJ:()=>g,Q9:()=>m,xK:()=>f,o3:()=>x});var r=i(991332),s=i(707713);const o=(e,t)=>{e&&(e=>{const t=window.requestIdleCallback;"function"==typeof t?t(e):"function"==typeof window.requestAnimationFrame&&window.requestAnimationFrame(e)})((()=>{e(t).fire("peopleTeams")}))},a="teamProfileCard",n="profilecard",d=(e,t,i,o,a={})=>({eventType:e,action:t,actionSubject:i,actionSubjectId:o,attributes:(0,r.Z)((0,r.Z)({packageName:"@atlaskit/profilecard",packageVersion:"18.3.0"},a),{},{firedAt:Math.round((0,s.P)())})}),l=(e,t)=>d("ui","triggered","user"===e?n:a,void 0,{method:t}),h=(e,t)=>d("operational",e,a,"request",t),c=(e,t)=>d("operational",e,n,"request",t),p=(e,t,i)=>d("ui","rendered","user"===e?n:a,t,i),u=(e,t)=>d("ui","clicked","user"===e?n:a,"action",t),w=e=>d("ui","clicked",n,"reportingLines",e),g=(e,t)=>d("ui","clicked","user"===e?n:a,"moreActions",t),m=e=>d("ui","clicked",a,"avatar",e),f=e=>d("ui","clicked",a,"moreMembers",e),x=e=>d("ui","clicked",a,"errorRetry",e)},907345:(e,t,i)=>{i.d(t,{w:()=>r,y:()=>s});const r=800,s=200},707713:(e,t,i)=>{i.d(t,{P:()=>o});const r="undefined"!=typeof window&&"performance"in window&&!!performance.now,s=Date.now(),o=()=>r?performance.now():Date.now()-s}}]);
//# sourceMappingURL=24751.NDrgmESLFV.js.map