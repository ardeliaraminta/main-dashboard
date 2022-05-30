import './App.css';
import Maindash from './components/Dashboard/maindash';
import Sidebar from './components/Sidebar/Sidebar';
import Right from './components/Right/Right';
function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
        <Sidebar/> 
        <Maindash/>
        <Right/>
        <div></div>
      </div> 
    </div>
  );
}

export default App;
