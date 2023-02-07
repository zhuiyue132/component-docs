import{V as A,_,c as g,a as v,w as B,b as s,e as b,r as f,o as V,d as l}from"./app.1fb82f31.js";const{defineComponent:x}=A,N=x({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:y,createVNode:F,createElementVNode:D,toDisplayString:c,createTextVNode:i,Fragment:d,openBlock:E,createElementBlock:t}=A,m=D("br",null,null,-1);function C(e,o){const n=y("xs-date-picker");return E(),t(d,null,[F(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:e.type,"onUpdate:type":o[1]||(o[1]=a=>e.type=a),layout:["day1","day7","day30","date","week","month","year"]},null,8,["modelValue","type"]),m,i(" "+c(e.type)+" / "+c(JSON.stringify(e.value)),1)],64)}const{ref:u}=A;return{render:C,...{setup:()=>{const e=u("day1"),o=u([]);return{type:e,value:o}}}}}(),"render-demo-1":function(){const{createTextVNode:y,resolveComponent:F,withCtx:D,createVNode:c,createElementVNode:i,toDisplayString:d,Fragment:E,openBlock:t,createElementBlock:m}=A,C=i("br",null,null,-1),u=i("br",null,null,-1);function p(n,a){const r=F("xs-button"),h=F("xs-date-picker");return t(),m(E,null,[c(r,{onClick:n.onClick},{default:D(()=>[y("\u5207\u6362\u6587\u6848\u663E\u793A\u72B6\u6001")]),_:1},8,["onClick"]),y(),C,c(h,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=k=>n.value=k),type:n.type,"onUpdate:type":a[1]||(a[1]=k=>n.type=k),"time-label":"\u89E3\u5C01\u65F6\u95F4","show-time-label":n.visible,"default-date":["2022-10-01","2022-10-31"],layout:["date","week","month","year"]},null,8,["modelValue","type","show-time-label"]),u,y(" "+d(n.type)+" / "+d(JSON.stringify(n.value)),1)],64)}const{ref:e}=A;return{render:p,...{setup:()=>{const n=e("month"),a=e([]),r=e(!0);return{type:n,value:a,visible:r,onClick:()=>r.value=!r.value}}}}}(),"render-demo-2":function(){const{resolveComponent:y,createVNode:F,createElementVNode:D,toDisplayString:c,createTextVNode:i,Fragment:d,openBlock:E,createElementBlock:t}=A,m=D("br",null,null,-1);function C(e,o){const n=y("xs-date-picker");return E(),t(d,null,[F(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:e.type,"onUpdate:type":o[1]||(o[1]=a=>e.type=a),"first-day-of-week":0,layout:["date","week"]},null,8,["modelValue","type"]),m,i(" "+c(e.type)+" / "+c(JSON.stringify(e.value)),1)],64)}const{ref:u}=A;return{render:C,...{setup:()=>{const e=u("date"),o=u([]);return{type:e,value:o}}}}}(),"render-demo-3":function(){const{resolveComponent:y,createVNode:F,createElementVNode:D,withCtx:c,Fragment:i,openBlock:d,createElementBlock:E}=A,t=D("span",{style:{color:"red"}},"\u536F\u5154",-1);function m(p,e){const o=y("xs-date-picker");return d(),E(i,null,[F(o,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=n=>p.value=n),type:p.type,"onUpdate:type":e[1]||(e[1]=n=>p.type=n),layout:["date","week","month","year"],alias:{date:"\u5B50\u9F20",week:"\u4E11\u725B",month:"\u5BC5\u864E",year:"\u536F\u5154"},"alias-enable":""},null,8,["modelValue","type"]),F(o,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=n=>p.value=n),type:p.type,"onUpdate:type":e[3]||(e[3]=n=>p.type=n),layout:["date","week","month","year"],alias:{date:"\u5B50\u9F20",week:"\u4E11\u725B",month:"\u5BC5\u864E",year:"\u536F\u5154"},"alias-enable":""},{year:c(()=>[t]),_:1},8,["modelValue","type"])],64)}const{ref:C}=A;return{render:m,...{setup:()=>{const p=C("month"),e=C([]);return{type:p,value:e}}}}}(),"render-demo-4":function(){const{createElementVNode:y,resolveComponent:F,createVNode:D,Fragment:c,openBlock:i,createElementBlock:d}=A,E=y("h4",null,"1.\u9ED8\u8BA4",-1),t=y("h4",null,"2.\u9009\u4E2D\u7B2C\u4E00\u4E2A\u65F6\u95F4\u540E\uFF0C\u53EA\u80FD\u9009\u524D\u540E7\u5929",-1),m=y("h4",null,"3.\u5F00\u542F\u9634\u5386\u548C\u9633\u5386\u7684\u5FEB\u6377\u9009\u9879",-1);function C(e,o){const n=F("xs-date-picker");return i(),d(c,null,[E,D(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:e.type,"onUpdate:type":o[1]||(o[1]=a=>e.type=a),layout:["date","month","daterange"]},null,8,["modelValue","type"]),t,D(n,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=a=>e.value=a),type:e.type,"onUpdate:type":o[3]||(o[3]=a=>e.type=a),layout:["date","month","daterange"],dateRangeMaxInterval:7},null,8,["modelValue","type"]),m,D(n,{modelValue:e.value,"onUpdate:modelValue":o[4]||(o[4]=a=>e.value=a),type:e.type,"onUpdate:type":o[5]||(o[5]=a=>e.type=a),layout:["date","month","daterange"],shortcutsYearRange:[2020,2022],shortcutsEnable:""},null,8,["modelValue","type"])],64)}const{ref:u}=A;return{render:C,...{setup:()=>{const e=u("date"),o=u([]);return{type:e,value:o}}}}}(),"render-demo-5":function(){const{resolveComponent:y,createVNode:F,createElementVNode:D,toDisplayString:c,createTextVNode:i,Fragment:d,openBlock:E,createElementBlock:t}=A,m=D("br",null,null,-1),C=D("br",null,null,-1);function u(o,n){const a=y("xs-date-picker");return E(),t(d,null,[F(a,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=r=>o.value=r),type:o.type,"onUpdate:type":n[1]||(n[1]=r=>o.type=r),currentDisabledType:["week","month","year"],layout:["date","week","month","year"]},null,8,["modelValue","type"]),m,F(a,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=r=>o.value=r),type:o.type,"onUpdate:type":n[3]||(n[3]=r=>o.type=r),currentDisabledType:[],layout:["date","week","month","year"]},null,8,["modelValue","type"]),C,i(" "+c(o.type)+" / "+c(JSON.stringify(o.value)),1)],64)}const{ref:p}=A;return{render:u,...{setup:()=>{const o=p("date"),n=p([]);return{type:o,value:n}}}}}(),"render-demo-6":function(){const{resolveComponent:y,createVNode:F,createElementVNode:D,toDisplayString:c,createTextVNode:i,Fragment:d,openBlock:E,createElementBlock:t}=A,m=D("br",null,null,-1),C=D("br",null,null,-1);function u(o,n){const a=y("xs-date-picker");return E(),t(d,null,[F(a,{modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=r=>o.value=r),type:o.type,"onUpdate:type":n[1]||(n[1]=r=>o.type=r),layout:["day7","day14","day30"]},null,8,["modelValue","type"]),m,F(a,{modelValue:o.value,"onUpdate:modelValue":n[2]||(n[2]=r=>o.value=r),type:o.type,"onUpdate:type":n[3]||(n[3]=r=>o.type=r),includesToday:"",layout:["day7","day14","day30"]},null,8,["modelValue","type"]),C,i(" "+c(o.type)+" / "+c(JSON.stringify(o.value)),1)],64)}const{ref:p}=A;return{render:u,...{setup:()=>{const o=p("day7"),n=p([]);return{type:o,value:n}}}}}(),"render-demo-7":function(){const{resolveComponent:y,createVNode:F,createElementVNode:D,toDisplayString:c,createTextVNode:i,Fragment:d,openBlock:E,createElementBlock:t}=A,m=D("br",null,null,-1);function C(e,o){const n=y("xs-date-picker");return E(),t(d,null,[F(n,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),type:e.type,"onUpdate:type":o[1]||(o[1]=a=>e.type=a),limitEndDate:"2022-12-15",limitStartDate:"2022-11-01",layout:["date","week","month","year"]},null,8,["modelValue","type"]),m,i(" "+c(e.type)+" / "+c(JSON.stringify(e.value)),1)],64)}const{ref:u}=A;return{render:C,...{setup:()=>{const e=u("date"),o=u([]);return{type:e,value:o}}}}}()}}),as=JSON.parse('{"title":"DatePicker \u65F6\u95F4\u7C7B\u578B\u9009\u62E9","description":"","frontmatter":{},"headers":[],"relativePath":"components/datepicker.md","lastUpdated":1672049745000}');const w=s("h1",{id:"datepicker-\u65F6\u95F4\u7C7B\u578B\u9009\u62E9",tabindex:"-1"},"DatePicker \u65F6\u95F4\u7C7B\u578B\u9009\u62E9",-1),S=s("p",null,"\u672C\u7EC4\u4EF6\u548C BI \u7CFB\u7EDF\u4E1A\u52A1\u606F\u606F\u76F8\u5173,\u4E00\u822C\u5728\u9875\u9762\u4E2D\u4EE5\u53F3\u5BF9\u9F50\u5C55\u793A\u3002",-1),T=s("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},"\u57FA\u672C\u7528\u6CD5",-1),O=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'day1'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'day7'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'day30'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'week'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'year'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  {{ type }} / {{ "),s("span",{style:{color:"#79C0FF"}},"JSON"),s("span",{style:{color:"#C9D1D9"}},"."),s("span",{style:{color:"#D2A8FF"}},"stringify"),s("span",{style:{color:"#C9D1D9"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'day1'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".vp-doc"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#7EE787"}},"li"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#7EE787"}},"li"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"margin-top"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'day1'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'day7'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'day30'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'week'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'year'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  {{ type }} / {{ "),s("span",{style:{color:"#0550AE"}},"JSON"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#8250DF"}},"stringify"),s("span",{style:{color:"#24292F"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'day1'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".vp-doc"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#116329"}},"li"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"margin-top"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),U=s("h2",{id:"\u9ED8\u8BA4\u65E5\u671F-\u9ED8\u8BA4\u7C7B\u578B-\u65F6\u95F4\u6587\u6848",tabindex:"-1"},"\u9ED8\u8BA4\u65E5\u671F/\u9ED8\u8BA4\u7C7B\u578B/\u65F6\u95F4\u6587\u6848",-1),J=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"onClick"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u5207\u6362\u6587\u6848\u663E\u793A\u72B6\u6001</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},"> <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"time-label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"\u89E3\u5C01\u65F6\u95F4"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"show-time-label"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"visible"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"default-date"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'2022-10-01'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'2022-10-31'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'week'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'year'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  {{ type }} / {{ "),s("span",{style:{color:"#79C0FF"}},"JSON"),s("span",{style:{color:"#C9D1D9"}},"."),s("span",{style:{color:"#D2A8FF"}},"stringify"),s("span",{style:{color:"#C9D1D9"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"visible"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"onClick"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," (visible.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"!"),s("span",{style:{color:"#C9D1D9"}},"visible.value);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        visible,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        onClick")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"onClick"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u5207\u6362\u6587\u6848\u663E\u793A\u72B6\u6001</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},"> <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"time-label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u89E3\u5C01\u65F6\u95F4"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"show-time-label"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"visible"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"default-date"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'2022-10-01'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'2022-10-31'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'week'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'year'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  {{ type }} / {{ "),s("span",{style:{color:"#0550AE"}},"JSON"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#8250DF"}},"stringify"),s("span",{style:{color:"#24292F"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"visible"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"onClick"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," (visible.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"visible.value);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        visible,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        onClick")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),R=s("h2",{id:"\u8BBE\u7F6E\u6BCF\u5468\u8D77\u59CB\u8BA1\u7B97\u65F6\u95F4",tabindex:"-1"},"\u8BBE\u7F6E\u6BCF\u5468\u8D77\u59CB\u8BA1\u7B97\u65F6\u95F4",-1),I=s("p",null,"firstDayOfWeek : [0-6] ,\u5373\u5468\u65E5-\u5468\u516D",-1),M=s("div",{class:"danger custom-block"},[s("p",{class:"custom-block-title"},"DANGER"),s("p",null,"\u5C3D\u91CF\u6BCF\u4E2A\u9875\u9762\u53EA\u6709\u4E00\u4E2A\u672C\u7EC4\u4EF6\uFF0C\u5426\u5219\u661F\u671F\u8D77\u59CB\u7684\u8BBE\u7F6E\u4F1A\u56E0\u4E3A\u540E\u65B9\u7684\u7EC4\u4EF6\u800C\u91CD\u7F6E\u3002")],-1),Y=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"first-day-of-week"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'week'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  {{ type }} / {{ "),s("span",{style:{color:"#79C0FF"}},"JSON"),s("span",{style:{color:"#C9D1D9"}},"."),s("span",{style:{color:"#D2A8FF"}},"stringify"),s("span",{style:{color:"#C9D1D9"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"first-day-of-week"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'week'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  {{ type }} / {{ "),s("span",{style:{color:"#0550AE"}},"JSON"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#8250DF"}},"stringify"),s("span",{style:{color:"#24292F"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),L=s("h2",{id:"\u81EA\u5B9A\u4E49\u65F6\u95F4\u7C7B\u578B\u7684\u522B\u540D",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u65F6\u95F4\u7C7B\u578B\u7684\u522B\u540D",-1),$=s("p",null,"\u53EF\u4EE5\u901A\u8FC7 props \u6216 slot \u7684\u65B9\u5F0F\u4FEE\u6539\u540D\u79F0\u7684\u663E\u793A\uFF1B",-1),P=s("p",null,"\u6BCF\u4E00\u4E2A\u65F6\u95F4\u7C7B\u578B\u90FD\u5BF9\u5E94\u4E86\u4E00\u4E2A\u540C\u540D\u7684 slot.",-1),W=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'week'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'year'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"alias"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"{ date: "),s("span",{style:{color:"#A5D6FF"}},"'\u5B50\u9F20'"),s("span",{style:{color:"#C9D1D9"}},", week: "),s("span",{style:{color:"#A5D6FF"}},"'\u4E11\u725B'"),s("span",{style:{color:"#C9D1D9"}},", month: "),s("span",{style:{color:"#A5D6FF"}},"'\u5BC5\u864E'"),s("span",{style:{color:"#C9D1D9"}},", year: "),s("span",{style:{color:"#A5D6FF"}},"'\u536F\u5154'"),s("span",{style:{color:"#C9D1D9"}}," }"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"alias-enable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'week'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'year'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"alias"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"{ date: "),s("span",{style:{color:"#A5D6FF"}},"'\u5B50\u9F20'"),s("span",{style:{color:"#C9D1D9"}},", week: "),s("span",{style:{color:"#A5D6FF"}},"'\u4E11\u725B'"),s("span",{style:{color:"#C9D1D9"}},", month: "),s("span",{style:{color:"#A5D6FF"}},"'\u5BC5\u864E'"),s("span",{style:{color:"#C9D1D9"}},", year: "),s("span",{style:{color:"#A5D6FF"}},"'\u536F\u5154'"),s("span",{style:{color:"#C9D1D9"}}," }"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"alias-enable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"year"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"color:red"'),s("span",{style:{color:"#C9D1D9"}},">\u536F\u5154</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-date-picker"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'week'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'year'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"alias"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"{ date: "),s("span",{style:{color:"#0A3069"}},"'\u5B50\u9F20'"),s("span",{style:{color:"#24292F"}},", week: "),s("span",{style:{color:"#0A3069"}},"'\u4E11\u725B'"),s("span",{style:{color:"#24292F"}},", month: "),s("span",{style:{color:"#0A3069"}},"'\u5BC5\u864E'"),s("span",{style:{color:"#24292F"}},", year: "),s("span",{style:{color:"#0A3069"}},"'\u536F\u5154'"),s("span",{style:{color:"#24292F"}}," }"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"alias-enable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'week'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'year'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"alias"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"{ date: "),s("span",{style:{color:"#0A3069"}},"'\u5B50\u9F20'"),s("span",{style:{color:"#24292F"}},", week: "),s("span",{style:{color:"#0A3069"}},"'\u4E11\u725B'"),s("span",{style:{color:"#24292F"}},", month: "),s("span",{style:{color:"#0A3069"}},"'\u5BC5\u864E'"),s("span",{style:{color:"#24292F"}},", year: "),s("span",{style:{color:"#0A3069"}},"'\u536F\u5154'"),s("span",{style:{color:"#24292F"}}," }"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"alias-enable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"year"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"color:red"'),s("span",{style:{color:"#24292F"}},">\u536F\u5154</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-date-picker"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),j=s("h2",{id:"\u81EA\u5B9A\u4E49\u65F6\u95F4\u8303\u56F4\u7684\u9009\u62E9\u9700\u8981\u5355\u72EC\u8BF4\u8BF4",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u65F6\u95F4\u8303\u56F4\u7684\u9009\u62E9\u9700\u8981\u5355\u72EC\u8BF4\u8BF4",-1),z=s("p",null,"daterange \u7684\u9009\u62E9\u6709 2 \u79CD\uFF0C\u4E00\u79CD\u5C31\u662F\u9ED8\u8BA4\u7684\u4EFB\u610F\u8303\u56F4\u3002\u4E00\u79CD\u662F\u6709\u6700\u5927\u9009\u62E9\u5929\u6570\u7684\u9650\u5236\u3002",-1),G=s("p",null,"\u6B64\u5916\uFF0C\u8BE5\u7C7B\u578B\u8FD8\u81EA\u5E26\u6709 shortcuts \u9633\u5386\u9634\u5386\u7684\u5FEB\u6377\u83DC\u5355\u3002",-1),q=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"h4"),s("span",{style:{color:"#C9D1D9"}},">1.\u9ED8\u8BA4</"),s("span",{style:{color:"#7EE787"}},"h4"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'daterange'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"h4"),s("span",{style:{color:"#C9D1D9"}},">2.\u9009\u4E2D\u7B2C\u4E00\u4E2A\u65F6\u95F4\u540E\uFF0C\u53EA\u80FD\u9009\u524D\u540E7\u5929</"),s("span",{style:{color:"#7EE787"}},"h4"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'daterange'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"dateRangeMaxInterval"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"7"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"h4"),s("span",{style:{color:"#C9D1D9"}},">3.\u5F00\u542F\u9634\u5386\u548C\u9633\u5386\u7684\u5FEB\u6377\u9009\u9879</"),s("span",{style:{color:"#7EE787"}},"h4"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'daterange'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"shortcutsYearRange"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#79C0FF"}},"2020"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"2022"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"shortcutsEnable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"h4"),s("span",{style:{color:"#24292F"}},">1.\u9ED8\u8BA4</"),s("span",{style:{color:"#116329"}},"h4"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'daterange'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"h4"),s("span",{style:{color:"#24292F"}},">2.\u9009\u4E2D\u7B2C\u4E00\u4E2A\u65F6\u95F4\u540E\uFF0C\u53EA\u80FD\u9009\u524D\u540E7\u5929</"),s("span",{style:{color:"#116329"}},"h4"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'daterange'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"dateRangeMaxInterval"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"7"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"h4"),s("span",{style:{color:"#24292F"}},">3.\u5F00\u542F\u9634\u5386\u548C\u9633\u5386\u7684\u5FEB\u6377\u9009\u9879</"),s("span",{style:{color:"#116329"}},"h4"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'daterange'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"shortcutsYearRange"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0550AE"}},"2020"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"2022"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"shortcutsEnable")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),H=s("h2",{id:"\u672C\u5E74-\u672C\u6708-\u672C\u5468\u662F\u5426\u53EF\u9009-\u5982\u679C\u5305\u542B\u5728\u6570\u7EC4\u91CC-\u5219\u4E0D\u53EF\u9009",tabindex:"-1"},"\u672C\u5E74/\u672C\u6708/\u672C\u5468\u662F\u5426\u53EF\u9009\uFF0C\u5982\u679C\u5305\u542B\u5728\u6570\u7EC4\u91CC\uFF0C\u5219\u4E0D\u53EF\u9009",-1),K=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"currentDisabledType"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'week'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'year'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'week'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'year'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"currentDisabledType"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"[]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'week'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'year'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  {{ type }} / {{ "),s("span",{style:{color:"#79C0FF"}},"JSON"),s("span",{style:{color:"#C9D1D9"}},"."),s("span",{style:{color:"#D2A8FF"}},"stringify"),s("span",{style:{color:"#C9D1D9"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"currentDisabledType"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'week'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'year'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'week'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'year'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"currentDisabledType"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"[]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'week'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'year'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  {{ type }} / {{ "),s("span",{style:{color:"#0550AE"}},"JSON"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#8250DF"}},"stringify"),s("span",{style:{color:"#24292F"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Q=s("h2",{id:"_7-\u5929-14-\u5929-30-\u5929-\u7684\u65F6\u95F4\u6BB5\u4E2D\u662F\u5426\u5305\u542B\u4ECA\u5929",tabindex:"-1"},"7 \u5929\uFF0C 14 \u5929, 30 \u5929 \u7684\u65F6\u95F4\u6BB5\u4E2D\u662F\u5426\u5305\u542B\u4ECA\u5929",-1),X=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'day7'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'day14'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'day30'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"includesToday"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'day7'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'day14'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'day30'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  {{ type }} / {{ "),s("span",{style:{color:"#79C0FF"}},"JSON"),s("span",{style:{color:"#C9D1D9"}},"."),s("span",{style:{color:"#D2A8FF"}},"stringify"),s("span",{style:{color:"#C9D1D9"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'day7'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'day7'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'day14'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'day30'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"includesToday"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'day7'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'day14'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'day30'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  {{ type }} / {{ "),s("span",{style:{color:"#0550AE"}},"JSON"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#8250DF"}},"stringify"),s("span",{style:{color:"#24292F"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'day7'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Z=s("h2",{id:"\u53EF\u9009\u65F6\u95F4\u9650\u5236",tabindex:"-1"},"\u53EF\u9009\u65F6\u95F4\u9650\u5236",-1),ss=s("p",null,"2022-11-01 ~ 2022-12-15 \u53EF\u9009\u3002",-1),ls=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},":"),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"type"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"limitEndDate"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"2022-12-15"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"limitStartDate"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"2022-11-01"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"layout"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"["),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'week'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'month'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'year'"),s("span",{style:{color:"#C9D1D9"}},"]"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  {{ type }} / {{ "),s("span",{style:{color:"#79C0FF"}},"JSON"),s("span",{style:{color:"#C9D1D9"}},"."),s("span",{style:{color:"#D2A8FF"}},"stringify"),s("span",{style:{color:"#C9D1D9"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-date-picker")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},":"),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"type"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"limitEndDate"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"2022-12-15"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"limitStartDate"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"2022-11-01"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"layout"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"["),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'week'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'month'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'year'"),s("span",{style:{color:"#24292F"}},"]"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  {{ type }} / {{ "),s("span",{style:{color:"#0550AE"}},"JSON"),s("span",{style:{color:"#24292F"}},"."),s("span",{style:{color:"#8250DF"}},"stringify"),s("span",{style:{color:"#24292F"}},"(value) }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        type,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        value")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),os=b('<h2 id="\u6240\u6709\u7684\u65F6\u95F4\u7C7B\u578B" tabindex="-1">\u6240\u6709\u7684\u65F6\u95F4\u7C7B\u578B</h2><p><img src="https://picture.zhuiyue.vip:444/images/2022/12/26/gR1tL5.png" alt="gR1tL5"></p><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>layout</td><td>\u65F6\u95F4\u7C7B\u578B\uFF0C\u5FC5\u586B</td><td>array</td><td></td><td></td></tr><tr><td>modelValue/v-model</td><td>\u9009\u4E2D\u7684\u65F6\u95F4</td><td>array</td><td></td><td></td></tr><tr><td>type/v-model:type</td><td>\u9009\u4E2D\u7684\u7C7B\u578B</td><td>string</td><td></td><td></td></tr><tr><td>defalutDate</td><td>\u9ED8\u8BA4\u9009\u4E2D\u7684\u65F6\u95F4\uFF0C\u53EA\u5728\u521D\u59CB\u5316\u6709\u7528</td><td>array</td><td></td><td></td></tr><tr><td>immediate</td><td>\u662F\u5426\u7ACB\u5373\u89E6\u53D1 change \u4E8B\u4EF6</td><td>boolean</td><td></td><td>true</td></tr><tr><td>timeLabel</td><td>\u65F6\u95F4\u63CF\u8FF0\u6587\u6848</td><td>string</td><td></td><td>\u7EDF\u8BA1\u65F6\u95F4</td></tr><tr><td>showTimeLabel</td><td>\u662F\u5426\u5C55\u793A\u65F6\u95F4\u8303\u56F4\u548C\u63CF\u8FF0\u6587\u6848</td><td>boolean</td><td></td><td>true</td></tr><tr><td>limitEndDate</td><td>\u65E5\u671F\u6700\u540E\u53EF\u9009\u62E9\u65F6\u95F4</td><td>string</td><td></td><td>\u6628\u5929</td></tr><tr><td>limitStartDate</td><td>\u65E5\u671F\u6700\u524D\u53EF\u9009\u62E9\u65F6\u95F4</td><td>string</td><td></td><td></td></tr><tr><td>currentDisabledType</td><td>\u672C\u5E74/\u672C\u6708/\u672C\u5468\u662F\u5426\u53EF\u9009\uFF0C\u5982\u679C\u5305\u542B\u5728\u6570\u7EC4\u91CC\uFF0C\u5219\u4E0D\u53EF\u9009</td><td>array</td><td></td><td>[&#39;year&#39;, &#39;month&#39;, &#39;week&#39;]</td></tr><tr><td>includesToday</td><td>day7\uFF0C day14, day30 \u7684\u65F6\u95F4\u6BB5\u4E2D\u662F\u5426\u5305\u542B\u4ECA\u5929\uFF1B</td><td>boolean</td><td></td><td></td></tr><tr><td>firstDayOfWeek</td><td>\u5468\u8D77\u59CB\u65E5</td><td>number</td><td>[0,6]\uFF0C \u5468\u65E5\u5230\u5468\u516D</td><td>1</td></tr><tr><td>dateRangeMaxInterval</td><td>\u9009\u62E9\u65F6\u95F4\u6BB5\u65F6\uFF0C\u6700\u5927\u95F4\u9694\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u5929\uFF0C\u5927\u4E8E 0 \u751F\u6548</td><td>number</td><td></td><td>0</td></tr><tr><td>alias</td><td>\u65F6\u95F4\u7C7B\u578B\u522B\u540D</td><td>object</td><td></td><td>{}</td></tr><tr><td>aliasEnable</td><td>\u662F\u5426\u542F\u7528\u65F6\u95F4\u7C7B\u578B\u522B\u540D</td><td>boolean</td><td></td><td></td></tr><tr><td>shortcutsYearRange</td><td>\u5FEB\u6377\u9009\u9879\u5E74\u4EFD\u8303\u56F4[2019, 2022]</td><td>array</td><td></td><td>[]\u9ED8\u8BA4\u8BA1\u7B97\u6700\u8FD1 2 \u5E74</td></tr><tr><td>shortcutsEnable</td><td>\u5FEB\u6377\u9009\u9879\u662F\u5426\u53EF\u7528</td><td>boolean</td><td></td><td></td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>{ type: string, value: array }</code></td></tr><tr><td>selectAll</td><td>\u70B9\u51FB\u201D\u5168\u90E8\u201C\u7C7B\u578B\u65F6\u89E6\u53D1</td><td>\u9700\u8981\u4F60\u81EA\u5DF1\u624B\u52A8\u8BBE\u7F6E\u65F6\u95F4\u54E6</td></tr></tbody></table><h2 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD</h2><p>\u6BCF\u4E00\u4E2A\u65F6\u95F4\u7C7B\u578B\u90FD\u6709\u4E00\u4E2A\u540C\u540D\u63D2\u69FD\uFF0C\u6CA1\u6709\u53C2\u6570\u3002</p>',8);function es(y,F,D,c,i,d){const E=f("render-demo-0"),t=f("demo"),m=f("render-demo-1"),C=f("render-demo-2"),u=f("render-demo-3"),p=f("render-demo-4"),e=f("render-demo-5"),o=f("render-demo-6"),n=f("render-demo-7");return V(),g("div",null,[w,S,T,v(t,{customClass:"undefined",sourceCode:`<template>
  <xs-date-picker
    v-model="value"
    v-model:type="type"
    :layout="['day1', 'day7', 'day30', 'date', 'week', 'month', 'year']"
  />

  <br />

  {{ type }} / {{ JSON.stringify(value) }}
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const type = ref('day1');
      const value = ref([]);

      return {
        type,
        value
      };
    }
  };
<\/script>
<style>
  .vp-doc li + li {
    margin-top: 0;
  }
</style>
`},{highlight:B(()=>[O]),default:B(()=>[v(E)]),_:1}),U,v(t,{customClass:"undefined",sourceCode:`<template>
  <xs-button @click="onClick">\u5207\u6362\u6587\u6848\u663E\u793A\u72B6\u6001</xs-button> <br />

  <xs-date-picker
    v-model="value"
    v-model:type="type"
    time-label="\u89E3\u5C01\u65F6\u95F4"
    :show-time-label="visible"
    :default-date="['2022-10-01', '2022-10-31']"
    :layout="['date', 'week', 'month', 'year']"
  />

  <br />

  {{ type }} / {{ JSON.stringify(value) }}
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const type = ref('month');
      const value = ref([]);
      const visible = ref(true);
      const onClick = () => (visible.value = !visible.value);

      return {
        type,
        value,
        visible,
        onClick
      };
    }
  };
