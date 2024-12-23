import { Routes, Route } from "react-router-dom";
import { ROUTERS } from "./utils/router";
import Homepage from "./pages/users/Homepage";
import MasterLayout from "./pages/users/theme/masterLayout";
import AboutUs from "./pages/users/About-us";
import Sign from "./pages/users/Sign";
import SlList from "./component/SlList";
import SplList from "./component/SplList";
import DlList from "./component//DlList";
import ProductDetail from "./component/PageProduct";
import Cartsave from "./pages/users/Cartsave";
import ContractUs from "./pages/users/Contract-us";
import FQA from "./pages/users/FQA";
import ClList from "./component/ClList";
import DecoList from "./component/DecoList";
import FanList from "./component/FanList";
import OutList from "./component/OutList";
import LamList from "./component/LamList";
import WallList from "./component/WallList";
import Create from "./pages/Create";


const renderUserRouter =()=> {
    const userRouter =[
        {
            path: ROUTERS.USER.HOME,
            component: <Homepage/>,
        },
        {
            path: ROUTERS.USER.ABOUTUS,
            component: <AboutUs/>,
        },
        {
            path: ROUTERS.USER.SIGNFROMS,
            component: <Sign/>,
        },
        {
            path: ROUTERS.USER.DL,
            component: <DlList/>,
        },{
            path: ROUTERS.USER. SL,
            component: <SlList/>,
        },{
            path: ROUTERS.USER.SPL,
            component: <SplList/>,
        },
        {
            path: ROUTERS.USER. PAGEPRODUCT,
            component: <ProductDetail/>,
        },
        {
            path: ROUTERS.USER.CARTSAVE,
            component: <Cartsave/>,
        },
        {
            path: ROUTERS.USER.CONTRACTUS,
            component: <ContractUs/>,
        },
        {
            path: ROUTERS.USER.FQA,
            component: <FQA/>,
        },
        {
            path: ROUTERS.USER.CL,
            component: <ClList/>,
        },
        {
            path: ROUTERS.USER.WALL,
            component: <WallList/>,
        },
        {
            path: ROUTERS.USER.LAM,
            component: <LamList/>,
        },
        {
            path: ROUTERS.USER.OUT,
            component: <OutList/>,
        },
        {
            path: ROUTERS.USER.FANS,
            component: <FanList/>,
        },
        {
            path: ROUTERS.USER.DECO,
            component: <DecoList/>,
        },
        {
            path: ROUTERS.USER. CREATE,
            component: <Create/>,
        },
    ]
    return(
        <MasterLayout>
    <Routes>
        {
            userRouter.map((item,key)=>(
            <Route key={key} path={item.path} element={item.component}/>
))}
    </Routes>
    </MasterLayout>
    )
}

const RouterCustom = () =>{
    return renderUserRouter() ;
}
export default RouterCustom;


