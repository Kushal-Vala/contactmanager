(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{37:function(e,a,t){e.exports=t(66)},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),l=t.n(c),o=t(2),s=t(3),i=t(5),m=t(4),u=t(6),p=t(13),h=t(14),d=t(7),b=t.n(d),f=t(36),E=t(18),v=t(12),y=t.n(v),g=Object(n.createContext)(),C=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(E.a)({},e,{contacts:[a.payload].concat(Object(f.a)(e.contacts))});case"UPDATE_CONTACT":return Object(E.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},N=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return t.setState((function(a){return C(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return b.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,b.a.awrap(y.a.get("https://jsonplaceholder.typicode.com/users"));case 2:e=a.sent,this.setState({contacts:e.data});case 4:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement(g.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),j=g.Consumer,O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onDeleteClick=function(e,a){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(y.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)));case 2:a({type:"DELETE_CONTACT",payload:e});case 3:case"end":return t.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,l=a.phone,o=this.state.showContactInfo;return r.a.createElement(j,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-2 w-50 bg-light"},r.a.createElement("h4",null,n,r.a.createElement("i",{className:"fas fa-caret-down text-dark float-left mr-2",onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times float-right",onClick:e.onDeleteClick.bind(e,t,s),style:{cursor:"pointer",color:"red"}}),r.a.createElement(p.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt float-right text-dark mr-3"}))),o?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Contact : ",l)):null)}))}}]),a}(n.Component),k=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h6",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"}," Contact")," List"),a.map((function(e){return r.a.createElement(O,{key:e.id,contact:e})})))}))}}]),a}(n.Component),x=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-2 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},e.branding)),r.a.createElement("ul",{className:"nav navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About")))))},w=(t(65),t(16)),S=t(35),A=t.n(S),D=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,l=e.type,o=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:l,name:t,className:A()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:o}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))};D.defaultProps={type:"text"};var T=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){var n,r,c,l,o,s;return b.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,l=n.phone,""!==r){i.next=5;break}return t.setState({errors:{name:"Name is Required...!!"}}),i.abrupt("return");case 5:if(""!==c){i.next=8;break}return t.setState({errors:{email:"Email is Required...!!"}}),i.abrupt("return");case 8:if(""!==l){i.next=11;break}return t.setState({errors:{phone:"Phone is Required...!!"}}),i.abrupt("return");case 11:return o={name:r,email:c,phone:l},i.next=14,b.a.awrap(y.a.post("https://jsonplaceholder.typicode.com/users",o));case 14:s=i.sent,e({type:"ADD_CONTACT",payload:s.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return i.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,l=a.errors;return r.a.createElement(j,null,(function(a){var o=a.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header "},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter Name...",value:t,onChange:e.onChange,error:l.name}),r.a.createElement(D,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange,error:l.email}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:c,onChange:e.onChange,error:l.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-block btn-dark",value:"Submit"})))))}))}}]),a}(n.Component),P=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple App to Manage Contacts "),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},q=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"}," 404")," Page Not Found"),r.a.createElement("p",{className:"lead"}," Sorry, that page doesn't exist"))},M=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={title:"",body:""},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Component Did Mount"),fetch("https://jsonplaceholder.typicode.com/posts/1").then((function(e){return e.json()})).then((function(a){return e.setState({title:a.title,body:a.body})}))}},{key:"render",value:function(){var e=this.state,a=e.title,t=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,a),r.a.createElement("p",null,t))}}]),a}(n.Component),F=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){var n,r,c,l,o,s,i;return b.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,l=n.phone,""!==r){m.next=5;break}return t.setState({errors:{name:"Name is Required...!!"}}),m.abrupt("return");case 5:if(""!==c){m.next=8;break}return t.setState({errors:{email:"Email is Required...!!"}}),m.abrupt("return");case 8:if(""!==l){m.next=11;break}return t.setState({errors:{phone:"Phone is Required...!!"}}),m.abrupt("return");case 11:return o={name:r,email:c,phone:l},s=t.props.match.params.id,m.next=15,b.a.awrap(y.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),o));case 15:i=m.sent,e({type:"UPDATE_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return m.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,a,t;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match.params.id,n.next=3,b.a.awrap(y.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)));case 3:a=n.sent,t=a.data,this.setState({name:t.name,email:t.email,phone:t.phone});case 6:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,l=a.errors;return r.a.createElement(j,null,(function(a){var o=a.dispatch;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header "},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(D,{label:"Name",name:"name",placeholder:"Enter Name...",value:t,onChange:e.onChange,error:l.name}),r.a.createElement(D,{label:"Email",name:"email",type:"email",placeholder:"Enter Email...",value:n,onChange:e.onChange,error:l.email}),r.a.createElement(D,{label:"Phone",name:"phone",placeholder:"Enter Phone...",value:c,onChange:e.onChange,error:l.phone}),r.a.createElement("input",{type:"submit",className:"btn btn-block bg-dark text-white",value:"Update Contact"})))))}))}}]),a}(n.Component),R=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null,r.a.createElement(p.a,{basename:"/Kushal-Vala/contactmanager"},r.a.createElement("div",null,r.a.createElement(x,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:k}),r.a.createElement(h.a,{exact:!0,path:"/contact/add",component:T}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:F}),r.a.createElement(h.a,{exact:!0,path:"/about",component:P}),r.a.createElement(h.a,{exact:!0,path:"/test",component:M}),r.a.createElement(h.a,{component:q}))))))}}]),a}(n.Component);l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.1dfb0702.chunk.js.map