import Landing from "./components/Landing";
// import Postview from "./components/Postview"
import Showpost from "./components/Showpost";

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Postupload from "./components/Postupload";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/Showpost" element={<Showpost />} />
          <Route path="/Showpost/Postupload" element={<Postupload />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
