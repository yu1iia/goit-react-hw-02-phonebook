(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(e,t,n){},24:function(e,t,n){},3:function(e,t,n){e.exports={form_input:"ContactForm_form_input__qBDKi",form_label:"ContactForm_form_label__2-BC1",addButton:"ContactForm_addButton__BbzCX"}},33:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(8),c=n.n(o),i=(n(20),n(9)),s=n(13),u=n(10),l=n(11),m=n(15),d=n(14),b=n(2),f=n.n(b),h=n(3),C=n.n(h),j=n(0),p=function(e){e.state;var t=e.onSubmit,n=e.onChangeNumber,a=e.onChangeName,r=e.nameContact,o=e.numberContact;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("label",{className:C.a.form_label,children:["Name",Object(j.jsx)("input",{className:C.a.form_input,type:"text",name:"name",value:r,onChange:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{className:C.a.form_label,children:["Number",Object(j.jsx)("input",{className:C.a.form_input,type:"tel",name:"number",value:o,onChange:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{className:C.a.addButton,children:"Add contacts"})]})};p.PropTypes={onSubmit:f.a.func.isRequired};var _=p,v=n(5),g=n.n(v),x=function(e){var t=e.addedContacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{className:g.a.users,children:t.map((function(e){var t=e.name,a=e.id,r=e.number;return Object(j.jsxs)("li",{className:g.a.userInfo,children:[Object(j.jsxs)("p",{children:[t," : ",r]}),Object(j.jsx)("button",{className:g.a.removeContactButton,type:"button",onClick:function(){return n(a)},children:"Delete"})]},a)}))})};x.prototype={onDeleteContact:f.a.func.isRequired};var O=x,N=n(7),y=n.n(N),S=function(e){var t=e.onChange,n=e.value;return Object(j.jsxs)("label",{className:y.a.filter_label,children:["Filter",Object(j.jsx)("input",{className:y.a.filter_input,value:n,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:t})]})};S.prototype={value:f.a.string,onChange:f.a.func.isRequired};var A=S,B=(n(24),n(12)),k=n.n(B),z=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",number:"",filter:""},e.formSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.contacts,r={name:n.name,number:n.number,id:k.a.generate()};e.foundMatchedContact(a,r)||e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(s.a)(t))}}))},e.handleNameChange=function(t){e.setState({name:t.currentTarget.value})},e.handleNumberChange=function(t){e.setState({number:t.currentTarget.value})},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(i.a)({},a,r))},e.handleFilterContacts=function(t){var n=t.currentTarget;e.setState({filter:n.value})},e.handleDeleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"foundMatchedContact",value:function(e,t){if(e.some((function(e){return e.name===t.name||e.number===t.number})))return alert("".concat(t.name," is already in contacts!")),!0}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=e.name,r=e.number,o=this.state.filter.toLocaleLowerCase(),c=t.filter((function(e){return e.name.toLocaleLowerCase().includes(o)}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"phonebookHeader",children:"Phonebook"}),Object(j.jsx)(_,{onSubmit:this.formSubmitHandler,contactName:a,contactNumber:r,onChangeName:this.handleNameChange,onChangeNumber:this.handleNumberChange}),Object(j.jsx)("h2",{className:"contactsHeader",children:"Contacts"}),Object(j.jsx)(A,{value:n,onChange:this.handleFilterContacts}),Object(j.jsx)(O,{addedContacts:c,onDeleteContact:this.handleDeleteContact})]})}}]),n}(a.Component);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={users:"ContactList_users__1LxCH",removeContactButton:"ContactList_removeContactButton__1ok1u",userInfo:"ContactList_userInfo__2AVME"}},7:function(e,t,n){e.exports={filter_input:"Filter_filter_input__lmi-y",filter_label:"Filter_filter_label__f2t8t"}}},[[33,1,2]]]);
//# sourceMappingURL=main.2080e28c.chunk.js.map