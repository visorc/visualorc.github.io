(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{106:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},84:function(e,t,n){"use strict";n.r(t);var a=n(106),r=n(3),l=n(0),u=n.n(l),o=n(96),c=u.a.createElement("h1",null,"Hello, ","Josh Perez"),i=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={date:new Date},n}return Object(r.a)(t,e),t.prototype.render=function(){return u.a.createElement("div",null,u.a.createElement("h1",null,"Hello, world!"),u.a.createElement("h2",null,"It is ",this.state.date.toLocaleTimeString(),"."))},t}(u.a.Component),s=(u.a.Component,function(e){function t(t){var n;return(n=e.call(this,t)||this).state={username:""},n.myChangeHandler=n.myChangeHandler.bind(Object(a.a)(n)),n}Object(r.a)(t,e);var n=t.prototype;return n.myChangeHandler=function(e){this.setState({username:e.target.value})},n.render=function(){return u.a.createElement("form",null,u.a.createElement("h1",null,"Hello ",this.state.username),u.a.createElement("p",null,"Enter your name:"),u.a.createElement("input",{type:"text",onChange:this.myChangeHandler}))},t}(u.a.Component));t.default=function(){return u.a.createElement(o.a,null,u.a.createElement("div",null,u.a.createElement(i,null),u.a.createElement(s,null),c,u.a.createElement("h1",null,"Edit ",u.a.createElement("code",null,"pages/hello.js")," and save to reload.")))}}}]);