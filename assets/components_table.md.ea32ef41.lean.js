import{V as A,_ as z,c as G,a as E,w as m,e as w,b as s,d as l,r as x,o as V}from"./app.1fb82f31.js";const{defineComponent:O}=A,I=O({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,openBlock:y,createBlock:c}=A;function t(e,n){const r=u("xs-table");return y(),c(r,{columns:e.columns,data:e.data},null,8,["columns","data"])}const{ref:D}=A;return{render:t,...{setup(){const e=D(Array.from({length:10}).map((r,F)=>({date:`2023-01-1${F}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:e,columns:n}}}}}(),"render-demo-1":function(){const{toDisplayString:u,createTextVNode:y,resolveComponent:c,withCtx:t,createVNode:D,Fragment:b,openBlock:e,createElementBlock:n}=A;function r(d,o){const i=c("xs-button"),p=c("xs-table");return e(),n(b,null,[D(i,{type:"primary",onClick:o[0]||(o[0]=g=>d.loading=!d.loading)},{default:t(()=>[y(u(d.loading?"\u5173\u95ED":"\u6253\u5F00")+"\u52A0\u8F7D",1)]),_:1}),D(p,{columns:d.columns,data:d.data,loading:d.loading,"skeleton-rows":10},null,8,["columns","data","loading"])],64)}const{ref:F}=A;return{render:r,...{setup(){const d=F(Array.from({length:10}).map((p,g)=>({date:`2023-01-1${g}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),o=F(!0),i=F([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:d,columns:i,loading:o}}}}}(),"render-demo-2":function(){const{toDisplayString:u,createTextVNode:y,resolveComponent:c,withCtx:t,createVNode:D,openBlock:b,createBlock:e,createCommentVNode:n,createElementVNode:r,createSlots:F,Fragment:a,createElementBlock:d}=A,o={style:{"margin-bottom":"12px"}};function i(C,B){const f=c("xs-button"),h=c("xs-table");return b(),d(a,null,[r("div",o,[D(f,{type:"warning",onClick:B[0]||(B[0]=v=>C.pagination=!C.pagination)},{default:t(()=>[y(u(C.pagination?"\u5173\u95ED":"\u6253\u5F00")+"\u5206\u9875",1)]),_:1}),C.pagination?(b(),e(f,{key:0,type:"primary",onClick:C.setPage},{default:t(()=>[y("\u8C03\u6574\u9875\u957F\u548C\u9875\u957F\u9009\u9879")]),_:1},8,["onClick"])):n("",!0),C.pagination?(b(),e(f,{key:1,type:"danger",onClick:B[1]||(B[1]=v=>C.slotVisible=!C.slotVisible)},{default:t(()=>[y(u(C.slotVisible?"\u5173\u95ED":"\u663E\u793A")+" \u63D2\u69FD ",1)]),_:1})):n("",!0)]),D(h,{columns:C.columns,data:C.data,pagination:C.pagination,"reset-position-on-data-change":!1},F({_:2},[C.slotVisible?{name:"paginationLeft",fn:t(()=>[D(f,{type:"warning"},{default:t(()=>[y("\u5206\u9875\u5DE6\u4FA7slot")]),_:1})]),key:"0"}:void 0,C.slotVisible?{name:"paginationRight",fn:t(()=>[D(f,{type:"warning"},{default:t(()=>[y("\u5206\u9875\u53F3\u4FA7slot")]),_:1})]),key:"1"}:void 0]),1032,["columns","data","pagination"])],64)}const{ref:p}=A;return{render:i,...{setup(){const C=p(Array.from({length:10}).map((_,k)=>({date:`2023-01-1${k}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),B=p([{prop:"date",label:"Date",fixed:!0},{prop:"name",label:"Name"},{prop:"address",label:"Address",width:600}]),f=p(!0),h=()=>{typeof f.value=="object"?f.value=!0:f.value={layout:"sizes, prev, pager, next, total",position:"flex-start",pageSizes:[25,50,100],pageSize:50}},v=p(!1);return{data:C,columns:B,setPage:h,pagination:f,slotVisible:v}}}}}(),"render-demo-3":function(){const{toDisplayString:u,createTextVNode:y,resolveComponent:c,withCtx:t,createVNode:D,openBlock:b,createBlock:e,createCommentVNode:n,Fragment:r,createElementBlock:F}=A;function a(i,p){const g=c("xs-button"),C=c("xs-table");return b(),F(r,null,[D(g,{type:"primary",onClick:i.toggleStripe},{default:t(()=>[y(u(i.stripe?"\u5173\u95ED":"\u6253\u5F00")+"\u6591\u9A6C\u7EB9 ",1)]),_:1},8,["onClick"]),i.stripe?(b(),e(g,{key:0,type:"danger",onClick:i.changeIndex},{default:t(()=>[y(" \u5207\u6362\u6591\u9A6C\u7EB9\u7684\u8D77\u59CB\u5E8F\u53F7 ")]),_:1},8,["onClick"])):n("",!0),D(C,{columns:i.columns,data:i.data,stripe:i.stripe,"stripe-index":i.stripeIndex},null,8,["columns","data","stripe","stripe-index"])],64)}const{ref:d}=A;return{render:a,...{setup(){const i=d(Array.from({length:10}).map((h,v)=>({date:`2023-01-1${v}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),p=d(!0),g=d(0),C=()=>{p.value=!p.value},B=()=>{g.value?g.value=0:g.value=1},f=d([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:i,columns:f,toggleStripe:C,stripe:p,stripeIndex:g,changeIndex:B}}}}}(),"render-demo-4":function(){const{resolveComponent:u,openBlock:y,createBlock:c}=A;function t(e,n){const r=u("xs-table");return y(),c(r,{columns:e.columns,data:e.data,border:""},null,8,["columns","data"])}const{ref:D}=A;return{render:t,...{setup(){const e=D(Array.from({length:10}).map((r,F)=>({date:`2023-01-1${F}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:e,columns:n}}}}}(),"render-demo-5":function(){const{resolveComponent:u,openBlock:y,createBlock:c}=A;function t(e,n){const r=u("xs-table");return y(),c(r,{columns:e.columns,data:e.data,"row-class-name":e.tableRowClassName,abc:1},null,8,["columns","data","row-class-name"])}const{ref:D}=A;return{render:t,...{setup(){const e=D(Array.from({length:10}).map((F,a)=>({date:`2023-01-1${a}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=({row:F,rowIndex:a})=>a===0?"warning-row":a===3?"success-row":"",r=D([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:e,columns:r,tableRowClassName:n}}}}}(),"render-demo-6":function(){const{resolveComponent:u,openBlock:y,createBlock:c}=A;function t(e,n){const r=u("xs-table");return y(),c(r,{columns:e.columns,data:e.data,height:"250"},null,8,["columns","data"])}const{ref:D}=A;return{render:t,...{setup(){const e=D(Array.from({length:10}).map((r,F)=>({date:`2023-01-1${F}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{prop:"date",label:"Date",width:180},{prop:"name",label:"Name",width:180},{prop:"address",label:"Address"}]);return{data:e,columns:n}}}}}(),"render-demo-7":function(){const{createTextVNode:u,resolveComponent:y,withCtx:c,createVNode:t,openBlock:D,createBlock:b}=A;function e(F,a){const d=y("xs-button"),o=y("xs-table");return D(),b(o,{columns:F.columns,data:F.data},{operations:c(()=>[t(d,{link:"",type:"danger",size:"small"},{default:c(()=>[u("\u5220\u9664")]),_:1})]),_:1},8,["columns","data"])}const{ref:n}=A;return{render:e,...{setup(){const F=n(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),a=n([{prop:"date",label:"Date",width:100,fixed:!0},{prop:"name",label:"Name",width:200},{prop:"state",label:"State",width:200},{prop:"city",label:"City",width:200},{prop:"address",label:"Address",width:600},{slot:"operations",label:"Operations",width:120,fixed:"right"}]);return{data:F,columns:a}}}}}(),"render-demo-8":function(){const{createTextVNode:u,resolveComponent:y,withCtx:c,createVNode:t,Fragment:D,openBlock:b,createElementBlock:e}=A;function n(a,d){const o=y("xs-button"),i=y("xs-table");return b(),e(D,null,[t(i,{columns:a.columns,data:a.data,"max-height":"250"},{operations:c(({$index:p})=>[t(o,{type:"link",size:"small",onClick:g=>a.deleteRow(p)},{default:c(()=>[u("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1},8,["columns","data"]),t(o,{style:{width:"100%","margin-top":"12px"},onClick:a.addRow},{default:c(()=>[u("\u589E\u52A0\u4E00\u9879\u5230\u8868\u683C")]),_:1},8,["onClick"])],64)}const{ref:r}=A;return{render:n,...{setup(){const a=r(Array.from({length:2}).map((p,g)=>({date:`2023-01-1${g}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),d=p=>{a.value.splice(p,1)},o=()=>{a.value.length>=10||a.value.push({date:`2023-01-1${a.value.length}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036"})},i=r([{prop:"date",label:"Date",width:100,fixed:!0},{prop:"name",label:"Name",width:200},{prop:"state",label:"State",width:200},{prop:"city",label:"City",width:200},{prop:"address",label:"Address",width:600},{slot:"operations",label:"Operations",width:120,fixed:"right"}]);return{data:a,columns:i,deleteRow:d,addRow:o}}}}}(),"render-demo-9":function(){const{createTextVNode:u,resolveComponent:y,withCtx:c,createVNode:t,openBlock:D,createBlock:b}=A;function e(F,a){const d=y("xs-button"),o=y("xs-table");return D(),b(o,{columns:F.columns,data:F.data},{operations:c(()=>[t(d,{link:"",type:"danger",size:"small"},{default:c(()=>[u("\u5220\u9664")]),_:1})]),_:1},8,["columns","data"])}const{ref:n}=A;return{render:e,...{setup(){const F=n(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),a=n([{prop:"date",label:"Date",fixed:!0},{prop:"name",label:"Name",align:"center",children:[{prop:"tag",label:"Tag",align:"center"},{prop:"zip",label:"Zip",align:"center"}]},{prop:"address",label:"Address",showOverflowTooltip:!0}]);return{data:F,columns:a}}}}}(),"render-demo-10":function(){const{createTextVNode:u,resolveComponent:y,withCtx:c,createVNode:t,createElementVNode:D,Fragment:b,openBlock:e,createElementBlock:n}=A,r=D("br",null,null,-1),F=D("br",null,null,-1),a=D("br",null,null,-1);function d(p,g){const C=y("xs-button"),B=y("xs-table");return e(),n(b,null,[t(C,{type:"primary",onClick:g[0]||(g[0]=f=>p.themeColor="#e1f3d8")},{default:c(()=>[u("\u6253\u5F00\u4E3B\u9898\u8272")]),_:1}),t(C,{type:"danger",onClick:g[1]||(g[1]=f=>p.themeColor="")},{default:c(()=>[u("\u5173\u95ED\u4E3B\u9898\u8272")]),_:1}),r,F,t(B,{columns:p.columns,data:p.data,"theme-color":p.themeColor},null,8,["columns","data","theme-color"]),a,t(B,{columns:p.columns2,data:p.data,"theme-color":p.themeColor},{tagLabel:c(()=>[t(C,{type:"link"},{default:c(()=>[u("\u81EA\u5B9A\u4E49\u5934\u90E8")]),_:1})]),_:1},8,["columns","data","theme-color"])],64)}const{ref:o}=A;return{render:d,...{setup(){const p=o(Array.from({length:4}).map((f,h)=>({date:`2023-01-1${h}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:null,tag:null,zip2:"\u6211\u5728\u9F13\u697C",tag2:"\u6625\u5929\u82B1\u4F1A\u5F00",zip3:"--",tag3:"--"}))),g=o(""),C=o([{type:"index",index:f=>f*2,background:"#c5d3f4",label:"#",align:"center"},{prop:"date",label:"Date",background:"#e1f3d8"},{prop:"name",label:"Name",background:"#ffd180"},{prop:"address",label:"Address",background:"#d78e6a"}]),B=o([{prop:"date",label:"Date",fixed:!0,width:150},{prop:"name",label:"Name",align:"center",background:"#fcd3d3",group:"userName",children:[{prop:"tag",label:"Tag",align:"center",background:"#ffd180",slotLabel:"tagLabel",width:220},{prop:"zip",label:"\u7EE7\u627Fname\u7684\u989C\u8272",align:"center",width:320}]},{prop:"name",label:"Name",align:"center",background:"#e1f3d8",group:"userName2",children:[{prop:"tag2",label:"Tag",width:220,align:"center"},{prop:"zip2",label:"Zip",width:200,align:"center"}]},{prop:"name",label:"Name",align:"center",background:"#fcd3d3",group:"userName3",children:[{prop:"tag3",label:"Tag",align:"center",background:"#ffd180",slotLabel:"tagLabel",width:220},{prop:"zip3",label:"\u7EE7\u627Fname\u7684\u989C\u8272",align:"center",width:220}]},{prop:"address",label:"Address",showOverflowTooltip:!0}]);return{data:p,columns:C,columns2:B,themeColor:g}}}}}(),"render-demo-11":function(){const{createTextVNode:u,resolveComponent:y,withCtx:c,createVNode:t,openBlock:D,createBlock:b}=A;function e(F,a){const d=y("xs-button"),o=y("xs-table");return D(),b(o,{columns:F.columns,data:F.data},{operations:c(()=>[t(d,{link:"",type:"danger",size:"small"},{default:c(()=>[u("\u5220\u9664")]),_:1})]),_:1},8,["columns","data"])}const{ref:n}=A;return{render:e,...{setup(){const F=n(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),a=n([{type:"selection",width:60,align:"center"},{type:"index",width:60,label:"#"},{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"}]);return{data:F,columns:a}}}}}(),"render-demo-12":function(){const{createTextVNode:u,resolveComponent:y,withCtx:c,createVNode:t,createElementVNode:D,Fragment:b,openBlock:e,createElementBlock:n}=A,r={style:{"margin-bottom":"12px"}};function F(o,i){const p=y("xs-button"),g=y("xs-table");return e(),n(b,null,[D("div",r,[t(p,{type:"warning",onClick:i[0]||(i[0]=C=>o.sort={prop:"date",order:"descending"})},{default:c(()=>[u("\u6309Date\u964D\u5E8F")]),_:1}),t(p,{type:"primary",onClick:i[1]||(i[1]=C=>o.sort={prop:"age",order:"ascending"})},{default:c(()=>[u("\u6309Age\u5347\u5E8F")]),_:1})]),t(g,{columns:o.columns,data:o.data,sort:o.sort},null,8,["columns","data","sort"])],64)}const{ref:a}=A;return{render:F,...{setup(){const o=a(Array.from({length:10}).map((g,C)=>({date:`2023-01-1${C}`,age:C+1,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),i=a([{type:"index",width:60,label:"#",align:"center"},{prop:"date",label:"Date",sortable:!0},{prop:"age",label:"Age",sortable:!0},{prop:"name",label:"Name",render:({column:g,row:C,rows:B,columns:f,$index:h})=>`${C.name}-${B.length}-${f.length}-${g.prop}-${h}`},{prop:"address",showOverflowTooltip:!0,label:"Address"}]),p=a({});return{data:o,columns:i,sort:p}}}}}(),"render-demo-13":function(){const{createTextVNode:u,resolveComponent:y,withCtx:c,createVNode:t,createElementVNode:D,Fragment:b,openBlock:e,createElementBlock:n}=A,r={style:{"margin-bottom":"12px"}};function F(o,i){const p=y("xs-button"),g=y("xs-table");return e(),n(b,null,[D("div",r,[t(p,{type:"warning",onClick:i[0]||(i[0]=C=>o.addFilter("name",["Jerry"]))},{default:c(()=>[u("\u7B5B\u9009name=Jerry\u7684\u6570\u636E")]),_:1}),t(p,{type:"primary",onClick:i[1]||(i[1]=C=>o.addFilter("date",["2023-01-10","2023-01-15"]))},{default:c(()=>[u("\u5728Jerry\u57FA\u7840\u4E0A\u7B5B\u900901-10\u523001-15\u7684\u6570\u636E")]),_:1}),t(p,{type:"danger",onClick:o.clearFilter},{default:c(()=>[u("\u6E05\u7A7A\u7B5B\u9009")]),_:1},8,["onClick"])]),t(g,{ref:"tableRef",filter:o.filters,columns:o.columns,data:o.data},null,8,["filter","columns","data"])],64)}const{ref:a}=A;return{render:F,...{setup(){const o=a(Array.from({length:10}).map((f,h)=>({date:`2023-01-1${h}`,age:h*10+10,name:h%2===0?"Tom":"Jerry",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),i=a([{type:"index",width:60,label:"#",align:"center"},{prop:"date",label:"Date",sortable:!0,filterable:!0,filter:{type:"time"}},{prop:"name",label:"Name",filterable:!0,filter:{type:"select",multiple:!0},render:({column:f,row:h,rows:v,columns:_,$index:k})=>`${h.name}-${v.length}-${_.length}-${f.prop}-${k}`},{prop:"name",label:"Name",filterable:!0,filter:{type:"select"},render:({row:f})=>f.name},{prop:"age",label:"Age",filterable:!0,filter:{type:"number",suffixLabel:"\u5C81"}},{prop:"address",label:"Address",filterable:!0,showOverflowTooltip:!0}]),p=a({}),g=(f,h)=>{p.value[f]=h},C=a();return{data:o,filters:p,addFilter:g,clearFilter:()=>{p.value={},C.value.clearFilter()},columns:i,tableRef:C}}}}}(),"render-demo-14":function(){const{toDisplayString:u,createTextVNode:y,resolveComponent:c,withCtx:t,createVNode:D,openBlock:b,createBlock:e}=A;function n(a,d){const o=c("xs-button"),i=c("xs-table");return b(),e(i,{columns:a.columns,data:a.data},{ageLabel:t(({column:p})=>[D(o,{type:"primary",size:"small"},{default:t(()=>[y("slotLabel\u6E32\u67D3"+u(p.prop),1)]),_:2},1024)]),age:t(({row:p})=>[D(o,{type:"primary",size:"small"},{default:t(()=>[y("slot: "+u(p.age),1)]),_:2},1024)]),_:1},8,["columns","data"])}const{ref:r}=A;return{render:n,...{setup(){const a=r(Array.from({length:10}).map((o,i)=>({date:`2023-01-1${i}`,age:i+1,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),d=r([{type:"index",width:60,label:"#",align:"center"},{prop:"date",label:"Date",renderLabel:o=>"renderLabel\u51FD\u6570\u6E32\u67D3"+o.prop,render:({column:o,row:i})=>`render: ${i[o.prop]}`,sortable:!0},{prop:"age",label:"Age",slotLabel:"ageLabel",slot:"age",sortable:!0},{prop:"name",label:"Name",render:({column:o,row:i,rows:p,columns:g,$index:C})=>`${i.name}-${p.length}-${g.length}-${o.prop}-${C}`},{prop:"address",showOverflowTooltip:!0,label:"Address"}]);return{data:a,columns:d}}}}}(),"render-demo-15":function(){const{toDisplayString:u,createElementVNode:y,createTextVNode:c,resolveComponent:t,withCtx:D,openBlock:b,createBlock:e}=A,n=y("br",null,null,-1),r=y("br",null,null,-1),F=y("br",null,null,-1),a=y("br",null,null,-1);function d(p,g){const C=t("xs-table");return b(),e(C,{columns:p.columns,data:p.data},{expand:D(({row:B,column:f,rows:h,$index:v,columns:_})=>[c(" row = "+u(B)+" ",1),n,c(" column = "+u(f)+" ",1),r,c(" rows[2] = "+u(h[2])+" ",1),F,c(" columns[2] = "+u(_[2])+" ",1),a,c(" $index = "+u(v),1)]),_:1},8,["columns","data"])}const{ref:o}=A;return{render:d,...{setup(){const p=o(Array.from({length:10}).map((C,B)=>({date:`2023-01-1${B}`,age:B*10+10,name:B%2===0?"Tom":"Jerry",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),g=o([{type:"expand",width:60,label:"#",align:"center",slot:"expand"},{prop:"date",label:"Date",sortable:!0,filterable:!0,filter:{type:"time"}},{prop:"name",label:"Name",filterable:!0,render:({column:C,row:B,rows:f,columns:h,$index:v})=>`${B.name}-${f.length}-${h.length}-${C.prop}-${v}`},{prop:"age",label:"Age",filterable:!0,filter:{type:"number",suffixLabel:"\u5C81"}},{prop:"address",label:"Address",showOverflowTooltip:!0}]);return{data:p,columns:g}}}}}(),"render-demo-16":function(){const{resolveComponent:u,createVNode:y,Fragment:c,openBlock:t,createElementBlock:D}=A;function b(r,F){const a=u("xs-table");return t(),D(c,null,[y(a,{columns:r.columns,data:r.data,"row-key":"id"},null,8,["columns","data"]),y(a,{columns:r.columns,data:r.data2,"row-key":"id",lazy:"",load:r.load},null,8,["columns","data","load"])],64)}const{ref:e}=A;return{render:b,...{setup(){const r=e([{id:"1",date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"2",date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"3",date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",children:[{id:"31",date:"2016-06-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"32",date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]},{id:"4",date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]),F=e([{id:"1",date:"2016-05-02",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"2",date:"2016-05-04",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:"3",date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles",hasChildren:!0},{id:"4",date:"2016-05-03",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}]),a=e([{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"}]);return{data:r,load:(o,i,p)=>{setTimeout(()=>{p([{id:31,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"},{id:32,date:"2016-05-01",name:"wangxiaohu",address:"No. 189, Grove St, Los Angeles"}])},1e3)},data2:F,columns:a}}}}}(),"render-demo-17":function(){const{resolveComponent:u,createVNode:y,Fragment:c,openBlock:t,createElementBlock:D}=A;function b(r,F){const a=u("xs-table");return t(),D(c,null,[y(a,{columns:r.columns,data:r.data,"show-summary":""},null,8,["columns","data"]),y(a,{columns:r.columns,data:r.data,"show-summary":"","summary-method":r.getSummaries,"summary-position":"top"},null,8,["columns","data","summary-method"])],64)}const{ref:e}=A;return{render:b,...{setup(){const r=e(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,age:o*10+10,name:o%2===0?"Tom":"Jerry",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),F=e([{prop:"date",label:"Date",sortable:!0,filterable:!0,filter:{type:"time"}},{prop:"name",label:"Name",filterable:!0,render:({column:d,row:o,rows:i,columns:p,$index:g})=>`${o.name}-${i.length}-${p.length}-${d.prop}-${g}`},{prop:"age",label:"Age",filterable:!0,filter:{type:"number",suffixLabel:"\u5C81"}},{prop:"address",label:"Address",showOverflowTooltip:!0}]);return{data:r,getSummaries:d=>{const{columns:o,data:i}=d,p=[];return o.forEach((g,C)=>{if(C===0){p[C]="Total Cost";return}const B=i.map(f=>Number(f[g.property]));B.every(f=>Number.isNaN(f))?p[C]="N/A":p[C]=`$ ${B.reduce((f,h)=>{const v=Number(h);return Number.isNaN(v)?f:f+h},0)}`}),p},columns:F}}}}}(),"render-demo-18":function(){const{resolveComponent:u,openBlock:y,createBlock:c}=A;function t(e,n){const r=u("xs-table");return y(),c(r,{columns:e.columns,"span-method":e.arraySpanMethod,data:e.data,border:""},null,8,["columns","span-method","data"])}const{ref:D}=A;return{render:t,...{setup(){const e=D(Array.from({length:10}).map((F,a)=>({date:`2023-01-1${a}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"}]);return{data:e,columns:n,arraySpanMethod:({row:F,column:a,rowIndex:d,columnIndex:o})=>{if(d%2===0){if(o===0)return[1,2];if(o===1)return[0,0]}}}}}}}(),"render-demo-19":function(){const{resolveComponent:u,openBlock:y,createBlock:c}=A;function t(e,n){const r=u("xs-table");return y(),c(r,{columns:e.columns,data:e.data},null,8,["columns","data"])}const{ref:D}=A;return{render:t,...{setup(){const e=D(Array.from({length:5}).map((r,F)=>({date:`2023-01-1${F}`,name:"Tom",address:"No. 189, Grove St, Los Angeles"}))),n=D([{type:"index",index:r=>r*2},{prop:"date",label:"Date"},{prop:"name",label:"Name"},{prop:"address",label:"Address"}]);return{data:e,columns:n}}}}}(),"render-demo-20":function(){const{createTextVNode:u,resolveComponent:y,withCtx:c,createVNode:t,openBlock:D,createBlock:b}=A;function e(F,a){const d=y("xs-button"),o=y("xs-table");return D(),b(o,{stickyable:"",columns:F.columns,data:F.data,offset:73},{operations:c(()=>[t(d,{link:"",type:"danger",size:"small"},{default:c(()=>[u("\u5220\u9664")]),_:1})]),_:1},8,["columns","data"])}const{ref:n}=A;return{render:e,...{setup(){const F=n(Array.from({length:10}).map((d,o)=>({date:`2023-01-1${o}`,name:"Tom",state:"California",city:"Los Angeles",address:"No. 189, Grove St, Los Angeles",zip:"CA 90036",tag:"Office"}))),a=n([{prop:"date",label:"Date",width:100,fixed:!0},{prop:"name",label:"Name",width:200},{prop:"state",label:"State",width:200},{prop:"city",label:"City",width:200},{prop:"address",label:"Address",width:600},{slot:"operations",label:"Operations",width:120,fixed:"right"}]);return{data:F,columns:a}}}}}()}}),nl=JSON.parse('{"title":"Table \u8868\u683C","description":"","frontmatter":{},"headers":[],"relativePath":"components/table.md","lastUpdated":1675763823000}');const R=w('<h1 id="table-\u8868\u683C" tabindex="-1">Table \u8868\u683C</h1><p>\u7528\u4E8E\u5C55\u793A\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C \u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\u3002\u57FA\u4E8E <code>el-table</code> \u5C01\u88C5\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u65B0\u7279\u6027</p><ol class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u4F7F\u7528 JSON \u914D\u7F6E\u8868\u683C;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u652F\u6301\u5217\u7684 slot;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5217\u652F\u6301\u81EA\u5B9A\u4E49 render \u51FD\u6570\uFF0C\u652F\u6301\u6E32\u67D3 jsx \u7247\u6BB5;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u652F\u6301\u81EA\u5B9A\u4E49\u8868\u5934\u7684 slot,</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5217\u5934\u652F\u6301\u81EA\u5B9A\u4E49\u7684 renderLabel \u51FD\u6570\uFF0C\u4E5F\u652F\u6301\u6E32\u67D3 jsx \u7247\u6BB5\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u8868\u683C\u5438\u9876\uFF0C\u652F\u6301\u914D\u7F6E\u5438\u9876\u7684\u504F\u79FB\u91CF\uFF0C\u540C\u65F6\u6A2A\u5411\u6EDA\u52A8\u6761\u5438\u5E95\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u6591\u9A6C\u7EB9\u652F\u6301\u8D77\u59CB\u884C\u53F7\u914D\u7F6E\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u9AA8\u67B6\u5C4F\u52A0\u8F7D, \u652F\u6301\u914D\u7F6E\u9AA8\u67B6\u5C4F\u884C\u6570\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u81EA\u5E26\u5206\u9875\uFF0C\u652F\u6301\u5173\u95ED\u548C\u8C03\u6574\u5206\u9875\u5E03\u5C40\u548C\u53C2\u6570;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5168\u91CF\u6570\u636E\u6392\u5E8F\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5168\u91CF\u6570\u636E\u7B5B\u9009\uFF0C\u652F\u6301\u6570\u636E\u8303\u56F4\uFF0C\u6587\u672C\u8F93\u5165\uFF0C\u65F6\u95F4\u9009\u62E9\uFF0C\u4E0B\u62C9\u591A\u9009\u7684\u7B5B\u9009\u6A21\u5F0F;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u652F\u6301\u8868\u683C\u5916\u90E8\u63A7\u5236\u8868\u683C\u7684\u6392\u5E8F\u548C\u7B5B\u9009;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u8868\u5934\u989C\u8272\u4E3B\u9898\u8272\u914D\u7F6E\u548C\u81EA\u5B9A\u4E49\u989C\u8272\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u652F\u6301\u5206\u7EC4\u548C\u5206\u7EC4\u7684 EmptySlot \u81EA\u5B9A\u4E49;</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u5408\u8BA1\u884C\u652F\u6301\u4F4D\u7F6E\u8C03\u6574\uFF1B</li><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> \u6570\u5B57\u683C\u5F0F\u5316,\u652F\u6301\u683C\u5F0F\u4E0E\u5C0F\u6570\u4F4D\u6570\u7684\u81EA\u5B9A\u4E49;</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> <s>\u5355\u9009\u652F\u6301</s></li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> <s>\u8DE8\u9875\u591A\u9009\u652F\u6301</s></li></ol></div><h2 id="\u57FA\u7840\u8868\u683C" tabindex="-1">\u57FA\u7840\u8868\u683C</h2><p>\u57FA\u7840\u7684\u8868\u683C\u5C55\u793A\u7528\u6CD5\u3002</p><p>\u5F53 <code>xs-table</code> \u5143\u7D20\u4E2D\u6CE8\u5165 <code>data</code> \u548C <code>columns</code> \u5BF9\u8C61\u6570\u7EC4\u540E\uFF0C\u5728 <code>column</code> \u4E2D\u7528 <code>prop</code> \u5C5E\u6027\u6765\u5BF9\u5E94\u5BF9\u8C61\u4E2D\u7684\u952E\u540D\u5373\u53EF\u586B\u5165\u6570\u636E\uFF0C\u7528 <code>label</code> \u5C5E\u6027\u6765\u5B9A\u4E49\u8868\u683C\u7684\u5217\u540D\u3002 \u53EF\u4EE5\u4F7F\u7528 <code>width</code> \u5C5E\u6027\u6765\u5B9A\u4E49\u5217\u5BBD\u3002\u524D\u7AEF\u5206\u9875\u9ED8\u8BA4\u5F00\u542F\u3002</p>',6),J=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),P=s("h2",{id:"loading-\u52A0\u8F7D",tabindex:"-1"},"Loading \u52A0\u8F7D",-1),j=s("p",null,[l("\u4F20\u5165 "),s("code",null,"loading"),l(" \u5C5E\u6027\u5373\u53EF\u63A7\u5236\u8868\u683C\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001\u3002\u8FD8\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E "),s("code",null,"skeleton-rows"),l(" \u914D\u7F6E\u9AA8\u67B6\u5C4F\u884C\u6570\uFF0C \u9ED8\u8BA4\u4E3A 20 \u884C\u3002")],-1),M=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),q=s("h2",{id:"\u5206\u9875",tabindex:"-1"},"\u5206\u9875",-1),Z=s("p",null,"\u5982\u679C\u4F60\u9700\u8981\u540E\u7AEF\u5206\u9875\u65F6\uFF0C\u4F60\u53EF\u4EE5\u5173\u95ED\u7EC4\u4EF6\u5185\u7684\u5206\u9875\u3002",-1),Y=s("p",null,"\u6216\u8005\u8C03\u6574\u4E00\u4E0B\u5206\u9875\u7684\u53C2\u6570\u4E5F\u662F\u53EF\u4EE5\u7684\u3002",-1),H=s("p",null,"\u5206\u9875\u5185\u6709 2 \u4E2A\u63D2\u69FD\u63D0\u4F9B\u3002",-1),X=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),U=s("h2",{id:"\u6591\u9A6C\u7EB9\u8868\u683C",tabindex:"-1"},"\u6591\u9A6C\u7EB9\u8868\u683C",-1),K=s("p",null,[s("code",null,"stripe"),l(" \u53EF\u4EE5\u521B\u5EFA\u5E26\u6591\u9A6C\u7EB9\u7684\u8868\u683C\u3002 \u5982\u679C "),s("code",null,"true"),l(", \u8868\u683C\u5C06\u4F1A\u5E26\u6709\u6591\u9A6C\u7EB9\u3002")],-1),Q=s("p",null,"\u6591\u9A6C\u7EB9\u9ED8\u8BA4\u5F00\u542F\u3002\u5982\u679C\u4E0D\u9700\u8981\uFF0C\u53EF\u4EE5\u624B\u52A8\u5173\u95ED\u3002",-1),W=s("p",null,"\u5728\u8BBE\u8BA1\u56FE\u4E2D\uFF0C\u5982\u679C\u8868\u5934\u5E26\u6709\u80CC\u666F\u8272\uFF0C\u5219\u6591\u9A6C\u7EB9\u662F\u4ECE\u7B2C\u4E8C\u884C\u5F00\u59CB\u7684\u3002",-1),ss=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),es=s("h2",{id:"\u5E26\u72B6\u6001\u8868\u683C",tabindex:"-1"},"\u5E26\u72B6\u6001\u8868\u683C",-1),as=s("p",null,"\u53EF\u5C06\u8868\u683C\u5185\u5BB9 highlight \u663E\u793A\uFF0C\u65B9\u4FBF\u533A\u5206\u300C\u6210\u529F\u3001\u4FE1\u606F\u3001\u8B66\u544A\u3001\u5371\u9669\u300D\u7B49\u5185\u5BB9\u3002",-1),ts=s("p",null,[l("\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A Table \u7EC4\u4EF6\u7684 "),s("code",null,"row-class-name"),l(" \u5C5E\u6027\u6765\u4E3A Table \u4E2D\u7684\u67D0\u4E00\u884C\u6DFB\u52A0 class\uFF0C \u8FD9\u6837\u5C31\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u6837\u5F0F\u4E86\u3002")],-1),ps=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),Ds=w('<h2 id="\u56FA\u5B9A\u5217" tabindex="-1">\u56FA\u5B9A\u5217</h2><p>\u6A2A\u5411\u5185\u5BB9\u8FC7\u591A\u65F6\uFF0C\u53EF\u9009\u62E9\u56FA\u5B9A\u5217\u3002</p><p>\u56FA\u5B9A\u5217\u9700\u8981\u4F7F\u7528 <code>fixed</code> \u5C5E\u6027\uFF0C\u5B83\u63A5\u53D7 <code>Boolean</code> \u503C\u3002 \u5982\u679C\u4E3A <code>true</code>, \u5217\u5C06\u88AB\u5DE6\u4FA7\u56FA\u5B9A. \u5B83\u8FD8\u63A5\u53D7\u4F20\u5165\u5B57\u7B26\u4E32\uFF0C<code>left</code> \u6216 <code>right</code>\uFF0C\u8868\u793A\u5DE6\u8FB9\u56FA\u5B9A\u8FD8\u662F\u53F3\u8FB9\u56FA\u5B9A\u3002</p>',3),us=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),is=s("h2",{id:"\u56FA\u5B9A\u5217\u548C\u8868\u5934",tabindex:"-1"},"\u56FA\u5B9A\u5217\u548C\u8868\u5934",-1),Cs=s("p",null,[l("\u56FA\u5B9A\u5217\u548C\u8868\u5934\u53EF\u4EE5\u540C\u65F6\u4F7F\u7528\uFF0C\u53EA\u9700\u8981\u5C06\u4E0A\u8FF0\u4E24\u4E2A\u5C5E\u6027("),s("code",null,"fixed"),l(", "),s("code",null,"height"),l(")\u5206\u522B\u8BBE\u7F6E\u597D\u5373\u53EF\u3002\u672C\u7AE0\u8282\u65E0 demo;")],-1),ds=s("h2",{id:"\u6D41\u4F53\u9AD8\u5EA6",tabindex:"-1"},"\u6D41\u4F53\u9AD8\u5EA6",-1),As=s("p",null,"\u5F53\u6570\u636E\u91CF\u52A8\u6001\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u4E3A Table \u8BBE\u7F6E\u4E00\u4E2A\u6700\u5927\u9AD8\u5EA6\u3002",-1),Es=s("p",null,[l("\u901A\u8FC7\u8BBE\u7F6E "),s("code",null,"max-height"),l(" \u5C5E\u6027\u6307\u5B9A\u6700\u5927\u9AD8\u5EA6\u3002 \u6B64\u65F6\u82E5\u8868\u683C\u6240\u9700\u7684\u9AD8\u5EA6\u5927\u4E8E\u6700\u5927\u9AD8\u5EA6\uFF0C\u5219\u4F1A\u663E\u793A\u4E00\u4E2A\u6EDA\u52A8\u6761")],-1),ms=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),gs=w('<h2 id="\u591A\u7EA7\u8868\u5934" tabindex="-1">\u591A\u7EA7\u8868\u5934</h2><p>\u6570\u636E\u7ED3\u6784\u6BD4\u8F83\u590D\u6742\u7684\u65F6\u5019\uFF0C\u53EF\u4F7F\u7528\u591A\u7EA7\u8868\u5934\u6765\u5C55\u73B0\u6570\u636E\u7684\u5C42\u6B21\u5173\u7CFB\u3002</p><p>\u53EA\u9700\u8981\u5C06 <code>columnItem</code> \u6DFB\u52A0\u4E00\u4E2A <code>children</code> \u5B57\u6BB5\uFF0C\u5E76\u653E\u5165\u5B50\u96C6 <code>columnItem</code> \u4F60\u53EF\u4EE5\u5B9E\u73B0\u7EC4\u5934\u3002</p><p>\u8FD9\u91CC\u8FD8\u4F7F\u7528\u4E86 <code>align</code> \u548C <code>showOverflowTooltip</code> \u5C5E\u6027\u3002</p>',4),bs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),fs=s("h2",{id:"\u8868\u5934\u989C\u8272\u81EA\u5B9A\u4E49",tabindex:"-1"},"\u8868\u5934\u989C\u8272\u81EA\u5B9A\u4E49",-1),Bs=s("p",null,[l("\u5728 "),s("code",null,"column"),l(" \u8BBE\u7F6E "),s("code",null,"background"),l(" \u5373\u53EF, \u591A\u7EA7\u8868\u5934\u7684\u5B50\u96C6\u5982\u679C\u6CA1\u6709\u5B9A\u4E49\u80CC\u666F\u8272\u5219\u7EE7\u627F\u4E0A\u7EA7\u3002")],-1),hs=s("p",null,[l("\u5982\u679C Table \u4F20\u5165\u4E86 "),s("code",null,"theme-color"),l(", \u4F18\u5148\u663E\u793A\u3002")],-1),xs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),vs=s("h2",{id:"\u591A\u9009",tabindex:"-1"},"\u591A\u9009",-1),ws=s("p",null,"\u4F60\u53EF\u4EE5\u9009\u62E9\u591A\u884C\u3002",-1),_s=s("p",null,"\u5B9E\u73B0\u591A\u9009\u975E\u5E38\u7B80\u5355: \u624B\u52A8\u6DFB\u52A0\u4E00\u4E2A column\uFF0C\u8BBE type \u5C5E\u6027\u4E3A selection \u5373\u53EF\uFF1B",-1),ks=s("p",null,[l("\u6B64\u5916, \u8FD8\u5F00\u542F\u4E86 "),s("code",null,"type = index"),l(" \u7684\u5E8F\u53F7\u5217\u3002")],-1),Ns=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),$s=w('<h2 id="\u5355\u9009" tabindex="-1">\u5355\u9009</h2><p>\u4E0D\u652F\u6301\u3002</p><h2 id="\u6392\u5E8F" tabindex="-1">\u6392\u5E8F</h2><p>\u5BF9\u8868\u683C\u8FDB\u884C\u6392\u5E8F\uFF0C\u53EF\u5FEB\u901F\u67E5\u627E\u6216\u5BF9\u6BD4\u6570\u636E\u3002</p><p>\u90E8\u5206\u5B57\u6BB5\u662F\u65F6\u95F4\u683C\u5F0F\u7684\uFF0C\u6392\u5E8F\u9700\u8981\u6309\u7167\u65F6\u95F4\u53BB\u6392\uFF0C\u7EC4\u4EF6\u5185\u7F6E\u4E86\u65F6\u95F4\u7C7B\u578B\u7684\u5B57\u6BB5\uFF1A <code>[&#39;date&#39;]</code>, \u5F53\u4F60\u9700\u8981\u5176\u4ED6\u7684\u5B57\u6BB5\u4E5F\u8981\u6309\u7167\u65F6\u95F4\u6392\u5E8F\u65F6\uFF0C\u9700\u8981\u4F20\u5165 <code>timeProps</code>\u3002</p><p>\u5728\u5217\u4E2D\u8BBE\u7F6E <code>sortable</code> \u5C5E\u6027\u5373\u53EF\u5B9E\u73B0\u4EE5\u8BE5\u5217\u4E3A\u57FA\u51C6\u7684\u6392\u5E8F\uFF0C \u63A5\u53D7\u4E00\u4E2A Boolean\uFF0C\u9ED8\u8BA4\u4E3A false\u3002 \u53EF\u4EE5\u901A\u8FC7 Table \u7684 <code>sort</code> \u5C5E\u6027\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u6392\u5E8F\u5217\u548C\u6392\u5E8F\u987A\u5E8F\u3002</p><p>\u5982\u679C\u9700\u8981\u540E\u7AEF\u6392\u5E8F, \u9700\u8981\u5728 \u7EC4\u4EF6\u5C5E\u6027 <code>useInnerSort</code> \u7F6E\u4E3A <code>false</code>, \u540C\u65F6\u76D1\u542C <code>sort-change</code> \u4E8B\u4EF6\uFF0C\u5728\u4E8B\u4EF6\u56DE\u8C03\u4E2D\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u6392\u5E8F\u7684\u5B57\u6BB5\u540D\u548C\u6392\u5E8F\u987A\u5E8F\uFF0C\u4ECE\u800C\u5411\u63A5\u53E3\u8BF7\u6C42\u6392\u5E8F\u540E\u7684\u8868\u683C\u6570\u636E\u3002</p><p>\u5728\u672C\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u4F7F\u7528\u4E86 <code>render</code> \u5C5E\u6027\uFF0C\u5B83\u7528\u4E8E\u683C\u5F0F\u5316\u6307\u5B9A\u5217\u7684\u503C\uFF0C \u63A5\u53D7\u4E00\u4E2A Function\uFF0C\u4F20\u5165\u53C2\u6570\uFF1A<code>{ column, row, rows, columns, $index }</code>\uFF0C \u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u9700\u6C42\u8FDB\u884C\u5904\u7406\u3002</p><p>\u4E0D\u652F\u6301 <code>default-sort</code> \u5C5E\u6027\uFF0C\u652F\u6301 <code>sort</code> \u5C5E\u6027\u52A8\u6001\u63A7\u5236\u8868\u683C\u7684\u6392\u5E8F\u3002</p>',9),Ls=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),Ss=w('<h2 id="\u7B5B\u9009" tabindex="-1">\u7B5B\u9009</h2><p>\u5BF9\u539F\u6709\u8868\u683C\u7684\u7B5B\u9009\u91CD\u5199\uFF0C\u7B5B\u9009\uFF0C\u53EF\u5FEB\u901F\u67E5\u627E\u5230\u81EA\u5DF1\u60F3\u770B\u7684\u6570\u636E\u3002</p><p>\u5728\u5217\u4E2D\u8BBE\u7F6E filterable \u5C5E\u6027\u5373\u53EF\u5F00\u542F\u8BE5\u5217\u7684\u7B5B\u9009\uFF0C\u9ED8\u8BA4\u662F\u8F93\u5165\u7C7B\u578B\u7684\u7B5B\u9009\u6A21\u5F0F\u3002 filterable \u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u5B83\u7528\u4E8E\u51B3\u5B9A\u67D0\u4E9B\u6570\u636E\u662F\u5426\u663E\u793A\u3002</p><p>\u7EC4\u4EF6\u5185\u7F6E\u4E86\u51E0\u79CD\u7B5B\u9009\u65B9\u6CD5,\u5206\u522B\u662F\u8F93\u5165\u7C7B\u578B\u7B5B\u9009(<code>input</code>)\u3001\u4E0B\u62C9\u9009\u62E9\u7C7B\u578B\u7B5B\u9009(<code>select</code>)\u3001\u6570\u5B57\u8303\u56F4\u7B5B\u9009(<code>number</code>)\u3001\u65F6\u95F4\u8303\u56F4\u7B5B\u9009(<code>time</code>), \u6307\u5B9A\u7B5B\u9009\u7684 <code>type</code> \u5373\u53EF\u5F00\u542F\u6307\u5B9A\u7C7B\u578B\u7684\u7B5B\u9009\u6A21\u5F0F\u3002</p><p>\u4E0B\u62C9\u9009\u62E9\u7C7B\u578B\u7B5B\u9009\u652F\u6301\u591A\u9009\uFF0C\u9700\u8981\u6307\u5B9A <code>filter.multiple</code> \u4E3A <code>true</code> \u3002</p><p>\u5176\u4E2D\u6570\u5B57\u8303\u56F4\u7684\u7B5B\u9009\u53EF\u4EE5\u6839\u636E <code>column.filter.suffixLabel</code> \u51B3\u5B9A\u7B5B\u9009\u57FA\u6570\u3002<code>{ &#39;%&#39;: 0.01, \u4E07: 10000, \u4EBF: 100000000 }</code>\u3002\u5F53 <code>suffixLabel</code> \u4E3A\u5BF9\u5E94 key \u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u5C06\u4F1A\u4E58\u4EE5\u8FD9\u4E2A\u57FA\u6570\u540E\u518D\u548C\u5355\u5143\u683C\u7684\u503C\u505A\u6BD4\u8F83\u3002\u5339\u914D\u4E0D\u5230\u4EE5\u4E0A\u4E09\u4E2A key \u65F6\uFF0C\u57FA\u6570\u4E3A 1\u3002</p><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>Table</code> \u7684 <code>filter</code> \u5C5E\u6027\u52A8\u6001\u63A7\u5236\u8868\u683C\u7684\u7B5B\u9009\u3002</p>',7),Ts=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),zs=w('<h2 id="\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\u548C\u81EA\u5B9A\u4E49\u8868\u5934" tabindex="-1">\u81EA\u5B9A\u4E49\u5217\u6A21\u677F\u548C\u81EA\u5B9A\u4E49\u8868\u5934</h2><p>\u81EA\u5B9A\u4E49\u5217\u7684\u663E\u793A\u5185\u5BB9\uFF0C\u53EF\u7EC4\u5408\u5176\u4ED6\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u9700\u8981\u5728 <code>column</code> \u5185\u90E8\u6307\u5B9A <code>slot</code> \u5B57\u6BB5 \u6216 <code>render</code> \u51FD\u6570, \u63A5\u53D7 <code>{ row, rows, column, columns, $index }</code> \u4E3A\u53C2\u6570\u3002</p><p>\u81EA\u5B9A\u4E49\u8868\u5934\u7684\u663E\u793A\u5185\u5BB9\uFF0C\u9700\u8981\u5728 <code>column</code> \u5185\u6307\u5B9A <code>slotLabel</code> \u5B57\u6BB5\u6216 <code>renderLabel</code> \u51FD\u6570\uFF0C \u63A5\u6536 <code>column</code> \u4F5C\u4E3A\u53C2\u6570\u3002</p>',3),Gs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),Js=w('<h2 id="\u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D" tabindex="-1">\u6811\u5F62\u6570\u636E\u4E0E\u61D2\u52A0\u8F7D</h2><p>\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u7684\u663E\u793A\u3002 \u5F53 row \u4E2D\u5305\u542B <code>children</code> \u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002 \u6E32\u67D3\u5D4C\u5957\u6570\u636E\u9700\u8981 prop \u7684 <code>row-key</code>\u3002 \u6B64\u5916\uFF0C\u5B50\u884C\u6570\u636E\u53EF\u4EE5\u5F02\u6B65\u52A0\u8F7D\u3002 \u8BBE\u7F6E Table \u7684 <code>lazy</code> \u5C5E\u6027\u4E3A <code>true</code> \u4E0E\u52A0\u8F7D\u51FD\u6570 <code>load</code> \u3002 \u901A\u8FC7\u6307\u5B9A row \u4E2D\u7684 <code>hasChildren</code> \u5B57\u6BB5\u6765\u6307\u5B9A\u54EA\u4E9B\u884C\u662F\u5305\u542B\u5B50\u8282\u70B9\u3002 <code>children</code> \u4E0E <code>hasChildren</code> \u90FD\u53EF\u4EE5\u901A\u8FC7 <code>tree-props</code> \u914D\u7F6E\u3002</p>',2),Ps=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),js=w('<h2 id="\u5408\u8BA1\u884C" tabindex="-1">\u5408\u8BA1\u884C</h2><p>\u901A\u8FC7 <code>show-summary</code> \u6253\u5F00\u8868\u683C\u5408\u8BA1, <code>sum-text</code> \u9ED8\u8BA4\u4E3A <code>&quot;\u5408\u8BA1&quot;</code>\u3002</p><p>\u82E5\u8868\u683C\u5C55\u793A\u7684\u662F\u5404\u7C7B\u6570\u5B57\uFF0C\u53EF\u4EE5\u5728\u663E\u793A\u5404\u5217\u7684\u5408\u8BA1\u3002\u53EF\u4EE5\u901A\u8FC7 <code>summary-position</code> \u914D\u7F6E \u5408\u8BA1\u884C\u7684\u4F4D\u7F6E\uFF0C \u9ED8\u8BA4\u4E3A <code>bottom</code>\u3002</p><p>\u5982\u679C\u9700\u8981\u81EA\u5B9A\u4E49\u6C47\u603B\u6570\u636E\uFF0C\u8BF7\u4F20\u5165\u4E00\u4E2A <code>summary-method</code>, \u53C2\u6570\u4E3A <code>{ columns, data }</code>\u3002</p>',4),Ms=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),qs=w('<h2 id="\u5408\u5E76\u884C\u6216\u5217" tabindex="-1">\u5408\u5E76\u884C\u6216\u5217</h2><p>\u591A\u884C\u6216\u591A\u5217\u5171\u7528\u4E00\u4E2A\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u5408\u5E76\u884C\u6216\u5217\u3002</p><p>\u901A\u8FC7\u7ED9 table \u4F20\u5165<code>span-method</code>\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5408\u5E76\u884C\u6216\u5217\uFF0C \u65B9\u6CD5\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u5F53\u524D\u884C <code>row</code>\u3001\u5F53\u524D\u5217 <code>column</code>\u3001\u5F53\u524D\u884C\u53F7 <code>rowIndex</code>\u3001\u5F53\u524D\u5217\u53F7 <code>columnIndex</code> \u56DB\u4E2A\u5C5E\u6027\u3002 \u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u4EE3\u8868 <code>rowspan</code>\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u4EE3\u8868 <code>colspan</code>\u3002 \u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u952E\u540D\u4E3A <code>rowspan</code> \u548C <code>colspan</code> \u7684\u5BF9\u8C61\u3002</p>',3),Zs=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),Ys=s("h2",{id:"\u81EA\u5B9A\u4E49\u7D22\u5F15",tabindex:"-1"},"\u81EA\u5B9A\u4E49\u7D22\u5F15",-1),Hs=s("p",null,"\u81EA\u5B9A\u4E49 type=index \u5217\u7684\u884C\u53F7\u3002",-1),Xs=s("p",null,[l("\u901A\u8FC7\u7ED9 type=index \u7684\u5217\u4F20\u5165 "),s("code",null,"index"),l(" \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u7D22\u5F15\u3002 \u8BE5\u5C5E\u6027\u4F20\u5165\u6570\u5B57\u65F6\uFF0C\u5C06\u4F5C\u4E3A\u7D22\u5F15\u7684\u8D77\u59CB\u503C\u3002 \u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5B83\u63D0\u4F9B\u5F53\u524D\u884C\u7684\u884C\u53F7\uFF08\u4ECE 0 \u5F00\u59CB\uFF09\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD4\u56DE\u503C\u5C06\u4F5C\u4E3A\u7D22\u5F15\u5C55\u793A\u3002")],-1),Us=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),Ks=s("h2",{id:"\u8868\u5934\u5438\u9876\u548C\u6A2A\u5411\u6EDA\u52A8\u6761\u5438\u5E95",tabindex:"-1"},"\u8868\u5934\u5438\u9876\u548C\u6A2A\u5411\u6EDA\u52A8\u6761\u5438\u5E95",-1),Qs=s("p",null,[l("\u901A\u8FC7\u5C5E\u6027 "),s("code",null,"stickyable"),l(" \u53EF\u4EE5\u6307\u5B9A\u8868\u683C\u8868\u5934\u662F\u5426\u5438\u9876\uFF0C\u6A2A\u5411\u6EDA\u52A8\u6761\u662F\u5426\u5438\u5E95\u3002\u8FD8\u53EF\u4EE5\u901A\u8FC7 "),s("code",null,"offset"),l("\u5C5E\u6027\u914D\u7F6E\u8DDD\u79BB\u89C6\u53E3\u9876\u90E8\u7684\u504F\u79FB\u91CF\u3002 \u9ED8\u8BA4\u5438\u9876\u5173\u95ED\u7684\u3002")],-1),Ws=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#C9D1D9"}},"<"),s("span",{style:{color:"#7EE787"}},"template"),s("span",{style:{color:"#C9D1D9"}},">")]),l(`
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
`),s("span",{class:"line"})])])],-1),sl=w('<h2 id="\u9884\u8BBE\u7684\u6570\u636E\u5F62\u6001" tabindex="-1">\u9884\u8BBE\u7684\u6570\u636E\u5F62\u6001</h2><h3 id="_1-createprogresscell-\u8FDB\u5EA6\u6761-\u8868\u793A\u5360\u6BD4" tabindex="-1">1. createProgressCell \u8FDB\u5EA6\u6761\uFF0C\u8868\u793A\u5360\u6BD4</h3><p><code>\u53C2\u6570\uFF1A{ value = \u5355\u5143\u683C\u7684\u503C, formatter = \u503C\u7684\u683C\u5F0F\u5316\u51FD\u6570, max = \u672C\u5B57\u6BB5\u5BF9\u5E94\u7684\u6700\u5927\u503C\uFF0C\u7528\u6765\u8BA1\u7B97\u8FDB\u5EA6, animated = \u662F\u5426\u542F\u7528\u52A8\u753B\u6548\u679C }</code><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/sXzzVm.png" alt="sXzzVm"></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/ojedv6.png" alt="ojedv6"></p><h3 id="_2-createcolorfontcell-\u5E26\u989C\u8272\u7684\u6587\u5B57-\u8868\u793A\u4E0A\u5347\u548C\u4E0B\u964D" tabindex="-1">2. createColorFontCell \u5E26\u989C\u8272\u7684\u6587\u5B57\uFF0C\u8868\u793A\u4E0A\u5347\u548C\u4E0B\u964D</h3><p><code>\u53C2\u6570\uFF1A({ value = \u540C\u4E0A, formatter = \u540C\u4E0A, isPositive = \u662F\u5426\u663E\u793A\u4E3A\u79EF\u6781\u8272 })</code></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/V2XNce.png" alt="V2XNce"></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/8rSNdz.png" alt="8rSNdz"></p><h3 id="_3-createcolorblockcell-\u8272\u5757-\u8868\u793A\u4E0A\u5347\u548C\u4E0B\u964D" tabindex="-1">3. createColorBlockCell \u8272\u5757\uFF0C\u8868\u793A\u4E0A\u5347\u548C\u4E0B\u964D</h3><p><code>\u53C2\u6570\uFF1A{ value = \u540C\u4E0A, formatter = \u540C\u4E0A, base = \u57FA\u7840\u503C\uFF0C\u5927\u4E8E\u8BE5\u503C\u4E3A\u79EF\u6781\u8272\uFF0C\u5C0F\u4E8E\u8BE5\u503C\u4E3A\u6D88\u6781\u8272, align = \u5BF9\u9F50\u65B9\u5F0F }</code></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/l0bNjD.png" alt="l0bNjD"></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/ashw4T.png" alt="ashw4T"></p><h3 id="_4-createaveragecell-\u5927\u4E8E\u5E73\u5747\u503C\u7684\u6570\u636E\u624D\u7740\u8272" tabindex="-1">4. createAverageCell \u5927\u4E8E\u5E73\u5747\u503C\u7684\u6570\u636E\u624D\u7740\u8272</h3><p><code>\u53C2\u6570\uFF1A{ average = \u5E73\u5747\u503C, value = \u540C\u4E0A, formatter = \u540C\u4E0A }</code></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/rqNUra.png" alt="rqNUra"></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/R6llDv.png" alt="R6llDv"></p><h3 id="_5-createtooltipcell-\u5E26\u5C0F\u7A97\u53E3\u7684\u5355\u5143\u683C" tabindex="-1">5. createTooltipCell \u5E26\u5C0F\u7A97\u53E3\u7684\u5355\u5143\u683C</h3><p><code>\u53C2\u6570\uFF1A(text = \u5355\u5143\u683C\u5185\u5BB9\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u7EC4\u4EF6, content = tooltip \u5185\u5BB9)</code></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/jZFxWE.png" alt="jZFxWE"></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/tfCRk8.png" alt="tfCRk8"></p><h3 id="_6-createtooltiplistcell-\u5E26\u6709\u6570\u636E\u660E\u7EC6\u7A97\u53E3\u7684\u5355\u5143\u683C" tabindex="-1">6. createTooltipListCell \u5E26\u6709\u6570\u636E\u660E\u7EC6\u7A97\u53E3\u7684\u5355\u5143\u683C</h3><p><code>\u53C2\u6570\uFF1A(text = \u5355\u5143\u683C\u5185\u5BB9\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u7EC4\u4EF6, list = \u660E\u7EC6\u5217\u8868\uFF0C\u5982\u4E0B\u56FE, showRoi = \u662F\u5426\u5C55\u793Aroi\u5217)</code></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/esUzkM.png" alt="esUzkM"></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/s2qYpR.png" alt="s2qYpR"></p><h3 id="_7-createsalarycell-\u7279\u6B8A\u8272\u5757-\u7528\u4E8E\u8868\u793A\u85AA\u6C34" tabindex="-1">7. createSalaryCell \u7279\u6B8A\u8272\u5757\uFF0C\u7528\u4E8E\u8868\u793A\u85AA\u6C34</h3><p><code>\u53C2\u6570\uFF1A{ value = \u540C\u4E0A, formatter = \u540C\u4E0A, base = \u57FA\u7840\u503C\uFF0C\u5927\u4E8E\u8BE5\u503C\u4E3A\u79EF\u6781\u8272\uFF0C\u5C0F\u4E8E\u8BE5\u503C\u4E3A\u6D88\u6781\u8272, align = \u5BF9\u9F50\u65B9\u5F0F }</code></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/5iTuPP.png" alt="5iTuPP"></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/RIkdID.png" alt="RIkdID"></p><h3 id="_8-createwarningcell-\u5E26\u6709\u8B66\u544A\u56FE\u6807\u7684\u5355\u5143\u683C" tabindex="-1">8. createWarningCell \u5E26\u6709\u8B66\u544A\u56FE\u6807\u7684\u5355\u5143\u683C</h3><p><code>\u53C2\u6570\uFF1A ({ value = \u540C\u4E0A, formatter = \u540C\u4E0A, content = \u8B66\u544A\u5185\u5BB9, showWarning = \u662F\u5426\u5C55\u793A\u8B66\u544A\u56FE\u6807})</code></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/n4pny7.png" alt="n4pny7"></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/tHt9lE.png" alt="tHt9lE"></p><h3 id="_9-createtrendcell-\u5E26\u6709\u8D8B\u52BF\u56FE\u6807\u7684\u5355\u5143\u683C" tabindex="-1">9. createTrendCell \u5E26\u6709\u8D8B\u52BF\u56FE\u6807\u7684\u5355\u5143\u683C</h3><p><code>\u53C2\u6570\uFF1A({ value = \u540C\u4E0A, formatter = \u540C\u4E0A, base = \u57FA\u7840\u503C\uFF0C\u5927\u4E8E\u8BE5\u503C\u4E3A\u4E0A\u5347\u8D8B\u52BF\uFF0C\u5C0F\u4E8E\u8BE5\u503C\u4E3A\u4E0B\u964D\u8D8B\u52BF })</code></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/yAJPKq.png" alt="yAJPKq"></p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/mTHgw1.png" alt="mTHgw1"></p><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>columns</td><td>\u5217\u7684\u914D\u7F6E</td><td>Array</td><td>\u89C1\u4E0B\u65B9\u7684 <strong>\u5217\u5C5E\u6027</strong> \u7AE0\u8282</td><td></td></tr><tr><td>loading</td><td>\u662F\u5426\u5904\u4E8E\u52A0\u8F7D\u72B6\u6001</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>skeletonRows</td><td>\u9AA8\u67B6\u5C4F\u6E32\u67D3\u884C\u6570</td><td>Number</td><td></td><td>20</td></tr><tr><td>stickyable</td><td>\u8BE5\u8868\u683C\u662F\u5426\u53EF\u4EE5\u5438\u9876\uFF1B</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>offset</td><td>\u8868\u683C\u5438\u9876\u7684\u504F\u79FB\u91CF</td><td>Number</td><td></td><td>0</td></tr><tr><td>themeColor</td><td>\u8868\u5934\u4E3B\u9898\u8272</td><td>String</td><td></td><td></td></tr><tr><td>pagination</td><td>\u8868\u683C\u662F\u5426\u5206\u9875</td><td>Boolean/Object</td><td>\u9ED8\u8BA4\u7684\u5206\u9875\uFF1A <code>{ position: &#39;flex-end&#39;, pageSizes: [10, 25, 50], pageSize: 25, layout: &#39;total, sizes, prev, pager, next, jumper&#39;}</code>\uFF0C\u4F20\u5165\u914D\u7F6E\u5BF9\u8C61\u65F6\u5C06\u548C\u9ED8\u8BA4\u914D\u7F6E\u5408\u5E76</td><td>true</td></tr><tr><td>sort</td><td>\u6392\u5E8F, \u652F\u6301\u5916\u90E8\u63A7\u5236\u8868\u683C\u5185\u7684\u6392\u5E8F</td><td>Object</td><td></td><td><code>{ prop: &#39;&#39;, order: &#39;&#39; }</code></td></tr><tr><td>filter</td><td>\u7B5B\u9009\u9879</td><td>Object</td><td>prop \u4E3A key\uFF0Cvalue \u4E3A\u7B5B\u9009\u503C\u6784\u6210\u7684\u6570\u7EC4 \u7684\u4E00\u4E2A\u5BF9\u8C61</td><td></td></tr><tr><td>stripeIndex</td><td>\u6591\u9A6C\u7EB9\u7684\u8D77\u59CB\u884C\u53F7\uFF0C</td><td>Number</td><td>0\uFF0C 1</td><td>0</td></tr><tr><td>useInnerSort</td><td>\u662F\u5426\u4F7F\u7528\u8868\u683C\u5185\u90E8\u7684\u6392\u5E8F</td><td>Boolean</td><td>\u5982\u679C\u9700\u8981\u540E\u7AEF\u6392\u5E8F\uFF0C\u5219\u9700\u8981\u76D1\u542C\u6392\u5E8F\u4E8B\u4EF6\u5E76\u8BF7\u6C42\u63A5\u53E3\uFF0C\u628A\u6570\u636E\u8D4B\u503C\u7ED9\u8868\u683C\u56DE\u663E</td><td>true</td></tr><tr><td>useInnerFilter</td><td>\u662F\u5426\u4F7F\u7528\u8868\u683C\u5185\u90E8\u7684\u7B5B\u9009</td><td>Boolean</td><td>\u5982\u679C\u9700\u8981\u540E\u7AEF\u7B5B\u9009\uFF0C\u5219\u9700\u8981\u76D1\u542C\u7B5B\u9009\u4E8B\u4EF6\u5E76\u8BF7\u6C42\u63A5\u53E3\uFF0C\u628A\u6570\u636E\u8D4B\u503C\u7ED9\u8868\u683C\u56DE\u663E</td><td>true</td></tr><tr><td>timeProps</td><td>\u6307\u5B9A\u54EA\u4E9B\u5B57\u6BB5\u6392\u5E8F\u65F6\u6309\u65F6\u95F4\u6392\u5E8F</td><td>Array</td><td></td><td></td></tr><tr><td>numberClassName</td><td>\u6570\u5B57\u7C7B\u578B\u7684\u5355\u5143\u683C\u7684 class \u540D\u79F0</td><td>String</td><td></td><td>xs-table-cell__number</td></tr><tr><td>textClassName</td><td>\u6587\u672C\u7C7B\u578B\u7684\u5355\u5143\u683C class \u5C5E\u6027\u540D</td><td>String</td><td></td><td>xs-table-cell__number</td></tr><tr><td>summaryPosition</td><td>\u6C47\u603B\u884C\u4F4D\u7F6E</td><td>string</td><td>bottom \uFF0Ctop</td><td>bottom</td></tr><tr><td>resetPositionOnDataChange</td><td>\u6570\u636E\u53D8\u5316\u65F6\u662F\u5426\u91CD\u7F6E\u5782\u76F4\u6EDA\u52A8\u6761</td><td>Boolean</td><td></td><td>false</td></tr></tbody></table><p>\u4EE5\u4E0B\u4E3A\u539F\u6709\u7684 el-table \u7684\u5C5E\u6027\uFF0C\u4E0D\u652F\u6301\u7684\u5C5E\u6027\u5DF2\u88AB\u753B\u4E86\u7EA2\u7EBF\u3002</p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/4sVYO2.png" alt="4sVYO2"><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/rMqR50.png" alt="rMqR50"><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/gGM0Qd.png" alt="gGM0Qd"><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/1b6Sf6.png" alt="1b6Sf6"></p><h2 id="\u8868\u683C\u4E8B\u4EF6" tabindex="-1">\u8868\u683C\u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>popover-confirm</td><td>\u5355\u5217\u7B5B\u9009\u65F6\u89E6\u53D1</td><td><code>{ column, value, prop }</code></td></tr><tr><td>popover-cancel</td><td>\u53D6\u6D88\u5355\u5217\u7B5B\u9009\u65F6\u89E6\u53D1</td><td><code>{ column, prop }</code></td></tr><tr><td>sticky-change</td><td>\u5438\u9876\u72B6\u6001\u53D8\u5316\u65F6\u89E6\u53D1</td><td>isSticky</td></tr><tr><td>current-data-change</td><td>\u8868\u683C\u663E\u793A\u7684\u6570\u636E\u53D8\u5316\u65F6</td><td><code>{ data }</code></td></tr><tr><td>scroll</td><td>\u6EDA\u52A8\u65F6\u89E6\u53D1</td><td><code>{ scrollLeft, position }</code></td></tr><tr><td>sort-change</td><td>\u6392\u5E8F\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code>{ prop, order }</code></td></tr><tr><td>filter-change</td><td>\u7B5B\u9009\u53D8\u5316\u65F6\u89E6\u53D1</td><td></td></tr><tr><td>header-click</td><td>\u8868\u5934\u70B9\u51FB\u65F6\u89E6\u53D1</td><td><code>{ column, prop }</code></td></tr></tbody></table><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/dAnylL.png" alt="dAnylL"><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/HPZdmf.png" alt="HPZdmf"></p><h2 id="\u8868\u683C\u65B9\u6CD5" tabindex="-1">\u8868\u683C\u65B9\u6CD5</h2><p>\u539F <code>el-table</code> \u4E0B\u7684\u65B9\u6CD5\u6302\u8F7D\u5728 <code>tableRef</code></p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>clearFilter</td><td>\u4F20\u5165 prop \u65F6\u6E05\u9664\u6307\u5B9A\u7684\u7B5B\u9009\uFF0C\u4E0D\u4F20\u5219\u6E05\u9664\u6240\u6709\u7B5B\u9009</td><td></td></tr></tbody></table><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/vpGIST.png" alt="vpGIST"></p><h2 id="\u8868\u683C\u63D2\u69FD" tabindex="-1">\u8868\u683C\u63D2\u69FD</h2><table><thead><tr><th>\u63D2\u69FD</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>append</td><td>\u63D2\u5165\u81F3\u8868\u683C\u6700\u540E\u4E00\u884C\u4E4B\u540E\u7684\u5185\u5BB9\uFF0C \u5982\u679C\u9700\u8981\u5BF9\u8868\u683C\u7684\u5185\u5BB9\u8FDB\u884C\u65E0\u9650\u6EDA\u52A8\u64CD\u4F5C\uFF0C\u53EF\u80FD\u9700\u8981\u7528\u5230\u8FD9\u4E2A slot\u3002 \u82E5\u8868\u683C\u6709\u5408\u8BA1\u884C\uFF0C\u8BE5 slot \u4F1A\u4F4D\u4E8E\u5408\u8BA1\u884C\u4E4B\u4E0A\u3002</td></tr><tr><td>empty</td><td>\u5F53\u6570\u636E\u4E3A\u7A7A\u65F6\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9</td></tr><tr><td>paginationLeft</td><td>\u5206\u9875\u5DE6\u4FA7\u5185\u5BB9</td></tr><tr><td>paginationRight</td><td>\u5206\u9875\u53F3\u4FA7\u7684\u5185\u5BB9</td></tr><tr><td>`${column.group}Empty`</td><td>\u5F53\u4E00\u7EC4\u7684\u6570\u636E\u90FD\u4E3A\u7A7A\u65F6\uFF08\u8DE8\u9875\u5224\u65AD\uFF09\u81EA\u5B9A\u4E49\u7684\u5185\u5BB9</td></tr><tr><td>`${column.slot}`</td><td>\u5217\u81EA\u5B9A\u4E49\u5185\u5BB9, \u53C2\u6570\uFF1A<code>{ column, row, rows, columns, $index }</code></td></tr><tr><td>`${column.slotLabel}`</td><td>\u5217\u5934\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53C2\u6570\uFF1Acolumn</td></tr></tbody></table><h2 id="\u5217\u5C5E\u6027" tabindex="-1">\u5217\u5C5E\u6027</h2><p>\u5728 columns \u914D\u7F6E\u4E2D\uFF0C\u9700\u8981\u4F7F\u7528\u5C5E\u6027\u7684\u9A7C\u5CF0\u547D\u540D\u3002\u5982\uFF1A<code>showOverflowTooltip</code></p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>slot</td><td>\u6307\u5B9A\u672C\u5217\u7684 slot</td><td>string</td><td>\u63D2\u69FD\u7684\u53C2\u6570\uFF1A<code>{ column, row, rows, columns, $index }</code></td><td></td></tr><tr><td>slotLabel</td><td>\u6307\u5B9A\u672C\u5217\u7684\u5217\u5934\u7684 slot</td><td>string</td><td></td><td></td></tr><tr><td>sortable</td><td>\u672C\u5217\u662F\u5426\u5F00\u542F\u6392\u5E8F</td><td>Boolean</td><td></td><td>false</td></tr><tr><td>background</td><td>\u8868\u5934\u80CC\u666F\u8272</td><td>string</td><td></td><td></td></tr><tr><td>children</td><td>\u5B50\u5217\u7684\u96C6\u5408</td><td>Array</td><td></td><td></td></tr><tr><td>filter</td><td>\u7B5B\u9009\u9762\u677F\u7684\u4E00\u4E9B\u914D\u7F6E</td><td>Object</td><td></td><td><code>{inputCount: 1,placeholder: &#39;\u8BF7\u8F93\u5165&#39;,placeholderAlign: &#39;left&#39;,cancelBtnText: &#39;\u6E05\u9664&#39;,confirmBtnText: &#39;\u786E\u5B9A&#39;,showCancelBtn: true, // \u9ED8\u8BA4\u4E0D\u663E\u793A\u6E05\u9664\u6309\u94AE, sortSubTitle: &#39;&#39;,filterSubTitle: &#39;&#39;,suffixLabel: &#39;&#39;,type: &#39;input&#39;,multiple: false}</code></td></tr><tr><td>filterMethod</td><td>\u7B5B\u9009\u65B9\u6CD5\uFF0C\u9664\u975E\u4F60\u8981\u81EA\u5B9A\u4E49\u7B5B\u9009\uFF0C\u5426\u5219\u7528\u4E0D\u5230\u8FD9\u4E2A\u5C5E\u6027</td><td>function</td><td></td><td></td></tr><tr><td>render</td><td>\u5355\u5143\u683C\u7684\u6E32\u67D3\u65B9\u6CD5</td><td>function</td><td>\u56DE\u8C03\u53C2\u6570\uFF1A<code>{ column, row, rows, columns, $index }</code></td><td></td></tr><tr><td>renderLabel</td><td>\u5217\u5934\u7684\u6E32\u67D3\u65B9\u6CD5</td><td>function</td><td>\u56DE\u8C03\u53C2\u6570\uFF1A<code>column</code></td><td></td></tr></tbody></table><p>renderLabel</p><p><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/k7GO0V.png" alt="k7GO0V"><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/e8tgpK.png" alt="e8tgpK"><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/qYhYlj.png" alt="qYhYlj"><img src="https://picture.zhuiyue.vip:444/images/2023/02/07/hehiXQ.png" alt="hehiXQ"></p>',54);function ll(u,y,c,t,D,b){const e=x("render-demo-0"),n=x("demo"),r=x("render-demo-1"),F=x("render-demo-2"),a=x("render-demo-3"),d=x("render-demo-4"),o=x("render-demo-5"),i=x("render-demo-6"),p=x("render-demo-7"),g=x("render-demo-8"),C=x("render-demo-9"),B=x("render-demo-10"),f=x("render-demo-11"),h=x("render-demo-12"),v=x("render-demo-13"),_=x("render-demo-14"),k=x("render-demo-15"),N=x("render-demo-16"),$=x("render-demo-17"),L=x("render-demo-18"),S=x("render-demo-19"),T=x("render-demo-20");return V(),G("div",null,[R,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[J]),default:m(()=>[E(e)]),_:1}),P,j,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[M]),default:m(()=>[E(r)]),_:1}),q,Z,Y,H,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[X]),default:m(()=>[E(F)]),_:1}),U,K,Q,W,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[ss]),default:m(()=>[E(a)]),_:1}),ls,os,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[ns]),default:m(()=>[E(d)]),_:1}),es,as,ts,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[ps]),default:m(()=>[E(o)]),_:1}),cs,rs,ys,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Fs]),default:m(()=>[E(i)]),_:1}),Ds,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[us]),default:m(()=>[E(p)]),_:1}),is,Cs,ds,As,Es,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[ms]),default:m(()=>[E(g)]),_:1}),gs,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[bs]),default:m(()=>[E(C)]),_:1}),fs,Bs,hs,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[xs]),default:m(()=>[E(B)]),_:1}),vs,ws,_s,ks,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Ns]),default:m(()=>[E(f)]),_:1}),$s,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Ls]),default:m(()=>[E(h)]),_:1}),Ss,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Ts]),default:m(()=>[E(v)]),_:1}),zs,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Gs]),default:m(()=>[E(_)]),_:1}),Vs,Os,Is,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Rs]),default:m(()=>[E(k)]),_:1}),Js,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Ps]),default:m(()=>[E(N)]),_:1}),js,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Ms]),default:m(()=>[E($)]),_:1}),qs,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Zs]),default:m(()=>[E(L)]),_:1}),Ys,Hs,Xs,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Us]),default:m(()=>[E(S)]),_:1}),Ks,Qs,E(n,{customClass:"undefined",sourceCode:`<template>
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
`},{highlight:m(()=>[Ws]),default:m(()=>[E(T)]),_:1}),sl])}const el=z(I,[["render",ll]]);export{nl as __pageData,el as default};
