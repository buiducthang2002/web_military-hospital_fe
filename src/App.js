
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Doctors from './Components/Doctors/Doctors';

function App() {
  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <Banner />
      <Services />
      <Doctors />
    </div>
  );
}

export default App;
