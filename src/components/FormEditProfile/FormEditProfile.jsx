import React from 'react';

import avatarImage from '../../images/avatar.jpg';
import Form from '../Form/Form';

function FormEditProfile() {
  return (
    <Form className='form-edit-profile'>
      <div className='form-edit-profile__avatar-box'>
        <img
          className='form-edit-profile__avatar'
          src={avatarImage}
        ></img>
        <button
          className='form-edit-profile__button-edit-avatar'
          type='button'
        />
      </div>

      <div className='form-edit-profile__inputs-box'>
        <label id='yourName'>
          Your Name
          <input defaultValue='Charlene Reed' />
        </label>

        <label id='email'>
          Email
          <input defaultValue='charlenereed@gmail.com' />
        </label>

        <label id='dateOfBirth'>
          Date of Birth
          <select>
            <option value='25 January 1990'>25 January 1990</option>
          </select>
        </label>

        <label id='permanentAddress'>
          Permanent Address
          <input defaultValue='San Jose, California, USA' />
        </label>

        <label id='postalCode'>
          Postal Code
          <input defaultValue='45962' />
        </label>

        <label id='userName'>
          User Name
          <input defaultValue='Charlene Reed ' />
        </label>

        <label id='password'>
          Password
          <input
            defaultValue='**********'
            type='password'
            autoComplete='on'
          />
        </label>

        <label id='presentAddress'>
          Present Address
          <input defaultValue='San Jose, California, USA' />
        </label>

        <label id='city'>
          City
          <input defaultValue='San Jose' />
        </label>

        <label id='country'>
          Country
          <input defaultValue='USA' />
        </label>
      </div>
    </Form>
  );
}

export default FormEditProfile;
