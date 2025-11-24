import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Componenet_01 from './STYLING/01Basic';
import Componenet_02 from './STYLING/02Scss';
import Component_03 from './STYLING/03BootStrap';

function App() {
  return (
    <div className="App">
      <h1>09 스타일링</h1>

      <Componenet_01 />
      <hr />
      <Componenet_02 />
      <hr />
      <Component_03 />
    </div>
  );
}

export default App;
