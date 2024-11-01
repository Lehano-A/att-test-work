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
        />
        <button
          className='form-edit-profile__button-edit-avatar'
          type='button'
        />
      </div>

      <div className='form-edit-profile__inputs-box'>
        <label>
          Your Name
          <input defaultValue='Charlene Reed' />
        </label>

        <label>
          User Name
          <input defaultValue='Charlene Reed ' />
        </label>

        <label>
          Email
          <input defaultValue='charlenereed@gmail.com' />
        </label>

        <label>
          Password
          <input
            defaultValue='**********'
            type='password'
            autoComplete='on'
          />
        </label>

        <label>
          Date of Birth
          <select>
            <option value='25 January 1990'>25 January 1990</option>
          </select>
        </label>

        <label>
          Present Address
          <input defaultValue='San Jose, California, USA' />
        </label>

        <label>
          Permanent Address
          <input defaultValue='San Jose, California, USA' />
        </label>

        <label>
          City
          <input defaultValue='San Jose' />
        </label>

        <label>
          Postal Code
          <input defaultValue='45962' />
        </label>

        <label>
          Country
          <input defaultValue='USA' />
        </label>
      </div>
    </Form>
  );
}

export default FormEditProfile;
