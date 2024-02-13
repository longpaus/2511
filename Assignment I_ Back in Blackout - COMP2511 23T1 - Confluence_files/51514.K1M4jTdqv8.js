(self._cf=self._cf||[]).push([[51514],{159578:(e,t,r)=>{var n=r(754429)((function(e,t,r){return e+(r?"-":"")+t.toLowerCase()}));e.exports=n},923487:(e,t,r)=>{"use strict";var n=r(313156),o=r(12415),a=function(e,t){return function(r){Array.isArray(e)||(e=[e]);for(var n=0,o=e.length;n<o;n++){var a=A(e[n])(r.selection);if(a){var i=m(a.pos,t)(r);if(i!==r)return i}}return r}},i=function(e){return function(t){if(d(t.selection)){var r=t.selection,a=r.$from,i=r.$to;if(e instanceof o.Fragment&&a.parent.canReplace(a.index(),a.indexAfter(),e)||a.parent.canReplaceWith(a.index(),a.indexAfter(),e.type))return c(t.replaceWith(a.pos,i.pos,e).setSelection(new n.NodeSelection(t.doc.resolve(a.pos))))}return t}},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(r){var o=n.Selection.findFrom(r.doc.resolve(e),t,!0);return o?r.setSelection(o):r}},l=function(e){return e.type&&e.type.spec.selectable},u=function(e,t,r){return function(e){return l(e)&&e.type.isLeaf}(e)?r.setSelection(new n.NodeSelection(r.doc.resolve(t))):s(t)(r)},d=function(e){return e instanceof n.NodeSelection},p=function(e,t){return Array.isArray(e)&&e.indexOf(t.type)>-1||t.type===e},c=function(e){return Object.assign(Object.create(e),e).setTime(Date.now())},m=function(e,t){return function(r){var n=r.doc.nodeAt(e),o=r.doc.resolve(e);if(h(o,t)){var a=(r=r.replaceWith(e,e+n.nodeSize,t)).selection.$from.pos-1;return r=s(Math.max(a,0),-1)(r),r=s(r.selection.$from.start())(r),c(r)}return r}},h=function(e,t){var r=e.node(e.depth);return r&&r.type.validContent(t instanceof o.Fragment?t:o.Fragment.from(t))},E=function(e){return function(t){var r=t.doc.nodeAt(e);return c(t.delete(e,e+r.nodeSize))}},y=function(e,t){var r=e.index();return t instanceof o.Fragment?e.parent.canReplace(r,r,t):t instanceof o.Node&&e.parent.canReplaceWith(r,r,t.type)},f=function(e){return!e||"paragraph"===e.type.name&&2===e.nodeSize},g=function(e){return function(t){var r=t.$from;return _(r,e)}},_=function(e,t){for(var r=e.depth;r>0;r--){var n=e.node(r);if(t(n))return{pos:r>0?e.before(r):0,start:e.start(r),depth:r,node:n}}},T=function(e,t){return function(r){var n=g(e)(r);if(n)return k(n.pos,t)}},b=function(e){return function(t){return!!g(e)(t)}},A=function(e){return function(t){return g((function(t){return p(e,t)}))(t)}},v=function(e){var t=e.$from.nodeBefore,r=n.Selection.findFrom(e.$from,-1);if(r&&t){var o=A(t.type)(r);return o?o.pos:r.$from.pos}},k=function(e,t){var r=t(e),n=r.node.childNodes[r.offset];return r.node.nodeType===Node.TEXT_NODE?r.node.parentNode:n&&n.nodeType!==Node.TEXT_NODE?n:r.node},w=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!e)throw new Error('Invalid "node" parameter');var r=[];return e.descendants((function(e,n){if(r.push({node:e,pos:n}),!t)return!1})),r},N=function(e,t,r){if(!e)throw new Error('Invalid "node" parameter');if(!t)throw new Error('Invalid "predicate" parameter');return w(e,r).filter((function(e){return t(e.node)}))},I=function(e,t,r){return N(e,(function(e){return e.type===t}),r)};t.EG=d,t.om=y,t.Kk=g,t.qv=_,t.iV=b,t.Tr=A,t.NP=function(e,t){return _(e,(function(e){return p(t,e)}))},t.bw=function(e){return function(t){return b((function(t){return p(e,t)}))(t)}},t.Yr=function(e,t){return function(r){return T((function(t){return p(e,t)}),t)(r)}},t.a1=function(e){return function(t){if(d(t)){var r=t.node,n=t.$from;if(p(e,r))return{node:r,pos:n.pos,depth:n.depth}}}},t.Ez=v,t.TM=k,t.xH=w,t.N2=N,t.D0=I,t.NQ=function(e){return function(t){var r=A(e)(t.selection);return r?E(r.pos)(t):t}},t.BX=a,t.au=function(e){if(d(e.selection)){var t=e.selection.$from.pos,r=e.selection.$to.pos;return c(e.delete(t,r))}return e},t.Ig=i,t.B0=s,t.Z3=function(e,t,r){return function(n){var o="number"==typeof t,s=n.selection.$from,p=o?n.doc.resolve(t):d(n.selection)?n.doc.resolve(s.pos+1):s,m=p.parent;if(d(n.selection)&&r&&n!==(n=i(e)(n)))return n;if(f(m)&&n!==(n=a(m.type,e)(n))){var h=l(e)?p.before(p.depth):p.pos;return u(e,h,n)}if(y(p,e)){n.insert(p.pos,e);var E=o?p.pos:l(e)?n.selection.$anchor.pos-1:n.selection.$anchor.pos;return c(u(e,E,n))}for(var g=p.depth;g>0;g--){var _=p.after(g),T=n.doc.resolve(_);if(y(T,e))return n.insert(_,e),c(u(e,_,n))}return n}},t.EB=function(e){var t=v(e.selection);return"number"==typeof t?E(t)(e):e}},560918:(e,t,r)=>{"use strict";r.d(t,{e:()=>o});var n=r(755181);const o=e=>{let t=!1;return{transformedAdf:(0,n.f)(e,{mediaSingle:e=>{var r;if(!e.marks||!e.content||"media"!==(null===(r=e.content[0])||void 0===r?void 0:r.type))return e;let n=null;if(e.marks.forEach(((r,o)=>{var a;"link"===r.type&&(n=r,null===(a=e.marks)||void 0===a||a.splice(o,1),t=!0)})),0===e.marks.length&&delete e.marks,n){var o;const t=e.content[0];null!==(o=t.marks)&&void 0!==o&&o.every((e=>"link"!==e.type))?t.marks.push(n):t.marks||(t.marks=[n])}return e}}),isTransformed:t}}},618730:(e,t,r)=>{"use strict";r.d(t,{s:()=>Ke});var n={};r.r(n),r.d(n,{alignment:()=>y,annotation:()=>g,atomic_inline:()=>P,blockCard:()=>C,block_content:()=>Ce,blockquote:()=>oe,bodiedExtension:()=>Ne,bodiedExtension_with_marks:()=>Ie,breakout:()=>E,bulletList:()=>V,caption:()=>G,code:()=>s,codeBlock:()=>j,codeBlock_with_marks:()=>X,codeBlock_with_no_marks:()=>Y,code_inline:()=>F,dataConsumer:()=>_,date:()=>N,decisionItem:()=>se,decisionList:()=>le,doc:()=>Re,em:()=>i,embedCard:()=>me,emoji:()=>v,expand:()=>ve,expand_with_breakout_mark:()=>we,expand_with_no_mark:()=>ke,extension:()=>pe,extension_with_marks:()=>ce,formatted_text_inline:()=>x,fragment:()=>T,hardBreak:()=>b,heading:()=>Q,heading_with_alignment:()=>te,heading_with_indentation:()=>re,heading_with_no_marks:()=>ee,indentation:()=>f,inline:()=>$,inlineCard:()=>O,inlineExtension:()=>k,inlineExtension_with_marks:()=>w,inline_comment_marker:()=>h,layoutColumn:()=>Oe,layoutSection:()=>De,layoutSection_full:()=>Se,layoutSection_with_single_column:()=>Le,link:()=>p,link_text_inline:()=>B,listItem:()=>q,media:()=>L,mediaGroup:()=>ie,mediaInline:()=>R,mediaSingle:()=>K,mediaSingle_caption:()=>z,mediaSingle_full:()=>Z,mention:()=>A,nestedExpand:()=>Ee,nestedExpand_content:()=>he,nestedExpand_with_no_marks:()=>ye,non_nestable_block_content:()=>Ae,orderedList:()=>J,panel:()=>ne,paragraph:()=>M,paragraph_with_alignment:()=>H,paragraph_with_indentation:()=>W,paragraph_with_no_marks:()=>U,placeholder:()=>I,rule:()=>ae,status:()=>D,strike:()=>l,strong:()=>u,subsup:()=>c,table:()=>fe,tableCell:()=>Te,tableCell_content:()=>_e,tableHeader:()=>be,tableRow:()=>ge,taskItem:()=>ue,taskList:()=>de,text:()=>S,textColor:()=>m,underline:()=>d});var o=r(991332),a=r(415911);const i={props:{type:{type:"enum",values:["em"]}}},s={props:{type:{type:"enum",values:["code"]}}},l={props:{type:{type:"enum",values:["strike"]}}},u={props:{type:{type:"enum",values:["strong"]}}},d={props:{type:{type:"enum",values:["underline"]}}},p={props:{type:{type:"enum",values:["link"]},attrs:{props:{href:{type:"string",validatorFn:"safeUrl"},title:{type:"string",optional:!0},id:{type:"string",optional:!0},collection:{type:"string",optional:!0},occurrenceKey:{type:"string",optional:!0}}}}},c={props:{type:{type:"enum",values:["subsup"]},attrs:{props:{type:{type:"enum",values:["sub","sup"]}}}}},m={props:{type:{type:"enum",values:["textColor"]},attrs:{props:{color:{type:"string",pattern:"^#[0-9a-fA-F]{6}$"}}}}},h={props:{type:{type:"enum",values:["confluenceInlineComment"]},attrs:{props:{reference:{type:"string"}}}}},E={props:{type:{type:"enum",values:["breakout"]},attrs:{props:{mode:{type:"enum",values:["wide","full-width"]}}}}},y={props:{type:{type:"enum",values:["alignment"]},attrs:{props:{align:{type:"enum",values:["center","end"]}}}}},f={props:{type:{type:"enum",values:["indentation"]},attrs:{props:{level:{type:"number",minimum:1,maximum:6}}}}},g={props:{type:{type:"enum",values:["annotation"]},attrs:{props:{id:{type:"string"},annotationType:{type:"enum",values:["inlineComment"]}}}}},_={props:{type:{type:"enum",values:["dataConsumer"]},attrs:{props:{sources:{type:"array",items:[{type:"string"}],minItems:1}}}}},T={props:{type:{type:"enum",values:["fragment"]},attrs:{props:{localId:{type:"string",minLength:1},name:{type:"string",optional:!0}}}}},b={props:{type:{type:"enum",values:["hardBreak"]},attrs:{props:{text:{type:"enum",values:["\n"],optional:!0}},optional:!0}}},A={props:{type:{type:"enum",values:["mention"]},attrs:{props:{id:{type:"string"},text:{type:"string",optional:!0},userType:{type:"enum",values:["DEFAULT","SPECIAL","APP"],optional:!0},accessLevel:{type:"string",optional:!0}}}}},v={props:{type:{type:"enum",values:["emoji"]},attrs:{props:{id:{type:"string",optional:!0},shortName:{type:"string"},text:{type:"string",optional:!0}}}}},k={props:{type:{type:"enum",values:["inlineExtension"]},attrs:{props:{extensionKey:{type:"string",minLength:1},extensionType:{type:"string",minLength:1},parameters:{type:"object",optional:!0},text:{type:"string",optional:!0},localId:{type:"string",minLength:1,optional:!0}}},marks:{type:"array",items:[],optional:!0}}},w=["inlineExtension",{props:{marks:{type:"array",items:[["dataConsumer","fragment"]],optional:!0}}}],N={props:{type:{type:"enum",values:["date"]},attrs:{props:{timestamp:{type:"string",minLength:1}}}}},I={props:{type:{type:"enum",values:["placeholder"]},attrs:{props:{text:{type:"string"}}}}},C={props:{type:{type:"enum",values:["blockCard"]},attrs:[{props:{url:{type:"string",validatorFn:"safeUrl"}}},{props:{data:{type:"object"}}}]},required:["attrs"]},O={props:{type:{type:"enum",values:["inlineCard"]},attrs:[{props:{url:{type:"string",validatorFn:"safeUrl"}}},{props:{data:{type:"object"}}}]},required:["attrs"]},D={props:{type:{type:"enum",values:["status"]},attrs:{props:{text:{type:"string",minLength:1},color:{type:"enum",values:["neutral","purple","blue","red","yellow","green"]},localId:{type:"string",optional:!0},style:{type:"string",optional:!0}}}}},S={props:{type:{type:"enum",values:["text"]},text:{type:"string",minLength:1},marks:{type:"array",items:[],optional:!0}}},L={props:{type:{type:"enum",values:["media"]},attrs:[{props:{type:{type:"enum",values:["link","file"]},id:{type:"string",minLength:1},collection:{type:"string"},height:{type:"number",optional:!0},width:{type:"number",optional:!0},occurrenceKey:{type:"string",minLength:1,optional:!0},alt:{type:"string",optional:!0}}},{props:{type:{type:"enum",values:["external"]},url:{type:"string"},alt:{type:"string",optional:!0},width:{type:"number",optional:!0},height:{type:"number",optional:!0}}}],marks:{type:"array",items:["link"],optional:!0}},required:["attrs"]},R={props:{type:{type:"enum",values:["mediaInline"]},attrs:{props:{data:{type:"object",optional:!0},type:{type:"enum",values:["link","file"],optional:!0},id:{type:"string",minLength:1},collection:{type:"string"},height:{type:"number",optional:!0},width:{type:"number",optional:!0},occurrenceKey:{type:"string",minLength:1,optional:!0},alt:{type:"string",optional:!0}}},marks:{type:"array",items:["link"],optional:!0}}},x=["text",{props:{marks:{type:"array",items:[["em","strike","strong","underline","link","subsup","textColor","annotation"]],optional:!0}}}],B=["text",{props:{marks:{type:"array",items:["link"],optional:!0}}}],F=["text",{props:{marks:{type:"array",items:[["code","link","annotation"]],optional:!0}}}],P=["hardBreak","mention","emoji","inlineExtension_with_marks","date","placeholder","inlineCard","status","mediaInline"],$=["hardBreak","mention","emoji","inlineExtension_with_marks","date","placeholder","inlineCard","status","mediaInline","formatted_text_inline","code_inline"],M={props:{type:{type:"enum",values:["paragraph"]},content:{type:"array",items:["inline"],allowUnsupportedInline:!0,optional:!0},marks:{type:"array",items:[],optional:!0}}},U=["paragraph",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],H=["paragraph",{props:{marks:{type:"array",items:["alignment"],optional:!0}}}],W=["paragraph",{props:{marks:{type:"array",items:["indentation"],optional:!0}}}],V={props:{type:{type:"enum",values:["bulletList"]},content:{type:"array",items:["listItem"],minItems:1}}},G={props:{type:{type:"enum",values:["caption"]},content:{type:"array",items:[["hardBreak","mention","emoji","date","placeholder","inlineCard","status","formatted_text_inline","code_inline"]],minItems:0}}},K={props:{type:{type:"enum",values:["mediaSingle"]},attrs:{props:{width:{type:"number",minimum:0,maximum:100,optional:!0},layout:{type:"enum",values:["wide","full-width","center","wrap-right","wrap-left","align-end","align-start"]}},optional:!0},marks:{type:"array",items:["link"],optional:!0}}},Z=["mediaSingle",{props:{content:{type:"array",items:["media"],minItems:1,maxItems:1,allowUnsupportedBlock:!0}}}],z=["mediaSingle",{props:{content:{type:"array",items:["media","caption"],isTupleLike:!0,minItems:1,maxItems:2,allowUnsupportedBlock:!0}}}],j={props:{type:{type:"enum",values:["codeBlock"]},content:{type:"array",items:[["text",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}]],allowUnsupportedInline:!0,optional:!0},marks:{type:"array",items:[],optional:!0},attrs:{props:{language:{type:"string",optional:!0}},optional:!0}}},Y=["codeBlock",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],X=["codeBlock",{props:{marks:{type:"array",items:["breakout"],optional:!0}}}],q={props:{type:{type:"enum",values:["listItem"]},content:{type:"array",items:[["paragraph_with_no_marks","mediaSingle_full","mediaSingle_caption","codeBlock_with_no_marks"],["paragraph_with_no_marks","bulletList","mediaSingle_full","mediaSingle_caption","codeBlock_with_no_marks","orderedList"]],isTupleLike:!0,minItems:1}}},J={props:{type:{type:"enum",values:["orderedList"]},content:{type:"array",items:["listItem"],minItems:1},attrs:{props:{order:{type:"number",minimum:0,optional:!0}},optional:!0}}},Q={props:{type:{type:"enum",values:["heading"]},content:{type:"array",items:["inline"],allowUnsupportedInline:!0,optional:!0},marks:{type:"array",items:[],optional:!0},attrs:{props:{level:{type:"number",minimum:1,maximum:6}}}}},ee=["heading",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],te=["heading",{props:{marks:{type:"array",items:["alignment"],optional:!0}}}],re=["heading",{props:{marks:{type:"array",items:["indentation"],optional:!0}}}],ne={props:{type:{type:"enum",values:["panel"]},attrs:{props:{panelType:{type:"enum",values:["info","note","tip","warning","error","success","custom"]},panelIcon:{type:"string",optional:!0},panelColor:{type:"string",optional:!0},panelIconId:{type:"string",optional:!0},panelIconText:{type:"string",optional:!0}}},content:{type:"array",items:[["blockCard","paragraph_with_no_marks","bulletList","orderedList","heading_with_no_marks"]],minItems:1,allowUnsupportedBlock:!0}}},oe={props:{type:{type:"enum",values:["blockquote"]},content:{type:"array",items:["paragraph_with_no_marks"],minItems:1,allowUnsupportedBlock:!0}}},ae={props:{type:{type:"enum",values:["rule"]}}},ie={props:{type:{type:"enum",values:["mediaGroup"]},content:{type:"array",items:["media"],minItems:1,allowUnsupportedBlock:!0}}},se={props:{type:{type:"enum",values:["decisionItem"]},content:{type:"array",items:["inline"],allowUnsupportedInline:!0,optional:!0},attrs:{props:{localId:{type:"string"},state:{type:"string"}}}}},le={props:{type:{type:"enum",values:["decisionList"]},content:{type:"array",items:["decisionItem"],minItems:1,allowUnsupportedBlock:!0},attrs:{props:{localId:{type:"string"}}}}},ue={props:{type:{type:"enum",values:["taskItem"]},content:{type:"array",items:["inline"],allowUnsupportedInline:!0,optional:!0},attrs:{props:{localId:{type:"string"},state:{type:"enum",values:["TODO","DONE"]}}}}},de={props:{type:{type:"enum",values:["taskList"]},content:{type:"array",items:["taskItem",["taskItem","taskList"]],isTupleLike:!0,minItems:1,allowUnsupportedBlock:!0},attrs:{props:{localId:{type:"string"}}}}},pe={props:{type:{type:"enum",values:["extension"]},attrs:{props:{extensionKey:{type:"string",minLength:1},extensionType:{type:"string",minLength:1},parameters:{type:"object",optional:!0},text:{type:"string",optional:!0},layout:{type:"enum",values:["wide","full-width","default"],optional:!0},localId:{type:"string",minLength:1,optional:!0}}},marks:{type:"array",items:[],optional:!0}}},ce=["extension",{props:{marks:{type:"array",items:[["dataConsumer","fragment"]],optional:!0}}}],me={props:{type:{type:"enum",values:["embedCard"]},attrs:{props:{originalWidth:{type:"number",optional:!0},originalHeight:{type:"number",optional:!0},url:{type:"string",validatorFn:"safeUrl"},width:{type:"number",minimum:0,maximum:100,optional:!0},layout:{type:"enum",values:["wide","full-width","center","wrap-right","wrap-left","align-end","align-start"]}}}}},he={type:"array",items:[["paragraph_with_no_marks","mediaSingle_full","mediaSingle_caption","heading_with_no_marks","mediaGroup"]],minItems:1,allowUnsupportedBlock:!0},Ee={props:{type:{type:"enum",values:["nestedExpand"]},attrs:{props:{title:{type:"string",optional:!0}}},content:"nestedExpand_content"},required:["content"]},ye=["nestedExpand",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],fe={props:{type:{type:"enum",values:["table"]},attrs:{props:{isNumberColumnEnabled:{type:"boolean",optional:!0},layout:{type:"enum",values:["wide","full-width","default"],optional:!0},localId:{type:"string",minLength:1,optional:!0}},optional:!0},content:{type:"array",items:["tableRow"],minItems:1},marks:{type:"array",items:["fragment"],optional:!0}}},ge={props:{type:{type:"enum",values:["tableRow"]},content:{type:"array",items:[["tableCell","tableHeader"]]}}},_e={type:"array",items:[["blockCard","paragraph_with_no_marks","paragraph_with_alignment","bulletList","mediaSingle_full","mediaSingle_caption","codeBlock_with_no_marks","orderedList","heading_with_no_marks","heading_with_alignment","heading_with_indentation","panel","blockquote","rule","mediaGroup","decisionList","taskList","extension_with_marks","embedCard","nestedExpand_with_no_marks"]],minItems:1,allowUnsupportedBlock:!0},Te={props:{type:{type:"enum",values:["tableCell"]},attrs:{props:{colspan:{type:"number",optional:!0},rowspan:{type:"number",optional:!0},colwidth:{type:"array",items:[{type:"number"}],optional:!0},background:{type:"string",optional:!0}},optional:!0},content:"tableCell_content"},required:["content"]},be={props:{type:{type:"enum",values:["tableHeader"]},attrs:{props:{colspan:{type:"number",optional:!0},rowspan:{type:"number",optional:!0},colwidth:{type:"array",items:[{type:"number"}],optional:!0},background:{type:"string",optional:!0}},optional:!0},content:"tableCell_content"},required:["content"]},Ae=["blockCard","paragraph_with_no_marks","bulletList","mediaSingle_full","mediaSingle_caption","codeBlock_with_no_marks","orderedList","heading_with_no_marks","panel","blockquote","rule","mediaGroup","decisionList","taskList","extension_with_marks","embedCard","table"],ve={props:{type:{type:"enum",values:["expand"]},attrs:{props:{title:{type:"string",optional:!0}}},content:{type:"array",items:["non_nestable_block_content"],minItems:1,allowUnsupportedBlock:!0},marks:{type:"array",items:[],optional:!0}}},ke=["expand",{props:{marks:{type:"array",items:[],maxItems:0,optional:!0}}}],we=["expand",{props:{marks:{type:"array",items:["breakout"],optional:!0}}}],Ne={props:{type:{type:"enum",values:["bodiedExtension"]},attrs:{props:{extensionKey:{type:"string",minLength:1},extensionType:{type:"string",minLength:1},parameters:{type:"object",optional:!0},text:{type:"string",optional:!0},layout:{type:"enum",values:["wide","full-width","default"],optional:!0},localId:{type:"string",minLength:1,optional:!0}}},marks:{type:"array",items:[],optional:!0},content:{type:"array",items:["non_nestable_block_content"],minItems:1,allowUnsupportedBlock:!0}}},Ie=["bodiedExtension",{props:{marks:{type:"array",items:[["dataConsumer","fragment"]],optional:!0}}}],Ce=["blockCard","paragraph_with_no_marks","paragraph_with_alignment","paragraph_with_indentation","bulletList","mediaSingle_full","mediaSingle_caption","codeBlock_with_no_marks","orderedList","heading_with_no_marks","heading_with_alignment","heading_with_indentation","panel","blockquote","rule","mediaGroup","decisionList","taskList","extension_with_marks","embedCard","table","expand_with_no_mark","bodiedExtension_with_marks"],Oe={props:{type:{type:"enum",values:["layoutColumn"]},attrs:{props:{width:{type:"number",minimum:0,maximum:100}}},content:{type:"array",items:["block_content"],minItems:1,allowUnsupportedBlock:!0}}},De={props:{type:{type:"enum",values:["layoutSection"]},marks:{type:"array",items:["breakout"],optional:!0},content:{type:"array",items:["layoutColumn"]}}},Se=["layoutSection",{props:{type:{type:"enum",values:["layoutSection"]},marks:{type:"array",items:["breakout"],optional:!0},content:{type:"array",items:["layoutColumn"],minItems:2,maxItems:3,allowUnsupportedBlock:!0}}}],Le=["layoutSection",{props:{type:{type:"enum",values:["layoutSection"]},marks:{type:"array",items:["breakout"],optional:!0},content:{type:"array",items:["layoutColumn"],minItems:1,maxItems:3,allowUnsupportedBlock:!0}}}],Re={props:{version:{type:"enum",values:[1]},type:{type:"enum",values:["doc"]},content:{type:"array",items:[["blockCard","paragraph_with_no_marks","paragraph_with_alignment","paragraph_with_indentation","bulletList","mediaSingle_full","mediaSingle_caption","codeBlock_with_no_marks","codeBlock_with_marks","orderedList","heading_with_no_marks","heading_with_alignment","heading_with_indentation","panel","blockquote","rule","mediaGroup","decisionList","taskList","extension_with_marks","embedCard","table","expand_with_no_mark","expand_with_breakout_mark","bodiedExtension_with_marks","layoutSection_full","layoutSection_with_single_column"]],allowUnsupportedBlock:!0}}},xe=e=>null!=e,Be=e=>"string"==typeof e||e instanceof String,Fe=e=>Array.isArray(e)?e:[e];const Pe={safeUrl:r(85149).w6};function $e(e,t=(e=>e)){if(e.props&&e.props.marks){const r=e.props.marks,{items:n}=r,i=(0,a.Z)(r,["items"]);return(0,o.Z)((0,o.Z)({},e),{},{props:(0,o.Z)((0,o.Z)({},e.props),{},{marks:(0,o.Z)((0,o.Z)({},i),{},{items:n.length?Array.isArray(n[0])?n.map(t):[t(n)]:[[]]})})})}return e}const Me=(e,t)=>Object.keys(e).reduce(((r,n)=>(r[t(n,e[n],e)?0:1].push(n),r)),[[],[]]);function Ue(e,t){if(!xe(e.type))return!!e.optional;if(!xe(t))return!!e.optional;switch(e.type){case"boolean":return!0===(r=t)||!1===r||"[object Boolean]"===toString.call(r);case"number":return(e=>"number"==typeof e&&!isNaN(e)&&isFinite(e))(t)&&(!xe(e.minimum)||e.minimum<=t)&&(!xe(e.maximum)||e.maximum>=t);case"integer":return(e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e)(t)&&(!xe(e.minimum)||e.minimum<=t)&&(!xe(e.maximum)||e.maximum>=t);case"string":const n=e=>"string"==typeof t&&xe(Pe[e])&&Pe[e](t);return Be(t)&&(!xe(e.minLength)||e.minLength<=t.length)&&(!xe(e.validatorFn)||n(e.validatorFn))&&(!e.pattern||new RegExp(e.pattern).test(t));case"object":return(e=>"object"==typeof e&&null!==e&&!Array.isArray(e))(t);case"array":const o=e.items,a=o.length-1;return!!Array.isArray(t)&&t.every(((e,t)=>Ue(o[Math.min(t,a)],e)));case"enum":return Be(t)&&e.values.indexOf(t)>-1}var r;return!1}const He=(e,t)=>`${e}: ${t}.`,We=e=>{if(e&&e.props&&e.props.content){const{allowUnsupportedBlock:t,allowUnsupportedInline:r}=e.props.content;return{allowUnsupportedBlock:t,allowUnsupportedInline:r}}return{}},Ve=(e,t,r)=>{const n=He(e.type,"invalid content");if(t)return t((0,o.Z)({},e),{code:"INVALID_CONTENT",message:n},We(r));throw new Error(n)},Ge=(e,t,r,n)=>{const a=n||He(t.type,"unsupported mark");if(r)return r((0,o.Z)({},t),{code:e,message:a,meta:t},{allowUnsupportedBlock:!1,allowUnsupportedInline:!1,isMark:!0});throw new Error(a)};function Ke(e,t,r){const a=function(e,t){return Object.keys(n).reduce(((r,a)=>{const i=(0,o.Z)({},n[a]);return i.props&&(i.props=(0,o.Z)({},i.props),i.props.content&&(Be(i.props.content)&&(i.props.content=n[i.props.content]),Array.isArray(i.props.content)?i.props.content={type:"array",items:(i.props.content||[]).map((e=>e.items))}:i.props.content=(0,o.Z)({},i.props.content),i.props.content.items=i.props.content.items.map((e=>Be(e)?Array.isArray(n[e])?n[e]:[e]:e)).map((r=>r.map((e=>Array.isArray(n[e])?n[e]:Be(e)?e:["text",e])).filter((t=>{if(e){if(Array.isArray(t)){var r,n,o;const a=e.indexOf(t[0])>-1;return a&&null!==(r=t[1])&&void 0!==r&&null!==(n=r.props)&&void 0!==n&&null!==(o=n.content)&&void 0!==o&&o.items?t[1].props.content.items.every((t=>e.indexOf(t)>-1)):a}return e.indexOf(t)>-1}return!0})).map((e=>Array.isArray(e)&&t?[e[0],$e(e[1])]:e)))))),r[a]=i,r}),{})}(e,t),{mode:i="strict",allowPrivateAttributes:s=!1}=r||{},l=(e,t,r,n,p=!1)=>{const{type:c}=e;let m=(0,o.Z)({},e);const h=(e,r,o)=>{const a=He(c,r);if(t)return{valid:!1,entity:t(m,{code:e,message:a,meta:o},We(n))};throw new Error(a)};if(!c)return h("INVALID_TYPE","ProseMirror Node/Mark should contain a `type`");{const n=function(e,t){if(!t)return{};for(let r=0,n=t.length;r<n;r++){const n=t[r];let o=n,a={};if(Array.isArray(n)&&([o,a]=n),o===e)return a}return!1}(c,r);if(!1===n)return p?{valid:!1}:h("INVALID_TYPE","type not allowed here");const E=a[c];if(!E)return h("INVALID_TYPE",`${c}: No validation spec found for type!`);const y=function(e,t,r,n,a,p,c,m){let h={hasValidated:!1};const E=function(e,t){return(0,o.Z)((0,o.Z)((0,o.Z)({},e),t),e.props?{props:(0,o.Z)((0,o.Z)({},e.props),t.props||{})}:{})}(e,t);if(!E)return h;const y=function(e,t,r){let n={valid:!0,entity:t};e.required&&(e.required.every((e=>xe(t[e])))||(n=r("MISSING_PROPERTIES","required prop missing")));return n}(E,r,n);if(!y.valid)return{hasValidated:!0,result:y};if(!E.props){const e=Object.keys(r);return e.length>1?{hasValidated:!0,result:n("REDUNDANT_PROPERTIES",`redundant props found: ${Object.keys(r).join(", ")}`,{props:e})}:h}const f=function(e,t,r){let n={valid:!0,entity:t};e.props.text&&xe(t.text)&&!Ue(e.props.text,t.text)&&(n=r("INVALID_TEXT","'text' validation failed"));return n}(E,r,n);if(!f.valid)return{hasValidated:!0,result:f};const g=function(e,t,r){let n={valid:!0,entity:t};if(e.props.content&&t.content){const{minItems:o,maxItems:a}=e.props.content,i=t.content.length;xe(o)&&o>i?n=r("INVALID_CONTENT_LENGTH",`'content' should have more than ${o} child`,{length:i,requiredLength:o,type:"minimum"}):xe(a)&&a<i&&(n=r("INVALID_CONTENT_LENGTH",`'content' should have less than ${a} child`,{length:i,requiredLength:a,type:"maximum"}))}return n}(E,r,n);if(!g.valid)return{hasValidated:!0,result:g};const[,_]=Me(E.props,((e,t)=>t.optional||xe(r[e])));if(_.length)return{hasValidated:!0,result:n("MISSING_PROPERTIES","required prop missing",{props:_})};const T=function(e,t,r,n,o){const a=e.props&&e.props.attrs;if(t.attrs){if(!a){if(n)return function(e,t){const r=He("redundant attributes found",Object.keys(t).join(", "));return{valid:!1,marksValidationOutput:[{valid:!0,originalMark:e,errorCode:"REDUNDANT_ATTRIBUTES",message:r}]}}(t,t.attrs);return d(t,r,[],Object.keys(t.attrs),o)}const{hasUnsupportedAttrs:i,redundantAttrs:l,invalidAttrs:u}=function(e,t,r){const n=function(e,t){let r=[],n={};if(e.props&&e.props.attrs){const o=Fe(e.props.attrs);for(let e=0,a=o.length;e<a;++e){const a=o[e];if(a&&a.props&&([,r]=Me(a.props,((e,r)=>Ue(r,t.attrs[e])))),n=a,!r.length)break}}return{invalidAttrs:r,validatorAttrs:n}}(e,t),{invalidAttrs:o}=n,a=n.validatorAttrs,i=Object.keys(r).filter((e=>!(s&&e.startsWith("__")))).filter((e=>!a.props[e])),l=i.length>0;return{hasUnsupportedAttrs:o.length||l,invalidAttrs:o,redundantAttrs:i}}(e,t,t.attrs);if(i)return n?function(e,t,r){let n="INVALID_ATTRIBUTES",o=He(e.type,"'attrs' validation failed");const a=r.length;a&&t.length||!a||(n="REDUNDANT_ATTRIBUTES",o=He("redundant attributes found",r.join(", ")));return{valid:!1,marksValidationOutput:[{valid:!0,originalMark:e,errorCode:n,message:o}]}}(t,u,l):d(t,r,u,l,o)}return{valid:!0,entity:t}}(E,r,a,m,c);if(!T.valid)return{hasValidated:!0,result:T};if(m&&T.valid)return{hasValidated:!0,result:T};const b=function(e,t,r,n,o){let a={valid:!0,entity:t};const[s,l]=Me(t,(t=>xe(e.props[t])));if(l.length)if("loose"===i)n={type:o},s.reduce(((e,r)=>{return n=t,(o=e)[a=r]=n[a],o;var n,o,a}),n);else if(!(l.indexOf("marks")>-1||l.indexOf("attrs")>-1)||1!==l.length)return r("REDUNDANT_PROPERTIES",`redundant props found: ${l.join(", ")}`,{props:l});return a}(E,r,n,a,p);if(!b.valid)return{hasValidated:!0,result:b};if(E.props.content){const e=E.props.content;if(r.content){const t=(t,r)=>{if(void 0===t)return t;const n=(e,t,r,n,o=!1)=>{let a=!0;if(e&&e.marks&&t){const i=t.filter((e=>e.valid)),s=t.map((e=>e.valid?e.newMark:i.length||n||o||"INVALID_TYPE"===e.errorCode||"INVALID_CONTENT"===e.errorCode||"REDUNDANT_ATTRIBUTES"===e.errorCode||"INVALID_ATTRIBUTES"===e.errorCode?Ge(e.errorCode,e.originalMark,r,e.message):void 0)).filter(Boolean);s.length?e.marks=s:(delete e.marks,a=!1)}return{valid:a,entity:e}};if(!!e.isTupleLike){const{entity:o,marksValidationOutput:a}=l(t,c,Fe(e.items[r]||e.items[e.items.length-1]),E),{entity:i}=n(o,a,c,!1,!0);return i}const o=e.items.filter((e=>!Array.isArray(e)||e.some((e=>(Array.isArray(e)?e[0]:e)===t.type))));if(o.length){if(o.length>1)throw new Error("Consider using Tuple instead!");const e=Fe(o[0]).filter((e=>(Array.isArray(e)?e[0]:e)===t.type));if(0===e.length)return Ve(t,c,E);let r,i;for(let o=0,s=e.length;o<s;o++)try{const r=[e[o]],{valid:a,entity:s,marksValidationOutput:u}=l(t,c,r,E);if(a){const t=o===e.length-1,{valid:r,entity:a}=n(s,u,c,t),l=a&&a.marks&&a.marks.filter((e=>"unsupportedMark"===e.type))||[];if(r&&!l.length)return a;i=i||s}else i=i||s}catch(a){r=r||a}if(c)return i;throw r}return Ve(t,c,E)};a.content=r.content.map(t).filter(Boolean)}else if(!e.optional)return{hasValidated:!0,result:n("MISSING_PROPERTIES","missing `content` prop")}}if(r.marks)return{hasValidated:!0,result:u(E,r,c,a,n)};return h}(E,n,e,h,m,c,t,p);if(y.hasValidated&&y.result)return y.result}return{valid:!0,entity:m}};return(e,t,r,n)=>{const o=l(e,t,r,n);return{entity:o.entity,valid:o.valid}};function u(e,r,n,o,a){let s;if(e.props&&e.props.marks){s={valid:!0,entity:o,marksValidationOutput:function(e,r,n,o){return e.marks?e.marks.map((e=>{const a=!t||t.indexOf(e.type)>-1;if("strict"===i&&a){const t=l(e,r,n,o,!0),a=t.entity;return a?{valid:!0,originalMark:e,newMark:a}:t.marksValidationOutput&&t.marksValidationOutput.length?{valid:!1,originalMark:e,errorCode:t.marksValidationOutput[0].errorCode,message:t.marksValidationOutput[0].message}:{valid:!1,originalMark:e,errorCode:"INVALID_TYPE"}}return{valid:!1,originalMark:e,errorCode:"INVALID_CONTENT"}})):[]}(r,n,function(e){const{items:t}=e.props.marks;return t.length?Array.isArray(t[0])?t[0]:t:[]}(e),e)}}else s=function(e,t,r,n){const o="REDUNDANT_MARKS",a=e.marks||[],i=a.map((e=>"unsupportedNodeAttribute"===e.type?e:Ge(o,e,r)));return i.length?(t.marks=i,{valid:!0,entity:t}):n("REDUNDANT_MARKS","redundant marks",{marks:Object.keys(a)})}(r,o,n,a);return s}function d(e,t,r,n,a){const i=r.concat(n);let s={valid:!0,entity:e};const l=He(e.type,"'attrs' validation failed");return t.marks=function(e,t,r,n,a,i){let s={};for(let o in r)s[r[o]]=e.attrs&&e.attrs[r[o]],t.attrs&&delete t.attrs[r[o]];const l=((e,t,r,n,o)=>{if(o)return o({type:e.type},{code:t,message:n,meta:r},{allowUnsupportedBlock:!1,allowUnsupportedInline:!1,isMark:!1,isNodeAttribute:!0});throw new Error(n)})(e,n,s,a,i),u=(0,o.Z)({},t);return u.marks?(l&&u.marks.push(l),u.marks):[l]}(e,t,i,"UNSUPPORTED_ATTRIBUTES",l,a),s={valid:!0,entity:t},s}}},959557:(e,t,r)=>{"use strict";let n,o,a,i,s,l,u,d;r.d(t,{Ze:()=>n,om:()=>o,Jq:()=>a,ID:()=>i,Wt:()=>s,VJ:()=>l,nI:()=>d}),function(e){e.OPERATIONAL="operational",e.SCREEN="screen",e.TRACK="track",e.UI="ui"}(n||(n={})),function(e){e.ACTIVATED="activated",e.ADDED="added",e.BROWSER_FREEZE="browserFreeze",e.CHANGED_BACKGROUND_COLOR="changedBackgroundColor",e.CHANGED_ICON="changedIcon",e.CHANGED_FULL_WIDTH_MODE="changedFullWidthMode",e.CHANGED_LAYOUT="changedLayout",e.CHANGED_REPLACEMENT_TEXT="changedReplacementText",e.CHANGED_TYPE="changedType",e.CHANGED_URL="changedUrl",e.CLEARED="cleared",e.CLICKED="clicked",e.CLOSED="closed",e.COMMITTED="committed",e.CONNECTED_NODES="connectedNodes",e.CONVERTED="converted",e.COPIED="copied",e.CUT="cut",e.DEACTIVATED="deactivated",e.DECREMENTED="decremented",e.DELETED="deleted",e.DISCARDED_INVALID_STEPS_FROM_TRANSACTION="discardedInvalidStepsFromTransaction",e.DISCONNECTED_SOURCE="disconnectedSource",e.DISCONNECTED_TARGET="disconnectedTarget",e.DISMISSED="dismissed",e.DISPATCHED_INVALID_TRANSACTION="dispatchedInvalidTransaction",e.DISPATCHED_VALID_TRANSACTION="dispatchedValidTransaction",e.EDITED="edited",e.EDITOR_CRASHED="unhandledErrorCaught",e.EDITOR_CRASHED_ADDITIONAL_INFORMATION="unhandledErrorCaughtAdditionalInfov2",e.EDITOR_MOUNTED="mounted",e.EDITOR_TTI="tti",e.EDITOR_CONTENT_RETRIEVAL_PERFORMED="contentRetrievalPerformed",e.RE_RENDERED="reRendered",e.ENTERED="entered",e.ERRORED="errored",e.EXPOSED="exposed",e.FAILED_TO_UNMOUNT="failedToUnmount",e.FIND_NEXT_PERFORMED="findNextPerformed",e.FIND_PERFORMED="findPerformed",e.FIND_PREV_PERFORMED="findPrevPerformed",e.FORMATTED="formatted",e.HELP_OPENED="helpOpened",e.HIGHLIGHTED="highlighted",e.INCREMENTED="incremented",e.INDENTED="indented",e.INITIALISED="initialised",e.INITIALISED_FRAGMENT_MARK="initialisedFragmentMark",e.INPUT_PERF_SAMPLING="inputPerfSampling",e.INPUT_PERF_SAMPLING_AVG="inputPerfSamplingAvg",e.INSERTED="inserted",e.INVALID_DOCUMENT_ENCOUNTERED="invalidDocumentEncountered",e.INVOKED="invoked",e.GOT_CONNECTIONS="gotConnections",e.LANGUAGE_SELECTED="languageSelected",e.LIST_ITEM_JOINED="listItemJoined",e.MATCHED="matched",e.MEDIA_LINK_TRANSFORMED="mediaLinkTransformed",e.NODE_CONTENT_SANITIZED="nodeContentSanitized",e.OPENED="opened",e.OUTDENTED="outdented",e.PASTED="pasted",e.PASTED_AS_PLAIN="pastedAsPlain",e.PASTED_TIMED="pastedTimed",e.PROSEMIRROR_RENDERED="proseMirrorRendered",e.REACT_NODEVIEW_RENDERED="reactNodeViewRendered",e.REPLACED_ALL="replacedAll",e.REPLACED_ONE="replacedOne",e.RESOLVED="resolved",e.SELECTED="selected",e.SHOWN="shown",e.SLOW_INPUT="slowInput",e.STARTED="started",e.STOPPED="stopped",e.SUBSTITUTED="autoSubstituted",e.SYNCHRONY_DISCONNECTED="synchronyDisconnected",e.SYNCHRONY_ENTITY_ERROR="synchronyEntityError",e.SYNCHRONY_ERROR="synchronyError",e.TEXT_LINK_MARK_TRANSFORMED="textLinkMarkTransformed",e.DEDUPE_MARKS_TRANSFORMED_V2="dedupeMarksTransformedV2",e.NODES_MISSING_CONTENT_TRANSFORMED="nodesMissingContentTransformed",e.INDENTATION_MARKS_TRANSFORMED="indentationMarksTransformed",e.INVALID_MEDIA_CONTENT_TRANSFORMED="invalidMediaContentTransformed",e.TOGGLE_EXPAND="toggleExpand",e.TRANSACTION_DISPATCHED="transactionDispatched",e.TRANSACTION_MUTATED_AFTER_DISPATCH="transactionMutatedAfterDispatched",e.TYPING_FINISHED="typingFinished",e.TYPING_STARTED="typingStarted",e.UNLINK="unlinked",e.UNSUPPORTED_CONTENT_ENCOUNTERED="unsupportedContentEncounteredV2",e.UPDATED="updated",e.UPDATED_FRAGMENT_MARK_NAME="updatedFragmentMarkName",e.UPDATED_SOURCE="updatedSource",e.UPDATED_TARGET="updatedTarget",e.UPLOAD_EXTERNAL_FAIL="uploadExternalFailed",e.VIEWED="viewed",e.VISITED="visited",e.WITH_PLUGIN_STATE_CALLED="withPluginStateCalled",e.RENDERED="rendered",e.ON_EDITOR_READY_CALLBACK="onEditorReadyCallback",e.ON_CHANGE_CALLBACK="onChangeCalled",e.NEW_COLLAB_SYNC_UP_ERROR_NO_STEPS="newCollabSyncUpErrorNoSteps",e.REMOVE_ICON="removedIcon",e.UFO_SESSION_COMPLETE="ufoSessionComplete",e.INVALID_PROSEMIRROR_DOCUMENT="invalidProsemirrorDocument",e.DOCUMENT_PROCESSING_ERROR="documentProcessingError",e.RENDERER_TTI="tti",e.CRASHED="unhandledErrorCaught",e.SELECT_ALL_CAUGHT="selectAllCaught",e.SELECT_ALL_ESCAPED="selectAllEscaped",e.SORT_COLUMN="sortedColumn",e.SORT_COLUMN_NOT_ALLOWED="sortColumnNotAllowed",e.CREATE_NOT_ALLOWED="createNotAllowed",e.UNSUPPORTED_CONTENT_LEVELS_TRACKING_SUCCEEDED="unsupportedContentLevelsTrackingSucceeded",e.UNSUPPORTED_CONTENT_LEVELS_TRACKING_ERRORED="unsupportedContentLevelsTrackingErrored",e.UNSUPPORTED_TOOLTIP_VIEWED="viewed"}(o||(o={})),function(e){e.ASCII="ascii",e.AUTO="auto",e.AUTO_DETECT="autoDetect",e.BUTTON="button",e.BLUR="blur",e.CARD="card",e.CLIPBOARD="clipboard",e.CONFIG_PANEL="configPanel",e.CONTEXT_MENU="contextMenu",e.DRAG_AND_DROP="dragAndDrop",e.EXTERNAL="external",e.EXTENSION_API="extensionApi",e.FLOATING_TB="floatingToolbar",e.FORMATTING="autoformatting",e.INSERT_MENU="insertMenu",e.KEYBOARD="keyboard",e.MACRO_BROWSER="macroBrowser",e.MANUAL="manual",e.PICKER="picker",e.PICKER_CLOUD="cloudPicker",e.PREFILL="prefill",e.QUICK_INSERT="quickInsert",e.SHORTCUT="shortcut",e.TOOLBAR="toolbar",e.TYPEAHEAD="typeAhead"}(a||(a={})),function(e){e.BUTTON="button",e.KEYBOARD="keyboard",e.SHORTCUT="shortcut",e.TOOLBAR="toolbar"}(i||(i={})),function(e){e.TOOLBAR_BUTTON="toolbarButton",e.BUTTON="button",e.CONFIG_PANEL="configPanel",e.CONTENT_COMPONENT="contentComponent",e.DATE="date",e.DATE_SEGMENT="dateSegment",e.DOCUMENT="document",e.EDITOR="editor",e.ELEMENT_BROWSER="elementBrowser",e.EMBEDS="embeds",e.EXPAND="expand",e.EXTENSION="extension",e.FEATURE="feature",e.FEEDBACK_DIALOG="feedbackDialog",e.FIND_REPLACE_DIALOG="findReplaceDialog",e.FLOATING_CONTEXTUAL_BUTTON="floatingContextualButton",e.FLOATING_TOOLBAR_PLUGIN="floatingToolbarPlugin",e.HELP="help",e.LAYOUT="layout",e.LIST="list",e.MEDIA="media",e.MEDIA_SINGLE="mediaSingle",e.NESTED_EXPAND="nestedExpand",e.PANEL="panel",e.PICKER="picker",e.PLUS_MENU="plusMenu",e.PLUGIN_SLOT="pluginSlot",e.REACT_NODE_VIEW="reactNodeView",e.SELECTION="selection",e.SMART_LINK="smartLink",e.HYPERLINK="hyperlink",e.TABLE="table",e.TABLES_PLUGIN="tablesPlugin",e.TEXT="text",e.TOOLBAR="toolbar",e.TYPEAHEAD="typeAhead",e.TYPEAHEAD_ITEM="typeAheadItem",e.ANNOTATION="annotation",e.SEARCH_RESULT="searchResult",e.CREATE_LINK_INLINE_DIALOG="createLinkInlineDialog",e.CODE_BLOCK="codeBlock",e.REACT_EDITOR_VIEW="reactEditorView",e.RENDERER="renderer",e.ANCHOR_LINK="anchorLink",e.LINK="link",e.TOOLTIP="tooltip"}(s||(s={})),function(e){e.ACTION="action",e.ALL="all",e.ALT_TEXT="altText",e.ANNOTATE_BUTTON="annotateButton",e.AVATAR_GROUP_PLUGIN="AvatarGroupInPlugin",e.BLOCK_QUOTE="blockQuote",e.BUTTON_CATEGORY="categoryButton",e.BUTTON_FEEDBACK="feedbackButton",e.BUTTON_HELP="helpButton",e.CANCEL="cancel",e.CAPTION="caption",e.CARD_BLOCK="blockCard",e.CARD_INLINE="inlineCard",e.CELL="cell",e.CODE_BLOCK="codeBlock",e.DATE="date",e.DATE_DAY="day",e.DATE_MONTH="month",e.DATE_YEAR="year",e.DECISION="decision",e.DIVIDER="divider",e.EDIT_LINK="editLink",e.EMBEDS="embeds",e.EMOJI="emoji",e.EXPAND="expand",e.EXTENSION="extension",e.EXTENSION_API="extensionApi",e.EXTENSION_BLOCK="extension",e.EXTENSION_BODIED="bodiedExtension",e.EXTENSION_INLINE="inlineExtension",e.FORMAT_BLOCK_QUOTE="blockQuote",e.FORMAT_CLEAR="clearFormatting",e.FORMAT_CODE="code",e.FORMAT_COLOR="color",e.FORMAT_HEADING="heading",e.FORMAT_INDENT="indentation",e.FORMAT_ITALIC="italic",e.FORMAT_LIST_BULLET="bulletedList",e.FORMAT_LIST_NUMBER="numberedList",e.FORMAT_STRIKE="strike",e.FORMAT_STRONG="strong",e.FORMAT_SUB="subscript",e.FORMAT_SUPER="superscript",e.FORMAT_UNDERLINE="underline",e.FRAGMENT_MARK="fragmentMark",e.GOTO_SMART_LINK_SETTINGS="goToSmartLinkSettings",e.HELP_QUICK_INSERT="helpQuickInsert",e.HYPERLINK="hyperlink",e.INLINE_COMMENT="inlineComment",e.LAYOUT="layout",e.LINE_BREAK="lineBreak",e.LINK="link",e.LINK_PREVIEW="linkPreview",e.LINK_SEARCH_INPUT="linkSearchInput",e.MEDIA="media",e.MEDIA_GROUP="mediaGroup",e.MEDIA_INLINE="mediaInline",e.MEDIA_LINK="mediaLink",e.MEDIA_SINGLE="mediaSingle",e.MENTION="mention",e.NESTED_EXPAND="nestedExpand",e.NODE="node",e.OPEN_LINK="openLink",e.PANEL="panel",e.PASTE_BLOCK_CARD="blockCard",e.PASTE_BLOCKQUOTE="blockQuote",e.PASTE_BODIED_EXTENSION="bodiedExtension",e.PASTE_BULLET_LIST="bulletList",e.PASTE_CODE_BLOCK="codeBlock",e.PASTE_DECISION_LIST="decisionList",e.PASTE_EXPAND="expand",e.PASTE_EXTENSION="extension",e.PASTE_HEADING="heading",e.PASTE_MEDIA_GROUP="mediaGroup",e.PASTE_MEDIA_SINGLE="mediaSingle",e.PASTE_NESTED_EXPAND="nestedExpand",e.PASTE_ORDERED_LIST="orderedList",e.PASTE_PANEL="panel",e.PASTE_PARAGRAPH="paragraph",e.PASTE_RULE="rule",e.PASTE_TABLE="table",e.PASTE_TABLE_CELL="tableCell",e.PASTE_TABLE_HEADER="tableHeader",e.PASTE_TABLE_ROW="tableRow",e.PASTE_TASK_LIST="taskList",e.PICKER_CLOUD="cloudPicker",e.PICKER_COLOR="colorPicker",e.PICKER_EMOJI="emojiPicker",e.PLACEHOLDER_TEXT="placeholderText",e.POST_QUERY_SEARCH_RESULTS="postQuerySearchResults",e.PRE_QUERY_SEARCH_RESULTS="preQuerySearchResults",e.PRODUCT_NAME="productName",e.PUNC="punctuation",e.QUICK_SEARCH="quickSearch",e.RANGE="range",e.REACT_NODE_VIEW="reactNodeView",e.RECENT_ACTIVITIES="recentActivities",e.RESIZED="resized",e.RICH_MEDIA_LAYOUT="richMediaLayout",e.SAVE="save",e.SECTION="section",e.SMART_LINK="smartLink",e.STATUS="status",e.SYMBOL="symbol",e.TABLE="table",e.TEXT="text",e.TYPEAHEAD_EMOJI="emojiTypeAhead",e.TYPEAHEAD_LINK="linkTypeAhead",e.TYPEAHEAD_MENTION="mentionTypeAhead",e.TYPEAHEAD_QUICK_INSERT="quickInsertTypeAhead",e.UNKNOWN_NODE="unknownNode",e.UNLINK="unlink",e.HEADING_ANCHOR_LINK="headingAnchorLink",e.UNSUPPORTED_ERROR="unsupportedUnhandled",e.UNSUPPORTED_NODE_ATTRIBUTE="unsupportedNodeAttribute",e.UNSUPPORTED_BLOCK="unsupportedBlock",e.UNSUPPORTED_INLINE="unsupportedInline",e.UNSUPPORTED_MARK="unsupportedMark",e.ON_UNSUPPORTED_INLINE="onUnsupportedInline",e.ON_UNSUPPORTED_BLOCK="onUnsupportedBlock"}(l||(l={})),function(e){e.CODE_BLOCK="codeBlockFloatingControls",e.EXTENSION="extensionFloatingControls",e.HYPERLINK="hyperlinkFloatingControls",e.MEDIA="mediaFloatingControls",e.PANEL="panelFloatingControls",e.TABLE="tableFloatingControls",e.EXPAND="expandToolbar"}(u||(u={})),function(e){e.INLINE_COMMENT="inlineComment",e.FLOATING_CONTEXTUAL_BUTTON="floatingContextualButton",e.FLOATING_INSERT_BUTTON="floatingInsertButton",e.FLOATING_TOOLBAR="floatingToolbar"}(d||(d={}))},26840:(e,t,r)=>{"use strict";r.d(t,{_3:()=>s,tV:()=>l,ZY:()=>d});var n=r(122551),o=r(959723),a=r.n(o),i=r(944276);async function s(e,t,r){const[n,o]=(0,i.tz)(r,t),a=await e.getExtension(t,n);if(!a)throw new Error(`Extension with key "${n}" and type "${t}" not found!`);if(!a.modules.nodes)throw new Error(`Couldn't find any node for extension type "${t}" and key "${r}"!`);const s=a.modules.nodes[o];if(!s)throw new Error(`Node with key "${r}" not found on manifest for extension type "${t}" and key "${r}"!`);return s}async function l(e,t,r){const n=await s(e,t,r);return Object.keys(n).filter((e=>e.startsWith("__"))).reduce(((e,t)=>(e[t]=n[t],e)),{})}function u(e){return e.error||e.timedOut?(console.error("Error rendering extension",e.error),n.createElement("div",null,"Error loading the extension!")):null}function d(e,t,r){return a()({__loadable_id__:"WkNQJ",name:"node_modules.@atlaskit.editor-common.dist.es2019.extensions.extension-handlers",loader:()=>s(e,t,r).then((e=>(0,i.B8)(e.render()))),loading:u})}},944276:(e,t,r)=>{"use strict";r.d(t,{tz:()=>o,cM:()=>a,B8:()=>i});var n=r(991332);const o=(e,t)=>{if("com.atlassian.ecosystem"===t)return[e,"default"];const[r,n="default"]=e.split(":");return[r,n]};function a(e,t){return"function"==typeof e?e:"node"===e.type&&t.modules.nodes?function(e,t){if(!t.modules.nodes)return;const r=t.modules.nodes[e.key],o=((e,t)=>t&&"default"!==t?`${e}:${t}`:e)(t.key,e.key),a={type:r.type,attrs:{extensionType:t.type,extensionKey:o,parameters:e.parameters}};if("bodiedExtension"===r.type)return(0,n.Z)((0,n.Z)({},a),{},{content:[{type:"paragraph",content:[]}]});return a}(e,t):void 0}const i=async e=>{const t=await e;return t&&t.__esModule?t.default:t}},653197:(e,t,r)=>{"use strict";r.d(t,{i:()=>n});const n=(0,r(464984).defineMessages)({label:{id:"fabric.editor.codeBidiWarningLabel",defaultMessage:"Bidirectional characters change the order that text is rendered. This could be used to obscure malicious code."}})},655744:(e,t,r)=>{"use strict";r.d(t,{x:()=>n});const n=(0,r(464984).defineMessages)({unsupportedInlineContent:{id:"fabric.editor.unsupportedInlineContent",defaultMessage:"Unsupported content"},unsupportedBlockContent:{id:"fabric.editor.unsupportedBlockContent",defaultMessage:"This editor does not support displaying this content"},unsupportedContentTooltip:{id:"fabric.editor.unsupportedContentTooltip",defaultMessage:"Content is not available in this editor, this will be preserved when you edit and save"}})},512494:(e,t,r)=>{"use strict";r.d(t,{I:()=>u});var n=r(435020),o=r.n(n),a=r(159578),i=r.n(a);const s={};function l(e,t,r){return Boolean("string"==typeof t&&(null==r?void 0:r.includes(e)))}function u(e,t){return e?Object.entries(e).filter((e=>"boolean"==typeof e[1]||!(!l(o()(e[0]),e[1],null==t?void 0:t.objectFlagKeys)||!function(e){try{let t=JSON.parse(e);return"object"==typeof t&&null!==t}catch(t){return!1}}(e[1])))).filter((([e])=>i()(e)===e)).map((([e,t])=>[o()(e),t])).reduce(((e,[r,n])=>(l(r,n,null==t?void 0:t.objectFlagKeys)&&(e[r]=JSON.parse(n)),"boolean"==typeof n&&(e[r]=n),e)),{}):s}},388571:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(29298);class o{constructor(){(0,n.Z)(this,"providers",new Map),(0,n.Z)(this,"subscribers",new Map)}static create(e){const t=new o;return Object.keys(e).forEach((r=>{t.setProvider(r,e[r])})),t}destroy(){this.providers.clear(),this.subscribers.clear()}isEmpty(){return!this.providers.size&&!this.subscribers.size}setProvider(e,t){this.providers.get(e)!==t&&(void 0!==t?this.providers.set(e,t):this.providers.delete(e),this.notifyUpdated(e,t))}removeProvider(e){this.providers.delete(e),this.notifyUpdated(e)}subscribe(e,t){const r=this.subscribers.get(e)||[];r.push(t),this.subscribers.set(e,r);const n=this.providers.get(e);n&&t(e,n)}unsubscribe(e,t){const r=this.subscribers.get(e);if(!r)return;const n=r.indexOf(t);-1!==n&&r.splice(n,1),0===r.length?this.subscribers.delete(e):this.subscribers.set(e,r)}unsubscribeAll(e){this.subscribers.get(e)&&this.subscribers.delete(e)}hasProvider(e){return this.providers.has(e)}notifyUpdated(e,t){const r=this.subscribers.get(e);r&&r.forEach((r=>{r(e,t)}))}}},871100:(e,t,r)=>{"use strict";r.d(t,{S:()=>i});var n=r(991332),o=r(29298),a=r(122551);class i extends a.PureComponent{constructor(e){super(e),(0,o.Z)(this,"handleProvider",((e,t)=>{this.setState((({providers:r})=>({providers:(0,n.Z)((0,n.Z)({},r),{},{[e]:t})})))}));const t={};this.props.providers.forEach((e=>{t[e]=void 0})),this.state={providers:t}}UNSAFE_componentWillMount(){const{providers:e,providerFactory:t}=this.props;e.forEach((e=>{t.subscribe(e,this.handleProvider)}))}componentWillUnmount(){const{providers:e,providerFactory:t}=this.props;e.forEach((e=>{t.unsubscribe(e,this.handleProvider)}))}render(){const{state:e,props:t}=this,{renderNode:r}=t;return r(e.providers)}}i.displayName="WithProviders",(0,o.Z)(i,"displayName","WithProviders")},58650:(e,t,r)=>{"use strict";r.d(t,{qH:()=>s,Lj:()=>l,_L:()=>u});var n=r(321534),o=r(131436),a=r(479517);const i="ak-editor-annotation",s={focus:`${i}-focus`,blur:`${i}-blur`,draft:`${i}-draft`},l=e=>({focus:n.iv`
    // Background is not coming through in confluence, suspecting to be caused by some specific combination of
    // emotion and token look up

    background: ${(0,a.Z)({light:`var(--ds-background-accent-yellow-subtler, ${o.a8})`,dark:"var(--ds-background-accent-yellow-subtler, rgb(111, 92, 37))"})(e)};
    border-bottom: 2px solid
      ${(0,a.Z)({light:`var(--ds-border-accent-yellow, ${o.Z3})`,dark:"var(--ds-border-accent-yellow, #ffd557)"})(e)};
    // TODO: https://product-fabric.atlassian.net/browse/DSP-4147
    box-shadow: ${`var(--ds-shadow-overlay, 1px 2px 3px ${o.VG}, -1px 2px 3px ${o.VG})`};
    cursor: pointer;
  `,blur:n.iv`
    background: ${(0,a.Z)({light:"var(--ds-background-accent-yellow-subtlest, rgba(255, 240, 179, 0.5))",dark:"var(--ds-background-accent-yellow-subtlest, rgba(111, 92, 37, 0.5))"})(e)};
    border-bottom: 2px solid
      ${(0,a.Z)({light:"var(--ds-border-accent-yellow, rgba(255, 196, 0, 0.82))",dark:"var(--ds-border-accent-yellow, #82641c)"})(e)};
    cursor: pointer;
  `}),u=e=>n.iv`
  .ProseMirror {
    .${s.focus} {
      ${l(e).focus};
    }

    .${s.draft} {
      ${l(e).focus};
      cursor: initial;
    }

    .${s.blur} {
      ${l(e).blur};
    }
  }
`},94428:(e,t,r)=>{"use strict";r.d(t,{U:()=>n});const n=r(321534).iv`
  /**
   * We need to remove margin-top from first item
   * inside doc, tableCell, tableHeader, blockquote, etc.
   */
  *:not(.fabric-editor-block-mark) >,
  /* For nested block marks apart from those with indentation mark */
  *:not(.fabric-editor-block-mark) >
    div.fabric-editor-block-mark:first-of-type
    /* Do not remove the margin top for nodes inside indentation marks */
      :not(.fabric-editor-indentation-mark)
    /* Do not remove the margin top for nodes inside alignment marks */
      :not(.fabric-editor-alignment),
  // If first element inside a block node has alignment mark, then remove the margin-top
  .fabric-editor-alignment:first-of-type:first-child,
  // If first document element has indentation mark remove margin-top
  .ProseMirror .fabric-editor-indentation-mark:first-of-type:first-child {
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .heading-wrapper {
      :first-child:not(style),
      style:first-child + * {
        margin-top: 0;
      }
    }
  }
`},542117:(e,t,r)=>{"use strict";r.d(t,{V:()=>i});var n=r(321534),o=r(404510),a=r(676424);const i=n.iv`
  & blockquote {
    box-sizing: border-box;
    padding-left: ${2*(0,a.ww)()}px;
    border-left: 2px solid
      ${`var(--ds-border, ${o.DT})`};
    margin: ${o.zH} 0 0 0;
    margin-right: 0;

    [dir='rtl'] & {
      padding-left: 0;
      padding-right: ${2*(0,a.ww)()}px;
    }

    &:first-child {
      margin-top: 0;
    }

    &::before {
      content: '';
    }

    &::after {
      content: none;
    }

    & p {
      display: block;
    }

    & table,
    & table:last-child {
      display: inline-table;
    }
  }
`},131934:(e,t,r)=>{"use strict";r.d(t,{zq:()=>u,Hk:()=>d,AG:()=>p});var n=r(321534),o=r(404510),a=r(837557),i=r(131436),s=r(479517),l=r(676424);const u={CODEBLOCK_CONTAINER:"code-block",CODEBLOCK_START:"code-block--start",CODEBLOCK_END:"code-block--end",CODEBLOCK_CONTENT_WRAPPER:"code-block-content-wrapper",CODEBLOCK_LINE_NUMBER_GUTTER:"line-number-gutter",CODEBLOCK_CONTENT:"code-content",DS_CODEBLOCK:"[data-ds--code--code-block]"},d=e=>n.iv`
  .${u.CODEBLOCK_CONTAINER} {
    position: relative;
    background-color: ${"var(--ds-surface-raised, transparent)"};
    border-radius: ${(0,l.E0)()}px;
    margin: ${o.zH} 0 0 0;
    font-family: ${o.zd};
    min-width: ${o.cw}px;
    cursor: pointer;

    --ds--code--bg-color: transparent;

    /* This is necessary to allow for arrow key navigation in/out of code blocks in Firefox. */
    white-space: normal;

    .${u.CODEBLOCK_START} {
      position: absolute;
      visibility: hidden;
      height: 1.5rem;
      top: 0px;
      left: 0px;
    }

    .${u.CODEBLOCK_END} {
      position: absolute;
      visibility: hidden;
      height: 1.5rem;
      bottom: 0px;
      right: 0px;
    }

    .${u.CODEBLOCK_CONTENT_WRAPPER} {
      background-color: ${(0,s.Z)({light:`var(--ds-background-neutral, ${i.IR})`,dark:`var(--ds-background-neutral, ${i.H8})`})(e)};
      display: flex;
      border-radius: ${(0,l.E0)()}px;
      width: 100%;
      counter-reset: line;
      overflow-x: auto;

      background-image: ${(0,a.u)({background:(0,s.Z)({light:`var(--ds-background-neutral, ${i.IR})`,dark:`var(--ds-background-neutral, ${i.H8})`})(e),leftCoverWidth:3*(0,l.ww)()+"px"})};

      background-repeat: no-repeat;
      background-attachment: local, local, local, local, scroll, scroll, scroll,
        scroll;
      background-size: ${3*(0,l.ww)()}px 100%, ${3*(0,l.ww)()}px 100%,
        ${(0,l.ww)()}px 100%, ${(0,l.ww)()}px 100%, ${(0,l.ww)()}px 100%,
        1px 100%, ${(0,l.ww)()}px 100%, 1px 100%;
      background-position: 0 0, 0 0, 100% 0, 100% 0, 100% 0, 100% 0, 0 0, 0 0;

      /* Be careful if refactoring this; it is needed to keep arrow key navigation in Firefox consistent with other browsers. */
      overflow-y: hidden;
    }

    .${u.CODEBLOCK_LINE_NUMBER_GUTTER} {
      flex-shrink: 0;
      text-align: right;
      background-color: ${(0,s.Z)({light:`var(--ds-background-neutral, ${i.gt})`,dark:`var(--ds-background-neutral, ${i.JV})`})(e)};
      padding: ${(0,l.ww)()}px;
      position: relative;

      span {
        display: block;
        line-height: 0;
        font-size: 0;

        ::before {
          display: inline-block;
          content: counter(line);
          counter-increment: line;
          color: ${(0,s.Z)({light:`var(--ds-text-subtlest, ${i.zN})`,dark:`var(--ds-text-subtlest, ${i.oe})`})(e)};
          font-size: ${(0,o.Gh)((0,l.JB)())};
          line-height: 1.5rem;
        }
      }
    }

    .${u.CODEBLOCK_CONTENT} {
      display: flex;
      flex: 1;

      code {
        flex-grow: 1;
        tab-size: 4;
        cursor: text;
        color: ${(0,s.Z)({light:`var(--ds-text, ${i.q2})`,dark:`var(--ds-text, ${i.vs})`})(e)};
        border-radius: ${(0,l.E0)()}px;
        margin: ${(0,l.ww)()}px;
        white-space: pre;
        font-size: ${(0,o.Gh)((0,l.JB)())};
        line-height: 1.5rem;
      }
    }
  }
`,p=n.iv`
  ::before {
    content: ' ';
    line-height: ${o.pt};
  }

  > p:first-child,
  > .code-block:first-child,
  > .ProseMirror-gapcursor:first-child + .code-block {
    margin-top: -${o.pt}em !important;
  }
`},558338:(e,t,r)=>{"use strict";r.d(t,{V:()=>l});var n=r(321534),o=r(530289),a=r(131436),i=r(406240),s=r(479517);const l=e=>{const t=(0,i.Z)(e);return n.iv`
    .code {
      --ds--code--bg-color: ${(0,s.Z)({light:`var(--ds-background-neutral, ${a.kd})`,dark:`var(--ds-background-neutral, ${a.nA})`})(e)};
      ${(0,o.HX)(t)}
    }
  `}},454425:(e,t,r)=>{"use strict";r.d(t,{D:()=>a});var n=r(321534),o=r(404510);const a=n.iv`
  [data-layout-section] {
    position: relative;
    display: flex;
    flex-direction: row;
    & > * {
      flex: 1;
      min-width: 0;
    }

    & > .unsupportedBlockView-content-wrap {
      min-width: initial;
    }

    @media screen and (max-width: ${o.Kv}px) {
      flex-direction: column;
    }
  }
`},246102:(e,t,r)=>{"use strict";r.d(t,{r:()=>o,B:()=>a});var n=r(321534);const o={DATE_WRAPPER:"date-lozenger-container",DATE_CONTAINER:"dateView-content-wrap"},a=n.iv`
  .${o.DATE_WRAPPER} span {
    white-space: unset;
  }
`},153624:(e,t,r)=>{"use strict";r.d(t,{E:()=>a});var n=r(321534),o=r(171945);const a=e=>n.iv`
  & h1 {
    ${(0,o.pp)(e)};
    margin-bottom: 0;
    margin-top: 1.667em;
  }

  & h2 {
    ${(0,o.lL)(e)};
    margin-top: 1.8em;
    margin-bottom: 0;
  }

  & h3 {
    ${(0,o.uU)(e)};
    margin-top: 2em;
    margin-bottom: 0;
  }

  & h4 {
    ${(0,o.AC)(e)};
    margin-top: 1.357em;
  }

  & h5 {
    ${(0,o.qm)(e)};
    margin-top: 1.667em;
    text-transform: none;
  }

  & h6 {
    ${(0,o.Mf)(e)};
    margin-top: 1.455em;
    text-transform: none;
  }
`},411014:(e,t,r)=>{"use strict";r.d(t,{x:()=>n});const n=r(321534).iv`
  .fabric-editor-indentation-mark {
    &[data-level='1'] {
      margin-left: 30px;
    }
    &[data-level='2'] {
      margin-left: 60px;
    }
    &[data-level='3'] {
      margin-left: 90px;
    }
    &[data-level='4'] {
      margin-left: 120px;
    }
    &[data-level='5'] {
      margin-left: 150px;
    }
    &[data-level='6'] {
      margin-left: 180px;
    }
  }
`},670317:(e,t,r)=>{"use strict";r.d(t,{cm:()=>s,aP:()=>d,Xo:()=>p});var n=r(321534),o=r(628866),a=r(667066),i=r(502094);const s=24;var l;!function(e){e.ITEM_COUNTER_PADDING="--ed--list--item-counter--padding"}(l||(l={}));const u=e=>{let t="2.385ch";if(e>=3){t=`calc(${e+1}ch - ${2}px)`}return t};function d(e,t){const r={[l.ITEM_COUNTER_PADDING]:u(e)};return"string"===t?(e=>Object.entries(e).reduce(((e,[t,r])=>`${e}${t}:${r};`),""))(r):r}const p=n.iv`
  /* =============== INDENTATION SPACING ========= */

  ul,
  ol {
    box-sizing: border-box;
    padding-left: var(
      ${l.ITEM_COUNTER_PADDING},
      ${s}px
    );

    /*
    Firefox does not handle empty block element inside li tag.
    If there is not block element inside li tag,
      then firefox sets inherited height to li
    However, if there is any block element and if it's empty
      (or has empty inline element) then
    firefox sets li tag height to zero.
    More details at
    https://product-fabric.atlassian.net/wiki/spaces/~455502413/pages/3149365890/ED-14110+Investigation
    */
    li p:empty,
    li p > span:empty {
      ${i.Z.gecko?"display: inline-block;":""}
    }
  }

  ${o.Us}, ${a.T} {
    /*
      Ensures list item content adheres to the list's margin instead
      of filling the entire block row. This is important to allow
      clicking interactive elements which are floated next to a list.

      For some history and context on this block, see PRs related to tickets.:
      @see ED-6551 - original issue.
      @see ED-7015 - follow up issue.
      @see ED-7447 - flow-root change.

      We use 'display: table' (old clear fix / new block formatting context hack)
      for older browsers and 'flow-root' for modern browsers.

      @see https://css-tricks.com/display-flow-root/
    */
    // For older browsers the do not support flow-root.
    /* stylelint-disable declaration-block-no-duplicate-properties */
    display: table;
    display: flow-root;
    /* stylelint-enable declaration-block-no-duplicate-properties */
  }

  /* =============== INDENTATION AESTHETICS ========= */

  /**
        We support nested lists up to six levels deep.
    **/

  /* LEGACY LISTS */

  ul,
  ul ul ul ul {
    list-style-type: disc;
  }

  ul ul,
  ul ul ul ul ul {
    list-style-type: circle;
  }

  ul ul ul,
  ul ul ul ul ul ul {
    list-style-type: square;
  }

  ol,
  ol ol ol ol {
    list-style-type: decimal;
  }
  ol ol,
  ol ol ol ol ol {
    list-style-type: lower-alpha;
  }
  ol ol ol,
  ol ol ol ol ol ol {
    list-style-type: lower-roman;
  }

  /* PREDICTABLE LISTS */

  ol[data-indent-level='1'],
  ol[data-indent-level='4'] {
    list-style-type: decimal;
  }

  ol[data-indent-level='2'],
  ol[data-indent-level='5'] {
    list-style-type: lower-alpha;
  }

  ol[data-indent-level='3'],
  ol[data-indent-level='6'] {
    list-style-type: lower-roman;
  }

  ul[data-indent-level='1'],
  ul[data-indent-level='4'] {
    list-style-type: disc;
  }

  ul[data-indent-level='2'],
  ul[data-indent-level='5'] {
    list-style-type: circle;
  }

  ul[data-indent-level='3'],
  ul[data-indent-level='6'] {
    list-style-type: square;
  }
`},661700:(e,t,r)=>{"use strict";r.d(t,{G:()=>a,I:()=>o});var n=r(321534);const o="rich-media-item",a=n.iv`
  li .${o} {
    margin: 0;
  }

  /* Hack for chrome to fix media single position
     inside a list when media is the first child */
  &.ua-chrome li > .mediaSingleView-content-wrap::before {
    content: '';
    display: block;
    height: 0;
  }

  &.ua-firefox {
    .mediaSingleView-content-wrap {
      user-select: none;
    }

    .captionView-content-wrap {
      user-select: text;
    }
  }

  .mediaSingleView-content-wrap[layout='center'] {
    clear: both;
  }

  table .${o} {
    margin-top: 12px;
    margin-bottom: 12px;
    clear: both;
  }

  .${o}.image-wrap-right
    + .${o}.image-wrap-left {
    clear: both;
  }

  .${o}.image-wrap-left
    + .${o}.image-wrap-right,
    .${o}.image-wrap-right
    + .${o}.image-wrap-left,
    .${o}.image-wrap-left
    + .${o}.image-wrap-left,
    .${o}.image-wrap-right
    + .${o}.image-wrap-right {
    margin-right: 0;
    margin-left: 0;
  }

  @media all and (max-width: ${410}px) {
    div.mediaSingleView-content-wrap[layout='wrap-left'],
    div.mediaSingleView-content-wrap[data-layout='wrap-left'],
    div.mediaSingleView-content-wrap[layout='wrap-right'],
    div.mediaSingleView-content-wrap[data-layout='wrap-right'] {
      float: none;
      overflow: auto;
      margin: 12px 0;
    }
  }
`},704954:(e,t,r)=>{"use strict";r.d(t,{o:()=>a});var n=r(321534),o=r(404510);const a=n.iv`
  & p {
    font-size: 1em;
    line-height: ${o.pt};
    font-weight: normal;
    margin-top: ${o.zH};
    margin-bottom: 0;
    letter-spacing: -0.005em;
  }
`},839575:(e,t,r)=>{"use strict";r.d(t,{x:()=>s});var n=r(321534),o=r(404510),a=r(131436);const i=(0,r(479517).Z)({light:`var(--ds-border, ${a.kd})`,dark:`var(--ds-border, ${a.H8})`}),s=e=>n.iv`
  & hr {
    border: none;
    background-color: ${i(e)};
    margin: ${o.pt}em 0;
    height: 2px;
    border-radius: 1px;
  }
`},751120:(e,t,r)=>{"use strict";r.d(t,{B:()=>l});var n=r(321534),o=r(404510),a=r(131436),i=r(269337),s=r(818006);const l=n.iv`
  &
    .${i.$.RIGHT_SHADOW}::before,
    .${i.$.RIGHT_SHADOW}::after,
    .${i.$.LEFT_SHADOW}::before,
    .${i.$.LEFT_SHADOW}::after {
    display: none;
    position: absolute;
    pointer-events: none;
    z-index: ${o.yV};
    width: ${8}px;
    content: '';
    /* Scrollbar is outside the content in IE, inset in other browsers. */
    height: calc(100%);
  }

  & .${i.$.RIGHT_SHADOW}, .${i.$.LEFT_SHADOW} {
    position: relative;
  }

  & .${i.$.LEFT_SHADOW}::before {
    background: linear-gradient(
        to left,
        transparent 0,
        ${`var(--ds-shadow-overflow-spread, ${a.bt})`} 100%
      ),
      linear-gradient(
        to right,
        ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0px,
        transparent 1px
      );
    top: 0px;
    left: 0;
    display: block;
  }

  & .${i.$.RIGHT_SHADOW}::after {
    background: linear-gradient(
        to right,
        transparent 0,
        ${`var(--ds-shadow-overflow-spread, ${a.bt})`} 100%
      ),
      linear-gradient(
        to left,
        ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0px,
        transparent 1px
      );
    left: calc(100% - ${8}px);
    top: 0px;
    display: block;
  }

  & .${s.S4.SENTINEL_LEFT} {
    height: 100%;
    width: 0px;
    min-width: 0px;
  }

  & .${s.S4.SENTINEL_RIGHT} {
    height: 100%;
    width: 0px;
    min-width: 0px;
  }
`},572530:(e,t,r)=>{"use strict";r.d(t,{j:()=>a,U:()=>i});var n=r(404510),o=r(676424);const a={INLINE_CARD_CONTAINER:"inlineCardView-content-wrap",BLOCK_CARD_CONTAINER:"blockCardView-content-wrap",EMBED_CARD_CONTAINER:"embedCardView-content-wrap",LOADER_WRAPPER:"loader-wrapper"},i=`\n  .${a.BLOCK_CARD_CONTAINER} {\n    display: block;\n    margin: ${n.zH} 0 0;\n    max-width: ${95*(0,o.ww)()}px;\n  }\n`},135750:(e,t,r)=>{"use strict";r.d(t,{MZ:()=>c,Md:()=>m,w0:()=>h,kB:()=>E,Xf:()=>y,Ok:()=>f,uq:()=>g,Up:()=>_,WM:()=>b,nP:()=>T});var n=r(321534),o=r(222680),a=r(404510),i=r(837557),s=r(131436),l=r(479517),u=r(676424),d=r(502094),p=r(131934);const c=24,m=16,h=8,E=48,y=140,f=1,g=8,_={TABLE_CONTAINER:`${o.Yf}-container`,TABLE_NODE_WRAPPER:`${o.Yf}-wrapper`,TABLE_LEFT_SHADOW:`${o.Yf}-with-left-shadow`,TABLE_RIGHT_SHADOW:`${o.Yf}-with-right-shadow`,TABLE_STICKY_SHADOW:`${o.Yf}-sticky-shadow`,TABLE_STICKY_WRAPPER:`${o.Yf}-sticky-wrapper`,TABLE_STICKY_SENTINEL_TOP:`${o.Yf}-sticky-sentinel-top`,TABLE_STICKY_SENTINEL_BOTTOM:`${o.Yf}-sticky-sentinel-bottom`,TABLE_CELL_NODEVIEW_CONTENT_DOM:o.Z4,TABLE_CELL_WRAPPER:o.fY,TABLE_HEADER_CELL_WRAPPER:o.Vz,TABLE_ROW_CONTROLS_WRAPPER:`${o.Yf}-row-controls-wrapper`,TABLE_COLUMN_CONTROLS_DECORATIONS:`${o.Yf}-column-controls-decoration`},T=e=>n.iv`
  .${_.TABLE_CONTAINER} {
    position: relative;
    margin: 0 auto ${m}px;
    box-sizing: border-box;

    /**
     * Fix block top alignment inside table cells.
     */
    .decisionItemView-content-wrap:first-of-type > div {
      margin-top: 0;
    }
  }
  .${_.TABLE_CONTAINER}[data-number-column='true'] {
    padding-left: ${a.XV-1}px;
    clear: both;
  }
  .${_.TABLE_NODE_WRAPPER} > table {
    margin: ${c}px 0 0 0;
  }

  .${_.TABLE_CONTAINER} > table,
  .${_.TABLE_STICKY_WRAPPER} > table {
    margin: ${c}px ${h}px 0 0;
  }

  /* avoid applying styles to nested tables (possible via extensions) */
  .${_.TABLE_CONTAINER} > table,
  .${_.TABLE_NODE_WRAPPER} > table,
  .${_.TABLE_STICKY_WRAPPER} > table {
    border-collapse: collapse;
    border: ${f}px solid
      ${(0,l.Z)({light:`var(--ds-border, ${a.aX})`,dark:`var(--ds-border, ${a.Q9})`})(e)};
    table-layout: fixed;
    font-size: 1em;
    width: 100%;

    &[data-autosize='true'] {
      table-layout: auto;
    }

    & {
      * {
        box-sizing: border-box;
      }
      hr {
        box-sizing: content-box;
      }

      tbody {
        border-bottom: none;
      }
      th td {
        background-color: ${"var(--ds-background-neutral-subtle, white)"};
      }
      th,
      td {
        min-width: ${E}px;
        font-weight: normal;
        vertical-align: top;
        border: 1px solid
          ${(0,l.Z)({light:`var(--ds-border, ${a.aX})`,dark:`var(--ds-border, ${a.Q9})`})(e)};
        border-right-width: 0;
        border-bottom-width: 0;
        padding: ${g}px;
        /* https://stackoverflow.com/questions/7517127/borders-not-shown-in-firefox-with-border-collapse-on-table-position-relative-o */
        ${d.Z.gecko||d.Z.ie||d.Z.mac&&d.Z.chrome?"background-clip: padding-box;":""}

        ${(0,l.Z)({dark:a.GT})(e)};

        > :first-child:not(style),
        > style:first-child + * {
          margin-top: 0;
        }

        > .ProseMirror-gapcursor:first-child + *,
        > style:first-child + .ProseMirror-gapcursor + * {
          margin-top: 0;
        }

        > .ProseMirror-gapcursor:first-child + span + *,
        > style:first-child + .ProseMirror-gapcursor + span + * {
          margin-top: 0;
        }

        th p:not(:first-of-type),
        td p:not(:first-of-type) {
          margin-top: 12px;
        }
      }
      th {
        background-color: ${(0,l.Z)({light:`var(--ds-background-neutral, ${a.Zs})`,dark:`var(--ds-background-neutral, ${a.SX})`})(e)};
        text-align: left;

        /* only apply this styling to codeblocks in default background headercells */
        /* TODO this needs to be overhauled as it relies on unsafe selectors */
        &:not([style]):not(.danger) {
          .${p.zq.CODEBLOCK_CONTAINER}:not(.danger) {
            background-color: ${(0,l.Z)({light:"var(--ds-surface-raised, rgb(235, 237, 240))",dark:"var(--ds-surface-raised, rgb(36, 47, 66))"})(e)};

            :not(.${a.ur}) {
              box-shadow: 0px 0px 0px 1px
                ${"var(--ds-border, transparent)"};
            }

            .${p.zq.CODEBLOCK_CONTENT_WRAPPER} {
              background-image: ${(0,i.u)({background:(0,l.Z)({light:"var(--ds-background-neutral, rgb(235, 237, 240))",dark:"var(--ds-background-neutral, rgb(36, 47, 66))"})(e),leftCoverWidth:3*(0,u.ww)()+"px"})};

              background-color: ${(0,l.Z)({light:"var(--ds-background-neutral, rgb(235, 237, 240))",dark:"var(--ds-background-neutral, rgb(36, 47, 66))"})(e)};
            }

            .${p.zq.CODEBLOCK_LINE_NUMBER_GUTTER} {
              background-color: ${(0,l.Z)({light:"var(--ds-background-neutral, rgb(226, 229, 233))",dark:`var(--ds-background-neutral, ${s.JV})`})(e)};
            }

            /* this is only relevant to the element taken care of by renderer */
            > [data-ds--code--code-block] {
              background-image: ${(0,i.u)({background:(0,l.Z)({light:"var(--ds-background-neutral, rgb(235, 237, 240))",dark:"var(--ds-background-neutral, rgb(36, 47, 66))"})(e),leftCoverWidth:3*(0,u.ww)()+"px"})}!important;

              background-color: ${(0,l.Z)({light:"var(--ds-background-neutral, rgb(235, 237, 240))",dark:"var(--ds-background-neutral, rgb(36, 47, 66))"})(e)}!important;

              // selector lives inside @atlaskit/code
              --ds--code--line-number-bg-color: ${(0,l.Z)({light:"var(--ds-background-neutral, rgb(226, 229, 233))",dark:`var(--ds-background-neutral, ${s.JV})`})(e)};
            }
          }
        }
      }
    }
  }
`,b=(e,t,r=!0)=>{switch(e){case"full-width":return t?`${Math.min(t-(r?a._2:0),a.zJ)}px`:`${a.zJ}px`;case"wide":return t?`${Math.min(t-(r?a._2:0),a.uz)}px`:`${a.uz}px`;default:return"inherit"}}},492503:(e,t,r)=>{"use strict";r.d(t,{o:()=>a,L:()=>i});var n=r(321534),o=r(404510);const a={DECISION_CONTAINER:"decisionItemView-content-wrap"},i=n.iv`
  .ProseMirror {
    .taskItemView-content-wrap,
    .${a.DECISION_CONTAINER} {
      position: relative;
      min-width: ${o.cw}px;
    }

    .${a.DECISION_CONTAINER} {
      margin-top: 0;
    }
  }

  div[data-task-list-local-id] {
    margin: 12px 0 0 0;
  }

  // If task list is first in the document then set margin top to zero.
  div[data-task-list-local-id]:first-child,
  style:first-child + div[data-task-list-local-id] {
    margin-top: 0;
  }

  div[data-task-list-local-id] div[data-task-list-local-id] {
    margin-top: 0px;
    margin-left: 24px;
  }
`},369585:(e,t,r)=>{"use strict";r.d(t,{E:()=>n});const n=r(321534).iv`
  .fabric-text-color-mark {
    color: var(--custom-palette-color, inherit);
  }

  a .fabric-text-color-mark {
    color: unset;
  }
`},246847:(e,t,r)=>{"use strict";r.d(t,{u:()=>n});const n=r(321534).iv`
  word-wrap: break-word;
  white-space: pre-wrap;
`},369396:(e,t,r)=>{"use strict";let n;r.d(t,{As:()=>n}),function(e){e.ASC="asc",e.DESC="desc",e.NO_ORDER="no_order"}(n||(n={}))},905843:(e,t,r)=>{"use strict";r.d(t,{p0:()=>u,Yu:()=>p});var n=r(122551),o=r(843993),a=r(404510),i=r(529845),s=r(676424),l=r(152933);function u(e){switch(e){case"M":return 760;case"L":return 850;default:return 680}}function d({baseFontSize:e,children:t}){const{mode:r}=(0,i.m)(),l=(0,n.useMemo)((()=>({baseFontSize:e||(0,s.JB)(),layoutMaxWidth:a.re,[s.GV]:{mode:r}})),[e,r]);return n.createElement(o.a,{theme:l},t)}function p({children:e,baseFontSize:t}){return n.createElement(l.mP,null,(({breakpoint:r})=>n.createElement(d,{breakpoint:r,baseFontSize:t},n.createElement(n.Fragment,null,e))))}},650516:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(953307),o=r(122551),a=r(321534),i=r(603494),s=r(131436);const l=(0,r(464984).defineMessages)({placeholder:{id:"fabric.editor.captionPlaceholder",defaultMessage:"Add a caption"}}),u=a.iv`
  margin-top: 8px;
  text-align: center;
  position: relative;
  color: ${`var(--ds-text-subtle, ${s.zN})`};
`,d=a.iv`
  color: ${`var(--ds-text-subtlest, ${s.iw})`};
  position: absolute;
  top: 0;
  width: 100%;
`;class p extends o.Component{render(){const{selected:e,hasContent:t,children:r,dataAttributes:o,intl:{formatMessage:i}}=this.props,s=!e&&!t;return(0,a.tZ)("div",(0,n.Z)({"data-media-caption":!0,"data-testid":"media-caption"},o,{css:u}),s?(0,a.tZ)("p",{css:d},i(l.placeholder)):null,r)}}p.displayName="CaptionComponent";const c=(0,i.ZP)(p)},586110:(e,t,r)=>{"use strict";r.d(t,{G:()=>i});var n=r(29298),o=r(122551),a=r(609115);class i extends o.Component{constructor(...e){super(...e),(0,n.Z)(this,"state",{missingIntlProviderInAncestry:!1})}componentDidCatch(e,t){if(!(null==(r=e)||null===(n=r.toString())||void 0===n?void 0:n.includes("<IntlProvider> needs to exist in the component ancestry")))throw e;var r,n;this.setState({missingIntlProviderInAncestry:!0})}render(){return this.state.missingIntlProviderInAncestry?o.createElement(a.Z,{locale:"en"},this.props.children):this.props.children}}i.displayName="IntlErrorBoundary"},269337:(e,t,r)=>{"use strict";r.d(t,{$:()=>s,Z:()=>l});var n=r(953307),o=r(29298),a=r(122551),i=r(818006);const s={RIGHT_SHADOW:"right-shadow",LEFT_SHADOW:"left-shadow"};function l(e,t){return class extends a.Component{constructor(...e){super(...e),(0,o.Z)(this,"overflowContainerWidth",0),(0,o.Z)(this,"state",{showLeftShadow:!1,showRightShadow:!1}),(0,o.Z)(this,"handleScroll",(e=>{this.overflowContainer&&e.target===this.overflowContainer&&!t.useShadowObserver&&this.updateShadows()})),(0,o.Z)(this,"updateShadows",(()=>{t.useShadowObserver||this.setState((e=>{if(!this.overflowContainer)return;const t=this.calcOverflowDiff(),r=t>0&&t>this.overflowContainer.scrollLeft,n=this.showLeftShadow(this.overflowContainer);return n!==e.showLeftShadow||r!==this.state.showRightShadow?{showLeftShadow:n,showRightShadow:r}:null}))})),(0,o.Z)(this,"showLeftShadow",(e=>!!e&&e.scrollLeft>0)),(0,o.Z)(this,"calcOverflowDiff",(()=>this.overflowContainer?(this.diff=this.calcScrollableWidth(),this.diff-this.overflowContainer.offsetWidth):0)),(0,o.Z)(this,"calcScrollableWidth",(()=>{if(!this.scrollable&&this.overflowContainer)return this.overflowContainer.scrollWidth;if(!this.scrollable)return 0;let e=0;for(let t=0;t<this.scrollable.length;t++){e+=this.scrollable[t].scrollWidth}return e})),(0,o.Z)(this,"handleContainer",(e=>{e&&!this.container&&(this.container=e,this.overflowContainer=e.querySelector(t.overflowSelector),this.overflowContainer||(this.overflowContainer=e),t.useShadowObserver?this.initShadowObserver():(this.updateShadows(),this.overflowContainer.addEventListener("scroll",this.handleScroll)))}))}componentWillUnmount(){if(t.useShadowObserver)return this.shadowObserver&&this.shadowObserver.dispose();this.overflowContainer&&this.overflowContainer.removeEventListener("scroll",this.handleScroll),this.updateShadows()}componentDidUpdate(){t.useShadowObserver||this.updateShadows()}initShadowObserver(){!this.shadowObserver&&this.overflowContainer&&(this.shadowObserver=new i.Xx({scrollContainer:this.overflowContainer,onUpdateShadows:e=>{this.setState((t=>{const{showLeftShadow:r,showRightShadow:n}=e;return r!==t.showLeftShadow||n!==t.showRightShadow?{showLeftShadow:r,showRightShadow:n}:null}))}}))}render(){const{showLeftShadow:r,showRightShadow:o}=this.state;let l=[o&&s.RIGHT_SHADOW,r&&s.LEFT_SHADOW,t.useShadowObserver&&i.S4.SHADOW_CONTAINER].filter(Boolean).join(" ");return a.createElement(e,(0,n.Z)({handleRef:this.handleContainer,shadowClassNames:l},this.props))}}}},818006:(e,t,r)=>{"use strict";r.d(t,{S4:()=>a,Xx:()=>i});var n=r(29298);let o;!function(e){e.SHOW_LEFT_SHADOW="showLeftShadow",e.SHOW_RIGHT_SHADOW="showRightShadow"}(o||(o={}));const a={SENTINEL_LEFT:"sentinel-left",SENTINEL_RIGHT:"sentinel-right",SHADOW_CONTAINER:"with-shadow-observer"};class i{constructor({scrollContainer:e,onUpdateShadows:t}){(0,n.Z)(this,"sentinels",{}),(0,n.Z)(this,"shadowStates",{[o.SHOW_LEFT_SHADOW]:!1,[o.SHOW_RIGHT_SHADOW]:!1}),(0,n.Z)(this,"init",(()=>{this.scrollContainer&&!this.intersectionObserver&&(this.sentinels.right=document.createElement("div"),this.sentinels.right.classList.add(a.SENTINEL_RIGHT),this.scrollContainer.appendChild(this.sentinels.right),this.sentinels.left=document.createElement("div"),this.sentinels.left.classList.add(a.SENTINEL_LEFT),this.scrollContainer.prepend(this.sentinels.left),this.intersectionObserver=new IntersectionObserver(((e,t)=>{e.forEach(this.onIntersect)}),{root:this.scrollContainer}),this.intersectionObserver.observe(this.sentinels.left),this.intersectionObserver.observe(this.sentinels.right))})),(0,n.Z)(this,"onIntersect",(e=>{var t;this.requestCallbackId=(t=()=>{e.target.classList.contains(a.SENTINEL_LEFT)&&(this.shadowStates[o.SHOW_LEFT_SHADOW]=!e.isIntersecting),e.target.classList.contains(a.SENTINEL_RIGHT)&&(this.shadowStates[o.SHOW_RIGHT_SHADOW]=!e.isIntersecting),this.onUpdateShadows(this.shadowStates)},window.requestIdleCallback?window.requestIdleCallback(t):window.requestAnimationFrame(t))})),this.scrollContainer=e,this.onUpdateShadows=t,this.init()}dispose(){var e;this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0,this.requestCallbackId&&(e=this.requestCallbackId,window.cancelIdleCallback?window.cancelIdleCallback(e):window.cancelAnimationFrame(e)))}}},720265:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(122551),o=r(321534),a=r(603494),i=r(404510),s=r(369642),l=r(131436),u=r(676424),d=r(112261),p=r(959557),c=r(655744),m=r(408798),h=r(290066);const E=o.iv`
  background: ${`var(--ds-background-disabled, ${l.gt})`};
  border: 1px dashed ${`var(--ds-border-disabled, ${l.uv})`};
  border-radius: ${(0,u.E0)()}px;
  box-sizing: border-box;
  cursor: default;
  display: flex;
  font-size: ${(0,i.Gh)((0,u.JB)())};
  margin: 10px 0;
  min-height: 24px;
  padding: 10px;
  text-align: center;
  vertical-align: text-bottom;
  min-width: 120px;
  align-items: center;
  justify-content: center;
`,y=(0,a.ZP)((({node:e,intl:t,dispatchAnalyticsEvent:r})=>{const a=(0,h.B)(c.x.unsupportedBlockContent,c.x.unsupportedBlockContent.defaultMessage+":",e,t),i=t.formatMessage(c.x.unsupportedContentTooltip),{current:l}=(0,n.useRef)({padding:"4px"}),u=null==e?void 0:e.attrs.originalValue.type,y=(0,n.useCallback)((()=>r&&(0,m.u9)(r,p.VJ.ON_UNSUPPORTED_BLOCK,u)),[r,u]);return(0,o.tZ)("div",{css:E,className:"unsupported"},a,(0,o.tZ)(d.Z,{content:i,hideTooltipOnClick:!1,position:"bottom",onShow:y,strategy:"absolute"},(0,o.tZ)("span",{style:l},(0,o.tZ)(s.default,{label:"?",size:"small"}))))}))},831014:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(122551),o=r(321534),a=r(603494),i=r(404510),s=r(369642),l=r(131436),u=r(676424),d=r(112261),p=r(959557),c=r(655744),m=r(408798),h=r(290066);const E=o.iv`
  align-items: center;
  background: ${`var(--ds-background-disabled, ${l.gt})`};
  border: 1px dashed ${`var(--ds-border-disabled, ${l.uv})`};
  border-radius: ${(0,u.E0)()}px;
  box-sizing: border-box;
  cursor: default;
  display: inline-flex;
  font-size: ${(0,i.Gh)((0,u.JB)())};
  margin: 0 2px;
  min-height: 24px;
  padding: 0 10px;
  vertical-align: middle;
  white-space: nowrap;
`,y=(0,a.ZP)((({node:e,intl:t,dispatchAnalyticsEvent:r})=>{const a=(0,h.B)(c.x.unsupportedInlineContent,"Unsupported",e,t),i=t.formatMessage(c.x.unsupportedContentTooltip),{current:l}=(0,n.useRef)({padding:"4px"}),u=null==e?void 0:e.attrs.originalValue.type,y=(0,n.useCallback)((()=>r&&(0,m.u9)(r,p.VJ.ON_UNSUPPORTED_INLINE,u)),[r,u]);return(0,o.tZ)("span",{css:E},a,(0,o.tZ)(d.Z,{content:i,hideTooltipOnClick:!1,position:"bottom",onShow:y,strategy:"absolute"},(0,o.tZ)("span",{style:l},(0,o.tZ)(s.default,{label:"?",size:"small"}))))}))},152933:(e,t,r)=>{"use strict";r.d(t,{iu:()=>l,iF:()=>m,mP:()=>c});var n=r(29298),o=r(122551),a=r(321534),i=r(24360),s=r(731151);function l(e=0){return e>=1266&&e<2146?"M":e>=2146?"L":"S"}function u(e=0){return{width:e,breakpoint:l(e)}}const d=o.createContext(u()),{Provider:p,Consumer:c}=d;class m extends o.Component{constructor(e){super(e),(0,n.Z)(this,"state",{width:0}),(0,n.Z)(this,"setWidth",(0,i.Z)((e=>{Math.abs(this.state.width-e)<30||this.setState({width:e})}))),this.state.width=document.body.offsetWidth}render(){return(0,a.tZ)("div",{css:a.iv`
          position: relative;
          width: 100%;
        `,className:this.props.className},(0,a.tZ)(s.K,{setWidth:this.setWidth,offscreen:!0}),(0,a.tZ)(p,{value:u(this.state.width)},this.props.children))}}m.displayName="WidthProvider"},956160:(e,t,r)=>{"use strict";r.d(t,{O:()=>o});var n=r(122551);const o=(0,r(644960).Z)()(class extends n.Component{render(){const{render:e,createAnalyticsEvent:t}=this.props;return e(t)}})},290066:(e,t,r)=>{"use strict";function n(e,t,r,n){let o=!0,a=n?n.locale:"en",i=e.defaultMessage;if(r&&a.startsWith("en")){const{originalValue:e}=r.attrs;e.text||e.attrs&&e.attrs.text?(i=e.text?e.text:e.attrs.text,o=!1):e.type&&(i=`${t} ${e.type}`,o=!1)}return n&&o?n.formatMessage(e):i}r.d(t,{B:()=>n})},751050:(e,t,r)=>{"use strict";r.d(t,{$L:()=>o,a$:()=>a,bI:()=>i,DQ:()=>s});var n=r(948492);const o=e=>{switch(e){case"full-page":return n.Dj.FIXED_WIDTH;case"full-width":return n.Dj.FULL_WIDTH;case"comment":return n.Dj.COMMENT;case"chromeless":return n.Dj.CHROMELESS;case"mobile":return n.Dj.MOBILE}},a=(e,t,r)=>e>t&&e<=r?i.DEGRADED:e>r?i.BLOCKING:i.NORMAL;let i;!function(e){e.NORMAL="normal",e.DEGRADED="degraded",e.BLOCKING="blocking"}(i||(i={}));const s="EDITOR_ANALYTICS_EVENT"},604164:(e,t,r)=>{"use strict";r.d(t,{h:()=>n,_:()=>o});const n=(e,t,r)=>{const{from:n,to:o}=e;if(isNaN(n+o)||o-n<=0||o<0||n<0)return!1;let a=!1;return t.nodesBetween(e.from,e.to,((e,t,n)=>r.nodes.hardBreak!==e.type&&(!(e.isInline&&!e.isText||e.isLeaf&&!e.isText||e.isText&&!n.type.allowsMarkType(r.marks.annotation))||(a=!0,!1)))),!a},o=(e,t,r)=>{const{from:n,to:o}=e;let a=new Set;return t.nodesBetween(n,o,(e=>!e.marks||(e.marks.forEach((e=>{e.type===r.marks.annotation&&e.attrs&&a.add(e.attrs.id)})),!0))),Array.from(a)}},160752:(e,t,r)=>{"use strict";r.d(t,{A9:()=>l,Z7:()=>s,HV:()=>u,rW:()=>d,wV:()=>p,mV:()=>c});var n=r(404510),o=r(905843),a=r(152933),i=r(815724);const s={padding:n._2,defaultLayoutWidth:n.re,wideScaleRatio:n.kI,fullWidthLayoutWidth:n.zJ,wideLayoutWidth:n.uz,mapBreakpointToLayoutMaxWidth:o.p0,getBreakpoint:a.iu,calcBreakoutWidth:(e,t)=>{const r=t-s.padding;switch(e){case"full-width":return`${Math.min(r,s.fullWidthLayoutWidth)}px`;case"wide":return s.calcWideWidth(t);default:return"100%"}},calcLineLength:()=>s.defaultLayoutWidth,calcWideWidth:(e=s.defaultLayoutWidth,t=1/0,r="100%")=>{const n=e-s.padding,o=s.mapBreakpointToLayoutMaxWidth(s.getBreakpoint(e)),a=Math.min(Math.ceil(o*s.wideScaleRatio),n);return o>a?r:`${Math.min(t,a)}px`}},l=(e,t)=>{const r=s.calcBreakoutWidth(e,t);if(r.endsWith("%"))switch(e){case"full-width":return n.zJ;case"wide":return n.uz;default:return s.mapBreakpointToLayoutMaxWidth(s.getBreakpoint(t))}return parseInt(r,10)},u=s.calcWideWidth,d=s.calcBreakoutWidth;function p({mode:e,widthStateLineLength:t,widthStateWidth:r}){const n=d(e,r),o=(0,i.AY)(n);if(!t)return{type:"line-length-unknown",width:n,transform:"translateX(-50%)",marginLeft:"50%"};return{type:"line-length-known",width:n,marginLeft:`${-(o-t)/2}px`}}function c(e,t){return(0,i.AY)(d(e,t))}},502094:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});const n={mac:!1,ie:!1,ie_version:0,gecko:!1,gecko_version:0,chrome:!1,chrome_version:0,android:!1,ios:!1,webkit:!1,safari:!1,safari_version:0,supportsIntersectionObserver:!1,supportsResizeObserver:!1};if("undefined"!=typeof navigator){const e=/Edge\/(\d+)/.exec(navigator.userAgent),t=/MSIE \d/.test(navigator.userAgent),r=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);n.mac=/Mac/.test(navigator.platform);let o=n.ie=!!(t||r||e);n.ie_version=t?document.documentMode||6:r?+r[1]:e?+e[1]:null,n.gecko=!o&&/gecko\/\d/i.test(navigator.userAgent),n.gecko_version=parseInt((navigator.userAgent.match(/Firefox\/(\d+)/)||[])[1],10),n.chrome=!o&&/Chrome\//.test(navigator.userAgent),n.chrome_version=parseInt((navigator.userAgent.match(/Chrome\/(\d+)/)||[])[1],10),n.android=/Android \d/.test(navigator.userAgent),n.ios=!o&&/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),n.webkit=!o&&!!document.documentElement&&"WebkitAppearance"in document.documentElement.style,n.safari=Boolean(navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS")),n.safari_version=parseInt((navigator.userAgent.match(/Version\/([0-9\._]+).*Safari/)||[])[1],10),n.supportsIntersectionObserver="undefined"!=typeof window&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,n.supportsResizeObserver="undefined"!=typeof window&&"ResizeObserver"in window&&"ResizeObserverEntry"in window}const o=n},951450:(e,t,r)=>{"use strict";r.d(t,{zR:()=>s});var n=r(369396);let o;function a(e){if(function(e){const[t]=e.marks.filter((e=>"link"===e.type.name));return t||null}(e)){const t=e.text||"";return{type:o.LINK,value:t}}const t=function(e){if(!Intl||!Intl.Segmenter){const t=e.indexOf(" ");return-1!==t?e.substring(0,t):e}const t=new Intl.Segmenter(window.navigator.language,{granularity:"word"}).segment(e);if(!t)return e;const r=Array.from(t);return 0===r.length?e:r[0].segment}(e.text||""),r=function(e){if(""===e.trim())return null;const t=window.navigator.language,r=Intl.NumberFormat(t).format(11111).replace(/[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19\u{10107}-\u{10133}\u{10140}-\u{10178}\u{1018A}\u{1018B}\u{102E1}-\u{102FB}\u{10320}-\u{10323}\u{10341}\u{1034A}\u{103D1}-\u{103D5}\u{104A0}-\u{104A9}\u{10858}-\u{1085F}\u{10879}-\u{1087F}\u{108A7}-\u{108AF}\u{108FB}-\u{108FF}\u{10916}-\u{1091B}\u{109BC}\u{109BD}\u{109C0}-\u{109CF}\u{109D2}-\u{109FF}\u{10A40}-\u{10A48}\u{10A7D}\u{10A7E}\u{10A9D}-\u{10A9F}\u{10AEB}-\u{10AEF}\u{10B58}-\u{10B5F}\u{10B78}-\u{10B7F}\u{10BA9}-\u{10BAF}\u{10CFA}-\u{10CFF}\u{10D30}-\u{10D39}\u{10E60}-\u{10E7E}\u{10F1D}-\u{10F26}\u{10F51}-\u{10F54}\u{10FC5}-\u{10FCB}\u{11052}-\u{1106F}\u{110F0}-\u{110F9}\u{11136}-\u{1113F}\u{111D0}-\u{111D9}\u{111E1}-\u{111F4}\u{112F0}-\u{112F9}\u{11450}-\u{11459}\u{114D0}-\u{114D9}\u{11650}-\u{11659}\u{116C0}-\u{116C9}\u{11730}-\u{1173B}\u{118E0}-\u{118F2}\u{11950}-\u{11959}\u{11C50}-\u{11C6C}\u{11D50}-\u{11D59}\u{11DA0}-\u{11DA9}\u{11FC0}-\u{11FD4}\u{12400}-\u{1246E}\u{16A60}-\u{16A69}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16E80}-\u{16E96}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D7CE}-\u{1D7FF}\u{1E140}-\u{1E149}\u{1E2F0}-\u{1E2F9}\u{1E8C7}-\u{1E8CF}\u{1E950}-\u{1E959}\u{1EC71}-\u{1ECAB}\u{1ECAD}-\u{1ECAF}\u{1ECB1}-\u{1ECB4}\u{1ED01}-\u{1ED2D}\u{1ED2F}-\u{1ED3D}\u{1F100}-\u{1F10C}\u{1FBF0}-\u{1FBF9}]/gu,""),n=Intl.NumberFormat(t).format(1.1).replace(/[0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19\u{10107}-\u{10133}\u{10140}-\u{10178}\u{1018A}\u{1018B}\u{102E1}-\u{102FB}\u{10320}-\u{10323}\u{10341}\u{1034A}\u{103D1}-\u{103D5}\u{104A0}-\u{104A9}\u{10858}-\u{1085F}\u{10879}-\u{1087F}\u{108A7}-\u{108AF}\u{108FB}-\u{108FF}\u{10916}-\u{1091B}\u{109BC}\u{109BD}\u{109C0}-\u{109CF}\u{109D2}-\u{109FF}\u{10A40}-\u{10A48}\u{10A7D}\u{10A7E}\u{10A9D}-\u{10A9F}\u{10AEB}-\u{10AEF}\u{10B58}-\u{10B5F}\u{10B78}-\u{10B7F}\u{10BA9}-\u{10BAF}\u{10CFA}-\u{10CFF}\u{10D30}-\u{10D39}\u{10E60}-\u{10E7E}\u{10F1D}-\u{10F26}\u{10F51}-\u{10F54}\u{10FC5}-\u{10FCB}\u{11052}-\u{1106F}\u{110F0}-\u{110F9}\u{11136}-\u{1113F}\u{111D0}-\u{111D9}\u{111E1}-\u{111F4}\u{112F0}-\u{112F9}\u{11450}-\u{11459}\u{114D0}-\u{114D9}\u{11650}-\u{11659}\u{116C0}-\u{116C9}\u{11730}-\u{1173B}\u{118E0}-\u{118F2}\u{11950}-\u{11959}\u{11C50}-\u{11C6C}\u{11D50}-\u{11D59}\u{11DA0}-\u{11DA9}\u{11FC0}-\u{11FD4}\u{12400}-\u{1246E}\u{16A60}-\u{16A69}\u{16B50}-\u{16B59}\u{16B5B}-\u{16B61}\u{16E80}-\u{16E96}\u{1D2E0}-\u{1D2F3}\u{1D360}-\u{1D378}\u{1D7CE}-\u{1D7FF}\u{1E140}-\u{1E149}\u{1E2F0}-\u{1E2F9}\u{1E8C7}-\u{1E8CF}\u{1E950}-\u{1E959}\u{1EC71}-\u{1ECAB}\u{1ECAD}-\u{1ECAF}\u{1ECB1}-\u{1ECB4}\u{1ED01}-\u{1ED2D}\u{1ED2F}-\u{1ED3D}\u{1F100}-\u{1F10C}\u{1FBF0}-\u{1FBF9}]/gu,""),o=Number(e.replace(new RegExp("\\"+r,"g"),"").replace(new RegExp("\\"+n),"."));return Number.isNaN(o)?null:o}(t);return null!==r?{type:o.NUMBER,value:r}:{type:o.TEXT,value:t}}function i(e,t){if(!e)return null;const r=e.firstChild;if(!r)return null;switch(r.type.name){case"heading":case"paragraph":return i(r,t);case"inlineCard":{const e=r.attrs,n=t.getInlineCardTextFromStore(e);if(n)return{type:o.LINK,value:n};const a=e.url;return{type:o.LINK,value:a||""}}case"text":return a(r);case"status":{const e=r.attrs.text;return{type:o.STATUS,value:e}}case"date":{const e=Number.parseInt(r.attrs.timestamp,20);return{type:o.DATE,value:e}}case"mention":{const e=r.attrs.text||"";return{type:o.MENTION,value:e.toLowerCase()}}default:return null}}!function(e){e[e.NUMBER=0]="NUMBER",e[e.TEXT=5]="TEXT",e[e.MENTION=10]="MENTION",e[e.DATE=15]="DATE",e[e.STATUS=20]="STATUS",e[e.LINK=25]="LINK"}(o||(o={}));const s=(e,t=n.As.ASC)=>(r,o)=>{const a=i(r,e),s=i(o,e);return null===a||null===s?l(a,s):(t===n.As.DESC?-1:1)*l(a,s)};function l(e,t){return e===t?0:null===e||null===t?null===t?-1:1:e.type!==t.type?e.type>t.type?1:-1:(r=e.value,n=t.value,r===n?0:"string"==typeof r&&"string"==typeof n?r.localeCompare(n,window.navigator.language,{caseFirst:"upper"}):r>n?1:-1);var r,n}},815724:(e,t,r)=>{"use strict";function n(e,t){let r=e;for(;r&&r.parentElement&&!t(r);)r=r.parentElement;return r}function o(e,t){const r=document.createDocumentFragment();Array.from(t.children).forEach((e=>{r.appendChild(e)})),e.replaceChild(r,t)}function a(e){for(;e.parentElement&&0===e.childElementCount&&""===e.textContent;){const t=e.parentElement;t.removeChild(e),e=t}}r.d(t,{Oh:()=>n,Wg:()=>o,G7:()=>a,tn:()=>i,oq:()=>s,pE:()=>l,AY:()=>u,FR:()=>d});const i=(e,t)=>{if(!e)return!1;if(e.classList&&e.classList.contains)return e.classList.contains(t);if(!e.className)return!1;return-1!==("string"==typeof e.className.baseVal?e.className.baseVal:e.className).split(" ").indexOf(t)};function s(e,t){if(!e)return null;let r=e;if(!document.documentElement||!document.documentElement.contains(r))return null;if(r.closest)return r.closest(t);do{const e=r.matches?r.matches:r.msMatchesSelector;if(e&&e.call(r,t))return r;r=r.parentElement||r.parentNode}while(null!==r&&1===r.nodeType);return null}function l(e,t){return s(e,t)}function u(e){if(!e.endsWith("px"))return;const t=parseInt(e,10);return Number.isNaN(t)?void 0:t}function d(e,t){return function(e,t){const r=[];for(let n=0;n<e.childElementCount;n++)r.push(t(e.children[n],n,e));return r}(e,t)}},205455:(e,t,r)=>{"use strict";function n(e){return"object"==typeof e?e.render:e}r.d(t,{c:()=>n})},455374:(e,t,r)=>{"use strict";r.d(t,{hn:()=>n,Ah:()=>o,Px:()=>a});const n=e=>{const t=Number(e);if(!(Number.isNaN(t)||t<0))return Math.floor(Math.max(t,0))},o=e=>{var t,r;const o=null==e||null===(t=e.attrs)||void 0===t?void 0:t.order;return null!==(r=n(o))&&void 0!==r?r:1},a=e=>{var t,r,o,a;const i=null!==(t=n(e.order))&&void 0!==t?t:1,s="number"==typeof e.itemsCount?e.itemsCount:0;return null===(r=String(i+(s-1)))||void 0===r||null===(o=r.split("."))||void 0===o||null===(a=o[0])||void 0===a?void 0:a.length}},849764:(e,t,r)=>{"use strict";r.d(t,{n:()=>u});var n=r(122551),o=r(115861);const a=Object.keys,i=(e,t)=>{const r=null!==e?a(e):[],n=null!==t?a(t):[],o=r.filter((e=>!n.includes(e)));return{added:n.filter((e=>!r.includes(e))),common:r.filter((e=>n.includes(e))),removed:o}},s=e=>{const t=typeof e;return null===e?"null":void 0===e?"undefined":"string"===t||"number"===t?e:"symbol"===t?e.toString():"function"===t?`function:${e.name}`:"object"===t?{type:"object",keys:Object.keys(e)}:void 0},l=(e,t,r=0,o=2,a=[])=>{const{added:u,common:d,removed:p}=i(e,t),c=[];return d.forEach((i=>{const u=e[i],d=t[i],p=typeof u,m=typeof d;if(u!==d&&-1===a.indexOf(i))if(n.isValidElement(u)||n.isValidElement(d))c.push({key:i,reactElementChanged:!0});else if("object"===p&&"object"===m)if(r<=o){const e=l(u,d,r+1,o);c.push({key:i,difference:e})}else c.push({key:i,maxDepthReached:!0});else c.push({key:i,oldValue:s(u),newValue:s(d)})})),{added:u,changed:c,removed:p}};function u({onRender:e,propsDiffingOptions:t,zeroBasedCount:r=!0}){const a=(0,n.useRef)(),s=(0,n.useRef)(r?0:1),{current:u}=(0,n.useRef)(o.V.generate());(0,n.useEffect)((()=>{const r=a.current,n=s.current;let o;null!=t&&t.enabled&&r&&(o=null!=t&&t.useShallow?((e,t)=>{const{added:r,common:n,removed:o}=i(e,t);return{added:r,changed:n.filter((r=>e[r]!==t[r])),removed:o}})(r,t.props):l(r,t.props,0,2,null==t?void 0:t.propsToIgnore));e({renderCount:n,propsDifference:o,componentId:u}),null!=t&&t.enabled&&(a.current=t.props),s.current=s.current+1}))}},44104:(e,t,r)=>{"use strict";let n;function o(){return void 0===n&&(n="undefined"!=typeof window&&"performance"in window&&["measure","clearMeasures","clearMarks","getEntriesByName","getEntriesByType","now"].every((e=>!!performance[e]))),n}function a(){return!("undefined"==typeof window||!("PerformanceObserver"in window))}function i(){return a()&&PerformanceObserver.supportedEntryTypes&&PerformanceObserver.supportedEntryTypes.includes("longtask")}r.d(t,{D4:()=>o,bh:()=>a,nX:()=>i})},864950:(e,t,r)=>{"use strict";r.d(t,{W:()=>o,a:()=>a});var n=r(44104);function o(){let e="visible"!==document.visibilityState;function t(){"visible"!==document.visibilityState&&(e=!0)}return document.addEventListener("visibilitychange",t),{distortedDuration:e,cleanup(){document.removeEventListener("visibilitychange",t)}}}function a(e,t){if(!(0,n.D4)())return;const r=`[START]: ${e}`,a=`[END]: ${e}`,i=performance.now();performance.mark(r);let s=o();requestAnimationFrame((()=>{requestAnimationFrame((()=>{performance.mark(a),s.cleanup();const n=performance.now()-i;try{performance.measure(e,r,a);const o=performance.getEntriesByName(e).pop();t(o?{duration:o.duration,startTime:o.startTime,distortedDuration:s.distortedDuration}:{duration:n,startTime:i,distortedDuration:s.distortedDuration})}catch(o){t({duration:n,startTime:i,distortedDuration:s.distortedDuration})}performance.clearMeasures(e),performance.clearMarks(r),performance.clearMarks(a)}))}))}},146339:(e,t,r)=>{"use strict";r.d(t,{Ev:()=>a,w6:()=>d});var n=r(751050),o=r(44104);function a(e,t=1e3,r=60,n){if(!(0,o.nX)())return;const a=performance.now();let i,s={startTime:a,duration:0},l=1e3*r;const u=new(n||PerformanceObserver)((e=>{const t=e.getEntries();t.length&&(i=s,s=t[t.length-1])}));u.observe({entryTypes:["longtask"]});const d=()=>{const r=performance.now(),n=s.startTime+s.duration,o=i?i.startTime+i.duration:n;return i?s.startTime-o>=t?(u.disconnect(),e(o,o-a,l<=0)):r-n>=t||l<=0?(u.disconnect(),e(n,n-a,l<=0)):(l=Math.max(0,l-(r-a)),setTimeout(d,t)):(u.disconnect(),e(o,0,!1))};setTimeout(d,t)}const i=4e4,s=6e4,l=5e3,u=8e3;function d(e,t,r,o,a,d){const p=o||s;let c;c=e>=(r||i)&&e<p?n.bI.DEGRADED:e>=p?n.bI.BLOCKING:n.bI.NORMAL;const m=d||u;let h;return h=t>=(a||l)&&t<m?n.bI.DEGRADED:t>=m?n.bI.BLOCKING:n.bI.NORMAL,{ttiSeverity:c,ttiFromInvocationSeverity:h}}},808402:(e,t,r)=>{"use strict";r.d(t,{MZ:()=>a,H0:()=>i,Xf:()=>s});var n=r(44104);const o=new Map;function a(e){(0,n.D4)()&&(performance.mark(`${e}::start`),o.set(e,performance.now()))}function i(e,t){if(!(0,n.D4)())return;performance.mark(`${e}::end`);const r=t?o.get(e):void 0;try{performance.measure(e,`${e}::start`,`${e}::end`)}catch(a){}finally{if(t){const n=performance.getEntriesByName(e).pop();n?t(n.duration,n.startTime):r&&t(performance.now()-r,r)}s(e)}}function s(e){(0,n.D4)()&&(o.delete(e),performance.clearMarks(`${e}::start`),performance.clearMarks(`${e}::end`),performance.clearMeasures(e))}},535406:(e,t,r)=>{"use strict";r.d(t,{i:()=>o});var n=r(44104);function o(){if(!(0,n.D4)())return;const e=performance.getEntriesByType("navigation")[0];return e?e.responseEnd:void 0}},237137:(e,t,r)=>{"use strict";r.d(t,{p:()=>n});const n=()=>{try{const{FRONTEND_VERSION:e=""}=window.__buildInfo||{};return"product-fabric.atlassian.net"===window.location.hostname&&e.includes("branch-deploy")}catch(e){return console.warn(e),!1}}},895822:(e,t,r)=>{"use strict";function n(e){let t=[];const r=e.firstChild;return r&&r.forEach((e=>{let r=e.attrs.colwidth||[0];r&&(t=[...t,...r])})),t}function o(e){let t=!1;return e.descendants((e=>{if("tableRow"===e.type.name)return!0;const{colspan:r,rowspan:n}=e.attrs;return(r>1||n>1)&&(t=!0),!1})),t}function a(e){const t=[];return e.forEach((e=>{if("tableRow"===e.type.name){const r=[];e.forEach((e=>r.push(e))),t.push(r)}})),t}r.d(t,{gf:()=>n,Ak:()=>o,oc:()=>a})},408798:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s,p$:()=>l,u9:()=>u});var n=r(991332),o=r(959557);const a=["align","annotationType","extensionKey","extensionType","layout","type","localId","mode","language","timestamp","state","originalWidth","originalHeight","height","width","shortName","level","userType","order","panelType","color","style","isNumberColumnEnabled","colspan","rowspan","colwidth","background"];const i=(e={})=>{let t=Object.assign({},e);return Object.keys(e).filter((e=>!a.includes(e))).forEach((e=>{null!==t[e]?t[e]="":t[e]="null"})),t},s=(e,t,r,n="")=>{const{type:a,marks:i}=e,{unsupportedMark:u,unsupportedNodeAttribute:d}=t.marks,{unsupportedInline:p,unsupportedBlock:c}=t.nodes,m=n.split(" ").pop()||"";if(i.length&&i.forEach((e=>{if(e.type===u){const{originalValue:t}=e.attrs||{},{type:a}=t||{},i={type:a||"",ancestry:n,parentType:m,marks:[],attrs:t.attrs||{}};l(r,o.VJ.UNSUPPORTED_MARK,i)}else if(e.type===d){const{unsupported:t}=e.attrs||{},i={type:a.name||"",ancestry:n,parentType:m,marks:[],attrs:t||{}};l(r,o.VJ.UNSUPPORTED_NODE_ATTRIBUTE,i)}})),a===p||a===c){const{originalValue:t}=e.attrs||{},{marks:i}=t||[],{attrs:s}=t||{},{type:u}=t||{},d={type:u||"",ancestry:n,parentType:m,marks:i||[],attrs:s||{}},c=a===p?o.VJ.UNSUPPORTED_INLINE:o.VJ.UNSUPPORTED_BLOCK;l(r,c,d)}else e.content.forEach((o=>s(o,t,r,function(e,t){const{name:r}=e.type;return t?`${t} ${r}`:r}(e,n))))},l=(e,t,r,a)=>{const s=i(r.attrs),l=((e=[])=>{let t=[];return e.forEach((e=>{if(e.attrs){const r=i(e.attrs);t.push((0,n.Z)((0,n.Z)({},e),{},{attrs:r}))}else t.push((0,n.Z)({},e))})),t})(r.marks),u={type:r.type,ancestry:r.ancestry,parentType:r.parentType,attrs:s,marks:l};e({action:o.om.UNSUPPORTED_CONTENT_ENCOUNTERED,actionSubject:o.Wt.DOCUMENT,actionSubjectId:t,attributes:(0,n.Z)({unsupportedNode:u},!!a&&{errorCode:a}),eventType:o.Ze.TRACK})},u=(e,t,r)=>{((e,t,r,n)=>{t({action:e,actionSubjectId:r,actionSubject:o.Wt.TOOLTIP,eventType:o.Ze.UI,attributes:{unsupportedNodeType:n}})})(o.om.UNSUPPORTED_TOOLTIP_VIEWED,e,t,r)}},102903:(e,t,r)=>{"use strict";r.d(t,{gh:()=>d});var n=r(618730),o=r(959557),a=r(408798);const i="unsupportedNodeAttribute",s=(e,t,r)=>(n,o,a)=>l(n,o,a,e,t,r),l=(e,t,r,n,o,a)=>{if(e&&e.type===i)return e;if(r.isMark)return p(t.meta,"mark");if(r.isNodeAttribute){const r=e&&e.type?e.type:void 0;return{type:i,attrs:{type:{nodeType:r},unsupported:t.meta}}}if(!(e&&n.indexOf(e.type)>-1)){if("MISSING_PROPERTIES"===t.code&&"paragraph"===e.type)return{type:"paragraph",content:[]};if("INVALID_CONTENT_LENGTH"===t.code){if(t.meta&&r.allowUnsupportedBlock&&e.content)return function(e,t,r,n,o){const a=e.meta;"maximum"===a.type&&(t.content=t.content.filter((e=>!!e)).map(((e,t)=>t>=a.requiredLength&&"unsupportedBlock"!==e.type?p(e):r(e,s(n,r,o)).entity)));if("minimum"===a.type){if(0===t.content.length)return p(t);t.content=t.content.filter((e=>!!e)).map((e=>"unsupportedBlock"!==e.type?p(e):e))}return t}(t,e,o,n,a);a&&u(a,t,e)}return r.allowUnsupportedBlock?p(e):r.allowUnsupportedInline?p(e,"inline"):(a&&u(a,t,e),e)}};function u(e,t,r){e&&(0,a.p$)(e,o.VJ.UNSUPPORTED_ERROR,{type:r.type||"",ancestry:r.ancestorHierarchy||"",parentType:r.parentType||"",marks:r.marks||[],attrs:r.attrs||{}},t.code)}const d=(e,t,r)=>{const o=Object.keys(e.nodes),a=Object.keys(e.marks),i=(0,n.s)(o,a,{allowPrivateAttributes:!0}),l={type:"doc",content:[]},{entity:u=l}=i(t,s(a,i,r));return u};function p(e,t="block"){let r;switch(t){case"inline":r="unsupportedInline";break;case"mark":r="unsupportedMark";break;default:r="unsupportedBlock"}return{type:r,attrs:{originalValue:e}}}},650388:(e,t,r)=>{"use strict";r.d(t,{K0:()=>te,l9:()=>ne,Rr:()=>pe,E2:()=>re});var n={};r.r(n),r.d(n,{PanelType:()=>A.w,blockCard:()=>V._,blockquote:()=>d.M,bodiedExtension:()=>P.H,bulletList:()=>p.i,bulletListSelector:()=>p.T,caption:()=>w.V,codeBlock:()=>c.F,codeBlockToJSON:()=>c.a,confluenceJiraIssue:()=>i.G,confluenceUnsupportedBlock:()=>s.S,confluenceUnsupportedInline:()=>l.O,copyPrivateMediaAttributes:()=>N.vD,date:()=>$.h,decisionItem:()=>L.O,decisionList:()=>S.w,decisionListSelector:()=>S.i,doc:()=>u.J,embedCard:()=>j._,emoji:()=>g.r,expand:()=>a.j,expandToJSON:()=>a.a,extension:()=>B.A,getCellAttrs:()=>D.sG,getCellDomAttrs:()=>D.EE,hardBreak:()=>m.l,heading:()=>h.n,image:()=>_.B,inlineCard:()=>W.D,inlineExtension:()=>F.m,layoutColumn:()=>H.H,layoutSection:()=>U.I,layoutSectionWithSingleColumn:()=>U.C,listItem:()=>b.q,media:()=>N.BC,mediaGroup:()=>I._,mediaInline:()=>C.j,mediaSingle:()=>O.yC,mediaSingleToJSON:()=>O.au,mediaSingleWithCaption:()=>O.t2,mediaToJSON:()=>N.au,mention:()=>T.Pl,mentionToJSON:()=>T.au,nestedExpand:()=>z.K,orderedList:()=>y.dq,orderedListSelector:()=>y.Us,orderedListWithOrder:()=>y.AG,panel:()=>A.B,paragraph:()=>f.A,placeholder:()=>M.W,rule:()=>E.j,status:()=>Z.i,table:()=>D.Kz,tableBackgroundBorderColor:()=>D.KS,tableBackgroundColorNames:()=>D.XX,tableBackgroundColorPalette:()=>D.R_,tableCell:()=>D.K5,tableCellContentDomSelector:()=>D.Z4,tableCellContentWrapperSelector:()=>D.bu,tableCellSelector:()=>D.fY,tableHeader:()=>D.Rt,tableHeaderSelector:()=>D.Vz,tablePrefixSelector:()=>D.Yf,tableRow:()=>D.RL,tableToJSON:()=>D.oc,taskItem:()=>x.p,taskList:()=>R.o,taskListSelector:()=>R.K,text:()=>v.f,toJSONTableCell:()=>D.pp,toJSONTableHeader:()=>D.Ae,unknownBlock:()=>k.Z,unsupportedBlock:()=>G.V,unsupportedInline:()=>K.X});var o=r(991332),a=r(535036),i=r(918861),s=r(845142),l=r(497256),u=r(427115),d=r(761558),p=r(667066),c=r(212229),m=r(443344),h=r(168325),E=r(728226),y=r(628866),f=r(958952),g=r(669337),_=r(618315),T=r(580919),b=r(345427),A=r(138160),v=r(19617),k=r(688114),w=r(426600),N=r(252237),I=r(682721),C=r(154162),O=r(518750),D=r(222680),S=r(411500),L=r(811754),R=r(808277),x=r(592955),B=r(581006),F=r(813334),P=r(362218),$=r(207319),M=r(228992),U=r(123450),H=r(527899),W=r(256576),V=r(933847),G=r(613210),K=r(75460),Z=r(26580),z=r(843681),j=r(547346);const Y=n,X=new Set(Object.keys(Y).filter((e=>Y[e]&&"inline"===Y[e].group)));var q=r(85149),J=r(115861),Q=r(295648);const ee=["fragment","link","em","strong","textColor","strike","subsup","underline","code","confluenceInlineComment","annotation","dataConsumer"],te=e=>[...e].sort(((e,t)=>ee.indexOf(e.type.name)-ee.indexOf(t.type.name))),re=(e,t)=>!(!e||!t)&&e.eq(t),ne=(e,t=Q.R4,r="final")=>{const n=pe(e,t,r);return"doc"===n.type?(n.content=oe(n.content),n):null},oe=(e=[])=>e.map((e=>X.has(e.type)?{type:"paragraph",content:[e]}:e)),ae=/^#[0-9a-fA-F]{6}$/,ie=/^\//,se=/^#/,le=(e,t=Q.R4,r="final")=>{const n=[];let o=!1;for(let a=0;a<e.content.length;a++){const i=e.content[a],s=!(i.content&&i.content.length);a>0&&(o?n.push({type:"text",text:" "}):n.push({type:"hardBreak"})),s?n.push(pe(i,t,r)):n.push(...le(i,t,r)),o=s}return n},ue=e=>{const{attrs:t={},content:r,text:n,type:o}=e;if(!r||!r.length){const e={type:"text",text:n||t.text||`[${o}]`},{textUrl:r}=t;return r&&(0,q.w6)(r)&&(e.marks=[{type:"link",attrs:{href:r}}]),e}return{type:"unknownBlock",content:le(e)}},de=(e,t="final")=>e&&e.length>0?e.reduce(((e,r)=>{const n=ce(r,t);return n&&e.push(n),e}),[]):e,pe=(e,t=Q.R4,r="final")=>{const{attrs:n,marks:a,text:i,type:s}=e;let{content:l}=e;const u={attrs:n,marks:a,text:i,type:s};if(l&&(u.content=l=((e,t=Q.R4,r="final")=>e.map((e=>pe(e,t,r))))(l,t,r)),!t.nodes[s])return ue(u);if(s)switch(s){case"doc":{const{version:t}=e;if(t&&l&&l.length)return{type:s,content:l};break}case"codeBlock":return l&&(l=l.reduce(((e,t)=>("text"===t.type&&e.push({type:t.type,text:t.text}),e)),[])),n&&n.language?{type:s,attrs:n,content:l,marks:a}:{type:s,content:l,marks:a};case"date":if(n&&n.timestamp)return{type:s,attrs:n};break;case"status":if(n&&n.text&&n.color)return{type:s,attrs:n};break;case"emoji":if(n&&n.shortName)return{type:s,attrs:n};break;case"inlineExtension":case"extension":if(n&&n.extensionType&&n.extensionKey)return{type:s,attrs:n};break;case"inlineCard":case"blockCard":if(n&&(n.url&&(0,q.w6)(n.url)||n.data&&n.data.url&&(0,q.w6)(n.data.url)))return{type:s,attrs:n};break;case"embedCard":if(n&&(n.url&&(0,q.w6)(n.url)||n.data&&n.data.url&&(0,q.w6)(n.data.url))&&n.layout)return{type:s,attrs:n};break;case"bodiedExtension":if(n&&n.extensionType&&n.extensionKey&&l)return{type:s,attrs:n,content:l};break;case"hardBreak":return{type:s};case"caption":if(l)return{type:s,content:l};break;case"mediaInline":{let e="",t=[];if(n){const{id:r,collection:o}=n;e=r,t=o}if(e&&t)return{type:s,attrs:n,marks:a};break}case"media":{let e="",t="",o=[],i="";if(n){const{id:r,collection:a,type:s,url:l}=n;e=r,t=s,o=a,i=l}if("external"===t&&i){const e={type:t,url:i,width:n.width,height:n.height};return n.alt&&(e.alt=n.alt),{type:s,attrs:e}}if(e&&t){const i={type:t,id:e,collection:o};n.width&&(i.width=n.width),n.height&&(i.height=n.height),n.alt&&(i.alt=n.alt);const l=de(a,r);return l?{type:s,attrs:i,marks:l}:{type:s,attrs:i}}break}case"mediaGroup":if(Array.isArray(l)&&!l.some((e=>"media"!==e.type)))return{type:s,content:l};break;case"mediaSingle":{const e=Array.isArray(l)&&1===l.length&&"media"===l[0].type,t=Array.isArray(l)&&2===l.length&&"media"===l[0].type&&"caption"===l[1].type;if(e||t)return{type:s,attrs:n,content:l,marks:de(a,r)};break}case"mention":{let e,t,r="";if(n){const{text:o,displayName:a,id:i,accessLevel:s}=n;r=o||a,e=i,t=s}if(r||(r=i||"@unknown"),r&&e){const n={type:s,attrs:{id:e,text:r,accessLevel:""}};return t&&(n.attrs.accessLevel=t),n}break}case"paragraph":return a?{type:s,content:l||[],marks:a}:{type:s,content:l||[]};case"rule":return{type:s};case"text":{let{marks:e}=u;if(i)return e?{type:s,text:i,marks:de(e,r)}:{type:s,text:i};break}case"heading":if(n){const{level:e}=n,t=(e,t,r)=>e>=t&&e<=r;if(e&&t(e,1,6))return a?{type:s,content:l,marks:a,attrs:{level:e}}:{type:s,content:l,attrs:{level:e}}}break;case"bulletList":if(l)return{type:s,content:l};break;case"orderedList":if(l)return{type:s,content:l,attrs:{order:n&&n.order}};break;case"listItem":if(l)return{type:s,content:oe(l)};break;case"blockquote":if(l)return{type:s,content:l};break;case"panel":if(n&&l){const{panelType:e}=n;if(Object.values(A.w).includes(e))return{type:s,attrs:n,content:l}}break;case"layoutSection":if(l)return{type:s,marks:a,content:l};break;case"layoutColumn":if(n&&l&&n.width>0&&n.width<=100)return{type:s,content:l,attrs:n};break;case"decisionList":return{type:s,content:l,attrs:{localId:n&&n.localId||(0,J.R)()}};case"decisionItem":return{type:s,content:l,attrs:{localId:n&&n.localId||(0,J.R)(),state:n&&n.state||"DECIDED"}};case"taskList":return{type:s,content:l,attrs:{localId:n&&n.localId||(0,J.R)()}};case"taskItem":return{type:s,content:l,attrs:{localId:n&&n.localId||(0,J.R)(),state:n&&n.state||"TODO"}};case"table":if(Array.isArray(l)&&l.length>0&&!l.some((e=>"tableRow"!==e.type)))return"stage0"===r?{type:s,content:l,attrs:(0,o.Z)((0,o.Z)({},n),{},{localId:(null==n?void 0:n.localId)||(0,J.R)()})}:{type:s,content:l,attrs:n};break;case"tableRow":if(Array.isArray(l)&&l.length>0&&!l.some((e=>"tableCell"!==e.type&&"tableHeader"!==e.type)))return{type:s,content:l};break;case"tableCell":case"tableHeader":if(l){const e={};return n&&(n.colspan&&n.colspan>1&&(e.colspan=n.colspan),n.rowspan&&n.rowspan>1&&(e.rowspan=n.rowspan),n.background&&(e.background=n.background),n.colwidth&&Array.isArray(n.colwidth)&&(e.colwidth=n.colwidth)),{type:s,content:oe(l),attrs:n?e:void 0}}break;case"image":if(n&&n.src)return{type:s,attrs:n};break;case"placeholder":if(n&&void 0!==n.text)return{type:s,attrs:n};break;case"expand":case"nestedExpand":return{type:s,attrs:n,content:l,marks:a}}return ue(u)},ce=(e,t="final")=>{const{attrs:r,type:n}=e;if(n)switch(n){case"code":case"em":return{type:n};case"link":if(r){const{href:e,url:t,__confluenceMetadata:o}=r;let a=e||t;!a||-1!==a.indexOf(":")||ie.test(a)||se.test(a)||(a=`http://${a}`);const i={href:a};if(o&&(i.__confluenceMetadata=o),a&&(0,q.w6)(a))return{type:n,attrs:i}}break;case"strike":case"strong":return{type:n};case"subsup":if(r&&r.type){const e=r.type;if((e=>"sub"===e||"sup"===e)(e))return{type:n,attrs:{type:e}}}break;case"textColor":if(r&&ae.test(r.color))return{type:n,attrs:r};break;case"underline":return{type:n};case"annotation":return{type:n,attrs:r}}if("stage0"===t)switch(n){case"confluenceInlineComment":case"dataConsumer":case"fragment":return{type:n,attrs:r}}return null}},404510:(e,t,r)=>{"use strict";r.d(t,{Qd:()=>a,zd:()=>i,y:()=>s,DT:()=>l,Is:()=>u,Rt:()=>d,dY:()=>p,IB:()=>c,qv:()=>m,EG:()=>h,pX:()=>E,H5:()=>y,fO:()=>f,qR:()=>g,LI:()=>_,wX:()=>T,yV:()=>b,r0:()=>A,aE:()=>v,J1:()=>k,nm:()=>w,Zr:()=>N,k2:()=>I,nM:()=>C,cF:()=>O,aX:()=>D,Q9:()=>S,Zs:()=>L,SX:()=>R,Vt:()=>x,re:()=>B,uz:()=>F,zJ:()=>P,XV:()=>$,_2:()=>M,sF:()=>U,X$:()=>H,cw:()=>W,MJ:()=>V,D$:()=>G,sM:()=>K,Y3:()=>Z,Kv:()=>z,kI:()=>j,dA:()=>Y,qh:()=>X,pt:()=>q,Ht:()=>J,UO:()=>Q,zH:()=>ee,In:()=>te,_J:()=>re,Eg:()=>ne,ur:()=>oe,pV:()=>ae,Gh:()=>ie,iF:()=>se,GT:()=>le});var n=r(131436),o=r(676424);const a=16,i=(0,o.Vj)(),s=n.YS,l=n.YS,u=n.r6,d="rgba(255, 189, 173, 0.5)",p=n.rt,c=n.$H,m=20,h=n.M5,E=n.BA,y=1,f=`${y}px solid var(--ds-border-selected, ${h})`,g=`0 0 0 ${y}px var(--ds-border-selected, ${h})`,_=2,T=1,b=2,A=11,v=A+1,k=9999,w=o.ug.blanket(),N=o.ug.layer(),I=w+10,C=N+5,O=11,D=n.uv,S=n.nA,L=n.IR,R=n.H8,x=680,B=760,F=960,P=1800,$=42,M=96,U=32,H=720,W=48,V=128,G=12,K=4,Z="cubic-bezier(0.15, 1, 0.3, 1)",z=1024,j=1.33,Y=99*T,X=1.5*(0,o.ww)(),q=1.714,J=2,Q=320,ee="0.75rem",te=680,re=480,ne="56px",oe="ak-editor-selected-node",ae=({theme:e})=>e&&e.baseFontSize?e.baseFontSize:(0,o.JB)(),ie=e=>{if("string"==typeof e&&(e=parseInt(e)),isNaN(e))throw new Error(`Invalid font size: '${e}'`);return e/16+"rem"},se=0,le=[["White","#000000"],["Light blue","#0C294F"],["Light teal","#0C343B"],["Light green","#052E21"],["Light yellow","#484123"],["Light red","#441C13"],["Light purple","#282249"],["Light gray","#202328"],["Blue","#0B3165"],["Teal","#044853"],["Green","#053927"],["Yellow","#6F5C25"],["Red","#582013"],["Purple","#3E327B"],["Gray","#475262"],["Dark blue","#003884"],["Dark teal","#055866"],["Dark green","#044932"],["Dark yellow","#82641C"],["Dark red","#6B2A19"],["Dark purple","#4D38B2"]].map((([e,t])=>function(e,t){return`\n  &[colorname="${e}"] {\n    background-color: ${t} !important; // !important to override default style color\n  }\n  `}(e,t))).join("\n")},837557:(e,t,r)=>{"use strict";r.d(t,{u:()=>a});var n=r(321534),o=r(676424);const a=({background:e,width:t=`${(0,o.ww)()}px`,leftCoverWidth:r,rightCoverWidth:a})=>{const i=r||t,s=a||t;return n.iv`
