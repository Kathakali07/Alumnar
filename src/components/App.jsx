import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./navbar/navbar";
import CarouselBar from './carouselbar/carouselbar';
import EventSource from "./carouselbar/EventSource";
import SearchBox from './college_names/search'


function App() {
  return (
    <div>
      <Navbar />
      <CarouselBar events={EventSource} />
      <SearchBox/>
    </div>
  );
}

export default App;
