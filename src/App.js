import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './pages/admin/Cartcontext';  // Giả sử CartProvider là context của bạn

// Import các component
import Homepage from "./pages/users/Homepage";
import MasterLayout from "./pages/users/theme/masterLayout";
import AboutUs from "./pages/users/About-us";
import Sign from "./pages/users/Sign";
import SlList from "./component/SlList";
import SplList from "./component/SplList";
import DlList from "./component/DlList";
import ProductDetail from "./component/PageProduct";
import Cartsave from "./pages/users/Cartsave";
import ContractUs from "./pages/users/Contract-us";
import FQA from "./pages/users/FQA";
import ClList from "./component/ClList";
import DecoList from "./component/Deco";
import FanList from "./component/Fan";
import OutList from "./component/Out";
import LamList from "./component/Lam";
import WallList from "./component/Wall";

// Định nghĩa ROUTERS
export const ROUTERS = {
  USER: {
    HOME: "/Homepage",
    ABOUTUS: "/About-us",
    SIGNFROMS: "/Log-in",
    DL: "/Decoration-Lights",
    SPL: "/Spot-Lights",
    SL: "/Smart-Lights",
    PAGEPRODUCT: "/products/:productLink",
    CARTSAVE: "/Shopping-cart",
    CONTRACTUS: "/Contract-us",
    FQA: "/Customer-Help",
    CL: "/Celling-lights",
    WALL: "/Wall-lights",
    LAM: "/Lamps",
    OUT: "/OutDoor-Lights",
    FANS: "/Fans",
    DECO: "/Home-Accents",
  }
};

// Định nghĩa renderUserRouter
const renderUserRouter = () => {
  const userRouter = [
    { path: ROUTERS.USER.HOME, component: <Homepage /> },
    { path: ROUTERS.USER.ABOUTUS, component: <AboutUs /> },
    { path: ROUTERS.USER.SIGNFROMS, component: <Sign /> },
    { path: ROUTERS.USER.DL, component: <DlList /> },
    { path: ROUTERS.USER.SL, component: <SlList /> },
    { path: ROUTERS.USER.SPL, component: <SplList /> },
    { path: ROUTERS.USER.PAGEPRODUCT, component: <ProductDetail /> },
    { path: ROUTERS.USER.CARTSAVE, component: <Cartsave /> },
    { path: ROUTERS.USER.CONTRACTUS, component: <ContractUs /> },
    { path: ROUTERS.USER.FQA, component: <FQA /> },
    { path: ROUTERS.USER.CL, component: <ClList /> },
    { path: ROUTERS.USER.WALL, component: <WallList /> },
    { path: ROUTERS.USER.LAM, component: <LamList /> },
    { path: ROUTERS.USER.OUT, component: <OutList /> },
    { path: ROUTERS.USER.FANS, component: <FanList /> },
    { path: ROUTERS.USER.DECO, component: <DecoList /> },
  ];

  return (
    <MasterLayout>
      <Routes>
        {userRouter.map((item, key) => (
          <Route key={key} path={item.path} element={item.component} />
        ))}
      </Routes>
    </MasterLayout>
  );
};

// Component RouterCustom
const RouterCustom = () => {
  return renderUserRouter();
};

// Component App
const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <RouterCustom />
      </BrowserRouter>
    </CartProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
