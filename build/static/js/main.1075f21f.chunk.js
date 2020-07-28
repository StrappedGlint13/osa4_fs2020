(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),u=n.n(l),c=n(2),o=n.n(c),i=n(4),s=n(3),m=function(e){var t=e.blog;return r.a.createElement("div",null,t.title," ",t.author)},g=n(5),f=n.n(g),d=null,p={getAll:function(){return f.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:d}},e.next=3,f.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return f.a.put("".concat("/api/blogs"," /").concat(e),t).then((function(e){return e.data}))},setToken:function(e){d="bearer ".concat(e)}},v={login:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e){return r.a.createElement("form",{onSubmit:e.addBlog},r.a.createElement("div",null,"title: ",r.a.createElement("input",{value:e.newTitle,onChange:e.handleTitleChange})),r.a.createElement("div",null,"author: ",r.a.createElement("input",{value:e.newAuthor,onChange:e.handleAuthorChange})),r.a.createElement("div",null,r.a.createElement("div",null,"url: ",r.a.createElement("input",{value:e.newUrl,onChange:e.handleUrlChange})),r.a.createElement("div",null),r.a.createElement("button",{type:"submit"},"create")))},h=function(e){var t=e.message;return null===t?null:(console.log(t),r.a.createElement("div",{className:"message"},t))},E=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(""),c=Object(s.a)(u,2),g=c[0],f=c[1],d=Object(a.useState)(""),E=Object(s.a)(d,2),w=E[0],O=E[1],j=Object(a.useState)(""),S=Object(s.a)(j,2),k=S[0],C=S[1],y=Object(a.useState)(""),x=Object(s.a)(y,2),T=x[0],U=x[1],A=Object(a.useState)(""),I=Object(s.a)(A,2),J=I[0],B=I[1],N=Object(a.useState)(null),D=Object(s.a)(N,2),z=D[0],L=D[1],P=Object(a.useState)(null),q=Object(s.a)(P,2),F=q[0],G=q[1];Object(a.useEffect)((function(){p.getAll().then((function(e){return l(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);G(t),p.setToken(t.token)}}),[]);var H=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.login({username:g,password:w});case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),p.setToken(n.token),G(n),f(""),O(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),L("wrong credentials"),setTimeout((function(){L(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return null===F?r.a.createElement("div",null,r.a.createElement("h2",null,"Log in to application"),r.a.createElement("form",{onSubmit:H},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:g,name:"Username",onChange:function(e){var t=e.target;return f(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:w,name:"Password",onChange:function(e){var t=e.target;return O(t.value)}})),r.a.createElement("button",{type:"submit"},"login"))):r.a.createElement("div",null,r.a.createElement("h2",null,"blogs"),r.a.createElement(h,{message:z}),F.name," logged in",r.a.createElement("button",{onClick:function(){return window.localStorage.removeItem("loggedUser"),void G(null)}},"logout"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null,"create new"),r.a.createElement(b,{addBlog:function(e){e.preventDefault();var t={title:k,author:T,url:J};p.create(t).then((function(e){l(n.concat(e)),C(""),U(""),B("")})).catch((function(e){L("a new blog '".concat(t.title,"' added")),setTimeout((function(){L(null)}),5e3)}))},newTitle:k,newAuthor:T,newUrl:J,handleTitleChange:function(e){C(e.target.value)},handleAuthorChange:function(e){U(e.target.value)},handleUrlChange:function(e){B(e.target.value)}}),n.map((function(e){return r.a.createElement(m,{key:e.id,blog:e})})))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1075f21f.chunk.js.map