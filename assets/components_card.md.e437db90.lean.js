import{V as D,_,c as x,a as i,w as d,b as s,e as h,r as m,o as v,d as l}from"./app.d0830d1d.js";const{defineComponent:k}=D,g=k({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:t,createVNode:c,withCtx:e,openBlock:r,createBlock:F}=D;function C(o,n){const E=t("xs-tabs"),a=t("xs-card");return r(),F(a,{header:"\u5546\u54C1\u603B\u89C8"},{default:e(()=>[c(E,{modelValue:o.tab,"onUpdate:modelValue":n[0]||(n[0]=p=>o.tab=p),"tab-list":o.list},null,8,["modelValue","tab-list"])]),_:1})}const{ref:y}=D;return{render:C,...{setup:()=>{const o=["\u603B\u89C8\u6570\u636E","\u6D41\u91CF\u5206\u6790","\u641C\u7D22\u5206\u6790","\u6807\u9898\u4F18\u5316"],n=y("\u603B\u89C8\u6570\u636E");return{list:o,tab:n}}}}}(),"render-demo-1":function(){const{resolveComponent:t,createVNode:c,withCtx:e,openBlock:r,createBlock:F}=D;function C(o,n){const E=t("xs-tabs"),a=t("xs-card");return r(),F(a,{header:"\u5546\u54C1\u603B\u89C8",border:!1},{default:e(()=>[c(E,{modelValue:o.tab,"onUpdate:modelValue":n[0]||(n[0]=p=>o.tab=p),"tab-list":o.list},null,8,["modelValue","tab-list"])]),_:1})}const{ref:y}=D;return{render:C,...{setup:()=>{const o=["\u603B\u89C8\u6570\u636E","\u6D41\u91CF\u5206\u6790","\u641C\u7D22\u5206\u6790","\u6807\u9898\u4F18\u5316"],n=y("\u603B\u89C8\u6570\u636E");return{list:o,tab:n}}}}}(),"render-demo-2":function(){const{createTextVNode:t,resolveComponent:c,withCtx:e,createVNode:r,createElementVNode:F,openBlock:C,createBlock:y}=D,u=F("span",{style:{color:"#ccc","font-size":"14px"}},"\u53EA\u7EDF\u8BA1\u4E00\u6BB5\u65F6\u95F4\u7684\u6570\u636E",-1);function o(a,p){const A=c("xs-button"),b=c("xs-tabs"),B=c("xs-card");return C(),y(B,{header:"\u5546\u54C1\u603B\u89C8"},{extra:e(()=>[r(A,{style:{margin:"0"}},{default:e(()=>[t("\u66F4\u591A\u6570\u636E")]),_:1})]),"sub-header":e(()=>[u]),default:e(()=>[r(b,{modelValue:a.tab,"onUpdate:modelValue":p[0]||(p[0]=f=>a.tab=f),"tab-list":a.list},null,8,["modelValue","tab-list"])]),_:1})}const{ref:n}=D;return{render:o,...{setup:()=>{const a=["\u603B\u89C8\u6570\u636E","\u6D41\u91CF\u5206\u6790","\u641C\u7D22\u5206\u6790","\u6807\u9898\u4F18\u5316"],p=n("\u603B\u89C8\u6570\u636E");return{list:a,tab:p}}}}}()}}),O=JSON.parse('{"title":"Card \u5361\u7247","description":"","frontmatter":{},"headers":[],"relativePath":"components/card.md","lastUpdated":1670932117000}');const V=s("h1",{id:"card-\u5361\u7247",tabindex:"-1"},"Card \u5361\u7247",-1),N=s("p",null,"\u5C06\u4FE1\u606F\u805A\u5408\u5728\u5361\u7247\u5BB9\u5668\u4E2D\u5C55\u793A\u3002\u4EE5\u4E0B demo \u5C06\u548C Tabs \u7EC4\u4EF6\u7ED3\u5408\u6F14\u793A\u3002",-1),w=s("h2",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},"\u57FA\u672C\u7528\u6CD5",-1),z=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-card"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"header"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"\u5546\u54C1\u603B\u89C8"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-tabs"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"tab"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"tab-list"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"list"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-card"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"list"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u6D41\u91CF\u5206\u6790'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u641C\u7D22\u5206\u6790'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u6807\u9898\u4F18\u5316'"),s("span",{style:{color:"#C9D1D9"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"tab"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        list,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        tab")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".demo-card"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"#f6f6f6"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-card"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"header"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u5546\u54C1\u603B\u89C8"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-tabs"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"tab"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"tab-list"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"list"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-card"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"list"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u6D41\u91CF\u5206\u6790'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u641C\u7D22\u5206\u6790'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u6807\u9898\u4F18\u5316'"),s("span",{style:{color:"#24292F"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"tab"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        list,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        tab")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".demo-card"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"#f6f6f6"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),T=s("h2",{id:"\u6CA1\u6709\u5E95\u8FB9\u6846\u7684\u5361\u7247",tabindex:"-1"},"\u6CA1\u6709\u5E95\u8FB9\u6846\u7684\u5361\u7247",-1),U=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-card"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"header"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"\u5546\u54C1\u603B\u89C8"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"border"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"false"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-tabs"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"tab"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"tab-list"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"list"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-card"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"list"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u6D41\u91CF\u5206\u6790'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u641C\u7D22\u5206\u6790'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u6807\u9898\u4F18\u5316'"),s("span",{style:{color:"#C9D1D9"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"tab"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        list,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        tab")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".demo-card"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"#f6f6f6"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-card"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"header"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u5546\u54C1\u603B\u89C8"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"border"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-tabs"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"tab"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"tab-list"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"list"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-card"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"list"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u6D41\u91CF\u5206\u6790'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u641C\u7D22\u5206\u6790'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u6807\u9898\u4F18\u5316'"),s("span",{style:{color:"#24292F"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"tab"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        list,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        tab")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".demo-card"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"#f6f6f6"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),$=s("h2",{id:"\u5E26\u63D2\u69FD\u7684\u5361\u7247",tabindex:"-1"},"\u5E26\u63D2\u69FD\u7684\u5361\u7247",-1),P=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-card"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"header"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"\u5546\u54C1\u603B\u89C8"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"extra"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"margin:0"'),s("span",{style:{color:"#C9D1D9"}},">\u66F4\u591A\u6570\u636E</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"sub-header"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"color:#ccc;font-size:14px"'),s("span",{style:{color:"#C9D1D9"}},">\u53EA\u7EDF\u8BA1\u4E00\u6BB5\u65F6\u95F4\u7684\u6570\u636E</"),s("span",{style:{color:"#7EE787"}},"span"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-tabs"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-model"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"tab"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"tab-list"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"list"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-card"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#C9D1D9"}},": () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"list"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#A5D6FF"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u6D41\u91CF\u5206\u6790'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u641C\u7D22\u5206\u6790'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'\u6807\u9898\u4F18\u5316'"),s("span",{style:{color:"#C9D1D9"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"tab"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        list,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        tab")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FFA657"}},"}"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".demo-card"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"#f6f6f6"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-card"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"header"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"\u5546\u54C1\u603B\u89C8"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"extra"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"margin:0"'),s("span",{style:{color:"#24292F"}},">\u66F4\u591A\u6570\u636E</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"sub-header"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"color:#ccc;font-size:14px"'),s("span",{style:{color:"#24292F"}},">\u53EA\u7EDF\u8BA1\u4E00\u6BB5\u65F6\u95F4\u7684\u6570\u636E</"),s("span",{style:{color:"#116329"}},"span"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-tabs"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-model"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"tab"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"tab-list"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"list"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-card"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#24292F"}},": () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"list"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0A3069"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u6D41\u91CF\u5206\u6790'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u641C\u7D22\u5206\u6790'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'\u6807\u9898\u4F18\u5316'"),s("span",{style:{color:"#24292F"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"tab"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'\u603B\u89C8\u6570\u636E'"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        list,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        tab")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#953800"}},"}"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".demo-card"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"#f6f6f6"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),S=h('<h2 id="api" tabindex="-1">API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>border</td><td>\u662F\u5426\u6DFB\u52A0\u5E95\u90E8\u7684\u8FB9\u6846</td><td>Boolean</td><td></td><td>true</td></tr><tr><td>header</td><td>\u6807\u9898\u6587\u6848</td><td>string</td><td></td><td></td></tr></tbody></table><h2 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD</h2><table><thead><tr><th>\u63D2\u69FD</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td>\u6807\u9898</td></tr><tr><td>sub-header</td><td>\u526F\u6807\u9898</td></tr><tr><td>extra</td><td>\u53F3\u4E0A\u89D2\u533A\u57DF</td></tr><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u5185\u5BB9\u533A\u57DF</td></tr></tbody></table>',4);function I(t,c,e,r,F,C){const y=m("render-demo-0"),u=m("demo"),o=m("render-demo-1"),n=m("render-demo-2");return v(),x("div",null,[V,N,w,i(u,{customClass:"undefined",sourceCode:`<template>
  <xs-card header="\u5546\u54C1\u603B\u89C8">
    <xs-tabs v-model="tab" :tab-list="list" />
  </xs-card>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const list = ['\u603B\u89C8\u6570\u636E', '\u6D41\u91CF\u5206\u6790', '\u641C\u7D22\u5206\u6790', '\u6807\u9898\u4F18\u5316'];
      const tab = ref('\u603B\u89C8\u6570\u636E');
      return {
        list,
        tab
      };
    }
  };
<\/script>
<style>
  .demo-card {
    background: #f6f6f6;
  }
</style>
`},{highlight:d(()=>[z]),default:d(()=>[i(y)]),_:1}),T,i(u,{customClass:"undefined",sourceCode:`<template>
  <xs-card header="\u5546\u54C1\u603B\u89C8" :border="false">
    <xs-tabs v-model="tab" :tab-list="list" />
  </xs-card>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const list = ['\u603B\u89C8\u6570\u636E', '\u6D41\u91CF\u5206\u6790', '\u641C\u7D22\u5206\u6790', '\u6807\u9898\u4F18\u5316'];
      const tab = ref('\u603B\u89C8\u6570\u636E');
      return {
        list,
        tab
      };
    }
  };
