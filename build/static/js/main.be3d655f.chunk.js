(this.webpackJsonpttkui=this.webpackJsonpttkui||[]).push([[0],{207:function(e,t,a){e.exports=a.p+"static/media/pokemon-destek.eb7bf3da.png"},370:function(e,t,a){e.exports=a(646)},375:function(e,t,a){},536:function(e,t,a){var n={"./eg.png":537,"./pokemon-destek.png":207,"./ro.png":538,"./sa.png":539,"./tr.png":540,"./uk.png":541,"./us.png":542};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=536},537:function(e,t,a){e.exports=a.p+"static/media/eg.ee87944d.png"},538:function(e,t,a){e.exports=a.p+"static/media/ro.7c6628a2.png"},539:function(e,t,a){e.exports=a.p+"static/media/sa.bb924894.png"},540:function(e,t,a){e.exports=a.p+"static/media/tr.046e91f7.png"},541:function(e,t,a){e.exports=a.p+"static/media/uk.b702632c.png"},542:function(e,t,a){e.exports=a.p+"static/media/us.2918610d.png"},554:function(e,t){},646:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),c=a.n(o),l=a(28),i=(a(375),a(23)),u=a(121),s=a(20),m=a.n(s),p=a(37),d=a(669),E=a(656),f=a(671),v=a(672),b=a(660),h=a(666),y=a(658),g=a(47),O=g.b.initializeDefaultAppClient("ttk-ui-cvkwt"),j=O.getServiceClient(g.a.factory,"mongodb-atlas").db("ttk-ui-db"),k=j.collection("test");function T(){return C.apply(this,arguments)}function C(){return(C=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.find().asArray().then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.deleteOne({id:t}).then((function(e){return console.log("deleted")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t){return S.apply(this,arguments)}function S(){return(S=Object(p.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new g.d(t,a),e.prev=1,e.next=4,O.auth.loginWithCredential(n);case 4:return r=e.sent,console.log("successfully logged in with id: ".concat(r.id)),e.abrupt("return",{success:!0,id:r.id,error:void 0});case 9:return e.prev=9,e.t0=e.catch(1),console.error("login failed with error: ".concat(e.t0)),e.abrupt("return",{success:!1,error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function D(e,t){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(m.a.mark((function e(t,a){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.b.defaultAppClient.auth.getProviderClient(g.c.factory),e.prev=1,e.next=4,n.registerWithEmail(t,a);case 4:return e.abrupt("return",{success:!0,error:void 0});case 7:return e.prev=7,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",{success:!1,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function A(){return(A=Object(p.a)(m.a.mark((function e(){var t,a,n,r,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.search,a=new URLSearchParams(t),n=a.get("token"),r=a.get("tokenId"),o=g.b.defaultAppClient.auth.getProviderClient(g.c.factory),e.abrupt("return",o.confirmUser(n,r));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var P=a(665),N=a(105),R=function(e){var t=e.message,a=e.header,n=e.error,o=void 0!==n&&n;return r.a.createElement("div",null,r.a.createElement(P.a,{floating:!0,icon:!0},o?r.a.createElement(N.a,{name:"warning circle"}):null,r.a.createElement(P.a.Content,null,r.a.createElement(P.a.Header,null,a),r.a.createElement("p",null,t," "))))},_=a(155),U=a(156),L=a(162),M=a(160),H=a(667),W=a(336),B=a.n(W),F=[{key:"1",label:"Visits",value:""},{key:"2",label:"Test Users",value:""},{key:"3",label:"Stage Users",value:""},{key:"4",label:"Active Members",value:""}];function V(){return J.apply(this,arguments)}function J(){return(J=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ttk-ui-cvkwt/service/userCount/incoming_webhook/statsWebHook",e.next=3,B()("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ttk-ui-cvkwt/service/userCount/incoming_webhook/statsWebHook",{method:"GET"}).then((function(e){return e.json()}));case 3:return t=e.sent,F.forEach((function(e,a){e.value=Object.values(t[a])[0]})),e.abrupt("return",F);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e){Object(L.a)(a,e);var t=Object(M.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).state={items:{}},n}return Object(U.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:V().then((function(e){return t.setState({items:e})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return F[0].value?r.a.createElement("div",{style:{position:"absolute",bottom:"15%"}},r.a.createElement(H.a.Group,{items:F})):null}}]),a}(r.a.Component),z=a(16);function K(e,t){switch(t.type){case"email":return Object(z.a)(Object(z.a)({},e),{},{email:t.payload});case"password":return Object(z.a)(Object(z.a)({},e),{},{password:t.payload});case"error":return Object(z.a)(Object(z.a)({},e),{},{error:t.payload,active:!1});case"active":return Object(z.a)(Object(z.a)({},e),{},{active:!0});case"modal":return Object(z.a)(Object(z.a)({},e),{},{modal:t.payload,active:!1});default:return e}}var G,q=r.a.createContext(null),Q=a(661),Z=a(670),$=function(e){var t=e.open,a=e.header,n=e.content,o=e.icon;return r.a.createElement(Q.a,{open:t.status,closeIcon:!0,closeOnEscape:!0,closeOnDimmerClick:!0,onClose:function(){return t.setStatus({type:"modal",payload:!1})}},r.a.createElement(Z.a,{icon:o,content:a}),r.a.createElement(Q.a.Content,null,r.a.createElement("p",null,n)))},X=function(){var e=Object(n.useReducer)(K,{email:"",password:"",active:!1,error:"",modal:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(i.g)(),u=Object(n.useContext)(q).setLogged,s=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:"active",payload:!0}),e.next=3,x(a.email,a.password).then((function(e){e.success?(u(!0),c.push("/")):o({type:"error",payload:e.error.message})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o({type:"active",payload:!0}),e.next=3,D(a.email,a.password).then((function(e){return e.success?o({type:"modal",payload:!0}):o({type:"error",payload:e.error.message})}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement($,{open:{status:a.modal,setStatus:o},header:"Email Confirmation",content:" Please Confirm Your Email and Come Back",icon:"mail"}),r.a.createElement("div",{className:"logo"},r.a.createElement("img",{alt:"armut-logo",title:"armut-logo",src:"https://cdn.armut.com/images/tr:h-70/armut-header-logo-colour@2x.png"})),r.a.createElement("div",{style:{position:"absolute",top:"20%"}},r.a.createElement(R,{message:a.error?a.error:"Log in or Sign up so that we can save your precious users",header:a.error?"Upps! Error...":"Welcome to Armut Test Tool Kit",error:!!a.error})),r.a.createElement(d.a,{active:a.active},r.a.createElement(E.a,null)),r.a.createElement(f.a,{placeholder:!0,style:{margin:"0"}},r.a.createElement(v.a,{columns:2,relaxed:"very",stackable:!0},r.a.createElement(v.a.Column,null,r.a.createElement(b.a,null,r.a.createElement(b.a.Input,{icon:"user",iconPosition:"left",type:"email",label:"Email",placeholder:"Email",onChange:function(e,t){return o({type:"email",payload:t.value})}}),r.a.createElement(b.a.Input,{icon:"lock",iconPosition:"left",label:"Password",type:"password",placeholder:"Password",autoComplete:"on",onChange:function(e,t){return o({type:"password",payload:t.value})}})),r.a.createElement(h.a,{content:"Login",icon:"sign in",primary:!0,style:{marginTop:"10px"},onClick:s})),r.a.createElement(v.a.Column,{verticalAlign:"middle"},r.a.createElement(b.a,null,r.a.createElement(b.a.Input,{icon:"user",type:"email",iconPosition:"left",label:"Email",placeholder:"Email",onChange:function(e,t){return o({type:"email",payload:t.value})}}),r.a.createElement(b.a.Input,{icon:"lock",iconPosition:"left",label:"Password",type:"password",placeholder:"Password",autoComplete:"on",onChange:function(e,t){return o({type:"password",payload:t.value})}})),r.a.createElement(h.a,{content:"Sign up",icon:"signup",type:"submit",color:"vk",style:{marginTop:"10px"},onClick:g}))),r.a.createElement(y.a,{vertical:!0},"Or")),r.a.createElement(Y,null))},ee=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),u=Object(l.a)(c,2),s=u[0],d=u[1],E=Object(i.g)(),f=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(s),g.b.defaultAppClient.auth.getProviderClient(g.c.factory).resendConfirmationEmail(s).catch((function(){return console.log("error")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){try{(function(){return A.apply(this,arguments)})().then((function(e){return E.push("/login")})).catch((function(){return o(!0)}))}catch(a){o(!0)}}),[E]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement("div",{style:{display:"block"}},r.a.createElement(R,{header:"Please try to login with your email and password",message:"If you cant login it means you had a trouble with confirmation of your email."}),r.a.createElement(b.a.Input,{icon:"user",iconPosition:"left",type:"email",placeholder:"Email",onChange:function(e,t){return d(t.value)},style:{marginTop:"25px"}}),r.a.createElement(h.a,{style:{marginTop:"10px"},primary:!0,onClick:f},"Resend Confirmation Mail")):null)},te=a(663),ae=a(161),ne=a(354),re=a.n(ne),oe=function(e){var t=e.name,a=e.copy;return r.a.createElement("div",{style:{margin:"5px"}},r.a.createElement(re.a,{text:a},r.a.createElement(h.a,{basic:!0,type:"button",style:{width:"125px"},animated:"fade",size:"medium"},r.a.createElement(h.a.Content,{visible:!0},t),r.a.createElement(h.a.Content,{hidden:!0},"Copy ",r.a.createElement(N.a,{style:{marginLeft:"4px"},name:"clipboard"})))))},ce=function(e){var t=e.card,a=e.onDelete;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{color:"red"},r.a.createElement(ae.a,{attached:"top"},t.id),r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,t.name),r.a.createElement(te.a.Meta,null,r.a.createElement(oe,{name:"Email",copy:t.email})),r.a.createElement(te.a.Meta,null,r.a.createElement(oe,{name:"Password",copy:t.password})),r.a.createElement(te.a.Description,null,r.a.createElement(oe,{name:"Token",copy:t.accessToken}))),r.a.createElement(te.a.Content,{extra:!0},r.a.createElement(h.a,{basic:!0,color:"red",onClick:function(){return a(t.id)}},"Delete User"))))},le=function(e){Object(L.a)(a,e);var t=Object(M.a)(a);function a(){var e;Object(_.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={users:[],loading:!0},e}return Object(U.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,this.setState({users:t,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=function(t){e.setState(Object(z.a)(Object(z.a)({},e.state),{},{loading:!0})),function(e){return w.apply(this,arguments)}(t).then((function(){return e.setState({users:e.state.users.filter((function(e){return e.id!==t})),loading:!1})})).catch((function(){return console.log("cant deleted...")}))};return r.a.createElement("div",null,this.state.loading?r.a.createElement(d.a,{active:this.state.loading},r.a.createElement(E.a,null)):this.state.users.filter((function(t){return t.environment===e.props.env})).length?r.a.createElement(v.a,{columns:"equal",style:{margin:"0 15%"}},r.a.createElement(v.a.Row,{centered:!0,verticalAlign:"middle"},r.a.createElement("h1",null,this.props.env)),this.state.users.filter((function(t){return t.environment===e.props.env})).map((function(e,a){return r.a.createElement(v.a.Column,{key:a},r.a.createElement(ce,{card:e,key:a,onDelete:function(e){return t(e)}}))}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"There is no saved user"),r.a.createElement(h.a,{color:"green",onClick:function(){return Je.push("/")}},"Go to Create One")))}}]),a}(r.a.Component),ie=a(673),ue=a(668),se=a(659),me=a(359),pe=a(657),de=a(21),Ee=function(e){return e.user},fe=function(e){return e.card},ve=a(536),be=function(){var e=Object(de.d)(Ee),t=Object(de.d)(fe),a=t.userId,n=t.email,o=t.password,c=t.accessToken;return r.a.createElement(te.a,{centered:!0},r.a.createElement(me.a,{circular:!0,src:ve("./"+(e.country?e.country:"tr")+".png"),wrapped:!0,ui:!1,label:""!==e.environment?{as:"a",color:"Test"===e.environment?"red":"blue",content:"Test"===e.environment?"TEST":"STAGE",ribbon:!0}:null}),r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,r.a.createElement("span",null,"Serbest Meslek Erbab\u0131")),r.a.createElement(te.a.Meta,null,"ShapeShifter",r.a.createElement("span",null,r.a.createElement(pe.a,{style:{marginLeft:"4px"},name:e.country,size:"huge"}))),r.a.createElement(te.a.Description,null,r.a.createElement("div",null," Valar Morghulis"))),r.a.createElement(te.a.Content,{extra:!0,textAlign:"center"},a?r.a.createElement(oe,{name:"Id",copy:a}):null,n?r.a.createElement(oe,{name:"Email",copy:n}):null,o?r.a.createElement(oe,{name:"Password",copy:o}):null,c?r.a.createElement(oe,{name:"Token",copy:c}):null))},he=[{key:"1",value:"tr",text:"Turkish"},{key:"2",value:"ro",text:"Romanian"},{key:"3",value:"sa",text:"Arabic"},{key:"4",value:"eg",text:"Egyptian"},{key:"5",value:"us",text:"American"},{key:"6",value:"uk",text:"British"}],ye=[{key:"1",value:"1",text:"Pokemon"},{key:"2",value:"142",text:"Nakliye"},{key:"3",value:"32",text:"Badana"},{key:"4",value:"31",text:"\u0130la\xe7lama"},{key:"5",value:"156",text:"Psikolog"},{key:"6",value:"64",text:"\xd6zel Ders"}],ge=[{key:"1",value:"13",text:"Ev Temizli\u011fi"},{key:"2",value:"12",text:"Masaj"}],Oe=[{key:"1",value:"1",text:"BM1"},{key:"2",value:"2",text:"BM2"}],je=[{key:"1",value:"Test",text:"Test"},{key:"2",value:"Stage",text:"Stage"}],ke=[{key:"1",value:"Default",text:"Default"},{key:"2",value:"Custom",text:"Customize"}],Te=(a(543),a(356)),Ce=(a(638),a(664));!function(e){e.TYPE="TYPE",e.ENVIRONMENT="ENVIRONMENT",e.COUNTRY="COUNTRY",e.JOB="JOB",e.DEAL="DEAL",e.PASSWORD="PASSWORD",e.BUSINESSMODEL="BUSINESSMODEL",e.DATE="DATE"}(G||(G={}));var we=function(e){return{type:"DEFAULT",payload:e}},xe=Object(de.b)(null,{dispatchSelectable:function(e,t){return{type:e,payload:t}}})((function(e){var t=e.name.replace(/\s/g,"").toUpperCase();return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a.Column,{textAlign:"center",className:"selectable"},r.a.createElement(Ce.a,{selection:!0,clearable:!0,placeholder:"".concat(e.name),defaultValue:e.defaultValue?e.defaultValue:null,options:e.options,onChange:function(a,n){return e.dispatchSelectable(t,n.value)}})))})),Se=Object(de.b)(null,{dispatchDeal:function(e){return{type:G.DEAL,payload:e}}})((function(e){var t=Object(n.useState)(void 0),a=Object(l.a)(t,2),o=a[0],c=a[1],i=function(t){o!==t&&c(t),e.dispatchDeal(t)};return Object(de.d)(Ee).job?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a.Column,{textAlign:"center",className:"selectable"},r.a.createElement(h.a.Group,{size:"medium",style:{marginTop:"30px"}},"with",r.a.createElement(h.a,{type:"button",positive:0===o,onClick:function(){return i(0)}},e.left),r.a.createElement(h.a.Or,null),r.a.createElement(h.a,{type:"button",positive:1===o,onClick:function(){return i(1)}},e.right)))):null})),De=function(){var e=Object(de.d)(Ee),t=Object(n.useState)(null),a=Object(l.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(!1),u=Object(l.a)(i,2),s=u[0],m=u[1],p=Object(de.c)();return Object(n.useEffect)((function(){var e=null===o||void 0===o?void 0:o.format("YYYY-MM-DD HH:MM");p({type:G.DATE,payload:e})}),[o,p]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(v.a,{columns:"equal",divided:"vertically"},r.a.createElement(v.a.Row,{centered:!0},r.a.createElement(xe,{name:"Country",options:he})),r.a.createElement(v.a.Row,{centered:!0},r.a.createElement(xe,{name:"Business Model",options:Oe}),r.a.createElement(xe,{name:"Job",options:"1"===e.bm?ye:ge})),e.job?r.a.createElement(v.a.Row,{centered:!0},r.a.createElement(v.a.Column,{textAlign:"center"},r.a.createElement(Te.SingleDatePicker,{noBorder:!0,numberOfMonths:1,date:o,onDateChange:function(e){return c(e)},focused:s,onFocusChange:function(e){var t=e.focused;return m(t)},id:"jobDate",isOutsideRange:function(){return!1}}),r.a.createElement(Se,{left:"Quote",right:"Deal"}))):null)))},Ie=function(){var e=Object(de.d)(Ee);return r.a.createElement(n.Fragment,null,"Default"===e.type?r.a.createElement("div",{style:{margin:"0 25%"}},r.a.createElement(P.a,{icon:"info",header:"Use sidebar hiding at the most left side of the page ",content:"All users created are saved, don't worry",size:"small",compact:!0})):null,r.a.createElement(xe,{name:"Type",options:ke,defaultValue:"Default"}),r.a.createElement(xe,{name:"Environment",options:je,defaultValue:"Test"}))},Ae=a(207),Pe=a.n(Ae),Ne=function(){var e=Object(de.d)(Ee),t=Object(de.d)(fe),a=t.userId,n=t.email,o=t.password,c=t.accessToken;return r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{centered:!0},r.a.createElement(me.a,{src:Pe.a,wrapped:!0,ui:!1,label:""!==e.environment?{as:"a",color:"Test"===e.environment?"red":"blue",content:"Test"===e.environment?"TEST":"STAGE",ribbon:!0}:null}),r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,"Pokemon Destek"),r.a.createElement(te.a.Meta,null,r.a.createElement("span",null,"Ash Ketchum")),r.a.createElement(te.a.Description,null,"I wanna be the very best like no one ever was")),r.a.createElement(te.a.Content,{extra:!0,textAlign:"center"},a?r.a.createElement(oe,{name:"Id",copy:a}):null,n?r.a.createElement(oe,{name:"Email",copy:n}):null,o?r.a.createElement(oe,{name:"Password",copy:o}):null,c?r.a.createElement(oe,{name:"Token",copy:c}):null)))},Re=a(100),_e={type:"Default",environment:"Test",job:!1,country:"tr",service:156,deal:void 0,loading:!1,bm:"1"},Ue={environment:"",email:"",password:"",id:"",accessToken:""},Le=Object(Re.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G.TYPE:return Object(z.a)(Object(z.a)({},e),{},{type:t.payload});case G.ENVIRONMENT:return Object(z.a)(Object(z.a)({},e),{},{environment:t.payload});case G.COUNTRY:return Object(z.a)(Object(z.a)({},e),{},{country:t.payload});case G.BUSINESSMODEL:return Object(z.a)(Object(z.a)({},e),{},{bm:t.payload});case G.JOB:return Object(z.a)(Object(z.a)({},e),{},{service:t.payload,job:""!==t.payload});case G.DEAL:return Object(z.a)(Object(z.a)({},e),{},{deal:t.payload});case G.DATE:return Object(z.a)(Object(z.a)({},e),{},{date:t.payload});default:return e}},card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEFAULT":return Object(z.a)(Object(z.a)({},e),{},{userId:t.payload.user_id,email:t.payload.email,password:t.payload.password,accessToken:t.payload.accessToken});default:return e}}}),Me=Object(Re.c)(Le),He={operation:"CREATEUSER",commands:["WITHPHONECONFIRMATION","WITHPASSWORD"]};var We={operation:"CREATEUSER",commands:["WITHPHONECONFIRMATION","WITHPASSWORD"],commandContext:{},jobTestContext:{}};var Be=function(){var e=Object(de.d)(Ee),t=function(e){Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).NODE_TLS_REJECT_UNAUTHORIZED="0";var t="https://ttk.armut.".concat(e,"/operate"),a=Object(n.useState)(!1),r=Object(l.a)(a,2),o=r[0],c=r[1];return[o,function(){c(!0),fetch(t,{method:"POST",body:JSON.stringify(He)}).then((function(e){return e.json()})).then((function(t){var a=t.responseContext,n=t.error;if(!n){var r,o=a[0],c=o.accessToken,l=o.password,i=o.model,u=i.user_id,s=i.email,m=i.first_name;if(!n)Me.dispatch(we({user_id:u,email:s,password:l,accessToken:c,name:m})),j.collection("test").insertOne({user_id:null===(r=O.auth.user)||void 0===r?void 0:r.id,id:u,environment:e,email:s,password:l,accessToken:c,name:m})}})).catch((function(e){console.log(e)})).finally((function(){c(!1)}))}]}(e.environment),a=Object(l.a)(t,2),o=a[0],c=a[1],i=function(e){Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).NODE_TLS_REJECT_UNAUTHORIZED="0";var t="https://ttk.armut.".concat(e,"/operate"),a=Object(de.d)(Ee),r=Object(n.useState)(!1),o=Object(l.a)(r,2),c=o[0],i=o[1];return[c,function(){if(a.job){var e,n;if(We.commands.push("WITHJOB"),We.jobTestContext={operation:"CREATEJOB",commands:["WITHSERVICEID"],commandContext:{serviceId:parseInt(a.service)}},a.date)null===(e=We.jobTestContext.commands)||void 0===e||e.push("WITHJOBDATE"),We.jobTestContext.commandContext=Object(z.a)(Object(z.a)({},We.jobTestContext.commandContext),{},{jobDate:a.date});if(1===a.deal)null===(n=We.jobTestContext.commands)||void 0===n||n.push("WITHDEAL"),We.jobTestContext.commandContext=Object(z.a)(Object(z.a)({},We.jobTestContext.commandContext),{},{jobDate:a.date}),We.jobTestContext.proTestContext={operation:["CREATEPRO"],commands:["WITHCREDITCARD","WITHBALANCE"],commandContext:{proBalance:1e4}};else if(0===a.deal){var r;null===(r=We.jobTestContext.commands)||void 0===r||r.push("WITHQUOTES")}console.log(We)}i(!0),fetch(t,{method:"POST",body:JSON.stringify(We)}).then((function(e){return e.json()})).then((function(e){var t,a=e.responseContext,n=e.error,r=a[0],o=r.accessToken,c=r.password,l=r.model,i=l.user_id,u=l.email,s=l.first_name;n||(Me.dispatch(we({user_id:i,email:u,password:c,accessToken:o,name:s})),j.collection("test").insertOne({user_id:null===(t=O.auth.user)||void 0===t?void 0:t.id,id:i,email:u,password:c,accessToken:o,first_name:s}).then((function(e){return console.log("Successfully inserted item with _id: ".concat(e.insertedId))})).catch((function(e){return console.error("Failed to insert item: ".concat(e))})))})).finally((function(){i(!1)}))}]}(e.environment),u=Object(l.a)(i,2),s=u[0],m=u[1],p="Default"===e.type?c:m,f="Default"===e.type?o:s;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{active:f},r.a.createElement(E.a,null)),r.a.createElement(h.a,{icon:!0,labelPosition:"left",id:"saveUser",size:"medium",color:"instagram",type:"button",style:{display:"inline-block",margin:"10px auto 10px 5px"},onClick:function(){return p()}},r.a.createElement(N.a,{name:"plus"}),"Create User"))},Fe=Object(de.b)(null,null)((function(){var e=Object(de.d)(Ee),t=Object(de.c)();return Object(n.useEffect)((function(){t({type:G.TYPE,payload:"Default"}),t({type:G.ENVIRONMENT,payload:"Test"})}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0px 15%"}},r.a.createElement(v.a,{columns:"Custom"===e.type?2:1,divided:!0,stackable:!0},r.a.createElement(v.a.Column,null,r.a.createElement(Ie,null),"Custom"===e.type?r.a.createElement(be,e):r.a.createElement(Ne,null)),"Custom"===e.type?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a.Column,null,r.a.createElement(De,null))):null,r.a.createElement(se.a,{style:{margin:"15px auto"}},r.a.createElement(Be,null)))))})),Ve=a(43),Je=Object(Ve.a)();var Ye=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(O.auth.isLoggedIn),s=Object(l.a)(c,2),m=s[0],p=s[1];return O.auth.addAuthListener({onUserLoggedIn:function(){return p(!0)},onUserLoggedOut:function(){return p(!1)}}),r.a.createElement(i.c,{history:Je},r.a.createElement(ie.a.Pushable,{as:f.a},r.a.createElement(ie.a,{onMouseLeave:function(){return o(!1)},as:ue.a,animation:"overlay",icon:"labeled",inverted:!0,onHide:function(){return o(!1)},vertical:!0,visible:a,width:"thin"},r.a.createElement(u.a,{to:"/"},r.a.createElement(ue.a.Item,{as:"div"},r.a.createElement(N.a,{name:"home"}),"Home")),r.a.createElement(u.a,{to:"/test-user"},r.a.createElement(ue.a.Item,{as:"div"},r.a.createElement(N.a,{name:"folder"}),"Test - Saved")),r.a.createElement(u.a,{to:"/stage-user"},r.a.createElement(ue.a.Item,{as:"div"},r.a.createElement(N.a,{name:"folder outline"}),"Stage - Saved")),r.a.createElement(u.a,{to:"/login"},r.a.createElement(ue.a.Item,{as:"div",onClick:function(){return O.auth.logout()}},r.a.createElement(N.a,{name:m?"sign-out":"sign-in"}),m?"Log Out":"Log In"))),r.a.createElement(ie.a.Pusher,{dimmed:a},r.a.createElement("div",{className:"App"},r.a.createElement(q.Provider,{value:{logged:m,setLogged:p}},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login"},r.a.createElement(X,null)),r.a.createElement(i.b,{path:"/confirm"},r.a.createElement(ee,null)),!m&&r.a.createElement(i.a,{push:!0,to:"/login"}),r.a.createElement(i.b,{path:"/test-user"},r.a.createElement(le,{env:"Test"})),r.a.createElement(i.b,{path:"/stage-user"},r.a.createElement(le,{env:"Stage"})),r.a.createElement(i.b,{path:"/"},r.a.createElement(Fe,null))))))),r.a.createElement("div",{style:{position:"absolute",left:"0",top:"0",width:"3%",height:"100%"},onMouseEnter:function(){return o(!0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,{store:Me},r.a.createElement(Ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[370,1,2]]]);
//# sourceMappingURL=main.be3d655f.chunk.js.map