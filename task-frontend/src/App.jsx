// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TaskList from './components/TaskList';
// import TaskForm from './components/TaskForm';

// function App() {
//   return (
//     <Router>
//       <div className="container">
//         <h1>Task Manager</h1>
//         <Routes>
//           <Route path="/" element={<TaskList />} />
//           <Route path="/add" element={<TaskForm />} />
//           <Route path="/edit/:id" element={<TaskForm />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import Login from './components/Login';
import OAuth2RedirectHandler from './components/OAuth2RedirectHandler';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
          </Routes>
        </Router>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
