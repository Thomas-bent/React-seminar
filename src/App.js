import { Header } from "./Header";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Beitraege } from "./Beitraege"
import {About } from "./About"
import { GesamtBeitrag } from "./GesamtBeitrag";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Homepage /> }/>
        <Route path="/beitraege" element={ <Beitraege />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/lesen/:id" element={ <GesamtBeitrag /> } />
      </Routes>
    </div>
  );
}

export default App;
