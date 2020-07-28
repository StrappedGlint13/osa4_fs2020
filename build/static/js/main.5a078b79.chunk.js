(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),u=n.n(l),c=n(16),o=n(3),i=n.n(o),s=n(4),d=n(2),m=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),l=Object(d.a)(n,2),u=l[0],c=l[1],o={display:u?"none":""},i={display:u?"":"none"},s=function(){c(!u)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement("div",null,r.a.createElement("div",{style:o},r.a.createElement("button",{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:s},"cancel")))})),f=function(e){var t=e.blog,n=e.addLike;return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5}},r.a.createElement("div",null,t.title," ",t.author,r.a.createElement(m,{buttonLabel:"view"},t.url,r.a.createElement("br",null),"likes ",t.likes,r.a.createElement("button",{onClick:n},"like"),r.a.createElement("br",null),t.user.username)))},b=n(5),g=n.n(b),p=null,v={getAll:function(){return g.a.get("/api/blogs").then((function(e){return e.data}))},create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:p}},e.next=3,g.a.post("/api/blogs",t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(e,t){return g.a.put("".concat("/api/blogs","/").concat(e),t).then((function(e){return e.data}))},setToken:function(e){p="bearer ".concat(e)}},h={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=function(e){var t=e.addBlog,n=e.handleAuthorChange,a=e.handleTitleChange,l=e.handleUrlChange,u=e.newTitle,c=e.newAuthor,o=e.newUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"title: ",r.a.createElement("input",{value:u,onChange:a})),r.a.createElement("div",null,"author: ",r.a.createElement("input",{value:c,onChange:n})),r.a.createElement("div",null,r.a.createElement("div",null,"url: ",r.a.createElement("input",{value:o,onChange:l})),r.a.createElement("div",null),r.a.createElement("button",{type:"submit"},"create")))},w=function(e){var t=e.message;return null===t?null:(console.log(t),r.a.createElement("div",{className:"message"},t))},O=function(e){var t=e.error;return null===t?null:r.a.createElement("div",{className:"error"},t)},j=(n(40),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],l=t[1],u=Object(a.useState)(""),o=Object(d.a)(u,2),b=o[0],g=o[1],p=Object(a.useState)(""),j=Object(d.a)(p,2),k=j[0],y=j[1],S=Object(a.useState)(""),C=Object(d.a)(S,2),T=C[0],x=C[1],U=Object(a.useState)(""),A=Object(d.a)(U,2),L=A[0],I=A[1],B=Object(a.useState)(""),J=Object(d.a)(B,2),N=J[0],D=J[1],R=Object(a.useRef)(),V=Object(a.useState)(null),W=Object(d.a)(V,2),z=W[0],H=W[1],P=Object(a.useState)(null),q=Object(d.a)(P,2),F=q[0],G=q[1],K=Object(a.useState)(null),M=Object(d.a)(K,2),Q=M[0],X=M[1];Object(a.useEffect)((function(){v.getAll().then((function(e){return l(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);X(t),v.setToken(t.token)}}),[]);var Y=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.login({username:b,password:k});case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),v.setToken(n.token),X(n),g(""),y(""),H("Welcome ".concat(n.username)),setTimeout((function(){H(null)}),5e3),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),G("invalid username or password"),setTimeout((function(){H(null)}),5e3);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return null===Q?r.a.createElement("div",null,r.a.createElement(O,{error:F}),r.a.createElement("h2",null,"Log in to application"),r.a.createElement("form",{onSubmit:Y},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:b,name:"Username",onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:k,name:"Password",onChange:function(e){var t=e.target;return y(t.value)}})),r.a.createElement("button",{type:"submit"},"login"))):r.a.createElement("div",null,r.a.createElement("h2",null,"blogs"),r.a.createElement(w,{message:z}),Q.name," logged in",r.a.createElement("button",{onClick:function(){return window.localStorage.removeItem("loggedUser"),void X(null)}},"logout"),r.a.createElement("br",null),r.a.createElement("h2",null,"create new"),r.a.createElement(m,{buttonLabel:"new note",ref:R},r.a.createElement(E,{addBlog:function(e){e.preventDefault();var t={title:T,author:L,url:N};R.current.toggleVisibility(),v.create(t).then((function(e){l(n.concat(e)),x(""),I(""),D(""),H("a new blog '".concat(t.title,"' added")),setTimeout((function(){H(null)}),5e3)}))},newTitle:T,newAuthor:L,newUrl:N,handleTitleChange:function(e){x(e.target.value)},handleAuthorChange:function(e){I(e.target.value)},handleUrlChange:function(e){D(e.target.value)}})),n.map((function(e){return r.a.createElement(f,{key:e.id,blog:e,addLike:function(){return function(e){var t=n.find((function(t){return t.id===e})),a=Object(c.a)({},t,{likes:t.likes+1});v.update(a.id,a).then((function(t){l(n.map((function(n){return n.id!==e?n:t.likes})))})).catch((function(e){G("adding like failed")})),setTimeout((function(){H(null)}),5e3)}(e.id)},user:Q})})))});u.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5a078b79.chunk.js.map