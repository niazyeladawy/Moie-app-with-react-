(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{49:function(e,t,s){},50:function(e,t,s){},95:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(39),r=s.n(n),i=(s(47),s(48),s(49),s(12)),l=s(4),j=s(40),b=s(2),o=(s(50),s(11)),m=s.n(o),d=s(14),x=s(15),h=s.n(x),O=s(0),p=Object(c.createContext)([]);function u(e){var t=Object(c.useState)([]),s=Object(l.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)([]),i=Object(l.a)(r,2),j=i[0],b=i[1],o=Object(c.useState)([]),x=Object(l.a)(o,2),u=x[0],g=x[1];function v(e,t){return f.apply(this,arguments)}function f(){return(f=Object(d.a)(m.a.mark((function e(t,s){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.themoviedb.org/3/trending/".concat(t,"/week?api_key=37ded266a817b10c2533ed925229e1ee"));case 2:c=e.sent,a=c.data,s(a.results.slice(0,10));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){return v("movie",n),v("tv",b),v("person",g),function(){n([])}}),[]),Object(O.jsx)(p.Provider,{value:{trendingMovies:a,trendingPeople:u,trendingTv:j},children:e.children})}function g(e){var t=Object(c.useContext)(p),s=t.trendingMovies,a=t.trendingPeople,n=t.trendingTv,r="https://image.tmdb.org/t/p/w500/";return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"row py-5",children:[Object(O.jsx)("div",{className:"col-md-4 text-center d-flex align-items-center",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"brdr my-3 w-25"}),Object(O.jsxs)("h2",{children:["Trending Movies",Object(O.jsx)("br",{}),"to watch ",Object(O.jsx)("br",{})," right now"]}),Object(O.jsx)("div",{className:"brdr my-3"})]})}),s.map((function(e,t){return Object(O.jsx)("div",{className:"col-md-2 mb-3",children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:r+e.poster_path,alt:e.title,className:"w-100"}),Object(O.jsx)("h3",{className:"h5",children:e.title})]})},t)}))]}),Object(O.jsxs)("div",{className:"row py-5",children:[Object(O.jsx)("div",{className:"col-md-4 text-center d-flex align-items-center",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"brdr my-3 w-25"}),Object(O.jsxs)("h2",{children:["Trending Tv",Object(O.jsx)("br",{}),"to watch ",Object(O.jsx)("br",{})," right now"]}),Object(O.jsx)("div",{className:"brdr my-3"})]})}),n.map((function(e,t){return Object(O.jsx)("div",{className:"col-md-2 mb-3",children:Object(O.jsxs)("div",{className:"tv",children:[Object(O.jsx)("img",{src:r+e.poster_path,alt:e.name,className:"w-100"}),Object(O.jsx)("h3",{className:"h5",children:e.name})]})},t)}))]}),Object(O.jsxs)("div",{className:"row py-5",children:[Object(O.jsx)("div",{className:"col-md-4 text-center d-flex align-items-center",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"brdr my-3 w-25"}),Object(O.jsxs)("h2",{children:["Trending People",Object(O.jsx)("br",{}),"to watch ",Object(O.jsx)("br",{})," right now"]}),Object(O.jsx)("div",{className:"brdr my-3"})]})}),a.map((function(e,t){return Object(O.jsx)("div",{className:"col-md-2 mb-3",children:Object(O.jsxs)("div",{className:"people",children:[Object(O.jsx)("img",{src:r+e.profile_path,alt:e.name,className:"w-100"}),Object(O.jsx)("h3",{className:"h5",children:e.name})]})},t)}))]})]})}var v=s(10),f=s.n(v);function N(e){var t=Object(c.useState)(""),s=Object(l.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(!1),j=Object(l.a)(r,2),b=j[0],o=j[1],x=Object(c.useState)([]),p=Object(l.a)(x,2),u=p[0],g=p[1],v=Object(c.useState)({email:"",password:""}),N=Object(l.a)(v,2),w=N[0],y=N[1];function k(e){var t=Object(i.a)({},w);t[e.target.name]=e.target.value,y(t)}function S(){return(S=Object(d.a)(m.a.mark((function t(s){var c,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),o(!0),!(c=T()).error){t.next=8;break}g(c.error.details),o(!1),t.next=13;break;case 8:return t.next=10,h.a.post("https://route-egypt-api.herokuapp.com/signin",w);case 10:a=t.sent,"success"===(r=a.data).message?(localStorage.setItem("userToken",r.token),e.getUserInfo(),e.history.push("/home"),o(!1)):(o(!1),n(r.message));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return f.a.object({email:f.a.string().email({minDomainSegments:2,tlds:{allow:["com","net"]}}),password:f.a.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))}).validate(w,{abortEarly:!1})}return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"py-4",children:[Object(O.jsx)("h1",{className:"mb-4",children:"Login"}),Object(O.jsxs)("form",{onSubmit:function(e){return S.apply(this,arguments)},children:[a&&Object(O.jsxs)("div",{className:"alert alert-danger",children:[" ",a," "]}),u.map((function(e,t){return 1===t?Object(O.jsx)("div",{className:"alert alert-danger p-2",children:" wrong password"},t):Object(O.jsxs)("div",{className:"alert alert-danger p-2",children:[" ",e.message," "]},t)})),Object(O.jsx)("label",{htmlFor:"email",className:"mb-2",children:"Email"}),Object(O.jsx)("input",{onChange:k,className:"form-control mb-3",type:"email",name:"email"}),Object(O.jsx)("label",{htmlFor:"password",className:"mb-2",children:"Password"}),Object(O.jsx)("input",{onChange:k,className:"form-control mb-3",type:"password",name:"password"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-info mt-3 text-white",children:b?Object(O.jsx)("i",{className:"fas fa-spinner  fa-spin"}):"Login"})]})]})})}function w(){return Object(O.jsx)("div",{children:"hi"})}var y=s(16);function k(){var e=Object(y.useContext)(p).trendingMovies;return Object(O.jsxs)("div",{className:"row py-5",children:[Object(O.jsx)("div",{className:"col-md-6 text-center d-flex align-items-center",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"brdr my-3 w-25"}),Object(O.jsxs)("h2",{children:["Trending Movies",Object(O.jsx)("br",{}),"to watch ",Object(O.jsx)("br",{})," right now"]}),Object(O.jsx)("div",{className:"brdr my-3"})]})}),e.map((function(e,t){return Object(O.jsx)("div",{className:"col-md-3 mb-3",children:Object(O.jsxs)("div",{className:"movie",children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,alt:e.title,className:"w-100"}),Object(O.jsx)("h3",{className:"h5",children:e.title})]})},t)}))]})}var S=s(9),T=s.p+"static/media/logo.d481a09d.webp";function _(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("nav",{className:"d-flex justify-content-between p-3 align-items-center",children:[Object(O.jsxs)("ul",{className:"list-unstyled d-flex",children:[Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)(S.b,{to:"/home",children:Object(O.jsx)("img",{src:T,alt:"logo ",className:" logo"})})}),e.loginUser?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)(S.b,{to:"/home",activeClassName:"active",children:"Home"})}),Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)(S.b,{to:"/movies",children:"Movies"})}),Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)(S.b,{to:"/people",children:"People"})}),Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)(S.b,{to:"/tv",children:"Tv"})})]}):""]}),Object(O.jsxs)("ul",{className:"list-unstyled d-flex",children:[Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)("a",{href:"https://www.facebook.com/",children:Object(O.jsx)("i",{className:"fab fa-facebook-f "})})}),Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)("a",{href:"https://github.com/niazyeladawy",target:"blank",children:Object(O.jsx)("i",{className:"fab fa-github "})})}),Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)("a",{href:"https://www.facebook.com/",children:Object(O.jsx)("i",{className:"fab fa-twitter "})})}),e.loginUser?Object(O.jsx)("li",{className:"px-2 logout",onClick:e.logOut,children:"Logout"}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)(S.b,{to:"/register",children:"Register"})}),Object(O.jsx)("li",{className:"px-2",children:Object(O.jsx)(S.b,{to:"/login",children:"Login"})})]})]})]})})}function C(){var e=Object(y.useContext)(p).trendingPeople;return Object(O.jsxs)("div",{className:"row py-5",children:[Object(O.jsx)("div",{className:"col-md-6 text-center d-flex align-items-center",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"brdr my-3 w-25"}),Object(O.jsxs)("h2",{children:["Trending People",Object(O.jsx)("br",{}),"to watch ",Object(O.jsx)("br",{})," right now"]}),Object(O.jsx)("div",{className:"brdr my-3"})]})}),e.map((function(e,t){return Object(O.jsx)("div",{className:"col-md-3 mb-3",children:Object(O.jsxs)("div",{className:"people",children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+e.profile_path,alt:e.name,className:"w-100"}),Object(O.jsx)("h3",{className:"h5",children:e.name})]})},t)}))]})}function F(e){return localStorage.getItem("userToken")?e.contex?Object(O.jsx)(e.contex,{children:Object(O.jsxs)(b.b,{path:e.path,children:[" ",Object(O.jsx)(e.component,{})," "]})}):void 0:Object(O.jsx)(b.a,{to:"/login"})}function E(e){var t=Object(c.useState)({first_name:"",last_name:"",email:"",password:"",age:""}),s=Object(l.a)(t,2),a=s[0],n=s[1],r=Object(c.useState)(""),j=Object(l.a)(r,2),b=j[0],o=j[1],x=Object(c.useState)(!1),p=Object(l.a)(x,2),u=p[0],g=p[1],v=Object(c.useState)([]),N=Object(l.a)(v,2),w=N[0],y=N[1];function k(e){var t=Object(i.a)({},a);t[e.target.name]=e.target.value,n(t)}function S(){return(S=Object(d.a)(m.a.mark((function t(s){var c,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),g(!0),!(c=T()).error){t.next=8;break}g(!1),y(c.error.details),t.next=13;break;case 8:return t.next=10,h.a.post("https://route-egypt-api.herokuapp.com/signup",a);case 10:n=t.sent,(r=n.data).errors?(o(r.message),g(!1)):(g(!1),e.history.push("/login"));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(){return f.a.object({first_name:f.a.string().min(3).max(15).required(),last_name:f.a.string().min(3).max(15).required(),age:f.a.number().min(16).max(80).required(),email:f.a.string().email({minDomainSegments:2,tlds:{allow:["com","net"]}}),password:f.a.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))}).validate(a,{abortEarly:!1})}return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"py-4",children:[Object(O.jsx)("h1",{className:"mb-4",children:"Register Now"}),Object(O.jsxs)("form",{onSubmit:function(e){return S.apply(this,arguments)},children:[b&&Object(O.jsxs)("div",{className:"alert alert-danger",children:[" ",b," "]}),w.map((function(e,t){return Object(O.jsxs)("div",{className:"alert alert-danger p-2",children:[" ",e.message," "]},t)})),Object(O.jsx)("label",{htmlFor:"first_name",className:"mb-2",children:"First Name"}),Object(O.jsx)("input",{onChange:k,className:"form-control mb-3",type:"text",name:"first_name"}),Object(O.jsx)("label",{htmlFor:"last_name",className:"mb-2",children:"Last Name"}),Object(O.jsx)("input",{onChange:k,className:"form-control mb-3",type:"text",name:"last_name"}),Object(O.jsx)("label",{htmlFor:"email",className:"mb-2",children:"Email"}),Object(O.jsx)("input",{onChange:k,className:"form-control mb-3",type:"email",name:"email"}),Object(O.jsx)("label",{htmlFor:"password",className:"mb-2",children:"Password"}),Object(O.jsx)("input",{onChange:k,className:"form-control mb-3",type:"password",name:"password"}),Object(O.jsx)("label",{htmlFor:"age",className:"mb-2",children:"Age"}),Object(O.jsx)("input",{onChange:k,className:"form-control mb-3",type:"number",name:"age"}),Object(O.jsx)("button",{type:"submit",className:"btn btn-info mt-3 text-white",children:u?Object(O.jsx)("i",{className:"fas fa-spinner  fa-spin"}):"Register"})]})]})})}function P(){var e=Object(y.useContext)(p).trendingTv;return Object(O.jsxs)("div",{className:"row py-5",children:[Object(O.jsx)("div",{className:"col-md-6 text-center d-flex align-items-center",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"brdr my-3 w-25"}),Object(O.jsxs)("h2",{children:["Trending Tv",Object(O.jsx)("br",{}),"to watch ",Object(O.jsx)("br",{})," right now"]}),Object(O.jsx)("div",{className:"brdr my-3"})]})}),e.map((function(e,t){return Object(O.jsx)("div",{className:"col-md-3 mb-3",children:Object(O.jsxs)("div",{className:"tv",children:[Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/"+e.poster_path,alt:e.name,className:"w-100"}),Object(O.jsx)("h3",{className:"h5",children:e.name})]})},t)}))]})}var I=function(){var e=Object(b.g)(),t=Object(c.useState)(null),s=Object(l.a)(t,2),a=s[0],n=s[1];function r(){var e=localStorage.getItem("userToken"),t=Object(j.a)(e);n(t)}return Object(c.useEffect)((function(){localStorage.getItem("userToken")&&r()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)(_,{loginUser:a,logOut:function(){localStorage.removeItem("userToken"),n(null),e.push("/login")}}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(F,{path:"/movies",component:k,contex:u}),Object(O.jsx)(F,{path:"/tv",component:P,contex:u}),Object(O.jsx)(F,{path:"/people",component:C,contex:u}),Object(O.jsx)(F,{path:"/home",component:g,loginUser:a,contex:u}),Object(O.jsx)(F,{path:"/moviedetails",component:w}),Object(O.jsx)(b.b,{path:"/register",render:function(e){return Object(O.jsx)(E,Object(i.a)({},e))}}),Object(O.jsx)(b.b,{path:"/login",render:function(e){return Object(O.jsx)(N,Object(i.a)(Object(i.a)({},e),{},{getUserInfo:r}))}}),Object(O.jsx)(b.a,{from:"/",exact:!0,to:"/home"})]})})]})};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(S.a,{basename:"/#/",children:Object(O.jsx)(I,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.6f5d52c9.chunk.js.map