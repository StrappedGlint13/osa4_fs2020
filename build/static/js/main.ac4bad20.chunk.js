(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),l=n.n(u),c=n(2),o=n.n(c),i=n(4),s=n(3),m=function(e){var t=e.blog;return r.a.createElement("div",null,t.title," ",t.author," ",t.url)},p=n(5),f=n.n(p),g=null,d={getAll:function(){return f.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:g}},e.next=3,f.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return f.a.put("".concat("/api/blogs"," /").concat(e),t).then((function(e){return e.data}))},setToken:function(e){g="bearer ".concat(e)}},b={login:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(e){return r.a.createElement("form",{onSubmit:e.addBlog},r.a.createElement("div",null,"title: ",r.a.createElement("input",{value:e.newTitle,onChange:e.handleTitleChange})),r.a.createElement("div",null,"author: ",r.a.createElement("input",{value:e.newAuthor,onChange:e.handleAuthorChange})),r.a.createElement("div",null,r.a.createElement("div",null,"url: ",r.a.createElement("input",{value:e.newUrl,onChange:e.handleUrlChange})),r.a.createElement("div",null),r.a.createElement("button",{type:"submit"},"create")))},h=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(""),c=Object(s.a)(l,2),p=c[0],f=c[1],g=Object(a.useState)(""),h=Object(s.a)(g,2),E=h[0],w=h[1],O=Object(a.useState)(""),j=Object(s.a)(O,2),S=j[0],k=j[1],C=Object(a.useState)(""),y=Object(s.a)(C,2),x=y[0],T=y[1],U=Object(a.useState)(""),A=Object(s.a)(U,2),I=A[0],J=A[1],B=Object(a.useState)(null),D=Object(s.a)(B,2),N=(D[0],D[1]),z=Object(a.useState)(null),L=Object(s.a)(z,2),P=L[0],q=L[1];Object(a.useEffect)((function(){d.getAll().then((function(e){return u(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);q(t),d.setToken(t.token)}}),[]);var F=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,b.login({username:p,password:E});case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),d.setToken(n.token),q(n),f(""),w(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),N("wrong credentials"),setTimeout((function(){N(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return null===P?r.a.createElement("div",null,r.a.createElement("h2",null,"Log in to application"),r.a.createElement("form",{onSubmit:F},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:p,name:"Username",onChange:function(e){var t=e.target;return f(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:E,name:"Password",onChange:function(e){var t=e.target;return w(t.value)}})),r.a.createElement("button",{type:"submit"},"login"))):r.a.createElement("div",null,r.a.createElement("h2",null,"blogs"),P.name," logged in",r.a.createElement("button",{onClick:function(){return window.localStorage.removeItem("loggedUser"),void q(null)}},"logout"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"create new"),r.a.createElement(v,{addBlog:function(e){e.preventDefault();var t={title:S,author:x,url:I};d.create(t).then((function(e){u(n.concat(e)),k(""),T(""),J("")}))},newTitle:S,newAuthor:x,newUrl:I,handleTitleChange:function(e){k(e.target.value)},handleAuthorChange:function(e){T(e.target.value)},handleUrlChange:function(e){J(e.target.value)}}),n.map((function(e){return r.a.createElement(m,{key:e.id,blog:e})})))};l.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ac4bad20.chunk.js.map