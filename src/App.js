import './App.css';
import Bonus from './component/Bonus/Bonus';
import Header from './component/Header/Header';
import Products from './component/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
