(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"484d":function(e,t,n){"use strict";var r=n("8c64"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"client",(function(){return Y}));n("d3b7"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("v-main",[n("v-container",{attrs:{fluid:""}},[n("Alert"),n("router-view")],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.getAction?n("div",[n("v-alert",{staticClass:"multi-line",attrs:{dense:"",outlined:"",type:"error"}},[n("v-row",[n("v-col",{staticClass:"pb-1",attrs:{cols:"12"}},[n("div",{domProps:{innerHTML:e._s(e.getMessage)}}),n("v-row",[n("div",{domProps:{innerHTML:e._s("\n"+e.getDetail)}}),n("v-spacer"),n("v-btn",{attrs:{color:"error",text:""},on:{click:function(t){return e.store_setAlert({action:!1,message:null,detail:null})}}},[e._v("Close")])],1)],1)],1),null!=this.getDetail?n("v-divider",{staticClass:"my-4 error",staticStyle:{opacity:"0.92"}}):e._e(),n("p",[e._v("Please reload the page.")])],1)],1):e._e()},i=[],c={data:function(){return{newLine:"\n"}},computed:{getAction:function(){return this.$store.getters["alert/action"]},getMessage:function(){return this.$store.getters["alert/message"]},getDetail:function(){return this.$store.getters["alert/detail"]}},mounted:function(){},methods:{store_setAlert:function(e){var t=e.action,n=e.message,r=e.detail;this.$store.dispatch("alert/setAlert",{action:t,message:n,detail:r})}}},l=c,u=(n("484d"),n("2877")),f=n("6544"),d=n.n(f),p=n("0798"),v=n("8336"),g=n("62ad"),m=n("ce7e"),h=n("0fd9"),b=n("2fa4"),_=Object(u["a"])(l,s,i,!1,null,"44e480c8",null),y=_.exports;d()(_,{VAlert:p["a"],VBtn:v["a"],VCol:g["a"],VDivider:m["a"],VRow:h["a"],VSpacer:b["a"]});var w={name:"App",components:{Alert:y},data:function(){return{}}},A=w,O=n("7496"),x=n("a523"),j=n("f6c4"),k=Object(u["a"])(A,a,o,!1,null,null,null),P=k.exports;d()(k,{VApp:O["a"],VContainer:x["a"],VMain:j["a"]});var S=n("f309");r["a"].use(S["a"]);var V=new S["a"]({}),$=n("8c4f"),M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("ページ1")]),n("v-btn",{attrs:{color:"success"},on:{click:e.clickSuccess}},[e._v("成功")]),n("v-btn",{attrs:{color:"error"},on:{click:e.clickError}},[e._v("失敗")]),e._v(" "+e._s(e.success)+" ")],1)},C=[],E={data:function(){return{success:""}},methods:{clickSuccess:function(){var e=this;this.axios.get("/page1").then((function(t){e.success="成功"+t.data})).catch((function(t){e.store_setAlert({action:!0,message:"error \n"+t,detail:"成功ボタンで失敗しました'"})}))},clickError:function(){var e=this;this.axios.get("/hoge").then((function(t){e.success="失敗"+t.data})).catch((function(t){e.store_setAlert({action:!0,message:t,detail:"失敗ボタンで失敗しました'"})}))},store_setAlert:function(e){var t=e.action,n=e.message,r=e.detail;this.$store.dispatch("alert/setAlert",{action:t,message:n,detail:r})}}},L=E,T=Object(u["a"])(L,M,C,!1,null,null,null),D=T.exports;d()(T,{VBtn:v["a"]}),r["a"].use($["a"]);var R=new $["a"]({mode:"history",routes:[{path:"/",redirect:"/1"},{path:"/1",name:"page1",component:D}]}),B=n("bc3a"),H=n.n(B),J=n("a7fe"),U=n.n(J),q=n("94db"),G=n.n(q),K={run:function(e){var t=new G.a(H.a);t.onGet("/page1").reply((function(e){var t="OK";return[200,t]}))}},z=n("2f62"),F={action:!1,message:null,detail:null},I={action:function(e){return e.action},message:function(e){return e.message},detail:function(e){return e.detail}},N={setAlert:function(e,t){var n=e.commit,r=t.action,a=t.message,o=t.detail;n("setAlert",{action:r,message:a,detail:o})}},Q={setAlert:function(e,t){var n=t.action,r=t.message,a=t.detail;n?(e.action=n,e.message=r,e.detail=a):(e.action=!1,e.message=null,e.detail=a)}},W={namespaced:!0,state:F,getters:I,actions:N,mutations:Q};r["a"].use(z["a"]);var X=new z["a"].Store({strict:!1,modules:{alert:W},state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1;var Y=H.a.create({baseURL:""});function Z(e){var t=e.action,n=e.message,r=e.detail;return new Promise((function(e,a){X.dispatch("alert/setAlert",{action:t,message:n,detail:r}),e()}))}r["a"].prototype.$axios=H.a,Y=H.a.create({baseURL:""}),K.run(Y),r["a"].use(U.a,H.a),H.a.interceptors.request.use((function(e){return Z({action:!1,message:null,detail:null}).then((function(e){})).catch((function(e){})),e})),new r["a"]({vuetify:V,mock:K,router:R,store:X,render:function(e){return e(P)}}).$mount("#app")},"8c64":function(e,t,n){}});
//# sourceMappingURL=app.56a99a3c.js.map