/* shadow cover left */
  linear-gradient(
    to right,
    ${e} ${i},
    transparent ${i}
  ),
/* shadow cover background left */
  linear-gradient(
    to right,
    ${"var(--ds-surface-raised, transparent)"} ${i},
    transparent ${i}
  ),
/* shadow cover right */
  linear-gradient(
    to left,
    ${e} ${s},
    transparent ${s}
  ),
/* shadow cover background right */
  linear-gradient(
    to left,
    ${"var(--ds-surface-raised, transparent)"} ${s},
    transparent ${s}
  ),
/* overflow shadow right spread */
  linear-gradient(
    to left,
    ${"var(--ds-shadow-overflow-spread, rgba(9, 30, 66, 0.13))"} 0,
    ${"var(--ds-UNSAFE-transparent, rgba(99, 114, 130, 0))"}  ${t}
  ),
  /* overflow shadow right perimeter */
  linear-gradient(
    to left,
    ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0,
    ${"var(--ds-UNSAFE-transparent, transparent)"}  ${t}
  ),
  /* overflow shadow left spread */
  linear-gradient(
    to right,
    ${"var(--ds-shadow-overflow-spread, rgba(9, 30, 66, 0.13))"} 0,
    ${"var(--ds-UNSAFE-transparent, rgba(99, 114, 130, 0))"}  ${t}
  ),
  /* overflow shadow left perimeter */
  linear-gradient(
    to right,
    ${"var(--ds-shadow-overflow-perimeter, transparent)"} 0,
    ${"var(--ds-UNSAFE-transparent, transparent)"}  ${t}
  )
