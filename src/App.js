import './App.css';
import LayoutDefault from './components/Layout/LayoutDefault';
import { Login } from './components/Login/Login';
import ProcessList from './components/ProcessList/ProcessList';

function App() {
  return (
    <div className="App">
      <div className='login-container'>
        {/* <Login /> */}
        {/* <ProcessList /> */}
        <LayoutDefault />
      </div>

    </div>
  );
}

export default App;
