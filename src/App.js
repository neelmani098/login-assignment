import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes/MainRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';


// this is not needed

function App() {
  return (
    // <BrowserRouter>
    //   <MainRoutes/>
    // </BrowserRouter>
    <>
      <div>Hello</div>
      <Dashboard/>
      <Login/>
    </>
  );
}

export default App;
