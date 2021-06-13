import React from 'react';

//styles
import s from './ContactList.module.css';

const ContactList = ({ addedContacts, onDeleteContact }) => (
  <ul className={s.users}>
    {addedContacts.map(({ name, id, number }) => (
      <li className={s.userInfo} key={id}>
        <p>
          {name} : {number}
        </p>
        <button
          className={s.removeContactButton}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ContactList;
