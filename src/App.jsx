import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Banner } from "./components/Banner/Banner";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <ItemListContainer mensaje={"Encuentra las mejores ofertas"} />
    </div>
  );
}

export default App;
