(this.webpackJsonphello_react=this.webpackJsonphello_react||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/platziconf-logo.f246f5f1.svg"},,,,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/badge-header.973f5842.svg"},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/astronauts.71addf45.svg"},function(e,a,t){e.exports=t.p+"static/media/img404.a1003ad8.png"},function(e,a,t){e.exports=t.p+"static/media/logo.0026b862.svg"},function(e,a,t){e.exports=t(56)},,,,,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),s=t.n(l),c=t(8),o=t(13),i=t(1),m=t.n(i),u=t(2),d=t(3),p=t(5),h=t(4),f=t(6),g=t(25),b=t(15),E=t.n(b);var v=function(e){var a=e.email,t=E()(a);return r.a.createElement("img",{className:e.className,src:"https://www.gravatar.com/avatar/".concat(t,"?d=identicon"),alt:e.alt})};t(45);var N=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"BadgesListItem"},r.a.createElement(v,{className:"BadgesListItem__avatar",email:this.props.badge.email}),r.a.createElement("div",null,r.a.createElement("strong",null,this.props.badge.firstName," ",this.props.badge.lastName),r.a.createElement("br",null),"@",this.props.badge.twitter,r.a.createElement("br",null),this.props.badge.jobTitle))}}]),a}(r.a.Component),j=function(e){var a=function(e){var a=r.a.useState(""),t=Object(g.a)(a,2),n=t[0],l=t[1],s=r.a.useState(e),c=Object(g.a)(s,2),o=c[0],i=c[1];return r.a.useMemo((function(){var a=e.filter((function(e){return"".concat(e.firstName," ").concat(e.lastName).toLowerCase().includes(n.toLowerCase())}));i(a)}),[e,n]),{query:n,setQuery:l,filteredBadges:o}}(e.badges),t=a.query,n=a.setQuery,l=a.filteredBadges;return 0===l.length?r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter Badges"),r.a.createElement("input",{className:"form-control",value:t,onChange:function(e){n(e.target.value)}})),r.a.createElement("h3",null,"No badges were found"),r.a.createElement(c.b,{className:"btn btn-primary",to:"/badges/new"},"Create new badge")):r.a.createElement("div",{className:"BadgesList"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Filter Badges"),r.a.createElement("input",{className:"form-control",value:t,onChange:function(e){n(e.target.value)}})),r.a.createElement("ul",{className:"list-unstyled"},l.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(c.b,{className:"text-reset text-decoration-none",to:"/badges/".concat(e.id,"/details")},r.a.createElement(N,{badge:e})))}))))},w=(t(29),function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-grid"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}}]),a}(n.Component));var y=function(){return r.a.createElement("div",{className:"PageLoading"},r.a.createElement(w,null))};t(51);var O=function(e){return r.a.createElement("div",{className:"PageError"},e.error.message)},_=t(21),C=t.n(_),B=(t(19),"https://api-platzi-badges.vercel.app/api"),x=function(e){return new Promise((function(a){return setTimeout(a,e)}))},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(a-e+1))+e},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return x(S(e,a))};function T(e){var a,t,n,r,l=arguments;return m.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:{},s.next=3,m.a.awrap(k());case 3:return a.headers={"Content-Type":"application/json",Accept:"application/json"},t=B+e,s.next=7,m.a.awrap(fetch(t,a));case 7:return n=s.sent,s.next=10,m.a.awrap(n.json());case 10:return r=s.sent,s.abrupt("return",r);case 12:case"end":return s.stop()}}))}var D={badges:{list:function(){return T("/badges")},create:function(e){return T("/badges",{method:"POST",body:JSON.stringify(e)})},read:function(e){return T("/badges/".concat(e))},update:function(e,a){return T("/badges/".concat(e),{method:"PUT",body:JSON.stringify(a)})},remove:function(e){return T("/badges/".concat(e),{method:"DELETE"})}}},I=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).fetchData=function(){var e;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t.setState({loading:!0,error:null}),a.prev=1,a.next=4,m.a.awrap(D.badges.list());case 4:e=a.sent,t.setState({loading:!1,data:e}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),t.setState({loading:!1,error:a.t0});case 11:case"end":return a.stop()}}),null,null,[[1,8]])},t.state={loading:!0,error:null,data:void 0},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return this.state.loading&&!this.state.data?r.a.createElement(y,null):this.state.error?r.a.createElement(O,{error:this.state.error}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges"},r.a.createElement("div",{className:"Badges__hero"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement("img",{className:"Badges_conf-logo",src:C.a,alt:"Conf Logo"})))),r.a.createElement("div",{className:"Badges__container"},r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(c.b,{to:"/badges/new",className:"btn btn-primary"},"New Badge")),r.a.createElement("div",{className:"Badges__list"},r.a.createElement("div",{className:"Badges__container"},r.a.createElement(j,{badges:this.state.data})))))}}]),a}(r.a.Component),M=t(16),L=t(17),P=t(12),F=t.n(P),A=(t(30),function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Badge"},r.a.createElement("div",{className:"Badge__header"},r.a.createElement("img",{src:C.a,alt:"Logo de Platzi"})),r.a.createElement("div",{className:"Badge__section-name"},r.a.createElement(v,{className:"Badge__avatar",email:this.props.email,alt:"Avatar"}),r.a.createElement("h1",null,this.props.firstName," ",r.a.createElement("br",null)," ",this.props.secondName)),r.a.createElement("div",{className:"Badge__section-info"},r.a.createElement("h3",null,this.props.email),r.a.createElement("h3",null,this.props.jobTitle),r.a.createElement("div",null,this.props.twitter)),r.a.createElement("div",{className:"Badge__footer"},r.a.createElement("p",null,"#Platziconf")))}}]),a}(r.a.Component)),J=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).handleClick=function(e){console.log("Boton")},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("form",{onSubmit:this.props.submit},this.props.error&&r.a.createElement("p",{className:"text-danger"},this.props.error.message),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{onChange:this.props.change,className:"form-control",type:"text",name:"firstName",placeholder:"Your name",value:this.props.formValues.firstName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{onChange:this.props.change,className:"form-control",type:"text",name:"lastName",placeholder:"Your last name",value:this.props.formValues.lastName})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{onChange:this.props.change,className:"form-control",type:"email",placeholder:"example@123.com",name:"email",value:this.props.formValues.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Job Title"),r.a.createElement("input",{onChange:this.props.change,className:"form-control",type:"text",name:"jobTitle",value:this.props.formValues.jobTitle})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Twitter"),r.a.createElement("input",{onChange:this.props.change,className:"form-control",type:"text",placeholder:"example123",name:"twitter",value:this.props.formValues.twitter})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{onClick:this.handleClick,className:"btn btn-primary"},"Save"),r.a.createElement(c.b,{onClick:this.handleBack,to:"/badges/".concat(this.props.id,"/details"),className:"btn btn-primary"},"Back"))))}}]),a}(r.a.Component),V=(t(31),function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"Software Engineer",twitter:""}},t.handleChange=function(e){t.setState({form:Object(L.a)({},t.state.form,Object(M.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(e){var a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,a=E()(t.state.form.email),t.state.form=Object(L.a)({},t.state.form,{avatarUrl:"https://www.gravatar.com/avatar/".concat(a,"?d=identicon")}),t.setState({loading:!0}),n.next=7,m.a.awrap(D.badges.create(t.state.form));case 7:t.setState({loading:!1}),t.props.history.push("/badges"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),t.setState({loading:!1,error:n.t0});case 14:case"end":return n.stop()}}),null,null,[[1,11]])},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return this.state.loading?r.a.createElement(y,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"img-fluid",src:F.a,alt:"Logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(A,{firstName:this.state.form.firstName||"First_Name",secondName:this.state.form.lastName||"Last_Name",jobTitle:this.state.form.jobTitle||"Your Job",email:this.state.form.email||"Email",twitter:this.state.form.twitter||"Twitter"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"New Attendant"),r.a.createElement(J,{change:this.handleChange,submit:this.handleSubmit,formValues:this.state.form,error:this.state.error})))))}}]),a}(r.a.Component)),U=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"Software Engineer",twitter:""}},t.fetchData=function(e){var a;return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0,error:null}),e.prev=1,e.next=4,m.a.awrap(D.badges.read(t.props.match.params.badgeId));case 4:a=e.sent,t.setState({loading:!1,form:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),null,null,[[1,8]])},t.handleChange=function(e){t.setState({form:Object(L.a)({},t.state.form,Object(M.a)({},e.target.name,e.target.value))})},t.handleSubmit=function(e){var a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.prev=1,a=E()(t.state.form.email),t.state.form=Object(L.a)({},t.state.form,{avatarUrl:"https://www.gravatar.com/avatar/".concat(a,"?d=identicon")}),t.setState({loading:!0}),n.next=7,m.a.awrap(D.badges.update(t.props.match.params.badgeId,t.state.form));case 7:t.setState({loading:!1}),t.props.history.push("/badges"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),t.setState({loading:!1,error:n.t0});case 14:case"end":return n.stop()}}),null,null,[[1,11]])},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?r.a.createElement(y,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("img",{className:"img-fluid",src:F.a,alt:"Logo"})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(A,{firstName:this.state.form.firstName||"First_Name",secondName:this.state.form.lastName||"Last_Name",jobTitle:this.state.form.jobTitle||"Your Job",email:this.state.form.email||"Email",twitter:this.state.form.twitter||"Twitter"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Edit Attendant"),r.a.createElement(J,{change:this.handleChange,submit:this.handleSubmit,formValues:this.state.form,error:this.state.error,id:this.props.match.params.badgeId})))))}}]),a}(r.a.Component);t(52);var z=function(e){return e.modalIsOpen?s.a.createPortal(r.a.createElement("div",{className:"Modal"},r.a.createElement("div",{className:"Modal__container"},r.a.createElement("button",{onClick:e.onCloseModal,className:"Modal__close-button"},"X"),e.children)),document.getElementById("modal")):null};var Y=function(e){return r.a.createElement(z,{modalIsOpen:e.modalIsOpen,onCloseModal:e.onCloseModal},r.a.createElement("div",{className:"DeleteBadgeModal"},r.a.createElement("h1",null,"Are you sure?"),r.a.createElement("p",null,"You are about to delete a Badge"),r.a.createElement("div",null,r.a.createElement("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-4"},"Delete"),r.a.createElement("button",{onClick:e.onCloseModal,className:"btn btn-primary"},"Cancel"))))},q=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,error:null,modalIsOpen:!1,form:{firstName:"",lastName:"",email:"",jobTitle:"Software Engineer",twitter:""}},t.fetchData=function(e){var a;return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.setState({loading:!0,error:null}),e.next=4,m.a.awrap(D.badges.read(t.props.match.params.badgeId));case 4:a=e.sent,t.setState({loading:!1,form:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),null,null,[[0,8]])},t.handleOpenModal=function(e){t.setState({modalIsOpen:!0})},t.handleCloseModal=function(e){t.setState({modalIsOpen:!1})},t.handleDeleteBadge=function(e){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.setState({loading:!0,error:null,modalIsOpen:!1}),e.next=4,m.a.awrap(D.badges.remove(t.props.match.params.badgeId));case 4:t.setState({loading:!1}),t.props.history.push("/badges"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.setState({loading:!1,error:e.t0});case 11:case"end":return e.stop()}}),null,null,[[0,8]])},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?r.a.createElement(y,null):this.state.error?r.a.createElement(O,{error:this.state.error}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"BadgeNew__hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{className:"img-fluid",src:F.a,alt:"Logo"})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,this.state.form.firstName," ",this.state.form.lastName))))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement(A,{firstName:this.state.form.firstName,secondName:this.state.form.lastName,jobTitle:this.state.form.jobTitle,email:this.state.form.email,twitter:this.state.form.twitter})),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Actions"),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/badges/".concat(this.state.form.id,"/edit"),className:"btn btn-primary mb-4"},"Edit")),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleOpenModal,className:"btn btn-danger mb-4"},"Delete"),r.a.createElement(Y,{modalIsOpen:this.state.modalIsOpen,onCloseModal:this.handleCloseModal,onDeleteBadge:this.handleDeleteBadge},"Prueba")),r.a.createElement("div",null,r.a.createElement(c.b,{to:"/badges",className:"btn btn-primary mb-4"},"Badges"))))))}}]),a}(r.a.Component),Q=t(34),H=t.n(Q),W=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Badges__home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("img",{className:"Badges_conf-logo",src:F.a,alt:"Conf Logo"}),r.a.createElement("div",{className:"body"},r.a.createElement("h1",null,"Print your Badges"),r.a.createElement("h2",null,"The easiest way to manage your conference")),r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(c.b,{to:"/badges",className:"btn btn-primary"},"Start now"))),r.a.createElement("div",{className:"col-6"},r.a.createElement("img",{className:"Badges_conf-logo",src:H.a,alt:"Conf Logo"}))))))}}]),a}(r.a.Component),X=t(35),G=t.n(X);var K=function(){return r.a.createElement("div",{className:"Badges__home"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("div",{className:"body"},r.a.createElement("h1",null,"UPSSSS!! Page not found")),r.a.createElement("div",{className:"Badges__buttons"},r.a.createElement(c.b,{to:"/",className:"btn btn-primary"},"Home"))),r.a.createElement("div",{className:"col-2"},r.a.createElement("img",{src:G.a,alt:"Not Found"})))))},R=t(36),Z=t.n(R),$=(t(53),function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(c.b,{className:"Navbar__brand",to:"/"},r.a.createElement("img",{className:"Navbar__brand-logo ",src:Z.a,alt:"Logo"}),r.a.createElement("span",{className:"font-weight-light"},"Platzi"),r.a.createElement("span",{className:"font-weight-bold"},"Conf"))))}}]),a}(r.a.Component));var ee=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),e.children)};var ae=function(){return r.a.createElement(c.a,null,r.a.createElement(ee,null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:W}),r.a.createElement(o.a,{exact:!0,path:"/badges",component:I}),r.a.createElement(o.a,{exact:!0,path:"/badges/new",component:V}),r.a.createElement(o.a,{exact:!0,path:"/badges/:badgeId/edit",component:U}),r.a.createElement(o.a,{exact:!0,path:"/badges/:badgeId/details",component:q}),r.a.createElement(o.a,{component:K}))))},te=(t(54),t(55),document.getElementById("app"));s.a.render(r.a.createElement(ae,null),te)}],[[37,1,2]]]);
//# sourceMappingURL=main.d6cae235.chunk.js.map