<\/script>
<style>
  .demo-card {
    background: #f6f6f6;
  }
</style>
`},{highlight:d(()=>[U]),default:d(()=>[i(o)]),_:1}),$,i(u,{customClass:"undefined",sourceCode:`<template>
  <xs-card header="\u5546\u54C1\u603B\u89C8">
    <template #extra>
      <xs-button style="margin:0">\u66F4\u591A\u6570\u636E</xs-button>
    </template>

    <template #sub-header>
      <span style="color:#ccc;font-size:14px">\u53EA\u7EDF\u8BA1\u4E00\u6BB5\u65F6\u95F4\u7684\u6570\u636E</span>
    </template>
    <xs-tabs v-model="tab" :tab-list="list" />
  </xs-card>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup: () => {
      const list = ['\u603B\u89C8\u6570\u636E', '\u6D41\u91CF\u5206\u6790', '\u641C\u7D22\u5206\u6790', '\u6807\u9898\u4F18\u5316'];
      const tab = ref('\u603B\u89C8\u6570\u636E');
      return {
        list,
        tab
      };
    }
  };
<\/script>
<style>
  .demo-card {
    background: #f6f6f6;
  }
</style>
`},{highlight:d(()=>[P]),default:d(()=>[i(n)]),_:1}),S])}const j=_(g,[["render",I]]);export{O as __pageData,j as default};
