import{V as v,_ as k,c as w,a as u,w as E,b as s,d as l,e as S,r as _,o as R}from"./app.c8c7bdbc.js";const{defineComponent:T}=v,N=T({name:"component-doc",components:{"render-demo-0":function(){const{renderList:D,Fragment:y,openBlock:n,createElementBlock:t,toDisplayString:i,createElementVNode:e,resolveComponent:c,withCtx:o,createBlock:r}=v;function F(f,p){const h=c("xs-scrollbar");return n(),r(h,{height:"400px"},{default:o(()=>[(n(),t(y,null,D(20,a=>e("p",{key:a,class:"scrollbar-demo-item"},i(a),1)),64))]),_:1})}return{render:F,...{}}}(),"render-demo-1":function(){const{renderList:D,Fragment:y,openBlock:n,createElementBlock:t,toDisplayString:i,createElementVNode:e,resolveComponent:c,withCtx:o,createBlock:r}=v,F={class:"scrollbar-flex-content"};function C(p,h){const a=c("xs-scrollbar");return n(),r(a,null,{default:o(()=>[e("div",F,[(n(),t(y,null,D(50,A=>e("p",{key:A,class:"scrollbar-demo-item2"},i(A),1)),64))])]),_:1})}return{render:C,...{}}}(),"render-demo-2":function(){const{createTextVNode:D,resolveComponent:y,withCtx:n,createVNode:t,renderList:i,Fragment:e,openBlock:c,createElementBlock:o,toDisplayString:r}=v;function F(p,h){const a=y("xs-button"),A=y("xs-scrollbar");return c(),o(e,null,[t(a,{onClick:p.add},{default:n(()=>[D("Add Item")]),_:1},8,["onClick"]),t(a,{onClick:p.onDelete},{default:n(()=>[D("Delete Item")]),_:1},8,["onClick"]),t(A,{"max-height":"400px"},{default:n(()=>[(c(!0),o(e,null,i(p.count,d=>(c(),o("p",{key:d,class:"scrollbar-demo-item3"},r(d),1))),128))]),_:1})],64)}const{ref:C}=v;return{render:F,...{setup:()=>{const p=C(3);return{count:p,add:()=>{p.value++},onDelete:()=>{p.value>0&&p.value--}}}}}}(),"render-demo-3":function(){const{renderList:D,Fragment:y,openBlock:n,createElementBlock:t,toDisplayString:i,createElementVNode:e,resolveComponent:c,withCtx:o,createVNode:r,createTextVNode:F}=v,C={ref:"innerRef"},f=e("br",null,null,-1);function p(d,m){const B=c("xs-scrollbar"),g=c("xs-button");return n(),t(y,null,[r(B,{ref:"scrollbarRef",height:"400px",always:"",onScroll:d.scroll},{default:o(()=>[e("div",C,[(n(),t(y,null,D(20,b=>e("p",{key:b,class:"scrollbar-demo-item4"},i(b),1)),64))],512)]),_:1},8,["onScroll"]),f,r(g,{onClick:m[0]||(m[0]=b=>d.onClick(20))},{default:o(()=>[F("+20")]),_:1}),r(g,{onClick:m[1]||(m[1]=b=>d.onClick(-20))},{default:o(()=>[F("-20")]),_:1})],64)}const{onMounted:h,ref:a}=v;return{render:p,...{setup(){const d=a(0),m=a(0),B=a(),g=a();h(()=>{d.value=B.value.clientHeight-380});const b=x=>{g.value.setScrollTop(x)};return{max:d,innerRef:B,scrollbarRef:g,scroll:({scrollTop:x})=>{m.value=x},formatTooltip:x=>`${x} px`,onClick:x=>{x<0&&m.value<=0||(m.value+=x,b(m.value))}}}}}}(),"render-demo-4":function(){const{renderList:D,Fragment:y,openBlock:n,createElementBlock:t,toDisplayString:i,createElementVNode:e,resolveComponent:c,withCtx:o,createBlock:r}=v,F={style:{width:"1000px"}};function C(p,h){const a=c("xs-scrollbar");return n(),r(a,{always:"",stickyable:""},{default:o(()=>[e("div",F,[(n(),t(y,null,D(50,A=>e("p",{key:A,class:"scrollbar-demo-item5"},i(A),1)),64))])]),_:1})}return{render:C,...{}}}()}}),as=JSON.parse('{"title":"Scrollbar \u6EDA\u52A8\u6761","description":"","frontmatter":{},"headers":[],"relativePath":"components/scrollbar.md","lastUpdated":1672975757000}');const V=s("h1",{id:"scrollbar-\u6EDA\u52A8\u6761",tabindex:"-1"},"Scrollbar \u6EDA\u52A8\u6761",-1),j=s("p",null,[l("\u7528\u4E8E\u66FF\u6362\u6D4F\u89C8\u5668\u539F\u751F\u6EDA\u52A8\u6761\u3002\u517C\u5BB9 "),s("code",null,"element-plus"),l(" \u7684 "),s("a",{href:"https://element-plus.gitee.io/zh-CN/component/scrollbar.html",target:"_blank",rel:"noreferrer"},"el-scrollbar"),l(" \u7684\u6240\u6709\u7528\u6CD5\u3002")],-1),L=s("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},"\u57FA\u7840\u7528\u6CD5",-1),$=s("p",null,[l("\u901A\u8FC7 "),s("code",null,"height"),l(" \u5C5E\u6027\u8BBE\u7F6E\u6EDA\u52A8\u6761\u9AD8\u5EA6\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\u5219\u6839\u636E\u7236\u5BB9\u5668\u9AD8\u5EA6\u81EA\u9002\u5E94\u3002")],-1),I=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"height"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"400px"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-for"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item "),s("span",{style:{color:"#FF7B72"}},"in"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"20"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"scrollbar-demo-item"'),s("span",{style:{color:"#C9D1D9"}},">{{ item }}</"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".scrollbar-demo-item"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"align-items"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"justify-content"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"height"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"50"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"margin"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"text-align"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"border-radius"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"4"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-primary-light-9"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-primary"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"height"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"400px"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-for"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item "),s("span",{style:{color:"#CF222E"}},"in"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"20"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"scrollbar-demo-item"'),s("span",{style:{color:"#24292F"}},">{{ item }}</"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".scrollbar-demo-item"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"align-items"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"justify-content"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"height"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"50"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"margin"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"text-align"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"4"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-primary-light-9"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-primary"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),M=s("h2",{id:"\u6A2A\u5411\u6EDA\u52A8",tabindex:"-1"},"\u6A2A\u5411\u6EDA\u52A8",-1),z=s("p",null,"\u5F53\u5143\u7D20\u5BBD\u5EA6\u5927\u4E8E\u6EDA\u52A8\u6761\u5BBD\u5EA6\u65F6\uFF0C\u4F1A\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\u3002",-1),H=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"scrollbar-flex-content"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-for"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item "),s("span",{style:{color:"#FF7B72"}},"in"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"50"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"scrollbar-demo-item2"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {{ item }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      </"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"scoped"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".scrollbar-flex-content"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".scrollbar-demo-item2"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"flex-shrink"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"align-items"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"justify-content"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"width"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"height"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"50"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"margin"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"!important"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"text-align"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"border-radius"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"4"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-danger-light-9"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-danger"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"scrollbar-flex-content"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-for"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item "),s("span",{style:{color:"#CF222E"}},"in"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"50"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"scrollbar-demo-item2"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {{ item }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      </"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"scoped"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".scrollbar-flex-content"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".scrollbar-demo-item2"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"flex-shrink"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"align-items"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"justify-content"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"width"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"height"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"50"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"margin"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"!important"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"text-align"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"4"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-danger-light-9"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-danger"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),P=s("h2",{id:"\u6700\u5927\u9AD8\u5EA6",tabindex:"-1"},"\u6700\u5927\u9AD8\u5EA6",-1),J=s("p",null,"\u5F53\u5143\u7D20\u9AD8\u5EA6\u8D85\u8FC7\u6700\u5927\u9AD8\u5EA6\uFF0C\u624D\u4F1A\u663E\u793A\u6EDA\u52A8\u6761\u3002",-1),O=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"add"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">Add Item</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"onDelete"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">Delete Item</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"max-height"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"400px"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-for"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item "),s("span",{style:{color:"#FF7B72"}},"in"),s("span",{style:{color:"#C9D1D9"}}," count"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"scrollbar-demo-item3"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      {{ item }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"count"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"3"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"add"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        count.value"),s("span",{style:{color:"#FF7B72"}},"++"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"onDelete"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (count.value "),s("span",{style:{color:"#FF7B72"}},">"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          count.value"),s("span",{style:{color:"#FF7B72"}},"--"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        count,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        add,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        onDelete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".scrollbar-demo-item3"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"align-items"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"justify-content"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"height"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"50"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"margin"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"text-align"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"border-radius"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"4"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-primary-light-9"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-primary"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"add"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">Add Item</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"onDelete"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">Delete Item</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"max-height"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"400px"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-for"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item "),s("span",{style:{color:"#CF222E"}},"in"),s("span",{style:{color:"#24292F"}}," count"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"scrollbar-demo-item3"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      {{ item }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"count"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"3"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"add"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        count.value"),s("span",{style:{color:"#CF222E"}},"++"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"onDelete"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (count.value "),s("span",{style:{color:"#CF222E"}},">"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          count.value"),s("span",{style:{color:"#CF222E"}},"--"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        count,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        add,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        onDelete")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".scrollbar-demo-item3"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"align-items"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"justify-content"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"height"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"50"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"margin"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"text-align"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"4"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-primary-light-9"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-primary"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),U=s("h2",{id:"\u624B\u52A8\u6EDA\u52A8",tabindex:"-1"},"\u624B\u52A8\u6EDA\u52A8",-1),q=s("p",null,[l("\u901A\u8FC7\u4F7F\u7528 "),s("code",null,"setScrollTop"),l(" \u4E0E "),s("code",null,"setScrollLeft"),l(" \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u624B\u52A8\u63A7\u5236\u6EDA\u52A8\u6761\u6EDA\u52A8\u3002")],-1),G=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"scrollbarRef"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"height"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"400px"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"always"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"scroll"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"scroll"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"innerRef"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-for"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item "),s("span",{style:{color:"#FF7B72"}},"in"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"20"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"scrollbar-demo-item4"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {{ item }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      </"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#D2A8FF"}},"onClick"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"20"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">+20</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#D2A8FF"}},"onClick"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FF7B72"}},"-"),s("span",{style:{color:"#79C0FF"}},"20"),s("span",{style:{color:"#C9D1D9"}},")"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">-20</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { onMounted, ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"max"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"innerRef"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"scrollbarRef"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#D2A8FF"}},"onMounted"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        max.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," innerRef.value.clientHeight "),s("span",{style:{color:"#FF7B72"}},"-"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"380"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"inputSlider"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        scrollbarRef.value."),s("span",{style:{color:"#D2A8FF"}},"setScrollTop"),s("span",{style:{color:"#C9D1D9"}},"(value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"scroll"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ({ "),s("span",{style:{color:"#FFA657"}},"scrollTop"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," scrollTop;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"formatTooltip"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#A5D6FF"}},"} px`"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"onClick"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"val"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (val "),s("span",{style:{color:"#FF7B72"}},"<"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"&&"),s("span",{style:{color:"#C9D1D9"}}," value.value "),s("span",{style:{color:"#FF7B72"}},"<="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value.value "),s("span",{style:{color:"#FF7B72"}},"+="),s("span",{style:{color:"#C9D1D9"}}," val;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"inputSlider"),s("span",{style:{color:"#C9D1D9"}},"(value.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        max,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        innerRef,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        scrollbarRef,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        scroll,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        formatTooltip,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        onClick")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"scoped"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".scrollbar-demo-item4"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"align-items"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"justify-content"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"height"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"50"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"margin"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"text-align"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"border-radius"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"4"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-primary-light-9"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-primary"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".el-slider"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"margin-top"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"20"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"ref"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"scrollbarRef"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"height"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"400px"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"always"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"scroll"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"scroll"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"ref"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"innerRef"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-for"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item "),s("span",{style:{color:"#CF222E"}},"in"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"20"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"scrollbar-demo-item4"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {{ item }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      </"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#8250DF"}},"onClick"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"20"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">+20</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#8250DF"}},"onClick"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#CF222E"}},"-"),s("span",{style:{color:"#0550AE"}},"20"),s("span",{style:{color:"#24292F"}},")"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">-20</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { onMounted, ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"max"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"innerRef"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"scrollbarRef"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#8250DF"}},"onMounted"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        max.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," innerRef.value.clientHeight "),s("span",{style:{color:"#CF222E"}},"-"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"380"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"inputSlider"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        scrollbarRef.value."),s("span",{style:{color:"#8250DF"}},"setScrollTop"),s("span",{style:{color:"#24292F"}},"(value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"scroll"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ({ "),s("span",{style:{color:"#953800"}},"scrollTop"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," scrollTop;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"formatTooltip"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#0A3069"}},"} px`"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"onClick"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"val"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (val "),s("span",{style:{color:"#CF222E"}},"<"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"&&"),s("span",{style:{color:"#24292F"}}," value.value "),s("span",{style:{color:"#CF222E"}},"<="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value.value "),s("span",{style:{color:"#CF222E"}},"+="),s("span",{style:{color:"#24292F"}}," val;")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"inputSlider"),s("span",{style:{color:"#24292F"}},"(value.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        max,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        innerRef,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        scrollbarRef,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        scroll,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        formatTooltip,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        onClick")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"scoped"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".scrollbar-demo-item4"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"align-items"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"justify-content"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"height"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"50"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"margin"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"text-align"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"4"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-primary-light-9"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-primary"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".el-slider"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"margin-top"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"20"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),K=s("h2",{id:"\u6A2A\u5411\u6EDA\u52A8\u6761\u5438\u5E95",tabindex:"-1"},"\u6A2A\u5411\u6EDA\u52A8\u6761\u5438\u5E95",-1),Q=s("p",null,[l("\u4F7F\u7528 "),s("code",null,"position: sticky"),l(" \u5B9E\u73B0\uFF0C\u4F7F\u7528\u6709\u4E00\u5B9A\u7684\u524D\u7F6E\u6761\u4EF6\uFF0C\u5982\u679C\u6CA1\u751F\u6548\uFF0C\u68C0\u67E5\u4E0B\u7956\u5148\u5143\u7D20\u662F\u5426\u5B58\u5728 "),s("code",null,"overflow:hidden"),l("\u3002")],-1),W=s("p",null,[l("\u53C2\u8003\u6587\u7AE0\uFF1A"),s("a",{href:"https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/",target:"_blank",rel:"noreferrer"},"https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/")],-1),X=s("p",null,[s("strong",null,[s("em",null,"\u6CE8\u610F\u770B\u4E0B\u9762\u793A\u4F8B\u7684\u6A2A\u5411\u6EDA\u52A8\u6761")])],-1),Y=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"always"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"stickyable"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width: 1000px"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-for"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item "),s("span",{style:{color:"#FF7B72"}},"in"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"50"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"item"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"class"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"scrollbar-demo-item5"'),s("span",{style:{color:"#C9D1D9"}},">{{ item }}</"),s("span",{style:{color:"#7EE787"}},"p"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-scrollbar"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"scoped"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".demo-scrollbar"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".source"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"overflow"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"unset"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"!important"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#8B949E"}},"/* * {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8B949E"}},"    overflow: unset !important;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#8B949E"}},"  } */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".scrollbar-demo-item5"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"display"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"flex"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"align-items"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"justify-content"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"height"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"50"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"width"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"800"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"margin"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"text-align"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"center"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"border-radius"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"4"),s("span",{style:{color:"#FF7B72"}},"px"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-primary-light-9"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-primary"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"always"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"stickyable"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width: 1000px"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-for"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item "),s("span",{style:{color:"#CF222E"}},"in"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"50"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"item"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"class"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"scrollbar-demo-item5"'),s("span",{style:{color:"#24292F"}},">{{ item }}</"),s("span",{style:{color:"#116329"}},"p"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-scrollbar"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"scoped"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".demo-scrollbar"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".source"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"overflow"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"unset"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"!important"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#6E7781"}},"/* * {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E7781"}},"    overflow: unset !important;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6E7781"}},"  } */")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".scrollbar-demo-item5"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"display"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"flex"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"align-items"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"justify-content"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"height"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"50"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"width"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"800"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"margin"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"text-align"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"center"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"border-radius"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"4"),s("span",{style:{color:"#CF222E"}},"px"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-primary-light-9"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-primary"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Z=S('<h2 id="api" tabindex="-1">API</h2><p>\u53BB\u770B <a href="https://element-plus.gitee.io/zh-CN/component/scrollbar.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">el-scrollbar</a>\u7684\u5427\uFF0C\u61D2\u5F97\u5199\u4E86\u3002\u4ED6\u7684 api \u5168\u90E8\u517C\u5BB9.</p><h2 id="\u65B0\u589E-api" tabindex="-1">\u65B0\u589E api</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>stickyable</td><td>\u5E95\u90E8\u7684\u6A2A\u5411\u6EDA\u52A8\u6761\u662F\u5426\u5F00\u542F\u5438\u5E95\u6548\u679C\u3002</td><td>Boolean</td><td>\u9002\u7528\u573A\u666F\uFF1A\u7528\u6237\u6A2A\u5411\u6EDA\u52A8\u65F6\u9700\u8981\u6EDA\u52A8\u5230\u5E95\u90E8\u624D\u53EF\u4EE5\u770B\u5230\u6A2A\u5411\u6EDA\u52A8\u6761</td><td>false</td></tr></tbody></table>',4);function ss(D,y,n,t,i,e){const c=_("render-demo-0"),o=_("demo"),r=_("render-demo-1"),F=_("render-demo-2"),C=_("render-demo-3"),f=_("render-demo-4");return R(),w("div",null,[V,j,L,$,u(o,{customClass:"undefined",sourceCode:`<template>
  <xs-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </xs-scrollbar>
</template>

<style>
  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--xs-color-primary-light-9);
    color: var(--xs-color-primary);
  }
