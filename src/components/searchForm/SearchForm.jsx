import React from 'react';
import { useForm } from 'react-hook-form';
import s from './seachForm.module.css';
import Change from './../../images/change.svg';

export const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className={s.formContainer}>
      <form className={s.form}>
        <div className={s['form-group']}>
          <p>Направление</p>
          <div className={s['form-group-inputs']}>
            <input type='text' />
            <img
              src={Change}
              alt='Поменять местами'
              className={s['form-group-icon']}
            />
            <input type='text' />
          </div>
        </div>
        <div className={s['form-group']}>
          <p>Дата</p>
          <div className={s['form-group-inputs-date']}>
            <input type='date' /> <input type='date' />
          </div>
        </div>
        <button className={s['form-button']}>найти билеты</button>
      </form>
    </div>
  );
};
