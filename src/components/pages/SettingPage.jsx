import React, { useState } from 'react';

import FormEditProfile from '../FormEditProfile/FormEditProfile';
import SubNavigation from '../SubNavigation/SubNavigation';

const links = [
  { name: 'Edit Profile', id: 'editProfileLink', href: 'edit-profile' },
  { name: 'Preference', id: 'preferenceLink', href: 'preference' },
  { name: 'Security', id: 'securityLink', href: 'security' },
];

function SettingPage() {
  const [currentSubSegment, setCurrentSubSegment] = useState('edit-profile');

  const handleOnClickLink = (e) => {
    e.preventDefault();

    const targetLink = links.find((item) => e.target.id === item.id);

    setCurrentSubSegment(targetLink.href);
  };

  return (
    <div className='setting-page'>
      <SubNavigation>
        <ul>
          {links.map((item) => {
            return (
              <li key={item.id}>
                <a
                  id={item.id}
                  href={item.href}
                  className={
                    currentSubSegment === item.href
                      ? 'sub-navigation__link_active'
                      : ''
                  }
                  onClick={handleOnClickLink}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </SubNavigation>

      <FormEditProfile />
    </div>
  );
}

export default SettingPage;