</style>
`},{highlight:E(()=>[I]),default:E(()=>[u(c)]),_:1}),M,z,u(o,{customClass:"undefined",sourceCode:`<template>
  <xs-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item2">
        {{ item }}
      </p>
    </div>
  </xs-scrollbar>
</template>

<style scoped>
  .scrollbar-flex-content {
    display: flex;
  }
  .scrollbar-demo-item2 {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px !important;
    text-align: center;
    border-radius: 4px;
    background: var(--xs-color-danger-light-9);
    color: var(--xs-color-danger);
  }
</style>
`},{highlight:E(()=>[H]),default:E(()=>[u(r)]),_:1}),P,J,u(o,{customClass:"undefined",sourceCode:`<template>
  <xs-button @click="add">Add Item</xs-button>
  <xs-button @click="onDelete">Delete Item</xs-button>
  <xs-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item3">
      {{ item }}
    </p>
  </xs-scrollbar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const count = ref(3);

      const add = () => {
        count.value++;
      };
      const onDelete = () => {
        if (count.value > 0) {
          count.value--;
        }
      };
      return {
        count,
        add,
        onDelete
      };
    }
  };
<\/script>

<style>
  .scrollbar-demo-item3 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--xs-color-primary-light-9);
    color: var(--xs-color-primary);
  }
