import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import P2 from './pages/p2'
// import PrivateRoute from './routes/PrivateRoute';
// import ProtectedRoutes from './routes/ProtectedRoutes';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/p2' element={<P2 />} />
      
      {/* <Route path='/' element={<Layout/>}>
        <Route path='*' element={
          <PrivateRoute>
            <ProtectedRoutes />
          </PrivateRoute>} 
          />
      </Route> */}
      
    </Routes>
  );
}

export default App;
