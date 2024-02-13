"use strict";(self._cf=self._cf||[]).push([[50357],{588520:(e,r,t)=>{t.r(r),t.d(r,{default:()=>u});var i=t(953307),s=t(29298),o=t(122551),n=t(321534),a=t(871100);const d=n.iv`
  position: absolute;
  background: transparent;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;var l=t(315555),p=t(359398),c=t(959557),h=t(630672);class u extends o.PureComponent{constructor(...e){super(...e),(0,s.Z)(this,"renderCard",((e={})=>{const{mediaProvider:r,contextIdentifierProvider:t}=e,{allowAltTextOnImages:s,alt:o,featureFlags:a,shouldOpenMediaViewer:p,enableDownloadButton:c,ssr:h}=this.props,u=this.props.marks.find(this.props.isLinkMark),f=null==u?void 0:u.attrs.href,v=f?void 0:this.props.eventHandlers,k=!f&&p,m=(0,n.tZ)(l.PB,(0,i.Z)({mediaProvider:r,contextIdentifierProvider:t},this.props,{shouldOpenMediaViewer:k,eventHandlers:v,alt:s?o:void 0,featureFlags:a,shouldEnableDownloadButton:c,ssr:h}));return f?(0,n.tZ)("a",{href:f,rel:"noreferrer noopener",onClick:this.handleMediaLinkClick,"data-block-link":f,css:d},m):m})),(0,s.Z)(this,"handleMediaLinkClick",(e=>{const{fireAnalyticsEvent:r,isLinkMark:t,marks:i}=this.props;r&&r({action:c.om.VISITED,actionSubject:c.Wt.MEDIA,actionSubjectId:c.VJ.LINK,eventType:c.Ze.TRACK,attributes:{platform:h.iw.WEB,mode:h.IK.RENDERER}});const s=this.props.marks.find(this.props.isLinkMark),o=null==s?void 0:s.attrs.href,n=(0,p.XU)(this.props.eventHandlers,"link");if(n){n(e,i.find(t)&&o)}}))}render(){const{providers:e}=this.props;return e?(0,n.tZ)(a.S,{providers:["mediaProvider","contextIdentifierProvider"],providerFactory:e,renderNode:this.renderCard}):this.renderCard()}}u.displayName="Media"}}]);
//# sourceMappingURL=50357.WABSc7cF4g.js.map