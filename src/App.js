import Data from "./Components/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Data />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
