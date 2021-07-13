import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import UserPage from './pages/UserPage';
import ProjectManagerViewTask from './components/ProjectManagerPage/ProjectManagerViewTask';
import CreateTask from './components/ProjectManagerPage/CreateTask/CreateTask'
import NavBar from './components/NavBar/NavBar'
import BottomNavBar from './components/BottomNavBar/BottomNavBar'
function App() {
  return (
    <Router>
      <NavBar />
      <BottomNavBar />
      <Switch>
        <Route path="/creatTask">
          <CreateTask />
        </Route>
        <Route path="/PmViewTask">
          <ProjectManagerViewTask />
        </Route>
        <Route path="/userPage">
          <UserPage />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