<\/script>
`},{highlight:B(()=>[J]),default:B(()=>[v(m)]),_:1}),R,I,M,v(t,{customClass:"undefined",sourceCode:`<template>
  <xs-date-picker v-model="value" v-model:type="type" :first-day-of-week="0" :layout="['date', 'week']" />

  <br />

  {{ type }} / {{ JSON.stringify(value) }}
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const type = ref('date');
      const value = ref([]);

      return {
        type,
        value
      };
    }
  };
<\/script>
`},{highlight:B(()=>[Y]),default:B(()=>[v(C)]),_:1}),L,$,P,v(t,{customClass:"undefined",sourceCode:`<template>
  <xs-date-picker
    v-model="value"
    v-model:type="type"
    :layout="['date', 'week', 'month', 'year']"
    :alias="{ date: '\u5B50\u9F20', week: '\u4E11\u725B', month: '\u5BC5\u864E', year: '\u536F\u5154' }"
    alias-enable
  />

  <xs-date-picker
    v-model="value"
    v-model:type="type"
    :layout="['date', 'week', 'month', 'year']"
    :alias="{ date: '\u5B50\u9F20', week: '\u4E11\u725B', month: '\u5BC5\u864E', year: '\u536F\u5154' }"
    alias-enable
  >
    <template #year>
      <span style="color:red">\u536F\u5154</span>
    </template>
  </xs-date-picker>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const type = ref('month');
      const value = ref([]);

      return {
        type,
        value
      };
    }
  };
