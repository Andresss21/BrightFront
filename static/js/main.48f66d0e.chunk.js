(this["webpackJsonpproyecto-becarios-ufg"]=this["webpackJsonpproyecto-becarios-ufg"]||[]).push([[0],{115:function(e,t,a){},262:function(e,t){},264:function(e,t){},274:function(e,t){},276:function(e,t){},302:function(e,t){},304:function(e,t){},305:function(e,t){},310:function(e,t){},312:function(e,t){},318:function(e,t){},320:function(e,t){},339:function(e,t){},351:function(e,t){},354:function(e,t){},360:function(e,t,a){"use strict";a.r(t);var n,r=a(7),l=a.n(r),c=a(192),s=a.n(c),o=(a(115),a(207),a(110)),i=a(17),d=a(13),b=a(40),u=a(193),p=a(194),j=a(195),x=Object(u.a)({apiKey:"AIzaSyAG7eH4OBuDhUOZPQfyeO7t1s9YJ7QQ_NU",authDomain:"proyectos-becarios-ufg.firebaseapp.com",projectId:"goosebase-bbcf3",storageBucket:"proyectos-becarios-ufg.appspot.com",messagingSenderId:"749455773986",appId:"1:749455773986:web:ca76274bf9a6c246c0d57b",measurementId:"G-HFNJJP0R8K"}),m=Object(p.a)(),f=(Object(j.a)(x),a(5)),h=l.a.createContext(),O=function(e){var t=e.children,a=Object(r.useState)(null),n=Object(d.a)(a,2),l=n[0],c=n[1],s=Object(r.useState)(!0),o=Object(d.a)(s,2),i=o[0],u=o[1];return Object(r.useEffect)((function(){Object(b.b)(m,(function(e){c(e),u(!1)}))}),[]),i?Object(f.jsx)(f.Fragment,{children:"Loading..."}):Object(f.jsx)(h.Provider,{value:{currentUser:l},children:t})},g=a(75),v=a(202),N=["component"],w=function(e){var t=e.component,a=Object(v.a)(e,N),n=Object(r.useContext)(h).currentUser;return Object(f.jsx)(i.d,{children:Object(f.jsx)(i.b,Object(g.a)(Object(g.a)({},a),{},{render:function(e){return n?Object(f.jsx)(t,Object(g.a)({},e)):Object(f.jsx)(i.a,{to:"/"})}}))})},y=a(197),A=a(0),k=a.n(A),C=a(1),I=a(64),_=a.n(I),S=a(46),D=a.n(S),G=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n,r,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="api/contact/".concat("N"!==t?t:"N"),e.next=5,_.a.get("http://localhost:4000/"+a);case 5:return n=e.sent,r=D.a.values(n),e.next=9,Promise.all(D.a.map(n.data.contacts,function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n,l,c,s,o,i,d,b,u,p,j,x,m,f,h,O,g,v,N,w,y,A,C,I,_,S,G;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.properties,n=a.firstname?a.firstname.value:"NA",l=a.lastname?a.lastname.value:"NA",c=a.email?a.email.value:"NA",s=a.phone?a.phone.value:"NA",o=a.source?a.source.value:"NA",i=a.zip?a.zip.value:"NA",d=a.state?a.state.value:"NA",b=a.city?a.city.value:"NA",u=a.address?a.address.value:"NA",p=a.company?a.company.value:"NA",j=a.mobilephone?a.mobilephone.value:"NA",x=a.hubspot_owner_id?a.hubspot_owner_id.value:"NA",m="NA",f=a.lastmodifieddate?new Date(parseInt(a.lastmodifieddate.value)).toDateString():"NA",h=t.vid?t.vid:"NA",O=a.call_center_id?a.call_center_id.value:"NA",g=a.call_center_agent?a.call_center_agent.value:"NA",v=a.appointment?new Date(parseInt(a.appointment.value)):"NA",N=a.time?a.time.value:"NA",w=a.notes?a.notes.value:"NA",y=a.preferred_consultation_method?a.preferred_consultation_method.value:"NA",A=a.hs_language?a.hs_language.value:"NA",C=a.qualified_appointment?a.qualified_appointment.value:"NA",I=a.audio_recording?a.audio_recording.value:"NA",e.next=27,M(h);case 27:if(_=e.sent,S="NA","NA"===x){e.next=33;break}return e.next=32,E(x);case 32:m=e.sent;case 33:if(void 0===_||"NA"===_){e.next=36;break}return e.next=36,F(_).then((function(e){S=e.name,G=e.stage}));case 36:return e.abrupt("return",{firstName:n,lastName:l,city:b,address:u,stateName:d,postalCode:i,email:c,phone:s,source:o,company:p,mobilephone:j,hubspot_owner_id:x,ownerName:"NA"!==m?"".concat(m):m,contactId:h,dealId:void 0!==_?_:"NA",stage:void 0!==G?G:"NA",dealName:void 0!==S?S:"NA",callCenterID:O,callCenterAgent:g,lastModified:f,appointment:v,time:N,notes:w,preferredMethod:y,language:A,qualified_appointment:C,audio:I,item:D.a.values(r[0])});case 37:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 9:return l=e.sent,e.abrupt("return",l);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="api/deals/dealById/".concat(t),e.next=3,_.a.get("http://localhost:4000/"+a);case 3:return n=e.sent,e.abrupt("return","".concat(n.data.firstName?n.data.firstName:"NA"," ").concat(n.data.lastName?n.data.lastName:""));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return a="api/deals/getIdDeal/".concat(t),e.next=4,_.a.get("http://localhost:4000/"+a);case 4:return n=e.sent,e.abrupt("return",void 0!==n.data.results?n.data.results[0]:"NA");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=8;break}return a="api/deals/getIdDealData/".concat(t),e.next=4,_.a.get("http://localhost:4000/"+a);case 4:if(void 0===(n=e.sent).data.properties){e.next=7;break}return e.abrupt("return",{name:void 0!==n.data.properties.dealname?n.data.properties.dealname.value:"NA",stage:void 0!==n.data.properties.dealstage?n.data.properties.dealstage.value:"NA"});case 7:return e.abrupt("return",{name:"NA",stage:"NA"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=a(76),B=a.n(P),J=a(198),L=B.a.ExcelFile,q=B.a.ExcelFile.ExcelSheet,Q=B.a.ExcelFile.ExcelColumn,U=J.a.div(n||(n=Object(y.a)(['\n\tborder-radius: 60px;\n\tborder: 3px solid #fff;\n\theight: 80px;\n\twidth: 80px;\n\tposition: relative;\n\n\ttop: 28%;\n\ttop: -webkit-calc(50% - 43px);\n\ttop: calc(50% - 43px);\n\tleft: 35%;\n\tleft: -webkit-calc(50% - 43px);\n\tleft: calc(50% - 43px);\n\n:after{\n\tcontent: "";\n\tposition: absolute;\n\tbackground-color: #fff;\n\ttop:2px;\n\tleft: 48%;\n\theight: 38px;\n\twidth: 4px;\n\tborder-radius: 5px;\n\t-webkit-transform-origin: 50% 97%;\n\t\t\ttransform-origin: 50% 97%;\n\t-webkit-animation: grdAiguille 2s linear infinite;\n\t\t\tanimation: grdAiguille 2s linear infinite;\n}\n\n@-webkit-keyframes grdAiguille{\n    0%{-webkit-transform:rotate(0deg);}\n    100%{-webkit-transform:rotate(360deg);}\n}\n\n@keyframes grdAiguille{\n    0%{transform:rotate(0deg);}\n    100%{transform:rotate(360deg);}\n}\n\n:before{\n\tcontent: "";\n\tposition: absolute;\n\tbackground-color: #fff;\n\ttop:6px;\n\tleft: 48%;\n\theight: 35px;\n\twidth: 4px;\n\tborder-radius: 5px;\n\t-webkit-transform-origin: 50% 94%;\n\t\t\ttransform-origin: 50% 94%;\n\t-webkit-animation: ptAiguille 12s linear infinite;\n\t\t\tanimation: ptAiguille 12s linear infinite;\n}\n\n@-webkit-keyframes ptAiguille{\n    0%{-webkit-transform:rotate(0deg);}\n    100%{-webkit-transform:rotate(360deg);}\n}\n\n@keyframes ptAiguille{\n    0%{transform:rotate(0deg);}\n    100%{transform:rotate(360deg);}\n}\n\n']))),H=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(!0),c=Object(d.a)(l,2),s=c[0],o=c[1],i=Object(r.useState)([]),u=Object(d.a)(i,2),p=u[0],j=u[1],x=Object(r.useState)(!1),h=Object(d.a)(x,2),O=h[0],g=h[1],v=Object(r.useState)(1),N=Object(d.a)(v,2),w=N[0],y=N[1],A=Object(r.useState)(""),I=Object(d.a)(A,2),_=I[0],S=I[1],E=Object(r.useState)(""),M=Object(d.a)(E,2),F=M[0],P=M[1],B=function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.d)(m).then((function(){console.error("Se cerro session")}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),J=function(e){o(e),y(e?1:w+1),g(!1),P(""),S(""),e&&j([])};return Object(r.useEffect)((function(){var e=function(){var e=Object(C.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:a=e.sent,n(a),g(!0),P(JSON.stringify(a[19].lastModified)),S(JSON.stringify(a[0].lastModified)),p.push(a),console.log(_);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e(s?"N":a[0]?a[0].item[2]:"N")}),[w]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"relative h-screen bg-gray-800",children:[Object(f.jsxs)("nav",{className:"bg-white",children:[Object(f.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(f.jsx)("div",{className:"relative flex items-center justify-between h-16",children:Object(f.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(f.jsxs)("div",{className:"flex-shrink-0 flex items-center",children:[Object(f.jsx)("img",{className:"block lg:hidden h-8 w-auto",src:"https://i.ibb.co/Zf0t30M/1.png",alt:"Workflow"}),Object(f.jsx)("img",{className:"hidden lg:block h-8 w-auto",src:"https://i.imgur.com/9LPmT4m.png",alt:"Workflow"})]}),Object(f.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(f.jsx)("div",{className:"flex space-x-4",children:Object(f.jsx)("span",{onClick:function(){B()},className:"bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer","aria-current":"page",children:"Cerrar Sesion"})})})]})})}),Object(f.jsx)("div",{className:"sm:hidden",id:"mobile-menu",children:Object(f.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:Object(f.jsx)("span",{className:"bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium","aria-current":"page",children:"Cerrar Sesion"})})})]}),Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("p",{className:"text-white text-lg font-bold my-5",children:"Excel with contacts"}),O?Object(f.jsx)("div",{children:Object(f.jsxs)(L,{element:Object(f.jsx)("button",{className:"p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-lg rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300",children:"Download Excel"}),children:[D.a.map(p,(function(e,t){return Object(f.jsxs)(q,{data:e,name:"Contacts Record ".concat(t+1),children:[Object(f.jsx)(Q,{label:"firstName",value:"firstName"}),Object(f.jsx)(Q,{label:"lastName",value:"lastName"}),Object(f.jsx)(Q,{label:"FirstName",value:"firstName"}),Object(f.jsx)(Q,{label:"LastName",value:"lastName"}),Object(f.jsx)(Q,{label:"City",value:"city"}),Object(f.jsx)(Q,{label:"State Name",value:"stateName"}),Object(f.jsx)(Q,{label:"ZIP",value:"postalCode"}),Object(f.jsx)(Q,{label:"Email",value:"email"}),Object(f.jsx)(Q,{label:"Phone",value:"phone"}),Object(f.jsx)(Q,{label:"Source",value:"source"}),Object(f.jsx)(Q,{label:"company",value:"company"}),Object(f.jsx)(Q,{label:"Mobile phone",value:"mobilephone"}),Object(f.jsx)(Q,{label:"Contact ID",value:"hubspot_owner_id"}),Object(f.jsx)(Q,{label:"Owner Contact",value:"ownerName"}),Object(f.jsx)(Q,{label:"Owner Id",value:"hubspot_owner_id"}),Object(f.jsx)(Q,{label:"CallCenter Id",value:"callCenterID"}),Object(f.jsx)(Q,{label:"CallCenter Agent",value:"callCenterAgent"}),Object(f.jsx)(Q,{label:"Appointment",value:"appointment"}),Object(f.jsx)(Q,{label:"Time",value:"time"}),Object(f.jsx)(Q,{label:"Notes",value:"notes"}),Object(f.jsx)(Q,{label:"preferredMethod",value:"preferredMethod"}),Object(f.jsx)(Q,{label:"Language",value:"language"}),Object(f.jsx)(Q,{label:"Qualified Appointment",value:"qualified_appointment"}),Object(f.jsx)(Q,{label:"Audio",value:"audio"}),Object(f.jsx)(Q,{label:"Contact ID",value:"contactId"}),Object(f.jsx)(Q,{label:"Deal ID",value:"dealId"}),Object(f.jsx)(Q,{label:"Deal Name",value:"dealName"}),Object(f.jsx)(Q,{label:"Stage",value:"stage"})]})})),Object(f.jsxs)(q,{data:a,name:"Contacts Record ".concat(p.length+1),children:[Object(f.jsx)(Q,{label:"firstName",value:"firstName"}),Object(f.jsx)(Q,{label:"lastName",value:"lastName"}),Object(f.jsx)(Q,{label:"FirstName",value:"firstName"}),Object(f.jsx)(Q,{label:"LastName",value:"lastName"}),Object(f.jsx)(Q,{label:"City",value:"city"}),Object(f.jsx)(Q,{label:"State Name",value:"stateName"}),Object(f.jsx)(Q,{label:"ZIP",value:"postalCode"}),Object(f.jsx)(Q,{label:"Email",value:"email"}),Object(f.jsx)(Q,{label:"Phone",value:"phone"}),Object(f.jsx)(Q,{label:"Source",value:"source"}),Object(f.jsx)(Q,{label:"company",value:"company"}),Object(f.jsx)(Q,{label:"Mobile phone",value:"mobilephone"}),Object(f.jsx)(Q,{label:"Contact ID",value:"hubspot_owner_id"}),Object(f.jsx)(Q,{label:"Owner Contact",value:"ownerName"}),Object(f.jsx)(Q,{label:"Owner Id",value:"hubspot_owner_id"}),Object(f.jsx)(Q,{label:"CallCenter Id",value:"callCenterID"}),Object(f.jsx)(Q,{label:"CallCenter Agent",value:"callCenterAgent"}),Object(f.jsx)(Q,{label:"Appointment",value:"appointment"}),Object(f.jsx)(Q,{label:"Time",value:"time"}),Object(f.jsx)(Q,{label:"Notes",value:"notes"}),Object(f.jsx)(Q,{label:"preferredMethod",value:"preferredMethod"}),Object(f.jsx)(Q,{label:"Language",value:"language"}),Object(f.jsx)(Q,{label:"Qualified Appointment",value:"qualified_appointment"}),Object(f.jsx)(Q,{label:"Audio",value:"audio"}),Object(f.jsx)(Q,{label:"Contact ID",value:"contactId"}),Object(f.jsx)(Q,{label:"Deal ID",value:"dealId"}),Object(f.jsx)(Q,{label:"Deal Name",value:"dealName"}),Object(f.jsx)(Q,{label:"Stage",value:"stage"})]})]})}):Object(f.jsx)(U,{})]}),Object(f.jsx)("section",{className:"py-1 bg-blueGray-50 text-center",children:Object(f.jsx)("div",{className:"w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24",children:Object(f.jsxs)("div",{className:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ",children:[Object(f.jsx)("div",{className:"rounded-t mb-0 px-4 py-3 border-0",children:Object(f.jsxs)("div",{className:"flex flex-wrap items-start",children:[Object(f.jsx)("div",{className:"relative w-full px-4 max-w-full flex-grow flex-1",children:Object(f.jsxs)("h3",{className:"font-semibold text-base text-blueGray-700 text-left",children:["Bright world - record ",w," "]})}),Object(f.jsx)("div",{class:"flex-1 group",children:Object(f.jsx)("a",{onClick:function(){J(!1)},className:"flex items-end justify-center text-center mx-0 px-2 pt-2 w-full text-gray-400 group-hover:text-indigo-500 group-hover:bg-gray-50 border-b-2 border-transparent group-hover:border-indigo-500 cursor-pointer",children:Object(f.jsx)("span",{class:"block px-1 pt-1 pb-1",children:Object(f.jsx)("span",{class:"block text-sm pb-1",children:"next page"})})})}),Object(f.jsx)("div",{class:"flex-1 group",children:Object(f.jsx)("a",{onClick:function(){J(!0)},className:"flex items-end justify-center text-center mx-0 px-2 pt-2 w-full text-gray-400 group-hover:text-indigo-500 group-hover:bg-gray-50 border-b-2 border-transparent group-hover:border-indigo-500 cursor-pointer",children:Object(f.jsx)("span",{class:"block px-1 pt-1 pb-1",children:Object(f.jsx)("span",{class:"block text-sm pb-1",children:"return to first page"})})})})]})}),Object(f.jsx)("div",{className:"rounded-t mb-0 px-4 py-3 border-0",children:Object(f.jsx)("div",{className:"flex flex-wrap items-start",children:Object(f.jsx)("div",{className:"relative w-full px-4 max-w-full flex-grow flex-1",children:Object(f.jsxs)("h3",{className:" text-base text-Gray-700 ",children:["Modified from: ",Object(f.jsx)("span",{className:"font-semibold",children:F||"loading start date"})," to: ",Object(f.jsx)("span",{className:"font-semibold",children:_||"loading start date"})," "]})})})}),Object(f.jsx)("div",{className:"block w-full overflow-x-auto",children:Object(f.jsxs)("table",{className:"items-center bg-transparent w-full border-collapse ",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{className:" px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",children:"contactId"}),Object(f.jsx)("th",{className:" px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",children:"dealId"}),Object(f.jsx)("th",{className:" px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",children:"dealName"}),Object(f.jsx)("th",{className:" px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left",children:"stage"})]})}),Object(f.jsx)("tbody",{children:O?D.a.map(a,(function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ",children:"".concat(e.contactId)}),Object(f.jsx)("td",{className:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ",children:"".concat(e.dealId)}),Object(f.jsx)("td",{className:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ",children:"".concat(e.dealName)}),Object(f.jsx)("td",{className:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ",children:"".concat(e.stage)})]},t)})):Object(f.jsx)(f.Fragment,{})})]})})]})})})]})})},R=a(113),T=a.n(R),Z=Object(i.g)((function(e){var t=e.history,a=Object(r.useState)(""),n=Object(d.a)(a,2),l=n[0],c=n[1],s=Object(r.useState)(""),o=Object(d.a)(s,2),i=o[0],u=o[1],p=function(){var e=Object(C.a)(k.a.mark((function e(a){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.email,r=a.password,e.prev=1,e.next=4,Object(b.c)(m,n,r).then((function(){T()({title:"Bienvenido",icon:"success",button:"Aceptar",closeOnClickOutside:!1,closeOnEsc:!1}).then((function(){t.push("/home")}))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),T()("Algo salio mal","error","Algo salio mal");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),j=Object(r.useContext)(h).currentUser;return Object(r.useEffect)((function(){j&&t.push("/home")}),[t,j]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"w-full flex flex-wrap",children:[Object(f.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col",children:[Object(f.jsx)("div",{className:"flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24",children:Object(f.jsx)("span",{className:"bg-black text-white font-bold text-xl p-4",children:"Inicio"})}),Object(f.jsxs)("div",{className:"flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32",children:[Object(f.jsx)("p",{className:"text-center text-3xl",children:"Bienvenido."}),Object(f.jsxs)("form",{className:"flex flex-col pt-3 md:pt-8",children:[Object(f.jsxs)("div",{className:"flex flex-col pt-4",children:[Object(f.jsx)("label",{className:"text-lg",children:"Correo"}),Object(f.jsx)("input",{onChange:function(e){c(e.target.value)},type:"email",id:"email",placeholder:"tucorreo@ufg.edu.sv",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"})]}),Object(f.jsxs)("div",{className:"flex flex-col pt-4",children:[Object(f.jsx)("label",{className:"text-lg",children:"Contrase\xf1a"}),Object(f.jsx)("input",{type:"password",onChange:function(e){u(e.target.value)},id:"password",placeholder:"Password",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"})]})]}),Object(f.jsx)("button",{onClick:function(){p({email:l,password:i})},className:"bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8",children:" Ingresar"})]})]}),Object(f.jsx)("div",{className:"w-1/2 shadow-2xl",children:Object(f.jsx)("img",{alt:"ImgRIGHTS",className:"object-cover w-full h-screen hidden md:block",src:"https://r1.ilikewallpaper.net/ipad-air-wallpapers/download/144112/material-design-abstract-8k-ipad-air-wallpaper-ilikewallpaper_com.jpg"})})]})})})),z=[{path:"/home",name:"Home",component:H}],K=[{path:"/",name:"Login",component:Z}],W=function(){return Object(f.jsx)(O,{children:Object(f.jsxs)(o.a,{children:[z.map((function(e,t){return Object(f.jsx)(w,{exact:!0,path:e.path,component:e.component},t)})),K.map((function(e,t){return Object(f.jsx)(i.b,{exact:!0,path:e.path,component:e.component},t)}))]})})};s.a.render(Object(f.jsx)(W,{}),document.getElementById("root"))}},[[360,1,2]]]);
//# sourceMappingURL=main.48f66d0e.chunk.js.map