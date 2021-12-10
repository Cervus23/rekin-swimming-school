import Header from "./containers/Header";
import Banner from "./components/Banner";
import Offer from "./components/Offer";
import Gallery from "./components/Gallery";
import Footer from "./containers/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Offer />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
