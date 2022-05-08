import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Inventory from './pages/Inventory/Inventory';
import ManageInventories from './pages/ManageItems/ManageInventories/ManageInventories';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory' element={<ManageInventories></ManageInventories>}></Route>
      </Routes>
    </div>
  );
}

export default App;
