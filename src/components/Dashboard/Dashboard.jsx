import React, { useState } from 'react';

import Logo from '../../images/Components/Aside/logo.svg';

const links = [
  { name: 'Dashboard', id: 'dashboardLink', href: 'dashboard' },
  { name: 'Transactions', id: 'transactionsLink', href: 'transactions' },
  { name: 'Accounts', id: 'accountsLink', href: 'accounts' },
  { name: 'Investments', id: 'investmentsLink', href: 'investments' },
  { name: 'Credit Cards', id: 'creditCardsLink', href: 'credit-cards' },
  { name: 'Loans', id: 'loansLink', href: 'loans' },
  { name: 'Services', id: 'servicesLink', href: 'services' },
  { name: 'My Privileges', id: 'myPrivilegesLink', href: 'my-previleges' },
  { name: 'Setting', id: 'settingLink', href: 'setting' },
];

function Dashboard({
  isSmallScreen,
  isHiddenDashboard,
  changeVisibleDashboard,
}) {
  const [sidebarSegment, setSidebarSegment] = useState('setting');

  const handleOnClickListItem = (e) => {
    e.preventDefault();

    links.find((item) => {
      if (item.id === e.target.id) {
        setSidebarSegment(item.href);
      }
    });
  };

  return (
    <aside
      className={`dashboard ${isSmallScreen && isHiddenDashboard ? 'dashboard_hidden' : ''}`}
    >
      <div className='dashboard__wrapper'>
        <img
          src={Logo}
          alt='Логотип BankDash.'
          className='dashboard__logo'
        />

        {isSmallScreen && (
          <button
            className='dashboard__button-close'
            onClick={changeVisibleDashboard}
          />
        )}

        <nav>
          <ul className='dashboard__list'>
            {links.map((item) => (
              <li
                onClick={handleOnClickListItem}
                key={item.name}
                className={`dashboard__list-item ${sidebarSegment === item.href ? 'dashboard__list-item_active' : ''}`}
              >
                <a
                  className={`dashboard__link ${sidebarSegment === item.href ? 'dashboard__link_active' : ''}`}
                  id={item.id}
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Dashboard;
