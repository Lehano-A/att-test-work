import React from 'react';

function Form({ children, className }) {
  return (
    <>
      <form id="form" className={`form ${className}`}>
        {children}
      </form>

      <button className='form__button-submit' form="form" >Save</button>
    </>
  );
};

export default Form;