import "./styles.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home"> Home Page </Link> <br />
        <Link to="/about"> About Page </Link> <br />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return <h1> This is the home page </h1>;
}

function About() {
  return <h1> This is about page </h1>;
}
