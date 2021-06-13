import React, { Component } from 'react';

//components
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

//styles
import './App.css';

//npm
import shortid from 'shortid';

// import classNames from 'classnames';
// import { v4 as uuidv4 } from 'uuid';
// import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  formSubmitHandler = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;

    const newContact = {
      name,
      number,
      id: shortid.generate(),
    };

    const foundMatch = this.foundMatchedContact(contacts, newContact);

    if (foundMatch) {
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      }));
    }
  };
  //  this.reset();
  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  foundMatchedContact(contacts, newContact) {
    const match = contacts.some(contact => {
      return (
        contact.name === newContact.name || contact.number === newContact.number
      );
    });

    if (match) {
      alert(`${newContact.name} is already in contacts!`);
      return true;
    }
  }

  handleNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };
  handleNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleFilterContacts = ({ currentTarget }) => {
    this.setState({ filter: currentTarget.value });
  };

  handleDeleteContact = currentId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== currentId),
    }));
  };

  render() {
    const { contacts, filter, name, number } = this.state;

    const normalizeFilter = this.state.filter.toLocaleLowerCase();
    const addedContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter),
    );
    return (
      <div className="container">
        <h1 className="phonebookHeader">Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmitHandler}
          contactName={name}
          contactNumber={number}
          onChangeName={this.handleNameChange}
          onChangeNumber={this.handleNumberChange}
        />

        <h2 className="contactsHeader">Contacts</h2>
        <Filter value={filter} onChange={this.handleFilterContacts} />
        <ContactList
          addedContacts={addedContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}

export default App;
