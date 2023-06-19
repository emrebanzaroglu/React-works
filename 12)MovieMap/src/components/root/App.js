import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import FavoriteDetail from "../favorite/FavoriteDetail";
import AddOrUpdateMovie from "../movies/AddOrUpdateMovie";
import NotFound from "../common/NotFound";

function App() {

  var status = false;
  if (status == false) {
   
 }
  
  return (
    
    <Container>
     
        <Navi />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/movie" element={<Dashboard />} />
          <Route path="/savemovie/:movieId" element={<AddOrUpdateMovie />} />
          <Route path="/savemovie" element={<AddOrUpdateMovie />} />
          <Route path="/favorite" element={<FavoriteDetail />} />
          <Route element={NotFound} />
        </Routes>
      
    </Container>
  );
}

export default App;
