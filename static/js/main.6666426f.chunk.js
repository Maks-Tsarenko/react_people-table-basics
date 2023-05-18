(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(10),s=(c(35),c(36),c(4)),r=c(6),i=c(5),j=c(0),l=(c(37),c(2)),o=(c(38),c(3)),b=function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})};function d(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var h=c(12),p=c.n(h),x=function(e,t){var c=e.find((function(e){return e.name===t}));return c?Object(o.jsx)(a.b,{className:p()({"has-text-danger":"f"===c.sex}),to:"/people/".concat(c.slug),children:c.name}):t||"-"},O=function(e){var t=e.people,c=e.selectedPerson,n=void 0===c?"":c;return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Sex"}),Object(o.jsx)("th",{children:"Born"}),Object(o.jsx)("th",{children:"Died"}),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"person",className:p()({"has-background-warning":n===e.slug}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(a.b,{to:"/people/".concat(e.slug),className:p()({"has-text-danger":"f"===e.sex}),children:e.name})}),Object(o.jsx)("td",{children:e.sex}),Object(o.jsx)("td",{children:e.born}),Object(o.jsx)("td",{children:e.died}),Object(o.jsx)("td",{children:x(t,e.motherName)}),Object(o.jsx)("td",{children:x(t,e.fatherName)})]},e.slug)}))})]})},u=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return p()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(o.jsx)(a.c,{className:function(e){var t=e.isActive;return p()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},m=function(e){var t=e.people,c=Object(l.q)().personSlug,n=void 0===c?"":c;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)(O,{people:t,selectedPerson:n})]})},v=function(){var e=Object(j.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(j.useState)(!1),h=Object(i.a)(a,2),p=h[0],x=h[1],O=Object(j.useState)(!1),v=Object(i.a)(O,2),f=v[0],g=v[1],N=function(){var e=Object(r.a)(Object(s.a)().mark((function e(){var t;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),x(!1),e.prev=2,e.next=5,d();case 5:t=e.sent,n(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),x(!0);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(j.useEffect)((function(){N()}),[]),Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(u,{}),Object(o.jsx)("main",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"box table-container",children:[f&&Object(o.jsx)(b,{}),!f&&p&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c.length&&!f&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!f&&!p&&Object(o.jsxs)(l.d,{children:[Object(o.jsx)(l.b,{path:"/",element:Object(o.jsx)("h1",{className:"title",children:"Home Page"})}),Object(o.jsx)(l.b,{path:"home",element:Object(o.jsx)(l.a,{to:"/",replace:!0})}),Object(o.jsxs)(l.b,{path:"people",children:[Object(o.jsx)(l.b,{index:!0,element:Object(o.jsx)(m,{people:c})}),Object(o.jsx)(l.b,{path:":personSlug",element:Object(o.jsx)(m,{people:c})})]}),Object(o.jsx)(l.b,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})})]})]})})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(o.jsx)(a.a,{children:Object(o.jsx)(v,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.6666426f.chunk.js.map