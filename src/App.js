// import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Codeforinterview from './Component/Codeforinterview'
import Allusers from './Component/Allusers';
import Addusers from './Component/Addusers';
import EditUsers from './Component/EditUsers'
import Notefound from './Component/Notefound';



import {BrowserRouter,Routes,Route,} from 'react-router-dom';





function App() {
  return (
    <BrowserRouter>


    <div className="App"> 
    <Navbar />
    <Notefound />
    <>

    <Routes>

   
    <Route exact path='/' element={<Codeforinterview />} />
    <Route exact path='/Allusers' element={<Allusers />} />
    <Route exact path='/Addusers' element={<Addusers />} />
    <Route exact path="/EditUsers/:id" element={<EditUsers />} />
    <Route element={Notefound} />




    </Routes>

    </>

    
  

   

    </div>
    </BrowserRouter>
    

  );
}

export default App;
