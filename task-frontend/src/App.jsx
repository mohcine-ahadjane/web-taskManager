import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import OAuth2RedirectHandler from './components/OAuth2RedirectHandler';
import Login from './components/Login';
import Navbar from './components/navbar';



function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container">
        <h1>Task Manager</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<TaskList />} />
          <Route path="/add" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
          <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
