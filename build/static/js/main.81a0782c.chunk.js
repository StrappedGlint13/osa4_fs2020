(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(15),o=n.n(u),l=n(2),c=n.n(l),i=n(3),s=n(5),f=function(e){var t=e.blog;return r.a.createElement("div",null,t.title," ",t.author)},p=n(4),m=n.n(p),g=function(){return m.a.get("/api/blogs").then((function(e){return e.data}))},b=function(e){"bearer ".concat(e)},d={login:function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],u=t[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),p=l[0],m=l[1],v=Object(a.useState)(""),E=Object(s.a)(v,2),w=E[0],O=E[1],h=Object(a.useState)(null),j=Object(s.a)(h,2),S=(j[0],j[1]),k=Object(a.useState)(null),y=Object(s.a)(k,2),x=y[0],I=y[1];Object(a.useEffect)((function(){g().then((function(e){return u(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedUser");if(e){var t=JSON.parse(e);I(t),b(t.token)}}),[]);var J=function(){var e=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d.login({username:p,password:w});case 4:n=e.sent,window.localStorage.setItem("loggedUser",JSON.stringify(n)),b(n.token),I(n),m(""),O(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),S("wrong credentials"),setTimeout((function(){S(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return null===x?r.a.createElement("div",null,r.a.createElement("h2",null,"Log in to application"),r.a.createElement("form",{onSubmit:J},r.a.createElement("div",null,"username",r.a.createElement("input",{type:"text",value:p,name:"Username",onChange:function(e){var t=e.target;return m(t.value)}})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:w,name:"Password",onChange:function(e){var t=e.target;return O(t.value)}})),r.a.createElement("button",{type:"submit"},"login"))):r.a.createElement("div",null,r.a.createElement("h2",null,"blogs"),x.name," logged in",r.a.createElement("button",{onClick:function(){return window.localStorage.removeItem("loggedUser"),void I(null)}},"logout"),r.a.createElement("br",null),n.map((function(e){return r.a.createElement(f,{key:e.id,blog:e})})))};o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.81a0782c.chunk.js.map