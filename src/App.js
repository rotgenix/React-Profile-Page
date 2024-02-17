import React from 'react';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css';
import Loader from './components/Loader';

export const server = "https://staging.questprotocol.xyz/api";

const App = () => {
  return (
    <>
      <Router>

        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<ProfilePage />} />
          <Route path='/loader' element={<Loader />} />
          {/* <Route path='/badges' element={<BadgesComponent />} />
          <Route path='/pointHistory' element={<PointsHistoryComponent />} /> */}
          {/* <Route path='/profile' element={<ProfilePage />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App