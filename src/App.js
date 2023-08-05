
import './App.css';
import {Routes, Route} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Movies />}/>
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:id" element={<MovieDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
