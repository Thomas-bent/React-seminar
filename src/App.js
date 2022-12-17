import { Header } from "./Header";
import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./Homepage";
import { Beitraege } from "./Beitraege"
import {About } from "./About"
import { GesamtBeitrag } from "./GesamtBeitrag";
import {Impressum} from "./Impressum";
import {Backstage} from "./Backstage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Homepage /> }/>
        <Route path="/beitraege" element={ <Beitraege />} />
          <Route path="/backstage" element={ <Backstage /> }/>
        <Route path="/about" element={ <About /> } />
        <Route path="/lesen/:id" element={ <GesamtBeitrag /> } />
          <Route path="/impressum" element={ <Impressum /> } />
      </Routes>
        <Link to={ "/impressum" }><p style={{ marginBottom: "2vh", textAlign: "center" }}>@Impressum</p></Link>
    </div>
  );
}

export default App;
