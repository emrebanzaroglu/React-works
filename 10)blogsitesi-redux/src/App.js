import React from "react";
import { Container } from "reactstrap";
import Header from ".//components/navi/Header";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import BlogDetails from "./components/blogsDetail/BlogDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/detail" element={<BlogDetails />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
