import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footerone from './Components/FooterOne';
import Index from './pages/Index';
import LargeNav from './Components/LargeNav';

function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <LargeNav/>
      <Index/>
      <Footerone/>  
    </div>
  );
}
export default App;