<\/script>
`},{highlight:B(()=>[W]),default:B(()=>[v(u)]),_:1}),j,z,G,v(t,{customClass:"undefined",sourceCode:`<template>
  <h4>1.\u9ED8\u8BA4</h4>
  <xs-date-picker v-model="value" v-model:type="type" :layout="['date', 'month', 'daterange']" />
  <h4>2.\u9009\u4E2D\u7B2C\u4E00\u4E2A\u65F6\u95F4\u540E\uFF0C\u53EA\u80FD\u9009\u524D\u540E7\u5929</h4>
  <xs-date-picker
    v-model="value"
    v-model:type="type"
    :layout="['date', 'month', 'daterange']"
    :dateRangeMaxInterval="7"
  />
  <h4>3.\u5F00\u542F\u9634\u5386\u548C\u9633\u5386\u7684\u5FEB\u6377\u9009\u9879</h4>
  <xs-date-picker
    v-model="value"
    v-model:type="type"
    :layout="['date', 'month', 'daterange']"
    :shortcutsYearRange="[2020, 2022]"
    shortcutsEnable
  />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const type = ref('date');
      const value = ref([]);

      return {
        type,
        value
      };
    }
  };
<\/script>
`},{highlight:B(()=>[q]),default:B(()=>[v(p)]),_:1}),H,v(t,{customClass:"undefined",sourceCode:`<template>
  <xs-date-picker
    v-model="value"
    v-model:type="type"
    :currentDisabledType="['week', 'month', 'year']"
    :layout="['date', 'week', 'month', 'year']"
  />

  <br />

  <xs-date-picker
    v-model="value"
    v-model:type="type"
    :currentDisabledType="[]"
    :layout="['date', 'week', 'month', 'year']"
  />
  <br />

  {{ type }} / {{ JSON.stringify(value) }}
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const type = ref('date');
      const value = ref([]);

      return {
        type,
        value
      };
    }
  };
