(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(4),s=n.n(i),a=(n(9),n(3)),l=(n(10),n(0));var o=function(){var e=Object(r.useState)("0"),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)("0"),s=Object(a.a)(i,2),o=s[0],u=s[1],d=document.getElementById("formula");d&&(d.style.opacity=1);var b=function(e){var t=["+","x","/","-"];if(22===o.length)document.getElementById("result").innerHTML="DIGIT LIMIT MET",setTimeout((function(){document.getElementById("result").innerHTML=o}),500);else if("0"===o)if(document.getElementById("formula").style.opacity=1,"0"===e.target.innerHTML)c(n),u("0");else if("."===e.target.innerHTML)c(n+"."),u("0.");else if("numbers"===e.target.className&&"0"===n)c(e.target.innerHTML),u(e.target.innerHTML);else if("numbers"===e.target.className){for(var r=[],i=0;i<n.length;i++)r.push(n[i]);var s=[].concat(r);s[s.length-1]=e.target.innerHTML,c(s.join("")),u(e.target.innerHTML)}else"operators"===e.target.className&&(c(n+e.target.innerHTML),u(e.target.innerHTML));else if("."===e.target.innerHTML){for(var a=[],l=0;l<o.length;l++)a.push(o[l]);a.some((function(e){return"."===e}))||(c(n+e.target.innerHTML),u(o+e.target.innerHTML))}else"operators"===e.target.className?t.find((function(e){return e===o}))?u(o):"0"===o?(console.log("Target Operators - Term = 0"),c(n)):t.find((function(e){return e===n[n.length-1]}))?u("e.target.innerHTML"):(c(n+String(e.target.innerHTML)),u(e.target.innerHTML)):t.find((function(e){return e===o}))&&"numbers"===e.target.className?(u(e.target.innerHTML),c(n+String(e.target.innerHTML))):(c(n+String(e.target.innerHTML)),u(o+String(e.target.innerHTML)))},m=function(){c("0"),u("0"),document.getElementById("formula").style.opacity=0};return Object(r.useEffect)((function(){return document.getElementById("ac").addEventListener("click",m),function(){document.getElementById("ac").removeEventListener("click",m)}})),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{id:"container",children:Object(l.jsxs)("div",{id:"calculator",children:[Object(l.jsxs)("div",{id:"screen",children:[Object(l.jsx)("div",{id:"formula",children:n}),Object(l.jsx)("div",{id:"result",children:o})]}),Object(l.jsxs)("div",{id:"button-wrapper",children:[Object(l.jsx)("button",{id:"ac",children:"AC"}),Object(l.jsx)("button",{onClick:b,className:"operators",id:"divide",children:"/"}),Object(l.jsx)("button",{onClick:b,className:"operators",id:"multiply",children:"x"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"7",children:"7"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"8",children:"8"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"9",children:"9"}),Object(l.jsx)("button",{onClick:b,className:"operators",id:"subtract",children:"-"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"4",children:"4"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"5",children:"5"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"6",children:"6"}),Object(l.jsx)("button",{onClick:b,className:"operators",id:"add",children:"+"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"1",children:"1"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"2",children:"2"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"3",children:"3"}),Object(l.jsx)("button",{id:"equal",children:"="}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"zero",children:"0"}),Object(l.jsx)("button",{onClick:b,className:"numbers",id:"point",children:"."})]})]})})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.00db787b.chunk.js.map