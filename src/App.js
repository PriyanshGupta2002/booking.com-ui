import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home';
// import Hotel from './pages/hotel/Hotel';

import List from './pages/list/List';
import Motel from './pages/motel/Motel';
function App() {
  return (
    <Routes>
      <Route  exact path='/' element={<Home/>} />
      <Route  exact path='/hotels' element={<List/>} />
     <Route exact path ='/hotels/:id' element={<Motel/>}/>
    </Routes>
  );
}

export default App;
