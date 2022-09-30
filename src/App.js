import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import { HomePage, NotFoundPage , Menue , Dashboard } from './pages'

const Login = () => <div>login</div>;

function App() {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="Menue" element={<Menue />} />
      <Route path="Dashboard" element={<Dashboard />} />


      <Route path="*" element={<NotFoundPage />} />
   
    </Routes>
      
  );
}

export default App;
