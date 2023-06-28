import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './Components/Add';
import Read from './Components/Read';
import Update from './Components/Update';
import{BrowserRouter,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div>
    <BrowserRouter>  
      <Routes>
        <Route path = '/' element = {<Add/>}></Route>
        <Route path = '/Read' element = {<Read/>}></Route>
        <Route path = '/Update' element = {<Update/>}></Route>
      </Routes>
       </BrowserRouter>

    </div>
  );
}

export default App;
