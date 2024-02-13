"use strict";(self._cf=self._cf||[]).push([[33079],{849384:(e,t,i)=>{i.d(t,{Z:()=>x,r:()=>_});var r=i(29298),s=function(){function e(){}return e.prototype.expandToken=function(e){for(var t=[],i="",r=0,s=e.length;r<s;++r)i+=e.charAt(r),t.push(i);return t},e}(),o=function(){function e(){}return e.prototype.sanitize=function(e){return e?e.toLocaleLowerCase().trim():""},e}();function n(e,t){t=t||[];for(var i=e=e||{},r=0;r<t.length;r++)if(null==(i=i[t[r]]))return null;return i}var a=function(){function e(e){this._uidFieldName=e,this._tokenToIdfCache={},this._tokenMap={}}var t=e.prototype;return t.indexDocument=function(e,t,i){this._tokenToIdfCache={};var r,s=this._tokenMap;"object"!=typeof s[e]?s[e]=r={$numDocumentOccurrences:0,$totalNumOccurrences:1,$uidMap:{}}:(r=s[e]).$totalNumOccurrences++;var o=r.$uidMap;"object"!=typeof o[t]?(r.$numDocumentOccurrences++,o[t]={$document:i,$numTokenOccurrences:1}):o[t].$numTokenOccurrences++},t.search=function(e,t){for(var i={},r=0,s=e.length;r<s;r++){var o=e[r],n=this._tokenMap[o];if(!n)return[];if(0===r)for(var a=0,c=(h=Object.keys(n.$uidMap)).length;a<c;a++){i[d=h[a]]=n.$uidMap[d].$document}else{var h;for(a=0,c=(h=Object.keys(i)).length;a<c;a++){var d=h[a];"object"!=typeof n.$uidMap[d]&&delete i[d]}}}var u=[];for(var d in i)u.push(i[d]);var m=this._createCalculateTfIdf();return u.sort((function(i,r){return m(e,r,t)-m(e,i,t)}))},t._createCalculateIdf=function(){var e=this._tokenMap,t=this._tokenToIdfCache;return function(i,r){if(!t[i]){var s=void 0!==e[i]?e[i].$numDocumentOccurrences:0;t[i]=1+Math.log(r.length/(1+s))}return t[i]}},t._createCalculateTfIdf=function(){var e=this._tokenMap,t=this._uidFieldName,i=this._createCalculateIdf();return function(r,s,o){for(var a=0,c=0,h=r.length;c<h;++c){var d,u=r[c],m=i(u,o);m===1/0&&(m=0),d=t instanceof Array?s&&n(s,t):s&&s[t],a+=(void 0!==e[u]&&void 0!==e[u].$uidMap[d]?e[u].$uidMap[d].$numTokenOccurrences:0)*m}return a}},e}(),c=function(){function e(){this._tokenToUidToDocumentMap={}}var t=e.prototype;return t.indexDocument=function(e,t,i){"object"!=typeof this._tokenToUidToDocumentMap[e]&&(this._tokenToUidToDocumentMap[e]={}),this._tokenToUidToDocumentMap[e][t]=i},t.search=function(e,t){for(var i={},r=this._tokenToUidToDocumentMap,s=0,o=e.length;s<o;s++){var n=r[e[s]];if(!n)return[];if(0===s)for(var a=0,c=(h=Object.keys(n)).length;a<c;a++){i[u=h[a]]=n[u]}else for(a=0,c=(h=Object.keys(i)).length;a<c;a++){"object"!=typeof n[u=h[a]]&&delete i[u]}}var h,d=[];for(s=0,c=(h=Object.keys(i)).length;s<c;s++){var u=h[s];d.push(i[u])}return d},e}(),h=/[^a-zа-яё0-9\-']+/i,d=function(){function e(){}return e.prototype.tokenize=function(e){return e.split(h).filter((function(e){return e}))},e}();function u(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(e){if(!e)throw Error("js-search requires a uid field name constructor parameter");this._uidFieldName=e,this._indexStrategy=new s,this._searchIndex=new a(e),this._sanitizer=new o,this._tokenizer=new d,this._documents=[],this._searchableFields=[]}var t,i,r,c=e.prototype;return c.addDocument=function(e){this.addDocuments([e])},c.addDocuments=function(e){this._documents=this._documents.concat(e),this.indexDocuments_(e,this._searchableFields)},c.addIndex=function(e){this._searchableFields.push(e),this.indexDocuments_(this._documents,[e])},c.search=function(e){var t=this._tokenizer.tokenize(this._sanitizer.sanitize(e));return this._searchIndex.search(t,this._documents)},c.indexDocuments_=function(e,t){this._initialized=!0;for(var i=this._indexStrategy,r=this._sanitizer,s=this._searchIndex,o=this._tokenizer,a=this._uidFieldName,c=0,h=e.length;c<h;c++){var d,u=e[c];d=a instanceof Array?n(u,a):u[a];for(var m=0,l=t.length;m<l;m++){var p,f=t[m];if(null!=(p=f instanceof Array?n(u,f):u[f])&&"string"!=typeof p&&p.toString&&(p=p.toString()),"string"==typeof p)for(var g=o.tokenize(r.sanitize(p)),y=0,j=g.length;y<j;y++)for(var w=g[y],v=i.expandToken(w),I=0,E=v.length;I<E;I++){var k=v[I];s.indexDocument(k,d,u)}}}},t=e,(i=[{key:"indexStrategy",set:function(e){if(this._initialized)throw Error("IIndexStrategy cannot be set after initialization");this._indexStrategy=e},get:function(){return this._indexStrategy}},{key:"sanitizer",set:function(e){if(this._initialized)throw Error("ISanitizer cannot be set after initialization");this._sanitizer=e},get:function(){return this._sanitizer}},{key:"searchIndex",set:function(e){if(this._initialized)throw Error("ISearchIndex cannot be set after initialization");this._searchIndex=e},get:function(){return this._searchIndex}},{key:"tokenizer",set:function(e){if(this._initialized)throw Error("ITokenizer cannot be set after initialization");this._tokenizer=e},get:function(){return this._tokenizer}}])&&u(t.prototype,i),r&&u(t,r),e}(),l=i(895053),p=i(426366),f=i(520212);const g=new RegExp("[⺀-⺙⺛-⻳⼀-⿕々〇〡-〩〸-〻㐀-䶵一-鿯豈-舘並-龎]|[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ|0-9²³¹¼-¾٠-٩۰-۹߀-߉०-९০-৯৴-৹੦-੯૦-૯୦-୯୲-୷௦-௲౦-౯౸-౾೦-೯൘-൞൦-൸෦-෯๐-๙໐-໙༠-༳၀-၉႐-႙፩-፼ᛮ-ᛰ០-៩៰-៹᠐-᠙᥆-᥏᧐-᧚᪀-᪉᪐-᪙᭐-᭙᮰-᮹᱀-᱉᱐-᱙⁰⁴-⁹₀-₉⅐-ↂↅ-↉①-⒛⓪-⓿❶-➓⳽〇〡-〩〸-〺㆒-㆕㈠-㈩㉈-㉏㉑-㉟㊀-㊉㊱-㊿꘠-꘩ꛦ-ꛯ꠰-꠵꣐-꣙꤀-꤉꧐-꧙꧰-꧹꩐-꩙꯰-꯹０-９]+[̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ंऺ़ु-ै्॑-ॗॢॣঁ়ু-ৄ্ৢৣ৾ਁਂ਼ੁੂੇੈੋ-੍ੑੰੱੵઁં઼ુ-ૅેૈ્ૢૣૺ-૿ଁ଼ିୁ-ୄ୍ୖୢୣஂீ்ఀఄా-ీె-ైొ-్ౕౖౢౣಁ಼ಿೆೌ್ೢೣഀഁ഻഼ു-ൄ്ൢൣ්ි-ුූัิ-ฺ็-๎ັິ-ູົຼ່-ໍཱ༹༘༙༵༷-ཾྀ-྄྆྇ྍ-ྗྙ-ྼ࿆ိ-ူဲ-့္်ွှၘၙၞ-ၠၱ-ၴႂႅႆႍႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴឵ិ-ួំ៉-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤢᤧᤨᤲ᤹-᤻ᨘᨗᨛᩖᩘ-ᩞ᩠ᩢᩥ-ᩬᩳ-᩿᩼᪰-᪽ᬀ-ᬃ᬴ᬶ-ᬺᬼᭂ᭫-᭳ᮀᮁᮢ-ᮥᮨᮩ᮫-ᮭ᯦ᯨᯩᯭᯯ-ᯱᰬ-ᰳᰶ᰷᳐-᳔᳒-᳢᳠-᳨᳭᳴᳸᳹᷀-᷹᷻-᷿⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〭꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠥꠦ꣄ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-ꥑꦀ-ꦂ꦳ꦶ-ꦹꦼꧥꨩ-ꨮꨱꨲꨵꨶꩃꩌꩼꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫬꫭ꫶ꯥꯨ꯭ﬞ︀-️︠-︯|']*[A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢄᢇ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞹꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]*","gi");class y{constructor(...e){this.chain=e}compare(e,t){for(let i=0;i<this.chain.length;i++){const r=this.chain[i].compare(e,t);if(0!==r)return r}return 0}}class j{constructor(e){this.query=e}compare(e,t){const i=e.ascii&&-1!==e.ascii.indexOf(this.query),r=t.ascii&&-1!==t.ascii.indexOf(this.query);return i&&!r?-1:!i&&r?1:0}}class w{constructor(e){this.colonQuery=`:${e}:`,this.typeComparator=new v(!0)}compare(e,t){return e.shortName===this.colonQuery&&t.shortName===this.colonQuery?this.typeComparator.compare(e,t):e.shortName===this.colonQuery?-1:t.shortName===this.colonQuery?1:0}}class v{constructor(e){this.typeToNumber=e?new Map([["SITE",0],["ATLASSIAN",1],["STANDARD",2]]):new Map([["STANDARD",0],["ATLASSIAN",1],["SITE",2]])}compare(e,t){return this.emojiTypeToOrdinal(e)-this.emojiTypeToOrdinal(t)}emojiTypeToOrdinal(e){let t=this.typeToNumber.get(e.type);return void 0===t&&(t=10),t}}class I{constructor(e){this.positionLookup=new Map,e.map(((e,t)=>this.positionLookup.set(e,t+1)))}compare(e,t){if(!e.id||!t.id)return 0;return this.getPositionInOrder(e)-this.getPositionInOrder(t)}getPositionInOrder(e){let t=e.id?e.id:"0";(0,p.q0)(e)&&(t=e.baseId);const i=this.positionLookup.get(t);return i||l.BT}}class E{constructor(e,t){if(this.query=e,!t)throw new Error("propertyToCompare is required");this.propertyName=t}getScore(e){const t=e[this.propertyName],i=t?t.indexOf(this.query):l.BT;return-1===i?l.BT:i}compare(e,t){return this.getScore(e)-this.getScore(t)}}class k{constructor(){}static get Instance(){return this.INSTANCE||(this.INSTANCE=new this)}compare(e,t){return(e.order?e.order:l.BT)-(t.order?t.order:l.BT)}}class R{constructor(){}static get Instance(){return this.INSTANCE||(this.INSTANCE=new this)}compare(e,t){return e.shortName.localeCompare(t.shortName)}}var T=i(991332);class S{constructor(e){if(e.maxDuplicates<1)throw new RangeError("The maxDuplicates option must be at least 1");if(e.minUniqueItems<1)throw new RangeError("The minUniqueItems option must be at least 1");this.maximumSize=e.maxDuplicates*e.minUniqueItems,this.perItemSize=e.maxDuplicates,this.createEmptyState()}enqueue(e){this.enqueueWithoutOrdering(e),this.itemsOrderedByFrequency=this.orderItemsByFrequency()}getItemsOrderedByDuplicateCount(){return this.itemsOrderedByFrequency}clear(){this.createEmptyState()}bulkEnqueue(e){e.map((e=>this.enqueueWithoutOrdering(e))),this.itemsOrderedByFrequency=this.orderItemsByFrequency()}getItems(){return this.items}createEmptyState(){this.items=new Array,this.itemCountMap=new Map,this.itemsOrderedByFrequency=new Array}enqueueWithoutOrdering(e){const t=this.itemCountMap.get(e);t&&t>=this.perItemSize?this.removeFirstOccurrence(e):this.items.length>=this.maximumSize&&this.remove(),this.add(e)}orderItemsByFrequency(){return Array.from(this.itemCountMap.entries()).sort(((e,t)=>t[1]-e[1])).map((e=>e[0]))}decrementCount(e){let t=this.itemCountMap.get(e);t&&(t--,t>0?this.itemCountMap.set(e,t):this.itemCountMap.delete(e))}removeFirstOccurrence(e){const t=this.items.indexOf(e);-1!==t&&(this.items.splice(t,1),this.decrementCount(e))}remove(){const e=this.items.shift();return void 0!==e&&this.decrementCount(e),e}add(e){this.items.push(e);const t=this.itemCountMap.get(e);t?this.itemCountMap.set(e,t+1):this.itemCountMap.set(e,1)}}var M=i(535719);class P extends S{constructor(e){super(e),this.storage=e.storage,this.prefixedStorageKey=`${e.storagePrefix}.${P.storageKey}`,this.load()}enqueue(e){super.enqueue(e),this.save()}clear(){super.clear(),this.storage.removeItem(this.prefixedStorageKey)}load(){const e=this.storage.getItem(this.prefixedStorageKey);if(e)try{const t=JSON.parse(e);this.bulkEnqueue(t)}catch(t){(0,M.ZP)(`Error parsing the queue stored as ${this.prefixedStorageKey} key from storage`,t)}}save(){const e=JSON.stringify(this.getItems());try{this.storage.setItem(this.prefixedStorageKey,e)}catch(t){(0,M.ZP)(`Error saving the queued items as ${this.prefixedStorageKey}`,t)}}}(0,r.Z)(P,"storageKey","lastUsed");var C=i(596861);class L{constructor(e=!0){const t=L.queueOptions;if(e&&t.storage){const e=(0,T.Z)((0,T.Z)({},t),{},{storage:t.storage});this.queue=new P(e)}else this.queue=new S(t);this.gateway=new A(10)}recordUsage(e){let t=e.id;t&&((0,p.q0)(e)&&(t=e.baseId),this.gateway.submit((()=>{t&&this.queue.enqueue(t)})))}getOrder(){return this.queue.getItemsOrderedByDuplicateCount()}clear(){this.queue.clear()}}(0,r.Z)(L,"queueOptions",{storage:(0,C.Z)("localStorage")?window.localStorage:void 0,storagePrefix:l.lD,maxDuplicates:25,minUniqueItems:5});class A{constructor(e){if(e<1)throw new RangeError("The maximumPermitted parameter must be 1 or more.");this.maximumPermitted=e,this.count=0}submit(e){if(this.count>=this.maximumPermitted)return!1;this.count++;const t=()=>{try{e()}finally{this.completed()}};return"undefined"!=typeof window&&window.setTimeout(t),!0}completed(){this.count--}}class U{tokenize(e){return this.tokenizeAsTokens(e).map((e=>e.token))}tokenizeAsTokens(e){let t,i=[];for(g.lastIndex=0;null!==(t=g.exec(e));)t[0]&&i.push({token:t[0],start:t.index});return i}}const N=(e,t,i)=>{const r=t(e);i.has(r)||i.set(r,[]);const s=i.get(r);if(s&&s.push(e),(0,p.Hf)(e)){const r=e.skinVariations;r&&r.forEach((e=>N(e,t,i)))}},q=(e,t)=>{const i=e.get(t);if(i&&i.length)return i[i.length-1]},_=(e,t)=>{if((0,p.Hf)(e)&&t){const i=t.skinTone;if(i&&e.skinVariations&&e.skinVariations.length){const t=e.skinVariations[i-1];if(t)return t}}return e};class x{constructor(e,t){this.emojis=e,this.initMembers(t)}all(){const e={sort:f.Gr.None};return this.search("",e)}search(e,t){let i=[];const{nameQuery:r,asciiQuery:s}=((e="")=>0===e.indexOf(":")?{nameQuery:e.slice(1),asciiQuery:e}:{nameQuery:e,asciiQuery:""})(e);return r?(i=this.fullSearch.search(r),s&&(i=this.withAsciiMatch(s,i))):i=this.getAllSearchableEmojis(),i=this.applySearchOptions(i,e,t),{emojis:i,query:e}}findAllMatchingShortName(e){return this.shortNameMap.get(e)||[]}findByShortName(e){return q(this.shortNameMap,e)}findById(e){return q(this.idMap,e)}findByAsciiRepresentation(e){return this.asciiMap.get(e)}findInCategory(e){return e===l.Ap?this.getFrequentlyUsed():this.all().emojis.filter((t=>t.category===e))}addUnknownEmoji(e){this.emojis=[...this.emojis,e],this.fullSearch.addDocuments([e]),this.addToMaps(e),this.addToDynamicCategories(e)}getAsciiMap(){return this.asciiMap}getFrequentlyUsed(e){let t=this.usageTracker.getOrder().map((e=>this.findById(e))).filter((e=>void 0!==e));return e&&(t=this.applySearchOptions(t,"",e)),t}getDynamicCategoryList(){return this.dynamicCategoryList.slice()}used(e){if(this.usageTracker.recordUsage(e),-1===this.dynamicCategoryList.indexOf(l.Ap)){if("undefined"==typeof window)return;window.setTimeout((()=>{this.dynamicCategoryList.push(l.Ap)}))}}delete(e){const t=((e,t)=>{const i=t.id;let r=-1;return e.forEach(((e,s)=>{(e.id&&e.id===i||!e.id&&!i&&e.shortName===t.shortName)&&(r=s)})),r})(this.emojis,e);-1!==t&&(this.emojis.splice(t,1),this.initMembers(this.usageTracker))}withAsciiMatch(e,t){let i=t;const r=this.findByAsciiRepresentation(e);return r&&(i=t.filter((e=>e.id!==r.id)),i=[r,...i]),i}applySearchOptions(e,t,i){let r;return i||(i={}),void 0===i.sort&&(i.sort=f.Gr.Default),i.sort===f.Gr.Default?r=function(e,t){const i=e?e.replace(/:/g,"").toLowerCase().trim():void 0,r=[];e&&r.push(new j(e)),i&&r.push(new w(i)),t&&t.length&&r.push(new I(t)),i&&r.push(new E(i,"shortName"),new E(i,"name")),r.push(k.Instance,R.Instance);const s=new y(...r);return s.compare=s.compare.bind(s),s}(t,this.usageTracker.getOrder()):i.sort===f.Gr.UsageFrequency&&(r=function(e){const t=new y(new I(e),new v,k.Instance);return t.compare=t.compare.bind(t),t}(this.usageTracker.getOrder())),r&&(r.compare=r.compare.bind(r),e=e.sort(r.compare)),i.limit&&i.limit>0&&(e=e.slice(0,i.limit)),i.skinTone?e.map((e=>_(e,i))):e}initMembers(e){this.usageTracker=e||new L,this.initRepositoryMetadata(),this.initSearchIndex()}initRepositoryMetadata(){this.shortNameMap=new Map,this.idMap=new Map,this.asciiMap=new Map;const e=new Set;this.emojis.forEach((t=>{e.add(t.category),this.addToMaps(t)})),this.usageTracker.getOrder().length&&e.add(l.Ap),this.dynamicCategoryList=Array.from(e).filter((e=>-1===l.D$.indexOf(e)))}initSearchIndex(){this.fullSearch=new m("id"),this.fullSearch.tokenizer=new U,this.fullSearch.searchIndex=new c,this.fullSearch.addIndex("name"),this.fullSearch.addIndex("shortName"),this.fullSearch.addDocuments(this.getAllSearchableEmojis())}getAllSearchableEmojis(){return this.emojis.filter((e=>e.searchable))}addToMaps(e){void 0!==e.order&&-1!==e.order||(e.order=x.defaultEmojiWeight),void 0===e.id&&(e.id=x.defaultEmojiWeight.toString()),N(e,(e=>e.shortName),this.shortNameMap),N(e,(e=>e.id),this.idMap),e.ascii&&e.ascii.forEach((t=>this.asciiMap.set(t,e)))}addToDynamicCategories(e){const t=(0,p.WN)(e);-1===l.D$.indexOf(t)&&-1===this.dynamicCategoryList.indexOf(t)&&this.dynamicCategoryList.push(t)}}(0,r.Z)(x,"defaultEmojiWeight",1e6)},633079:(e,t,i)=>{i.d(t,{ZP:()=>P,Nn:()=>S});var r=i(991332),s=i(29298),o=i(319209),n=i(895053),a=i(535719),c=i(426366),h=i(596861),d=i(520212),u=i(516145);class m{constructor(e){this.config=e}loadEmoji(){return(0,u.UX)(this.config).then((e=>(0,u.ud)(e)))}}var l=i(849384),p=i(415911),f=i(101054),g=i(67810);class y{constructor(e,t){(0,s.Z)(this,"mediaImageQueue",[]),(0,s.Z)(this,"activeProcessing",0),(0,s.Z)(this,"pendingRequests",new Map),this.concurrentDownloadLimit=t&&t.concurrentDownloadLimit||16,this.tokenManager=e}loadMediaImage(e){const t=this.pendingRequests.get(e);if(void 0!==t)return t;const i=new Promise(((t,i)=>{this.mediaImageQueue.push({url:e,resolve:t,reject:i}),this.processFromQueue()})).then((t=>(this.pendingRequests.delete(e),t))).catch((t=>{throw this.pendingRequests.delete(e),t}));return this.pendingRequests.set(e,i),i}getQueueSize(){return this.mediaImageQueue.length}getActiveDownloads(){return this.activeProcessing}processFromQueue(){for(;this.activeProcessing<this.concurrentDownloadLimit&&this.mediaImageQueue.length>0;){this.activeProcessing++;const e=this.mediaImageQueue.shift(),{url:t,resolve:i,reject:r}=e;this.tokenManager.getToken("read",!1).then((e=>{this.requestMediaEmoji(t,e,!0).then((e=>{i(e),this.completedItem()})).catch((e=>{r(e),this.completedItem()}))})).catch((e=>{r(e),this.completedItem()}))}}completedItem(){this.activeProcessing--,this.processFromQueue()}delay(e){return new Promise((t=>setTimeout(t,e)))}requestMediaEmoji(e,t,i,r=2){return(0,g.To)().then((s=>{const o={headers:{Authorization:`Bearer ${t.jwt}`,"X-Client-Id":t.clientId,Accept:s}};return fetch(e,o).then((s=>{if(404===s.status&&r>0)return this.delay(600/r).then((()=>this.requestMediaEmoji(e,t,!1,r-1)));if(403===s.status&&i)return this.tokenManager.getToken("read",!0).then((t=>this.requestMediaEmoji(e,t,!1)));if(s.ok)return s.blob().then((e=>this.readBlob(e)));throw new Error(`Unable to load media image. Status=${s.status} ${s.statusText}`)}))}))}readBlob(e){return new Promise(((t,i)=>{const r=new FileReader;r.addEventListener("load",(()=>t(r.result))),r.addEventListener("error",(()=>i(r.error))),r.readAsDataURL(e)}))}}var j=i(608259);const w=(e,t)=>t?e.altRepresentation:e.representation;class v{constructor(e){(0,s.Z)(this,"cachedImageUrls",new Set),(0,a.ZP)("BrowserCacheStrategy"),this.mediaImageLoader=e}loadEmoji(e,t){const i=w(e,t);if(!(0,c.$m)(i))return e;const{mediaPath:r}=i;return this.cachedImageUrls.has(r)?e:this.mediaImageLoader.loadMediaImage(r).then((()=>(this.cachedImageUrls.add(r),e))).catch((()=>{}))}optimisticRendering(){return!0}static supported(e,t){return(()=>{const e=!!document.documentMode,t=!e&&!!window.StyleMedia;return e||t})()?Promise.resolve(!1):t.loadMediaImage(e).then((()=>new Promise((t=>{const i=new Image;i.addEventListener("load",(()=>{t(!0)})),i.addEventListener("error",(()=>{t(!1)})),i.src=e})))).catch((()=>!1))}}class I{constructor(e){(0,a.ZP)("MemoryCacheStrategy"),this.mediaImageLoader=e,this.dataURLCache=new j.LRUMap(1e3)}loadEmoji(e,t){const i=w(e,t);if(!(0,c.$m)(i))return e;const{mediaPath:r}=i,s=this.dataURLCache.get(r);return s?(0,c.Ez)(e,s,t):this.mediaImageLoader.loadMediaImage(r).then((i=>{const s=(0,c.Ez)(e,i,t);return i.length<=1e4?this.dataURLCache.set(r,i):(0,a.ZP)("No caching as image is too large",i.length,i.slice(0,15),e.shortName),s})).catch((()=>{}))}optimisticRendering(){return!1}}class E{constructor(e){(0,s.Z)(this,"waitingInitUrls",[]),(0,a.ZP)("MediaEmojiCache"),this.mediaImageLoader=new y(e)}loadEmoji(e,t){const i=w(e,t);if(!(0,c.$m)(i))return e;const{mediaPath:r}=i,s=this.getCache(r);return(0,c.tI)(s)?s.then((i=>i.loadEmoji(e,t))).catch((()=>{})):s.loadEmoji(e,t)}optimisticRendering(e){const t=this.getCache(e);return(0,c.tI)(t)?t.then((e=>e.optimisticRendering())).catch((()=>!1)):t.optimisticRendering()}getCache(e){return this.cache?this.cache:(this.waitingInitUrls.push(e),this.cacheLoading||(this.cacheLoading=this.initCache().then((e=>(this.cache=e,this.cacheLoading=void 0,e))).catch((e=>{throw this.cacheLoading=void 0,e}))),this.cacheLoading)}initCache(){const e=this.waitingInitUrls.pop();return e?v.supported(e,this.mediaImageLoader).then((e=>(this.waitingInitUrls=[],this.cacheLoading=void 0,e?new v(this.mediaImageLoader):new I(this.mediaImageLoader)))).catch((()=>this.initCache())):Promise.reject("Unable to initialise cache based on provided url(s)")}}class k{constructor(e){this.siteServiceConfig=e,this.tokens=new Map}isValidToken(e){return Date.now()/1e3<e.expiresAt-30}fetchNewToken(e){return o.utils.requestService(this.siteServiceConfig,{path:`token/${e}`})}addToken(e,t){this.tokens.set(e,{mediaApiToken:t})}getToken(e,t){let i=this.tokens.get(e);i||(i={},this.tokens.set(e,i));const{mediaApiToken:r,activeTokenRefresh:s}=i;if(r){if(this.isValidToken(r)&&!t)return Promise.resolve(r);if(s)return s}return i.activeTokenRefresh=this.fetchNewToken(e).then((e=>(i.mediaApiToken=e,i.activeTokenRefresh=void 0,e))),i.activeTokenRefresh}}class R{constructor(e,t){(0,s.Z)(this,"postToEmojiService",((e,t)=>{const{shortName:i,name:s}=e,{width:n,height:a}=e,h={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({shortName:i,name:s,width:n,height:a,fileId:t})};return o.utils.requestService(this.siteServiceConfig,{requestInit:h}).then((e=>{const{emojis:t}=e;if(t.length){const e=t[0],{altRepresentations:i}=e,s=(0,p.Z)(e,["altRepresentations"]),o=(0,r.Z)((0,r.Z)({},s),{},{representation:(0,c.oX)(s.representation)}),n=(0,u.E2)(i||{}),a=n?(0,c.oX)(n):void 0;return(0,c._p)(o,a)}throw new Error("No emoji returns from upload. Upload failed.")}))})),this.siteServiceConfig=e,this.mediaApiToken=t,this.tokenManager=new k(e),this.tokenManager.addToken("read",t),this.mediaEmojiCache=new E(this.tokenManager)}async generateTokenisedMediaURL(e){if(e&&(0,c.$m)(e.representation)){const t=new URL(e.representation.mediaPath),i=t.searchParams,r=await this.tokenManager.getToken("read");return i.get("token")!==r.jwt&&i.set("token",r.jwt),i.get("client")!==r.clientId&&i.set("client",r.clientId),t.toString()}throw Error("Emoji resource is not of type Media Representation")}loadMediaEmoji(e,t){if(!(0,c.tE)(e))throw new Error("Only supported for media emoji");return this.mediaEmojiCache.loadEmoji(e,t)}optimisticRendering(e,t){const i=t?e.altRepresentation:e.representation;if(!(0,c.$m)(i))throw new Error("Only supported for media emoji");const{mediaPath:r}=i;return this.mediaEmojiCache.optimisticRendering(r)}uploadEmoji(e,t=!1,i){const r=Date.now();return this.tokenManager.getToken("upload",t).then((t=>{const s=Date.now()-r;return(0,a.ZP)("upload token load time",s),new Promise(((o,n)=>{const{url:c,clientId:h,collectionName:d}=t,u=(0,f.y)({authProvider:()=>Promise.resolve({clientId:h,token:t.jwt,baseUrl:c})}).file.upload({content:e.dataURL,name:e.filename,collection:d}).subscribe({next:t=>{if("uploading"===t.status&&i)i({percent:.95*t.progress});else if("processing"===t.status){u.unsubscribe();const i=Date.now()-r,c=i-s;(0,a.ZP)("total upload / media upload times",i,c),this.postToEmojiService(e,t.id).then((e=>{o(e)})).catch((e=>{n(e.reason||e)}))}},error(e){n(e)}})}))}))}hasUploadToken(){return this.tokenManager.getToken("upload").then((e=>void 0!==e),(()=>!1))}prepareForUpload(){this.tokenManager.getToken("upload")}findEmoji(e){if(!e.id)return Promise.reject(!1);const t=`../${encodeURIComponent(e.id)}`;return(0,u.UX)(this.siteServiceConfig,{path:t}).then((e=>(0,u.ud)(e).emojis[0])).catch((t=>{(0,a.ZP)("failed to load emoji",e,t)}))}deleteEmoji(e){if(!(0,c.tE)(e)&&!(0,c.k0)(e))return Promise.reject(!1);if(!e.id)return Promise.reject(!1);const t=`${encodeURIComponent(e.id)}`;return o.utils.requestService(this.siteServiceConfig,{path:t,requestInit:{method:"DELETE"}}).then((()=>!0)).catch((()=>!1))}}var T=i(438229);const S=e=>{const t=e;return!!t.isUploadSupported&&!!t.uploadCustomEmoji&&!!t.prepareForUpload};class M extends o.AbstractResource{constructor(e){if(super(),(0,s.Z)(this,"activeLoaders",0),(0,s.Z)(this,"retries",new Map),(0,s.Z)(this,"isInitialised",!1),(0,s.Z)(this,"getOptimisticImageURL",(e=>{if(this.emojiProviderConfig.optimisticImageApi)return this.emojiProviderConfig.optimisticImageApi.getUrl(e)})),(0,s.Z)(this,"isLoaded",(()=>0===this.activeLoaders&&!!this.emojiRepository)),this.emojiProviderConfig=e,this.recordConfig=e.recordConfig,this.currentUser=e.currentUser,(0,h.Z)("localStorage")&&(this.selectedTone=this.loadStoredTone()),0===e.providers.length)throw new Error("No providers specified");this.activeLoaders=this.emojiProviderConfig.providers.length,this.emojiResponses=[]}async getEmojiProvider(e={fetchAtStart:!0}){if(e.fetchAtStart)try{await this.fetchEmojiProvider()}catch(t){return(0,a.ZP)(t),Promise.resolve(this)}return Promise.resolve(this)}async fetchIndividualProvider(e,t){const i=this.getProviderType(e);try{(0,T.PI)(i).start({samplingRate:n.uC}),(0,T.PI)(i).addMetadata({type:i});const r=new m(e),s=await r.loadEmoji();(0,T.PI)(i).success(),this.emojiResponses[t]=s,this.initEmojiRepository(this.emojiResponses),await this.initSiteEmojiResource(s,e),this.activeLoaders--,this.performRetries(),this.refreshLastFilter()}catch(r){throw this.activeLoaders--,this.notifyError(r),(0,T.PI)(i).failure({metadata:{reason:r,source:"EmojiProvider",providerUrl:e.url}}),(0,a.ZP)(`failed to fetch emoji provider for ${e.url}`,r),new Error(`failed to fetch emoji from ${e.url}`)}}async fetchEmojiProvider(e=!1){return(e||!this.emojiRepository&&!this.isInitialised)&&(this.isInitialised=!0,this.emojiResponses=[],await Promise.all(this.emojiProviderConfig.providers.map(((e,t)=>this.fetchIndividualProvider(e,t))))),Promise.resolve(this.emojiRepository)}async fetchByEmojiId(e,t){if(this.emojiRepository&&this.isLoaded()){const t=await this.findByEmojiId(e);if(t)return await this.getMediaEmojiDescriptionURLWithInlineToken(t)}if(this.emojiProviderConfig.singleEmojiApi&&t){const t={url:this.emojiProviderConfig.singleEmojiApi.getUrl(e),securityProvider:this.emojiProviderConfig.singleEmojiApi.securityProvider},i=new m(t);try{const e=await i.loadEmoji();if(!e.emojis[0])return;return this.siteEmojiResource||await this.initSiteEmojiResource(e,t),this.getMediaEmojiDescriptionURLWithInlineToken(e.emojis[0])}catch(r){const t=await this.findByEmojiId(e);if(!t)return;return this.getMediaEmojiDescriptionURLWithInlineToken(t)}}const i=await this.findByEmojiId(e);if(i)return this.getMediaEmojiDescriptionURLWithInlineToken(i)}getProviderType(e){return e.url.includes("/site")?d.yI.SITE:e.url.includes("/standard")?d.yI.STANDARD:e.url.includes("/atlassian")?d.yI.ATLASSIAN:d.yI.UNKNOWN}initEmojiRepository(e){let t=[];e.forEach((e=>{t=t.concat(e.emojis)})),this.emojiRepository=new l.Z(t)}initSiteEmojiResource(e,t){if(!this.siteEmojiResource&&e.mediaApiToken){this.siteEmojiResource=new R(t,e.mediaApiToken);const{emojis:i}=e;if(i.length){const e=this.siteEmojiResource.optimisticRendering(i[0]);if((0,c.tI)(e))return e.then((()=>{(0,a.ZP)("Primed siteEmojiResource")})).catch((()=>{(0,a.ZP)("Failed to prime siteEmojiResource")}));(0,a.ZP)("Already primed siteEmojiResource")}else(0,a.ZP)("No emoji to prime siteEmojiResource with")}return Promise.resolve()}performRetries(){const e=this.retries;this.retries=new Map,e.forEach(((e,t)=>{const i=t();(0,c.tI)(i)?i.then((t=>{e.resolve(t)})).catch((t=>{e.reject(t)})):e.resolve(i)}))}loadStoredTone(){if("undefined"==typeof window)return;const e=window.localStorage.getItem(n.Qz);if(e){const t=parseInt(e,10);return isNaN(t)?void 0:t}}refreshLastFilter(){if(void 0!==this.lastQuery){const{query:e,options:t}=this.lastQuery;this.filter(e,t)}}retryIfLoading(e,t){return this.isLoaded()?Promise.resolve(t):new Promise(((t,i)=>{this.retries.set(e,{resolve:t,reject:i})}))}notifyResult(e){this.lastQuery&&e.query===this.lastQuery.query&&super.notifyResult(e)}async getMediaEmojiDescriptionURLWithInlineToken(e){if(this.siteEmojiResource&&(0,c.$m)(e.representation)){const t=await this.siteEmojiResource.generateTokenisedMediaURL(e);return(0,r.Z)((0,r.Z)({},e),{},{representation:(0,r.Z)((0,r.Z)({},e.representation),{},{mediaPath:t})})}return e}loadMediaEmoji(e,t){return this.siteEmojiResource&&(0,c.tE)(e)?this.siteEmojiResource.loadMediaEmoji(e,t):e}optimisticMediaRendering(e,t){if(!(0,c.tE)(e))return!0;if(!this.siteEmojiResource)return!1;const i=this.siteEmojiResource.optimisticRendering(e,t);return!(0,c.tI)(i)&&i}filter(e,t){this.lastQuery={query:e,options:t},this.emojiRepository?this.notifyResult(this.emojiRepository.search(e,t)):this.notifyNotReady()}findByShortName(e){return this.isLoaded()?this.emojiRepository.findByShortName(e):this.retryIfLoading((()=>this.findByShortName(e)),void 0)}findByEmojiId(e){const{id:t,shortName:i}=e;if(this.emojiRepository){if(!t)return this.findByShortName(i);{const r=this.emojiRepository.findById(t);if(r)return r;if(this.isLoaded())return this.siteEmojiResource?this.siteEmojiResource.findEmoji(e).then((e=>e?(this.addUnknownEmoji(e),e):this.findByShortName(i))):this.findByShortName(i)}}return this.retryIfLoading((()=>this.findByEmojiId(e)),void 0)}findById(e){return this.isLoaded()?this.emojiRepository.findById(e):this.retryIfLoading((()=>this.findById(e)),void 0)}findInCategory(e){return this.isLoaded()?Promise.resolve(this.emojiRepository.findInCategory(e)):this.retryIfLoading((()=>this.findInCategory(e)),[])}getAsciiMap(){return this.isLoaded()?Promise.resolve(this.emojiRepository.getAsciiMap()):this.retryIfLoading((()=>this.getAsciiMap()),new Map)}getFrequentlyUsed(e){return this.isLoaded()?Promise.resolve(this.emojiRepository.getFrequentlyUsed(e)):this.retryIfLoading((()=>this.getFrequentlyUsed(e)),[])}recordSelection(e){const{recordConfig:t}=this;if(this.emojiRepository&&this.emojiRepository.used(e),t){const i={emojiId:(0,c.Vo)(e)},r={method:"POST"};return o.utils.requestService(t,{queryParams:i,requestInit:r})}return Promise.resolve()}deleteSiteEmoji(e){return this.siteEmojiResource&&e.id?this.siteEmojiResource.deleteEmoji(e).then((t=>!(!t||!this.emojiRepository)&&(this.emojiRepository.delete(e),!0))).catch((e=>(console.error("failed to delete site emoji",e),!1))):this.retryIfLoading((()=>this.deleteSiteEmoji(e)),!1)}getSelectedTone(){return this.selectedTone}setSelectedTone(e){if(this.selectedTone=e,"undefined"!=typeof window&&(0,h.Z)("localStorage"))try{window.localStorage.setItem(n.Qz,e?e.toString():"")}catch(t){console.error("failed to store selected emoji skin tone",t)}}calculateDynamicCategories(){return this.isLoaded()?Promise.resolve(this.emojiRepository.getDynamicCategoryList()):this.retryIfLoading((()=>this.calculateDynamicCategories()),[])}getCurrentUser(){return this.currentUser}addUnknownEmoji(e){this.emojiRepository&&this.emojiRepository.addUnknownEmoji(e)}}class P extends M{constructor(e){super(e),this.allowUpload=!!e.allowUpload}isUploadSupported(){return this.allowUpload?this.siteEmojiResource?this.siteEmojiResource.hasUploadToken():this.retryIfLoading((()=>this.isUploadSupported()),!1):Promise.resolve(!1)}uploadCustomEmoji(e,t=!1){return this.isUploadSupported().then((i=>i&&this.siteEmojiResource?this.siteEmojiResource.uploadEmoji(e,t).then((e=>(this.addUnknownEmoji(e),this.refreshLastFilter(),e))):Promise.reject("No media api support is configured")))}prepareForUpload(){return this.siteEmojiResource&&this.siteEmojiResource.prepareForUpload(),this.retryIfLoading((()=>this.prepareForUpload()),void 0)}}},67810:(e,t,i)=>{i.d(t,{KO:()=>r,e6:()=>s,Sy:()=>o,To:()=>a});const r=e=>new Promise(((t,i)=>{const r=new Image;r.addEventListener("load",(()=>{t({width:r.naturalWidth,height:r.naturalHeight})})),r.addEventListener("error",i),r.src=e})),s=e=>new Promise(((t,i)=>{let r=new Image;r.onload=()=>t({src:r.src}),r.onerror=()=>i(),r.src=e})),o=e=>e&&e.size>1048576;let n;const a=()=>(void 0!==n?Promise.resolve(n):new Promise((e=>{const t=new Image,i=()=>{n=2===t.height,e(n)};t.addEventListener("load",i),t.addEventListener("error",i),t.src="data:image/webp;base64,UklGRi4AAABXRUJQVlA4TCEAAAAvAUAAEB8wAiMwAgSSNtse/cXjxyCCmrYNWPwmHRH9jwMA"}))).then((e=>e?"image/webp,image/*,*/*;q=0.8":"image/*,*/*;q=0.8"))},596861:(e,t,i)=>{function r(e){if("undefined"==typeof window)return!1;var t;try{t=window[e];var i="__storage_test__";return t.setItem(i,i),t.removeItem(i),!0}catch(r){return r instanceof DOMException&&(22===r.code||1014===r.code||"QuotaExceededError"===r.name||"NS_ERROR_DOM_QUOTA_REACHED"===r.name)&&t&&0!==t.length}}i.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=33079.DSjUYUypd1.js.map