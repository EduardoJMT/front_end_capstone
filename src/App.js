import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment className="App">
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
