(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{17:function(t,e,a){},18:function(t,e,a){},20:function(t,e,a){"use strict";a.r(e);var c=a(4),n=a.n(c),r=a(12),i=a.n(r),l=(a(17),a(9)),s=(a(18),a(5)),u=a(6),o=a.n(u),j=a(3),p=a.n(j),b=a.p+"static/media/history.aa0b2459.svg",g=a.p+"static/media/historyWhite.d9ada263.svg",h=a.p+"static/media/divide (1).193c79b5.svg",O=a.p+"static/media/minus-sign.25401b99.svg",m=a.p+"static/media/plus-positive-add-mathematical-symbol.d6249481.svg",d=a.p+"static/media/equal-mathematical-sign.4dd9e3c7.svg",f=a.p+"static/media/multiply-mathematical-sign.634334b9.svg",v=a(0),A=function(t){var e=t.value,a=t.setInput,c=t.img,n=t.isBLack;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("button",{className:o()(p.a.buttonWhite,Object(s.a)({},p.a.buttonBlack,n)),onClick:function(){return a(e)},children:[c?void 0:e,Object(v.jsx)("img",{alt:"",src:c,height:18})]})})},x=a(2),C=a(1),k=function(t,e){switch(e.type){case"number":if(t.isCalculate)return Object(C.a)(Object(C.a)({},t),{},{calculatingArr:[e.number],input:[e.number],isCalculate:!1,result:0});if(t.isLastActionIsPercent)return t;if(!t.isLastActionIsOperation){var a=Object(x.a)(t.calculatingArr);a[a.length-1]=a[a.length-1]+e.number;var c=Object(x.a)(t.input);return 1===c.length&&"0"===c[0]&&(c=[""]),c[c.length-1]=c[c.length-1]+e.number,Object(C.a)(Object(C.a)({},t),{},{calculatingArr:a,isLastActionIsOperation:!1,isCalculate:!1,input:c})}return Object(C.a)(Object(C.a)({},t),{},{calculatingArr:[].concat(Object(x.a)(t.calculatingArr),[e.number]),isLastActionIsOperation:!1,isCalculate:!1,input:[].concat(Object(x.a)(t.input),[e.number])});case"reverse":if(t.isCalculate)return 0===t.result?Object(C.a)(Object(C.a)({},t),{},{result:0}):Object(C.a)(Object(C.a)({},t),{},{calculatingArr:[(-1*t.result).toString()],input:[(-1*t.result).toString()],isCalculate:!1,result:0});if(!t.isLastActionIsOperation&&(1!==t.calculatingArr.length||""!==t.calculatingArr[0])){var n=Object(x.a)(t.calculatingArr);n[n.length-1]=(-1*parseFloat(n[n.length-1])).toString();var r=Object(x.a)(t.input);return r[r.length-1]="("+n[n.length-1],Object(C.a)(Object(C.a)({},t),{},{calculatingArr:n,input:r})}return Object(C.a)(Object(C.a)({},t),{},{calculatingArr:Object(x.a)(t.calculatingArr),input:Object(x.a)(t.input)});case"point":var i=t.calculatingArr[t.calculatingArr.length-1];if(!t.isLastActionIsOperation&&t.calculatingArr.length>0&&!t.isCalculate&&-1===i.search("\\.")){console.log(t.calculatingArr[t.calculatingArr.length-1]);var l=Object(x.a)(t.calculatingArr);l[l.length-1]=l[l.length-1]+".";var s=Object(x.a)(t.input);return s[s.length-1]=s[s.length-1]+".",Object(C.a)(Object(C.a)({},t),{},{calculatingArr:l,isLastActionIsOperation:!1,input:s})}return t;case"percent":var u=t.calculatingArr[t.calculatingArr.length-1];if(t.isCalculate)return Object(C.a)(Object(C.a)({},t),{},{calculatingArr:[t.result.toString(),"%"],input:[t.result.toString()+"%"],isCalculate:!1,result:0,isLastActionIsPercent:!0});if("+"!==u&&"-"!==u&&"x"!==u&&"/"!==u&&"."!==u.charAt(u.length-1)&&"%"!==u){var o=Object(x.a)(t.input);return o[o.length-1]=o[o.length-1]+"%",Object(C.a)(Object(C.a)({},t),{},{calculatingArr:[].concat(Object(x.a)(t.calculatingArr),["%"]),input:o,isLastActionIsPercent:!0})}return t;case"operation":var j=t.calculatingArr[t.calculatingArr.length-1];if(t.isCalculate)return Object(C.a)(Object(C.a)({},t),{},{calculatingArr:[t.result.toString(),e.operation],input:[t.result.toString(),e.operation],isLastActionIsOperation:!0,isCalculate:!1,result:0});if("+"!==j&&"-"!==j&&"x"!==j&&"/"!==j&&"."!==j.charAt(j.length-1)){var p=_(Object(x.a)(t.input));return p.push(e.operation),Object(C.a)(Object(C.a)({},t),{},{calculatingArr:[].concat(Object(x.a)(t.calculatingArr),[e.operation]),isLastActionIsOperation:!0,isLastActionIsPercent:!1,input:p})}return t;case"calculate":var b=t.calculatingArr[t.calculatingArr.length-1];if("+"===b||"-"===b||"x"===b||"/"===b||"."===b.charAt(b.length-1)||t.isCalculate)return t;var g=t.calculatingArr.map((function(t){return t})),h=0,O=0,m=_(Object(x.a)(t.input));if(console.log(g),1!==g.length)for(;1!==g.length;){if(g.find((function(t){return"%"===t}))){for(;g.find((function(t){return"%"===t}));)"%"===g[O]&&("x"===g[O-2]?(h=parseFloat(g[O-1])*parseFloat(g[O-3])/100,g.splice(O-3,4,h.toString())):"/"===g[O-2]?(h=parseFloat(g[O-3])/(parseFloat(g[O-1])/100),g.splice(O-3,4,h.toString())):"+"===g[O-2]?(h=parseFloat(g[O-1])*parseFloat(g[O-3])/100+parseFloat(g[O-3]),g.splice(O-3,4,h.toString())):"-"===g[O-2]?(h=parseFloat(g[O-3])-parseFloat(g[O-1])*parseFloat(g[O-3])/100,g.splice(O-3,4,h.toString())):2!==g.length&&1!==O||(h=parseFloat(g[O-1])/100,g.splice(O-1,2,h.toString())),O=-1),O++;O=0}if(g.find((function(t){return"x"===t||"/"===t}))){for(;g.find((function(t){return"x"===t||"/"===t}));)"/"===g[O]&&(h=parseFloat(g[O-1])/parseFloat(g[O+1]),g.splice(O-1,3,h.toString()),O=-1),"x"===g[O]&&(h=parseFloat(g[O-1])*parseFloat(g[O+1]),g.splice(O-1,3,h.toString()),O=-1),O++;O=0}"+"===g[O]&&(h=parseFloat(g[O-1])+parseFloat(g[O+1]),g.splice(O-1,3,h.toString()),O=-1),"-"===g[O]&&(h=parseFloat(g[O-1])-parseFloat(g[O+1]),g.splice(O-1,3,h.toFixed(1).toString()),O=-1),O++}return Object(C.a)(Object(C.a)({},t),{},{result:h,input:[].concat(Object(x.a)(m),["=",h.toString()]),isCalculate:!0,isLastActionIsPercent:!1});case"setHistory":return Object(C.a)(Object(C.a)({},t),{},{history:e.history});case"clear":return Object(C.a)(Object(C.a)({},t),{},{input:["0"],calculatingArr:[""],isLastActionIsOperation:!1,isLastActionIsPercent:!1,result:0});default:return t}},_=function(t){var e=Object(x.a)(t);return"("===e[e.length-1].charAt(0)&&")"!==e[e.length-1].charAt(e[e.length-1].length-1)&&(e[e.length-1]=e[e.length-1]+")"),e},L=function(){for(var t=[],e=0;e<localStorage.length;e++){var a=localStorage.key(e);null!==a&&t.push(localStorage.getItem(a))}return t.reverse()},S={input:["0"],calculatingArr:[""],isLastActionIsOperation:!1,isLastActionIsPercent:!1,result:0,isCalculate:!1,history:[]},I=function(t){var e=t.isBlack,a=Object(c.useReducer)(k,S),n=Object(l.a)(a,2),r=n[0],i=n[1],u=Object(c.useState)(!1),j=Object(l.a)(u,2),x=j[0],C=j[1];Object(c.useEffect)((function(){if(r.isCalculate){localStorage.setItem("operation".concat(localStorage.length+1),r.input.join(" "));var t=L();i({type:"setHistory",history:t})}}),[r.isCalculate]);var _=function(t){i({type:"number",number:t})},I=function(t){i({type:"operation",operation:t})};return Object(v.jsxs)("div",{className:o()(p.a.calculator,Object(s.a)({},p.a.calculatorBlack,e)),children:[Object(v.jsxs)("div",{className:p.a.resultCont,children:[x&&Object(v.jsx)("div",{className:p.a.history,children:r.history.map((function(t){return Object(v.jsx)("span",{children:t},Math.random())}))}),Object(v.jsx)("div",{className:p.a.result,children:r.input.join(" ")})]}),Object(v.jsxs)("div",{className:o()(p.a.buttonCont,Object(s.a)({},p.a.buttonContBlack,e)),children:[1!==r.input.length||"0"!==r.input[0]?Object(v.jsx)(A,{value:"C",setInput:function(){i({type:"clear"})},isBLack:e}):Object(v.jsx)(A,{value:"AC",setInput:function(){localStorage.clear(),C(!1)},isBLack:e}),Object(v.jsx)(A,{value:"+/-",setInput:function(){i({type:"reverse"})},isBLack:e}),Object(v.jsx)(A,{value:"%",setInput:function(){i({type:"percent"})},isBLack:e}),Object(v.jsx)(A,{value:"/",setInput:I,img:h,isBLack:e})]}),Object(v.jsxs)("div",{className:p.a.buttonCont,children:[["7","8","9"].map((function(t){return Object(v.jsx)(A,{value:t,setInput:_,isBLack:e},t)})),Object(v.jsx)(A,{value:"x",setInput:I,img:f,isBLack:e})]}),Object(v.jsxs)("div",{className:p.a.buttonCont,children:[["4","5","6"].map((function(t){return Object(v.jsx)(A,{value:t,setInput:_,isBLack:e},t)})),Object(v.jsx)(A,{value:"-",setInput:I,img:O,isBLack:e})]}),Object(v.jsxs)("div",{className:p.a.buttonCont,children:[["1","2","3"].map((function(t){return Object(v.jsx)(A,{value:t,setInput:_,isBLack:e},t)})),Object(v.jsx)(A,{value:"+",setInput:I,img:m,isBLack:e})]}),Object(v.jsxs)("div",{className:p.a.buttonCont,children:[Object(v.jsx)(A,{value:"0",setInput:_,isBLack:e}),Object(v.jsx)("button",{className:o()(p.a.buttonWhite,Object(s.a)({},p.a.buttonBlack,e)),onClick:x?function(){return C(!1)}:function(){var t=L();i({type:"setHistory",history:t}),C(!0)},children:Object(v.jsx)("img",{src:e?g:b,alt:"",height:20})}),Object(v.jsx)(A,{value:".",setInput:function(){i({type:"point"})},isBLack:e}),Object(v.jsx)(A,{value:"=",setInput:function(){i({type:"calculate"})},img:d,isBLack:e})]})]})},y=a(7),B=a.n(y),F=a.p+"static/media/moon.f0c2c2be.png",N=a.p+"static/media/sun.00d03aa8.png",w=function(t){var e=t.isBlackTheme,a=t.blackTheme;return Object(v.jsx)("div",{className:B.a.mid,children:Object(v.jsxs)("label",{className:o()(B.a.rocker,B.a.rockerSmall),children:[Object(v.jsx)("input",{type:"checkbox",checked:a,onChange:function(t){e(t.currentTarget.checked)}}),Object(v.jsx)("span",{className:B.a.switchLeft,children:Object(v.jsx)("img",{src:F,alt:""})}),Object(v.jsx)("span",{className:B.a.switchRight,children:Object(v.jsx)("img",{style:{height:"20px"},src:N,alt:""})})]})})},P=function(){var t=Object(c.useState)(!1),e=Object(l.a)(t,2),a=e[0],n=e[1];return Object(v.jsx)("div",{className:a?"AppBlack":"App",children:Object(v.jsxs)("div",{className:"app-wrapper",children:[Object(v.jsx)(I,{isBlack:a}),Object(v.jsx)(w,{isBlackTheme:n,blackTheme:a})]})})},T=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,r=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),r(t),i(t)}))};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root")),T()},3:function(t,e,a){t.exports={calculator:"Calculator_calculator__12KaN",calculatorBlack:"Calculator_calculatorBlack__hKoCa",resultCont:"Calculator_resultCont__1VevZ",result:"Calculator_result__13t74",history:"Calculator_history__19Lf_",buttonCont:"Calculator_buttonCont__1jdCr",buttonWhite:"Calculator_buttonWhite__1MHr2",buttonBlack:"Calculator_buttonBlack__3EJlD"}},7:function(t,e,a){t.exports={mid:"Switcher_mid__3HSxw",rocker:"Switcher_rocker__1XdpH",rockerSmall:"Switcher_rockerSmall__39Ngv",switchLeft:"Switcher_switchLeft__1Krzy",switchRight:"Switcher_switchRight__2SAfM"}}},[[20,1,2]]]);
//# sourceMappingURL=main.4bf76872.chunk.js.map