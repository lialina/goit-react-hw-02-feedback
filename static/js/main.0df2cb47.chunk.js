(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,function(e,t,n){e.exports={list:"FeedbackOptions_list__kYxcb",item:"FeedbackOptions_item__2ZG7C"}},,,,,function(e,t,n){e.exports={container:"Container_container__fqBjw"}},function(e,t,n){},function(e,t,n){e.exports={section:"Section_section__3jq6m"}},function(e,t,n){},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),o=n.n(i),r=(n(18),n(19),n(5)),s=n(6),d=n(7),l=n(13),b=n(12),u=n(8),j=n.n(u),h=n(0);var p=function(e){var t=e.children;return Object(h.jsx)("div",{className:j.a.container,children:t})},O=n(9),k=n.n(O),v=n(10),f=n.n(v);var x=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("div",{className:f.a.section,children:[Object(h.jsx)("h2",{children:t}),n]})},g=n(3),m=n.n(g);var F=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("ul",{className:m.a.list,children:t.map((function(e){return Object(h.jsx)("li",{className:m.a.item,children:Object(h.jsx)("button",{type:"button",onClick:function(){n(e)},children:e[0].toUpperCase()+e.slice(1)})},e)}))})},_=n(11),C=n.n(_);var N=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage;return Object(h.jsxs)("div",{className:C.a.container,children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",c]}),Object(h.jsxs)("p",{children:["Total: ",a]}),Object(h.jsxs)("p",{children:["Positive feedback: ",i,"%"]})]})};var P=function(e){var t=e.goodFeedback,n=e.neutralFeedback,c=e.badFeedback,a=e.total,i=e.percentage,o=e.handleBtnClick,r=e.options;return Object(h.jsxs)("div",{className:k.a.container,children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(F,{options:r,onLeaveFeedback:o})}),Object(h.jsx)(x,{title:"Statistics",children:0===a?Object(h.jsx)("p",{children:"No feedback given"}):Object(h.jsx)(N,{good:t,neutral:n,bad:c,total:a,positivePercentage:i})})]})},B=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleBtnClick=function(t){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage=function(t){return Math.round(100*e.state.good/t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage(a),o=Object.keys(this.state);return Object(h.jsx)(p,{children:Object(h.jsx)(P,{goodFeedback:t,neutralFeedback:n,badFeedback:c,total:a,percentage:i,handleBtnClick:this.handleBtnClick,options:o})})}}]),n}(c.Component);o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.0df2cb47.chunk.js.map