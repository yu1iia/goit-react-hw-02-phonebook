import React from 'react';

//styles
import s from './Filter.module.css';

const Filter = ({ onChange, value }) => (
  <label className={s.filter_label}>
    Filter
    <input
      className={s.filter_input}
      value={value}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      onChange={onChange}
    />
  </label>
);

export default Filter;
