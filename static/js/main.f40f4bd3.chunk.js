(this["webpackJsonpproyecto-becarios-ufg"]=this["webpackJsonpproyecto-becarios-ufg"]||[]).push([[0],{145:function(e,t,n){},295:function(e,t){},297:function(e,t){},307:function(e,t){},309:function(e,t){},335:function(e,t){},337:function(e,t){},338:function(e,t){},343:function(e,t){},345:function(e,t){},351:function(e,t){},353:function(e,t){},372:function(e,t){},384:function(e,t){},387:function(e,t){},436:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),s=n(73),c=n.n(s),l=(n(145),n(240),n(138)),i=n(20),d=n(16),u=n(47),m=n(222),b=n(223),j=n(224),x=Object(m.a)({apiKey:"AIzaSyAG7eH4OBuDhUOZPQfyeO7t1s9YJ7QQ_NU",authDomain:"proyectos-becarios-ufg.firebaseapp.com",projectId:"goosebase-bbcf3",storageBucket:"proyectos-becarios-ufg.appspot.com",messagingSenderId:"749455773986",appId:"1:749455773986:web:ca76274bf9a6c246c0d57b",measurementId:"G-HFNJJP0R8K"}),p=Object(b.a)(),h=(Object(j.a)(x),n(7)),f=o.a.createContext(),g=function(e){var t=e.children,n=Object(r.useState)(null),a=Object(d.a)(n,2),o=a[0],s=a[1],c=Object(r.useState)(!0),l=Object(d.a)(c,2),i=l[0],m=l[1];return Object(r.useEffect)((function(){Object(u.b)(p,(function(e){s(e),m(!1)}))}),[]),i?Object(h.jsx)(h.Fragment,{children:"Loading..."}):Object(h.jsx)(f.Provider,{value:{currentUser:o},children:t})},v=n(96),O=n(233),w=["component"],y=function(e){var t=e.component,n=Object(O.a)(e,w),a=Object(r.useContext)(f).currentUser;return Object(h.jsx)(i.d,{children:Object(h.jsx)(i.b,Object(v.a)(Object(v.a)({},n),{},{render:function(e){return a?Object(h.jsx)(t,Object(v.a)({},e)):Object(h.jsx)(i.a,{to:"/"})}}))})},N=n(22),k=n(1),C=n.n(k),S=n(2),D=n(226),M=n(78),L=n(54),A=n.n(L),P=n(438),B=n(142),I=n.n(B),E=n(97),_=n.n(E),W=n(227),F=n(98),R=n.n(F),q=function(e){var t=R.a.filter([{value:"9223356",name:"Lead In"},{value:"9223358",name:"Call Back"},{value:"9250403",name:"Disqualified"},{value:"9223357",name:"No Answer/Left Voicemail"},{value:"8897510",name:"Open Lead"},{value:"11951730",name:"Disqualified"},{value:"9503233",name:"Closed Lost"},{value:"10324719",name:"No Show"},{value:"7393110",name:"Re-Scheduled"},{value:"qualifiedtobu",name:"Proposal Presented"},{value:"closedwon",name:"Closed Won"},{value:"appointmentscheduled",name:"Appointment Booked"},{value:"qualifiedtobuy",name:"Proposal Presented"},{value:"11951727",name:"No Show"},{value:"11951728",name:"Proposal Presented"},{value:"11951729",name:"Appointment Booked"},{value:"11951730",name:"Disqualified"},{value:"11951732",name:"Closed Won"},{value:"13187749",name:"Closed Lost"},{value:"13742648",name:"Water Consultation"},{value:"2509190",name:"Cancelled"},{value:"2512056",name:"Cancelled"},{value:"5388096",name:"Open Lead"},{value:"5473181",name:"DQ"},{value:"5473182",name:"Appointment Booked"},{value:"5473183",name:"No Show"},{value:"5473184",name:"Proposal Presented"},{value:"5473185",name:"Reschedule"},{value:"5473186",name:"Closed won"},{value:"5473187",name:"Closed lost"},{value:"7973704",name:"Appointment scheduled"},{value:"7973705",name:"Qualified to buy"},{value:"7973706",name:"Presentation scheduled"},{value:"7973707",name:"Decision Maker Bought-In"},{value:"7973708",name:"Contract sent"},{value:"7973709",name:"Closed won "},{value:"7973710",name:"Closed lost"},{value:"9223359",name:"Appointment Booked"},{value:"9625986",name:"Pre-Opp Follow Up Scheduled"},{value:"9625987",name:"Appointment Booked"},{value:"9625988",name:"Proposal Presented"},{value:"9625989",name:"Post-Opp Follow Up Scheduled"},{value:"9625991",name:"Closed Won"},{value:"9625992",name:"Closed lost"},{value:"973724",name:"Date exited 'Re-Scheduled"},{value:"closedlost",name:"Closed Lost"},{value:"contractsent",name:"Contract Sent"},{value:"decisionmakerboughtin",name:"Decision Maker Bought-In"},{value:"presentationscheduled",name:"Proposal Presented"}],(function(t){return t.value===e}));return t[0]?t[0].name:e},H=_.a.ExcelFile,T=_.a.ExcelFile.ExcelSheet,U=_.a.ExcelFile.ExcelColumn,J=[{name:"First Name",value:"firstname",order:1},{name:"Last Name",value:"lastname",order:2},{name:"City",value:"city",order:3},{name:"State",value:"state",order:4},{name:"ZIP",value:"zip",order:5},{name:"Email",value:"email",order:6},{name:"Phone",value:"phone",order:7},{name:"Source",value:"source",order:8},{name:"Company",value:"company",order:9},{name:"Mobile phone",value:"mobilephone",order:10},{name:"CallCenter Id",value:"call_center_id",order:13},{name:"CallCenter Agent",value:"call_center_agent",order:14},{name:"Appointment",value:"appointment",order:15},{name:"Time",value:"time",order:16},{name:"Notes",value:"notes",order:17},{name:"preferred Method",value:"preferred_consultation_method",order:18},{name:"Language",value:"hs_language",order:19},{name:"Qualified Appointment",value:"qualified_appointment",order:20},{name:"Audio",value:"audio_recording",order:21},{name:"Contact ID",value:"hs_object_id",order:22},{name:"Deal ID",value:"deal_id",order:23},{name:"Deal Name",value:"deal_name",order:24},{name:"Stage",value:"stage",order:25}],Q=[{value:"8897510",name:"Open Lead"},{value:"11951730",name:"Disqualified"},{value:"10324719",name:"No Show"},{value:"7393110",name:"Re-Scheduled"},{value:"closedwon",name:"Closed Won"},{value:"appointmentscheduled",name:"Appointment Booked"},{value:"13742648",name:"Water Consultation"},{value:"2512056",name:"Cancelled"},{value:"presentationscheduled",name:"Proposal Presented"}],z=W.a.div(a||(a=Object(D.a)(['\n\tborder-radius: 60px;\n\tborder: 3px solid #fff;\n\theight: 80px;\n\twidth: 80px;\n\tposition: relative;\n\n\ttop: 28%;\n\ttop: -webkit-calc(50% - 43px);\n\ttop: calc(50% - 43px);\n\tleft: 35%;\n\tleft: -webkit-calc(50% - 43px);\n\tleft: calc(50% - 43px);\n\n:after{\n\tcontent: "";\n\tposition: absolute;\n\tbackground-color: #fff;\n\ttop:2px;\n\tleft: 48%;\n\theight: 38px;\n\twidth: 4px;\n\tborder-radius: 5px;\n\t-webkit-transform-origin: 50% 97%;\n\t\t\ttransform-origin: 50% 97%;\n\t-webkit-animation: grdAiguille 2s linear infinite;\n\t\t\tanimation: grdAiguille 2s linear infinite;\n}\n\n@-webkit-keyframes grdAiguille{\n    0%{-webkit-transform:rotate(0deg);}\n    100%{-webkit-transform:rotate(360deg);}\n}\n\n@keyframes grdAiguille{\n    0%{transform:rotate(0deg);}\n    100%{transform:rotate(360deg);}\n}\n\n:before{\n\tcontent: "";\n\tposition: absolute;\n\tbackground-color: #fff;\n\ttop:6px;\n\tleft: 48%;\n\theight: 35px;\n\twidth: 4px;\n\tborder-radius: 5px;\n\t-webkit-transform-origin: 50% 94%;\n\t\t\ttransform-origin: 50% 94%;\n\t-webkit-animation: ptAiguille 12s linear infinite;\n\t\t\tanimation: ptAiguille 12s linear infinite;\n}\n\n@-webkit-keyframes ptAiguille{\n    0%{-webkit-transform:rotate(0deg);}\n    100%{-webkit-transform:rotate(360deg);}\n}\n\n@keyframes ptAiguille{\n    0%{transform:rotate(0deg);}\n    100%{transform:rotate(360deg);}\n}\n']))),G=Object(r.forwardRef)((function(e,t){var n=e.value,a=e.onClick;return Object(h.jsx)("button",{onClick:a,ref:t,type:"button",className:"inline-flex justify-start py-2 px-3 w-full text-sm font-medium text-gray-700 bg-white rounded border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500",children:Object(P.default)(new Date(n),"dd MMMM yyyy")})})),Z=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)((new Date).setDate((new Date).getDate()-2)),s=Object(d.a)(o,2),c=s[0],l=s[1],i=Object(r.useState)((new Date).setDate((new Date).getDate()-0)),m=Object(d.a)(i,2),b=m[0],j=m[1],x=Object(r.useState)(!0),f=Object(d.a)(x,2),g=f[0],v=f[1],O=Object(r.useState)(!1),w=Object(d.a)(O,2),y=w[0],k=w[1],D=Object(r.useState)(0),L=Object(d.a)(D,2),B=L[0],E=L[1],_=Object(r.useState)(0),W=Object(d.a)(_,2),F=W[0],R=W[1],Z=Object(r.useState)(0),K=Object(d.a)(Z,2),V=K[0],Y=K[1],X=Object(r.useState)(J),$=Object(d.a)(X,2),ee=$[0],te=$[1],ne=Object(r.useState)(""),ae=Object(d.a)(ne,2),re=ae[0],oe=ae[1],se=function(){var e=Object(S.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.d)(p).then((function(){console.error("Se cerro session")}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){v(!0)}),[]),Object(r.useEffect)((function(){c>b&&l(b)}),[b,c]),Object(r.useEffect)((function(){c>b&&j(c)}),[b,c]);var ce=function(){var e=Object(S.a)(C.a.mark((function e(){var t,r,o,s,l,i,d,u;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),i=b,"number"!==typeof(l=c)&&(l=new Date(c).getTime()),"number"!==typeof i&&(i=new Date(b).getTime()),d="api/deals?start=".concat(l,"&end=").concat(i,"&after=").concat(B),re&&(d+="&stage=".concat(re)),e.next=9,A.a.get("https://brightworld-back.glitch.me/"+d);case 9:u=e.sent,a(0===B?u.data.results:[].concat(Object(N.a)(n),Object(N.a)(u.data.results))),R(null===(t=u.data)||void 0===t||null===(r=t.paging)||void 0===r||null===(o=r.next)||void 0===o?void 0:o.after),v(!1),Y(null===(s=u.data)||void 0===s?void 0:s.total);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){ce()}),[B]);var le=function(){E(F)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"relative h-screen bg-gray-800",children:[Object(h.jsxs)("nav",{className:"bg-white",children:[Object(h.jsx)("div",{className:"px-2 mx-auto max-w-7xl sm:px-6 lg:px-8",children:Object(h.jsx)("div",{className:"flex relative justify-between items-center h-16",children:Object(h.jsxs)("div",{className:"flex flex-1 justify-center items-center sm:items-stretch sm:justify-start",children:[Object(h.jsxs)("div",{className:"flex flex-shrink-0 items-center",children:[Object(h.jsx)("img",{className:"block w-auto h-8 lg:hidden",src:"https://i.ibb.co/Zf0t30M/1.png",alt:"Workflow"}),Object(h.jsx)("img",{className:"hidden w-auto h-8 lg:block",src:"https://i.imgur.com/9LPmT4m.png",alt:"Workflow"})]}),Object(h.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(h.jsx)("div",{className:"flex space-x-4",children:Object(h.jsx)("span",{onClick:function(){se()},className:"py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-md cursor-pointer hover:bg-gray-800","aria-current":"page",children:"Sign Out"})})})]})})}),Object(h.jsx)("div",{className:"sm:hidden",id:"mobile-menu",children:Object(h.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:Object(h.jsx)("span",{className:"block py-2 px-3 text-base font-medium text-white bg-gray-900 rounded-md","aria-current":"page",children:"Cerrar Sesion"})})})]}),Object(h.jsxs)("div",{className:"container flex items-end px-4 pt-10 mx-auto",children:[Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"mr-4",children:[Object(h.jsx)("p",{className:"mb-1 font-medium text-white",children:"Date Range"}),Object(h.jsxs)("div",{className:"flex space-x-2",children:[Object(h.jsx)("div",{className:"relative w-40",children:Object(h.jsx)(I.a,{selected:c,onChange:function(e){return l(e)},selectsStart:!0,startDate:c,endDate:b,nextMonthButtonLabel:">",previousMonthButtonLabel:"<",popperClassName:"react-datepicker-left",customInput:Object(h.jsx)(G,{}),renderCustomHeader:function(e){var t=e.date,n=e.decreaseMonth,a=e.increaseMonth,r=e.prevMonthButtonDisabled,o=e.nextMonthButtonDisabled;return Object(h.jsxs)("div",{className:"flex justify-between items-center py-2 px-2",children:[Object(h.jsx)("span",{className:"text-lg text-gray-700",children:Object(P.default)(t,"MMMM yyyy")}),Object(h.jsxs)("div",{className:"space-x-2",children:[Object(h.jsx)("button",{onClick:n,disabled:r,type:"button",className:"\n                                ".concat(r&&"cursor-not-allowed opacity-50","\n                                inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500\n                              "),children:Object(h.jsx)(M.a,{className:"w-5 h-5 text-gray-600"})}),Object(h.jsx)("button",{onClick:a,disabled:o,type:"button",className:"\n                                ".concat(o&&"cursor-not-allowed opacity-50","\n                                inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500\n                              "),children:Object(h.jsx)(M.b,{className:"w-5 h-5 text-gray-600"})})]})]})}})}),Object(h.jsx)("div",{className:"relative w-40",children:Object(h.jsx)(I.a,{selected:b,onChange:function(e){return j(e)},selectsEnd:!0,startDate:c,endDate:b,nextMonthButtonLabel:">",previousMonthButtonLabel:"<",popperClassName:"react-datepicker-right",customInput:Object(h.jsx)(G,{}),renderCustomHeader:function(e){var t=e.date,n=e.decreaseMonth,a=e.increaseMonth,r=e.prevMonthButtonDisabled,o=e.nextMonthButtonDisabled;return Object(h.jsxs)("div",{className:"flex justify-between items-center py-2 px-2",children:[Object(h.jsx)("span",{className:"text-lg text-gray-700",children:Object(P.default)(t,"MMMM yyyy")}),Object(h.jsxs)("div",{className:"space-x-2",children:[Object(h.jsx)("button",{onClick:n,disabled:r,type:"button",className:"\n                                ".concat(r&&"cursor-not-allowed opacity-50","\n                                inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500\n                              "),children:Object(h.jsx)(M.a,{className:"w-5 h-5 text-gray-600"})}),Object(h.jsx)("button",{onClick:a,disabled:o,type:"button",className:"\n                                ".concat(o&&"cursor-not-allowed opacity-50","\n                                inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500\n                              "),children:Object(h.jsx)(M.b,{className:"w-5 h-5 text-gray-600"})})]})]})}})})]})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"mx-4",children:[Object(h.jsx)("p",{className:"mb-1 font-medium text-white",children:"Stage"}),Object(h.jsx)("label",{className:"block text-left",children:Object(h.jsxs)("select",{className:"inline-flex items-center py-2 px-2 w-60 font-semibold text-gray-500 bg-white rounded-lg hover:text-blue-500 focus:outline-none focus:shadow-outline md:px-4",onChange:function(e){return oe(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:" All Stages "}),Q.map((function(e,t){return Object(h.jsxs)("option",{value:e.value,children:[" ",e.name," "]},t)}))]})})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"mx-4",children:[Object(h.jsx)("p",{className:"mb-1 font-medium text-white",children:"Properties to show"}),Object(h.jsx)("div",{className:"flex rounded-lg shadow",children:Object(h.jsxs)("div",{className:"relative",children:[Object(h.jsxs)("button",{onClick:function(){return k(!y)},className:"inline-flex items-center py-2 px-2 w-60 font-semibold text-gray-500 bg-white rounded-lg hover:text-blue-500 focus:outline-none focus:shadow-outline md:px-4",children:[Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6 md:hidden",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("rect",{x:"0",y:"0",width:"24",height:"24",stroke:"none"}),Object(h.jsx)("path",{d:"M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5"})]}),Object(h.jsx)("span",{className:"hidden md:block",children:"Display"}),Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"ml-auto w-5 h-5",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(h.jsx)("rect",{x:"0",y:"0",width:"24",height:"24",stroke:"none"}),Object(h.jsx)("polyline",{points:"6 9 12 15 18 9"})]})]}),y&&Object(h.jsx)("div",{onClick:function(){return k(!1)},className:"block overflow-hidden absolute top-0 right-0 z-40 py-1 mt-12 -mr-1 w-60 bg-white rounded-lg shadow-lg",children:J.map((function(e,t){return Object(h.jsx)("div",{children:Object(h.jsxs)("label",{className:"flex justify-start items-center py-2 px-4 text-truncate hover:bg-gray-100",children:[Object(h.jsx)("div",{className:"mr-3 text-teal-600",children:Object(h.jsx)("input",{type:"checkbox",className:"form-checkbox focus:outline-none focus:shadow-outline",checked:ee.includes(e),onChange:function(t){return n=e,a=t.target.checked,void te(a?[].concat(Object(N.a)(ee),[n]).sort((function(e,t){return e.order-t.order})):ee.filter((function(e){return e!==n})).sort((function(e,t){return e.order-t.order})));var n,a}})}),Object(h.jsx)("div",{className:"text-gray-700 select-none",children:e.name})]})},t)}))})]})})]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){0===B?(a([]),setTimeout((function(){ce()}),200)):E(0)},className:"p-2 pr-5 pl-5 mx-4 text-lg text-green-300 rounded-lg border-2 border-green-300 transition-colors duration-700 transform hover:bg-green-400 hover:text-gray-100 focus:border-4 focus:border-indigo-300",children:"Search"})}),null!=B&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:le,className:"p-2 pr-5 pl-5 mx-4 text-lg text-green-300 rounded-lg border-2 border-green-300 transition-colors duration-700 transform hover:bg-green-400 hover:text-gray-100 focus:border-4 focus:border-indigo-300",children:"Show 100 entries more"})}),Object(h.jsx)("div",{className:"ml-auto",children:n.length>0&&Object(h.jsx)("div",{children:Object(h.jsx)(H,{element:Object(h.jsx)("button",{className:"p-2 pr-5 pl-5 text-lg text-green-300 bg-transparent rounded-lg border-2 border-green-300 transition-colors duration-700 transform hover:bg-green-400 hover:text-gray-100 focus:border-4 focus:border-indigo-300",children:"Download Excel"}),children:Object(h.jsx)(T,{data:n,name:"Contacts",children:ee.map((function(e,t){return Object(h.jsx)(U,{label:e.name,value:q(e.value)},t)}))})})})})]}),Object(h.jsxs)("div",{className:"container py-6 px-4 mx-auto",children:[Object(h.jsxs)("div",{className:"flex justify-between items-center",children:[Object(h.jsx)("h1",{className:"py-4 text-3xl text-white",children:"Entries"}),Object(h.jsxs)("p",{className:"text-white",children:["Showing ",n.length," entries of ",V]})]}),g&&Object(h.jsx)(z,{className:"my-4"}),Object(h.jsx)("div",{className:"overflow-x-auto overflow-y-auto relative h-full bg-white rounded-lg shadow",children:Object(h.jsxs)("table",{className:"relative w-full h-14 bg-white border-collapse table-auto whitespace-no-wrap table-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{className:"text-left",children:ee.map((function(e,t){return Object(h.jsx)("th",{className:"sticky top-0 py-2 px-6 text-xs font-bold tracking-wider text-gray-600 uppercase whitespace-nowrap bg-gray-100 border-b border-gray-200",children:e.name},t)}))})}),n.length>0&&Object(h.jsx)("tbody",{children:n.map((function(e,t){return Object(h.jsx)("tr",{children:ee.map((function(t,n){return Object(h.jsx)("td",{className:"border-t border-gray-200 border-dashed",children:Object(h.jsx)("span",{className:"flex items-center py-3 px-6 text-gray-700",children:q(e[t.value])})},n)}))},t)}))})]})}),null!=B&&Object(h.jsx)("div",{className:"flex mx-auto mt-10 w-full",children:Object(h.jsx)("button",{onClick:le,className:"p-2 pr-5 pl-5 mx-auto text-lg text-green-300 rounded-lg border-2 border-green-300 transition-colors duration-700 transform hover:bg-green-400 hover:text-gray-100 focus:border-4 focus:border-indigo-300",children:"Show 100 entries more"})})]})]})})},K=n(143),V=n.n(K),Y=Object(i.g)((function(e){var t=e.history,n=Object(r.useState)(""),a=Object(d.a)(n,2),o=a[0],s=a[1],c=Object(r.useState)(""),l=Object(d.a)(c,2),i=l[0],m=l[1],b=function(){var e=Object(S.a)(C.a.mark((function e(n){var a,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.email,r=n.password,e.prev=1,e.next=4,Object(u.c)(p,a,r).then((function(){V()({title:"Bienvenido",icon:"success",button:"Aceptar",closeOnClickOutside:!1,closeOnEsc:!1}).then((function(){t.push("/home")}))}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),V()("Algo salio mal","error","Algo salio mal");case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),j=Object(r.useContext)(f).currentUser;return Object(r.useEffect)((function(){j&&t.push("/home")}),[t,j]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"w-full flex flex-wrap",children:[Object(h.jsxs)("div",{className:"w-full md:w-1/2 flex flex-col",children:[Object(h.jsx)("div",{className:"flex justify-center pt-12  px-8 md:px-24 lg:px-32",children:Object(h.jsx)("img",{src:"https://brightworld.com/wp-content/uploads/2020/12/20-Bright-World-Header-Low-20__NEW.png",alt:"Italian Trulli"})}),Object(h.jsxs)("div",{className:"flex flex-col justify-center text-white md:justify-start my-auto pt-4 md:pt-0 px-8 md:px-24 lg:px-32",children:[Object(h.jsxs)("form",{className:"flex flex-col pt-3 md:pt-8",children:[Object(h.jsxs)("div",{className:"flex flex-col pt-4",children:[Object(h.jsx)("label",{className:"text-lg",children:"email"}),Object(h.jsx)("input",{onChange:function(e){s(e.target.value)},type:"email",id:"email",placeholder:"tucorreo@ufg.edu.sv",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"})]}),Object(h.jsxs)("div",{className:"flex flex-col pt-4",children:[Object(h.jsx)("label",{className:"text-lg",children:"Password"}),Object(h.jsx)("input",{type:"password",onChange:function(e){m(e.target.value)},id:"password",placeholder:"Password",className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"})]})]}),Object(h.jsx)("button",{onClick:function(){b({email:o,password:i})},className:"bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8",children:" Sign In"})]})]}),Object(h.jsx)("div",{className:"w-1/2 shadow-2xl",children:Object(h.jsx)("img",{alt:"ImgRIGHTS",className:"object-cover w-full h-screen hidden md:block",src:"https://i.imgur.com/VY0JSgh.png"})})]})})})),X=[{path:"/home",name:"Home",component:Z}],$=[{path:"/",name:"Login",component:Y}],ee=function(){return Object(h.jsx)(g,{children:Object(h.jsxs)(l.a,{children:[X.map((function(e,t){return Object(h.jsx)(y,{exact:!0,path:e.path,component:e.component},t)})),$.map((function(e,t){return Object(h.jsx)(i.b,{exact:!0,path:e.path,component:e.component},t)}))]})})};c.a.render(Object(h.jsx)(ee,{}),document.getElementById("root"))}},[[436,1,2]]]);
//# sourceMappingURL=main.f40f4bd3.chunk.js.map