(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_mhkaz_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_App_scss__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(11),_App_scss__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("0"),_useState2=Object(C_Users_mhkaz_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),term=_useState2[0],setTerm=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)("0"),_useState4=Object(C_Users_mhkaz_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),formula=_useState4[0],setFormula=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),_useState6=Object(C_Users_mhkaz_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),equation=_useState6[0],setEquation=_useState6[1],formulaScreen=document.getElementById("formula"),operatorsArr=["+","*","/","-"],isTermOperator=operatorsArr.find((function(e){return e===term})),digitLimitMet=function(){document.getElementById("term").innerHTML="DIGIT LIMIT MET",setTimeout((function(){document.getElementById("term").innerHTML=term}),500)},addDigits=function(e){if(formulaScreen&&(formulaScreen.style.opacity=1),equation)"point"===e.target.id?(setFormula("0."),setTerm("0.")):"numbers"===e.target.className?(setFormula(e.target.innerHTML),setTerm(e.target.innerHTML)):"operators"===e.target.className&&(setFormula(term+e.target.innerHTML),setTerm(e.target.innerHTML)),setEquation(!equation);else if("0"===term)document.getElementById("formula").style.opacity=1,"point"===e.target.id?(setFormula(formula+"."),setTerm(term+".")):"numbers"===e.target.className?"zero"===e.target.id?(setFormula(formula),setTerm(term)):(setFormula(e.target.innerHTML),setTerm(e.target.innerHTML)):"operators"===e.target.className&&(setFormula(formula+e.target.innerHTML),setTerm(e.target.innerHTML));else if("point"===e.target.id){for(var t=[],_=0;_<term.length;_++)t.push(term[_]);22===term.length?digitLimitMet():t.some((function(e){return"."===e}))?(setFormula(formula),setTerm(term)):(setFormula(formula+e.target.innerHTML),setTerm(term+e.target.innerHTML))}else if("numbers"===e.target.className)22===term.length?digitLimitMet():isTermOperator?(setFormula(formula+e.target.innerHTML),setTerm(e.target.innerHTML)):(setFormula(formula+e.target.innerHTML),setTerm(term+e.target.innerHTML));else if("operators"===e.target.className){for(var r=[],a=0;a<formula.length;a++)r.push(formula[a]);var n=[].concat(r);isTermOperator?"minus"===e.target.id?operatorsArr.find((function(e){return e===r[r.length-2]}))?(setFormula(formula),setTerm(term)):(setFormula(formula+e.target.innerHTML),setTerm(e.target.innerHTML)):operatorsArr.find((function(e){return e===r[r.length-2]}))?(n.splice(-2,2,e.target.innerHTML),setFormula(n.join("")),setTerm(e.target.innerHTML)):(n[n.length-1]=e.target.innerHTML,setFormula(n.join("")),setTerm(e.target.innerHTML)):(setFormula(formula+e.target.innerHTML),setTerm(e.target.innerHTML))}},clear=function(){setFormula("0"),setTerm("0"),document.getElementById("formula").style.opacity=0};Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){return document.getElementById("ac").addEventListener("click",clear),function(){document.getElementById("ac").removeEventListener("click",clear)}}));var getAns=function getAns(e){if(!equation){for(var formulaArr=[],i=0;i<formula.length;i++)formulaArr.push(formula[i]);if(operatorsArr.find((function(e){return e===formulaArr[formulaArr.length-1]}))){operatorsArr.find((function(e){return e===formulaArr[formulaArr.length-2]}))?(formulaArr.pop(),formulaArr.pop()):formulaArr.pop();for(var displayEquation=formulaArr.join(""),mutableFormulaArr=[].concat(formulaArr),_i2=0;_i2<formulaArr.length;_i2++)"-"===formulaArr[_i2]&&"-"===formulaArr[_i2+1]&&mutableFormulaArr.splice(_i2,2,"+");var formulaEquation=mutableFormulaArr.join("");setFormula("".concat(displayEquation," = ").concat(String(eval(formulaEquation)))),setTerm(String(eval(formulaEquation)))}else{for(var _i3=0;_i3<formulaArr.length;_i3++)"-"===formulaArr[_i3]&&"-"===formulaArr[_i3+1]&&formulaArr.splice(_i3,2,"+");var _formulaEquation=formulaArr.join("");setFormula("".concat(formula," = ").concat(String(eval(_formulaEquation)))),setTerm(String(eval(_formulaEquation)))}setEquation(!equation)}};return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){return document.getElementById("equal").addEventListener("click",getAns),function(){document.getElementById("equal").removeEventListener("click",getAns)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"screen",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"formula",children:formula}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{id:"term",children:term})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{id:"buttons-wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"ac",children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"operators",id:"divide",children:"/"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"operators",id:"multiply",children:"*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"7",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"8",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"9",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"operators",id:"minus",children:"-"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"4",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"5",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"6",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"operators",id:"add",children:"+"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"1",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"2",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"3",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{id:"equal",children:"="}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"zero",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button",{onClick:addDigits,className:"numbers",id:"point",children:"."})]})]})})})}__webpack_exports__.a=App},,,,,function(e,t,_){},function(e,t,_){},,function(e,t,_){"use strict";_.r(t);var r=_(1),a=_.n(r),n=_(4),i=_.n(n),s=(_(10),_(5)),u=function(e){e&&e instanceof Function&&_.e(3).then(_.bind(null,14)).then((function(t){var _=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;_(e),r(e),a(e),n(e),i(e)}))},o=_(0);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(s.a,{})}),document.getElementById("root")),u()}],[[13,1,2]]]);
//# sourceMappingURL=main.83549347.chunk.js.map