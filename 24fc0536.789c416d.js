(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{64:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t(0),l=t.n(r),i=t(92),c=t(96),s=t(129),o=t.n(s),m=t(91),d=t(65),u=t.n(d),p=t(139);const h=[{type:"Free",detail:"Plano standard com limita\xe7\xf5es",tiers:[]},{type:"Standard",detail:"Plano standard",tiers:[{limit:2,price:29.9},{limit:5,price:59.8},{limit:10,price:119.6},{limit:0,price:199.9}]},{type:"Premium",detail:"Plano premium",tiers:[{limit:2,price:49.9},{limit:5,price:99.8},{limit:10,price:199.6},{limit:0,price:299.9}]}],E=[{title:"Criar or\xe7amento",detail:"Criar or\xe7amento",plan:0},{title:"Editar or\xe7amento",detail:"Editar or\xe7amento",plan:1},{title:"Apagar or\xe7amento",detail:"Apagar or\xe7amento",plan:2},,{title:"Visualizar or\xe7amento",detail:"Visualizar or\xe7amento",plan:0}];function b({description:e,checked:a}){const t=a?"badge badge--secondary":"badge badge--primary";return l.a.createElement("span",{class:t},e)}function g({users:e,plan:a,isPerYear:t}){e||(e=1);let n=a.tiers.find(a=>e<=a.limit||0==a.limit);function r(e){return e.toLocaleString("pt-PT",{style:"currency",currency:"EUR",maximumFractionDigits:2})}function c({price:e,usersLimit:t,detail:n,button:r}){return l.a.createElement("div",{className:Object(i.a)("col",u.a.plan)},l.a.createElement("h2",{className:u.a.underline},a.type),l.a.createElement("h1",null,e),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col"},l.a.createElement("p",{className:u.a.planPrice},t),l.a.createElement("p",{className:u.a.planOffer},n))),r)}if(a.tiers.length<1)return l.a.createElement(c,{price:"0 \u20ac",usersLimit:"At\xe9 2 utilizadores",detail:"Oferta limitada",button:l.a.createElement("button",{className:Object(i.a)("button button--primary",u.a.planButton)},"Download")});var s=0==n.limit?"Utilizadores ilimitados":"At\xe9 "+n.limit+" utilizadores";return t?l.a.createElement(c,{price:r(10*n.price),usersLimit:s,detail:"2 meses de oferta",button:l.a.createElement("button",{className:Object(i.a)("button button--secondary",u.a.planButton)},"Registar")}):l.a.createElement(c,{price:r(n.price),usersLimit:s,detail:r(12*n.price)+" por ano",button:l.a.createElement("button",{className:Object(i.a)("button button--secondary",u.a.planButton)},"Registar")})}class f extends l.a.Component{constructor(e){super(e),this.state={users:1,isPerYear:!1},this.handleChange=this.handleChange.bind(this),this.handleInputChange=this.handleInputChange.bind(this)}handleChange(e){this.setState({isPerYear:e})}handleInputChange(e){const a=e.target.validity.valid?e.target.value:this.state.users;this.setState({users:a})}render(){return l.a.createElement("div",{className:Object(i.a)("container",u.a.form)},l.a.createElement("div",{className:Object(i.a)("row",u.a.label)},l.a.createElement("p",{className:"hero__subtitle"},"Quantos utilizadores?"),l.a.createElement("input",{class:Object(i.a)("",u.a.input),type:"text",onChange:this.handleInputChange,value:this.state.users,pattern:"[0-9]{0,5}"})),l.a.createElement("div",{className:Object(i.a)("row",u.a.billingCycle)},l.a.createElement(b,{description:"Mensal",checked:this.state.isPerYear}),l.a.createElement(o.a,{onChange:this.handleChange,checked:this.state.isPerYear,uncheckedIcon:!1,checkedIcon:!1,className:u.a.toggle,onColor:"#1daeac",offColor:"#1daeac",height:25,width:50,handleDiameter:10}),l.a.createElement(b,{description:"Anual",checked:!this.state.isPerYear})),l.a.createElement("div",{className:Object(i.a)("row",u.a.plans)},l.a.createElement("div",{className:Object(i.a)("col",u.a.plan)}),h&&h.length>0&&h.map((e,a)=>l.a.createElement(g,{key:a,users:this.state.users,plan:e,isPerYear:this.state.isPerYear}))))}}function N({title:e,detail:a,plan:t}){function n({planValue:e,planSelected:a}){return e<=a?l.a.createElement(p.a,null):l.a.createElement("span",null)}return l.a.createElement("div",{className:Object(i.a)("row",u.a.feature)},l.a.createElement("div",{className:Object(i.a)("col text--left",u.a.featureCol)},e),l.a.createElement("div",{className:Object(i.a)("col text--center",u.a.featureCol)},l.a.createElement(n,{planValue:t,planSelected:0})),l.a.createElement("div",{className:Object(i.a)("col text--center",u.a.featureCol)},l.a.createElement(n,{planValue:t,planSelected:1})),l.a.createElement("div",{className:Object(i.a)("col text--center",u.a.featureCol)},l.a.createElement(n,{planValue:t,planSelected:2})))}function v(){return l.a.createElement("div",{className:Object(i.a)("container",u.a.features)},l.a.createElement("div",{className:Object(i.a)("row",u.a.featureHeader)}),E.map((e,a)=>l.a.createElement(N,Object(n.a)({key:a},e))))}a.default=function(){return Object(m.a)(),l.a.createElement(c.a,{title:"Pre\xe7os",description:"Description will go into a meta tag in <head />"},l.a.createElement("header",{className:Object(i.a)("hero",u.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},"Planos e Pre\xe7os"))),l.a.createElement("main",null,l.a.createElement(f,null),l.a.createElement(v,null)))}}}]);