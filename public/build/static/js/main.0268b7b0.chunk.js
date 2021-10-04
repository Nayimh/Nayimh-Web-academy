(this["webpackJsonpweb-academi"]=this["webpackJsonpweb-academi"]||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c.n(s),n=c(16),a=c.n(n),i=(c(40),c(17)),o=c(4),j=(c(41),c(1)),l=function(){return Object(j.jsx)("div",{className:"aboutContainer mt-5  d-flex text-start",children:Object(j.jsxs)("article",{className:"mt-5 p-2",children:[Object(j.jsx)("h1",{className:"mt-5",children:"We believe Learning is the source of human progress."}),"It has the power to transform our world from illness to health, from poverty to prosperity, from conflict to peace. It has the power to transform our lives for ourselves, for our families, for our communities. No matter who we are or where we are, learning empowers us to change and grow and redefine what\u2019s possible. That\u2019s why access to the best learning is a right, not a privilege. And that\u2019s why Coursera is here. We partner with the best institutions to bring the best learning to every corner of the world. So that anyone, anywhere has the power to transform their life through learning."]})})},h=(c(43),c(44),function(){return Object(j.jsxs)("div",{className:"contactContainer mt-5",children:[Object(j.jsx)("h3",{children:" Contact Us "}),Object(j.jsx)("hr",{}),Object(j.jsxs)("form",{id:"contact-form",children:[Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{type:"text",className:"form-control"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(j.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp"})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"message",children:"Message"}),Object(j.jsx)("textarea",{className:"form-control",rows:"5"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success my-2 w-100",children:"Submit"})]})]})}),b=(c(45),function(){return Object(j.jsx)("div",{className:"Error",children:Object(j.jsx)("h1",{className:"text-danger  p-5 my-5",children:"404 not found."})})}),d=(c(46),function(){return Object(j.jsxs)("div",{className:"footer",children:[Object(j.jsxs)("div",{className:" linkContainer",children:[Object(j.jsx)("a",{href:"/home",children:"Home"}),Object(j.jsx)("a",{href:"/services",children:"Services"}),Object(j.jsx)("a",{href:"/about",children:"About"}),Object(j.jsx)("a",{href:"contact",children:"Contact"})]}),Object(j.jsx)("p",{children:"\xa9Copyright by Web Academy"})]})}),m=c(59),x=c(60),O=c(19),u=c.p+"static/media/logo.01e7f60d.bin",f=(c(47),function(){return Object(j.jsx)("div",{children:Object(j.jsx)(O.a,{bg:"light",expand:"sm",children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(O.a.Brand,{href:"#home",className:"logo",children:Object(j.jsx)("img",{className:" logo",src:u,alt:""})}),Object(j.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(O.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(x.a,{className:"me-auto",children:[Object(j.jsx)(i.b,{className:"navA",to:"/home",activeStyle:{fontWeight:"bold",color:"green"},children:" home "}),Object(j.jsx)(i.b,{className:"navA",to:"/services",activeStyle:{fontWeight:"bold",color:"green"},children:" Services"}),Object(j.jsx)(i.b,{className:"navA",to:"/about",activeStyle:{fontWeight:"bold",color:"green"},children:"about"}),Object(j.jsx)(i.b,{className:"navA",to:"/contact",activeStyle:{fontWeight:"bold",color:"green"},children:" Contact"})]})})]})})})}),p=c(13),g=(c(54),function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1];return Object(s.useEffect)((function(){fetch("./Home.JSON").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(j.jsxs)("div",{className:" my-5 homeContainer",children:[Object(j.jsxs)("div",{className:" heading",children:[Object(j.jsx)("h3",{className:"my-2",children:"Professional Courses."}),Object(j.jsx)("h1",{children:" Get job-ready for an in-demand career "}),Object(j.jsx)("p",{children:"Break into a new field like information technology. No prior experience necessary to get started."}),Object(j.jsxs)("h1",{children:["Courses: ",c.length]}),Object(j.jsx)("hr",{})]}),Object(j.jsx)("div",{className:"cardContainer mx-auto",children:c.map((function(e){return Object(j.jsxs)("div",{className:"homeCard p-2",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.image,alt:""})}),Object(j.jsxs)("h4",{children:["Course Name: ",e.CourseName]})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("h5",{children:["Instructor Name: ",e.Instructor]})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("p",{children:["Price: $",e.Price]})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"bg-success btn w-50",children:"Details"})]})}))})]})}),v=(c(55),function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),c=t[0],r=t[1];return Object(s.useEffect)((function(){fetch("./Services.JSON").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(j.jsxs)("div",{className:"secvicesContainer mt-5",children:[Object(j.jsxs)("div",{className:"textConteiner",children:[Object(j.jsxs)("h1",{className:"my-3",children:["Our Services: ",c.length]}),Object(j.jsx)("p",{children:"Take the next step toward your personal and professional goals with Web Academy."}),Object(j.jsx)("hr",{})]}),Object(j.jsx)("div",{className:"cardContainer",children:c.map((function(e){return Object(j.jsxs)("div",{className:"homeCard p-2",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.image,alt:""})}),Object(j.jsxs)("h4",{children:["service Name: ",e.serviceName]})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("h5",{children:["Instructor Name: ",e.Instructor]})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("p",{children:["Price: $",e.Price]})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"bg-success btn w-50",children:"Details"})]})}))})]})});var N=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(i.a,{children:[Object(j.jsx)(f,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/home",children:Object(j.jsx)(g,{})}),Object(j.jsx)(o.a,{path:"/services",children:Object(j.jsx)(v,{})}),Object(j.jsx)(o.a,{path:"/contact",children:Object(j.jsx)(h,{})}),Object(j.jsx)(o.a,{path:"/about",children:Object(j.jsx)(l,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(g,{})}),Object(j.jsx)(o.a,{path:"*",children:Object(j.jsx)(b,{})})]}),Object(j.jsx)(d,{})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),r(e),n(e),a(e)}))};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),y()}},[[56,1,2]]]);
//# sourceMappingURL=main.0268b7b0.chunk.js.map