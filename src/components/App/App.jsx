import React from 'react'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {

  return (
    <>
      <DashboardSidebar />

      <div>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;