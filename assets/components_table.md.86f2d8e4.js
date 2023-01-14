import{V as A,_ as G,c as z,a as m,w as E,e as _,b as s,d as l,r as h,o as V}from"./app.7527e2a5.js";const{defineComponent:O}=A,I=O({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:i,openBlock:y,createBlock:c}=A;function p(a,n){const r=i("xs-table");return y(),c(r,{columns:a.columns,data:a.data},null,8,["columns","data"])}const{ref:D}=A;return{render:p,...{setup(){const a=D(Array.from({length:10}).map((r,F)=>({date:`2023-01-1${F}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:a,columns:n}}}}}(),"render-demo-1":function(){const{toDisplayString:i,createTextVNode:y,resolveComponent:c,withCtx:p,createVNode:D,Fragment:g,openBlock:a,createElementBlock:n}=A;function r(d,o){const u=c("xs-button"),t=c("xs-table");return a(),n(g,null,[D(u,{type:"primary",onClick:o[0]||(o[0]=b=>d.loading=!d.loading)},{default:p(()=>[y(i(d.loading?"\u5173\u95ED":"\u6253\u5F00")+"\u52A0\u8F7D",1)]),_:1}),D(t,{columns:d.columns,data:d.data,loading:d.loading,"skeleton-rows":10},null,8,["columns","data","loading"])],64)}const{ref:F}=A;return{render:r,...{setup(){const d=F(Array.from({length:10}).map((t,b)=>({date:`2023-01-1${b}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),o=F(!0),u=F([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:d,columns:u,loading:o}}}}}(),"render-demo-2":function(){const{toDisplayString:i,createTextVNode:y,resolveComponent:c,withCtx:p,createVNode:D,openBlock:g,createBlock:a,createCommentVNode:n,createElementVNode:r,createSlots:F,Fragment:e,createElementBlock:d}=A,o={style:{"margin-bottom":"12px"}};function u(C,x){const f=c("xs-button"),B=c("xs-table");return g(),d(e,null,[r("div",o,[D(f,{type:"warning",onClick:x[0]||(x[0]=v=>C.pagination=!C.pagination)},{default:p(()=>[y(i(C.pagination?"\u5173\u95ED":"\u6253\u5F00")+"\u5206\u9875",1)]),_:1}),C.pagination?(g(),a(f,{key:0,type:"primary",onClick:C.setPage},{default:p(()=>[y("\u8C03\u6574\u9875\u957F\u548C\u9875\u957F\u9009\u9879")]),_:1},8,["onClick"])):n("",!0),C.pagination?(g(),a(f,{key:1,type:"danger",onClick:x[1]||(x[1]=v=>C.slotVisible=!C.slotVisible)},{default:p(()=>[y(i(C.slotVisible?"\u5173\u95ED":"\u663E\u793A")+" \u63D2\u69FD ",1)]),_:1})):n("",!0)]),D(B,{columns:C.columns,data:C.data,pagination:C.pagination,"reset-position-on-data-change":!1},F({_:2},[C.slotVisible?{name:"paginationLeft",fn:p(()=>[D(f,{type:"warning"},{default:p(()=>[y("\u5206\u9875\u5DE6\u4FA7slot")]),_:1})]),key:"0"}:void 0,C.slotVisible?{name:"paginationRight",fn:p(()=>[D(f,{type:"warning"},{default:p(()=>[y("\u5206\u9875\u53F3\u4FA7slot")]),_:1})]),key:"1"}:void 0]),1032,["columns","data","pagination"])],64)}const{ref:t}=A;return{render:u,...{setup(){const C=t(Array.from({length:10}).map((w,k)=>({date:`2023-01-1${k}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),x=t([{prop:"date",label:"Date",fixed:!0},{prop:"name",label:"Name"},{prop:"address",label:"Address",width:600}]),f=t(!0),B=()=>{typeof f.value=="object"?f.value=!0:f.value={layout:"sizes, prev, pager, next, total",position:"flex-start",pageSizes:[25,50,100],pageSize:50}},v=t(!1);return{data:C,columns:x,setPage:B,pagination:f,slotVisible:v}}}}}(),"render-demo-3":function(){const{toDisplayString:i,createTextVNode:y,resolveComponent:c,withCtx:p,createVNode:D,openBlock:g,createBlock:a,createCommentVNode:n,Fragment:r,createElementBlock:F}=A;function e(u,t){const b=c("xs-button"),C=c("xs-table");return g(),F(r,null,[D(b,{type:"primary",onClick:u.toggleStripe},{default:p(()=>[y(i(u.stripe?"\u5173\u95ED":"\u6253\u5F00")+"\u6591\u9A6C\u7EB9 ",1)]),_:1},8,["onClick"]),u.stripe?(g(),a(b,{key:0,type:"danger",onClick:u.changeIndex},{default:p(()=>[y(" \u5207\u6362\u6591\u9A6C\u7EB9\u7684\u8D77\u59CB\u5E8F\u53F7 ")]),_:1},8,["onClick"])):n("",!0),D(C,{columns:u.columns,data:u.data,stripe:u.stripe,"stripe-index":u.stripeIndex},null,8,["columns","data","stripe","stripe-index"])],64)}const{ref:d}=A;return{render:e,...{setup(){const u=d(Array.from({length:10}).map((B,v)=>({date:`2023-01-1${v}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),t=d(!0),b=d(0),C=()=>{t.value=!t.value},x=()=>{b.value?b.value=0:b.value=1},f=d([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:u,columns:f,toggleStripe:C,stripe:t,stripeIndex:b,changeIndex:x}}}}}(),"render-demo-4":function(){const{resolveComponent:i,openBlock:y,createBlock:c}=A;function p(a,n){const r=i("xs-table");return y(),c(r,{columns:a.columns,data:a.data,border:""},null,8,["columns","data"])}const{ref:D}=A;return{render:p,...{setup(){const a=D(Array.from({length:10}).map((r,F)=>({date:`2023-01-1${F}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:a,columns:n}}}}}(),"render-demo-5":function(){const{resolveComponent:i,openBlock:y,createBlock:c}=A;function p(a,n){const r=i("xs-table");return y(),c(r,{columns:a.columns,data:a.data,"row-class-name":a.tableRowClassName,abc:1},null,8,["columns","data","row-class-name"])}const{ref:D}=A;return{render:p,...{setup(){const a=D(Array.from({length:10}).map((F,e)=>({date:`2023-01-1${e}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=({row:F,rowIndex:e})=>e===0?"warning-row":e===3?"success-row":"",r=D([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:a,columns:r,tableRowClassName:n}}}}}(),"render-demo-6":function(){const{resolveComponent:i,openBlock:y,createBlock:c}=A;function p(a,n){const r=i("xs-table");return y(),c(r,{columns:a.columns,data:a.data,height:"250"},null,8,["columns","data"])}const{ref:D}=A;return{render:p,...{setup(){const a=D(Array.from({length:10}).map((r,F)=>({date:`2023-01-1${F}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:a,columns:n}}}}}(),"render-demo-7":function(){const{createTextVNode:i,resolveComponent:y,withCtx:c,createVNode:p,openBlock:D,createBlock:g}=A;function a(F,e){const d=y("xs-button"),o=y("xs-table");return D(),g(o,{columns:F.columns,data:F.data},{operations:c(()=>[p(d,{link:"",type:"danger",size:"small"},{default:c(()=>[i("\u5220\u9664")]),_:1})]),_:1},8,["columns","data"])}const{ref:n}=A;return{render:a,...{setup(){const F=n(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),e=n([{prop:"date",label:"Date",width:100,fixed:!0},{prop:"name",label:"Name",width:200},{prop:"state",label:"State",width:200},{prop:"city",label:"City",width:200},{prop:"address",label:"Address",width:600},{slot:"operations",label:"Operations",width:120,fixed:"right"}]);return{data:F,columns:e}}}}}(),"render-demo-8":function(){const{createTextVNode:i,resolveComponent:y,withCtx:c,createVNode:p,Fragment:D,openBlock:g,createElementBlock:a}=A;function n(e,d){const o=y("xs-button"),u=y("xs-table");return g(),a(D,null,[p(u,{columns:e.columns,data:e.data,"max-height":"250"},{operations:c(({$index:t})=>[p(o,{type:"link",size:"small",onClick:b=>e.deleteRow(t)},{default:c(()=>[i("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1},8,["columns","data"]),p(o,{style:{width:"100%","margin-top":"12px"},onClick:e.addRow},{default:c(()=>[i("\u589E\u52A0\u4E00\u9879\u5230\u8868\u683C")]),_:1},8,["onClick"])],64)}const{ref:r}=A;return{render:n,...{setup(){const e=r(Array.from({length:2}).map((t,b)=>({date:`2023-01-1${b}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),d=t=>{e.value.splice(t,1)},o=()=>{e.value.length>=10||e.value.push({date:`2023-01-1${e.value.length}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"})},u=r([{prop:"date",label:"Date",width:100,fixed:!0},{prop:"name",label:"Name",width:200},{prop:"state",label:"State",width:200},{prop:"city",label:"City",width:200},{prop:"address",label:"Address",width:600},{slot:"operations",label:"Operations",width:120,fixed:"right"}]);return{data:e,columns:u,deleteRow:d,addRow:o}}}}}(),"render-demo-9":function(){const{createTextVNode:i,resolveComponent:y,withCtx:c,createVNode:p,openBlock:D,createBlock:g}=A;function a(F,e){const d=y("xs-button"),o=y("xs-table");return D(),g(o,{columns:F.columns,data:F.data},{operations:c(()=>[p(d,{link:"",type:"danger",size:"small"},{default:c(()=>[i("\u5220\u9664")]),_:1})]),_:1},8,["columns","data"])}const{ref:n}=A;return{render:a,...{setup(){const F=n(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),e=n([{prop:"date",label:"Date",fixed:!0},{prop:"name",label:"Name",align:"center",children:[{prop:"tag",label:"Tag",align:"center"},{prop:"zip",label:"Zip",align:"center"}]},{prop:"address",label:"Address",showOverflowTooltip:!0}]);return{data:F,columns:e}}}}}(),"render-demo-10":function(){const{createTextVNode:i,resolveComponent:y,withCtx:c,createVNode:p,createElementVNode:D,Fragment:g,openBlock:a,createElementBlock:n}=A,r=D("br",null,null,-1),F=D("br",null,null,-1),e=D("br",null,null,-1);function d(t,b){const C=y("xs-button"),x=y("xs-table");return a(),n(g,null,[p(C,{type:"primary",onClick:b[0]||(b[0]=f=>t.themeColor="#e1f3d8")},{default:c(()=>[i("\u6253\u5F00\u4E3B\u9898\u8272")]),_:1}),p(C,{type:"danger",onClick:b[1]||(b[1]=f=>t.themeColor="")},{default:c(()=>[i("\u5173\u95ED\u4E3B\u9898\u8272")]),_:1}),r,F,p(x,{columns:t.columns,data:t.data,"theme-color":t.themeColor},null,8,["columns","data","theme-color"]),e,p(x,{columns:t.columns2,data:t.data,"theme-color":t.themeColor},{tagLabel:c(()=>[p(C,{type:"link"},{default:c(()=>[i("\u81EA\u5B9A\u4E49\u5934\u90E8")]),_:1})]),_:1},8,["columns","data","theme-color"])],64)}const{ref:o}=A;return{render:d,...{setup(){const t=o(Array.from({length:4}).map((f,B)=>({date:`2023-01-1${B}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:null,tag:null,zip2:"\u6211\u5728\u9F13\u697C",tag2:"\u6625\u5929\u82B1\u4F1A\u5F00",zip3:"--",tag3:"--"}))),b=o(""),C=o([{type:"index",index:f=>f*2,background:"#c5d3f4",label:"#",align:"center"},{prop:"date",label:"Date",background:"#e1f3d8"},{prop:"name",label:"Name",background:"#ffd180"},{prop:"address",label:"Address",background:"#d78e6a"}]),x=o([{prop:"date",label:"Date",fixed:!0,width:150},{prop:"name",label:"Name",align:"center",background:"#fcd3d3",group:"userName",children:[{prop:"tag",label:"Tag",align:"center",background:"#ffd180",slotLabel:"tagLabel",width:220},{prop:"zip",label:"\u7EE7\u627Fname\u7684\u989C\u8272",align:"center",width:320}]},{prop:"name",label:"Name",align:"center",background:"#e1f3d8",group:"userName2",children:[{prop:"tag2",label:"Tag",width:220,align:"center"},{prop:"zip2",label:"Zip",width:200,align:"center"}]},{prop:"name",label:"Name",align:"center",background:"#fcd3d3",group:"userName3",children:[{prop:"tag3",label:"Tag",align:"center",background:"#ffd180",slotLabel:"tagLabel",width:220},{prop:"zip3",label:"\u7EE7\u627Fname\u7684\u989C\u8272",align:"center",width:220}]},{prop:"address",label:"Address",showOverflowTooltip:!0}]);return{data:t,columns:C,columns2:x,themeColor:b}}}}}(),"render-demo-11":function(){const{createTextVNode:i,resolveComponent:y,withCtx:c,createVNode:p,openBlock:D,createBlock:g}=A;function a(F,e){const d=y("xs-button"),o=y("xs-table");return D(),g(o,{columns:F.columns,data:F.data},{operations:c(()=>[p(d,{link:"",type:"danger",size:"small"},{default:c(()=>[i("\u5220\u9664")]),_:1})]),_:1},8,["columns","data"])}const{ref:n}=A;return{render:a,...{setup(){const F=n(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),e=n([{type:"selection",width:60,align:"center"},{type:"index",width:60,label:"#"},{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"}]);return{data:F,columns:e}}}}}(),"render-demo-12":function(){const{createTextVNode:i,resolveComponent:y,withCtx:c,createVNode:p,createElementVNode:D,Fragment:g,openBlock:a,createElementBlock:n}=A,r={style:{"margin-bottom":"12px"}};function F(o,u){const t=y("xs-button"),b=y("xs-table");return a(),n(g,null,[D("div",r,[p(t,{type:"warning",onClick:u[0]||(u[0]=C=>o.sort={prop:"date",order:"descending"})},{default:c(()=>[i("\u6309Date\u964D\u5E8F")]),_:1}),p(t,{type:"primary",onClick:u[1]||(u[1]=C=>o.sort={prop:"age",order:"ascending"})},{default:c(()=>[i("\u6309Age\u5347\u5E8F")]),_:1})]),p(b,{columns:o.columns,data:o.data,sort:o.sort},null,8,["columns","data","sort"])],64)}const{ref:e}=A;return{render:F,...{setup(){const o=e(Array.from({length:10}).map((b,C)=>({date:`2023-01-1${C}`,age:C+1,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),u=e([{type:"index",width:60,label:"#",align:"center"},{prop:"date",label:"Date",sortable:!0},{prop:"age",label:"Age",sortable:!0},{prop:"name",label:"Name",render:({column:b,row:C,rows:x,columns:f,$index:B})=>`${C.name}-${x.length}-${f.length}-${b.prop}-${B}`},{prop:"address",showOverflowTooltip:!0,label:"Address"}]),t=e({});return{data:o,columns:u,sort:t}}}}}(),"render-demo-13":function(){const{createTextVNode:i,resolveComponent:y,withCtx:c,createVNode:p,createElementVNode:D,Fragment:g,openBlock:a,createElementBlock:n}=A,r={style:{"margin-bottom":"12px"}};function F(o,u){const t=y("xs-button"),b=y("xs-table");return a(),n(g,null,[D("div",r,[p(t,{type:"warning",onClick:u[0]||(u[0]=C=>o.addFilter("name",["Jerry"]))},{default:c(()=>[i("\u7B5B\u9009name=Jerry\u7684\u6570\u636E")]),_:1}),p(t,{type:"primary",onClick:u[1]||(u[1]=C=>o.addFilter("date",["2023-01-10","2023-01-15"]))},{default:c(()=>[i("\u5728Jerry\u57FA\u7840\u4E0A\u7B5B\u900901-10\u523001-15\u7684\u6570\u636E")]),_:1}),p(t,{type:"danger",onClick:o.clearFilter},{default:c(()=>[i("\u6E05\u7A7A\u7B5B\u9009")]),_:1},8,["onClick"])]),p(b,{ref:"tableRef",filter:o.filters,columns:o.columns,data:o.data},null,8,["filter","columns","data"])],64)}const{ref:e}=A;return{render:F,...{setup(){const o=e(Array.from({length:10}).map((f,B)=>({date:`2023-01-1${B}`,age:B*10+10,name:B%2===0?"Tom":"Jerry",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),u=e([{type:"index",width:60,label:"#",align:"center"},{prop:"date",label:"Date",sortable:!0,filterable:!0,filter:{type:"time"}},{prop:"name",label:"Name",filterable:!0,filter:{type:"select",multiple:!0},render:({column:f,row:B,rows:v,columns:w,$index:k})=>`${B.name}-${v.length}-${w.length}-${f.prop}-${k}`},{prop:"name",label:"Name",filterable:!0,filter:{type:"select"},render:({row:f})=>f.name},{prop:"age",label:"Age",filterable:!0,filter:{type:"number",suffixLabel:"\u5C81"}},{prop:"address",label:"Address",filterable:!0,showOverflowTooltip:!0}]),t=e({}),b=(f,B)=>{t.value[f]=B},C=e();return{data:o,filters:t,addFilter:b,clearFilter:()=>{t.value={},C.value.clearFilter()},columns:u,tableRef:C}}}}}(),"render-demo-14":function(){const{toDisplayString:i,createTextVNode:y,resolveComponent:c,withCtx:p,createVNode:D,openBlock:g,createBlock:a}=A;function n(e,d){const o=c("xs-button"),u=c("xs-table");return g(),a(u,{columns:e.columns,data:e.data},{ageLabel:p(({column:t})=>[D(o,{type:"primary",size:"small"},{default:p(()=>[y("slotLabel\u6E32\u67D3"+i(t.prop),1)]),_:2},1024)]),age:p(({row:t})=>[D(o,{type:"primary",size:"small"},{default:p(()=>[y("slot: "+i(t.age),1)]),_:2},1024)]),_:1},8,["columns","data"])}const{ref:r}=A;return{render:n,...{setup(){const e=r(Array.from({length:10}).map((o,u)=>({date:`2023-01-1${u}`,age:u+1,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),d=r([{type:"index",width:60,label:"#",align:"center"},{prop:"date",label:"Date",renderLabel:o=>"renderLabel\u51FD\u6570\u6E32\u67D3"+o.prop,render:({column:o,row:u})=>`render: ${u[o.prop]}`,sortable:!0},{prop:"age",label:"Age",slotLabel:"ageLabel",slot:"age",sortable:!0},{prop:"name",label:"Name",render:({column:o,row:u,rows:t,columns:b,$index:C})=>`${u.name}-${t.length}-${b.length}-${o.prop}-${C}`},{prop:"address",showOverflowTooltip:!0,label:"Address"}]);return{data:e,columns:d}}}}}(),"render-demo-15":function(){const{toDisplayString:i,createElementVNode:y,createTextVNode:c,resolveComponent:p,withCtx:D,openBlock:g,createBlock:a}=A,n=y("br",null,null,-1),r=y("br",null,null,-1),F=y("br",null,null,-1),e=y("br",null,null,-1);function d(t,b){const C=p("xs-table");return g(),a(C,{columns:t.columns,data:t.data},{expand:D(({row:x,column:f,rows:B,$index:v,columns:w})=>[c(" row = "+i(x)+" ",1),n,c(" column = "+i(f)+" ",1),r,c(" rows[2] = "+i(B[2])+" ",1),F,c(" columns[2] = "+i(w[2])+" ",1),e,c(" $index = "+i(v),1)]),_:1},8,["columns","data"])}const{ref:o}=A;return{render:d,...{setup(){const t=o(Array.from({length:10}).map((C,x)=>({date:`2023-01-1${x}`,age:x*10+10,name:x%2===0?"Tom":"Jerry",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),b=o([{type:"expand",width:60,label:"#",align:"center",slot:"expand"},{prop:"date",label:"Date",sortable:!0,filterable:!0,filter:{type:"time"}},{prop:"name",label:"Name",filterable:!0,render:({column:C,row:x,rows:f,columns:B,$index:v})=>`${x.name}-${f.length}-${B.length}-${C.prop}-${v}`},{prop:"age",label:"Age",filterable:!0,filter:{type:"number",suffixLabel:"\u5C81"}},{prop:"address",label:"Address",showOverflowTooltip:!0}]);return{data:t,columns:b}}}}}(),"render-demo-16":function(){const{resolveComponent:i,createVNode:y,Fragment:c,openBlock:p,createElementBlock:D}=A;function g(r,F){const e=i("xs-table");return p(),D(c,null,[y(e,{columns:r.columns,data:r.data,"row-key":"id"},null,8,["columns","data"]),y(e,{columns:r.columns,data:r.data2,"row-key":"id",lazy:"",load:r.load},null,8,["columns","data","load"])],64)}const{ref:a}=A;return{render:g,...{setup(){const r=a([{id:"1",date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"2",date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"3",date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:"31",date:"2016-06-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"32",date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:"4",date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]),F=a([{id:"1",date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"2",date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"3",date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",hasChildren:!0},{id:"4",date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]),e=a([{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"}]);return{data:r,load:(o,u,t)=>{setTimeout(()=>{t([{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])},1e3)},data2:F,columns:e}}}}}(),"render-demo-17":function(){const{resolveComponent:i,createVNode:y,Fragment:c,openBlock:p,createElementBlock:D}=A;function g(r,F){const e=i("xs-table");return p(),D(c,null,[y(e,{columns:r.columns,data:r.data,"show-summary":""},null,8,["columns","data"]),y(e,{columns:r.columns,data:r.data,"show-summary":"","summary-method":r.getSummaries,"summary-position":"top"},null,8,["columns","data","summary-method"])],64)}const{ref:a}=A;return{render:g,...{setup(){const r=a(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,age:o*10+10,name:o%2===0?"Tom":"Jerry",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),F=a([{prop:"date",label:"Date",sortable:!0,filterable:!0,filter:{type:"time"}},{prop:"name",label:"Name",filterable:!0,render:({column:d,row:o,rows:u,columns:t,$index:b})=>`${o.name}-${u.length}-${t.length}-${d.prop}-${b}`},{prop:"age",label:"Age",filterable:!0,filter:{type:"number",suffixLabel:"\u5C81"}},{prop:"address",label:"Address",showOverflowTooltip:!0}]);return{data:r,getSummaries:d=>{const{columns:o,data:u}=d,t=[];return o.forEach((b,C)=>{if(C===0){t[C]="Total Cost";return}const x=u.map(f=>Number(f[b.property]));x.every(f=>Number.isNaN(f))?t[C]="N/A":t[C]=`$ ${x.reduce((f,B)=>{const v=Number(B);return Number.isNaN(v)?f:f+B},0)}`}),t},columns:F}}}}}(),"render-demo-18":function(){const{resolveComponent:i,openBlock:y,createBlock:c}=A;function p(a,n){const r=i("xs-table");return y(),c(r,{columns:a.columns,"span-method":a.arraySpanMethod,data:a.data,border:""},null,8,["columns","span-method","data"])}const{ref:D}=A;return{render:p,...{setup(){const a=D(Array.from({length:10}).map((F,e)=>({date:`2023-01-1${e}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"}]);return{data:a,columns:n,arraySpanMethod:({row:F,column:e,rowIndex:d,columnIndex:o})=>{if(d%2===0){if(o===0)return[1,2];if(o===1)return[0,0]}}}}}}}(),"render-demo-19":function(){const{resolveComponent:i,openBlock:y,createBlock:c}=A;function p(a,n){const r=i("xs-table");return y(),c(r,{columns:a.columns,data:a.data},null,8,["columns","data"])}const{ref:D}=A;return{render:p,...{setup(){const a=D(Array.from({length:5}).map((r,F)=>({date:`2023-01-1${F}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{type:"index",index:r=>r*2},{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"}]);return{data:a,columns:n}}}}}(),"render-demo-20":function(){const{createTextVNode:i,resolveComponent:y,withCtx:c,createVNode:p,openBlock:D,createBlock:g}=A;function a(F,e){const d=y("xs-button"),o=y("xs-table");return D(),g(o,{stickyable:"",columns:F.columns,data:F.data,offset:73},{operations:c(()=>[p(d,{link:"",type:"danger",size:"small"},{default:c(()=>[i("\u5220\u9664")]),_:1})]),_:1},8,["columns","data"])}const{ref:n}=A;return{render:a,...{setup(){const F=n(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),e=n([{prop:"date",label:"Date",width:100,fixed:!0},{prop:"name",label:"Name",width:200},{prop:"state",label:"State",width:200},{prop:"city",label:"City",width:200},{prop:"address",label:"Address",width:600},{slot:"operations",label:"Operations",width:120,fixed:"right"}]);return{data:F,columns:e}}}}}()}}),nl=JSON.parse('{"title":"Table \u8868\u683C","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","lastUpdated":1673685441000}');const R=_('<h1 id="table-\u8868\u683C" tabindex="-1">Table \u8868\u683C</h1><p>\u7528\u4E8E\u5C55\u793A\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C \u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002\u57FA\u4E8E <code>el-table</code> \u5C01\u88C5\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u65B0\u7279\u6027</p><ol class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u4F7F\u7528 JSON \u914D\u7F6E\u8868\u683C;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u652F\u6301\u5217\u7684 slot;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5217\u652F\u6301\u81EA\u5B9A\u4E49 render \u51FD\u6570\uFF0C\u652F\u6301\u6E32\u67D3 jsx \u7247\u6BB5;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5934\u7684 slot,</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5217\u5934\u652F\u6301\u81EA\u5B9A\u4E49\u7684 renderLabel \u51FD\u6570\uFF0C\u4E5F\u652F\u6301\u6E32\u67D3 jsx \u7247\u6BB5\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u8868\u683C\u5438\u9876\uFF0C\u652F\u6301\u914D\u7F6E\u5438\u9876\u7684\u504F\u79FB\u91CF\uFF0C\u540C\u65F6\u6A2A\u5411\u6EDA\u52A8\u6761\u5438\u5E95\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u6591\u9A6C\u7EB9\u652F\u6301\u8D77\u59CB\u884C\u53F7\u914D\u7F6E\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u9AA8\u67B6\u5C4F\u52A0\u8F7D, \u652F\u6301\u914D\u7F6E\u9AA8\u67B6\u5C4F\u884C\u6570\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u81EA\u5E26\u5206\u9875\uFF0C\u652F\u6301\u5173\u95ED\u548C\u8C03\u6574\u5206\u9875\u5E03\u5C40\u548C\u53C2\u6570;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5168\u91CF\u6570\u636E\u6392\u5E8F\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5168\u91CF\u6570\u636E\u7B5B\u9009\uFF0C\u652F\u6301\u6570\u636E\u8303\u56F4\uFF0C\u6587\u672C\u8F93\u5165\uFF0C\u65F6\u95F4\u9009\u62E9\uFF0C\u4E0B\u62C9\u591A\u9009\u7684\u7B5B\u9009\u6A21\u5F0F;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u652F\u6301\u8868\u683C\u5916\u90E8\u63A7\u5236\u8868\u683C\u7684\u6392\u5E8F\u548C\u7B5B\u9009;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u8868\u5934\u989C\u8272\u4E3B\u9898\u8272\u914D\u7F6E\u548C\u81EA\u5B9A\u4E49\u989C\u8272\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u652F\u6301\u5206\u7EC4\u548C\u5206\u7EC4\u7684 EmptySlot \u81EA\u5B9A\u4E49;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5408\u8BA1\u884C\u652F\u6301\u4F4D\u7F6E\u8C03\u6574\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u6570\u5B57\u683C\u5F0F\u5316,\u652F\u6301\u683C\u5F0F\u4E0E\u5C0F\u6570\u4F4D\u6570\u7684\u81EA\u5B9A\u4E49;</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> <s>\u5355\u9009\u652F\u6301</s></li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> <s>\u8DE8\u9875\u591A\u9009\u652F\u6301</s></li></ol></div><h2 id="\u57FA\u7840\u8868\u683C" tabindex="-1">\u57FA\u7840\u8868\u683C</h2><p>\u57FA\u7840\u7684\u8868\u683C\u5C55\u793A\u7528\u6CD5\u3002</p><p>\u5F53 <code>xs-table</code> \u5143\u7D20\u4E2D\u6CE8\u5165 <code>data</code> \u548C <code>columns</code> \u5BF9\u8C61\u6570\u7EC4\u540E\uFF0C\u5728 <code>column</code> \u4E2D\u7528 <code>prop</code> \u5C5E\u6027\u6765\u5BF9\u5E94\u5BF9\u8C61\u4E2D\u7684\u952E\u540D\u5373\u53EF\u586B\u5165\u6570\u636E\uFF0C\u7528 <code>label</code> \u5C5E\u6027\u6765\u5B9A\u4E49\u8868\u683C\u7684\u5217\u540D\u3002 \u53EF\u4EE5\u4F7F\u7528 <code>width</code> \u5C5E\u6027\u6765\u5B9A\u4E49\u5217\u5BBD\u3002\u524D\u7AEF\u5206\u9875\u9ED8\u8BA4\u5F00\u542F\u3002</p>',6),J=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),P=s("h2",{id:"loading-\u52A0\u8F7D",tabindex:"-1"},"Loading \u52A0\u8F7D",-1),M=s("p",null,[l("\u4F20\u5165 "),s("code",null,"loading"),l(" \u5C5E\u6027\u5373\u53EF\u63A7\u5236\u8868\u683C\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\u3002\u8FD8\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),s("code",null,"skeleton-rows"),l(" \u914D\u7F6E\u9AA8\u67B6\u5C4F\u884C\u6570\uFF0C \u9ED8\u8BA4\u4E3A 20 \u884C\u3002")],-1),Z=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"loading "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"!"),s("span",{style:{color:"#C9D1D9"}},"loading"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">{{ loading "),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'\u5173\u95ED'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'\u6253\u5F00'"),s("span",{style:{color:"#C9D1D9"}}," }}\u52A0\u8F7D</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"loading"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"loading"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"skeleton-rows"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"loading"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        loading")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"loading "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"loading"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">{{ loading "),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'\u5173\u95ED'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'\u6253\u5F00'"),s("span",{style:{color:"#24292F"}}," }}\u52A0\u8F7D</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"loading"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"loading"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"skeleton-rows"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"loading"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        loading")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),j=s("h2",{id:"\u5206\u9875",tabindex:"-1"},"\u5206\u9875",-1),q=s("p",null,"\u5982\u679C\u4F60\u9700\u8981\u540E\u7AEF\u5206\u9875\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5173\u95ED\u7EC4\u4EF6\u5185\u7684\u5206\u9875\u3002",-1),U=s("p",null,"\u6216\u8005\u8C03\u6574\u4E00\u4E0B\u5206\u9875\u7684\u53C2\u6570\u4E5F\u662F\u53EF\u4EE5\u7684\u3002",-1),H=s("p",null,"\u5206\u9875\u5185\u6709 2 \u4E2A\u63D2\u69FD\u63D0\u4F9B\u3002",-1),K=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"margin-bottom:12px;"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"warning"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"pagination "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"!"),s("span",{style:{color:"#C9D1D9"}},"pagination"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">{{ pagination "),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'\u5173\u95ED'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'\u6253\u5F00'"),s("span",{style:{color:"#C9D1D9"}}," }}\u5206\u9875</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-if"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"pagination"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"setPage"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u8C03\u6574\u9875\u957F\u548C\u9875\u957F\u9009\u9879</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-if"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"pagination"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"danger"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"slotVisible "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"!"),s("span",{style:{color:"#C9D1D9"}},"slotVisible"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      {{ slotVisible "),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'\u5173\u95ED'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'\u663E\u793A'"),s("span",{style:{color:"#C9D1D9"}}," }} \u63D2\u69FD")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"pagination"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"pagination"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"reset-position-on-data-change"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"false"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-if"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"slotVisible"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"paginationLeft"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"warning"'),s("span",{style:{color:"#C9D1D9"}},">\u5206\u9875\u5DE6\u4FA7slot</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-if"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"slotVisible"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"paginationRight"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"warning"'),s("span",{style:{color:"#C9D1D9"}},">\u5206\u9875\u53F3\u4FA7slot</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          fixed: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"600")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"pagination"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"setPage"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FF7B72"}},"typeof"),s("span",{style:{color:"#C9D1D9"}}," pagination.value "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'object'"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          pagination.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        } "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          pagination.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            layout: "),s("span",{style:{color:"#A5D6FF"}},"'sizes, prev, pager, next, total'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            position: "),s("span",{style:{color:"#A5D6FF"}},"'flex-start'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            pageSizes: ["),s("span",{style:{color:"#79C0FF"}},"25"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"50"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#C9D1D9"}},"], "),s("span",{style:{color:"#8B949E"}},"// \u9ED8\u8BA4\u7684\u53EF\u9009\u5206\u9875\u6570\u91CF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            pageSize: "),s("span",{style:{color:"#79C0FF"}},"50"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#8B949E"}},"// \u9ED8\u8BA4\u7684\u6BCF\u9875\u6761\u6570")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"slotVisible"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"false"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        setPage,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        pagination,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        slotVisible")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"margin-bottom:12px;"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"warning"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"pagination "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"pagination"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">{{ pagination "),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'\u5173\u95ED'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'\u6253\u5F00'"),s("span",{style:{color:"#24292F"}}," }}\u5206\u9875</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-if"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"pagination"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"setPage"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u8C03\u6574\u9875\u957F\u548C\u9875\u957F\u9009\u9879</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-if"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"pagination"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"danger"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"slotVisible "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"slotVisible"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      {{ slotVisible "),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'\u5173\u95ED'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'\u663E\u793A'"),s("span",{style:{color:"#24292F"}}," }} \u63D2\u69FD")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"pagination"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"pagination"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"reset-position-on-data-change"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-if"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"slotVisible"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"paginationLeft"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"warning"'),s("span",{style:{color:"#24292F"}},">\u5206\u9875\u5DE6\u4FA7slot</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-if"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"slotVisible"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"paginationRight"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"warning"'),s("span",{style:{color:"#24292F"}},">\u5206\u9875\u53F3\u4FA7slot</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          fixed: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"600")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"pagination"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"setPage"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#CF222E"}},"typeof"),s("span",{style:{color:"#24292F"}}," pagination.value "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'object'"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          pagination.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          pagination.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            layout: "),s("span",{style:{color:"#0A3069"}},"'sizes, prev, pager, next, total'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            position: "),s("span",{style:{color:"#0A3069"}},"'flex-start'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            pageSizes: ["),s("span",{style:{color:"#0550AE"}},"25"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"50"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#24292F"}},"], "),s("span",{style:{color:"#6E7781"}},"// \u9ED8\u8BA4\u7684\u53EF\u9009\u5206\u9875\u6570\u91CF")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            pageSize: "),s("span",{style:{color:"#0550AE"}},"50"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#6E7781"}},"// \u9ED8\u8BA4\u7684\u6BCF\u9875\u6761\u6570")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"slotVisible"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"false"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        setPage,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        pagination,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        slotVisible")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Q=s("h2",{id:"\u6591\u9A6C\u7EB9\u8868\u683C",tabindex:"-1"},"\u6591\u9A6C\u7EB9\u8868\u683C",-1),W=s("p",null,[s("code",null,"stripe"),l(" \u53EF\u4EE5\u521B\u5EFA\u5E26\u6591\u9A6C\u7EB9\u7684\u8868\u683C\u3002 \u5982\u679C "),s("code",null,"true"),l(", \u8868\u683C\u5C06\u4F1A\u5E26\u6709\u6591\u9A6C\u7EB9\u3002")],-1),X=s("p",null,"\u6591\u9A6C\u7EB9\u9ED8\u8BA4\u5F00\u542F\u3002\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u624B\u52A8\u5173\u95ED\u3002",-1),Y=s("p",null,"\u5728\u8BBE\u8BA1\u56FE\u4E2D\uFF0C\u5982\u679C\u8868\u5934\u5E26\u6709\u80CC\u666F\u8272\uFF0C\u5219\u6591\u9A6C\u7EB9\u662F\u4ECE\u7B2C\u4E8C\u884C\u5F00\u59CB\u7684\u3002",-1),ss=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"toggleStripe"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"> {{ stripe "),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'\u5173\u95ED'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'\u6253\u5F00'"),s("span",{style:{color:"#C9D1D9"}}," }}\u6591\u9A6C\u7EB9 </"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"v-if"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"stripe"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"danger"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"changeIndex"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"> \u5207\u6362\u6591\u9A6C\u7EB9\u7684\u8D77\u59CB\u5E8F\u53F7 </"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"stripe"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"stripe"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"stripe-index"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"stripeIndex"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"stripe"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"stripeIndex"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"toggleStripe"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        stripe.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"!"),s("span",{style:{color:"#C9D1D9"}},"stripe.value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"changeIndex"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (stripeIndex.value) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          stripeIndex.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        } "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          stripeIndex.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        toggleStripe,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        stripe,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        stripeIndex,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        changeIndex")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"toggleStripe"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"> {{ stripe "),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'\u5173\u95ED'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'\u6253\u5F00'"),s("span",{style:{color:"#24292F"}}," }}\u6591\u9A6C\u7EB9 </"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"v-if"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"stripe"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"danger"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"changeIndex"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"> \u5207\u6362\u6591\u9A6C\u7EB9\u7684\u8D77\u59CB\u5E8F\u53F7 </"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"stripe"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"stripe"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"stripe-index"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"stripeIndex"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"stripe"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"stripeIndex"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"toggleStripe"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        stripe.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"stripe.value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"changeIndex"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (stripeIndex.value) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          stripeIndex.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          stripeIndex.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        toggleStripe,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        stripe,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        stripeIndex,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        changeIndex")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),ls=s("h2",{id:"\u5E26\u8FB9\u6846\u8868\u683C",tabindex:"-1"},"\u5E26\u8FB9\u6846\u8868\u683C",-1),os=s("p",null,[l("\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CTable \u7EC4\u4EF6\u662F\u4E0D\u5177\u6709\u7AD6\u76F4\u65B9\u5411\u7684\u8FB9\u6846\u7684\uFF0C \u5982\u679C\u9700\u8981\uFF0C\u53EF\u4EE5\u4F7F\u7528 "),s("code",null,"border"),l(" \u5C5E\u6027\uFF0C\u628A\u8BE5\u5C5E\u6027\u8BBE\u7F6E\u4E3A "),s("code",null,"true"),l(" \u5373\u53EF\u542F\u7528\u3002")],-1),ns=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"border"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"border"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),as=s("h2",{id:"\u5E26\u72B6\u6001\u8868\u683C",tabindex:"-1"},"\u5E26\u72B6\u6001\u8868\u683C",-1),es=s("p",null,"\u53EF\u5C06\u8868\u683C\u5185\u5BB9 highlight \u663E\u793A\uFF0C\u65B9\u4FBF\u533A\u5206\u300C\u6210\u529F\u3001\u4FE1\u606F\u3001\u8B66\u544A\u3001\u5371\u9669\u300D\u7B49\u5185\u5BB9\u3002",-1),ps=s("p",null,[l("\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A Table \u7EC4\u4EF6\u7684 "),s("code",null,"row-class-name"),l(" \u5C5E\u6027\u6765\u4E3A Table \u4E2D\u7684\u67D0\u4E00\u884C\u6DFB\u52A0 class\uFF0C \u8FD9\u6837\u5C31\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u6837\u5F0F\u4E86\u3002")],-1),ts=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"row-class-name"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"tableRowClassName"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"abc"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"tableRowClassName"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ({ "),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"rowIndex"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (rowIndex "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'warning-row'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        } "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (rowIndex "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"3"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'success-row'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        tableRowClassName")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".xs-table"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".el-table"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".warning-row"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#7EE787"}},"td"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background-color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-warning-light-8"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"!important"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#79C0FF"}},".xs-table"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".el-table"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},".success-row"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"background-color"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#79C0FF"}},"var"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"--xs-color-success-light-8"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"style"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"row-class-name"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"tableRowClassName"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"abc"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"tableRowClassName"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ({ "),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"rowIndex"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (rowIndex "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'warning-row'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (rowIndex "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"3"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'success-row'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        tableRowClassName")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".xs-table"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".el-table"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".warning-row"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#116329"}},"td"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background-color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-warning-light-8"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"!important"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#0550AE"}},".xs-table"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".el-table"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},".success-row"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"background-color"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#0550AE"}},"var"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"--xs-color-success-light-8"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"style"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),cs=s("h2",{id:"\u56FA\u5B9A\u8868\u5934",tabindex:"-1"},"\u56FA\u5B9A\u8868\u5934",-1),rs=s("p",null,"\u7EB5\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u8868\u5934\u3002",-1),ys=s("p",null,"\u53EA\u8981\u5728\u5143\u7D20\u4E2D\u5B9A\u4E49\u4E86 height \u5C5E\u6027\uFF0C\u5373\u53EF\u5B9E\u73B0\u56FA\u5B9A\u8868\u5934\u7684\u8868\u683C\uFF0C\u800C\u4E0D\u9700\u8981\u989D\u5916\u7684\u4EE3\u7801\u3002",-1),Fs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"height"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"250"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"height"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"250"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"180")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Ds=_('<h2 id="\u56FA\u5B9A\u5217" tabindex="-1">\u56FA\u5B9A\u5217</h2><p>\u6A2A\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u5217\u3002</p><p>\u56FA\u5B9A\u5217\u9700\u8981\u4F7F\u7528 <code>fixed</code> \u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7 <code>Boolean</code> \u503C\u3002 \u5982\u679C\u4E3A <code>true</code>, \u5217\u5C06\u88AB\u5DE6\u4FA7\u56FA\u5B9A. \u5B83\u8FD8\u63A5\u53D7\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C<code>left</code> \u6216 <code>right</code>\uFF0C\u8868\u793A\u5DE6\u8FB9\u56FA\u5B9A\u8FD8\u662F\u53F3\u8FB9\u56FA\u5B9A\u3002</p>',3),is=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"operations"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"link"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"danger"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">\u5220\u9664</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          fixed: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'state'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'State'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'city'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'City'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"600")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          slot: "),s("span",{style:{color:"#A5D6FF"}},"'operations'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Operations'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"120"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          fixed: "),s("span",{style:{color:"#A5D6FF"}},"'right'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"operations"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"link"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"danger"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">\u5220\u9664</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          fixed: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'state'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'State'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'city'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'City'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"600")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          slot: "),s("span",{style:{color:"#0A3069"}},"'operations'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Operations'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"120"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          fixed: "),s("span",{style:{color:"#0A3069"}},"'right'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),us=s("h2",{id:"\u56FA\u5B9A\u5217\u548C\u8868\u5934",tabindex:"-1"},"\u56FA\u5B9A\u5217\u548C\u8868\u5934",-1),Cs=s("p",null,[l("\u56FA\u5B9A\u5217\u548C\u8868\u5934\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\uFF0C\u53EA\u9700\u8981\u5C06\u4E0A\u8FF0\u4E24\u4E2A\u5C5E\u6027("),s("code",null,"fixed"),l(", "),s("code",null,"height"),l(")\u5206\u522B\u8BBE\u7F6E\u597D\u5373\u53EF\u3002\u672C\u7AE0\u8282\u65E0 demo;")],-1),ds=s("h2",{id:"\u6D41\u4F53\u9AD8\u5EA6",tabindex:"-1"},"\u6D41\u4F53\u9AD8\u5EA6",-1),As=s("p",null,"\u5F53\u6570\u636E\u91CF\u52A8\u6001\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u4E3A Table \u8BBE\u7F6E\u4E00\u4E2A\u6700\u5927\u9AD8\u5EA6\u3002",-1),ms=s("p",null,[l("\u901A\u8FC7\u8BBE\u7F6E "),s("code",null,"max-height"),l(" \u5C5E\u6027\u6307\u5B9A\u6700\u5927\u9AD8\u5EA6\u3002 \u6B64\u65F6\u82E5\u8868\u683C\u6240\u9700\u7684\u9AD8\u5EA6\u5927\u4E8E\u6700\u5927\u9AD8\u5EA6\uFF0C\u5219\u4F1A\u663E\u793A\u4E00\u4E2A\u6EDA\u52A8\u6761")],-1),Es=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"max-height"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"250"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"operations"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"{ $index }"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"link"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#D2A8FF"}},"deleteRow"),s("span",{style:{color:"#C9D1D9"}},"($index)"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u5220\u9664</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"width:100%;margin-top:12px"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"addRow"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u589E\u52A0\u4E00\u9879\u5230\u8868\u683C</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"2"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"deleteRow"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data.value."),s("span",{style:{color:"#D2A8FF"}},"splice"),s("span",{style:{color:"#C9D1D9"}},"(index, "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"addRow"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (data.value."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},">="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data.value."),s("span",{style:{color:"#D2A8FF"}},"push"),s("span",{style:{color:"#C9D1D9"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"value"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          fixed: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'state'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'State'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'city'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'City'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"600")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          slot: "),s("span",{style:{color:"#A5D6FF"}},"'operations'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Operations'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"120"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          fixed: "),s("span",{style:{color:"#A5D6FF"}},"'right'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        deleteRow,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        addRow")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"max-height"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"250"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"operations"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"{ $index }"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"link"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#8250DF"}},"deleteRow"),s("span",{style:{color:"#24292F"}},"($index)"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u5220\u9664</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"width:100%;margin-top:12px"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"addRow"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u589E\u52A0\u4E00\u9879\u5230\u8868\u683C</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"deleteRow"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data.value."),s("span",{style:{color:"#8250DF"}},"splice"),s("span",{style:{color:"#24292F"}},"(index, "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"addRow"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (data.value."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},">="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data.value."),s("span",{style:{color:"#8250DF"}},"push"),s("span",{style:{color:"#24292F"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"value"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          fixed: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'state'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'State'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'city'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'City'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"600")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          slot: "),s("span",{style:{color:"#0A3069"}},"'operations'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Operations'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"120"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          fixed: "),s("span",{style:{color:"#0A3069"}},"'right'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        deleteRow,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        addRow")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),bs=_('<h2 id="\u591A\u7EA7\u8868\u5934" tabindex="-1">\u591A\u7EA7\u8868\u5934</h2><p>\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u53EF\u4F7F\u7528\u591A\u7EA7\u8868\u5934\u6765\u5C55\u73B0\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\u3002</p><p>\u53EA\u9700\u8981\u5C06 <code>columnItem</code> \u6DFB\u52A0\u4E00\u4E2A <code>children</code> \u5B57\u6BB5\uFF0C\u5E76\u653E\u5165\u5B50\u96C6 <code>columnItem</code> \u4F60\u53EF\u4EE5\u5B9E\u73B0\u7EC4\u5934\u3002</p><p>\u8FD9\u91CC\u8FD8\u4F7F\u7528\u4E86 <code>align</code> \u548C <code>showOverflowTooltip</code> \u5C5E\u6027\u3002</p>',4),gs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"operations"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"link"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"danger"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">\u5220\u9664</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          fixed: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              prop: "),s("span",{style:{color:"#A5D6FF"}},"'tag'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              label: "),s("span",{style:{color:"#A5D6FF"}},"'Tag'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              align: "),s("span",{style:{color:"#A5D6FF"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              prop: "),s("span",{style:{color:"#A5D6FF"}},"'zip'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              label: "),s("span",{style:{color:"#A5D6FF"}},"'Zip'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              align: "),s("span",{style:{color:"#A5D6FF"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          showOverflowTooltip: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"operations"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"link"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"danger"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">\u5220\u9664</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          fixed: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              prop: "),s("span",{style:{color:"#0A3069"}},"'tag'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              label: "),s("span",{style:{color:"#0A3069"}},"'Tag'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              align: "),s("span",{style:{color:"#0A3069"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              prop: "),s("span",{style:{color:"#0A3069"}},"'zip'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              label: "),s("span",{style:{color:"#0A3069"}},"'Zip'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              align: "),s("span",{style:{color:"#0A3069"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          showOverflowTooltip: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),fs=s("h2",{id:"\u8868\u5934\u989C\u8272\u81EA\u5B9A\u4E49",tabindex:"-1"},"\u8868\u5934\u989C\u8272\u81EA\u5B9A\u4E49",-1),xs=s("p",null,[l("\u5728 "),s("code",null,"column"),l(" \u8BBE\u7F6E "),s("code",null,"background"),l(" \u5373\u53EF, \u591A\u7EA7\u8868\u5934\u7684\u5B50\u96C6\u5982\u679C\u6CA1\u6709\u5B9A\u4E49\u80CC\u666F\u8272\u5219\u7EE7\u627F\u4E0A\u7EA7\u3002")],-1),Bs=s("p",null,[l("\u5982\u679C Table \u4F20\u5165\u4E86 "),s("code",null,"theme-color"),l(", \u4F18\u5148\u663E\u793A\u3002")],-1),hs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"themeColor "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'#e1f3d8'"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u6253\u5F00\u4E3B\u9898\u8272</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"danger"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"themeColor "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u5173\u95ED\u4E3B\u9898\u8272</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"theme-color"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"themeColor"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns2"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"theme-color"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"themeColor"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"tagLabel"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"link"'),s("span",{style:{color:"#C9D1D9"}},">\u81EA\u5B9A\u4E49\u5934\u90E8</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"4"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#79C0FF"}},"null"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#79C0FF"}},"null"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip2: "),s("span",{style:{color:"#A5D6FF"}},"'\u6211\u5728\u9F13\u697C'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag2: "),s("span",{style:{color:"#A5D6FF"}},"'\u6625\u5929\u82B1\u4F1A\u5F00'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip3: "),s("span",{style:{color:"#A5D6FF"}},"'--'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag3: "),s("span",{style:{color:"#A5D6FF"}},"'--'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"themeColor"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"''"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          type: "),s("span",{style:{color:"#A5D6FF"}},"'index'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"index"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," idx "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"2"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          background: "),s("span",{style:{color:"#A5D6FF"}},"'#c5d3f4'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'#'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          background: "),s("span",{style:{color:"#A5D6FF"}},"'#e1f3d8'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          background: "),s("span",{style:{color:"#A5D6FF"}},"'#ffd180'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          background: "),s("span",{style:{color:"#A5D6FF"}},"'#d78e6a'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          fixed: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"150")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          background: "),s("span",{style:{color:"#A5D6FF"}},"'#fcd3d3'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          group: "),s("span",{style:{color:"#A5D6FF"}},"'userName'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              prop: "),s("span",{style:{color:"#A5D6FF"}},"'tag'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              label: "),s("span",{style:{color:"#A5D6FF"}},"'Tag'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              align: "),s("span",{style:{color:"#A5D6FF"}},"'center'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              background: "),s("span",{style:{color:"#A5D6FF"}},"'#ffd180'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              slotLabel: "),s("span",{style:{color:"#A5D6FF"}},"'tagLabel'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              width: "),s("span",{style:{color:"#79C0FF"}},"220")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              prop: "),s("span",{style:{color:"#A5D6FF"}},"'zip'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              label: "),s("span",{style:{color:"#A5D6FF"}},"'\u7EE7\u627Fname\u7684\u989C\u8272'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              align: "),s("span",{style:{color:"#A5D6FF"}},"'center'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              width: "),s("span",{style:{color:"#79C0FF"}},"320")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          background: "),s("span",{style:{color:"#A5D6FF"}},"'#e1f3d8'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          group: "),s("span",{style:{color:"#A5D6FF"}},"'userName2'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              prop: "),s("span",{style:{color:"#A5D6FF"}},"'tag2'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              label: "),s("span",{style:{color:"#A5D6FF"}},"'Tag'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              width: "),s("span",{style:{color:"#79C0FF"}},"220"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              align: "),s("span",{style:{color:"#A5D6FF"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              prop: "),s("span",{style:{color:"#A5D6FF"}},"'zip2'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              label: "),s("span",{style:{color:"#A5D6FF"}},"'Zip'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              width: "),s("span",{style:{color:"#79C0FF"}},"200"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              align: "),s("span",{style:{color:"#A5D6FF"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          background: "),s("span",{style:{color:"#A5D6FF"}},"'#fcd3d3'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          group: "),s("span",{style:{color:"#A5D6FF"}},"'userName3'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              prop: "),s("span",{style:{color:"#A5D6FF"}},"'tag3'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              label: "),s("span",{style:{color:"#A5D6FF"}},"'Tag'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              align: "),s("span",{style:{color:"#A5D6FF"}},"'center'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              background: "),s("span",{style:{color:"#A5D6FF"}},"'#ffd180'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              slotLabel: "),s("span",{style:{color:"#A5D6FF"}},"'tagLabel'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              width: "),s("span",{style:{color:"#79C0FF"}},"220")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              prop: "),s("span",{style:{color:"#A5D6FF"}},"'zip3'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              label: "),s("span",{style:{color:"#A5D6FF"}},"'\u7EE7\u627Fname\u7684\u989C\u8272'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              align: "),s("span",{style:{color:"#A5D6FF"}},"'center'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              width: "),s("span",{style:{color:"#79C0FF"}},"220")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          showOverflowTooltip: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns2,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        themeColor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"themeColor "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'#e1f3d8'"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u6253\u5F00\u4E3B\u9898\u8272</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"danger"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"themeColor "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u5173\u95ED\u4E3B\u9898\u8272</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"theme-color"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"themeColor"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns2"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"theme-color"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"themeColor"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"tagLabel"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"link"'),s("span",{style:{color:"#24292F"}},">\u81EA\u5B9A\u4E49\u5934\u90E8</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"4"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0550AE"}},"null"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0550AE"}},"null"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip2: "),s("span",{style:{color:"#0A3069"}},"'\u6211\u5728\u9F13\u697C'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag2: "),s("span",{style:{color:"#0A3069"}},"'\u6625\u5929\u82B1\u4F1A\u5F00'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip3: "),s("span",{style:{color:"#0A3069"}},"'--'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag3: "),s("span",{style:{color:"#0A3069"}},"'--'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"themeColor"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"''"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          type: "),s("span",{style:{color:"#0A3069"}},"'index'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"index"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," idx "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          background: "),s("span",{style:{color:"#0A3069"}},"'#c5d3f4'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'#'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          background: "),s("span",{style:{color:"#0A3069"}},"'#e1f3d8'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          background: "),s("span",{style:{color:"#0A3069"}},"'#ffd180'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          background: "),s("span",{style:{color:"#0A3069"}},"'#d78e6a'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          fixed: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"150")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          background: "),s("span",{style:{color:"#0A3069"}},"'#fcd3d3'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          group: "),s("span",{style:{color:"#0A3069"}},"'userName'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              prop: "),s("span",{style:{color:"#0A3069"}},"'tag'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              label: "),s("span",{style:{color:"#0A3069"}},"'Tag'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              align: "),s("span",{style:{color:"#0A3069"}},"'center'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              background: "),s("span",{style:{color:"#0A3069"}},"'#ffd180'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              slotLabel: "),s("span",{style:{color:"#0A3069"}},"'tagLabel'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              width: "),s("span",{style:{color:"#0550AE"}},"220")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              prop: "),s("span",{style:{color:"#0A3069"}},"'zip'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              label: "),s("span",{style:{color:"#0A3069"}},"'\u7EE7\u627Fname\u7684\u989C\u8272'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              align: "),s("span",{style:{color:"#0A3069"}},"'center'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              width: "),s("span",{style:{color:"#0550AE"}},"320")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          background: "),s("span",{style:{color:"#0A3069"}},"'#e1f3d8'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          group: "),s("span",{style:{color:"#0A3069"}},"'userName2'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              prop: "),s("span",{style:{color:"#0A3069"}},"'tag2'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              label: "),s("span",{style:{color:"#0A3069"}},"'Tag'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              width: "),s("span",{style:{color:"#0550AE"}},"220"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              align: "),s("span",{style:{color:"#0A3069"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              prop: "),s("span",{style:{color:"#0A3069"}},"'zip2'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              label: "),s("span",{style:{color:"#0A3069"}},"'Zip'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              width: "),s("span",{style:{color:"#0550AE"}},"200"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              align: "),s("span",{style:{color:"#0A3069"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          background: "),s("span",{style:{color:"#0A3069"}},"'#fcd3d3'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          group: "),s("span",{style:{color:"#0A3069"}},"'userName3'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              prop: "),s("span",{style:{color:"#0A3069"}},"'tag3'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              label: "),s("span",{style:{color:"#0A3069"}},"'Tag'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              align: "),s("span",{style:{color:"#0A3069"}},"'center'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              background: "),s("span",{style:{color:"#0A3069"}},"'#ffd180'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              slotLabel: "),s("span",{style:{color:"#0A3069"}},"'tagLabel'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              width: "),s("span",{style:{color:"#0550AE"}},"220")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              prop: "),s("span",{style:{color:"#0A3069"}},"'zip3'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              label: "),s("span",{style:{color:"#0A3069"}},"'\u7EE7\u627Fname\u7684\u989C\u8272'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              align: "),s("span",{style:{color:"#0A3069"}},"'center'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              width: "),s("span",{style:{color:"#0550AE"}},"220")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          showOverflowTooltip: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns2,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        themeColor")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),vs=s("h2",{id:"\u591A\u9009",tabindex:"-1"},"\u591A\u9009",-1),_s=s("p",null,"\u4F60\u53EF\u4EE5\u9009\u62E9\u591A\u884C\u3002",-1),ws=s("p",null,"\u5B9E\u73B0\u591A\u9009\u975E\u5E38\u7B80\u5355: \u624B\u52A8\u6DFB\u52A0\u4E00\u4E2A column\uFF0C\u8BBE type \u5C5E\u6027\u4E3A selection \u5373\u53EF\uFF1B",-1),ks=s("p",null,[l("\u6B64\u5916, \u8FD8\u5F00\u542F\u4E86 "),s("code",null,"type = index"),l(" \u7684\u5E8F\u53F7\u5217\u3002")],-1),Ns=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"operations"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"link"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"danger"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">\u5220\u9664</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          type: "),s("span",{style:{color:"#A5D6FF"}},"'selection'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"60"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          type: "),s("span",{style:{color:"#A5D6FF"}},"'index'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"60"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'#'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"operations"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"link"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"danger"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">\u5220\u9664</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          type: "),s("span",{style:{color:"#0A3069"}},"'selection'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"60"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          type: "),s("span",{style:{color:"#0A3069"}},"'index'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"60"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'#'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),$s=_('<h2 id="\u5355\u9009" tabindex="-1">\u5355\u9009</h2><p>\u4E0D\u652F\u6301\u3002</p><h2 id="\u6392\u5E8F" tabindex="-1">\u6392\u5E8F</h2><p>\u5BF9\u8868\u683C\u8FDB\u884C\u6392\u5E8F\uFF0C\u53EF\u5FEB\u901F\u67E5\u627E\u6216\u5BF9\u6BD4\u6570\u636E\u3002</p><p>\u90E8\u5206\u5B57\u6BB5\u662F\u65F6\u95F4\u683C\u5F0F\u7684\uFF0C\u6392\u5E8F\u9700\u8981\u6309\u7167\u65F6\u95F4\u53BB\u6392\uFF0C\u7EC4\u4EF6\u5185\u7F6E\u4E86\u65F6\u95F4\u7C7B\u578B\u7684\u5B57\u6BB5\uFF1A <code>[&#39;date&#39;]</code>, \u5F53\u4F60\u9700\u8981\u5176\u4ED6\u7684\u5B57\u6BB5\u4E5F\u8981\u6309\u7167\u65F6\u95F4\u6392\u5E8F\u65F6\uFF0C\u9700\u8981\u4F20\u5165 <code>timeProps</code>\u3002</p><p>\u5728\u5217\u4E2D\u8BBE\u7F6E <code>sortable</code> \u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u4EE5\u8BE5\u5217\u4E3A\u57FA\u51C6\u7684\u6392\u5E8F\uFF0C \u63A5\u53D7\u4E00\u4E2A Boolean\uFF0C\u9ED8\u8BA4\u4E3A false\u3002 \u53EF\u4EE5\u901A\u8FC7 Table \u7684 <code>sort</code> \u5C5E\u6027\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u6392\u5E8F\u5217\u548C\u6392\u5E8F\u987A\u5E8F\u3002</p><p>\u5982\u679C\u9700\u8981\u540E\u7AEF\u6392\u5E8F, \u9700\u8981\u5728 \u7EC4\u4EF6\u5C5E\u6027 <code>useInnerSort</code> \u7F6E\u4E3A <code>false</code>, \u540C\u65F6\u76D1\u542C <code>sort-change</code> \u4E8B\u4EF6\uFF0C\u5728\u4E8B\u4EF6\u56DE\u8C03\u4E2D\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u6392\u5E8F\u7684\u5B57\u6BB5\u540D\u548C\u6392\u5E8F\u987A\u5E8F\uFF0C\u4ECE\u800C\u5411\u63A5\u53E3\u8BF7\u6C42\u6392\u5E8F\u540E\u7684\u8868\u683C\u6570\u636E\u3002</p><p>\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u4F7F\u7528\u4E86 <code>render</code> \u5C5E\u6027\uFF0C\u5B83\u7528\u4E8E\u683C\u5F0F\u5316\u6307\u5B9A\u5217\u7684\u503C\uFF0C \u63A5\u53D7\u4E00\u4E2A Function\uFF0C\u4F20\u5165\u53C2\u6570\uFF1A<code>{ column, row, rows, columns, $index }</code>\uFF0C \u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u8FDB\u884C\u5904\u7406\u3002</p><p>\u4E0D\u652F\u6301 <code>default-sort</code> \u5C5E\u6027\uFF0C\u652F\u6301 <code>sort</code> \u5C5E\u6027\u52A8\u6001\u63A7\u5236\u8868\u683C\u7684\u6392\u5E8F\u3002</p>',9),Ls=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"margin-bottom:12px;"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"warning"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"sort "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," { prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", order: "),s("span",{style:{color:"#A5D6FF"}},"'descending'"),s("span",{style:{color:"#C9D1D9"}}," }"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u6309Date\u964D\u5E8F</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"sort "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," { prop: "),s("span",{style:{color:"#A5D6FF"}},"'age'"),s("span",{style:{color:"#C9D1D9"}},", order: "),s("span",{style:{color:"#A5D6FF"}},"'ascending'"),s("span",{style:{color:"#C9D1D9"}}," }"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u6309Age\u5347\u5E8F</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"sort"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"sort"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"> </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          age: index "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          type: "),s("span",{style:{color:"#A5D6FF"}},"'index'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"60"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'#'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          sortable: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          sortable: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"render"),s("span",{style:{color:"#C9D1D9"}},": ({ "),s("span",{style:{color:"#FFA657"}},"column"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"rows"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"columns"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"$index"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"row"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"name"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"rows"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"column"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"prop"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"$index"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          showOverflowTooltip: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"sort"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"({});")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        sort")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"margin-bottom:12px;"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"warning"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"sort "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," { prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", order: "),s("span",{style:{color:"#0A3069"}},"'descending'"),s("span",{style:{color:"#24292F"}}," }"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u6309Date\u964D\u5E8F</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"sort "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," { prop: "),s("span",{style:{color:"#0A3069"}},"'age'"),s("span",{style:{color:"#24292F"}},", order: "),s("span",{style:{color:"#0A3069"}},"'ascending'"),s("span",{style:{color:"#24292F"}}," }"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u6309Age\u5347\u5E8F</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"sort"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"sort"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"> </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          age: index "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          type: "),s("span",{style:{color:"#0A3069"}},"'index'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"60"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'#'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          sortable: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          sortable: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"render"),s("span",{style:{color:"#24292F"}},": ({ "),s("span",{style:{color:"#953800"}},"column"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"rows"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"columns"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"$index"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"row"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"name"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"rows"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"column"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"prop"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"$index"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          showOverflowTooltip: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"sort"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"({});")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        sort")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Ss=_('<h2 id="\u7B5B\u9009" tabindex="-1">\u7B5B\u9009</h2><p>\u5BF9\u539F\u6709\u8868\u683C\u7684\u7B5B\u9009\u91CD\u5199\uFF0C\u7B5B\u9009\uFF0C\u53EF\u5FEB\u901F\u67E5\u627E\u5230\u81EA\u5DF1\u60F3\u770B\u7684\u6570\u636E\u3002</p><p>\u5728\u5217\u4E2D\u8BBE\u7F6E filterable \u5C5E\u6027\u5373\u53EF\u5F00\u542F\u8BE5\u5217\u7684\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u662F\u8F93\u5165\u7C7B\u578B\u7684\u7B5B\u9009\u6A21\u5F0F\u3002 filterable \u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u5B83\u7528\u4E8E\u51B3\u5B9A\u67D0\u4E9B\u6570\u636E\u662F\u5426\u663E\u793A\u3002</p><p>\u7EC4\u4EF6\u5185\u7F6E\u4E86\u51E0\u79CD\u7B5B\u9009\u65B9\u6CD5,\u5206\u522B\u662F\u8F93\u5165\u7C7B\u578B\u7B5B\u9009(<code>input</code>)\u3001\u4E0B\u62C9\u9009\u62E9\u7C7B\u578B\u7B5B\u9009(<code>select</code>)\u3001\u6570\u5B57\u8303\u56F4\u7B5B\u9009(<code>number</code>)\u3001\u65F6\u95F4\u8303\u56F4\u7B5B\u9009(<code>time</code>), \u6307\u5B9A\u7B5B\u9009\u7684 <code>type</code> \u5373\u53EF\u5F00\u542F\u6307\u5B9A\u7C7B\u578B\u7684\u7B5B\u9009\u6A21\u5F0F\u3002</p><p>\u4E0B\u62C9\u9009\u62E9\u7C7B\u578B\u7B5B\u9009\u652F\u6301\u591A\u9009\uFF0C\u9700\u8981\u6307\u5B9A <code>filter.multiple</code> \u4E3A <code>true</code> \u3002</p><p>\u5176\u4E2D\u6570\u5B57\u8303\u56F4\u7684\u7B5B\u9009\u53EF\u4EE5\u6839\u636E <code>column.filter.suffixLabel</code> \u51B3\u5B9A\u7B5B\u9009\u57FA\u6570\u3002<code>{ &#39;%&#39;: 0.01, \u4E07: 10000, \u4EBF: 100000000 }</code>\u3002\u5F53 <code>suffixLabel</code> \u4E3A\u5BF9\u5E94 key \u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u5C06\u4F1A\u4E58\u4EE5\u8FD9\u4E2A\u57FA\u6570\u540E\u518D\u548C\u5355\u5143\u683C\u7684\u503C\u505A\u6BD4\u8F83\u3002\u5339\u914D\u4E0D\u5230\u4EE5\u4E0A\u4E09\u4E2A key \u65F6\uFF0C\u57FA\u6570\u4E3A 1\u3002</p><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>Table</code> \u7684 <code>filter</code> \u5C5E\u6027\u52A8\u6001\u63A7\u5236\u8868\u683C\u7684\u7B5B\u9009\u3002</p>',7),Ts=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"style"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"margin-bottom:12px;"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"warning"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#D2A8FF"}},"addFilter"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},", ["),s("span",{style:{color:"#A5D6FF"}},"'Jerry'"),s("span",{style:{color:"#C9D1D9"}},"])"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u7B5B\u9009name=Jerry\u7684\u6570\u636E</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#D2A8FF"}},"addFilter"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},", ["),s("span",{style:{color:"#A5D6FF"}},"'2023-01-10'"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#A5D6FF"}},"'2023-01-15'"),s("span",{style:{color:"#C9D1D9"}},"])"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      >\u5728Jerry\u57FA\u7840\u4E0A\u7B5B\u900901-10\u523001-15\u7684\u6570\u636E</"),s("span",{style:{color:"#7EE787"}},"xs-button")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"danger"'),s("span",{style:{color:"#C9D1D9"}}," @"),s("span",{style:{color:"#79C0FF"}},"click"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"clearFilter"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">\u6E05\u7A7A\u7B5B\u9009</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"div"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"tableRef"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"filter"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"filters"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"> </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          age: index "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: index "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'Jerry'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          type: "),s("span",{style:{color:"#A5D6FF"}},"'index'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"60"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'#'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          sortable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            type: "),s("span",{style:{color:"#A5D6FF"}},"'time'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            type: "),s("span",{style:{color:"#A5D6FF"}},"'select'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            multiple: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"render"),s("span",{style:{color:"#C9D1D9"}},": ({ "),s("span",{style:{color:"#FFA657"}},"column"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"rows"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"columns"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"$index"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"row"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"name"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"rows"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"column"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"prop"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"$index"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            type: "),s("span",{style:{color:"#A5D6FF"}},"'select'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"render"),s("span",{style:{color:"#C9D1D9"}},": ({ "),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," row.name")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            type: "),s("span",{style:{color:"#A5D6FF"}},"'number'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            suffixLabel: "),s("span",{style:{color:"#A5D6FF"}},"'\u5C81'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          showOverflowTooltip: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"filters"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"({});")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"addFilter"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"prop"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"value"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        filters.value[prop] "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"tableRef"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"clearFilter"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," () "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        filters.value "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," {};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        tableRef.value."),s("span",{style:{color:"#D2A8FF"}},"clearFilter"),s("span",{style:{color:"#C9D1D9"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        filters,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        addFilter,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        clearFilter,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        tableRef")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"style"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"margin-bottom:12px;"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"warning"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#8250DF"}},"addFilter"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},", ["),s("span",{style:{color:"#0A3069"}},"'Jerry'"),s("span",{style:{color:"#24292F"}},"])"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u7B5B\u9009name=Jerry\u7684\u6570\u636E</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#8250DF"}},"addFilter"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},", ["),s("span",{style:{color:"#0A3069"}},"'2023-01-10'"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0A3069"}},"'2023-01-15'"),s("span",{style:{color:"#24292F"}},"])"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      >\u5728Jerry\u57FA\u7840\u4E0A\u7B5B\u900901-10\u523001-15\u7684\u6570\u636E</"),s("span",{style:{color:"#116329"}},"xs-button")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"danger"'),s("span",{style:{color:"#24292F"}}," @"),s("span",{style:{color:"#0550AE"}},"click"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"clearFilter"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">\u6E05\u7A7A\u7B5B\u9009</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"div"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"ref"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"tableRef"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"filter"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"filters"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"> </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          age: index "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: index "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'Jerry'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          type: "),s("span",{style:{color:"#0A3069"}},"'index'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"60"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'#'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          sortable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            type: "),s("span",{style:{color:"#0A3069"}},"'time'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            type: "),s("span",{style:{color:"#0A3069"}},"'select'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            multiple: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"render"),s("span",{style:{color:"#24292F"}},": ({ "),s("span",{style:{color:"#953800"}},"column"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"rows"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"columns"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"$index"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"row"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"name"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"rows"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"column"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"prop"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"$index"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            type: "),s("span",{style:{color:"#0A3069"}},"'select'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"render"),s("span",{style:{color:"#24292F"}},": ({ "),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," row.name")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            type: "),s("span",{style:{color:"#0A3069"}},"'number'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            suffixLabel: "),s("span",{style:{color:"#0A3069"}},"'\u5C81'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          showOverflowTooltip: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"filters"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"({});")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"addFilter"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"prop"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"value"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        filters.value[prop] "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"tableRef"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"clearFilter"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," () "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        filters.value "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," {};")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        tableRef.value."),s("span",{style:{color:"#8250DF"}},"clearFilter"),s("span",{style:{color:"#24292F"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        filters,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        addFilter,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        clearFilter,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        tableRef")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Gs=_('<h2 id="\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\u548C\u81EA\u5B9A\u4E49\u8868\u5934" tabindex="-1">\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\u548C\u81EA\u5B9A\u4E49\u8868\u5934</h2><p>\u81EA\u5B9A\u4E49\u5217\u7684\u663E\u793A\u5185\u5BB9\uFF0C\u53EF\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u9700\u8981\u5728 <code>column</code> \u5185\u90E8\u6307\u5B9A <code>slot</code> \u5B57\u6BB5 \u6216 <code>render</code> \u51FD\u6570, \u63A5\u53D7 <code>{ row, rows, column, columns, $index }</code> \u4E3A\u53C2\u6570\u3002</p><p>\u81EA\u5B9A\u4E49\u8868\u5934\u7684\u663E\u793A\u5185\u5BB9\uFF0C\u9700\u8981\u5728 <code>column</code> \u5185\u6307\u5B9A <code>slotLabel</code> \u5B57\u6BB5\u6216 <code>renderLabel</code> \u51FD\u6570\uFF0C \u63A5\u6536 <code>column</code> \u4F5C\u4E3A\u53C2\u6570\u3002</p>',3),zs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"ageLabel"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"{ column }"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">slotLabel\u6E32\u67D3{{ column.prop }}</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"age"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"{ row }"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"primary"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">slot: {{ row.age }}</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          age: index "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          type: "),s("span",{style:{color:"#A5D6FF"}},"'index'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"60"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'#'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"renderLabel"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#FFA657"}},"column"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'renderLabel\u51FD\u6570\u6E32\u67D3'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#C9D1D9"}}," column.prop;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"render"),s("span",{style:{color:"#C9D1D9"}},": ({ "),s("span",{style:{color:"#FFA657"}},"column"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"`render: ${"),s("span",{style:{color:"#C9D1D9"}},"row"),s("span",{style:{color:"#A5D6FF"}},"["),s("span",{style:{color:"#C9D1D9"}},"column"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"prop"),s("span",{style:{color:"#A5D6FF"}},"]"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          sortable: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          slotLabel: "),s("span",{style:{color:"#A5D6FF"}},"'ageLabel'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          slot: "),s("span",{style:{color:"#A5D6FF"}},"'age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          sortable: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"render"),s("span",{style:{color:"#C9D1D9"}},": ({ "),s("span",{style:{color:"#FFA657"}},"column"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"rows"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"columns"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"$index"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"row"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"name"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"rows"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"column"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"prop"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"$index"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          showOverflowTooltip: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"ageLabel"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"{ column }"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">slotLabel\u6E32\u67D3{{ column.prop }}</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"age"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"{ row }"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"primary"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">slot: {{ row.age }}</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          age: index "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          type: "),s("span",{style:{color:"#0A3069"}},"'index'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"60"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'#'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"renderLabel"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#953800"}},"column"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'renderLabel\u51FD\u6570\u6E32\u67D3'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#24292F"}}," column.prop;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"render"),s("span",{style:{color:"#24292F"}},": ({ "),s("span",{style:{color:"#953800"}},"column"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"`render: ${"),s("span",{style:{color:"#24292F"}},"row"),s("span",{style:{color:"#0A3069"}},"["),s("span",{style:{color:"#24292F"}},"column"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"prop"),s("span",{style:{color:"#0A3069"}},"]"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          sortable: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          slotLabel: "),s("span",{style:{color:"#0A3069"}},"'ageLabel'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          slot: "),s("span",{style:{color:"#0A3069"}},"'age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          sortable: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"render"),s("span",{style:{color:"#24292F"}},": ({ "),s("span",{style:{color:"#953800"}},"column"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"rows"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"columns"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"$index"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"row"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"name"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"rows"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"column"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"prop"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"$index"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          showOverflowTooltip: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Vs=s("h2",{id:"\u5C55\u5F00\u884C",tabindex:"-1"},"\u5C55\u5F00\u884C",-1),Os=s("p",null,"\u5F53\u884C\u5185\u5BB9\u8FC7\u591A\u5E76\u4E14\u4E0D\u60F3\u663E\u793A\u6A2A\u5411\u6EDA\u52A8\u6761\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 Table \u5C55\u5F00\u884C\u529F\u80FD\u3002",-1),Is=s("p",null,'\u901A\u8FC7\u8BBE\u7F6E type="expand" \u548C slot \u53EF\u4EE5\u5F00\u542F\u5C55\u5F00\u884C\u529F\u80FD\uFF0C \u6A21\u677F\u4F1A\u88AB\u6E32\u67D3\u6210\u4E3A\u5C55\u5F00\u884C\u7684\u5185\u5BB9\uFF0C\u5C55\u5F00\u884C\u53EF\u8BBF\u95EE\u7684\u5C5E\u6027\u4E0E\u4F7F\u7528\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\u65F6\u7684 slot \u76F8\u540C\u3002',-1),Rs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"expand"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"{ row, column, rows, $index, columns }"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      row = {{ row }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      column = {{ column }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      rows[2] = {{ rows["),s("span",{style:{color:"#79C0FF"}},"2"),s("span",{style:{color:"#C9D1D9"}},"] }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      columns[2] = {{ columns["),s("span",{style:{color:"#79C0FF"}},"2"),s("span",{style:{color:"#C9D1D9"}},"] }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"br"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      $index = {{ $index }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          age: index "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: index "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'Jerry'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          type: "),s("span",{style:{color:"#A5D6FF"}},"'expand'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"60"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'#'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          align: "),s("span",{style:{color:"#A5D6FF"}},"'center'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          slot: "),s("span",{style:{color:"#A5D6FF"}},"'expand'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          sortable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            type: "),s("span",{style:{color:"#A5D6FF"}},"'time'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"render"),s("span",{style:{color:"#C9D1D9"}},": ({ "),s("span",{style:{color:"#FFA657"}},"column"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"rows"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"columns"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"$index"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"row"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"name"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"rows"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"column"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"prop"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"$index"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            type: "),s("span",{style:{color:"#A5D6FF"}},"'number'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            suffixLabel: "),s("span",{style:{color:"#A5D6FF"}},"'\u5C81'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          showOverflowTooltip: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"expand"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"{ row, column, rows, $index, columns }"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      row = {{ row }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      column = {{ column }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      rows[2] = {{ rows["),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#24292F"}},"] }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      columns[2] = {{ columns["),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#24292F"}},"] }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"br"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      $index = {{ $index }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          age: index "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: index "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'Jerry'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          type: "),s("span",{style:{color:"#0A3069"}},"'expand'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"60"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'#'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          align: "),s("span",{style:{color:"#0A3069"}},"'center'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          slot: "),s("span",{style:{color:"#0A3069"}},"'expand'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          sortable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            type: "),s("span",{style:{color:"#0A3069"}},"'time'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"render"),s("span",{style:{color:"#24292F"}},": ({ "),s("span",{style:{color:"#953800"}},"column"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"rows"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"columns"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"$index"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"row"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"name"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"rows"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"column"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"prop"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"$index"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            type: "),s("span",{style:{color:"#0A3069"}},"'number'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            suffixLabel: "),s("span",{style:{color:"#0A3069"}},"'\u5C81'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          showOverflowTooltip: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Js=_('<h2 id="\u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D" tabindex="-1">\u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D</h2><p>\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u7684\u663E\u793A\u3002 \u5F53 row \u4E2D\u5305\u542B <code>children</code> \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002 \u6E32\u67D3\u5D4C\u5957\u6570\u636E\u9700\u8981 prop \u7684 <code>row-key</code>\u3002 \u6B64\u5916\uFF0C\u5B50\u884C\u6570\u636E\u53EF\u4EE5\u5F02\u6B65\u52A0\u8F7D\u3002 \u8BBE\u7F6E Table \u7684 <code>lazy</code> \u5C5E\u6027\u4E3A <code>true</code> \u4E0E\u52A0\u8F7D\u51FD\u6570 <code>load</code> \u3002 \u901A\u8FC7\u6307\u5B9A row \u4E2D\u7684 <code>hasChildren</code> \u5B57\u6BB5\u6765\u6307\u5B9A\u54EA\u4E9B\u884C\u662F\u5305\u542B\u5B50\u8282\u70B9\u3002 <code>children</code> \u4E0E <code>hasChildren</code> \u90FD\u53EF\u4EE5\u901A\u8FC7 <code>tree-props</code> \u914D\u7F6E\u3002</p>',2),Ps=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"row-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"id"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data2"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"row-key"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"id"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"lazy"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"load"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"load"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          id: "),s("span",{style:{color:"#A5D6FF"}},"'1'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-02'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          id: "),s("span",{style:{color:"#A5D6FF"}},"'2'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-04'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          id: "),s("span",{style:{color:"#A5D6FF"}},"'3'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-01'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              id: "),s("span",{style:{color:"#A5D6FF"}},"'31'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-06-01'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              id: "),s("span",{style:{color:"#A5D6FF"}},"'32'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-02'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          id: "),s("span",{style:{color:"#A5D6FF"}},"'4'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-03'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          id: "),s("span",{style:{color:"#A5D6FF"}},"'1'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-02'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          id: "),s("span",{style:{color:"#A5D6FF"}},"'2'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-04'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          id: "),s("span",{style:{color:"#A5D6FF"}},"'3'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-01'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          hasChildren: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          id: "),s("span",{style:{color:"#A5D6FF"}},"'4'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-03'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"load"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"treeNode"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"resolve"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#D2A8FF"}},"setTimeout"),s("span",{style:{color:"#C9D1D9"}},"(() "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"resolve"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              id: "),s("span",{style:{color:"#79C0FF"}},"31"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-01'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              id: "),s("span",{style:{color:"#79C0FF"}},"32"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              date: "),s("span",{style:{color:"#A5D6FF"}},"'2016-05-01'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              name: "),s("span",{style:{color:"#A5D6FF"}},"'wangxiaohu'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          ]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }, "),s("span",{style:{color:"#79C0FF"}},"1000"),s("span",{style:{color:"#C9D1D9"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        load,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data2,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"row-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"id"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data2"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"row-key"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"id"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"lazy"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"load"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"load"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          id: "),s("span",{style:{color:"#0A3069"}},"'1'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-02'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          id: "),s("span",{style:{color:"#0A3069"}},"'2'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-04'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          id: "),s("span",{style:{color:"#0A3069"}},"'3'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-01'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          children: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              id: "),s("span",{style:{color:"#0A3069"}},"'31'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              date: "),s("span",{style:{color:"#0A3069"}},"'2016-06-01'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              id: "),s("span",{style:{color:"#0A3069"}},"'32'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-02'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          id: "),s("span",{style:{color:"#0A3069"}},"'4'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-03'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          id: "),s("span",{style:{color:"#0A3069"}},"'1'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-02'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          id: "),s("span",{style:{color:"#0A3069"}},"'2'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-04'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          id: "),s("span",{style:{color:"#0A3069"}},"'3'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-01'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          hasChildren: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          id: "),s("span",{style:{color:"#0A3069"}},"'4'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-03'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"load"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"treeNode"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"resolve"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#8250DF"}},"setTimeout"),s("span",{style:{color:"#24292F"}},"(() "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"resolve"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              id: "),s("span",{style:{color:"#0550AE"}},"31"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-01'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              id: "),s("span",{style:{color:"#0550AE"}},"32"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              date: "),s("span",{style:{color:"#0A3069"}},"'2016-05-01'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              name: "),s("span",{style:{color:"#0A3069"}},"'wangxiaohu'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          ]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }, "),s("span",{style:{color:"#0550AE"}},"1000"),s("span",{style:{color:"#24292F"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        load,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data2,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Ms=_('<h2 id="\u5408\u8BA1\u884C" tabindex="-1">\u5408\u8BA1\u884C</h2><p>\u901A\u8FC7 <code>show-summary</code> \u6253\u5F00\u8868\u683C\u5408\u8BA1, <code>sum-text</code> \u9ED8\u8BA4\u4E3A <code>&quot;\u5408\u8BA1&quot;</code>\u3002</p><p>\u82E5\u8868\u683C\u5C55\u793A\u7684\u662F\u5404\u7C7B\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u663E\u793A\u5404\u5217\u7684\u5408\u8BA1\u3002\u53EF\u4EE5\u901A\u8FC7 <code>summary-position</code> \u914D\u7F6E \u5408\u8BA1\u884C\u7684\u4F4D\u7F6E\uFF0C \u9ED8\u8BA4\u4E3A <code>bottom</code>\u3002</p><p>\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u6C47\u603B\u6570\u636E\uFF0C\u8BF7\u4F20\u5165\u4E00\u4E2A <code>summary-method</code>, \u53C2\u6570\u4E3A <code>{ columns, data }</code>\u3002</p>',4),Zs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"show-summary"),s("span",{style:{color:"#C9D1D9"}},"></"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"show-summary")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    :"),s("span",{style:{color:"#79C0FF"}},"summary-method"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"getSummaries"),s("span",{style:{color:"#C9D1D9"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    "),s("span",{style:{color:"#79C0FF"}},"summary-position"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"top"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  ></"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          age: index "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: index "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"?"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},":"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'Jerry'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          sortable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            type: "),s("span",{style:{color:"#A5D6FF"}},"'time'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"render"),s("span",{style:{color:"#C9D1D9"}},": ({ "),s("span",{style:{color:"#FFA657"}},"column"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"rows"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"columns"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"$index"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#A5D6FF"}},"`${"),s("span",{style:{color:"#C9D1D9"}},"row"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"name"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"rows"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#79C0FF"}},"length"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"column"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#C9D1D9"}},"prop"),s("span",{style:{color:"#A5D6FF"}},"}-${"),s("span",{style:{color:"#C9D1D9"}},"$index"),s("span",{style:{color:"#A5D6FF"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Age'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filterable: "),s("span",{style:{color:"#79C0FF"}},"true"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            type: "),s("span",{style:{color:"#A5D6FF"}},"'number'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            suffixLabel: "),s("span",{style:{color:"#A5D6FF"}},"'\u5C81'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          showOverflowTooltip: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"getSummaries"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FFA657"}},"param"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," { "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," } "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," param;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"sums"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns."),s("span",{style:{color:"#D2A8FF"}},"forEach"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"column"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (index "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            sums[index] "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'Total Cost'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"values"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," data."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"item"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Number"),s("span",{style:{color:"#C9D1D9"}},"(item[column.property]));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FF7B72"}},"!"),s("span",{style:{color:"#C9D1D9"}},"values."),s("span",{style:{color:"#D2A8FF"}},"every"),s("span",{style:{color:"#C9D1D9"}},"("),s("span",{style:{color:"#FFA657"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," Number."),s("span",{style:{color:"#D2A8FF"}},"isNaN"),s("span",{style:{color:"#C9D1D9"}},"(value))) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            sums[index] "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"`$ ${"),s("span",{style:{color:"#C9D1D9"}},"values"),s("span",{style:{color:"#A5D6FF"}},"."),s("span",{style:{color:"#D2A8FF"}},"reduce"),s("span",{style:{color:"#A5D6FF"}},"(("),s("span",{style:{color:"#79C0FF"}},"prev"),s("span",{style:{color:"#A5D6FF"}},", "),s("span",{style:{color:"#79C0FF"}},"curr"),s("span",{style:{color:"#A5D6FF"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#A5D6FF"}}," "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"value"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"Number"),s("span",{style:{color:"#C9D1D9"}},"(curr);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," ("),s("span",{style:{color:"#FF7B72"}},"!"),s("span",{style:{color:"#C9D1D9"}},"Number."),s("span",{style:{color:"#D2A8FF"}},"isNaN"),s("span",{style:{color:"#C9D1D9"}},"(value)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," prev "),s("span",{style:{color:"#FF7B72"}},"+"),s("span",{style:{color:"#C9D1D9"}}," curr;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              } "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"                "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," prev;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"              }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            }"),s("span",{style:{color:"#A5D6FF"}},", "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#A5D6FF"}},")"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          } "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            sums[index] "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'N/A'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," sums;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        getSummaries,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"show-summary"),s("span",{style:{color:"#24292F"}},"></"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"show-summary")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    :"),s("span",{style:{color:"#0550AE"}},"summary-method"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"getSummaries"),s("span",{style:{color:"#24292F"}},'"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    "),s("span",{style:{color:"#0550AE"}},"summary-position"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"top"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  ></"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          age: index "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: index "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"?"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},":"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'Jerry'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          sortable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            type: "),s("span",{style:{color:"#0A3069"}},"'time'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"render"),s("span",{style:{color:"#24292F"}},": ({ "),s("span",{style:{color:"#953800"}},"column"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"rows"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"columns"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"$index"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#0A3069"}},"`${"),s("span",{style:{color:"#24292F"}},"row"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"name"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"rows"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#0550AE"}},"length"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"column"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#24292F"}},"prop"),s("span",{style:{color:"#0A3069"}},"}-${"),s("span",{style:{color:"#24292F"}},"$index"),s("span",{style:{color:"#0A3069"}},"}`")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Age'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filterable: "),s("span",{style:{color:"#0550AE"}},"true"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          filter: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            type: "),s("span",{style:{color:"#0A3069"}},"'number'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            suffixLabel: "),s("span",{style:{color:"#0A3069"}},"'\u5C81'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          showOverflowTooltip: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"getSummaries"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#953800"}},"param"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," { "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," } "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," param;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"sums"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns."),s("span",{style:{color:"#8250DF"}},"forEach"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"column"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (index "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            sums[index] "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'Total Cost'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"values"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," data."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"item"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Number"),s("span",{style:{color:"#24292F"}},"(item[column.property]));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"values."),s("span",{style:{color:"#8250DF"}},"every"),s("span",{style:{color:"#24292F"}},"("),s("span",{style:{color:"#953800"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," Number."),s("span",{style:{color:"#8250DF"}},"isNaN"),s("span",{style:{color:"#24292F"}},"(value))) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            sums[index] "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"`$ ${"),s("span",{style:{color:"#24292F"}},"values"),s("span",{style:{color:"#0A3069"}},"."),s("span",{style:{color:"#8250DF"}},"reduce"),s("span",{style:{color:"#0A3069"}},"(("),s("span",{style:{color:"#0550AE"}},"prev"),s("span",{style:{color:"#0A3069"}},", "),s("span",{style:{color:"#0550AE"}},"curr"),s("span",{style:{color:"#0A3069"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#0A3069"}}," "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"value"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"Number"),s("span",{style:{color:"#24292F"}},"(curr);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," ("),s("span",{style:{color:"#CF222E"}},"!"),s("span",{style:{color:"#24292F"}},"Number."),s("span",{style:{color:"#8250DF"}},"isNaN"),s("span",{style:{color:"#24292F"}},"(value)) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," prev "),s("span",{style:{color:"#CF222E"}},"+"),s("span",{style:{color:"#24292F"}}," curr;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"                "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," prev;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"              }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            }"),s("span",{style:{color:"#0A3069"}},", "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#0A3069"}},")"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            sums[index] "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'N/A'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," sums;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        getSummaries,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),js=_('<h2 id="\u5408\u5E76\u884C\u6216\u5217" tabindex="-1">\u5408\u5E76\u884C\u6216\u5217</h2><p>\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002</p><p>\u901A\u8FC7\u7ED9 table \u4F20\u5165<code>span-method</code>\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C \u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C <code>row</code>\u3001\u5F53\u524D\u5217 <code>column</code>\u3001\u5F53\u524D\u884C\u53F7 <code>rowIndex</code>\u3001\u5F53\u524D\u5217\u53F7 <code>columnIndex</code> \u56DB\u4E2A\u5C5E\u6027\u3002 \u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868 <code>rowspan</code>\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868 <code>colspan</code>\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A <code>rowspan</code> \u548C <code>colspan</code> \u7684\u5BF9\u8C61\u3002</p>',3),qs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"span-method"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"arraySpanMethod"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"border"),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"arraySpanMethod"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," ({ "),s("span",{style:{color:"#FFA657"}},"row"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"column"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"rowIndex"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"columnIndex"),s("span",{style:{color:"#C9D1D9"}}," }) "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (rowIndex "),s("span",{style:{color:"#FF7B72"}},"%"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"2"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (columnIndex "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"2"),s("span",{style:{color:"#C9D1D9"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          } "),s("span",{style:{color:"#FF7B72"}},"else"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"if"),s("span",{style:{color:"#C9D1D9"}}," (columnIndex "),s("span",{style:{color:"#FF7B72"}},"==="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"1"),s("span",{style:{color:"#C9D1D9"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"            "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," ["),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#79C0FF"}},"0"),s("span",{style:{color:"#C9D1D9"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        arraySpanMethod")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"span-method"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"arraySpanMethod"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"border"),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"arraySpanMethod"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," ({ "),s("span",{style:{color:"#953800"}},"row"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"column"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"rowIndex"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"columnIndex"),s("span",{style:{color:"#24292F"}}," }) "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (rowIndex "),s("span",{style:{color:"#CF222E"}},"%"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (columnIndex "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"2"),s("span",{style:{color:"#24292F"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          } "),s("span",{style:{color:"#CF222E"}},"else"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"if"),s("span",{style:{color:"#24292F"}}," (columnIndex "),s("span",{style:{color:"#CF222E"}},"==="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"1"),s("span",{style:{color:"#24292F"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"            "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," ["),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#0550AE"}},"0"),s("span",{style:{color:"#24292F"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        arraySpanMethod")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Us=s("h2",{id:"\u81EA\u5B9A\u4E49\u7D22\u5F15",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u7D22\u5F15",-1),Hs=s("p",null,"\u81EA\u5B9A\u4E49 type=index \u5217\u7684\u884C\u53F7\u3002",-1),Ks=s("p",null,[l("\u901A\u8FC7\u7ED9 type=index \u7684\u5217\u4F20\u5165 "),s("code",null,"index"),l(" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7D22\u5F15\u3002 \u8BE5\u5C5E\u6027\u4F20\u5165\u6570\u5B57\u65F6\uFF0C\u5C06\u4F5C\u4E3A\u7D22\u5F15\u7684\u8D77\u59CB\u503C\u3002 \u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B83\u63D0\u4F9B\u5F53\u524D\u884C\u7684\u884C\u53F7\uFF08\u4ECE 0 \u5F00\u59CB\uFF09\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u503C\u5C06\u4F5C\u4E3A\u7D22\u5F15\u5C55\u793A\u3002")],-1),Qs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"5"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          type: "),s("span",{style:{color:"#A5D6FF"}},"'index'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          "),s("span",{style:{color:"#D2A8FF"}},"index"),s("span",{style:{color:"#C9D1D9"}},": "),s("span",{style:{color:"#FFA657"}},"idx"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," idx "),s("span",{style:{color:"#FF7B72"}},"*"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"5"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          type: "),s("span",{style:{color:"#0A3069"}},"'index'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          "),s("span",{style:{color:"#8250DF"}},"index"),s("span",{style:{color:"#24292F"}},": "),s("span",{style:{color:"#953800"}},"idx"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," idx "),s("span",{style:{color:"#CF222E"}},"*"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"2")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),Ws=s("h2",{id:"\u8868\u5934\u5438\u9876\u548C\u6A2A\u5411\u6EDA\u52A8\u6761\u5438\u5E95",tabindex:"-1"},"\u8868\u5934\u5438\u9876\u548C\u6A2A\u5411\u6EDA\u52A8\u6761\u5438\u5E95",-1),Xs=s("p",null,[l("\u901A\u8FC7\u5C5E\u6027 "),s("code",null,"stickyable"),l(" \u53EF\u4EE5\u6307\u5B9A\u8868\u683C\u8868\u5934\u662F\u5426\u5438\u9876\uFF0C\u6A2A\u5411\u6EDA\u52A8\u6761\u662F\u5426\u5438\u5E95\u3002\u8FD8\u53EF\u4EE5\u901A\u8FC7 "),s("code",null,"offset"),l("\u5C5E\u6027\u914D\u7F6E\u8DDD\u79BB\u89C6\u53E3\u9876\u90E8\u7684\u504F\u79FB\u91CF\u3002 \u9ED8\u8BA4\u5438\u9876\u5173\u95ED\u7684\u3002")],-1),Ys=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  <"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"stickyable"),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"columns"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},"data"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}}," :"),s("span",{style:{color:"#79C0FF"}},"offset"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#79C0FF"}},"73"),s("span",{style:{color:"#C9D1D9"}},'"'),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    <"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}}," #"),s("span",{style:{color:"#79C0FF"}},"operations"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      <"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"link"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"type"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"danger"'),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"size"),s("span",{style:{color:"#C9D1D9"}},"="),s("span",{style:{color:"#A5D6FF"}},'"small"'),s("span",{style:{color:"#C9D1D9"}},">\u5220\u9664</"),s("span",{style:{color:"#7EE787"}},"xs-button"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    </"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  </"),s("span",{style:{color:"#7EE787"}},"xs-table"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"import"),s("span",{style:{color:"#C9D1D9"}}," { ref } "),s("span",{style:{color:"#FF7B72"}},"from"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#A5D6FF"}},"'vue'"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"  "),s("span",{style:{color:"#FF7B72"}},"export"),s("span",{style:{color:"#FFA657"}}," "),s("span",{style:{color:"#FF7B72"}},"default"),s("span",{style:{color:"#FFA657"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"    "),s("span",{style:{color:"#D2A8FF"}},"setup"),s("span",{style:{color:"#FFA657"}},"() "),s("span",{style:{color:"#C9D1D9"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"data"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        Array."),s("span",{style:{color:"#D2A8FF"}},"from"),s("span",{style:{color:"#C9D1D9"}},"({ length: "),s("span",{style:{color:"#79C0FF"}},"10"),s("span",{style:{color:"#C9D1D9"}}," })."),s("span",{style:{color:"#D2A8FF"}},"map"),s("span",{style:{color:"#C9D1D9"}},"(("),s("span",{style:{color:"#FFA657"}},"_"),s("span",{style:{color:"#C9D1D9"}},", "),s("span",{style:{color:"#FFA657"}},"index"),s("span",{style:{color:"#C9D1D9"}},") "),s("span",{style:{color:"#FF7B72"}},"=>"),s("span",{style:{color:"#C9D1D9"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          date: "),s("span",{style:{color:"#A5D6FF"}},"`2023-01-1${"),s("span",{style:{color:"#C9D1D9"}},"index"),s("span",{style:{color:"#A5D6FF"}},"}`"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          name: "),s("span",{style:{color:"#A5D6FF"}},"'Tom'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          state: "),s("span",{style:{color:"#A5D6FF"}},"'California'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          city: "),s("span",{style:{color:"#A5D6FF"}},"'Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          address: "),s("span",{style:{color:"#A5D6FF"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          zip: "),s("span",{style:{color:"#A5D6FF"}},"'CA 90036'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          tag: "),s("span",{style:{color:"#A5D6FF"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"const"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#79C0FF"}},"columns"),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#FF7B72"}},"="),s("span",{style:{color:"#C9D1D9"}}," "),s("span",{style:{color:"#D2A8FF"}},"ref"),s("span",{style:{color:"#C9D1D9"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Date'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"100"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          fixed: "),s("span",{style:{color:"#79C0FF"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Name'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'state'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'State'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'city'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'City'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          prop: "),s("span",{style:{color:"#A5D6FF"}},"'address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Address'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"600")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          slot: "),s("span",{style:{color:"#A5D6FF"}},"'operations'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          label: "),s("span",{style:{color:"#A5D6FF"}},"'Operations'"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          width: "),s("span",{style:{color:"#79C0FF"}},"120"),s("span",{style:{color:"#C9D1D9"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"          fixed: "),s("span",{style:{color:"#A5D6FF"}},"'right'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      "),s("span",{style:{color:"#FF7B72"}},"return"),s("span",{style:{color:"#C9D1D9"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#FFA657"}},"  }"),s("span",{style:{color:"#C9D1D9"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"</"),s("span",{style:{color:"#7EE787"}},"script"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
`),s("span",{class:"line"})])]),s("pre",{"v-pre":"",class:"shiki vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  <"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"stickyable"),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"columns"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},"data"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}}," :"),s("span",{style:{color:"#0550AE"}},"offset"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#0550AE"}},"73"),s("span",{style:{color:"#24292F"}},'"'),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    <"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}}," #"),s("span",{style:{color:"#0550AE"}},"operations"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      <"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"link"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"type"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"danger"'),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"size"),s("span",{style:{color:"#24292F"}},"="),s("span",{style:{color:"#0A3069"}},'"small"'),s("span",{style:{color:"#24292F"}},">\u5220\u9664</"),s("span",{style:{color:"#116329"}},"xs-button"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    </"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  </"),s("span",{style:{color:"#116329"}},"xs-table"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"template"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"<"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"import"),s("span",{style:{color:"#24292F"}}," { ref } "),s("span",{style:{color:"#CF222E"}},"from"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0A3069"}},"'vue'"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"  "),s("span",{style:{color:"#CF222E"}},"export"),s("span",{style:{color:"#953800"}}," "),s("span",{style:{color:"#CF222E"}},"default"),s("span",{style:{color:"#953800"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"    "),s("span",{style:{color:"#8250DF"}},"setup"),s("span",{style:{color:"#953800"}},"() "),s("span",{style:{color:"#24292F"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"data"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        Array."),s("span",{style:{color:"#8250DF"}},"from"),s("span",{style:{color:"#24292F"}},"({ length: "),s("span",{style:{color:"#0550AE"}},"10"),s("span",{style:{color:"#24292F"}}," })."),s("span",{style:{color:"#8250DF"}},"map"),s("span",{style:{color:"#24292F"}},"(("),s("span",{style:{color:"#953800"}},"_"),s("span",{style:{color:"#24292F"}},", "),s("span",{style:{color:"#953800"}},"index"),s("span",{style:{color:"#24292F"}},") "),s("span",{style:{color:"#CF222E"}},"=>"),s("span",{style:{color:"#24292F"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          date: "),s("span",{style:{color:"#0A3069"}},"`2023-01-1${"),s("span",{style:{color:"#24292F"}},"index"),s("span",{style:{color:"#0A3069"}},"}`"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          name: "),s("span",{style:{color:"#0A3069"}},"'Tom'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          state: "),s("span",{style:{color:"#0A3069"}},"'California'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          city: "),s("span",{style:{color:"#0A3069"}},"'Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          address: "),s("span",{style:{color:"#0A3069"}},"'No. 189, Grove St, Los Angeles'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          zip: "),s("span",{style:{color:"#0A3069"}},"'CA 90036'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          tag: "),s("span",{style:{color:"#0A3069"}},"'Office'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"const"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#0550AE"}},"columns"),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#CF222E"}},"="),s("span",{style:{color:"#24292F"}}," "),s("span",{style:{color:"#8250DF"}},"ref"),s("span",{style:{color:"#24292F"}},"([")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Date'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"100"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          fixed: "),s("span",{style:{color:"#0550AE"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Name'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'state'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'State'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'city'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'City'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"200")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          prop: "),s("span",{style:{color:"#0A3069"}},"'address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Address'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"600")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          slot: "),s("span",{style:{color:"#0A3069"}},"'operations'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          label: "),s("span",{style:{color:"#0A3069"}},"'Operations'"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          width: "),s("span",{style:{color:"#0550AE"}},"120"),s("span",{style:{color:"#24292F"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"          fixed: "),s("span",{style:{color:"#0A3069"}},"'right'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      ]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      "),s("span",{style:{color:"#CF222E"}},"return"),s("span",{style:{color:"#24292F"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        data,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"        columns")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"      };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#953800"}},"  }"),s("span",{style:{color:"#24292F"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292F"}},"</"),s("span",{style:{color:"#116329"}},"script"),s("span",{style:{color:"#24292F"}},">")]),l(`
`),s("span",{class:"line"})])])],-1),sl=_('<h2 id="\u9884\u8BBE\u7684-dom-\u751F\u6210\u65B9\u6CD5" tabindex="-1">\u9884\u8BBE\u7684 Dom \u751F\u6210\u65B9\u6CD5</h2><h2 id="\u8868\u683C\u5C5E\u6027" tabindex="-1">\u8868\u683C\u5C5E\u6027</h2><h2 id="\u8868\u683C\u4E8B\u4EF6" tabindex="-1">\u8868\u683C\u4E8B\u4EF6</h2><h2 id="\u8868\u683C\u65B9\u6CD5" tabindex="-1">\u8868\u683C\u65B9\u6CD5</h2><h2 id="\u8868\u683C\u63D2\u69FD" tabindex="-1">\u8868\u683C\u63D2\u69FD</h2><h2 id="\u5217\u5C5E\u6027" tabindex="-1">\u5217\u5C5E\u6027</h2><h2 id="\u5217\u63D2\u69FD" tabindex="-1">\u5217\u63D2\u69FD</h2><h2 id="\u8FD9\u4E9B-eltable-\u7684\u5C5E\u6027\u5BF9\u672C\u8868\u683C\u4E0D\u652F\u6301\u3002" tabindex="-1">\u8FD9\u4E9B ElTable \u7684\u5C5E\u6027\u5BF9\u672C\u8868\u683C\u4E0D\u652F\u6301\u3002</h2>',8);function ll(i,y,c,p,D,g){const a=h("render-demo-0"),n=h("demo"),r=h("render-demo-1"),F=h("render-demo-2"),e=h("render-demo-3"),d=h("render-demo-4"),o=h("render-demo-5"),u=h("render-demo-6"),t=h("render-demo-7"),b=h("render-demo-8"),C=h("render-demo-9"),x=h("render-demo-10"),f=h("render-demo-11"),B=h("render-demo-12"),v=h("render-demo-13"),w=h("render-demo-14"),k=h("render-demo-15"),N=h("render-demo-16"),$=h("render-demo-17"),L=h("render-demo-18"),S=h("render-demo-19"),T=h("render-demo-20");return V(),z("div",null,[R,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data" />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }))
      );
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          width: 180
        },
        {
          prop: 'name',
          label: 'Name',
          width: 180
        },
        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[J]),default:E(()=>[m(a)]),_:1}),P,M,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-button type="primary" @click="loading = !loading">{{ loading ? '\u5173\u95ED' : '\u6253\u5F00' }}\u52A0\u8F7D</xs-button>

  <xs-table :columns="columns" :data="data" :loading="loading" :skeleton-rows="10" />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }))
      );

      const loading = ref(true);
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          width: 180
        },
        {
          prop: 'name',
          label: 'Name',
          width: 180
        },
        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      return {
        data,
        columns,
        loading
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Z]),default:E(()=>[m(r)]),_:1}),j,q,U,H,m(n,{customClass:"undefined",sourceCode:`<template>
  <div style="margin-bottom:12px;">
    <xs-button type="warning" @click="pagination = !pagination">{{ pagination ? '\u5173\u95ED' : '\u6253\u5F00' }}\u5206\u9875</xs-button>
    <xs-button v-if="pagination" type="primary" @click="setPage">\u8C03\u6574\u9875\u957F\u548C\u9875\u957F\u9009\u9879</xs-button>

    <xs-button v-if="pagination" type="danger" @click="slotVisible = !slotVisible">
      {{ slotVisible ? '\u5173\u95ED' : '\u663E\u793A' }} \u63D2\u69FD
    </xs-button>
  </div>
  <xs-table :columns="columns" :data="data" :pagination="pagination" :reset-position-on-data-change="false">
    <template v-if="slotVisible" #paginationLeft>
      <xs-button type="warning">\u5206\u9875\u5DE6\u4FA7slot</xs-button>
    </template>

    <template v-if="slotVisible" #paginationRight>
      <xs-button type="warning">\u5206\u9875\u53F3\u4FA7slot</xs-button>
    </template>
  </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          fixed: true
        },
        {
          prop: 'name',
          label: 'Name'
        },

        {
          prop: 'address',
          label: 'Address',
          width: 600
        }
      ]);

      const pagination = ref(true);

      const setPage = () => {
        if (typeof pagination.value === 'object') {
          pagination.value = true;
        } else {
          pagination.value = {
            layout: 'sizes, prev, pager, next, total',
            position: 'flex-start',
            pageSizes: [25, 50, 100], // \u9ED8\u8BA4\u7684\u53EF\u9009\u5206\u9875\u6570\u91CF
            pageSize: 50 // \u9ED8\u8BA4\u7684\u6BCF\u9875\u6761\u6570
          };
        }
      };

      const slotVisible = ref(false);

      return {
        data,
        columns,
        setPage,
        pagination,
        slotVisible
      };
    }
  };
<\/script>
`},{highlight:E(()=>[K]),default:E(()=>[m(F)]),_:1}),Q,W,X,Y,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-button type="primary" @click="toggleStripe"> {{ stripe ? '\u5173\u95ED' : '\u6253\u5F00' }}\u6591\u9A6C\u7EB9 </xs-button>
  <xs-button v-if="stripe" type="danger" @click="changeIndex"> \u5207\u6362\u6591\u9A6C\u7EB9\u7684\u8D77\u59CB\u5E8F\u53F7 </xs-button>

  <xs-table :columns="columns" :data="data" :stripe="stripe" :stripe-index="stripeIndex" />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }))
      );

      const stripe = ref(true);
      const stripeIndex = ref(0);

      const toggleStripe = () => {
        stripe.value = !stripe.value;
      };

      const changeIndex = () => {
        if (stripeIndex.value) {
          stripeIndex.value = 0;
        } else {
          stripeIndex.value = 1;
        }
      };

      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          width: 180
        },
        {
          prop: 'name',
          label: 'Name',
          width: 180
        },
        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      return {
        data,
        columns,
        toggleStripe,
        stripe,
        stripeIndex,
        changeIndex
      };
    }
  };
<\/script>
`},{highlight:E(()=>[ss]),default:E(()=>[m(e)]),_:1}),ls,os,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data" border />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }))
      );
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          width: 180
        },
        {
          prop: 'name',
          label: 'Name',
          width: 180
        },
        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[ns]),default:E(()=>[m(d)]),_:1}),as,es,ps,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data" :row-class-name="tableRowClassName" :abc="1" />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }))
      );

      const tableRowClassName = ({ row, rowIndex }) => {
        if (rowIndex === 0) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      };
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          width: 180
        },
        {
          prop: 'name',
          label: 'Name',
          width: 180
        },
        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      return {
        data,
        columns,
        tableRowClassName
      };
    }
  };
<\/script>

<style>
  .xs-table .el-table .warning-row td {
    background-color: var(--xs-color-warning-light-8) !important;
  }
  .xs-table .el-table .success-row {
    background-color: var(--xs-color-success-light-8);
  }
</style>
`},{highlight:E(()=>[ts]),default:E(()=>[m(o)]),_:1}),cs,rs,ys,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data" height="250" />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }))
      );
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          width: 180
        },
        {
          prop: 'name',
          label: 'Name',
          width: 180
        },
        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Fs]),default:E(()=>[m(u)]),_:1}),Ds,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data">
    <template #operations>
      <xs-button link type="danger" size="small">\u5220\u9664</xs-button>
    </template>
  </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          width: 100,
          fixed: true
        },
        {
          prop: 'name',
          label: 'Name',
          width: 200
        },
        {
          prop: 'state',
          label: 'State',
          width: 200
        },
        {
          prop: 'city',
          label: 'City',
          width: 200
        },
        {
          prop: 'address',
          label: 'Address',
          width: 600
        },
        {
          slot: 'operations',
          label: 'Operations',
          width: 120,
          fixed: 'right'
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[is]),default:E(()=>[m(t)]),_:1}),us,Cs,ds,As,ms,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data" max-height="250">
    <template #operations="{ $index }">
      <xs-button type="link" size="small" @click="deleteRow($index)">\u5220\u9664</xs-button>
    </template>
  </xs-table>

  <xs-button style="width:100%;margin-top:12px" @click="addRow">\u589E\u52A0\u4E00\u9879\u5230\u8868\u683C</xs-button>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 2 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );

      const deleteRow = index => {
        data.value.splice(index, 1);
      };

      const addRow = () => {
        if (data.value.length >= 10) return;
        data.value.push({
          date: \`2023-01-1\${data.value.length}\`,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        });
      };

      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          width: 100,
          fixed: true
        },
        {
          prop: 'name',
          label: 'Name',
          width: 200
        },
        {
          prop: 'state',
          label: 'State',
          width: 200
        },
        {
          prop: 'city',
          label: 'City',
          width: 200
        },
        {
          prop: 'address',
          label: 'Address',
          width: 600
        },
        {
          slot: 'operations',
          label: 'Operations',
          width: 120,
          fixed: 'right'
        }
      ]);

      return {
        data,
        columns,
        deleteRow,
        addRow
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Es]),default:E(()=>[m(b)]),_:1}),bs,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data">
    <template #operations>
      <xs-button link type="danger" size="small">\u5220\u9664</xs-button>
    </template>
  </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          fixed: true
        },
        {
          prop: 'name',
          label: 'Name',
          align: 'center',
          children: [
            {
              prop: 'tag',
              label: 'Tag',
              align: 'center'
            },
            {
              prop: 'zip',
              label: 'Zip',
              align: 'center'
            }
          ]
        },

        {
          prop: 'address',
          label: 'Address',
          showOverflowTooltip: true
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[gs]),default:E(()=>[m(C)]),_:1}),fs,xs,Bs,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-button type="primary" @click="themeColor = '#e1f3d8'">\u6253\u5F00\u4E3B\u9898\u8272</xs-button>
  <xs-button type="danger" @click="themeColor = ''">\u5173\u95ED\u4E3B\u9898\u8272</xs-button>
  <br />
  <br />
  <xs-table :columns="columns" :data="data" :theme-color="themeColor" />
  <br />
  <xs-table :columns="columns2" :data="data" :theme-color="themeColor">
    <template #tagLabel>
      <xs-button type="link">\u81EA\u5B9A\u4E49\u5934\u90E8</xs-button>
    </template>
  </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 4 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: null,
          tag: null,
          zip2: '\u6211\u5728\u9F13\u697C',
          tag2: '\u6625\u5929\u82B1\u4F1A\u5F00',
          zip3: '--',
          tag3: '--'
        }))
      );

      const themeColor = ref('');
      const columns = ref([
        {
          type: 'index',
          index: idx => idx * 2,
          background: '#c5d3f4',
          label: '#',
          align: 'center'
        },
        {
          prop: 'date',
          label: 'Date',
          background: '#e1f3d8'
        },
        {
          prop: 'name',
          label: 'Name',
          background: '#ffd180'
        },
        {
          prop: 'address',
          label: 'Address',
          background: '#d78e6a'
        }
      ]);

      const columns2 = ref([
        {
          prop: 'date',
          label: 'Date',
          fixed: true,
          width: 150
        },
        {
          prop: 'name',
          label: 'Name',
          align: 'center',
          background: '#fcd3d3',
          group: 'userName',
          children: [
            {
              prop: 'tag',
              label: 'Tag',
              align: 'center',
              background: '#ffd180',
              slotLabel: 'tagLabel',
              width: 220
            },
            {
              prop: 'zip',
              label: '\u7EE7\u627Fname\u7684\u989C\u8272',
              align: 'center',
              width: 320
            }
          ]
        },

        {
          prop: 'name',
          label: 'Name',
          align: 'center',
          background: '#e1f3d8',
          group: 'userName2',
          children: [
            {
              prop: 'tag2',
              label: 'Tag',
              width: 220,
              align: 'center'
            },
            {
              prop: 'zip2',
              label: 'Zip',
              width: 200,
              align: 'center'
            }
          ]
        },

        {
          prop: 'name',
          label: 'Name',
          align: 'center',
          background: '#fcd3d3',
          group: 'userName3',
          children: [
            {
              prop: 'tag3',
              label: 'Tag',
              align: 'center',
              background: '#ffd180',
              slotLabel: 'tagLabel',
              width: 220
            },
            {
              prop: 'zip3',
              label: '\u7EE7\u627Fname\u7684\u989C\u8272',
              align: 'center',
              width: 220
            }
          ]
        },

        {
          prop: 'address',
          label: 'Address',
          showOverflowTooltip: true
        }
      ]);

      return {
        data,
        columns,
        columns2,
        themeColor
      };
    }
  };
<\/script>
`},{highlight:E(()=>[hs]),default:E(()=>[m(x)]),_:1}),vs,_s,ws,ks,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data">
    <template #operations>
      <xs-button link type="danger" size="small">\u5220\u9664</xs-button>
    </template>
  </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          type: 'index',
          width: 60,
          label: '#'
        },
        {
          prop: 'date',
          label: 'Date'
        },
        {
          prop: 'name',
          label: 'Name'
        },

        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Ns]),default:E(()=>[m(f)]),_:1}),$s,m(n,{customClass:"undefined",sourceCode:`<template>
  <div style="margin-bottom:12px;">
    <xs-button type="warning" @click="sort = { prop: 'date', order: 'descending' }">\u6309Date\u964D\u5E8F</xs-button>
    <xs-button type="primary" @click="sort = { prop: 'age', order: 'ascending' }">\u6309Age\u5347\u5E8F</xs-button>
  </div>
  <xs-table :columns="columns" :data="data" :sort="sort"> </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          age: index + 1,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          type: 'index',
          width: 60,
          label: '#',
          align: 'center'
        },
        {
          prop: 'date',
          label: 'Date',
          sortable: true
        },
        {
          prop: 'age',
          label: 'Age',
          sortable: true
        },
        {
          prop: 'name',
          label: 'Name',
          render: ({ column, row, rows, columns, $index }) =>
            \`\${row.name}-\${rows.length}-\${columns.length}-\${column.prop}-\${$index}\`
        },

        {
          prop: 'address',
          showOverflowTooltip: true,
          label: 'Address'
        }
      ]);

      const sort = ref({});

      return {
        data,
        columns,
        sort
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Ls]),default:E(()=>[m(B)]),_:1}),Ss,m(n,{customClass:"undefined",sourceCode:`<template>
  <div style="margin-bottom:12px;">
    <xs-button type="warning" @click="addFilter('name', ['Jerry'])">\u7B5B\u9009name=Jerry\u7684\u6570\u636E</xs-button>
    <xs-button type="primary" @click="addFilter('date', ['2023-01-10', '2023-01-15'])"
      >\u5728Jerry\u57FA\u7840\u4E0A\u7B5B\u900901-10\u523001-15\u7684\u6570\u636E</xs-button
    >
    <xs-button type="danger" @click="clearFilter">\u6E05\u7A7A\u7B5B\u9009</xs-button>
  </div>
  <xs-table ref="tableRef" :filter="filters" :columns="columns" :data="data"> </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          age: index * 10 + 10,
          name: index % 2 === 0 ? 'Tom' : 'Jerry',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          type: 'index',
          width: 60,
          label: '#',
          align: 'center'
        },
        {
          prop: 'date',
          label: 'Date',
          sortable: true,
          filterable: true,
          filter: {
            type: 'time'
          }
        },
        {
          prop: 'name',
          label: 'Name',
          filterable: true,
          filter: {
            type: 'select',
            multiple: true
          },
          render: ({ column, row, rows, columns, $index }) =>
            \`\${row.name}-\${rows.length}-\${columns.length}-\${column.prop}-\${$index}\`
        },

        {
          prop: 'name',
          label: 'Name',
          filterable: true,
          filter: {
            type: 'select'
          },
          render: ({ row }) => row.name
        },
        {
          prop: 'age',
          label: 'Age',
          filterable: true,
          filter: {
            type: 'number',
            suffixLabel: '\u5C81'
          }
        },

        {
          prop: 'address',
          label: 'Address',
          filterable: true,
          showOverflowTooltip: true
        }
      ]);

      const filters = ref({});

      const addFilter = (prop, value) => {
        filters.value[prop] = value;
      };

      const tableRef = ref();

      const clearFilter = () => {
        filters.value = {};
        tableRef.value.clearFilter();
      };

      return {
        data,
        filters,
        addFilter,
        clearFilter,
        columns,
        tableRef
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Ts]),default:E(()=>[m(v)]),_:1}),Gs,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data">
    <template #ageLabel="{ column }">
      <xs-button type="primary" size="small">slotLabel\u6E32\u67D3{{ column.prop }}</xs-button>
    </template>

    <template #age="{ row }">
      <xs-button type="primary" size="small">slot: {{ row.age }}</xs-button>
    </template>
  </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          age: index + 1,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          type: 'index',
          width: 60,
          label: '#',
          align: 'center'
        },
        {
          prop: 'date',
          label: 'Date',
          renderLabel: column => {
            return 'renderLabel\u51FD\u6570\u6E32\u67D3' + column.prop;
          },
          render: ({ column, row }) => {
            return \`render: \${row[column.prop]}\`;
          },
          sortable: true
        },
        {
          prop: 'age',
          label: 'Age',
          slotLabel: 'ageLabel',
          slot: 'age',
          sortable: true
        },
        {
          prop: 'name',
          label: 'Name',
          render: ({ column, row, rows, columns, $index }) =>
            \`\${row.name}-\${rows.length}-\${columns.length}-\${column.prop}-\${$index}\`
        },

        {
          prop: 'address',
          showOverflowTooltip: true,
          label: 'Address'
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[zs]),default:E(()=>[m(w)]),_:1}),Vs,Os,Is,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data">
    <template #expand="{ row, column, rows, $index, columns }">
      row = {{ row }}
      <br />
      column = {{ column }}
      <br />
      rows[2] = {{ rows[2] }}
      <br />
      columns[2] = {{ columns[2] }}
      <br />
      $index = {{ $index }}
    </template>
  </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          age: index * 10 + 10,
          name: index % 2 === 0 ? 'Tom' : 'Jerry',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          type: 'expand',
          width: 60,
          label: '#',
          align: 'center',
          slot: 'expand'
        },
        {
          prop: 'date',
          label: 'Date',
          sortable: true,
          filterable: true,
          filter: {
            type: 'time'
          }
        },
        {
          prop: 'name',
          label: 'Name',
          filterable: true,
          render: ({ column, row, rows, columns, $index }) =>
            \`\${row.name}-\${rows.length}-\${columns.length}-\${column.prop}-\${$index}\`
        },
        {
          prop: 'age',
          label: 'Age',
          filterable: true,
          filter: {
            type: 'number',
            suffixLabel: '\u5C81'
          }
        },

        {
          prop: 'address',
          label: 'Address',
          showOverflowTooltip: true
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Rs]),default:E(()=>[m(k)]),_:1}),Js,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data" row-key="id" />

  <xs-table :columns="columns" :data="data2" row-key="id" lazy :load="load" />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref([
        {
          id: '1',
          date: '2016-05-02',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: '2',
          date: '2016-05-04',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: '3',
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
          children: [
            {
              id: '31',
              date: '2016-06-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              id: '32',
              date: '2016-05-02',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles'
            }
          ]
        },
        {
          id: '4',
          date: '2016-05-03',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]);

      const data2 = ref([
        {
          id: '1',
          date: '2016-05-02',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: '2',
          date: '2016-05-04',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          id: '3',
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
          hasChildren: true
        },
        {
          id: '4',
          date: '2016-05-03',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]);
      const columns = ref([
        {
          prop: 'date',
          label: 'Date'
        },
        {
          prop: 'name',
          label: 'Name'
        },
        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      const load = (row, treeNode, resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles'
            },
            {
              id: 32,
              date: '2016-05-01',
              name: 'wangxiaohu',
              address: 'No. 189, Grove St, Los Angeles'
            }
          ]);
        }, 1000);
      };

      return {
        data,
        load,
        data2,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Ps]),default:E(()=>[m(N)]),_:1}),Ms,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data" show-summary></xs-table>
  <xs-table
    :columns="columns"
    :data="data"
    show-summary
    :summary-method="getSummaries"
    summary-position="top"
  ></xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          age: index * 10 + 10,
          name: index % 2 === 0 ? 'Tom' : 'Jerry',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          sortable: true,
          filterable: true,
          filter: {
            type: 'time'
          }
        },
        {
          prop: 'name',
          label: 'Name',
          filterable: true,
          render: ({ column, row, rows, columns, $index }) =>
            \`\${row.name}-\${rows.length}-\${columns.length}-\${column.prop}-\${$index}\`
        },
        {
          prop: 'age',
          label: 'Age',
          filterable: true,
          filter: {
            type: 'number',
            suffixLabel: '\u5C81'
          }
        },

        {
          prop: 'address',
          label: 'Address',
          showOverflowTooltip: true
        }
      ]);

      const getSummaries = param => {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total Cost';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => Number.isNaN(value))) {
            sums[index] = \`$ \${values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!Number.isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0)}\`;
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      };

      return {
        data,
        getSummaries,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Zs]),default:E(()=>[m($)]),_:1}),js,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :span-method="arraySpanMethod" :data="data" border />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }))
      );
      const columns = ref([
        {
          prop: 'date',
          label: 'Date'
        },
        {
          prop: 'name',
          label: 'Name'
        },
        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      const arraySpanMethod = ({ row, column, rowIndex, columnIndex }) => {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      };

      return {
        data,
        columns,
        arraySpanMethod
      };
    }
  };
<\/script>
`},{highlight:E(()=>[qs]),default:E(()=>[m(L)]),_:1}),Us,Hs,Ks,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table :columns="columns" :data="data" />
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 5 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }))
      );
      const columns = ref([
        {
          type: 'index',
          index: idx => idx * 2
        },
        {
          prop: 'date',
          label: 'Date'
        },
        {
          prop: 'name',
          label: 'Name'
        },
        {
          prop: 'address',
          label: 'Address'
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Qs]),default:E(()=>[m(S)]),_:1}),Ws,Xs,m(n,{customClass:"undefined",sourceCode:`<template>
  <xs-table stickyable :columns="columns" :data="data" :offset="73">
    <template #operations>
      <xs-button link type="danger" size="small">\u5220\u9664</xs-button>
    </template>
  </xs-table>
</template>
<script>
  import { ref } from 'vue';
  export default {
    setup() {
      const data = ref(
        Array.from({ length: 10 }).map((_, index) => ({
          date: \`2023-01-1\${index}\`,
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }))
      );
      const columns = ref([
        {
          prop: 'date',
          label: 'Date',
          width: 100,
          fixed: true
        },
        {
          prop: 'name',
          label: 'Name',
          width: 200
        },
        {
          prop: 'state',
          label: 'State',
          width: 200
        },
        {
          prop: 'city',
          label: 'City',
          width: 200
        },
        {
          prop: 'address',
          label: 'Address',
          width: 600
        },
        {
          slot: 'operations',
          label: 'Operations',
          width: 120,
          fixed: 'right'
        }
      ]);

      return {
        data,
        columns
      };
    }
  };
<\/script>
`},{highlight:E(()=>[Ys]),default:E(()=>[m(T)]),_:1}),sl])}const al=G(I,[["render",ll]]);export{nl as __pageData,al as default};
