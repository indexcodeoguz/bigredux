import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard"; 

function App() {
  return (
    <Container>
      <Navi />
      <Dashboard />
    </Container>
  );
}

export default App;
