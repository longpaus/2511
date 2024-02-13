"use strict";(self._cf=self._cf||[]).push([[65604],{980142:(e,a,i)=>{i.d(a,{l:()=>r});var t=i(790632),n=i(122551),d=i(185338);const o=(0,t.Z)("div",{target:"eawz2vh0"})((({inline:e})=>e?"display: inline;":""),";");o.displayName="Ellipsify";const r=({text:e,lines:a,endLength:i,inline:t,testId:d})=>{const r=(0,n.useRef)(null);return(0,n.useEffect)((()=>{r.current&&s(r.current,{lines:a,endLength:i})}),[r,a,i]),n.createElement(o,{className:"ellipsed-text",ref:r,"aria-label":e,inline:t,"data-testid":d},e)},s=(e,a)=>{const i=a.lines,t=e.getBoundingClientRect().height,n=e.textContent;e.textContent="a";const d=e.getBoundingClientRect().height,o=t/d,r=d*i;if(o<=i)return void(e.textContent=n);let s=n;const c="number"==typeof a.endLength&&a.endLength>=0?a.endLength:8,f=n.substr(0,n.length*i/o-c),u=n.substr(n.length-c,c);e.textContent=s=`${f}...${u}`;if(e.getBoundingClientRect().height>r){const e=f.substr(0,f.length-f.length/i*.25);s=`${e}...${u}`}l((()=>e.textContent=s))},l=d.canUseDOM&&window.requestAnimationFrame?window.requestAnimationFrame:e=>setTimeout(e,1)},951046:(e,a,i)=>{i.d(a,{n:()=>n,x:()=>d});const t={1:"none",2:"rotateY(180deg)",3:"rotate(180deg)",4:"rotate(180deg) rotateY(180deg)",5:"rotate(270deg) rotateY(180deg)",6:"rotate(90deg)",7:"rotate(90deg) rotateY(180deg)",8:"rotate(270deg)"},n=e=>e>=5,d=e=>t[e]},97077:(e,a,i)=>{let t,n;i.d(a,{FI:()=>b,T8:()=>w}),function(e){e.JPEG="image/jpeg",e.PNG="image/png"}(t||(t={})),function(e){e.XResolution="XResolution",e.YResolution="YResolution",e.Orientation="Orientation"}(n||(n={}));const d={"top-left":1,"top-right":2,"bottom-right":3,"bottom-left":4,"left-top":5,"right-top":6,"right-bottom":7,"left-bottom":8};var o=i(991332);const{XResolution:r,YResolution:s}=n;let l;var c=i(733465);let f;async function u(e){if(!f){const e=await Promise.all([i.e(54936),i.e(11216),i.e(22433)]).then(i.t.bind(i,322433,23));f=e.default||e}const a=await(0,c.TI)(e),t=f(a);return await async function(e){let a="",i={};for(let t=0;t<e.length;++t){const n=e[t];if("IEND"===n.name)break;if("iTXt"===n.name&&(a=String.fromCharCode.apply(null,Array.from(n.data))),"pHYs"===n.name){const e=new DataView(n.data.buffer);if(1===e.getUint8(8)){i={PixelPerUnitX:e.getUint32(0),PixelPerUnitY:e.getUint32(4)}}}}return{iTXt:a,pHYs:i}}(t)}async function _(e){const a=e.type;try{if(a===t.PNG){const{iTXt:a,pHYs:i}=await u(e);return(0,o.Z)((0,o.Z)({},function(e){const a={},i=e.match(/<(tiff|exif):.+>/gi);return i&&i.forEach((e=>{const i=e.match(/<(tiff|exif):([^>]+)>([^<]+)/i);if(i){const e=i[2];a[e]=i[3]}})),a}(a)),i)}if(e.type===t.JPEG)return await function(e){return new Promise((async(a,t)=>{if(!l){const e=await i.e(7720).then(i.t.bind(i,707720,23));l=e.default||e}l.parseMetaData(e,(e=>{try{const i=e&&e.exif?e.exif.getAll():{};Object.keys(i).forEach((e=>{const a=i[e];"object"!=typeof a||e!==r&&e!==s||!("numerator"in a)||(i[e]=a.numerator),"number"==typeof i[e]&&(i[e]=`${i[e]}`)})),a(i)}catch(i){t(i)}}))}))}(e)}catch(n){}return null}var g=i(951046);const{Orientation:m,XResolution:p}=n,h=72;async function b(e){const a=await async function(e){const{file:a,src:i}=e,t=a.type;let n=0,d=0;const o=await _(a);o&&o.PixelXDimension&&(n=y(o,"PixelXDimension",0));o&&o.PixelXDimension&&(d=y(o,"PixelYDimension",0));const r=M(o),s=(0,g.n)(r),l={type:t,width:n,height:d,naturalWidth:n,naturalHeight:d,tags:o};if(s||0===n&&0===d)try{const e=await(0,c.po)(i),{width:a,height:t}=(0,c.IJ)(e);l.width=a,l.height=t,l.naturalWidth=e.naturalWidth,l.naturalHeight=e.naturalHeight}catch(f){return null}return l}(e);if(!a)return null;const{width:i,height:t,tags:n}=a;return{scaleFactor:function(e,a){const i=function(e){try{const a=e.name.trim().match(/@([0-9\.]+)x\.[a-z]{3}$/);if(a)return parseFloat(a[1])}catch(a){}return null}(e);return null!==i?i:a?"number"==typeof a.PixelPerUnitX?Math.round(.0254*a.PixelPerUnitX)/h:y(a,p,h)/h:1}(e.file,n),width:i,height:t}}const M=e=>{if(e&&e[m]){const a=e[m];if(a){const e=parseInt(a,10);return isNaN(e)?d[a]:e}}return 1};async function w(e){const a=await _(e);return M(a)}function y(e,a,i){try{const i=parseFloat(`${e[a]}`);if(!isNaN(i))return i}catch(t){}return i}},397916:(e,a,i)=>{i.d(a,{j:()=>u});var t=i(29298),n=i(122551),d=i(833486),o=i(991332),r=i(415911),s=i(953307);const l={position:"absolute",left:"50%",top:"50%",objectFit:"contain",imageOrientation:"none"},c=e=>{const{style:a,imageRef:i}=e,t=(0,r.Z)(e,["style","imageRef"]);return n.createElement("img",(0,s.Z)({},t,{ref:i,style:(0,o.Z)((0,o.Z)({},l),a)}))};var f=i(951046);class u extends n.Component{constructor(e){super(e),(0,t.Z)(this,"onImageLoad",(e=>{if(!this.imageRef||!this.imageRef.current)return;const{onImageLoad:a}=this.props;this.setState({isImageLoaded:!0,imgWidth:this.imageRef.current.naturalWidth,imgHeight:this.imageRef.current.naturalHeight}),a&&a(e.currentTarget)})),this.imageRef=n.createRef(),this.state={isImageLoaded:!1,imgWidth:0,imgHeight:0,parentWidth:1/0,parentHeight:1/0}}componentDidMount(){const e=d.findDOMNode(this).parentElement;if(!e)return;const{width:a,height:i}=e.getBoundingClientRect();this.setState({parentWidth:a,parentHeight:i})}render(){const{crop:e,stretch:a,dataURI:i,previewOrientation:t=1,crossOrigin:d,onImageError:o,alt:r="",loading:s,forceSyncDisplay:l}=this.props,{parentWidth:u,parentHeight:_,imgWidth:g,imgHeight:m,isImageLoaded:p}=this.state,h=u/_;let b=g/m,M="100%";const w=e,y=!e,v="from-image"!==t&&(0,f.n)(t);v&&(b=1/b,M=`${Math.ceil(100*b)}%`);const k=b>h;v&&g>m&&(y||k||w&&!k)&&(M=`${Math.ceil(1/b*100)}%`);const x=l||p||y&&!v,W={transform:"translate(-50%, -50%)"};if(a?y&&k?W.width=M:y&&!k||w&&k?W.height=M:w&&!k&&(W.width=M):y?(W.maxWidth=M,W.maxHeight=M):w&&k?W.maxHeight=M:w&&!k&&(W.maxWidth=M),x||(W.display="none"),"from-image"===t)W.imageOrientation="from-image";else if(t>1){const e=(0,f.x)(t);W.transform+=` ${e}`}return n.createElement(c,{loading:s,"data-testid":"media-image",draggable:!1,alt:r,style:W,onLoad:this.onImageLoad,onError:o,imageRef:this.imageRef,src:i,crossOrigin:d})}}u.displayName="MediaImage",(0,t.Z)(u,"defaultProps",{crop:!0,stretch:!1,forceSyncDisplay:!1})},412024:(e,a,i)=>{i.d(a,{s:()=>t});const t=(0,i(464984).defineMessages)({click_to_join:{id:"fabric.media.click_to_join",defaultMessage:"Join {context}"},click_to_join_description:{id:"fabric.media.click_to_join_description",defaultMessage:"You've been approved, so you can join {context} right away."},request_access:{id:"fabric.media.request_access",defaultMessage:"Request access"},request_access_description:{id:"fabric.media.request_access_description",defaultMessage:"Request access to {context} view this preview."},request_access_pending:{id:"fabric.media.request_access_pending",defaultMessage:"Access pending"},request_access_pending_description:{id:"fabric.media.request_access_pending_description",defaultMessage:"Your access request is pending."},forbidden_description:{id:"fabric.media.forbidden_description",defaultMessage:"You don’t have access to this preview. Contact the site admin if you need access."},request_denied_description:{id:"fabric.media.request_denied_description",defaultMessage:"Your access request was denied. Contact the site admin if you still need access."},retry:{id:"fabric.media.retry",defaultMessage:"Retry"},failed_to_load:{id:"fabric.media.failed_to_load",defaultMessage:"Failed to load"},failed_to_upload:{id:"fabric.media.failed_to_upload",defaultMessage:"Failed to upload"},recent_uploads:{id:"fabric.media.recent_uploads",defaultMessage:"Recent uploads"},upload_file:{id:"fabric.media.upload_file",defaultMessage:"Upload a file"},drag_and_drop_your_files:{id:"fabric.media.drag_and_drop_your_files",defaultMessage:"Drag and drop your files anywhere or"},drag_and_drop_your_files_and_folders:{id:"fabric.media.drag_and_drop_your_files_and_folders",defaultMessage:"Drag and drop your files and folders anywhere or"},drop_your_files:{id:"fabric.media.drop_your_files",defaultMessage:"Drop your files to upload"},upload:{id:"fabric.media.upload",defaultMessage:"Upload"},cancel:{id:"fabric.media.cancel",defaultMessage:"Cancel"},search_all_gifs:{id:"fabric.media.search_all_gifs",defaultMessage:"Search all the GIFs!"},cant_retrieve_gifs:{id:"fabric.media.cant_retrieve_gifs",defaultMessage:"Ouch! We could not retrieve any GIFs"},cant_retrieve_files:{id:"fabric.media.cant_retrieve_files",defaultMessage:"Ouch! We could not retrieve any files"},check_your_network:{id:"fabric.media.check_your_network",defaultMessage:"Check your network connection"},try_again:{id:"fabric.media.try_again",defaultMessage:"Try again"},try_another_account:{id:"fabric.media.try_another_account",defaultMessage:"Try another account"},no_gifs_found:{id:"fabric.media.no_gifs_found",defaultMessage:"Hello? Was it me you're looking for?"},no_gifs_found_suggestion:{id:"fabric.media.no_gifs_found_suggestion",defaultMessage:'We couldn\'t find anything for "{query}"'},load_more_gifs:{id:"fabric.media.load_more_gifs",defaultMessage:"Load more GIFs"},add_account:{id:"fabric.media.add_account",defaultMessage:"Add account"},unlink_account:{id:"fabric.media.unlink_account",defaultMessage:"Unlink Account"},upload_file_from:{id:"fabric.media.upload_file_from",defaultMessage:"Upload a file from {name}"},connect_to:{id:"fabric.media.connect_to",defaultMessage:"Connect to {name}"},connect_account_description:{id:"fabric.media.connect_account_description",defaultMessage:"We'll open a new page to help you connect your {name} account"},connect_link_account:{id:"fabric.media.connect_link_account",defaultMessage:"Connect to preview"},connect_link_account_card:{id:"fabric.media.connect_link_account_card_view",defaultMessage:"Connect"},connect_link_account_card_name:{id:"fabric.media.connect_link_account_card_view_name",defaultMessage:"Connect your {context} account"},connect_link_account_card_description:{id:"fabric.media.connect_link_account_card_view_description",defaultMessage:"To show a preview of this link, connect your {context} account."},invalid_permissions:{id:"fabric.media.invalid_permissions",defaultMessage:"Restricted link"},invalid_permissions_description:{id:"fabric.media.invalid_permissions_description",defaultMessage:"You'll need to request access or try a different account to view this preview."},upload_an_avatar:{id:"fabric.media.upload_an_avatar",defaultMessage:"Upload an avatar"},loading:{id:"fabric.media.loading",defaultMessage:"Loading..."},loading_file:{id:"fabric.media.loading_file",defaultMessage:"Loading file..."},save:{id:"fabric.media.save",defaultMessage:"Save"},or:{id:"fabric.media.or",defaultMessage:"or"},upload_photo:{id:"fabric.media.upload_photo",defaultMessage:"Upload a photo"},default_avatars:{id:"fabric.media.default_avatars",defaultMessage:"Default avatars"},drag_and_drop_images_here:{id:"fabric.media.drag_and_drop_images_here",defaultMessage:"Drag and drop your images here"},upload_image:{id:"fabric.media.upload_image",defaultMessage:"Upload image"},image_url_invalid_error:{id:"fabric.media.image_url_invalid_error",defaultMessage:"Could not load image, the url is invalid."},image_format_invalid_error:{id:"fabric.media.image_format_invalid_error",defaultMessage:"Could not load image, the format is invalid."},image_size_too_large_error:{id:"fabric.media.image_size_too_large_error",defaultMessage:"Image is too large, must be no larger than {MAX_SIZE_MB}Mb"},something_went_wrong:{id:"fabric.media.something_went_wrong",defaultMessage:"Something went wrong."},might_be_a_hiccup:{id:"fabric.media.might_be_a_hiccup",defaultMessage:"It might just be a hiccup."},couldnt_generate_preview:{id:"fabric.media.couldnt_generate_preview",defaultMessage:"We couldn't generate a preview for this file."},couldnt_generate_encrypted_entry_preview:{id:"fabric.media.couldnt_generate_encrypted_entry_preview",defaultMessage:"We can't preview encrypted or password protected files."},cant_preview_file_type:{id:"fabric.media.cant_preview_file_type",defaultMessage:"We can't preview this file type."},item_not_found_in_list:{id:"fabric.media.item_not_found_in_list",defaultMessage:"The selected item was not found on the list."},not_found_title:{id:"fabric.media.not_found_title",defaultMessage:"Uh oh. We can't find this link!"},not_found_description:{id:"fabric.media.not_found_description",defaultMessage:"We couldn't find the link. Check the url and try editing or paste again."},no_pdf_artifacts:{id:"fabric.media.no_pdf_artifacts",defaultMessage:"No PDF artifacts found for this file."},give_feedback:{id:"fabric.media.give_feedback",defaultMessage:"Give feedback"},try_downloading_file:{id:"fabric.media.try_downloading_file",defaultMessage:"Try downloading the file to view it."},webgl_warning_description:{id:"fabric.media.webgl_warning_description",defaultMessage:"Your browser does not support WebGL. Use a WebGL enabled browser to annotate images."},unable_to_annotate_image:{id:"fabric.media.unable_to_annotate_image",defaultMessage:"You're unable to annotate this image"},learn_more:{id:"fabric.media.learn_more",defaultMessage:"Learn More"},accounts:{id:"fabric.media.accounts",defaultMessage:"Accounts"},actions:{id:"fabric.media.actions",defaultMessage:"Actions"},error_hint_retry:{id:"fabric.media.error_hint_retry",defaultMessage:"Try again and we'll give it another shot."},error_hint_critical:{id:"fabric.media.error_hint_critical",defaultMessage:"If the problem keeps happening contact support."},close:{id:"fabric.media.close",defaultMessage:"Close"},could_not_load_editor:{id:"fabric.media.could_not_load_editor",defaultMessage:"Ouch! We could not load the editor"},could_not_save_image:{id:"fabric.media.could_not_save_image",defaultMessage:"Ouch! We could not save the image"},could_not_load_link:{id:"fabric.media.couldnt_load_link",defaultMessage:"We couldn't load this link for an unknown reason."},annotate:{id:"fabric.media.annotate",defaultMessage:"Annotate"},annotate_tool_arrow:{id:"fabric.media.annotate.tool.arrow",defaultMessage:"Arrow"},annotate_tool_text:{id:"fabric.media.annotate.tool.text",defaultMessage:"Text"},annotate_tool_shape:{id:"fabric.media.annotate.tool.shape",defaultMessage:"Shape"},annotate_tool_brush:{id:"fabric.media.annotate.tool.brush",defaultMessage:"Brush"},annotate_tool_blur:{id:"fabric.media.annotate.tool.blur",defaultMessage:"Blur"},annotate_tool_line_thickness:{id:"fabric.media.annotate.tool.line.thickness",defaultMessage:"Line thickness"},annotate_tool_color:{id:"fabric.media.annotate.tool.color",defaultMessage:"Color"},annotate_confirmation_close_anyway:{id:"fabric.media.annotate.confirmation.close.anyway",defaultMessage:"Close anyway"},annotate_confirmation_heading:{id:"fabric.media.annotate.confirmation.heading",defaultMessage:"Unsaved changes"},annotate_confirmation_content:{id:"fabric.media.annotate.confirmation.content",defaultMessage:"You have some unsaved changes. Are you sure you want to leave?"},drop_your_files_here:{id:"fabric.media.drop_your_files_here",defaultMessage:"Drop your files here"},share_files_instantly:{id:"fabric.media.share_files_instantly",defaultMessage:"We'll share them instantly"},insert_files:{id:"fabric.media.insert_files",defaultMessage:"Insert {0, plural, one {a file} other {{0} files}}"},zoom_out:{id:"fabric.media.zoom_out",defaultMessage:"zoom out"},zoom_in:{id:"fabric.media.zoom_in",defaultMessage:"zoom in"},remove_image:{id:"fabric.media.remove_image",defaultMessage:"Remove image"},play:{id:"fabric.media.play",defaultMessage:"Play"},pause:{id:"fabric.media.pause",defaultMessage:"Pause"},disable_fullscreen:{id:"fabric.media.disable_fullscreen",defaultMessage:"disable fullscreen"},enable_fullscreen:{id:"fabric.media.enable_fullscreen",defaultMessage:"enable fullscreen"},error_loading_file:{id:"fabric.media.error_loading_file",defaultMessage:"Error loading file"},error_generating_preview:{id:"fabric.media.error_generating_preview",defaultMessage:"Error generating preview"},download:{id:"fabric.media.download",defaultMessage:"Download"},unknown:{id:"fabric.media.unknown",defaultMessage:"unknown"},document:{id:"fabric.media.document",defaultMessage:"document"},audio:{id:"fabric.media.audio",defaultMessage:"audio"},video:{id:"fabric.media.video",defaultMessage:"video"},image:{id:"fabric.media.image",defaultMessage:"image"},archive:{id:"fabric.media.archive",defaultMessage:"archive"},email:{id:"fabric.media.email",defaultMessage:"email"},text:{id:"fabric.media.text",defaultMessage:"text"},displayThumbnail:{id:"fabric.media.display_thumbnail",defaultMessage:"Display thumbnail"},search:{id:"fabric.media.search",defaultMessage:"search"},view:{id:"fabric.media.view",defaultMessage:"View"},viewIn:{id:"fabric.media.srclink",defaultMessage:"View in"},viewOriginal:{id:"fabric.media.srclinkunknown",defaultMessage:"View Original"},changeView:{id:"fabric.media.change_view",defaultMessage:"Change view"},playbackSpeed:{id:"fabric.media.playback_speed",defaultMessage:"Playback speed"},skipBackward:{id:"fabric.media.skip_backward",defaultMessage:"Back 10 seconds"},skipForward:{id:"fabric.media.skip_forward",defaultMessage:"Forward 10 seconds"},playbackDefaultSpeed:{id:"fabric.media.playback_default_speed",defaultMessage:"Default"},preview:{id:"fabric.media.preview",defaultMessage:"Preview"},creating_preview:{id:"fabric.media.creating_preview",defaultMessage:"Creating preview..."},preview_unavailable:{id:"fabric.media.preview_unavailable",defaultMessage:"Preview unavailable"},preview_currently_unavailable:{id:"fabric.media.preview_currently_unavailable",defaultMessage:"Preview currently unavailable"},couldnt_load_file:{id:"fabric.media.couldnt_load_file",defaultMessage:"We couldn't load the file."},error_429:{id:"fabric.media.error_429",defaultMessage:"Error 429"},close_and_reopen:{id:"fabric.media.close_and_reopen",defaultMessage:"Try closing this file and reopening."},viewer_rateLimited:{id:"fabric.media.viewer_rateLimited",defaultMessage:"We're having difficulties loading your file."},zip_entry_load_fail:{id:"fabric.media.zip_entry_load_failed",defaultMessage:"We couldn't load that zip file item to preview"}})}}]);
//# sourceMappingURL=65604.PYt6p1L7Mw.js.map