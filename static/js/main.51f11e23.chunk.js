(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={btn:"FeedbackOptions_btn__3hOmV"}},,,,function(t,e,n){t.exports={sectionTitle:"Section_sectionTitle__12JAT"}},function(t,e,n){t.exports={statisticsList:"Statistics_statisticsList__1zWQN"}},function(t,e,n){t.exports={notification:"Notification_notification__BXfCf"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(5),a=n.n(s),o=(n(13),n(3)),r=(n(14),n(6)),l=n.n(r),b=n(0),j=function(t){var e=t.title,n=t.children;return Object(b.jsxs)("section",{className:l.a.sectionTitle,children:[e,n]})},d=n(2),u=n.n(d),f=function(t){var e=t.onLeaveFeedback;return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:u.a.btn,name:"good",onClick:e,children:"Good"}),Object(b.jsx)("button",{className:u.a.btn,name:"neutral",onClick:e,children:"Neutral"}),Object(b.jsx)("button",{className:u.a.btn,name:"bad",onClick:e,children:"Bad"})]})},O=n(7),h=n.n(O),x=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,s=t.positivePercentage;return Object(b.jsxs)("ul",{className:h.a.statisticsList,children:[Object(b.jsxs)("li",{children:["Good: ",e]}),Object(b.jsxs)("li",{children:["Neutral: ",n]}),Object(b.jsxs)("li",{children:["Bad: ",c]}),Object(b.jsxs)("li",{children:["Total: ",i]}),Object(b.jsxs)("li",{children:["Positive feedback: ",s,"%"]})]})},k=n(8),m=n.n(k),v=function(t){var e=t.message;return Object(b.jsx)("p",{className:m.a.notification,children:e})};var p=function(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),n=e[0],i=e[1],s=Object(c.useState)(0),a=Object(o.a)(s,2),r=a[0],l=a[1],d=Object(c.useState)(0),u=Object(o.a)(d,2),O=u[0],h=u[1],k=function(){return n+r+O};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{title:"Please leave feedback",children:Object(b.jsx)(f,{onLeaveFeedback:function(t){switch(t.target.name){case"good":i((function(t){return t+1}));break;case"neutral":l((function(t){return t+1}));break;case"bad":h((function(t){return t+1}));break;default:return}}})}),Object(b.jsxs)(j,{title:"Statistics",children:[0===k()&&Object(b.jsx)(v,{message:"No feedback given"}),0!==k()&&Object(b.jsx)(x,{good:n,neutral:r,bad:O,total:k(),positivePercentage:Math.round(n/k()*100)})]})]})};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.51f11e23.chunk.js.map