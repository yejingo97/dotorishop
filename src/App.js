import { isMobile } from 'react-device-detect';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MobileRoot from './Mobile/MobilePages/MobileRoot';
import NotFound from './Pages/NotFound';
import MobileHome from './Mobile/MobilePages/MobileHome';
import Root from './Pages/Root';
import Home from './Pages/Home';
import SubProductsList from './Pages/SubProductsList';
import SubProductDetail from './Pages/SubProductDetail';

function App() {
    let router=null
    if(isMobile){
        router=createBrowserRouter(
            [
                {
                    path:'/',
                    element:<MobileRoot/>,
                    errorElement:<NotFound/>,
                    children:[
                        {index:true, element:<MobileHome/>}
                    ]
                }
            ]
        )
    }else{
        router=createBrowserRouter(
            [
                {
                    path:'/',
                    element:<Root/>,
                    errorElement:<NotFound/>,
                    children:[
                        {index:true, element:<Home/>},
                        {path:'/productslist', element:<SubProductsList/>},
                        {path:'/productslist/:productId', element:<SubProductDetail/>}
                    ]
                }
            ]
        )
    }
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
