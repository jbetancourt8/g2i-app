(this["webpackJsonpg2i-app"]=this["webpackJsonpg2i-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(17),a=c.n(r),o=(c(23),c(7)),i=c(2),j=(c(24),c(25),c(1));var l=function(){return Object(j.jsxs)("div",{className:"home_container",children:[Object(j.jsx)("h1",{children:"Welcome to the Trivia Challenge!"}),Object(j.jsx)("p",{children:"You will be presented with 10 True or False questions."}),Object(j.jsx)("p",{children:"Can you score 100%?"}),Object(j.jsx)(o.b,{style:{textDecoration:"none"},to:"/quiz",children:Object(j.jsx)("button",{className:"home_button",children:"Begin"})})]})},u=c(10),b=(c(32),c(33),c(15)),d=function(e){var t=e.data,c=e.score;return console.log(t),Object(j.jsxs)("div",{className:"scoreboard_container",children:[Object(j.jsxs)("h1",{children:["You scored ",c,"/10"]}),t.map((function(e,t){return Object(j.jsx)("div",{className:"scoreboard_card",children:Object(j.jsxs)("div",{className:"scoreboard_list",children:[e.user_answer===e.correct_answer?Object(j.jsx)(b.a,{size:35,className:"scoreboard_icon",color:"#03634a"}):Object(j.jsx)(b.b,{size:35,className:"scoreboard_icon",color:"#a30023"}),Object(j.jsx)("p",{dangerouslySetInnerHTML:{__html:e.question}})]},t)})})),Object(j.jsx)(o.b,{style:{textDecoration:"none"},to:"/",children:Object(j.jsx)("button",{className:"scoreboard_button",type:"button",children:"Play again?"})})]})};var h=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(0),a=Object(u.a)(r,2),o=a[0],i=a[1],l=Object(n.useState)(0),b=Object(u.a)(l,2),h=b[0],O=b[1],x=Object(n.useState)(!1),_=Object(u.a)(x,2),p=_[0],f=_[1];Object(n.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean").then((function(e){return e.json()})).then((function(e){s(e.results)}))}),[]);var m=function(e){c[o].user_answer=e,e===c[o].correct_answer&&O(h+1);var t=o+1;t<c.length?i(t):f(!0)};return c.length>0?p?Object(j.jsx)("div",{className:"quiz_container_score",children:Object(j.jsx)(d,{data:c,score:h})}):Object(j.jsxs)("div",{className:"quiz_container",children:[Object(j.jsxs)("p",{children:["Question ",o+1," / ",c.length]}),Object(j.jsx)("h2",{dangerouslySetInnerHTML:{__html:c[o].question}}),Object(j.jsxs)("div",{className:"quiz_button_container",children:[Object(j.jsx)("button",{type:"button",onClick:function(){return m("True")},className:"quiz_button quiz_button_true",children:"TRUE"}),Object(j.jsx)("button",{type:"button",onClick:function(){return m("False")},className:"quiz_button quiz_button_false",children:"False"})]})]}):Object(j.jsx)("div",{className:"quiz_container",children:Object(j.jsx)("h2",{children:"Loading..."})})};c(34);var O=function(){var e=Object(i.g)(),t=Object(i.f)();return console.log(e),Object(j.jsxs)("div",{className:"score_container",children:[Object(j.jsx)("h1",{children:"You scored"}),Object(j.jsxs)("h2",{children:[e.state.data,"/10"]}),Object(j.jsx)("div",{className:"score_button",onClick:function(){return t.replace("/")},children:"Play again?"})]})};var x=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",children:Object(j.jsx)(l,{})}),Object(j.jsx)(i.a,{path:"/quiz",children:Object(j.jsx)(h,{})}),Object(j.jsx)(i.a,{path:"/score",children:Object(j.jsx)(O,{})})]})})};a.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5e81d5a0.chunk.js.map