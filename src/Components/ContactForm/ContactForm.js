import React from 'react';
import PropTypes from 'prop-types';

//styles
import s from './ContactForm.module.css';

const ContactForm = ({
  state = {
    name: '',
    number: '',
  },

  onSubmit,
  onChangeNumber,
  onChangeName,
  nameContact,
  numberContact,
}) => (
  <form onSubmit={onSubmit}>
    <label className={s.form_label}>
      Name
      <input
        className={s.form_input}
        type="text"
        name="name"
        value={nameContact}
        onChange={onChangeName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
    <label className={s.form_label}>
      Number
      <input
        className={s.form_input}
        type="tel"
        name="number"
        value={numberContact}
        onChange={onChangeNumber}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />
    </label>
    <button className={s.addButton}>Add contacts</button>
  </form>
);

// eslint-disable-next-line react/no-typos
ContactForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
