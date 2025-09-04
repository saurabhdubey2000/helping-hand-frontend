import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/global.scss';
import Header from './components/Header';
import CarouselComponent from './pages/CarouselComponent';
import About from './pages/About';
import Detail from './pages/Detail';
import DonationGrid from './pages/DonationGrid';
import Volunteer from './pages/Volunteer';
import Footer from './components/Footer';
import Router from './routes/Router';
// import Router from './routes/Router'

function App() {

  return (
    <div>
      {/* <Header/>
      <CarouselComponent/>
      <About/>
      <Detail/>
      <DonationGrid/>
      <Volunteer/>
      <Footer/> */}
      <Router/>
    </div>
  )
}

export default App
