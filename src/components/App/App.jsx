import React, { useEffect, useState } from 'react'
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {

  const [isSmallScreen, setIsSmallScreen] = useState(null)
  const [isHiddenDashboard, setIsHiddenDashboard] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.addEventListener('resize', handleResize)
  }, [])

  const changeVisibleDashboard = () => setIsHiddenDashboard(!isHiddenDashboard)


  return (
    <>
      {
        <Dashboard
          isSmallScreen={isSmallScreen}
          isHiddenDashboard={isHiddenDashboard}
          changeVisibleDashboard={changeVisibleDashboard}
        />
      }

      <div className={`app__major-box ${isSmallScreen && isHiddenDashboard === false ? 'app__major-box_hidden' : ''}`}>
        <Header
          isSmallScreen={isSmallScreen}
          changeVisibleDashboard={changeVisibleDashboard}
        />
        <Main />
      </div>
    </>
  );
}

export default App;