import './App.css';
import Shirts from './Pages/Shirts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './Pages/Details';
import { BagProvider } from './Context/shoppingBag';

function App() {
  return (
   <>  
   <BagProvider>
    <Router>
        <Routes>
        <Route exact path="/" element={<Shirts/>}/>
        <Route exact path="/:productId"  element={<Details/>}  />
      </Routes>
        </Router>
        </BagProvider>
   </>
  );
}

export default App;
