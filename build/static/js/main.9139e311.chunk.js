(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{34:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(20),s=c.n(a),i=c(5),b=c(0);var o=function(){return Object(b.jsx)("header",{className:"jumbotron bg-dark",children:Object(b.jsxs)("div",{className:"container text-white",children:[Object(b.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(b.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})};var d=function(){return Object(b.jsx)("div",{className:"NotFound",children:Object(b.jsx)("h1",{children:"Not Found"})})},l=c(2),j=c.n(l),u=c(4),h=c(6),x=c(3),p=c(22),O=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"http://localhost:5000",m=new Headers;function f(e){e.cards;return Object(p.a)(e,["cards"])}function v(e,t,c){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(j.a.mark((function e(t,c,r){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((n=e.sent).status<200||n.status>399)){e.next=6;break}throw new Error("".concat(n.status," - ").concat(n.statusText));case 6:if(204!==n.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,n.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(r));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"/decks?_embed=cards"),e.next=3,v(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(j.a.mark((function e(t,c){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks"),n={method:"POST",headers:m,body:JSON.stringify(f(t)),signal:c},e.next=4,v(r,n,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(j.a.mark((function e(t,c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks/").concat(t,"?_embed=cards"),e.next=3,v(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(j.a.mark((function e(t,c){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks/").concat(t.id,"?_embed=cards"),n={method:"PUT",headers:m,body:JSON.stringify(f(t)),signal:c},e.next=4,v(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(j.a.mark((function e(t,c){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/decks/").concat(t),n={method:"DELETE",signal:c},e.next=4,v(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e,t){return _.apply(this,arguments)}function _(){return(_=Object(u.a)(j.a.mark((function e(t,c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards?deckId=").concat(t),e.next=3,v(r,{signal:c},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,c){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(j.a.mark((function e(t,c,r){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(O,"/cards"),c.deckId=Number(t),a={method:"POST",headers:m,body:JSON.stringify(c),signal:r},e.next=5,v(n,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(j.a.mark((function e(t,c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards/").concat(t),e.next=3,v(r,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return R.apply(this,arguments)}function R(){return(R=Object(u.a)(j.a.mark((function e(t,c){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards/").concat(t.id),n={method:"PUT",headers:m,body:JSON.stringify(t)},e.next=4,v(r,n,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){return B.apply(this,arguments)}function B(){return(B=Object(u.a)(j.a.mark((function e(t,c){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(O,"/cards/").concat(t),n={method:"DELETE",signal:c},e.next=4,v(r,n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}m.append("Content-Type","application/json");var Y=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:t=e.sent,n(t),e.next=14;break;case 7:if(e.prev=7,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=13;break}console.log("Aborted"),e.next=14;break;case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var a=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.target,r=c.value,window.confirm("Delete deck ID ".concat(r,"? You will not be able to recover it."))&&function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(r);case 3:return e.next=5,y();case 5:t=e.sent,n(t),e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=15;break}console.log("Aborted"),e.next=16;break;case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.length>0?Object(b.jsx)("div",{children:c.map((function(e){return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row card-header",children:[Object(b.jsx)("div",{className:"col-10",children:Object(b.jsx)("h4",{children:e.name})}),Object(b.jsx)("div",{className:"col-2",children:Object(b.jsxs)("p",{children:[" ",e.cards.length," cards"]})})]})}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("p",{className:"card-text",children:e.description}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row justify-content-between",children:[Object(b.jsxs)("div",{className:"col-4",children:[Object(b.jsx)(x.b,{to:"decks/".concat(e.id),className:"btn btn-secondary",children:"View"})," \xa0",Object(b.jsx)(x.b,{to:"decks/".concat(e.id,"/study"),className:"btn btn-primary",children:"Study"})]}),Object(b.jsx)("div",{className:"col-1",children:Object(b.jsx)("button",{className:"btn btn-danger",value:e.id,onClick:a,children:"Delete"})})]})})]})]})}))}):"Please add a deck."};var K=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(x.b,{to:"/decks/new",className:"btn btn-secondary",children:"Create Deck"})}),Object(b.jsx)("br",{}),Object(b.jsx)(Y,{})]})};var W=function(){var e=Object(i.g)().deckId,t=Object(r.useState)(!0),c=Object(h.a)(t,2),n=c[0],a=c[1],s=Object(r.useState)(0),o=Object(h.a)(s,2),d=o[0],l=o[1],p=Object(r.useState)({}),O=Object(h.a)(p,2),m=O[0],f=O[1],v=Object(r.useState)({}),k=Object(h.a)(v,2),y=k[0],w=k[1];Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:c=t.sent,w(c),f(c.cards),t.next=15;break;case 8:if(t.prev=8,t.t0=t.catch(0),"AbortError"!==t.t0.name){t.next=14;break}console.log("Aborted"),t.next=15;break;case 14:throw t.t0;case 15:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}f({}),function(){t.apply(this,arguments)}()}),[e]);var N=Object(i.f)();function g(){return Object(b.jsx)("div",{className:"navigation",children:Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/",children:"Home"})},"0"),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/decks/".concat(e),children:y.name})},"1"),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Study"},"2")]})})})}return m.length>2?(console.log(m[0].front),Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsxs)("h2",{children:["Study: ",y.name]}),Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("h5",{className:"card-title",children:["Card ",d+1," of ",m.length]}),Object(b.jsx)("p",{className:"card-text",children:"".concat(n?m[d].front:m[d].back)}),Object(b.jsx)("button",{className:"btn btn-secondary",onClick:function(){a(!n)},children:"Flip"})," \xa0",n?" ":Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){d+1<m.length?(l(d+1),a(!0)):window.confirm("Restart cards?\n            \n            Click 'cancel' to return to the home page.")?(l(0),a(!0)):N.push("/")},children:"Next"})]})})]})):Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsxs)("h2",{children:["Study: ",y.name]}),Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:"Not Enough Cards."}),Object(b.jsxs)("p",{className:"card-text",children:["You need at least 3 cards to study. There are ",m.length," cards in this deck."]}),Object(b.jsx)(x.b,{to:"/decks/".concat(e,"/cards/new"),className:"btn btn-primary",children:"Add Cards"})]})})]})};var V=function(){var e=Object(r.useState)({}),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)({}),s=Object(h.a)(a,2),o=s[0],d=s[1],l=Object(i.g)().deckId;Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(l);case 3:t=e.sent,console.log(t),n(t),d(t.cards),e.next=16;break;case 9:if(e.prev=9,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=15;break}console.log("Aborted"),e.next=16;break;case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}d({}),function(){e.apply(this,arguments)}()}),[l]);var p=Object(i.f)(),O=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.confirm("Delete deck ID ".concat(l,"? You will not be able to recover it."))&&function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(l);case 3:p.push("/"),e.next=13;break;case 6:if(e.prev=6,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=12;break}console.log("Aborted"),e.next=13;break;case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=t.target,r=c.value,window.confirm("Delete card ID ".concat(r,"? You will not be able to recover it."))&&function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U(r);case 3:return e.next=5,T(l);case 5:t=e.sent,console.log(l,t),d(t),e.next=17;break;case 10:if(e.prev=10,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=16;break}console.log("Aborted"),e.next=17;break;case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.length>0?Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/",children:"Home"})},"0"),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:c.name},"1")]})}),Object(b.jsx)("h3",{children:c.name}),Object(b.jsx)("p",{children:c.description}),Object(b.jsxs)("div",{className:"row justify-content-between",children:[Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsx)(x.b,{to:"/decks/".concat(l,"/edit"),className:"btn btn-secondary",children:"Edit"})," \xa0",Object(b.jsx)(x.b,{to:"/decks/".concat(l,"/study"),className:"btn btn-primary",children:"Study"})," \xa0",Object(b.jsx)(x.b,{to:"/decks/".concat(l,"/cards/new"),className:"btn btn-primary",children:"Add Cards"})]}),Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)("button",{onClick:O,className:"btn btn-danger",children:"Delete"})})]}),Object(b.jsx)("br",{}),Object(b.jsx)("heading",{children:Object(b.jsx)("h2",{children:"Cards"})}),Object(b.jsx)("br",{}),o.map((function(e){return Object(b.jsx)("div",{className:"card",children:Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row justify-content-start",children:[Object(b.jsx)("div",{className:"col-6",children:e.front}),Object(b.jsx)("div",{className:"col-6",children:e.back})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-9"}),Object(b.jsxs)("div",{className:"col-3",children:[Object(b.jsx)(x.b,{to:"/decks/".concat(l,"/cards/").concat(e.id,"/edit"),className:"btn btn-secondary",children:"Edit"})," \xa0",Object(b.jsx)("button",{onClick:m,value:e.id,className:"btn btn-danger",children:"Delete"})]})]})]})})})}))]}):Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/",children:"Home"})},"0"),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:c.name},"1")]})}),Object(b.jsx)("h3",{children:c.name}),Object(b.jsx)("p",{children:c.description}),Object(b.jsxs)("div",{className:"row justify-content-between",children:[Object(b.jsxs)("div",{className:"col-8",children:[Object(b.jsx)(x.b,{to:"/decks/".concat(l,"/edit"),className:"btn btn-secondary",children:"Edit"})," \xa0",Object(b.jsx)(x.b,{to:"/decks/".concat(l,"/study"),className:"btn btn-primary",children:"Study"})," \xa0",Object(b.jsx)(x.b,{to:"/decks/".concat(l,"/cards/new"),className:"btn btn-primary",children:"Add Cards"})]}),Object(b.jsx)("div",{className:"col-2",children:Object(b.jsx)("button",{onClick:O,className:"btn btn-danger",children:"Delete"})})]}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"No Cards, Please add some."})]})})},M=c(12),q=c(8),z=function(e){var t=e.formData,c=e.handleChange;return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Name:"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("input",{id:"name",type:"text",name:"name",onChange:c,value:t.name,style:{width:"100%"}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Description:"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{id:"description",type:"textarea",name:"description",rows:"3",onChange:c,value:t.description,style:{width:"100%"}}),Object(b.jsx)("br",{})]})};var G=function(){var e=Object(r.useState)(Object(q.a)({},{name:"",description:""})),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(i.f)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/",children:"Home"})},"0"),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create Deck"},"1")]})}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"Create Deck"}),Object(b.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(c);case 3:t=e.sent,a.push("/decks/".concat(t.id)),e.next=14;break;case 7:if(e.prev=7,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=13;break}console.log("Aborted"),e.next=14;break;case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()},children:[Object(b.jsx)(z,{formData:c,handleChange:function(e){var t=e.target,r=t.value;n(Object(q.a)(Object(q.a)({},c),{},Object(M.a)({},t.name,r)))}}),Object(b.jsx)(x.b,{to:"/",className:"btn btn-secondary",children:"Cancel"})," \xa0",Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})};var Q=function(){var e=Object(i.g)().deckId,t=Object(r.useState)(Object(q.a)({},{name:"",description:""})),c=Object(h.a)(t,2),n=c[0],a=c[1];Object(r.useEffect)((function(){function t(){return(t=Object(u.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:c=t.sent,a(c),t.next=14;break;case 7:if(t.prev=7,t.t0=t.catch(0),"AbortError"!==t.t0.name){t.next=13;break}console.log("Aborted"),t.next=14;break;case 13:throw t.t0;case 14:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]);var s=Object(i.f)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/",children:"Home"})},"0"),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/decks/".concat(e),children:"Deck Name"})},"1"),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit Deck"},"2")]})}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"Edit Deck"}),Object(b.jsxs)("form",{onSubmit:function(t){function c(){return(c=Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(n);case 3:s.push("/decks/".concat(e)),t.next=13;break;case 6:if(t.prev=6,t.t0=t.catch(0),"AbortError"!==t.t0.name){t.next=12;break}console.log("Aborted"),t.next=13;break;case 12:throw t.t0;case 13:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}t.preventDefault(),function(){c.apply(this,arguments)}()},children:[Object(b.jsx)(z,{formData:n,handleChange:function(e){var t=e.target,c=t.value;a(Object(q.a)(Object(q.a)({},n),{},Object(M.a)({},t.name,c)))}}),Object(b.jsx)(x.b,{to:"/decks/".concat(e),className:"btn btn-secondary",children:"Cancel"})," \xa0",Object(b.jsx)("button",{type:"submit",value:"submit",className:"btn btn-primary",children:"Save"})]})]})},X=function(e){var t=e.formData,c=e.handleChange;return Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{children:"Front:"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{id:"front",type:"text",name:"front",rows:"3",onChange:c,value:t.front,style:{width:"100%"}}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Back:"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("textarea",{id:"back",type:"textarea",name:"back",rows:"3",onChange:c,value:t.back,style:{width:"100%"}})]})};var Z=function(){var e=Object(i.g)(),t=Object(r.useState)([]),c=Object(h.a)(t,2),n=c[0],a=c[1],s=e.deckId,o={front:"",back:"",deckId:s},d=Object(r.useState)(Object(q.a)({},o)),l=Object(h.a)(d,2),p=l[0],O=l[1];return Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(s);case 3:t=e.sent,a(t),e.next=14;break;case 7:if(e.prev=7,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=13;break}console.log("Aborted"),e.next=14;break;case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]),n?Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/",children:"Home"})},"0"),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/decks/".concat(s),children:n.name})},"1"),Object(b.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Add Card"},"2")]})}),Object(b.jsx)("br",{}),Object(b.jsxs)("h2",{children:[n.name,": Add Card"]}),Object(b.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H(s,p);case 3:O(o),e.next=13;break;case 6:if(e.prev=6,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=12;break}console.log("Aborted"),e.next=13;break;case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}e.preventDefault(),console.log("Submitted:",p),function(){t.apply(this,arguments)}()},children:[Object(b.jsx)(X,{formData:p,handleChange:function(e){var t=e.target,c=t.value;O(Object(q.a)(Object(q.a)({},p),{},Object(M.a)({},t.name,c)))}}),Object(b.jsx)(x.b,{to:"/decks/".concat(s),className:"btn btn-secondary",children:"Done"})," \xa0",Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]}):"Loading..."};var $=function(){var e=Object(i.g)(),t=e.deckId,c=e.cardId,n=Object(r.useState)({}),a=Object(h.a)(n,2),s=a[0],o=a[1],d=Object(r.useState)({}),l=Object(h.a)(d,2),p=l[0],O=l[1];Object(r.useEffect)((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(t);case 3:return r=e.sent,o(r),e.next=7,F(c);case 7:n=e.sent,O(n),e.next=18;break;case 11:if(e.prev=11,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=17;break}console.log("Aborted"),e.next=18;break;case 17:throw e.t0;case 18:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}o({}),function(){e.apply(this,arguments)}()}),[t,c]);var m=Object(i.f)();return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{"aria-label":"breadcrumb",children:Object(b.jsxs)("ol",{className:"breadcrumb",children:[Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/",children:"Home"})},"0"),Object(b.jsx)("li",{className:"breadcrumb-item",children:Object(b.jsx)(x.b,{to:"/decks/".concat(t),children:s.name})},"1"),Object(b.jsxs)("li",{className:"breadcrumb-item active","aria-current":"page",children:["Edit Card ",c]},"2")]})}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{children:"Edit Card"}),Object(b.jsxs)("form",{onSubmit:function(e){function c(){return(c=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L(p);case 3:e.sent,m.push("/decks/".concat(t)),e.next=14;break;case 7:if(e.prev=7,e.t0=e.catch(0),"AbortError"!==e.t0.name){e.next=13;break}console.log("Aborted"),e.next=14;break;case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}e.preventDefault(),console.log("Submitted:",p),function(){c.apply(this,arguments)}()},children:[Object(b.jsx)(X,{formData:p,handleChange:function(e){var t=e.target,c=t.value;O(Object(q.a)(Object(q.a)({},p),{},Object(M.a)({},t.name,c)))}}),Object(b.jsx)(x.b,{to:"/decks/".concat(t),className:"btn btn-secondary",children:"Cancel"})," \xa0",Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})};var ee=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(o,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(i.c,{children:[Object(b.jsx)(x.a,{exact:!0,path:"/",children:Object(b.jsx)(K,{})}),Object(b.jsx)(x.a,{path:"/decks/:deckId/study",children:Object(b.jsx)(W,{})}),Object(b.jsx)(x.a,{path:"/decks/new",children:Object(b.jsx)(G,{})}),Object(b.jsx)(x.a,{path:"/decks/:deckId/cards/:cardId/edit",children:Object(b.jsx)($,{})}),Object(b.jsx)(x.a,{path:"/decks/:deckId/cards/new",children:Object(b.jsx)(Z,{})}),Object(b.jsx)(x.a,{path:"/decks/:deckId/edit",children:Object(b.jsx)(Q,{})}),Object(b.jsx)(x.a,{path:"/decks/:deckId",children:Object(b.jsx)(V,{})}),Object(b.jsx)(x.a,{children:Object(b.jsx)(d,{})})]})})]})};var te=function(){return Object(b.jsx)("div",{className:"app-routes",children:Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"/",children:Object(b.jsx)(ee,{})})})})};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x.a,{children:Object(b.jsx)(te,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9139e311.chunk.js.map