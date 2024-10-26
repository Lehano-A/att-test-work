import React from 'react';

function Header() {
  return (
    <header className="header">

      <h1 className='header__title'>Setting</h1>

      <div className='header__controls'>
        <search>
          <form className='header__form-search'>
            <input className='header__input-search' placeholder='Search for something' />
            <button className='header__button-search'></button>
          </form>
        </search>

        <button className='header__button-control header__button-control_setting'></button>
        <button className='header__button-control header__button-control_notification'></button>
        <button className='header__button-control header__button-control_profile'></button>
      </div>

    </header>
  );
};

export default Header;