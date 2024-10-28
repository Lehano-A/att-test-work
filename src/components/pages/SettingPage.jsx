import React, { useState } from 'react';
import FormEditProfile from '../FormEditProfile/FormEditProfile';
import SubNavigation from '../SubNavigation/SubNavigation';

const PATHNAME = '/setting'

const links = [
  { name: "Edit Profile", id: "editProfileLink", href: "edit-profile" },
  { name: "Preferences", id: "preferencesLink", href: "preferences" },
  { name: "Security", id: "securityLink", href: "security" }
]

function SettingPage() {

  const [currentLink, setCurrentLink] = useState("edit-profile")

  const handleOnClickLink = (e) => {
    e.preventDefault()

    const targetLink = links.find((item) => (e.target.id === item.id))
    setCurrentLink(targetLink.href)

    window.history.pushState(null, null, `${PATHNAME}/${targetLink.href}`)
  }

  return (
    <div className='setting'>

      <SubNavigation>
        <ul >
          {
            links.map((item) => {
              return <li key={item.id}>
                <a
                  id={item.id}
                  href={item.href}
                  className={currentLink === item.href ? "sub-navigation__link_active" : ""}
                  onClick={handleOnClickLink}
                >
                  {item.name}
                </a>
              </li>
            })
          }
        </ul>
      </SubNavigation>

      <FormEditProfile />
    </div>
  );
};

export default SettingPage;