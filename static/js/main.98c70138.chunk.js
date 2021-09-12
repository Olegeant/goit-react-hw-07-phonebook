(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contactListItem:"ContactListItem_contactListItem__3OQMc",contactMeta:"ContactListItem_contactMeta__2RIVW",name:"ContactListItem_name__1bZhg",number:"ContactListItem_number__1qtD4",button:"ContactListItem_button__3AMbI",CrossIcon:"ContactListItem_CrossIcon__3T1Ly"}},19:function(t,e,n){t.exports={filterContainer:"Filter_filterContainer__1Ypsy",filter:"Filter_filter__2tmt9",label:"Filter_label__3gzcN"}},23:function(t,e,n){t.exports={contactList:"ContactList_contactList__2tu2L",notification:"ContactList_notification__11khO"}},34:function(t,e,n){t.exports={container:"Container_container__287Bf"}},35:function(t,e,n){t.exports={section:"Section_section__2hT01"}},37:function(t,e,n){t.exports={Loader:"Loader_Loader__1KUwJ"}},88:function(t,e,n){},89:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"fetchContacts",(function(){return C})),n.d(r,"addContact",(function(){return w})),n.d(r,"deleteContact",(function(){return _})),n.d(r,"setFilter",(function(){return I}));var c={};n.r(c),n.d(c,"getContacts",(function(){return k})),n.d(c,"getFilter",(function(){return F})),n.d(c,"getFilteredContacts",(function(){return N})),n.d(c,"checkIfSmthInPhonebook",(function(){return E})),n.d(c,"checkIfIsLoading",(function(){return P})),n.d(c,"getError",(function(){return S}));var a=n(0),o=n.n(a),i=n(12),u=n.n(i),l=n(4),s=n(5),f=n.n(s),b=n(10),d=n(7),j=n(16),p=n.n(j);function h(){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=Object(b.a)(f.a.mark((function t(e){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.delete("/contacts/".concat(e));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}p.a.defaults.baseURL="http://localhost:4040";var y,C=Object(d.c)("contacts/fetchContacts",function(){var t=Object(b.a)(f.a.mark((function t(e,n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,h();case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),w=Object(d.c)("contacts/addContact",function(){var t=Object(b.a)(f.a.mark((function t(e,n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,m(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),_=Object(d.c)("contacts/deleteContact",function(){var t=Object(b.a)(f.a.mark((function t(e,n){var r,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,g(e);case 4:return c=t.sent,t.abrupt("return",c);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),I=Object(d.b)("contacts/setFilter",(function(t){return{payload:t.toLowerCase()}})),L=n(17),k=function(t){return t.contacts.items},F=function(t){return t.contacts.filter},N=Object(L.a)([k,F],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),E=function(t){return t.contacts.items.length>0},P=function(t){return t.contacts.isLoading},S=function(t){return t.contacts.error},M=n(15),A=(n(67),n(34)),R=n.n(A),z=n(1),B=function(t){var e=t.children;return Object(z.jsx)("div",{className:R.a.container,children:e})},V=n(35),Z=n.n(V),D=function(t){var e=t.children;return Object(z.jsx)("section",{className:Z.a.section,children:Object(z.jsx)(B,{children:e})})},J=n(14),W=n(24),T=["title","titleId"];function q(){return(q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function H(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function Y(t,e){var n=t.title,r=t.titleId,c=H(t,T);return a.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",ref:e,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,y||(y=a.createElement("path",{d:"M9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9ZM9 10.5C6.9975 10.5 3 11.505 3 13.5V14.25C3 14.6625 3.3375 15 3.75 15H14.25C14.6625 15 15 14.6625 15 14.25V13.5C15 11.505 11.0025 10.5 9 10.5Z"})))}var U,$=a.forwardRef(Y),K=(n.p,["title","titleId"]);function Q(){return(Q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function G(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function X(t,e){var n=t.title,r=t.titleId,c=G(t,K);return a.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",ref:e,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,U||(U=a.createElement("path",{d:"M13.996 11.1226L12.1579 10.9127C11.7164 10.862 11.2822 11.014 10.971 11.3252L9.63945 12.6568C7.59144 11.6147 5.91251 9.94296 4.87041 7.8877L6.20922 6.54888C6.5204 6.2377 6.67237 5.80349 6.62171 5.36205L6.41185 3.53836C6.325 2.80745 5.70988 2.25745 4.97173 2.25745H3.71976C2.902 2.25745 2.22175 2.93771 2.2724 3.75547C2.65595 9.93572 7.59868 14.8712 13.7717 15.2548C14.5894 15.3054 15.2697 14.6252 15.2697 13.8074V12.5555C15.2769 11.8245 14.7269 11.2094 13.996 11.1226Z"})))}var tt,et=a.forwardRef(X),nt=(n.p,["title","titleId"]);function rt(){return(rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function ct(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function at(t,e){var n=t.title,r=t.titleId,c=ct(t,nt);return a.createElement("svg",rt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,tt||(tt=a.createElement("path",{d:"M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"})))}var ot,it=a.forwardRef(at),ut=(n.p,n(9)),lt=n.n(ut),st=function(){var t=Object(a.useState)(""),e=Object(W.a)(t,2),n=e[0],o=e[1],i=Object(a.useState)(""),u=Object(W.a)(i,2),s=u[0],f=u[1],b=Object(l.c)(c.getContacts),d=Object(l.b)(),j={name:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",number:"^\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}$"},p=function(t,e){var n=new RegExp(e);return""===t||n.test(t)},h=function(t){var e=t.target,n=e.name,r=e.value;switch(n){case"name":o(r);break;case"number":f(r);break;default:throw new Error("Wrong Input field name invoked!")}},O=function(){o(""),f("")},m=function(t,e){return[lt.a.label].concat(Object(J.a)(p(t,j[e])?[]:[lt.a.invalid])).join(" ")};return Object(z.jsxs)("form",{autoComplete:"off",className:lt.a.form,onSubmit:function(t){if(t.preventDefault(),b.some((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return M.b.error('"'.concat(n,'" is already in contacts!'));d(r.addContact({name:n,number:s})),O()},children:[Object(z.jsxs)("label",{htmlFor:"name",className:m(n,"name"),children:["Name",Object(z.jsx)($,{className:lt.a.FieldIcon,width:20,height:20}),Object(z.jsx)("input",{type:"text",name:"name",value:n,className:lt.a.field,onChange:h,pattern:j.name,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(z.jsxs)("label",{htmlFor:"number",className:m(s,"number"),children:["Number",Object(z.jsx)(et,{className:lt.a.FieldIcon,width:20,height:20}),Object(z.jsx)("input",{type:"tel",name:"number",value:s,className:lt.a.field,onChange:h,pattern:j.number,title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(z.jsxs)("button",{type:"submit",className:[lt.a.submit].concat(Object(J.a)(n&&s&&p(n,j.name)&&p(s,j.number)?[]:[lt.a.invalid])).join(" "),children:[Object(z.jsx)(it,{className:lt.a.AddIcon,width:16,height:16}),"Add Contact"]})]})},ft=n(19),bt=n.n(ft);function dt(){var t=Object(l.c)(c.getFilter),e=Object(l.b)();return Object(z.jsxs)("div",{className:bt.a.filterContainer,children:[Object(z.jsx)("label",{htmlFor:"name",className:bt.a.label,children:"Find contacts by name"}),Object(z.jsx)("input",{type:"text",name:"filter",className:bt.a.filter,value:t,onChange:function(t){return e(r.setFilter(t.target.value))}})]})}var jt=["title","titleId"];function pt(){return(pt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function ht(t,e){if(null==t)return{};var n,r,c=function(t,e){if(null==t)return{};var n,r,c={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}function Ot(t,e){var n=t.title,r=t.titleId,c=ht(t,jt);return a.createElement("svg",pt({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,ot||(ot=a.createElement("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"})))}var mt=a.forwardRef(Ot),vt=(n.p,n(11)),gt=n.n(vt);var xt=function(t){var e=t.name,n=t.number,r=t.onDelete;return Object(z.jsxs)("li",{className:gt.a.contactListItem,children:[Object(z.jsxs)("p",{className:gt.a.contactMeta,children:[Object(z.jsx)("span",{className:gt.a.name,children:e}),": ",Object(z.jsx)("span",{className:gt.a.number,children:n})]}),Object(z.jsx)("button",{type:"button",className:gt.a.button,onClick:r,children:Object(z.jsx)(mt,{className:gt.a.CrossIcon,width:"12"})})]})},yt=n(23),Ct=n.n(yt);function wt(){var t=Object(l.c)(c.getFilteredContacts),e=Object(l.c)(c.checkIfIsLoading),n=Object(l.b)();return t.length?Object(z.jsx)("ul",{className:Ct.a.contactList,children:t.map((function(t){var c=t.id,a=t.name,o=t.number;return Object(z.jsx)(xt,{id:c,name:a,number:o,onDelete:function(){return t=c,void(e||n(r.deleteContact(t)));var t}},c)}))}):Object(z.jsx)("p",{className:Ct.a.notification,children:"No contact found"})}var _t=n(36),It=n.n(_t),Lt=n(37),kt=n.n(Lt);function Ft(t){var e=t.type,n=t.color,r=t.height,c=t.width;return Object(z.jsx)(It.a,{className:kt.a.Loader,type:e,color:n,height:r,width:c})}Ft.defaultProps={type:"ThreeDots",color:"#606dbc",height:180,width:180};var Nt,Et,Pt,St=function(){var t=Object(l.c)(c.checkIfSmthInPhonebook),e=Object(l.c)(c.checkIfIsLoading),n=Object(l.c)(c.getError),o=Object(l.b)();return Object(a.useEffect)((function(){o(r.fetchContacts())}),[o]),Object(a.useEffect)((function(){n&&M.b.error(n.message)}),[n]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(D,{children:[Object(z.jsx)("h1",{children:"Phonebook"}),Object(z.jsx)(st,{})]}),Object(z.jsxs)(D,{children:[Object(z.jsx)("h2",{children:"Contacts"}),t?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(dt,{}),Object(z.jsx)(wt,{})]}):Object(z.jsx)("p",{children:"Phonebook is empty"})]}),Object(z.jsx)(M.a,{autoClose:3e3,theme:"light"}),e&&Object(z.jsx)(Ft,{})]})},Mt=n(2),At=n(8),Rt=Object(d.d)([],(Nt={},Object(Mt.a)(Nt,r.fetchContacts.fulfilled,(function(t,e){return e.payload})),Object(Mt.a)(Nt,r.addContact.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(J.a)(t),[n])})),Object(Mt.a)(Nt,r.deleteContact.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Nt)),zt=Object(d.d)("",Object(Mt.a)({},r.setFilter,(function(t,e){return e.payload}))),Bt=Object(d.d)("",(Et={},Object(Mt.a)(Et,r.fetchContacts.rejected,(function(t,e){return e.payload})),Object(Mt.a)(Et,r.addContact.rejected,(function(t,e){return e.payload})),Object(Mt.a)(Et,r.deleteContact.rejected,(function(t,e){return e.payload})),Object(Mt.a)(Et,r.fetchContacts.pending,(function(){return""})),Object(Mt.a)(Et,r.addContact.pending,(function(){return""})),Object(Mt.a)(Et,r.deleteContact.pending,(function(){return""})),Et)),Vt=Object(d.d)(!1,(Pt={},Object(Mt.a)(Pt,r.fetchContacts.pending,(function(){return!0})),Object(Mt.a)(Pt,r.addContact.pending,(function(){return!0})),Object(Mt.a)(Pt,r.deleteContact.pending,(function(){return!0})),Object(Mt.a)(Pt,r.fetchContacts.fulfilled,(function(){return!1})),Object(Mt.a)(Pt,r.addContact.fulfilled,(function(){return!1})),Object(Mt.a)(Pt,r.deleteContact.fulfilled,(function(){return!1})),Object(Mt.a)(Pt,r.fetchContacts.rejected,(function(){return!1})),Object(Mt.a)(Pt,r.addContact.rejected,(function(){return!1})),Object(Mt.a)(Pt,r.deleteContact.rejected,(function(){return!1})),Pt)),Zt=Object(At.b)({items:Rt,filter:zt,isLoading:Vt,error:Bt}),Dt=Object(d.a)({reducer:{contacts:Zt},devTools:!1});n(87),n(88);u.a.render(Object(z.jsx)(o.a.StrictMode,{children:Object(z.jsx)(l.a,{store:Dt,children:Object(z.jsx)(St,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={form:"Form_form__1Lykn",label:"Form_label__2MnAY",field:"Form_field__3Ljfi",invalid:"Form_invalid__244YJ",submit:"Form_submit__17Rpr",FieldIcon:"Form_FieldIcon__7pID0",AddIcon:"Form_AddIcon__3H2t9"}}},[[89,1,2]]]);
//# sourceMappingURL=main.98c70138.chunk.js.map