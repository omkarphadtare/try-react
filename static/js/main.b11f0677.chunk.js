(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),u=a.n(l),c=(a(16),a(9)),m=a(1),i=a(2),s=a(4),o=a(3),b=a(5),h=function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Contact Number"),r.a.createElement("th",null,"Delete")))},E=function(e){var t=e.userData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.number),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeUser(a)}},"Delete")))});return r.a.createElement("tbody",null,t)},d=function(e){function t(){return Object(m.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.userData,a=e.removeUser;return r.a.createElement("div",{className:"tab"},r.a.createElement("table",null,r.a.createElement(h,null),r.a.createElement(E,{userData:t,removeUser:a})))}}]),t}(n.Component),v=a(8),f=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(v.a)({},n,r))},a.onFormSubmit=function(e){e.preventDefault(),a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",number:""},a.state=a.initialState,a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number;return r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Contact Number:"),r.a.createElement("input",{type:"number",name:"number",value:a,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={users:[]},a.removeUser=function(e){var t=a.state.users;a.setState({users:t.filter(function(t,a){return a!==e})})},a.handleSubmit=function(e){a.setState({users:[].concat(Object(c.a)(a.state.users),[e])})},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.users;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Phone Directory")),r.a.createElement("div",{className:"hline"}),r.a.createElement("div",{className:"add"},r.a.createElement("h3",null,"Add Subscriber"),r.a.createElement(f,{handleSubmit:this.handleSubmit})),r.a.createElement("div",{className:"hline"}),r.a.createElement("h3",null,"Database"),r.a.createElement(d,{userData:e,removeUser:this.removeUser}))}}]),t}(n.Component);u.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b11f0677.chunk.js.map