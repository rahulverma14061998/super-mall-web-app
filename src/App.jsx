import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import NavBar from "./Components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Advertisement from "./Components/Advertisement/Advertisement";
import Trending from "./Components/Trending/Trending";
import StoreProvider, { Store } from "./Store/Store";
import Product from "./Components/Product/Product";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import SidebarMain from "./Components/SideBarMain/SideBarMain";

function App() {
  return (
    <StoreProvider>
      {/* <RegistrationForm/> */}
      {/* <LoginForm/> */}
      {/* <NavBar />
      <Advertisement />
      <Trending />
      <Product /> */}
      <AdminPanel/>
    </StoreProvider>
  );
}

export default App;
