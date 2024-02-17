import React from 'react';
import ProfilePage from './pages/ProfilePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MembershipComponent from './components/MembershipComponent';
import PointsHistoryComponent from './components/PointsHistoryComponent';
import BadgesComponent from './components/BadgesComponent';
import './styles/App.css';

export const server = "https://staging.questprotocol.xyz/api";

const App = () => {
  return (
    <>
      <Router>

        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<ProfilePage />} />
          <Route path='/membership' element={<MembershipComponent />} />
          <Route path='/badges' element={<BadgesComponent />} />
          <Route path='/pointHistory' element={<PointsHistoryComponent />} />
          {/* <Route path='/profile' element={<ProfilePage />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App