(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),c=n.n(u),o=n(2),l=n.n(o),i=n(3),s=n(5),p=function(e){var t=e.blog;return r.a.createElement("div",null,t.title," ",t.author)},f=n(4),m=n.n(f),b=function(){return m.a.get("/api/blogs").then((function(e){return e.data}))},g=function(e){"bearer ".concat(e)},v={login:function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),f=o[0],m=o[1],d=Object(a.useState)(""),E=Object(s.a)(d,2),O=E[0],h=E[1],w=Object(a.useState)(null),j=Object(s.a)(w,2),S=(j[0],j[1]),k=Object(a.useState)(null),y=Object(s.a)(k,2),x=y[0],J=y[1];Object(a.useEffect)((function(){b().then((function(e){return u(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);J(t),g(t.token)}}),[]);var I=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.login({username:f,password:O});case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),g(n.token),J(n),m(""),h(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),S("wrong credentials"),setTimeout((function(){S(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return null===x?r.a.createElement("div",null,r.a.createElement("h2",null,"Log in to application"),r.a.createElement("form",{onSubmit:I},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:f,name:"Username",onChange:function(e){var t=e.target;return m(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:O,name:"Password",onChange:function(e){var t=e.target;return h(t.value)}})),r.a.createElement("button",{type:"submit"},"login"))):r.a.createElement("div",null,r.a.createElement("h2",null,"blogs"),x.name," logged in \xa0",n.map((function(e){return r.a.createElement(p,{key:e.id,blog:e})})))};c.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6ca77ffc.chunk.js.map