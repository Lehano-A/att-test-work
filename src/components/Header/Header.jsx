import React from 'react';
import avatarProfile from '../../images/Components/Header/avatar.png';

function Header() {
  return (
    <header className="header">
      <h1 className='header__title'>Setting</h1>

      <div className='header__panel-controls'>
        <search>
          <form className='header__form-search'>
            <input className='header__input-search' placeholder='Search for something' />
            <button className='header__button-search' />
          </form>
        </search>

        <button className='header__item-control header__item-control_setting' />
        <button className='header__item-control header__item-control_notification' />

        <a className='header__item-control header__item-control_profile' href="profile">
          <img src={avatarProfile} alt="Изображение профиля пользователя" />
        </a>
      </div>

    </header>
  );
};

export default Header;