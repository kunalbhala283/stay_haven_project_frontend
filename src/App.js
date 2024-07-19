import './App.css';
import {Home,SingleHotelPage} from "./pages"
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotelPage/>}/>
      
     </Routes>
  );
}

export default App;
