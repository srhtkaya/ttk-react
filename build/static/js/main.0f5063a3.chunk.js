(this.webpackJsonpttkui=this.webpackJsonpttkui||[]).push([[0],{218:function(e,t,n){e.exports=n.p+"static/media/pokemon-destek.eb7bf3da.png"},398:function(e,t,n){e.exports=n(674)},403:function(e,t,n){},534:function(e,t){},667:function(e,t,n){var a={"./eg.png":668,"./pokemon-destek.png":218,"./ro.png":669,"./sa.png":670,"./tr.png":671,"./uk.png":672,"./us.png":673};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=667},668:function(e,t,n){e.exports=n.p+"static/media/eg.ee87944d.png"},669:function(e,t,n){e.exports=n.p+"static/media/ro.7c6628a2.png"},670:function(e,t,n){e.exports=n.p+"static/media/sa.bb924894.png"},671:function(e,t,n){e.exports=n.p+"static/media/tr.046e91f7.png"},672:function(e,t,n){e.exports=n.p+"static/media/uk.b702632c.png"},673:function(e,t,n){e.exports=n.p+"static/media/us.2918610d.png"},674:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(40),l=n.n(c),i=(n(403),n(21)),u=n(47),s=n(9),m=n.n(s),d=n(18),E=n(22),p=o.a.createContext(null),f=n(133);!function(e){e.service="mongodb-atlas",e.collection="test",e.database="ttk-ui-db"}(a||(a={}));var v="https://ttk-ui-cvkwt.mongodbstitch.com/redirect",b=new f.a({id:"ttk-ui-cvkwt"}),O=b.services.mongodb(a.service).db(a.database).collection(a.collection);function h(){return(h=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=f.b.google(v),b.logIn(n).then((function(e){t({isLoggedIn:!0,currentUser:e}),console.log("signed in successfully with id:"+e.id)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var t=Object(r.useRef)(b),n=Object(r.useState)(b.currentUser),a=Object(E.a)(n,2),c=a[0],l=a[1];Object(r.useEffect)((function(){l(b.currentUser)}),[t.current.currentUser]);var i=function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b.currentUser){e.next=4;break}return e.next=3,null===(t=b.currentUser)||void 0===t?void 0:t.logOut();case 3:l(b.currentUser);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(p.Provider,{value:{user:c,actions:{logOut:i,setAuthState:l}}},e.children)}var g=n(702),y=n(701),C=n(696),k=n(112),j=n(114),S=function(){return o.a.createElement(p.Consumer,null,(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{to:"/"},o.a.createElement(C.a.Item,{as:"div"},o.a.createElement(j.a,{name:"home"}),"Home")),o.a.createElement(k.a,{to:"/test-user"},o.a.createElement(C.a.Item,{as:"div"},o.a.createElement(j.a,{name:"folder"}),"Test - Saved")),o.a.createElement(k.a,{to:"/stage-user"},o.a.createElement(C.a.Item,{as:"div"},o.a.createElement(j.a,{name:"folder outline"}),"Stage - Saved")),o.a.createElement(k.a,{to:"/login"},o.a.createElement(C.a.Item,{as:"div",onClick:function(){e.isLoggedIn&&e.actions.handleLogout()}},o.a.createElement(j.a,{name:e.isLoggedIn?"sign-out":"sign-in"}),e.isLoggedIn?"Log Out":"Log In")))}))},x=n(698),I=n(699),D=n(695),A=n(27),w=n(28),R=n(69),N=n(70),U=n(697),M=n(362),P=n.n(M),H=[{key:"1",label:"Visits",value:""},{key:"2",label:"Test Users",value:""},{key:"3",label:"Stage Users",value:""},{key:"4",label:"Active Members",value:""}];function L(){return W.apply(this,arguments)}function W(){return(W=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ttk-ui-cvkwt/service/userCount/incoming_webhook/statsWebHook",e.next=3,P()("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ttk-ui-cvkwt/service/userCount/incoming_webhook/statsWebHook",{method:"GET"}).then((function(e){return e.json()}));case 3:return t=e.sent,H.forEach((function(e,n){e.value=Object.values(t[n])[0]})),e.abrupt("return",H);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B,_=function(e){Object(R.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(A.a)(this,n),(a=t.call(this,e)).state={items:{}},a}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L().then((function(e){return t.setState({items:e})}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return H[0].value?o.a.createElement("div",{style:{position:"absolute",bottom:"15%"}},o.a.createElement(U.a.Group,{items:H})):null}}]),n}(o.a.Component),J=function(){var e=Object(r.useContext)(p);return Object(r.useEffect)((function(){e.user&&Ve.push("/")}),[e.user]),o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{columns:1,relaxed:"very",stackable:!0},o.a.createElement(x.a.Column,null,o.a.createElement(I.a,{as:"h1",icon:!0},o.a.createElement(j.a,{name:"briefcase"}),"Armut Test Tool Kit",o.a.createElement(I.a.Subheader,null,"Manage your test users"),o.a.createElement(I.a.Content,null,o.a.createElement(D.a,{style:{marginTop:"20px"},onClick:function(){return function(e){return h.apply(this,arguments)}(e.actions.setAuthState)}},"Login"))))),o.a.createElement(_,null))},F=n(700),V=n(683),Q=function(){return Object(r.useEffect)((function(){Object(f.c)()}),[]),o.a.createElement(y.a,{style:{height:"100vh",width:"100vw"}},o.a.createElement(F.a,{active:!0},o.a.createElement(V.a,{size:"huge"},"Please wait...")))},Y=n(16),z=n(692),K=n(388),G=n(691),Z=function(e){var t=e.name,n=e.copy,a=Object(r.useState)(!1),c=Object(E.a)(a,2),l=c[0],i=c[1];return o.a.createElement("div",{style:{margin:"5px"}},o.a.createElement(G.a,{on:"click",open:l,onOpen:function(){i(!0),setTimeout((function(){i(!1)}),3e3)},content:"Copied To Clipboard",position:"top center",trigger:o.a.createElement(D.a,{basic:!0,type:"button",style:{width:"125px"},animated:"fade",size:"medium",onClick:function(){return function(){var e=document.createElement("textarea");e.value=n,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}()}},o.a.createElement(D.a.Content,{visible:!0},t),o.a.createElement(D.a.Content,{hidden:!0},"Copy",o.a.createElement(j.a,{style:{marginLeft:"4px"},name:"clipboard"})))}))},q=n(689),X=n(688),$=[{key:"1",value:"tr",text:"Turkish"},{key:"2",value:"ro",text:"Romanian"},{key:"3",value:"sa",text:"Arabic"},{key:"4",value:"eg",text:"Egyptian"},{key:"5",value:"us",text:"American"},{key:"6",value:"uk",text:"British"}],ee=[{key:"1",value:"1",text:"Pokemon"},{key:"2",value:"142",text:"Nakliye"},{key:"3",value:"32",text:"Badana"},{key:"4",value:"31",text:"\u0130la\xe7lama"},{key:"5",value:"156",text:"Psikolog"},{key:"6",value:"64",text:"\xd6zel Ders"}],te=[{key:"1",value:"13",text:"Ev Temizli\u011fi"},{key:"2",value:"12",text:"Masaj"}],ne=[{key:"1",value:"1",text:"BM1"},{key:"2",value:"2",text:"BM2"}],ae=[{key:"1",value:"Test",text:"Test"},{key:"2",value:"Stage",text:"Stage"}],re=[{key:"1",value:"Default",text:"Default"},{key:"2",value:"Custom",text:"Customize"}],oe=(n(527),n(368)),ce=(n(615),n(693));!function(e){e.TYPE="TYPE",e.ENVIRONMENT="ENVIRONMENT",e.COUNTRY="COUNTRY",e.JOB="JOB",e.DEAL="DEAL",e.PASSWORD="PASSWORD",e.BUSINESSMODEL="BUSINESSMODEL",e.DATE="DATE"}(B||(B={}));var le=function(e){return{type:"DEFAULT",payload:e}},ie=n(25),ue=Object(ie.b)(null,{dispatchSelectable:function(e,t){return{type:e,payload:t}}})((function(e){var t=e.name.replace(/\s/g,"").toUpperCase();return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a.Column,{textAlign:"center",className:"selectable"},o.a.createElement(ce.a,{selection:!0,placeholder:"".concat(e.name),defaultValue:e.defaultValue?e.defaultValue:null,options:e.options,onChange:function(n,a){return e.dispatchSelectable(t,a.value)}})))})),se=function(e){return e.user},me=function(e){return e.card},de=Object(ie.b)(null,{dispatchDeal:function(e){return{type:B.DEAL,payload:e}}})((function(e){var t=Object(r.useState)(void 0),n=Object(E.a)(t,2),a=n[0],c=n[1],l=function(t){a!==t&&c(t),e.dispatchDeal(t)};return Object(ie.d)(se).job?o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a.Column,{textAlign:"center",className:"selectable"},o.a.createElement(D.a.Group,{size:"medium",style:{marginTop:"30px"}},"with",o.a.createElement(D.a,{type:"button",positive:0===a,onClick:function(){return l(0)}},e.left),o.a.createElement(D.a.Or,null),o.a.createElement(D.a,{type:"button",positive:1===a,onClick:function(){return l(1)}},e.right)))):null})),Ee=function(){var e=Object(ie.d)(se),t=Object(r.useState)(null),n=Object(E.a)(t,2),a=n[0],c=n[1],l=Object(r.useState)(!1),i=Object(E.a)(l,2),u=i[0],s=i[1],m=Object(ie.c)();return Object(r.useEffect)((function(){var e=null===a||void 0===a?void 0:a.format("YYYY-MM-DD HH:MM");m({type:B.DATE,payload:e})}),[a,m]),o.a.createElement(o.a.Fragment,null,o.a.createElement(X.a,null,o.a.createElement(x.a,{columns:"equal",divided:"vertically"},o.a.createElement(x.a.Row,{centered:!0},o.a.createElement(ue,{name:"Country",options:$})),o.a.createElement(x.a.Row,{centered:!0},o.a.createElement(ue,{name:"Business Model",options:ne}),o.a.createElement(ue,{name:"Job",options:"1"===e.bm?ee:te})),e.job?o.a.createElement(x.a.Row,{centered:!0},o.a.createElement(x.a.Column,{textAlign:"center"},o.a.createElement(oe.SingleDatePicker,{noBorder:!0,numberOfMonths:1,date:a,onDateChange:function(e){return c(e)},focused:u,onFocusChange:function(e){var t=e.focused;return s(t)},id:"jobDate",isOutsideRange:function(){return!1}}),o.a.createElement(de,{left:"Quote",right:"Deal"}))):null)))},pe=function e(t){var n=Object(r.useState)(!1),a=Object(E.a)(n,2),c=a[0],l=a[1];return o.a.createElement(q.a,{closeIcon:!0,size:"tiny",onClose:function(){return l(!1)},onOpen:function(){return l(!0)},open:c,trigger:t.children},o.a.createElement(q.a.Header,null,"Create Job"),o.a.createElement(q.a.Content,{image:!0},o.a.createElement(Ee,null)),o.a.createElement(q.a.Actions,null,o.a.createElement(D.a,{color:"black",onClick:function(){return l(!1)}},"Cancel"),o.a.createElement(D.a,{content:"Next",labelPosition:"right",icon:"plus",onClick:function(){l(!1),e("a")},positive:!0})))},fe=function(e){var t=e.card,n=e.onDelete;return o.a.createElement(o.a.Fragment,null,o.a.createElement(z.a,{color:"red"},o.a.createElement(K.a,{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t.imageId,".png"),wrapped:!0,ui:!1,size:"small",style:{width:"auto",height:"auto"}}),o.a.createElement(z.a.Content,{style:{textAlign:"center"}},o.a.createElement(z.a.Header,{style:{marginBottom:"20px"}},t.name),o.a.createElement(z.a.Meta,null,o.a.createElement(Z,{name:"User Id",copy:t.id})),o.a.createElement(z.a.Meta,null,o.a.createElement(Z,{name:"Email",copy:t.email})),o.a.createElement(z.a.Meta,null,o.a.createElement(Z,{name:"Password",copy:t.password})),o.a.createElement(z.a.Description,null,o.a.createElement(Z,{name:"Token",copy:t.accessToken}))),o.a.createElement(z.a.Content,{extra:!0},o.a.createElement(D.a.Group,null,o.a.createElement(pe,null,o.a.createElement(D.a,{basic:!0,color:"green",onClick:function(){return console.log("X")}},"Create Job")),o.a.createElement(D.a,{basic:!0,color:"red",onClick:function(){return n(t.id)}},"Delete User")))))};function ve(){return(ve=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.deleteOne({id:t}).then((function(){return console.log("deleted")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.find().then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var he,Te,ge=function(e){Object(R.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(A.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={users:[],loading:!0},e}return Object(w.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:t=e.sent,this.setState({users:t,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=function(t){e.setState(Object(Y.a)(Object(Y.a)({},e.state),{},{loading:!0})),function(e){return ve.apply(this,arguments)}(t).then((function(){return e.setState({users:e.state.users.filter((function(e){return e.id!==t})),loading:!1})})).catch((function(){return console.log("cant deleted...")}))};return o.a.createElement("div",null,this.state.loading?o.a.createElement(F.a,{active:this.state.loading},o.a.createElement(V.a,null)):this.state.users.filter((function(t){return t.environment===e.props.env})).length?o.a.createElement(x.a,{container:!0,stackable:!0,stretched:!0,columns:"4",style:{margin:"auto auto"},centered:!0},o.a.createElement(x.a.Row,{centered:!0,verticalAlign:"middle"},o.a.createElement("h1",null,this.props.env)),this.state.users.filter((function(t){return t.environment===e.props.env})).map((function(e,n){return o.a.createElement(x.a.Column,{key:n},o.a.createElement(fe,{card:e,key:n,onDelete:function(e){return t(e)}}))}))):o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"There is no saved user"),o.a.createElement(D.a,{color:"green",onClick:function(){return Ve.push("/")}},"Go to Create One")))}}]),n}(o.a.Component),ye=n(687),Ce=n(686),ke=n(667),je=function(){var e=Object(ie.d)(se),t=Object(ie.d)(me),n=t.userId,a=t.email,r=t.password,c=t.accessToken;return o.a.createElement(z.a,{centered:!0},o.a.createElement(K.a,{circular:!0,src:ke("./"+(e.country?e.country:"tr")+".png"),wrapped:!0,ui:!1,label:""!==e.environment?{color:"Test"===e.environment?"red":"blue",content:"Test"===e.environment?"TEST":"STAGE",ribbon:!0}:null}),o.a.createElement(z.a.Content,null,o.a.createElement(z.a.Header,null,o.a.createElement("span",null,"Serbest Meslek Erbab\u0131")),o.a.createElement(z.a.Meta,null,"ShapeShifter",o.a.createElement("span",null,o.a.createElement(Ce.a,{style:{marginLeft:"4px"},name:e.country,size:"huge"}))),o.a.createElement(z.a.Description,null,o.a.createElement("div",null," Valar Morghulis"))),o.a.createElement(z.a.Content,{extra:!0,textAlign:"center"},n?o.a.createElement(Z,{name:"Id",copy:n}):null,a?o.a.createElement(Z,{name:"Email",copy:a}):null,r?o.a.createElement(Z,{name:"Password",copy:r}):null,c?o.a.createElement(Z,{name:"Token",copy:c}):null),o.a.createElement(j.a,{name:"user"}))},Se=n(694),xe=function(){var e,t=Object(ie.d)(se),n=null===(e=b.currentUser)||void 0===e?void 0:e.profile.firstName,a="Hi ".concat(n,", do not forget to use sidebar hiding at the most left side of the page");return o.a.createElement(r.Fragment,null,"Default"===t.type?o.a.createElement("div",{style:{margin:"0 25%"}},o.a.createElement(Se.a,{icon:"info",header:a,content:"All users created are saved, don't worry",size:"small",compact:!0})):null,o.a.createElement(ue,{name:"Type",options:re,defaultValue:"Default"}),o.a.createElement(ue,{name:"Environment",options:ae,defaultValue:"Test"}))},Ie=n(218),De=n.n(Ie),Ae=function(){var e=Object(ie.d)(se),t=Object(ie.d)(me),n=t.userId,a=t.email,r=t.password,c=t.accessToken;return o.a.createElement(o.a.Fragment,null,o.a.createElement(z.a,{centered:!0},o.a.createElement(K.a,{src:De.a,wrapped:!0,ui:!1,label:""!==e.environment?{as:"a",color:"Test"===e.environment?"red":"blue",content:"Test"===e.environment?"TEST":"STAGE",ribbon:!0}:null}),o.a.createElement(z.a.Content,null,o.a.createElement(z.a.Header,null,"Pokemon Destek"),o.a.createElement(z.a.Meta,null,o.a.createElement("span",null,"Ash Ketchum")),o.a.createElement(z.a.Description,null,"I wanna be the very best like no one ever was")),o.a.createElement(z.a.Content,{extra:!0,textAlign:"center"},n?o.a.createElement(Z,{name:"Id",copy:n}):null,a?o.a.createElement(Z,{name:"Email",copy:a}):null,r?o.a.createElement(Z,{name:"Password",copy:r}):null,c?o.a.createElement(Z,{name:"Token",copy:c}):null)))},we=n(111),Re={type:"Default",environment:"Test",job:!1,country:"tr",service:156,deal:void 0,loading:!1,bm:"1"},Ne={environment:"",email:"",password:"",id:"",accessToken:"",imageId:void 0},Ue=Object(we.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B.TYPE:return Object(Y.a)(Object(Y.a)({},e),{},{type:t.payload});case B.ENVIRONMENT:return Object(Y.a)(Object(Y.a)({},e),{},{environment:t.payload});case B.COUNTRY:return Object(Y.a)(Object(Y.a)({},e),{},{country:t.payload});case B.BUSINESSMODEL:return Object(Y.a)(Object(Y.a)({},e),{},{bm:t.payload});case B.JOB:return Object(Y.a)(Object(Y.a)({},e),{},{service:t.payload,job:""!==t.payload});case B.DEAL:return Object(Y.a)(Object(Y.a)({},e),{},{deal:t.payload});case B.DATE:return Object(Y.a)(Object(Y.a)({},e),{},{date:t.payload});default:return e}},card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEFAULT":return Object(Y.a)(Object(Y.a)({},e),{},{userId:t.payload.user_id,email:t.payload.email,password:t.payload.password,accessToken:t.payload.accessToken});default:return e}}}),Me=Object(we.c)(Ue),Pe={operation:"CREATEUSER",commands:["WITHPHONECONFIRMATION","WITHPASSWORD"]};!function(e){e.USER="CREATEUSER",e.PRO="CREATEPRO",e.JOB="CREATEJOB",e.QUOTE="PLACEQUOTE",e.DEAL="CREATEDEAL",e.VERIFICATION="ConfirmPhone"}(he||(he={})),function(e){e.MODEL="WITHMODEL",e.AUTHTOKEN="WITHAUTHTOKEN",e.JOB="WITHJOB",e.JOBDATE="WITHJOBDATE",e.REPLACEANSWER="WITHREPLACEANSWER",e.COUNTRY="WITHCOUNTRYID",e.JOBSTATUS="WITHSTATUS",e.BM="WITHBUSINESSMODEL",e.SERVICEID="WITHSERVICEID",e.QUOTES="WITHQUOTES",e.QUOTEPRICE="WITHQUOTEPRICE",e.QUOTECOUNT="WITHQUOTECOUNT",e.QUOTEMESSAGE="WITHQUOTEMESSAGE",e.QUOTEID="WITHQUOTEID",e.CREDITCARD="WITHCREDITCARD",e.BALANCE="WITHBALANCE",e.DEAL="WITHDEAL",e.PASSWORD="WITHPASSWORD",e.PHONECONFIRMATION="WITHPHONECONFIRMATON"}(Te||(Te={}));var He={operation:he.PRO,commands:[Te.PASSWORD,Te.CREDITCARD,Te.BALANCE],commandContext:{proBalance:1e4}},Le={operation:he.JOB,commands:[Te.SERVICEID,Te.QUOTES],commandContext:{serviceId:156},proTestContext:He},We={operation:he.USER,commands:[Te.PHONECONFIRMATION,Te.PASSWORD,Te.JOB],jobTestContext:Le};var Be=function(){var e=Object(ie.d)(se),t=function(e){Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).NODE_TLS_REJECT_UNAUTHORIZED="0";var t="https://ttk.armut.".concat(e,"/operate"),n=Object(r.useState)(!1),a=Object(E.a)(n,2),o=a[0],c=a[1],l=new AbortController,i=l.signal;return[o,function(){c(!0),setTimeout((function(){return l.abort()}),2e4),fetch(t,{method:"POST",body:JSON.stringify(Pe),signal:i}).then((function(e){return e.json()})).then((function(t){var n=t.responseContext,a=t.error;if(!a){var r=n[0],o=r.accessToken,c=r.password,l=r.model,i=l.user_id,u=l.email,s=l.first_name;if(!a){var m,d=Math.floor(Math.random()*Math.floor(151));Me.dispatch(le({user_id:i,email:u,password:c,accessToken:o,name:s,imageId:d})),O.insertOne({user_id:null===(m=b.currentUser)||void 0===m?void 0:m.id,id:i,environment:e,email:u,password:c,accessToken:o,name:s,imageId:d})}}})).catch((function(e){console.log(e)})).finally((function(){c(!1)}))}]}(e.environment),n=Object(E.a)(t,2),a=n[0],c=n[1],l=function(e){var t=JSON.parse(JSON.stringify(We));Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).NODE_TLS_REJECT_UNAUTHORIZED="0";var n="https://ttk.armut.".concat(e,"/operate"),a=Object(ie.d)(se),o=Object(r.useState)(!1),c=Object(E.a)(o,2),l=c[0],i=c[1];return[l,function(){if(a.job){var e,r,o;if(null===(e=t.commands)||void 0===e||e.push(Te.JOB),t.jobTestContext={operation:he.JOB,commands:[Te.SERVICEID],commandContext:{serviceId:parseInt(a.service)}},a.date)null===(r=t.jobTestContext.commands)||void 0===r||r.push(Te.JOBDATE),t.jobTestContext.commandContext=Object(Y.a)(Object(Y.a)({},t.jobTestContext.commandContext),{},{jobDate:a.date});if(a.deal)null===(o=t.jobTestContext.commands)||void 0===o||o.push(Te.DEAL),t.jobTestContext.commandContext=Object(Y.a)(Object(Y.a)({},t.jobTestContext.commandContext),{},{jobDate:a.date}),t.jobTestContext.proTestContext={operation:he.PRO,commands:[Te.CREDITCARD,Te.BALANCE],commandContext:{proBalance:1e4}};else if(!a.deal){var c;null===(c=t.jobTestContext.commands)||void 0===c||c.push(Te.QUOTES)}}console.log(t),i(!0),fetch(n,{method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){var t=e.responseContext,n=e.error,a=t[0],r=a.accessToken,o=a.password,c=a.model,l=c.user_id,i=c.email,u=c.first_name;if(!n){var s,m=Math.floor(Math.random()*Math.floor(151));Me.dispatch(le({user_id:l,email:i,password:o,accessToken:r,name:u,imageId:m})),O.insertOne({user_id:null===(s=b.currentUser)||void 0===s?void 0:s.id,id:l,email:i,password:o,accessToken:r,first_name:u,imageId:m}).then((function(e){return console.log("Successfully inserted item with _id: ".concat(e.insertedId))})).catch((function(e){return console.error("Failed to insert item: ".concat(e))}))}})).finally((function(){i(!1)}))}]}(e.environment),i=Object(E.a)(l,2),u=i[0],s=i[1],m="Default"===e.type?c:s,d="Default"===e.type?a:u;return o.a.createElement(o.a.Fragment,null,o.a.createElement(F.a,{active:d},o.a.createElement(V.a,null)),o.a.createElement(D.a,{icon:!0,labelPosition:"left",id:"saveUser",size:"medium",color:"instagram",type:"button",style:{display:"inline-block",margin:"10px auto 10px 5px"},onClick:function(){return m()}},o.a.createElement(j.a,{name:"plus"}),"Create User"))},_e=Object(ie.b)(null,null)((function(){var e=Object(ie.d)(se),t=Object(ie.c)();return Object(r.useEffect)((function(){t({type:B.TYPE,payload:"Default"}),t({type:B.ENVIRONMENT,payload:"Test"})}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{margin:"0px 15%"}},o.a.createElement(x.a,{columns:"Custom"===e.type?2:1,divided:!0,stackable:!0},o.a.createElement(x.a.Column,null,o.a.createElement(xe,null),"Custom"===e.type?o.a.createElement(je,e):o.a.createElement(Ae,null)),"Custom"===e.type?o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a.Column,null,o.a.createElement(Ee,null))):null,o.a.createElement(ye.a,{style:{margin:"15px auto"}},o.a.createElement(Be,null)))))})),Je=function(){return o.a.createElement(p.Consumer,null,(function(e){return o.a.createElement("div",{className:"App"},o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/login",component:J}),o.a.createElement(i.b,{path:"/redirect",component:Q}),!e.user&&o.a.createElement(i.a,{push:!0,to:"/login"}),o.a.createElement(i.b,{path:"/test-user"},o.a.createElement(ge,{env:"Test"})),o.a.createElement(i.b,{path:"/stage-user"},o.a.createElement(ge,{env:"Stage"})),o.a.createElement(i.b,{path:"/",component:_e})))}))},Fe=function(){var e=Object(r.useState)(!1),t=Object(E.a)(e,2),n=t[0],a=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a.Pushable,{as:y.a},o.a.createElement(g.a,{onMouseLeave:function(){return a(!1)},as:C.a,animation:"overlay",icon:"labeled",inverted:!0,onHide:function(){return a(!1)},vertical:!0,visible:n,width:"thin"},o.a.createElement(S,null)),o.a.createElement(g.a.Pusher,{dimmed:n},o.a.createElement(Je,null))),o.a.createElement("div",{style:{position:"absolute",left:"0",top:"0",width:"3%",height:"100%"},onMouseEnter:function(){return a(!0)}}))},Ve=Object(u.a)();var Qe=function(){return o.a.createElement(i.c,{history:Ve},o.a.createElement(T,null,o.a.createElement(Fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(ie.a,{store:Me},o.a.createElement(Qe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[398,1,2]]]);
//# sourceMappingURL=main.0f5063a3.chunk.js.map