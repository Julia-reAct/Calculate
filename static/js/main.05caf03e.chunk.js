(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(_,e,a){"use strict";a.r(e);var t=a(2),s=a.n(t),r=a(4),l=a.n(r),u=a(5),c=a(0);l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(u.a,{})}),document.getElementById("root"))},15:function(_,e,a){},5:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6),C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(7),C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_App_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_App_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),App=function(_React$Component){Object(C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(App,_React$Component);var _super=Object(C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(App);function App(_){var e;return Object(C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App),(e=_super.call(this,_)).state={value:"",result:"",check:[]},e.calculate=e.calculate.bind(Object(C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleChange=e.handleChange.bind(Object(C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e.handleClick=e.handleClick.bind(Object(C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(e)),e}return Object(C_Users_User_yulya_Calcu_my_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"handleChange",value:function(_){this.setState({value:_.target.value})}},{key:"handleClick",value:function(_){for(var e=["30/2+2-6*7","70*2-4/2","25+5*7-9","34*4/8-7+2"],a=["-25","138","51","12"],t=[],s=0;s<4;s++){var r=this.calculate(e[s])==a[s];t[s]="".concat(e[s],"= ").concat(a[s]," ").concat(r?"\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442":"\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442  ")}this.setState({check:t})}},{key:"handleSubmit",value:function(_){_.preventDefault(),this.setState({result:this.calculate(this.state.value)})}},{key:"calculate",value:function calculate(value){return eval(value)}},{key:"render",value:function(){var _=this.state.check.map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p",{children:_})}));return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:"App",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("input",{className:"input",type:"text",value:this.state.value,onChange:this.handleChange})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"button",children:"Send"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{children:this.state.result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("button",{className:"button",onClick:this.handleClick,children:"Check"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{children:_})]})}}]),App}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=App}},[[10,1,2]]]);
//# sourceMappingURL=main.05caf03e.chunk.js.map