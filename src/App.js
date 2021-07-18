import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import UserPage from './pages/UserPage';
import ProposalPageBanner from './components/UserPageContent/ProposalPage/ProposalPageBanner'
import ProjectManagerViewTask from './components/ProjectManagerPage/ProjectManagerViewTask';
import ProjectManagerCreateTask from './pages/ProjectManagerCreateTask'
import PmApprovedProposal from './pages/PmApprovedProposal'

import NavBar from './components/NavBar/NavBar'
import BottomNavBar from './components/BottomNavBar/BottomNavBar'
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {

  const [search, setSearch] = useState({});
  return (
    <UserContext.Provider value={{ search, setSearch }}>
      <Router>
        <NavBar />
        <BottomNavBar />
        <Switch>
          <Route path="/createProposal">
            <UserPage />
          </Route>
          <Route path="/pmApprovedProposal/:id">
            <ProjectManagerCreateTask />
          </Route>
          <Route path="/pmApprovedProposal">
            <PmApprovedProposal />
          </Route>
          <Route path="/PmViewTask">
            <ProjectManagerViewTask />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
