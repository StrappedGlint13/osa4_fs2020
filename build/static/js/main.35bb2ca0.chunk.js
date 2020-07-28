(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),u=n.n(l),c=n(3),o=n.n(c),i=n(4),s=n(2),m=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),l=Object(s.a)(n,2),u=l[0],c=l[1],o={display:u?"none":""},i={display:u?"":"none"},m=function(){c(!u)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:m}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:m},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:m},"cancel")))})),d=Object(a.useRef)(),f=function(e){var t=e.blog;return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5}},r.a.createElement("div",null,t.title," ",t.author,r.a.createElement(m,{buttonLabel:"view",ref:d},"jotain")))},b=n(5),g=n.n(b),p=null,v={getAll:function(){return g.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},e.next=3,g.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat("/api/blogs"," /").concat(e),t).then((function(e){return e.data}))},setToken:function(e){p="bearer ".concat(e)}},h={login:function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=e.addBlog,n=e.handleAuthorChange,a=e.handleTitleChange,l=e.handleUrlChange,u=e.newTitle,c=e.newAuthor,o=e.newUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"title: ",r.a.createElement("input",{value:u,onChange:a})),r.a.createElement("div",null,"author: ",r.a.createElement("input",{value:c,onChange:n})),r.a.createElement("div",null,r.a.createElement("div",null,"url: ",r.a.createElement("input",{value:o,onChange:l})),r.a.createElement("div",null),r.a.createElement("button",{type:"submit"},"create")))},w=function(e){var t=e.message;return null===t?null:(console.log(t),r.a.createElement("div",{className:"message"},t))},O=function(e){var t=e.error;return null===t?null:r.a.createElement("div",{className:"error"},t)},j=(n(39),function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(""),c=Object(s.a)(u,2),d=c[0],b=c[1],g=Object(a.useState)(""),p=Object(s.a)(g,2),j=p[0],y=p[1],S=Object(a.useState)(""),k=Object(s.a)(S,2),C=k[0],T=k[1],x=Object(a.useState)(""),U=Object(s.a)(x,2),A=U[0],I=U[1],L=Object(a.useState)(""),B=Object(s.a)(L,2),J=B[0],N=B[1],R=Object(a.useRef)(),D=Object(a.useState)(null),V=Object(s.a)(D,2),W=V[0],z=V[1],H=Object(a.useState)(null),P=Object(s.a)(H,2),q=P[0],F=P[1],G=Object(a.useState)(null),K=Object(s.a)(G,2),M=K[0],Q=K[1];Object(a.useEffect)((function(){v.getAll().then((function(e){return l(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);Q(t),v.setToken(t.token)}}),[]);var X=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.login({username:d,password:j});case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),v.setToken(n.token),Q(n),b(""),y(""),z("Welcome ".concat(n.username)),setTimeout((function(){z(null)}),5e3),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),F("invalid username or password"),setTimeout((function(){z(null)}),5e3);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return null===M?r.a.createElement("div",null,r.a.createElement(O,{error:q}),r.a.createElement("h2",null,"Log in to application"),r.a.createElement("form",{onSubmit:X},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:d,name:"Username",onChange:function(e){var t=e.target;return b(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:j,name:"Password",onChange:function(e){var t=e.target;return y(t.value)}})),r.a.createElement("button",{type:"submit"},"login"))):r.a.createElement("div",null,r.a.createElement("h2",null,"blogs"),r.a.createElement(w,{message:W}),M.name," logged in",r.a.createElement("button",{onClick:function(){return window.localStorage.removeItem("loggedUser"),void Q(null)}},"logout"),r.a.createElement("br",null),r.a.createElement("h2",null,"create new"),r.a.createElement(m,{buttonLabel:"new note",ref:R},r.a.createElement(E,{addBlog:function(e){e.preventDefault();var t={title:C,author:A,url:J};R.current.toggleVisibility(),v.create(t).then((function(e){l(n.concat(e)),T(""),I(""),N(""),z("a new blog '".concat(t.title,"' added")),setTimeout((function(){z(null)}),5e3)}))},newTitle:C,newAuthor:A,newUrl:J,handleTitleChange:function(e){T(e.target.value)},handleAuthorChange:function(e){I(e.target.value)},handleUrlChange:function(e){N(e.target.value)}})),n.map((function(e){return r.a.createElement(f,{key:e.id,blog:e})})))});u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.35bb2ca0.chunk.js.map