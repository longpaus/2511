"use strict";(self._cf=self._cf||[]).push([[92669],{165860:(t,e,r)=>{r.r(e),r.d(e,{default:()=>k});var n=r(991332),a=r(29298),i=r(122551),o=r(299774),s=r(321534),d=r(144024),l=r(131436),c=r(676424),h=r(866738),p=r(893865);const u=t=>/^\d+(\.\d+)?%$/.test(t),m=(t,e)=>{const r=t.toString();return u(r)?r:isNaN(parseInt(r,10))?e+"px":parseInt(r,10)+"px"},g=t=>{const{width:e=p.tN.width,height:r=p.tN.height}=t;return{width:m(e,p.tN.width),height:m(r,p.tN.height)}},v=(t=p.tN)=>{try{return s.iv`
      ${h.be};
      ${h.E0};
      background: ${`var(--ds-background-neutral, ${l.IR})`};
      color: ${`var(--ds-text-subtle, ${l.q2})`};
      max-height: 100%;
      max-width: 100%;
      ${g(t)};
      display: flex;
      flex-direction: column;

      p {
        font-size: ${(0,c.JB)()}px;
        text-align: center;
        display: ${(({width:t,height:e})=>!u(t)&&!u(e)&&parseInt(t,10)>=240&&parseInt(e,10)>=90)(g(t))?"block":"none"};
      }
    `}catch(e){return null}};class w extends i.Component{render(){const{dimensions:t,onClick:e}=this.props;return(0,s.tZ)("div",{css:v(t),onClick:e},(0,s.tZ)(d.default,{label:"Error",primaryColor:`var(--ds-icon-warning, ${l.zx})`,size:"medium"}),(0,s.tZ)("p",null,"We couldn't load this content"))}}w.displayName="UnhandledErrorCard";var C=r(130860),f=r(411299);class y extends i.Component{constructor(t){super(t),(0,a.Z)(this,"fireOperationalEvent",((t,e)=>{var r,a;const{data:i={},createAnalyticsEvent:o}=this.props,s={eventType:"operational",action:"failed",actionSubject:"mediaCardRender",attributes:(0,n.Z)({browserInfo:null!==(r=window)&&void 0!==r&&null!==(a=r.navigator)&&void 0!==a&&a.userAgent?window.navigator.userAgent:"unknown",error:t,info:e,failReason:"unexpected-error"},i)};(0,f.LO)(s,o)})),(0,a.Z)(this,"handleOnClick",(t=>{try{var e,r;null===(e=(r=this.props).onClick)||void 0===e||e.call(r,{event:t})}catch(n){}})),this.state={hasError:!1}}componentDidCatch(t,e){try{this.fireOperationalEvent(t,e)}catch(r){}this.setState({hasError:!0})}render(){const{hasError:t}=this.state,{dimensions:e,children:r}=this.props;return t?i.createElement(w,{dimensions:e,onClick:this.handleOnClick}):r}}y.displayName="WrappedMediaCardAnalyticsErrorBoundary",(0,a.Z)(y,"displayName","MediaCardAnalyticsErrorBoundary");const k=(0,o.z)({packageVersion:"74.6.0",packageName:"@atlaskit/media-card",componentName:"mediaCard",component:"mediaCard"})((0,C.Z)()(y))},893865:(t,e,r)=>{r.d(e,{tN:()=>n,$0:()=>o});const n={width:156,height:125},a={width:435,height:125},i={width:300,height:300},o=t=>"image"===t?n:"square"===t?i:"horizontal"===t?a:n}}]);
//# sourceMappingURL=92669.6P5iuuzrcj.js.map