</style>
`},{highlight:E(()=>[O]),default:E(()=>[u(F)]),_:1}),U,q,u(o,{customClass:"undefined",sourceCode:`<template>
  <xs-scrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
    <div ref="innerRef">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item4">
        {{ item }}
      </p>
    </div>
  </xs-scrollbar>

  <br />

  <xs-button @click="onClick(20)">+20</xs-button>
  <xs-button @click="onClick(-20)">-20</xs-button>
</template>

<script>
  import { onMounted, ref } from 'vue';

  export default {
    setup() {
      const max = ref(0);
      const value = ref(0);
      const innerRef = ref();
      const scrollbarRef = ref();

      onMounted(() => {
        max.value = innerRef.value.clientHeight - 380;
      });

      const inputSlider = value => {
        scrollbarRef.value.setScrollTop(value);
      };
      const scroll = ({ scrollTop }) => {
        value.value = scrollTop;
      };
      const formatTooltip = value => {
        return \`\${value} px\`;
      };

      const onClick = val => {
        if (val < 0 && value.value <= 0) return;

        value.value += val;

        inputSlider(value.value);
      };

      return {
        max,
        innerRef,
        scrollbarRef,
        scroll,
        formatTooltip,
        onClick
      };
    }
  };
<\/script>

<style scoped>
  .scrollbar-demo-item4 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--xs-color-primary-light-9);
    color: var(--xs-color-primary);
  }
  .el-slider {
    margin-top: 20px;
  }
</style>
`},{highlight:E(()=>[G]),default:E(()=>[u(C)]),_:1}),K,Q,W,X,u(o,{customClass:"undefined",sourceCode:`<template>
  <xs-scrollbar always stickyable>
    <div style="width: 1000px">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item5">{{ item }}</p>
    </div>
  </xs-scrollbar>
</template>

<style scoped>
  .demo-scrollbar .source {
    overflow: unset !important;
  }
  /* * {
    overflow: unset !important;
  } */
  .scrollbar-demo-item5 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 800px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--xs-color-primary-light-9);
    color: var(--xs-color-primary);
  }
</style>
`},{highlight:E(()=>[Y]),default:E(()=>[u(f)]),_:1}),Z])}const cs=k(N,[["render",ss]]);export{as as __pageData,cs as default};
