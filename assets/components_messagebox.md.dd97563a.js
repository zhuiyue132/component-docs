import{V as F,_ as x,c as f,a as C,w as d,e as g,b as s,d as l,r as B,o as b}from"./app.48207b4a.js";const{defineComponent:h}=F,v=h({name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:a,resolveComponent:y,withCtx:c,openBlock:p,createBlock:D}=F;function i(n,r){const o=y("xs-button");return p(),D(o,{text:"",onClick:n.open},{default:c(()=>[a("\u6253\u5F00\u5BF9\u8BDD\u6846")]),_:1},8,["onClick"])}const{ref:A,getCurrentInstance:e}=F;return{render:i,...{setup(){const n=e();return{open:()=>{n.appContext.config.globalProperties.$msgbox.alert("\u6709\u65F6\u95F4\u591A\u770B\u4E66","hello bro")}}}}}}(),"render-demo-1":function(){const{createTextVNode:a,resolveComponent:y,withCtx:c,createVNode:p,Fragment:D,openBlock:i,createElementBlock:A}=F;function e(o,t){const u=y("xs-button");return i(),A(D,null,[p(u,{type:"warning",onClick:t[0]||(t[0]=()=>o.open("warn"))},{default:c(()=>[a("warn")]),_:1}),p(u,{type:"info",onClick:t[1]||(t[1]=()=>o.open("info"))},{default:c(()=>[a("info")]),_:1}),p(u,{type:"success",onClick:t[2]||(t[2]=()=>o.open("success"))},{default:c(()=>[a("success")]),_:1}),p(u,{type:"danger",onClick:t[3]||(t[3]=()=>o.open("danger"))},{default:c(()=>[a("danger")]),_:1})],64)}const{ref:E,getCurrentInstance:n}=F;return{render:e,...{setup(){const o=n();return{open:(t="warn")=>{o.appContext.config.globalProperties.$msgbox.confirm("\u5373\u5C06\u5220\u9664\u90AE\u4EF6\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F","\u8B66\u544A",{confirmButtonText:"\u662F\u7684\uFF0C\u6211\u786E\u8BA4",cancelButtonText:"\u8FD8\u6CA1\u60F3\u597D",icon:t}).then(u=>{console.log(u)}).catch(u=>{console.log(u)})}}}}}}(),"render-demo-2":function(){const{createTextVNode:a,resolveComponent:y,withCtx:c,openBlock:p,createBlock:D}=F;function i(n,r){const o=y("xs-button");return p(),D(o,{type:"primary",onClick:n.open},{default:c(()=>[a("\u6253\u5F00\u8F93\u5165\u6846")]),_:1},8,["onClick"])}const{ref:A,getCurrentInstance:e}=F;return{render:i,...{setup(){const n=e();return{open:()=>{n.appContext.config.globalProperties.$msgbox.prompt("\u8F93\u5165\u4F60\u81EA\u5DF1\u7684\u90AE\u7BB1\u5427","\u90AE\u7BB1\u{1F4EE}",{confirmButtonText:"\u4FDD\u5B58",inputPattern:/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,inputErrorMessage:"\u4F60\u8F93\u5165\u7684\u90AE\u7BB1\u4E0D\u5BF9\u554A"}).then(({value:r})=>{alert(`\u4F60\u90AE\u7BB1\u662F${r}`)}).catch(()=>{alert("\u653E\u5F03\u8F93\u5165")})}}}}}}(),"render-demo-3":function(){const{createTextVNode:a,resolveComponent:y,withCtx:c,createVNode:p,Fragment:D,openBlock:i,createElementBlock:A}=F;function e(t,u){const m=y("xs-button");return i(),A(D,null,[p(m,{type:"primary",onClick:t.open},{default:c(()=>[a("VNode")]),_:1},8,["onClick"]),p(m,{type:"primary",onClick:t.open2},{default:c(()=>[a("\u52A8\u6001\u6E32\u67D3\u539F\u751Finput\u5143\u7D20")]),_:1},8,["onClick"])],64)}const{ref:E,getCurrentInstance:n,h:r}=F;return{render:e,...{setup(){const t=n();return{open:()=>{t.appContext.config.globalProperties.$msgbox({title:"VNode",message:r("p",null,[r("span",null,"\u6D88\u606F\u5185\u5BB9\u53EF\u4EE5\u662F "),r("i",{style:"color: teal"},"VNode")])})},open2:()=>{const u=E("");t.appContext.config.globalProperties.$msgbox({title:"VNode",message:r("input",{value:u.value,style:{border:"1px #ccc solid",width:"100%",padding:"0 8px"},placeholder:"\u8FC7\u5E74\u5403\u4EC0\u4E48",oninput(m){u.value=this.value}})}).then(()=>{console.log(u.value)})}}}}}}(),"render-demo-4":function(){const{createTextVNode:a,resolveComponent:y,withCtx:c,openBlock:p,createBlock:D}=F;function i(r,o){const t=y("xs-button");return p(),D(t,{type:"primary",onClick:r.open},{default:c(()=>[a("\u6253\u5F00\u8F93\u5165\u6846")]),_:1},8,["onClick"])}const{ref:A,getCurrentInstance:e,h:E}=F;return{render:i,...{setup(){const r=e();return{open:()=>{r.appContext.config.globalProperties.$msgbox({title:"Message",message:E("p",null,[E("span",null,"Message can be "),E("i",{style:"color: teal"},"VNode")]),showCancelButton:!0,confirmButtonText:"OK",cancelButtonText:"Cancel",beforeClose:(o,t,u)=>{o==="confirm"?(t.confirmButtonLoading=!0,t.confirmButtonText="Loading...",setTimeout(()=>{u(),setTimeout(()=>{t.confirmButtonLoading=!1},300)},3e3)):u()}}).then(o=>{console.log(o)}).catch(()=>{})}}}}}}(),"render-demo-5":function(){const{createTextVNode:a,resolveComponent:y,withCtx:c,openBlock:p,createBlock:D}=F;function i(n,r){const o=y("xs-button");return p(),D(o,{text:"",onClick:n.open},{default:c(()=>[a("\u6253\u5F00\u5BF9\u8BDD\u6846")]),_:1},8,["onClick"])}const{ref:A,getCurrentInstance:e}=F;return{render:i,...{setup(){const n=e();return{open:()=>{n.appContext.config.globalProperties.$msgbox.alert("<strong>proxy is <i>HTML</i> string</strong>","HTML String",{dangerouslyUseHTMLString:!0})}}}}}}(),"render-demo-6":function(){const{createTextVNode:a,resolveComponent:y,withCtx:c,openBlock:p,createBlock:D}=F;function i(n,r){const o=y("xs-button");return p(),D(o,{onClick:n.open},{default:c(()=>[a("\u533A\u5206close\u4E0Ecancel")]),_:1},8,["onClick"])}const{ref:A,getCurrentInstance:e}=F;return{render:i,...{setup(){const n=e();return{open:(r="warn")=>{n.appContext.config.globalProperties.$msgbox.confirm("\u5373\u5C06\u5220\u9664\u90AE\u4EF6\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F","\u8B66\u544A",{confirmButtonText:"\u662F\u7684\uFF0C\u6211\u786E\u8BA4",cancelButtonText:"\u8FD8\u6CA1\u60F3\u597D",distinguishCancelAndClose:!0}).then(o=>{console.log(o),alert(o)}).catch(o=>{alert(o)})}}}}}}(),"render-demo-7":function(){const{createTextVNode:a,resolveComponent:y,withCtx:c,openBlock:p,createBlock:D}=F;function i(n,r){const o=y("xs-button");return p(),D(o,{text:"",onClick:n.open},{default:c(()=>[a("\u6253\u5F00\u5BF9\u8BDD\u6846")]),_:1},8,["onClick"])}const{ref:A,getCurrentInstance:e}=F;return{render:i,...{setup(){const n=e();return{open:()=>{n.appContext.config.globalProperties.$msgbox.alert("<strong>proxy is <i>HTML</i> string</strong>","HTML String",{draggable:!0,dangerouslyUseHTMLString:!0})}}}}}}()}}),Y=JSON.parse('{"title":"MessageBox \u6D88\u606F\u5F39\u6846","description":"","frontmatter":{},"headers":[],"relativePath":"components/messagebox.md","lastUpdated":1672813722000}'),_=g('<h1 id="messagebox-\u6D88\u606F\u5F39\u6846" tabindex="-1">MessageBox \u6D88\u606F\u5F39\u6846</h1><p>\u6A21\u62DF\u7CFB\u7EDF\u7684\u6D88\u606F\u63D0\u793A\u6846\u800C\u5B9E\u73B0\u7684\u4E00\u5957\u6A21\u6001\u5BF9\u8BDD\u6846\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u786E\u8BA4\u6D88\u606F\u548C\u63D0\u4EA4\u5185\u5BB9\u3002</p><p>\u56E0\u4E3A\u6F14\u793A\u7EC4\u4EF6\u539F\u56E0\uFF0C\u53EA\u80FD\u4F7F\u7528\u5168\u5C40\u65B9\u6CD5\u505A demo\uFF0C\u5B9E\u9645\u5F00\u53D1\u4E2D\u53EF\u4EE5<a href="#%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5">\u6309\u9700\u5F15\u5165</a>\u4F7F\u7528\u3002</p><h2 id="\u6D88\u606F\u63D0\u793A" tabindex="-1">\u6D88\u606F\u63D0\u793A</h2><p>\u7528\u6237\u8FDB\u884C\u64CD\u4F5C\u65F6\u4F1A\u88AB\u89E6\u53D1\uFF0C\u8BE5\u5BF9\u8BDD\u6846\u4E2D\u65AD\u7528\u6237\u64CD\u4F5C\uFF0C\u76F4\u5230\u7528\u6237\u786E\u8BA4\u77E5\u6653\u540E\u624D\u53EF\u5173\u95ED\u3002</p><p>\u8C03\u7528 <code>XsMessageBox.alert</code> \u65B9\u6CD5\u4EE5\u6253\u5F00 alert \u6846\u3002 \u5B83\u6A21\u62DF\u4E86\u7CFB\u7EDF\u7684 alert\uFF0C\u65E0\u6CD5\u901A\u8FC7\u6309\u4E0B ESC \u6216\u70B9\u51FB\u6846\u5916\u5173\u95ED\u3002 \u6B64\u4F8B\u4E2D\u63A5\u6536\u4E86\u4E24\u4E2A\u53C2\u6570\uFF0C<code>message</code>\u548C<code>title</code>\u3002 \u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u7A97\u53E3\u88AB\u5173\u95ED\u540E\uFF0C\u5B83\u9ED8\u8BA4\u4F1A\u8FD4\u56DE\u4E00\u4E2A<code>Promise</code>\u5BF9\u8C61\u4FBF\u4E8E\u8FDB\u884C\u540E\u7EED\u64CD\u4F5C\u7684\u5904\u7406\u3002 \u82E5\u4E0D\u786E\u5B9A\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301 <code>Promise</code>\uFF0C\u53EF\u81EA\u884C\u5F15\u5165\u7B2C\u4E09\u65B9 polyfill \u6216\u50CF\u672C\u4F8B\u4E00\u6837\u4F7F\u7528\u56DE\u8C03\u8FDB\u884C\u540E\u7EED\u5904\u7406\u3002</p>',6),k=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"text"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"open"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u6253\u5F00\u5BF9\u8BDD\u6846</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"vm"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getCurrentInstance"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          vm.appContext.config.globalProperties.$msgbox."),s("span",{style:{color:"#D2A8FF"}},"alert"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'\u6709\u65F6\u95F4\u591A\u770B\u4E66'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'hello bro'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"text"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"open"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u6253\u5F00\u5BF9\u8BDD\u6846</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"vm"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getCurrentInstance"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          vm.appContext.config.globalProperties.$msgbox."),s("span",{style:{color:"#8250DF"}},"alert"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'\u6709\u65F6\u95F4\u591A\u770B\u4E66'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'hello bro'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),T=g('<h2 id="\u786E\u8BA4\u6D88\u606F" tabindex="-1">\u786E\u8BA4\u6D88\u606F</h2><p>\u63D0\u793A\u7528\u6237\u786E\u8BA4\u5176\u5DF2\u7ECF\u89E6\u53D1\u7684\u52A8\u4F5C\uFF0C\u5E76\u8BE2\u95EE\u662F\u5426\u8FDB\u884C\u6B64\u64CD\u4F5C\u65F6\u4F1A\u7528\u5230\u6B64\u5BF9\u8BDD\u6846\u3002</p><p>\u8C03\u7528 <code>XsMessageBox.confirm</code> \u65B9\u6CD5\u4EE5\u6253\u5F00 confirm \u6846\u3002\u5B83\u6A21\u62DF\u4E86\u7CFB\u7EDF\u7684 confirm\u3002 Message Box \u7EC4\u4EF6\u4E5F\u62E5\u6709\u6781\u9AD8\u7684\u5B9A\u5236\u6027\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F20\u5165 <code>options</code> \u4F5C\u4E3A\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF0C\u5B83\u662F\u4E00\u4E2A\u5B57\u9762\u91CF\u5BF9\u8C61\u3002 type \u5B57\u6BB5\u8868\u660E\u6D88\u606F\u7C7B\u578B\uFF0C\u53EF\u4EE5\u4E3A <strong><code>success</code></strong>\uFF0C<strong><code>danger</code></strong>\uFF0C<strong><code>info</code></strong> \u548C <strong><code>warn</code></strong>\uFF0C\u65E0\u6548\u7684\u8BBE\u7F6E\u5C06\u4F1A\u88AB\u5FFD\u7565\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570 <code>title</code> \u5FC5\u987B\u5B9A\u4E49\u4E3A <code>String</code> \u7C7B\u578B\uFF0C\u5982\u679C\u662F Object\uFF0C\u4F1A\u88AB\u5F53\u505A\u4E3A options \u4F7F\u7528\u3002 \u5728\u8FD9\u91CC\u6211\u4EEC\u8FD4\u56DE\u4E86\u4E00\u4E2A <code>Promise</code> \u6765\u5904\u7406\u540E\u7EED\u54CD\u5E94\u3002</p>',3),w=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"warning"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'warn'"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">warn</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"info"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'info'"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">info</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"success"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'success'"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">success</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"danger"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'danger'"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">danger</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"vm"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getCurrentInstance"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},": ("),s("span",{style:{color:"#FFA657"}},"icon"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'warn'"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          vm.appContext.config.globalProperties.$msgbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"confirm"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'\u5373\u5C06\u5220\u9664\u90AE\u4EF6\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u8B66\u544A'"),s("span",{style:{color:"#C9D1D9"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              confirmButtonText: "),s("span",{style:{color:"#A5D6FF"}},"'\u662F\u7684\uFF0C\u6211\u786E\u8BA4'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              cancelButtonText: "),s("span",{style:{color:"#A5D6FF"}},"'\u8FD8\u6CA1\u60F3\u597D'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              icon")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"then"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"action"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"catch"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"action"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"warning"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'warn'"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">warn</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"info"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'info'"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">info</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"success"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'success'"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">success</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"danger"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'danger'"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">danger</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"vm"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getCurrentInstance"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},": ("),s("span",{style:{color:"#953800"}},"icon"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'warn'"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          vm.appContext.config.globalProperties.$msgbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"confirm"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'\u5373\u5C06\u5220\u9664\u90AE\u4EF6\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u8B66\u544A'"),s("span",{style:{color:"#24292F"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              confirmButtonText: "),s("span",{style:{color:"#0A3069"}},"'\u662F\u7684\uFF0C\u6211\u786E\u8BA4'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              cancelButtonText: "),s("span",{style:{color:"#0A3069"}},"'\u8FD8\u6CA1\u60F3\u597D'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              icon")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"then"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"action"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"catch"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"action"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),M=g('<h2 id="\u63D0\u4EA4\u5185\u5BB9" tabindex="-1">\u63D0\u4EA4\u5185\u5BB9</h2><p>\u5F53\u9700\u8981\u7528\u6237\u8F93\u5165\u5185\u5BB9\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Prompt</code> \u7C7B\u578B\u7684\u6D88\u606F\u6846\u3002</p><p>\u8C03\u7528 <code>XsMessageBox.prompt</code> \u65B9\u6CD5\u4EE5\u6253\u5F00 <code>prompt</code> \u6846\u3002\u5B83\u6A21\u62DF\u4E86\u7CFB\u7EDF\u7684 prompt\u3002 \u53EF\u4EE5\u7528 <code>inputPattern</code> \u5B57\u6BB5\u81EA\u5DF1\u89C4\u5B9A\u5339\u914D\u6A21\u5F0F\uFF0C \u4F7F\u7528 <code>inputValidator</code> \u6765\u6307\u5B9A\u9A8C\u8BC1\u65B9\u6CD5\uFF0C\u5B83\u5E94\u8BE5\u8FD4\u56DE <code>Boolean</code> \u6216 <code>String</code>\u3002 \u8FD4\u56DE <code>false</code> \u6216 <code>String</code> \u8868\u793A\u9A8C\u8BC1\u5931\u8D25\uFF0C \u8FD4\u56DE\u7684\u5B57\u7B26\u4E32\u5C06\u7528\u4F5C <code>inputErrorMessage</code>\uFF0C\u7528\u6765\u63D0\u793A\u7528\u6237\u9519\u8BEF\u539F\u56E0\u3002 \u6B64\u5916\uFF0C\u53EF\u4EE5\u7528 <code>inputPlaceholder</code> \u5B57\u6BB5\u6765\u5B9A\u4E49\u8F93\u5165\u6846\u7684\u5360\u4F4D\u7B26\u3002</p>',3),$=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"open"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u6253\u5F00\u8F93\u5165\u6846</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"vm"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getCurrentInstance"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          vm.appContext.config.globalProperties.$msgbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"prompt"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'\u8F93\u5165\u4F60\u81EA\u5DF1\u7684\u90AE\u7BB1\u5427'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u90AE\u7BB1\u{1F4EE}'"),s("span",{style:{color:"#C9D1D9"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              confirmButtonText: "),s("span",{style:{color:"#A5D6FF"}},"'\u4FDD\u5B58'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              inputPattern:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                "),s("span",{style:{color:"#A5D6FF"}},"/"),s("span",{style:{color:"#79C0FF"}},"[\\w!#$%&'*+/=?^_`{|}~-]"),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}},"(?:"),s("span",{style:{color:"#7EE787","font-style":"italic"}},"\\."),s("span",{style:{color:"#79C0FF"}},"[\\w!#$%&'*+/=?^_`{|}~-]"),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#A5D6FF"}},")"),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#A5D6FF"}},"@(?:"),s("span",{style:{color:"#79C0FF"}},"[\\w]"),s("span",{style:{color:"#A5D6FF"}},"(?:"),s("span",{style:{color:"#79C0FF"}},"[\\w-]"),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#79C0FF"}},"[\\w]"),s("span",{style:{color:"#A5D6FF"}},")"),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#7EE787","font-style":"italic"}},"\\."),s("span",{style:{color:"#A5D6FF"}},")"),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#79C0FF"}},"[\\w]"),s("span",{style:{color:"#A5D6FF"}},"(?:"),s("span",{style:{color:"#79C0FF"}},"[\\w-]"),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#79C0FF"}},"[\\w]"),s("span",{style:{color:"#A5D6FF"}},")"),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#A5D6FF"}},"/"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              inputErrorMessage: "),s("span",{style:{color:"#A5D6FF"}},"'\u4F60\u8F93\u5165\u7684\u90AE\u7BB1\u4E0D\u5BF9\u554A'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"then"),s("span",{style:{color:"#C9D1D9"}},"(({ "),s("span",{style:{color:"#FFA657"}},"value"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              "),s("span",{style:{color:"#D2A8FF"}},"alert"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"`\u4F60\u90AE\u7BB1\u662F${"),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"catch"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              "),s("span",{style:{color:"#D2A8FF"}},"alert"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"`\u653E\u5F03\u8F93\u5165`"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"open"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u6253\u5F00\u8F93\u5165\u6846</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"vm"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getCurrentInstance"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          vm.appContext.config.globalProperties.$msgbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"prompt"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'\u8F93\u5165\u4F60\u81EA\u5DF1\u7684\u90AE\u7BB1\u5427'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u90AE\u7BB1\u{1F4EE}'"),s("span",{style:{color:"#24292F"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              confirmButtonText: "),s("span",{style:{color:"#0A3069"}},"'\u4FDD\u5B58'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              inputPattern:")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                "),s("span",{style:{color:"#0A3069"}},"/"),s("span",{style:{color:"#0550AE"}},"[\\w!#$%&'*+/=?^_`{|}~-]"),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}},"(?:"),s("span",{style:{color:"#116329","font-style":"italic"}},"\\."),s("span",{style:{color:"#0550AE"}},"[\\w!#$%&'*+/=?^_`{|}~-]"),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0A3069"}},")"),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#0A3069"}},"@(?:"),s("span",{style:{color:"#0550AE"}},"[\\w]"),s("span",{style:{color:"#0A3069"}},"(?:"),s("span",{style:{color:"#0550AE"}},"[\\w-]"),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#0550AE"}},"[\\w]"),s("span",{style:{color:"#0A3069"}},")"),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#116329","font-style":"italic"}},"\\."),s("span",{style:{color:"#0A3069"}},")"),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#0550AE"}},"[\\w]"),s("span",{style:{color:"#0A3069"}},"(?:"),s("span",{style:{color:"#0550AE"}},"[\\w-]"),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#0550AE"}},"[\\w]"),s("span",{style:{color:"#0A3069"}},")"),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#0A3069"}},"/"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              inputErrorMessage: "),s("span",{style:{color:"#0A3069"}},"'\u4F60\u8F93\u5165\u7684\u90AE\u7BB1\u4E0D\u5BF9\u554A'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"then"),s("span",{style:{color:"#24292F"}},"(({ "),s("span",{style:{color:"#953800"}},"value"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              "),s("span",{style:{color:"#8250DF"}},"alert"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"`\u4F60\u90AE\u7BB1\u662F${"),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"catch"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              "),s("span",{style:{color:"#8250DF"}},"alert"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"`\u653E\u5F03\u8F93\u5165`"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),I=s("h2",{id:"\u4F7F\u7528-vnode",tabindex:"-1"},"\u4F7F\u7528 VNode",-1),P=s("p",null,[s("code",null,"message"),l(" \u53EF\u4EE5\u662F VNode\u3002")],-1),V=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"open"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">VNode</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"open2"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u52A8\u6001\u6E32\u67D3\u539F\u751Finput\u5143\u7D20</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref, getCurrentInstance, h } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"vm"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getCurrentInstance"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          vm.appContext.config.globalProperties."),s("span",{style:{color:"#D2A8FF"}},"$msgbox"),s("span",{style:{color:"#C9D1D9"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            title: "),s("span",{style:{color:"#A5D6FF"}},"'VNode'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            message: "),s("span",{style:{color:"#D2A8FF"}},"h"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'p'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"null"),s("span",{style:{color:"#C9D1D9"}},", ["),s("span",{style:{color:"#D2A8FF"}},"h"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'span'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"null"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u6D88\u606F\u5185\u5BB9\u53EF\u4EE5\u662F '"),s("span",{style:{color:"#C9D1D9"}},"), "),s("span",{style:{color:"#D2A8FF"}},"h"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", { style: "),s("span",{style:{color:"#A5D6FF"}},"'color: teal'"),s("span",{style:{color:"#C9D1D9"}}," }, "),s("span",{style:{color:"#A5D6FF"}},"'VNode'"),s("span",{style:{color:"#C9D1D9"}},")])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"open2"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"str"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          vm.appContext.config.globalProperties")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"$msgbox"),s("span",{style:{color:"#C9D1D9"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              title: "),s("span",{style:{color:"#A5D6FF"}},"'VNode'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              message: "),s("span",{style:{color:"#D2A8FF"}},"h"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'input'"),s("span",{style:{color:"#C9D1D9"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                value: str.value,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                style: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                  border: "),s("span",{style:{color:"#A5D6FF"}},"'1px #ccc solid'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                  width: "),s("span",{style:{color:"#A5D6FF"}},"'100%'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                  padding: "),s("span",{style:{color:"#A5D6FF"}},"'0 8px'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                placeholder: "),s("span",{style:{color:"#A5D6FF"}},"'\u8FC7\u5E74\u5403\u4EC0\u4E48'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                "),s("span",{style:{color:"#D2A8FF"}},"oninput"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"val"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                  str.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"this"),s("span",{style:{color:"#C9D1D9"}},".value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"then"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(str.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"open"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">VNode</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"open2"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u52A8\u6001\u6E32\u67D3\u539F\u751Finput\u5143\u7D20</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref, getCurrentInstance, h } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"vm"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getCurrentInstance"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          vm.appContext.config.globalProperties."),s("span",{style:{color:"#8250DF"}},"$msgbox"),s("span",{style:{color:"#24292F"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            title: "),s("span",{style:{color:"#0A3069"}},"'VNode'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            message: "),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'p'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"null"),s("span",{style:{color:"#24292F"}},", ["),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'span'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"null"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u6D88\u606F\u5185\u5BB9\u53EF\u4EE5\u662F '"),s("span",{style:{color:"#24292F"}},"), "),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", { style: "),s("span",{style:{color:"#0A3069"}},"'color: teal'"),s("span",{style:{color:"#24292F"}}," }, "),s("span",{style:{color:"#0A3069"}},"'VNode'"),s("span",{style:{color:"#24292F"}},")])")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"open2"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"str"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          vm.appContext.config.globalProperties")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"$msgbox"),s("span",{style:{color:"#24292F"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              title: "),s("span",{style:{color:"#0A3069"}},"'VNode'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              message: "),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'input'"),s("span",{style:{color:"#24292F"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                value: str.value,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                style: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                  border: "),s("span",{style:{color:"#0A3069"}},"'1px #ccc solid'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                  width: "),s("span",{style:{color:"#0A3069"}},"'100%'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                  padding: "),s("span",{style:{color:"#0A3069"}},"'0 8px'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                placeholder: "),s("span",{style:{color:"#0A3069"}},"'\u8FC7\u5E74\u5403\u4EC0\u4E48'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                "),s("span",{style:{color:"#8250DF"}},"oninput"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"val"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                  str.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"this"),s("span",{style:{color:"#24292F"}},".value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"then"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(str.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),N=g('<h2 id="\u4E2A\u6027\u5316" tabindex="-1">\u4E2A\u6027\u5316</h2><p>\u6D88\u606F\u5F39\u6846\u53EF\u4EE5\u88AB\u5B9A\u5236\u6765\u5C55\u793A\u5404\u79CD\u5185\u5BB9\u3002</p><p>\u4E0A\u9762\u63D0\u5230\u7684\u4E09\u4E2A\u65B9\u6CD5\u90FD\u662F\u5BF9 <code>XsMessageBox</code> \u65B9\u6CD5\u7684\u4E8C\u6B21\u5305\u88C5\u3002 \u672C\u4F8B\u76F4\u63A5\u8C03\u7528 <code>XsMessageBox</code> \u65B9\u6CD5\uFF0C\u4F7F\u7528\u4E86 <code>showCancelButton</code> \u5B57\u6BB5\uFF0C\u7528\u4E8E\u663E\u793A\u53D6\u6D88\u6309\u94AE\u3002 \u53E6\u5916\u53EF\u4F7F\u7528 <code>cancelButtonClass</code> \u4E3A\u5176\u6DFB\u52A0\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528 <code>cancelButtonText</code> \u6765\u81EA\u5B9A\u4E49\u53D6\u6D88\u6309\u94AE\u6587\u672C\uFF08Confirm \u6309\u94AE\u4E5F\u5177\u6709\u76F8\u540C\u7684\u5B57\u6BB5\uFF0C\u5728\u6587\u672B\u7684 API \u8BF4\u660E\u4E2D\u6709\u5B8C\u6574\u7684\u5B57\u6BB5\u5217\u8868\uFF09\u3002 \u6B64\u4F8B\u8FD8\u4F7F\u7528\u4E86 <code>beforeClose</code> \u5C5E\u6027\uFF0C \u5F53 <code>beforeClose</code> \u88AB\u8D4B\u503C\u4E14\u88AB\u8D4B\u503C\u4E3A\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u65F6\uFF0C\u5728\u6D88\u606F\u5F39\u6846\u88AB\u5173\u95ED\u4E4B\u524D\u5C06\u4F1A\u88AB\u8C03\u7528\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7\u8BE5\u65B9\u6CD5\u6765\u963B\u6B62\u5F39\u6846\u88AB\u5173\u95ED\u3002 \u5B83\u662F\u4E00\u4E2A\u63A5\u6536\u4E09\u4E2A\u53C2\u6570\uFF1A<code>action</code>\u3001<code>instance</code> \u548C<code>done</code> \u7684\u65B9\u6CD5\u3002 \u4F7F\u7528\u5B83\u80FD\u591F\u5728\u5173\u95ED\u524D\u5BF9\u5B9E\u4F8B\u8FDB\u884C\u4E00\u4E9B\u64CD\u4F5C\uFF0C\u6BD4\u5982\u4E3A\u786E\u5B9A\u6309\u94AE\u6DFB\u52A0 <code>loading</code> \u72B6\u6001\u7B49\uFF1B\u6B64\u65F6\u82E5\u9700\u8981\u5173\u95ED\u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u8C03\u7528 <code>done</code> \u65B9\u6CD5\uFF08\u82E5\u5728 <code>beforeClose</code> \u4E2D\u6CA1\u6709\u8C03\u7528 <code>done</code>\uFF0C\u5219\u5F39\u6846\u4FBF\u4E0D\u4F1A\u5173\u95ED\uFF09\u3002</p>',3),L=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"open"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u6253\u5F00\u8F93\u5165\u6846</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref, getCurrentInstance, h } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"vm"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getCurrentInstance"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          vm.appContext.config.globalProperties")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"$msgbox"),s("span",{style:{color:"#C9D1D9"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              title: "),s("span",{style:{color:"#A5D6FF"}},"'Message'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              message: "),s("span",{style:{color:"#D2A8FF"}},"h"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'p'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"null"),s("span",{style:{color:"#C9D1D9"}},", ["),s("span",{style:{color:"#D2A8FF"}},"h"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'span'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"null"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'Message can be '"),s("span",{style:{color:"#C9D1D9"}},"), "),s("span",{style:{color:"#D2A8FF"}},"h"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'i'"),s("span",{style:{color:"#C9D1D9"}},", { style: "),s("span",{style:{color:"#A5D6FF"}},"'color: teal'"),s("span",{style:{color:"#C9D1D9"}}," }, "),s("span",{style:{color:"#A5D6FF"}},"'VNode'"),s("span",{style:{color:"#C9D1D9"}},")]),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              showCancelButton: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              confirmButtonText: "),s("span",{style:{color:"#A5D6FF"}},"'OK'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              cancelButtonText: "),s("span",{style:{color:"#A5D6FF"}},"'Cancel'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              "),s("span",{style:{color:"#D2A8FF"}},"beforeClose"),s("span",{style:{color:"#C9D1D9"}},": ("),s("span",{style:{color:"#FFA657"}},"action"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"instance"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"done"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (action "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'confirm'"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                  instance.confirmButtonLoading "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                  instance.confirmButtonText "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'Loading...'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                  "),s("span",{style:{color:"#D2A8FF"}},"setTimeout"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                    "),s("span",{style:{color:"#D2A8FF"}},"done"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                    "),s("span",{style:{color:"#D2A8FF"}},"setTimeout"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                      instance.confirmButtonLoading "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"false"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                    }, "),s("span",{style:{color:"#79C0FF"}},"300"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                  }, "),s("span",{style:{color:"#79C0FF"}},"3000"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                } "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                  "),s("span",{style:{color:"#D2A8FF"}},"done"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"then"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"action"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"catch"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"open"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u6253\u5F00\u8F93\u5165\u6846</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref, getCurrentInstance, h } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"vm"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getCurrentInstance"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          vm.appContext.config.globalProperties")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"$msgbox"),s("span",{style:{color:"#24292F"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              title: "),s("span",{style:{color:"#0A3069"}},"'Message'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              message: "),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'p'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"null"),s("span",{style:{color:"#24292F"}},", ["),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'span'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"null"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'Message can be '"),s("span",{style:{color:"#24292F"}},"), "),s("span",{style:{color:"#8250DF"}},"h"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'i'"),s("span",{style:{color:"#24292F"}},", { style: "),s("span",{style:{color:"#0A3069"}},"'color: teal'"),s("span",{style:{color:"#24292F"}}," }, "),s("span",{style:{color:"#0A3069"}},"'VNode'"),s("span",{style:{color:"#24292F"}},")]),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              showCancelButton: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              confirmButtonText: "),s("span",{style:{color:"#0A3069"}},"'OK'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              cancelButtonText: "),s("span",{style:{color:"#0A3069"}},"'Cancel'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              "),s("span",{style:{color:"#8250DF"}},"beforeClose"),s("span",{style:{color:"#24292F"}},": ("),s("span",{style:{color:"#953800"}},"action"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"instance"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"done"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (action "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'confirm'"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                  instance.confirmButtonLoading "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                  instance.confirmButtonText "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'Loading...'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                  "),s("span",{style:{color:"#8250DF"}},"setTimeout"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                    "),s("span",{style:{color:"#8250DF"}},"done"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                    "),s("span",{style:{color:"#8250DF"}},"setTimeout"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                      instance.confirmButtonLoading "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                    }, "),s("span",{style:{color:"#0550AE"}},"300"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                  }, "),s("span",{style:{color:"#0550AE"}},"3000"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                  "),s("span",{style:{color:"#8250DF"}},"done"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"then"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"action"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"catch"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),H=s("h2",{id:"\u4F7F\u7528-html-\u7247\u6BB5",tabindex:"-1"},"\u4F7F\u7528 HTML \u7247\u6BB5",-1),S=s("p",null,[s("code",null,"message"),l(" \u652F\u6301\u4F20\u5165 HTML \u5B57\u7B26\u4E32\u6765\u4F5C\u4E3A\u6B63\u6587\u5185\u5BB9\u3002")],-1),U=s("p",null,[l("\u5C06 "),s("code",null,"dangerouslyUseHTMLString"),l(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C"),s("code",null,"message"),l(" \u5C5E\u6027\u5C31\u4F1A\u88AB\u5F53\u4F5C HTML \u7247\u6BB5\u5904\u7406\u3002")],-1),X=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"text"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"open"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u6253\u5F00\u5BF9\u8BDD\u6846</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"vm"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getCurrentInstance"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          vm.appContext.config.globalProperties.$msgbox."),s("span",{style:{color:"#D2A8FF"}},"alert"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#A5D6FF"}},"'<strong>proxy is <i>HTML</i> string</strong>'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#A5D6FF"}},"'HTML String'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              dangerouslyUseHTMLString: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"text"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"open"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u6253\u5F00\u5BF9\u8BDD\u6846</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"vm"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getCurrentInstance"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          vm.appContext.config.globalProperties.$msgbox."),s("span",{style:{color:"#8250DF"}},"alert"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0A3069"}},"'<strong>proxy is <i>HTML</i> string</strong>'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0A3069"}},"'HTML String'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              dangerouslyUseHTMLString: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),O=s("h2",{id:"\u533A\u5206\u53D6\u6D88\u64CD\u4F5C\u4E0E\u5173\u95ED\u64CD\u4F5C",tabindex:"-1"},"\u533A\u5206\u53D6\u6D88\u64CD\u4F5C\u4E0E\u5173\u95ED\u64CD\u4F5C",-1),K=s("p",null,"\u6709\u4E9B\u573A\u666F\u4E0B\uFF0C\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u4E0E\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6709\u7740\u4E0D\u540C\u7684\u542B\u4E49\u3002",-1),j=s("p",null,[l("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5F53\u7528\u6237\u89E6\u53D1\u53D6\u6D88\uFF08\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\uFF09\u548C\u89E6\u53D1\u5173\u95ED\uFF08\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u906E\u7F69\u5C42\u3001\u6309\u4E0B ESC \u952E\uFF09\u65F6\uFF0CPromise \u7684 "),s("code",null,"reject"),l(" \u56DE\u8C03\u548C "),s("code",null,"callback"),l(" \u56DE\u8C03\u7684\u53C2\u6570\u5747\u4E3A 'cancel'\u3002 \u5982\u679C\u5C06 distinguishCancelAndClose \u5C5E\u6027\u8BBE\u7F6E\u4E3A true\uFF0C\u5219\u4E0A\u8FF0\u4E24\u79CD\u884C\u4E3A\u7684\u53C2\u6570\u5206\u522B\u4E3A 'cancel' \u548C 'close'\u3002")],-1),z=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"open"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u533A\u5206close\u4E0Ecancel</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"vm"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getCurrentInstance"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},": ("),s("span",{style:{color:"#FFA657"}},"icon"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'warn'"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          vm.appContext.config.globalProperties.$msgbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"confirm"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'\u5373\u5C06\u5220\u9664\u90AE\u4EF6\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u8B66\u544A'"),s("span",{style:{color:"#C9D1D9"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              confirmButtonText: "),s("span",{style:{color:"#A5D6FF"}},"'\u662F\u7684\uFF0C\u6211\u786E\u8BA4'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              cancelButtonText: "),s("span",{style:{color:"#A5D6FF"}},"'\u8FD8\u6CA1\u60F3\u597D'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              distinguishCancelAndClose: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"then"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"action"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              console."),s("span",{style:{color:"#D2A8FF"}},"log"),s("span",{style:{color:"#C9D1D9"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              "),s("span",{style:{color:"#D2A8FF"}},"alert"),s("span",{style:{color:"#C9D1D9"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            ."),s("span",{style:{color:"#D2A8FF"}},"catch"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"action"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              "),s("span",{style:{color:"#D2A8FF"}},"alert"),s("span",{style:{color:"#C9D1D9"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"open"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u533A\u5206close\u4E0Ecancel</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"vm"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getCurrentInstance"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},": ("),s("span",{style:{color:"#953800"}},"icon"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'warn'"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          vm.appContext.config.globalProperties.$msgbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"confirm"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'\u5373\u5C06\u5220\u9664\u90AE\u4EF6\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u8B66\u544A'"),s("span",{style:{color:"#24292F"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              confirmButtonText: "),s("span",{style:{color:"#0A3069"}},"'\u662F\u7684\uFF0C\u6211\u786E\u8BA4'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              cancelButtonText: "),s("span",{style:{color:"#0A3069"}},"'\u8FD8\u6CA1\u60F3\u597D'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              distinguishCancelAndClose: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"then"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"action"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              console."),s("span",{style:{color:"#8250DF"}},"log"),s("span",{style:{color:"#24292F"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              "),s("span",{style:{color:"#8250DF"}},"alert"),s("span",{style:{color:"#24292F"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            ."),s("span",{style:{color:"#8250DF"}},"catch"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"action"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              "),s("span",{style:{color:"#8250DF"}},"alert"),s("span",{style:{color:"#24292F"}},"(action);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),J=s("h2",{id:"\u53EF\u62D6\u62FD",tabindex:"-1"},"\u53EF\u62D6\u62FD",-1),q=s("p",null,[l("\u8BBE\u7F6E "),s("code",null,"draggable"),l("\u5C5E\u6027\u4E3A"),s("code",null,"true"),l("\u6765\u5F00\u542F\u62D6\u62FD\u5F39\u7A97\u80FD\u529B\u3002")],-1),G=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"text"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"open"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u6253\u5F00\u5BF9\u8BDD\u6846</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"vm"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getCurrentInstance"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"open"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          vm.appContext.config.globalProperties.$msgbox."),s("span",{style:{color:"#D2A8FF"}},"alert"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#A5D6FF"}},"'<strong>proxy is <i>HTML</i> string</strong>'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#A5D6FF"}},"'HTML String'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              draggable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              dangerouslyUseHTMLString: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"text"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"open"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u6253\u5F00\u5BF9\u8BDD\u6846</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref, getCurrentInstance } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"vm"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getCurrentInstance"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"open"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          vm.appContext.config.globalProperties.$msgbox."),s("span",{style:{color:"#8250DF"}},"alert"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0A3069"}},"'<strong>proxy is <i>HTML</i> string</strong>'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0A3069"}},"'HTML String'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              draggable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              dangerouslyUseHTMLString: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Q=g(`<h2 id="\u5168\u5C40\u65B9\u6CD5" tabindex="-1">\u5168\u5C40\u65B9\u6CD5</h2><p>\u5982\u679C\u4F60\u5B8C\u6574\u5F15\u5165\u4E86\u672C\u7EC4\u4EF6\u5E93\uFF0C\u5B83\u4F1A\u4E3A <code>app.config.globalProperties</code> \u6DFB\u52A0\u5982\u4E0B\u5168\u5C40\u65B9\u6CD5\uFF1A<code>$msgbox</code>\u3001 <code>$alert</code>\u3001 <code>$confirm</code> \u548C <code>$prompt</code>\u3002 \u56E0\u6B64\u5728 Vue \u5B9E\u4F8B\u4E2D\u53EF\u4EE5\u91C7\u7528\u672C\u9875\u9762\u4E2D\u7684\u65B9\u5F0F\u6765\u8C03\u7528 MessageBox\u3002 \u53C2\u6570\u5982\u4E0B\uFF1A</p><ul><li><code>$msgbox(options)</code></li><li><code>$alert(message, title, options)</code> \u6216 <code>$alert(message, options)</code></li><li><code>$confirm(message, title, options)</code> \u6216 <code>$confirm(message, options)</code></li><li><code>$prompt(message, title, options)</code> \u6216 <code>$prompt(message, options)</code></li></ul><h2 id="\u6309\u9700\u5F15\u5165" tabindex="-1">\u6309\u9700\u5F15\u5165</h2><p>\u5982\u679C\u60A8\u9700\u8981\u6309\u9700\u5F15\u5165 <code>MessageBox</code>\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { XsMessageBox } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;xishui-ui&#39;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { XsMessageBox } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;xishui-ui&#39;</span><span style="color:#24292F;">;</span></span>
<span class="line"></span></code></pre></div><p>\u90A3\u4E48\u5BF9\u5E94\u4E8E\u4E0A\u8FF0\u56DB\u4E2A\u5168\u5C40\u65B9\u6CD5\u7684\u8C03\u7528\u65B9\u6CD5\u4F9D\u6B21\u4E3A\uFF1A<code>XsMessageBox</code>\u3001<code>XsMessageBox.alert</code>\u3001<code>XsMessageBox.confirm</code> \u548C <code>XsMessageBox.prompt</code>\u3002 \u53C2\u6570\u540C\u4E0A\u6240\u8FF0\u3002</p><h2 id="options" tabindex="-1">Options</h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>message</td><td>\u6B63\u6587\u5185\u5BB9</td><td>string / VNode</td><td>\u2014</td><td>\u2014</td></tr><tr><td>dangerouslyUseHTMLString</td><td>\u662F\u5426\u5C06 message \u4F5C\u4E3A HTML \u7247\u6BB5\u5904\u7406 string</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>icon</td><td>\u786E\u8BA4\u6846\u7684 icon</td><td>string</td><td>[danger, info, success, warn]</td><td>warn</td></tr><tr><td>custom-class</td><td>\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>custom-style</td><td>\u81EA\u5B9A\u4E49\u5185\u8054\u6837\u5F0F</td><td>CSSProperties</td><td>\u2014</td><td>\u2014</td></tr><tr><td>callback</td><td>\u82E5\u4E0D\u4F7F\u7528 Promise\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6B64\u53C2\u6570\u6307\u5B9A MessageBox \u5173\u95ED\u540E\u7684\u56DE\u8C03</td><td>function(action, instance)\uFF0Caction \u7684\u503C\u4E3A&#39;confirm&#39;, &#39;cancel&#39;\u6216&#39;close&#39;, instance \u4E3A MessageBox \u5B9E\u4F8B\uFF0C \u53EF\u4EE5\u901A\u8FC7\u5B83\u8BBF\u95EE\u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</td><td>\u2014</td><td>\u2014</td></tr><tr><td>showClose</td><td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>before-close</td><td>\u5173\u95ED\u524D\u7684\u56DE\u8C03\uFF0C\u4F1A\u6682\u505C\u6D88\u606F\u5F39\u51FA\u6846\u7684\u5173\u95ED\u8FC7\u7A0B\u3002</td><td>function(action, instance, done)\uFF0Caction \u7684\u503C\u4E3A&#39;confirm&#39;, &#39;cancel&#39;\u6216&#39;close&#39;\uFF1Binstance \u4E3A MessageBox \u5B9E\u4F8B\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5B83\u8BBF\u95EE\u5B9E\u4F8B\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF1Bdone \u7528\u4E8E\u5173\u95ED MessageBox \u5B9E\u4F8B</td><td>\u2014</td><td>\u2014</td></tr><tr><td>distinguish-cancel-and-close</td><td>\u662F\u5426\u5C06\u53D6\u6D88\uFF08\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\uFF09\u4E0E\u5173\u95ED\uFF08\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u6216\u906E\u7F69\u5C42\u3001\u6309\u4E0B Esc \u952E\uFF09\u8FDB\u884C\u533A\u5206</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>lock-scroll</td><td>\u662F\u5426\u5728 MessageBox \u51FA\u73B0\u65F6\u5C06 body \u6EDA\u52A8\u9501\u5B9A</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-cancel-button</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false\uFF08\u4EE5 prompt \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A true)</td></tr><tr><td>show-confirm-button</td><td>\u662F\u5426\u663E\u793A\u786E\u5B9A\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>Cancel</td></tr><tr><td>confirm-button-text</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u6587\u672C\u5185\u5BB9</td><td>string</td><td>\u2014</td><td>OK</td></tr><tr><td>cancel-button-class</td><td>\u53D6\u6D88\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>confirm-button-class</td><td>\u786E\u5B9A\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u7C7B\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>close-on-click-modal</td><td>\u662F\u5426\u53EF\u901A\u8FC7\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED MessageBox</td><td>boolean</td><td>\u2014</td><td>true\uFF08\u4EE5 alert \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A false\uFF09</td></tr><tr><td>close-on-press-escape</td><td>\u662F\u5426\u53EF\u901A\u8FC7\u6309\u4E0B ESC \u952E\u5173\u95ED MessageBox</td><td>boolean</td><td>\u2014</td><td>true\uFF08\u4EE5 alert \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A false\uFF09</td></tr><tr><td>close-on-hash-change</td><td>\u662F\u5426\u5728 hash \u6539\u53D8\u65F6\u5173\u95ED MessageBox</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>show-input</td><td>\u662F\u5426\u663E\u793A\u8F93\u5165\u6846</td><td>boolean</td><td>\u2014</td><td>false\uFF08\u4EE5 prompt \u65B9\u5F0F\u8C03\u7528\u65F6\u4E3A true\uFF09</td></tr><tr><td>input-placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>input-type</td><td>\u8F93\u5165\u6846\u7684\u7C7B\u578B</td><td>string</td><td>\u2014</td><td>text</td></tr><tr><td>input-value</td><td>\u8F93\u5165\u6846\u7684\u521D\u59CB\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>input-pattern</td><td>\u8F93\u5165\u6846\u7684\u6821\u9A8C\u8868\u8FBE\u5F0F</td><td>regexp</td><td>\u2014</td><td>\u2014</td></tr><tr><td>input-validator</td><td>\u8F93\u5165\u6846\u7684\u6821\u9A8C\u51FD\u6570\u3002 \u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A boolean \u6216\u8005 string\uFF0C \u5982\u679C\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A string \u7C7B\u578B\uFF0C\u90A3\u4E48\u8BE5\u8FD4\u56DE\u503C\u4F1A\u88AB\u8D4B\u503C\u7ED9 inputErrorMessage \u7528\u4E8E\u5411\u7528\u6237\u5C55\u793A\u9519\u8BEF\u6D88\u606F\u3002</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>input-error-message</td><td>\u6821\u9A8C\u672A\u901A\u8FC7\u65F6\u7684\u63D0\u793A\u6587\u672C</td><td>string</td><td>\u2014</td><td>Illegal input</td></tr><tr><td></td><td></td><td></td><td></td><td></td></tr><tr><td>draggable</td><td>MessageBox \u662F\u5426\u53EF\u62D6\u653E</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>round-button</td><td>\u662F\u5426\u4F7F\u7528\u5706\u89D2\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>button-size</td><td>\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u53CA\u53D6\u6D88\u6309\u94AE\u7684\u5927\u5C0F</td><td>string</td><td>small / default / large</td><td>default</td></tr></tbody></table>`,9);function R(a,y,c,p,D,i){const A=B("render-demo-0"),e=B("demo"),E=B("render-demo-1"),n=B("render-demo-2"),r=B("render-demo-3"),o=B("render-demo-4"),t=B("render-demo-5"),u=B("render-demo-6"),m=B("render-demo-7");return b(),f("div",null,[_,C(e,{customClass:"undefined",sourceCode:`<template>
  <xs-button text @click="open">\u6253\u5F00\u5BF9\u8BDD\u6846</xs-button>
</template>
<script>
  import { ref, getCurrentInstance } from 'vue';

  export default {
    setup() {
      const vm = getCurrentInstance();
      return {
        open: () => {
          vm.appContext.config.globalProperties.$msgbox.alert('\u6709\u65F6\u95F4\u591A\u770B\u4E66', 'hello bro');
        }
      };
    }
  };
<\/script>
`},{highlight:d(()=>[k]),default:d(()=>[C(A)]),_:1}),T,C(e,{customClass:"undefined",sourceCode:`<template>
  <xs-button type="warning" @click="() => open('warn')">warn</xs-button>
  <xs-button type="info" @click="() => open('info')">info</xs-button>
  <xs-button type="success" @click="() => open('success')">success</xs-button>
  <xs-button type="danger" @click="() => open('danger')">danger</xs-button>
</template>
<script>
  import { ref, getCurrentInstance } from 'vue';

  export default {
    setup() {
      const vm = getCurrentInstance();
      return {
        open: (icon = 'warn') => {
          vm.appContext.config.globalProperties.$msgbox
            .confirm('\u5373\u5C06\u5220\u9664\u90AE\u4EF6\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F', '\u8B66\u544A', {
              confirmButtonText: '\u662F\u7684\uFF0C\u6211\u786E\u8BA4',
              cancelButtonText: '\u8FD8\u6CA1\u60F3\u597D',
              icon
            })
            .then(action => {
              console.log(action);
            })
            .catch(action => {
              console.log(action);
            });
        }
      };
    }
  };
<\/script>
`},{highlight:d(()=>[w]),default:d(()=>[C(E)]),_:1}),M,C(e,{customClass:"undefined",sourceCode:`<template>
  <xs-button type="primary" @click="open">\u6253\u5F00\u8F93\u5165\u6846</xs-button>
</template>
<script>
  import { ref, getCurrentInstance } from 'vue';

  export default {
    setup() {
      const vm = getCurrentInstance();
      return {
        open: () => {
          vm.appContext.config.globalProperties.$msgbox
            .prompt('\u8F93\u5165\u4F60\u81EA\u5DF1\u7684\u90AE\u7BB1\u5427', '\u90AE\u7BB1\u{1F4EE}', {
              confirmButtonText: '\u4FDD\u5B58',
              inputPattern:
                /[\\w!#$%&'*+/=?^_\`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_\`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,
              inputErrorMessage: '\u4F60\u8F93\u5165\u7684\u90AE\u7BB1\u4E0D\u5BF9\u554A'
            })
            .then(({ value }) => {
              alert(\`\u4F60\u90AE\u7BB1\u662F\${value}\`);
            })
            .catch(() => {
              alert(\`\u653E\u5F03\u8F93\u5165\`);
            });
        }
      };
    }
  };
<\/script>
`},{highlight:d(()=>[$]),default:d(()=>[C(n)]),_:1}),I,P,C(e,{customClass:"undefined",sourceCode:`<template>
  <xs-button type="primary" @click="open">VNode</xs-button>
  <xs-button type="primary" @click="open2">\u52A8\u6001\u6E32\u67D3\u539F\u751Finput\u5143\u7D20</xs-button>
</template>
<script>
  import { ref, getCurrentInstance, h } from 'vue';

  export default {
    setup() {
      const vm = getCurrentInstance();
      return {
        open: () => {
          vm.appContext.config.globalProperties.$msgbox({
            title: 'VNode',
            message: h('p', null, [h('span', null, '\u6D88\u606F\u5185\u5BB9\u53EF\u4EE5\u662F '), h('i', { style: 'color: teal' }, 'VNode')])
          });
        },
        open2: () => {
          const str = ref('');
          vm.appContext.config.globalProperties
            .$msgbox({
              title: 'VNode',
              message: h('input', {
                value: str.value,
                style: {
                  border: '1px #ccc solid',
                  width: '100%',
                  padding: '0 8px'
                },
                placeholder: '\u8FC7\u5E74\u5403\u4EC0\u4E48',
                oninput(val) {
                  str.value = this.value;
                }
              })
            })
            .then(() => {
              console.log(str.value);
            });
        }
      };
    }
  };
<\/script>
`},{highlight:d(()=>[V]),default:d(()=>[C(r)]),_:1}),N,C(e,{customClass:"undefined",sourceCode:`<template>
  <xs-button type="primary" @click="open">\u6253\u5F00\u8F93\u5165\u6846</xs-button>
</template>
<script>
  import { ref, getCurrentInstance, h } from 'vue';

  export default {
    setup() {
      const vm = getCurrentInstance();
      return {
        open: () => {
          vm.appContext.config.globalProperties
            .$msgbox({
              title: 'Message',
              message: h('p', null, [h('span', null, 'Message can be '), h('i', { style: 'color: teal' }, 'VNode')]),
              showCancelButton: true,
              confirmButtonText: 'OK',
              cancelButtonText: 'Cancel',
              beforeClose: (action, instance, done) => {
                if (action === 'confirm') {
                  instance.confirmButtonLoading = true;
                  instance.confirmButtonText = 'Loading...';
                  setTimeout(() => {
                    done();
                    setTimeout(() => {
                      instance.confirmButtonLoading = false;
                    }, 300);
                  }, 3000);
                } else {
                  done();
                }
              }
            })
            .then(action => {
              console.log(action);
            })
            .catch(() => {});
        }
      };
    }
  };
<\/script>
`},{highlight:d(()=>[L]),default:d(()=>[C(o)]),_:1}),H,S,U,C(e,{customClass:"undefined",sourceCode:`<template>
  <xs-button text @click="open">\u6253\u5F00\u5BF9\u8BDD\u6846</xs-button>
</template>
<script>
  import { ref, getCurrentInstance } from 'vue';

  export default {
    setup() {
      const vm = getCurrentInstance();
      return {
        open: () => {
          vm.appContext.config.globalProperties.$msgbox.alert(
            '<strong>proxy is <i>HTML</i> string</strong>',
            'HTML String',
            {
              dangerouslyUseHTMLString: true
            }
          );
        }
      };
    }
  };
<\/script>
`},{highlight:d(()=>[X]),default:d(()=>[C(t)]),_:1}),O,K,j,C(e,{customClass:"undefined",sourceCode:`<template>
  <xs-button @click="open">\u533A\u5206close\u4E0Ecancel</xs-button>
</template>
<script>
  import { ref, getCurrentInstance } from 'vue';

  export default {
    setup() {
      const vm = getCurrentInstance();
      return {
        open: (icon = 'warn') => {
          vm.appContext.config.globalProperties.$msgbox
            .confirm('\u5373\u5C06\u5220\u9664\u90AE\u4EF6\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F', '\u8B66\u544A', {
              confirmButtonText: '\u662F\u7684\uFF0C\u6211\u786E\u8BA4',
              cancelButtonText: '\u8FD8\u6CA1\u60F3\u597D',
              distinguishCancelAndClose: true
            })
            .then(action => {
              console.log(action);
              alert(action);
            })
            .catch(action => {
              alert(action);
            });
        }
      };
    }
  };
<\/script>
`},{highlight:d(()=>[z]),default:d(()=>[C(u)]),_:1}),J,q,C(e,{customClass:"undefined",sourceCode:`<template>
  <xs-button text @click="open">\u6253\u5F00\u5BF9\u8BDD\u6846</xs-button>
</template>
<script>
  import { ref, getCurrentInstance } from 'vue';

  export default {
    setup() {
      const vm = getCurrentInstance();
      return {
        open: () => {
          vm.appContext.config.globalProperties.$msgbox.alert(
            '<strong>proxy is <i>HTML</i> string</strong>',
            'HTML String',
            {
              draggable: true,
              dangerouslyUseHTMLString: true
            }
          );
        }
      };
    }
  };
<\/script>
`},{highlight:d(()=>[G]),default:d(()=>[C(m)]),_:1}),Q])}const Z=x(v,[["render",R]]);export{Y as __pageData,Z as default};
