import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.scss';
import Header from './components/Header';
import CarouselComponent from './pages/CarouselComponent';
import About from './pages/About';
import Detail from './pages/Detail';
import DonationGrid from './pages/DonationGrid';
import Volunteer from './pages/Volunteer';
// import Router from './routes/Router'

function App() {

  return (
    <div>
      <Header/>
      <CarouselComponent/>
      <About/>
      <Detail/>
      <DonationGrid/>
      <Volunteer/>
    </div>
  )
}

export default App