`}},274479:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=(n=r(122551))&&n.__esModule?n:{default:n},a=r(386056);const i=e=>o.default.createElement(a.Icon,Object.assign({dangerouslySetGlyph:'<svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M12.856 5.457l-.937.92a1.002 1.002 0 000 1.437 1.047 1.047 0 001.463 0l.984-.966c.967-.95 2.542-1.135 3.602-.288a2.54 2.54 0 01.203 3.81l-2.903 2.852a2.646 2.646 0 01-3.696 0l-1.11-1.09L9 13.57l1.108 1.089c1.822 1.788 4.802 1.788 6.622 0l2.905-2.852a4.558 4.558 0 00-.357-6.82c-1.893-1.517-4.695-1.226-6.422.47"/><path d="M11.144 19.543l.937-.92a1.002 1.002 0 000-1.437 1.047 1.047 0 00-1.462 0l-.985.966c-.967.95-2.542 1.135-3.602.288a2.54 2.54 0 01-.203-3.81l2.903-2.852a2.646 2.646 0 013.696 0l1.11 1.09L15 11.43l-1.108-1.089c-1.822-1.788-4.802-1.788-6.622 0l-2.905 2.852a4.558 4.558 0 00.357 6.82c1.893 1.517 4.695 1.226 6.422-.47"/></g></svg>'},e));i.displayName="LinkIcon";var s=i;t.default=s},110724:(e,t,r)=>{"use strict";r.d(t,{n:()=>n,z:()=>o});const n="media-file-card-view",o="media-file-card-view-selected"}}]);
//# sourceMappingURL=51514.K1M4jTdqv8.js.map