<\/script>
`},{highlight:B(()=>[K]),default:B(()=>[v(e)]),_:1}),Q,v(t,{customClass:"undefined",sourceCode:`<template>
  <xs-date-picker v-model="value" v-model:type="type" :layout="['day7', 'day14', 'day30']" />

  <br />

  <xs-date-picker v-model="value" v-model:type="type" includesToday :layout="['day7', 'day14', 'day30']" />
  <br />

  {{ type }} / {{ JSON.stringify(value) }}
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const type = ref('day7');
      const value = ref([]);

      return {
        type,
        value
      };
    }
  };
<\/script>
`},{highlight:B(()=>[X]),default:B(()=>[v(o)]),_:1}),Z,ss,v(t,{customClass:"undefined",sourceCode:`<template>
  <xs-date-picker
    v-model="value"
    v-model:type="type"
    limitEndDate="2022-12-15"
    limitStartDate="2022-11-01"
    :layout="['date', 'week', 'month', 'year']"
  />

  <br />

  {{ type }} / {{ JSON.stringify(value) }}
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const type = ref('date');
      const value = ref([]);

      return {
        type,
        value
      };
    }
  };
<\/script>
`},{highlight:B(()=>[ls]),default:B(()=>[v(n)]),_:1}),os])}const ts=_(N,[["render",es]]);export{as as __pageData,ts as default};
