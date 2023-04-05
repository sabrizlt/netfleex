import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TvShows from './components/TvShows';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const potter = "harry%20potter";
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <Routes>
          <Route path='/TvShow' element={<TvShows mySaga={potter} name="Harry Potter" />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path="/movie-details/:id" element={<MovieDetails />}></Route>
      </Routes>
      <Footer />

    </div>
    </BrowserRouter>
  );
}

export default App;