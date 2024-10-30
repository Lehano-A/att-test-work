import React from 'react';

import avatarProfile from '../../images/Components/Header/avatar.png';

function Header({ isSmallScreen, changeVisibleDashboard }) {
  return (
    <header className='header'>
      {isSmallScreen && (
        <button
          className='header__button-menu'
          onClick={changeVisibleDashboard}
        />
      )}
      <h1 className='header__title'>Setting</h1>

      <search className='header__search'>
        <form className='header__form-search'>
          <input
            className='header__input-search'
            placeholder='Search for something'
          />
          <button className='header__button-search' />
        </form>
      </search>

      <div className='header__box-controls'>
        <button className='header__item-control header__item-control_setting' />
        <button className='header__item-control header__item-control_notification' />

        <button
          className='header__item-control header__item-control_profile'
          href='profile'
        >
          <img
            src={avatarProfile}
            alt='Изображение профиля пользователя'
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
