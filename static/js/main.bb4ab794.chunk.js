(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(e,t,n){},2:function(e,t,n){e.exports={form_input:"ContactForm_form_input__qBDKi",form_label:"ContactForm_form_label__2-BC1",addButton:"ContactForm_addButton__BbzCX"}},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),o=n.n(c),s=(n(19),n(8)),i=n(12),u=n(9),l=n(10),m=n(14),d=n(13),b=n(2),h=n.n(b),f=n(0),C=function(e){e.state;var t=e.onSubmit,n=e.onChangeNumber,a=e.onChangeName,r=e.nameContact,c=e.numberContact;return Object(f.jsxs)("form",{onSubmit:t,children:[Object(f.jsxs)("label",{className:h.a.form_label,children:["Name",Object(f.jsx)("input",{className:h.a.form_input,type:"text",name:"name",value:r,onChange:a,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{className:h.a.form_label,children:["Number",Object(f.jsx)("input",{className:h.a.form_input,type:"tel",name:"number",value:c,onChange:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{className:h.a.addButton,children:"Add contacts"})]})},j=n(4),_=n.n(j),p=function(e){var t=e.addedContacts,n=e.onDeleteContact;return Object(f.jsx)("ul",{className:_.a.users,children:t.map((function(e){var t=e.name,a=e.id,r=e.number;return Object(f.jsxs)("li",{className:_.a.userInfo,children:[Object(f.jsxs)("p",{children:[t," : ",r]}),Object(f.jsx)("button",{className:_.a.removeContactButton,type:"button",onClick:function(){return n(a)},children:"Delete"})]},a)}))})},v=n(6),x=n.n(v),O=function(e){var t=e.onChange,n=e.value;return Object(f.jsxs)("label",{className:x.a.filter_label,children:["Filter",Object(f.jsx)("input",{className:x.a.filter_input,value:n,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",onChange:t})]})},N=(n(21),n(11)),g=n.n(N),S=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",number:"",filter:""},e.formSubmitHandler=function(t){t.preventDefault();var n=e.state,a=n.contacts,r={name:n.name,number:n.number,id:g.a.generate()};e.foundMatchedContact(a,r)||e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(i.a)(t))}}))},e.handleNameChange=function(t){e.setState({name:t.currentTarget.value})},e.handleNumberChange=function(t){e.setState({number:t.currentTarget.value})},e.handleChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(s.a)({},a,r))},e.handleFilterContacts=function(t){var n=t.currentTarget;e.setState({filter:n.value})},e.handleDeleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"foundMatchedContact",value:function(e,t){if(e.some((function(e){return e.name===t.name||e.number===t.number})))return alert("".concat(t.name," is already in contacts!")),!0}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=e.name,r=e.number,c=this.state.filter.toLocaleLowerCase(),o=t.filter((function(e){return e.name.toLocaleLowerCase().includes(c)}));return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h1",{className:"phonebookHeader",children:"Phonebook"}),Object(f.jsx)(C,{onSubmit:this.formSubmitHandler,contactName:a,contactNumber:r,onChangeName:this.handleNameChange,onChangeNumber:this.handleNumberChange}),Object(f.jsx)("h2",{className:"contactsHeader",children:"Contacts"}),Object(f.jsx)(O,{value:n,onChange:this.handleFilterContacts}),Object(f.jsx)(p,{addedContacts:o,onDeleteContact:this.handleDeleteContact})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={users:"ContactList_users__1LxCH",removeContactButton:"ContactList_removeContactButton__1ok1u",userInfo:"ContactList_userInfo__2AVME"}},6:function(e,t,n){e.exports={filter_input:"Filter_filter_input__lmi-y",filter_label:"Filter_filter_label__f2t8t"}}},[[30,1,2]]]);
//# sourceMappingURL=main.bb4ab794.chunk.js.map