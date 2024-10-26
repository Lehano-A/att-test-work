import React, { useEffect, useState } from 'react';
import Logo from '../../images/Components/Aside/logo.svg'

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
]


function DashboardSidebar() {

  const [currentLink, setCurrentLink] = useState('setting')

  useEffect(() => {
    window.history.replaceState(null, null, currentLink)
  }, [currentLink])


  const handleOnClick = (e) => {
    e.preventDefault();

    links.forEach((item) => {
      if (item.id === e.target.id) {
        window.history.pushState(null, null, item.href)
        setCurrentLink(item.href)
      }
    })
  }

  return (
    <aside className="dashboard-sidebar">

      <img src={Logo} alt="Логотип BankDash." className='dashboard-sidebar__logo' />

      <nav>
        <ul className='dashboard-sidebar__list'>

          {links.map((item) => (
            <li
              onClick={handleOnClick}
              key={item.name}
              className={`dashboard-sidebar__list-item ${currentLink === item.href ? 'dashboard-sidebar__list-item_active' : ''}`}
            >
              <a className={`dashboard-sidebar__link ${currentLink === item.href ? 'dashboard-sidebar__link_active' : ''}`} id={item.id} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}

        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;